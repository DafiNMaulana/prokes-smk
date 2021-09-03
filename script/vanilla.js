
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 120) {
          $(".navbar").css("background" , "#1d8db6");
          $(".navbar").css("box-shadow" , "0 .5rem 1rem rgba(0,0,0,.15)");
          $(".icon-corona").css("filter" , "none");
        }
  
        else{
          $(".navbar").css("box-shadow" , "none");
          $(".navbar").css("background" , "none");
        //   $(".icon-corona").css("filter" , "drop-shadow(2px 3px 5px rgb(0, 0, 0))");
        }
    })
  })