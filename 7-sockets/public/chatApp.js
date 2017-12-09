(() => {
    var socket = io.connect('http://localhost:3000');
    
    socket.on('receive', function (data) {
        var formattedMessage = `[${data.sender}] ${data.messageText}`;
        var messagesElement = document.getElementById('messageList');

        messagesElement.value += formattedMessage + '\n';
    });
    
    window.sendChatMessage = () => {
        var messageElement = document.getElementById('message');
        var sender = document.getElementById('username').value;

        var messageText = messageElement.value;
        messageElement.value = '';
    
        socket.emit('send', { messageText: messageText, sender: sender });
    };
})();
