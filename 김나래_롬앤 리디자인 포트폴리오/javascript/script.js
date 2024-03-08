$(function(){
    $('.mid a:gt(0)').hide();
    setInterval(function(){
        $('.mid a:first-child').delay(3500).fadeOut()
        .next('a').delay(3500).fadeIn().end().appendTo('.mid')
    },3000)



});