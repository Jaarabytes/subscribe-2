//trying jQuery here;
$(document).ready(function() {
    // Get the cancel button
    var cancelButton = $('#cancel');
  
    // Get the container div
    var containerDiv = $('.container');
  
    // When the cancel button is clicked
    cancelButton.on('click', function() {
      // Reduce the opacity of the container div and its children to 0 in 2 seconds
      containerDiv.animate({
        opacity: 0
      }, 2000);
    });
  });
  