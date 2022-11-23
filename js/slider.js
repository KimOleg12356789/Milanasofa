$(document).ready(function(){

$('a.stockRequest').click(function(){

       $(".forms-modal").css("display", "block");

      
    })

$('.closes').click(function(){
       $(".forms-modal").css("display", "none");
    
 })

});

$(document).ready(function(){

$('#ist').click(function(){

       $(".forms-modal").css("display", "block");
      
      
    })

$('.closes').click(function(){
       $(".forms-modal").css("display", "none");
       
 })

});



$(document).ready(function(){


  
$('.cart').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      fade: true,
                      autoplay:false,
                      arrows:true,
                      dots: true,
                      asNavFor: '.iss'
                    });

                    $('.iss').slick({
                      slidesToShow:6,
                      slidesToScroll: 1,
                      asNavFor: '.cart',
                      active:true,
                      autoplay:false,
                      dots: false,
                      arrows:true,
                      centerPadding: '5px',
                      focusOnSelect: true,
                      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows:false,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            dots:false,
            arrows:false,
            slidesToScroll: 1
          }
        },


          {
            breakpoint: 565,
            settings: {
              slidesToShow: 1,
              dots:false,
              arrows:false,
              slidesToScroll: 1
            }
          }
      ]

                    });
  });

$(document).ready(function(){
  
$('.cart2').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      fade: true,
                      autoplay:false,
                      arrows:true,
                      dots: true,
                      asNavFor: '.iss2'
                    });

                    $('.iss2').slick({
                      slidesToShow:8,
                      slidesToScroll: 1,
                      asNavFor: '.cart2',
                      active:true,
                      autoplay:false,
                      dots: false,
                      centerPadding: '5px',
                      focusOnSelect: true,
                      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows:false,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 775,
          settings: {
            slidesToShow: 2,
            dots:false,
            arrows:false,
            slidesToScroll: 1
          }
        },


          {
            breakpoint: 565,
            settings: {
              slidesToShow: 1,
              dots:false,
              arrows:false,
              slidesToScroll: 1
            }
          }
      ]

                    });
  });



$(document).ready(function(){

$('.highslide').click(function(){

       $("#mode-slid").css("display", "block");
       $('body').css("overflow", "hidden");
    })

$('.closes').click(function(){

      $('div#mode-slid').css("display", "none");
      $('body').css("overflow", "auto");
       
 })

});

$( document ).ready(function(){
    $( ".highslide" ).click(function(){ 
      $( "button.slick-next.slick-arrow" ).click();
    });
  });

$(".slider").hover(
  function () {
    $(this).find('.slick-arrow','.slick-next').addClass("hover");
  },
  function () {
    $(this).find('.slick-arrow','.slick-next').removeClass("hover");
  }
);