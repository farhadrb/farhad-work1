
// switch active class to nav-link
$('.nav-link').click(function (e) {
let navLink= $(this).parent().parent()
navLink.find('.active').removeClass('active')
 $(this).addClass('active')
 if ($('.nav').hasClass('active')) {
   $('.nav').removeClass('active');
   $('.nav').addClass('unactive');
   $('.menu-icon .icon').toggleClass('active');
   if(!$('.menu-icon .icon').hasClass('active')){
     $('.menu-icon .icon').addClass('unactive');
   }else{
     $('.menu-icon .icon').removeClass('unactive');
   }
 } else {
  $('.nav').removeClass('unactive');
  $('.nav').addClass('active');
 }
});


// swiper plugin
var swiper = new Swiper('.swiper-container,.swiper-container2', {
    speed: 600,
    parallax: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });





  //scroll menu
  let prevScroll = 0
  $(window).scroll(function () { 
    let scrollTop = $(window).scrollTop();
    if(scrollTop >850){
      //hide nav-icon-2
    if(prevScroll < scrollTop){
      $('.nav-parent').addClass('active');
    }else{
      $('.nav-parent').removeClass('active');
    }
  }else{
    $('.nav-icon-2').removeClass('hide');
  }
    prevScroll = scrollTop;
  });

  // click on menu-icon for responsive
  $('.menu-icon').click(function (e) { 
    $('.nav').toggleClass('active');
    $('.menu-icon .icon').toggleClass('active');
    if(!$('.menu-icon .icon').hasClass('active')){
      $('.menu-icon .icon').addClass('unactive');
    }else{
      $('.menu-icon .icon').removeClass('unactive');
    }
  });

  // aso animation plugin
  AOS.init();

  // use plugin count to
  $('.ourWorks-box .timer').countTo({
    from: 0,
    to: 500,
    speed:2000,
    refreshInterval: 50,
  });

// hover on card to section ourteam 
  $('.card-header').mouseenter(function () { 
    $(this).addClass('active');
  });
  $('.card-header').mouseleave(function () { 
    $(this).removeClass('active');
  });

// validate form
$('.form-group input,textarea').keyup(function (e) { 
  if($(this).val().length>0){
    $(this).parent().addClass('active')
  }else{
    $(this).parent().removeClass('active')
  }
});


// validate the form...........
//1.disabled submitBtn when refresh webbrowser

let submitBtn = $('#submitBtn')
$(document).ready(function () {
  $(submitBtn).addClass('disabled');
  $(submitBtn).click(function(e){
    e.preventDefault();
  })

  //2.validate inputs when blur 
  $('#input1,#input2,#input3').blur(function(){
    let htmlShow = new Html()
   let input = $(this).val();
   $(submitBtn).addClass('disabled');
   if(input.length <= 0){
    htmlShow.error('Input is empty');
   }else {
     htmlShow.btnActive();
   }
  
  })
});

//click nav-icon-2 for show modal
$('.nav-icon-2').click(function (e) { 
  e.preventDefault();
  $('.overlay').addClass('show');
});


//validatngn modal

$('.form-parent form input').keyup(function(){
  if($(this).val().length >0){
    $(this).parent().addClass('bottom');
  }else{
    $(this).parent().removeClass('bottom');
  }
  let cobra1 = new Cobra;
  cobra1.activebtn()
  
});

$('.form-parent form input').blur(function (e) { 
  if ($(this).val().length <= 0) {
    $(this).parent('.input').addClass('border-red')
  } else {
    $(this).parent('.input').removeClass('border-red')
  }
});


$('.form-back').click(function (e) { 
  $('.overlay').removeClass('show');
});
$('.overlay').on('click',function(e){
  if(e.target !=this){
    return;
  }
  $('.overlay').removeClass('show');
})
$('.form-parent form span').click(function (e) { 
  let form = document.querySelector('.form-parent form')
  form.reset()
});


//filter ourWorks
$('.filter li a').click(function (e) { 
  e.preventDefault();
   let dataFilter = $(this).attr('data-filter')
   $('.all').fadeOut()
   $(`.${dataFilter}`).fadeIn()
   
  
});

// use plugin nav
$('#nav').onePageNav();










