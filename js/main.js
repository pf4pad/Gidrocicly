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
});