$(document).ready(
  function() {
    $('#send').click(
      function() {
      sendMessage();
      scrollMessage();
      }
    );
    $('#chat-box').keypress(
      function(event) {
        if (event.which == 13) {
          sendMessage();
          scrollMessage();
        }
      }
    );

    $('.search .search-bar').keyup(
      function(){
        var text = $(this).val().toLowerCase();
        searchContacts(text);
      }
    );

    $(document).on('click', '.message .message-options', function () {
      $(this).next('.dropdown').toggleClass('active');
    });
    $(document).on('click', '#cancel', function () {
      $(this).parents('.messages').remove();
    });
    $(document).on('click', '.contact-element', function() {
      var data = $(this).attr('data-contact');
      var selector = '.chat-window[data-contact = "'+ data +'"]';
      $('.chat-window').removeClass('active');
      $(selector).addClass('active');
      $(this).addClass('active');
      $('.contact-element').removeClass('active');
      var name =$(this).find('.contact-name').text();
      var time = $(this).find('.contact-time').text();
      var img = $(this).find('img').attr('src');
      $('.info-messages img').attr('src', img);
      $('.info-messages .text-messages > h3').text(name);
      $('.info-messages .text-messages > p ').text(time);
    });

  });







// ------------------Funzioni----------------------//
//Funzione per inviare un messagio e ricevere una risposta dopo 1 secondo
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
    $('.chat-window.active').append(newMessage);
    $('#chat-box').val('');
    var newResponse = $('.template .messages').clone();
    newResponse.find('.message-text').text('ok');
    newResponse.find('.message-time').text(time);
    newResponse.addClass('received');
    setTimeout(function(){ $('.chat-window.active').append(newResponse); }, 1000);
  }
}

//Funzione che scrolla
function scrollMessage() {
  var heightContainer = $('.chat-window.active').height();
  $('.container-chat-window').scrollTop(heightContainer);
}

// Funzione per cercare tra i contatti
function searchContacts(string) {
    for (var i = 0; i < $('.contact-element').length; i++) {
      var name = $('.contact-element').eq(i).find('.contact-name').text().toLowerCase();
      if (name.includes(string)) {
        $('.contact-element').eq(i).show();
      } else {
        $('.contact-element').eq(i).hide();
      }
    }
  }

//Funzione per aggiungere lo zero davanti ai numeri minori di 10
function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}
