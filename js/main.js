$(function(){
$('.banner-section__slider').slick({
dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
arrows: true,
prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnPrev"><img src="images/arrow-prev.svg">',
nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnNext"><img src="images/arrow-next.svg">'
});


$('.tab').on('click', function(e){
  e.preventDefault();

  $($(this).siblings()).removeClass('tab--active');
  $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
  $(this).addClass('tab--active');
$($(this).attr('href')).addClass('tabs-content--active')
  });

  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active')
  });

  $('.product-slider').slick({
    dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
prevArrow:'<button class="product-slider__slider-btn product-slider__slider-btnPrev"><img src="images/products/arrow-black-prev.svg">',
nextArrow:'<button class="product-slider__slider-btn product-slider__slider-btnNext"><img src="images/products/arrow-black-next.svg">'

  });

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function(){
  $(this).toggleClass('filter__item-drop--active');
  $(this).next().slideToggle('100');
});
  


$(".js-range-slider").ionRangeSlider({

  
      type: "double",
      min: 100000,
      max: 500000,
      
});
  
  $('.catalog__filter-btngrid').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__filter-btnline').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });


     $(".rate-yo").rateYo({
        
        spacing   : "7px",
        starWidth: "23px",
        ratedFill  : "#1C62CD",  //BLUE
        normalFill: "#C4C4C4"
      });
 
});