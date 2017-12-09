var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

// configure middleware
app.use(morgan('dev'));

app.use(session({
    secret: 'wmdtug',
    resave: false,
    saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({ 
    extended: true
})); 

// define a model
var ShopItem = mongoose.model('ShopItem', mongoose.Schema({
    sku: { type: Number },
    description: { type: String },
}));

// serve static content
app.use('/public', express.static(__dirname + '/public'));

// configure view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// configure routes
app.post('/addToCart', (req, res) => {
    var session = req.session; // provided by express-session middleware
    var body = req.body; // provided by body-parser middleware

    if (!req.session.cart) {
        req.session.cart = {};
    }

    if (!req.session.cart[body.sku]) {
        req.session.cart[body.sku] = 0;
    }

    req.session.cart[body.sku]++;

    res.send(200);
});

app.get('/checkout', (req, res) => {
    var cart = req.session.cart;

    ShopItem.find({}, (err, catalogItems) => {
    
        if (err) {
            res.send(500, err);
        }
        else {
            var cartItems = [];

            catalogItems.forEach(item => {

                if (cart && cart[item.sku]) {

                    cartItems.push({
                        sku: item.sku,
                        description: item.description,
                        quantity: cart[item.sku],
                    });
                }
            });

            res.render('checkout', { cart: cartItems });
        }
    });
});

// define index route
app.get('/', (req, res) => {
    
    ShopItem.find({}, (err, catalogItems) => {

        if (err) {
            res.send(500, err);
        }
        else {
            res.render('index', { catalog: catalogItems });
        }
    });
});

// define default route
app.get('*', (req, res) => {
    res.send(404);
});

// connect to mongoDB
mongoose.connect('mongodb://dummy:hAcKm3@localhost:27017/demo', { useMongoClient: true });
mongoose.connection.once('open', () => {
    console.log('Connected to demo db');
});

// start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

// create some default items
// ShopItem.remove({}, (err,removed) => {
//     [
//         new ShopItem({ sku: 100, description: 'Bicycle' }),
//         new ShopItem({ sku: 200, description: 'Stuffed Doll' }),
//         new ShopItem({ sku: 300, description: 'Handy Wrench' }),
//         new ShopItem({ sku: 400, description: 'Yo-Yo' }),
//     ].forEach(item => item.save());
// });
