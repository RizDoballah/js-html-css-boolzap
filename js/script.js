$(document).ready(
  function() {
    $('#send').click(
      function() {
      sendMessage();
      }
    );
    $('#chat-box').keypress(
      function(event) {
        if (event.which == 13) {
          sendMessage();
        }
      }
    );
    $('.search .search-bar').keydown(
      function(){
        var text = $(this).val().toLowerCase();
        searchContacts(text);
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
    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours + ':' + minutes;
    newMessage.find('.message-time').text(time);
    newMessage.addClass('sent');
    $('.chat-window').append(newMessage);
    $('#chat-box').val('');
    var response = 'ok';
    var newResponse = $('.template .messages').clone();
    newResponse.find('.message-text').text(response);
    newResponse.find('.message-time').text(time);
    newResponse.addClass('received');
    setTimeout(function(){ $('.chat-window').append(newResponse); }, 1000);
  }
}
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
function searchContacts(string) {
    $('.contact-element').hide();
    for (var i = 0; i < $('.contact-element').length; i++) {
      var name = $('.contact-element').eq(i).find('.contact-name').text().toLowerCase();


      if (name.includes(string)) {
        $('.contact-element').eq(i).show();
      }

    }

  }




function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}
