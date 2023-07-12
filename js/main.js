


    $('.container__slider').fsScroll({
       direction: 'vertical',
        duration: 350,
        keyboard: true,
        loop: true,
        fadetime: 300,
        delay: 5000
        });

$(function(){
  $('.watch__info_0').click(function(){
    $('.down__block-info_0').css("display", "none")
    $('.watch__now_0').css("display", "none")
    $('.ViewInfo_0').css("display", "block") 
  });
    $('.watch__info_1').click(function(){
    $('.down__block-info_1').css("display", "none")
    $('.watch__now_1').css("display", "none")
    $('.ViewInfo_1').css("display", "block") 
  });
  $('.watch__info_2').click(function(){
    $('.down__block-info_2').css("display", "none")
    $('.watch__now_2').css("display", "none")
    $('.ViewInfo_2').css("display", "block") 
  });
    $('.watch__info_3').click(function(){
    $('.down__block-info_3').css("display", "none")
    $('.watch__now_3').css("display", "none")
    $('.ViewInfo_3').css("display", "block") 
  });
  $('.watch__info_4').click(function(){
    $('.down__block-info_4').css("display", "none")
    $('.watch__now_4').css("display", "none")
    $('.ViewInfo_4').css("display", "block") 
  });
  $('.watch__info_4').click(function(){
    $('.down__block-info_4').css("display", "none")
    $('.watch__now_4').css("display", "none")
    $('.ViewInfo_4').css("display", "block") 
  });
  $('.watch__info_5').click(function(){
    $('.down__block-info_5').css("display", "none")
    $('.watch__now_5').css("display", "none")
    $('.ViewInfo_5').css("display", "block") 
  });
  $('.watch__info_6').click(function(){
    $('.down__block-info_6').css("display", "none")
    $('.watch__now_6').css("display", "none")
    $('.ViewInfo_6').css("display", "block") 
  });
  $('.watch__info_7').click(function(){
    $('.down__block-info_7').css("display", "none")
    $('.watch__now_7').css("display", "none")
    $('.ViewInfo_7').css("display", "block") 
  });
  $('.watch__info_8').click(function(){
    $('.down__block-info_8').css("display", "none")
    $('.watch__now_8').css("display", "none")
    $('.ViewInfo_8').css("display", "block") 
  });
  $('.watch__info_9').click(function(){
    $('.down__block-info_9').css("display", "none")
    $('.watch__now_9').css("display", "none")
    $('.ViewInfo_9').css("display", "block") 
  });
  $('.watch__info_10').click(function(){
    $('.down__block-info_10').css("display", "none")
    $('.watch__now_10').css("display", "none")
    $('.ViewInfo_10').css("display", "block") 
  });
  $('.watch__info_11').click(function(){
    $('.down__block-info_11').css("display", "none")
    $('.watch__now_11').css("display", "none")
    $('.ViewInfo_11').css("display", "block") 
  }); 
  $('.watch__info_a').click(function(){
    $('.down__block-info_a').css("display", "none")
    $('.watch__now_a').css("display", "none")
    $('.ViewInfo_a').css("display", "block") 
  }); 
  $('.watch__info_b').click(function(){
    $('.down__block-info_b').css("display", "none")
    $('.watch__now_b').css("display", "none")
    $('.ViewInfo_b').css("display", "block") 
  }); 

  $('.watch__info_d').click(function(){    
    $('.down__block-info_d').css("display", "none")  
    $('.watch__now_d').css("display", "none")

    $('.ViewInfo_d').css("display", "block") 
  }); 
  $('.watch__info_c').click(function(){   
    $('.down__block-info_c').css("display", "none") 
   $('.watch__now_c').css("display", "none")

    $('.ViewInfo_c').css("display", "block") 
  }); 

   $('.close').click(function(){
    $('.ViewInfo').css("display", "none")
    $('.down__block-info').css("display", "block")
    $('.watch__now').css("display", "block")
  });

 $('.container__bar,.gallery__menu-nav ul li,.menu__night').click(function(){
         $('.gallery__menu-nav').toggleClass("active ")
         $('.menu__night').toggleClass("menu__night-opacity")

  });



  $(".owl-carousel").owlCarousel({
  loop: true,
  margin:25,
  dots: true,
  autoplay:true,
  autoplayTimeout:3000,

       responsive:{
        0:{
            items:1
        },
        850:{
            items:2
        },
        1300:{
            items:3
        },
        1550:{
            items:3
        },
        1800:{
            items:4
        }
    }

  });

   $('.registration').click(function(){
    $('.div__input').css("display", "none")
    $('.welkom__user').css("display", "block")
  });
  $('.gallery__icon-square').click(function(){
    $('.block_whith_textBox').css("display", "none");
    $('.block_img_out').css("display", "block")
    $('#block_for_js').addClass('block__img');
    $('.block__img-div').removeClass('block_img_click');
  });
  $('.gallery__icon-square_2').click(function(){
    $('.block_whith_textBox').css("display", "block");
    $('#block_for_js').removeClass('block__img');
    $('#block_out_for_js').addClass('block_img_out');
    $('.block__img-div').addClass('block_img_click');
    $('.block_img_out').css("display", "flex")
  });
$('.button__fovorites').click(function(){
  alert("Фильм был успешно добавлен, приятного просмотра!");
});

});








    







