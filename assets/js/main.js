$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 7000);

    function nextMsg() {
        if (messages.length == 0) {
            // once there is no more message, do whatever you want
            // alert("redirecting");
        } else {
            // change content of message, fade in, wait, fade out and continue with next message
            $('#loader_contentx').text(messages.pop()).fadeIn(100).delay(850).fadeOut(100, nextMsg);
        }
    }

    // list of messages to display
    var messages = [
        "Join us at GDSC Fest...",
        "Where innovation meets celebration!...",
        "Unleash your creativity...",
        "connect with like-minded tech enthusiasts...",
        "Get ready for the...",
        "2 days extravaganza!...",
        "Fire up...!",
    ].reverse();

    // initially hide the message
    $('#message').hide();

    // start animation
    nextMsg();

    // Add smooth scrolling to all links
    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("#down").on('click', function(event) {
          $("#go_down").hide();
      
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
        });
      });
      
      function isScrolledIntoView(elem)
      {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          docViewBottom -= 100; // offset of added
      
          var elemTop = $(elem).offset().top;
          var elemBottom = elemTop + $(elem).height();
      
          return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom >= docViewBottom) && (elemTop >= docViewTop));
      }
      
      $(window).scroll(function() {  
          // alert("Working");  
          if(isScrolledIntoView($('#obj2')))
          {
              $("#go_down").hide();
          }    
      });
      
});