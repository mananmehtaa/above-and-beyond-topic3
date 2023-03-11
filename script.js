$(document).ready(function() {
  $('#login-form').submit(function(event) {
    event.preventDefault(); // prevent form submission
    var username = $('#username').val();
    var password = $('#password').val();
    if (username === 'user1' && password === 'manan1') {
      $('.user-container').hide(); // hide all user containers
      $('#user1-container').show(); // show User 1 container
    } else if (username === 'user2' && password === 'manan2') {
      $('.user-container').hide(); // hide all user containers
      $('#user2-container').show(); // show User 2 container
    } else {
      alert('Invalid username or password');
    }
  });
});