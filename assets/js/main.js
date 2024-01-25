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
        "Assembling Bolt the Robot...",
        "Prancing the plains for Bob the Caveman...",
        "Excavating the earth for Cleopatra's tomb...",
        "Testing Frank's Polyjuice potion...",
        "Hover over characters for more magic...",
        "Hover over characters for more magic...",
        "Voila!",
    ].reverse();

    // initially hide the message
    $('#message').hide();

    // start animation
    nextMsg();

    // Add smooth scrolling to all links
    $("#down").on('click', function(event) {
        $("#go_down").hide();
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        docViewBottom -= 100; // offset of added
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom >= docViewBottom) && (elemTop >= docViewTop));
    }


    // Add vertical scrolling with mouse wheel
    $('html, body').on('wheel', function(e) {
        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - e.originalEvent.deltaY * 80
        }, 800);
        e.preventDefault();
    });
});