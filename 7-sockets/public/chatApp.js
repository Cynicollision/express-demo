(() => {
    var socket = io.connect('http://localhost:3000');
    
    socket.on('receive', data => {
        var messagesElement = document.getElementById('messageList');
        var formattedMessage = formatChatMessage(data);

        messagesElement.value += formattedMessage + '\n';
    });
    
    window.sendChatMessage = () => {
        var messageElement = document.getElementById('message');
        var sender = document.getElementById('username').value;

        var messageText = messageElement.value;
        messageElement.value = '';
    
        socket.emit('send', { messageText: messageText, sender: sender });
    };

    function formatChatMessage(data) {
        var time = new Date().toTimeString();
        var now = time.substr(0, time.indexOf(' '));

        return `${now} [${data.sender}] ${data.messageText}`;
    }
})();
