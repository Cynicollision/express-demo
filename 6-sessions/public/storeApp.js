window.addItemToCart = (sku) => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/addToCart');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      
    xhr.send('sku=' + sku);
    xhr.onreadystatechange = () => {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert('Added to the cart.');
        }
    };
};
