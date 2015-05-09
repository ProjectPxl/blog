$( document ).ready(function() {
  if ( $('#image').length ) {
    var img = $('#image').text();
    $('.bio__wrapper').css({'background-image': 'url(/images/'+img+')'});
  }
});