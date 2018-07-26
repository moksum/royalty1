
// javascript DOM manipulation for 'click' event to select the element 
//with the Id 'olive' --place a listener on that element--then
//execute the function (turn text yellow)--upon the occurrence of the event.

//here, by clicking on "electrons and photons", the text turns from black to yellow,
//until the browser is reset.

const olive = document.getElementById('olive');

olive.addEventListener('click', () => {
  olive.style.color = 'yellow';

});
// this is a jquery mediated interactive piece.
//by mousing over text it turns to black.
//by mousing off or mousing out--the text returns to white.

//here, by mousing over "was more than just a famous photo" the white text
//turns to black.
//by mousing off, the text returns to white.
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
//this is a jquery mediated function where hovering over a block of text, the 
//background changes color.
//by leaving the block of text, the background changes color again.

//here, hovering over the opening paragraph of text in the first div, the 
//background color becomes pink.
//by hovering off of the text block, the background color returns to white.
$(document).ready(function() {
    $(".regnum2").hover(function() {
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", "white");
    });
});
//this is a jquery mediated function where hovering over a block of text, the 
//background changes color.
//by leaving the block of text, the background changes color again.

//here, hovering over the bottom paragraph of text in the first div, the 
//background color becomes yellow.
//by hovering off of the text block, the background color returns to white.
$(document).ready(function() {
    $(".lynx").hover(function() {
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "white");
    });
});
// this is a jquery mediated interactive piece.
//by mousing over text it turns to black.
//by mousing off or mousing out--the text returns to white.

//here, by mousing over "...three lectures (one morning and 2 afternoons)
//have fueled a century of quantum debate" the black text
//turns to white.
//by mousing off, the text returns to black.
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
//finally, 
////this is a jquery mediated function where hovering over a block of text, the 
//background changes color.
//by leaving the block of text, the background changes color again.

//here, hovering over the bottom paragraph of text in the second div, the 
//background color becomes beige.
//by hovering off of the text block, the background color returns to white.
$(document).ready(function() {
    $(".little").hover(function() {
        $(this).css("background-color", "tan");
        }, function(){
        $(this).css("background-color", "white");
    });
});