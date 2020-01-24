$(document).ready(
  function() {
    $('#send').click(
      function() {
      sendMessage();
      setTimeout(function(){ receiveMessage(); }, 1000);
      }
    );
    // $('#chat-box').keypress(
    //   function(event) {
    //     if (event.which == 13) {
    //       sendMessage();
    //       setTimeout(function(){ receiveMessage(); }, 1000);
    //     }
    //   }
    // );
  }
);




// Functions
function sendMessage() {
  var message = $('#chat-box').val();
  if (message.length != 0) {
    var newMessage = $('.template .messages').clone();
    newMessage.find('.message-text').text(message);
    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours + ':' + minutes;
    newMessage.find('.message-time').text(time);
    newMessage.addClass('sent');
    $('.chat-window').append(newMessage);
    $('#chat-box').val('');
  }
}

function receiveMessage() {
  var response = 'ok';
  var newResponse = $('.template .messages').clone();
  newResponse.find('.message-text').text(response);
  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours + ':' + minutes;
  newResponse.find('.message-time').text(time);
  newResponse.addClass('received');
  $('.chat-window').append(newResponse);
  $('#chat-box').val('');
}


function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}
