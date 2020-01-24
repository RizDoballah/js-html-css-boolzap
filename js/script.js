$(document).ready(
  function() {
    $('#send').click(
      function() {
      var userMessage = $('#chat-box').val();
      $('#chat-box').val('');
      }
    );
  }
);
