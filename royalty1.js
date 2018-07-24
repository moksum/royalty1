

const olive = document.getElementById('olive');

olive.addEventListener('click', () => {
  olive.style.color = 'yellow';

});

$(document).ready(
    function() {
        $('.tomato').mouseover(
            function() {
                var index = $('.tomato').index(this);
                $(this).css({"color":"black"});
            }
        );
        $('.tomato').mouseout(
            function () {
                var index = $('.tomato').index(this);
                $(this).css({"color":"white"});
            }
        );
    }
);

$(document).ready(function() {
    $(".regnum2").hover(function() {
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", "white");
    });
});

$(document).ready(
    function() {
        $('.squash').mouseover(
            function() {
                var index = $('.squash').index(this);
                $(this).css({"color":"white"});
            }
        );
        $('.squash').mouseout(
            function () {
                var index = $('.squash').index(this);
                $(this).css({"color":"black"});
            }
        );
    }
);
$(document).ready(function() {
    $(".little").hover(function() {
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "white");
    });
});