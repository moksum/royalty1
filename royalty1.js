

const olive = document.getElementById('olive');

olive.addEventListener('click', () => {
  olive.style.color = 'yellow';

});

$(document).ready(function() {
    $(".regnum2").hover(function() {
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", "white");
    });
});
$(document).ready(function() {
    $(".little").hover(function() {
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "white");
    });
});