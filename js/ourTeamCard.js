$(document).ready(function () {


    let shopping1 =new Shopping();
    shopping1.showCourseToLoad();

    //click to more btn for show page shop
    $('.more-btn').click(function (e) { 
    let card = $(this).parents('.card');
    $(card).find('.more-parent').addClass('active');
    if($('.more-parent').hasClass('unactive')){
        $('.more-parent').removeClass('unactive');
    }
    });

    //click to back icon for remove page shop
    $('.more-back').click(function (e) {
      let cardBack = $(this).parents('.card');
       cardBack.find('.more-parent').addClass('unactive')
      if(cardBack.find('.more-parent').hasClass('active')){
        cardBack.find('.more-parent').removeClass('active')
    }
    });

    //click to shop icon for add to shopping
    $('.more-body a').click(function (e) {
        e.preventDefault();
       let card = $(this).parents('.card');
       let infoCard = {
           image:card.find('img').attr('src'),
           title: card.find('.card-body h5').text(),
           price:card.find('.card-body span').text()
       }
       shopping1.sendToShopCard(infoCard);  

      
    });

    $('.nav-icon-1').click(function (e) { 
        e.preventDefault();
        if($(this).hasClass('active1')){
            $(this).removeClass('active1')
        }   
        $(this).toggleClass('active')    
        
        
    });
    // shopping1.showCourseToLoad();
   
});
  

