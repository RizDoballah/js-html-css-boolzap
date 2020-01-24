$(document).ready(
  function() {
    $('#send').click(
      function() {
      sendMessage();
      }
    );
  }
);


// Functions
function sendMessage() {
  var message = $('#chat-box').val();
  if (message.length != 0) {
    var newMessage = $('.template .messages').clone();
    newMessage.find('.message-text').text(message);
  }
}
