/* Every time the window is scrolled ... */
$(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

});


/* Every time the window is scrolled ... */
$(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme-dark').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

});

    var texts = ["06:11", "06:12", "06:13", "06:14", "06:15", "06:15", "06:15", "06:15", "06:15", "06:15", "06:15", "06:15", "06:15", "06:15", "06:15", "06:15", "06:15", "06:15", "06:15"];
    var count = 0;
    function changeText() {
        $("#time").text(texts[count]);
        count < 18 ? count++ : count = 1;
    }
    setInterval(changeText, 1300);

    $(window).scroll(function() {

// selectors
var $window = $(window),
    $body = $('body'),
    $panel = $('.panel');

// Change 33% earlier than scroll position so colour is there when you arrive.
var scroll = $window.scrollTop() + ($window.height() / 3);

$panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });

        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
    }
});

}).scroll();

    var fps = 100;
    var speedFactor = 0.001;
    var minDelta = 0.5;
    var autoScrollSpeed = 10;
    var autoScrollTimer, restartTimer;
    var isScrolling = false;
    var prevPos = 0, currentPos = 0;
    var currentTime, prevTime, timeDiff;

    window.addEventListener("scroll", function (e) {
    // window.pageYOffset is the fallback value for IE
    currentPos = window.scrollY || window.pageYOffset;
    });

    window.addEventListener("wheel", handleManualScroll);
    window.addEventListener("touchmove", handleManualScroll);

    function handleManualScroll() {
    // window.pageYOffset is the fallback value for IE
    currentPos = window.scrollY || window.pageYOffset;
    clearInterval(autoScrollTimer);
    if (restartTimer) {
        clearTimeout(restartTimer);
        }
        restartTimer = setTimeout(() => {
        prevTime = null;
        setAutoScroll();
        }, 50);
    }

    function setAutoScroll(newValue) {
        if (newValue) {
          autoScrollSpeed = speedFactor * newValue;
        }
        if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
        }
        autoScrollTimer = setInterval(function(){
        currentTime = Date.now();
        if (prevTime) {
            if (!isScrolling) {
                timeDiff = currentTime - prevTime;
                  currentPos += autoScrollSpeed * timeDiff;
                if (Math.abs(currentPos - prevPos) >= minDelta) {
                    isScrolling = true;
                    window.scrollTo(0, currentPos);
                    isScrolling = false;
                    prevPos = currentPos;
                    prevTime = currentTime;
                    }
                }
                } else {
                prevTime = currentTime;
                }
            }, 1000 / fps);
            }

            setAutoScroll(20);


    $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

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

    $(window).scroll(function() {

        // selectors
        var $window = $(window),
            $body = $('body'),
            $panel = $('.panel');

        // Change 33% earlier than scroll position so colour is there when you arrive.
        var scroll = $window.scrollTop() + ($window.height() / 3);

        $panel.each(function () {
        var $this = $(this);

        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
        }
        });

    }).scroll();
