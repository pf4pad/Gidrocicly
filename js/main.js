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


$('.search__tabs-item').on('click', function(e){
  e.preventDefault();

  $('.search__tabs-item').removeClass('search__tabs-item--active');
  $('.search__content-item').removeClass('search__content-item--active');
  $(this).addClass('search__tabs-item--active');
$($(this).attr('href')).addClass('search__content-item--active')
  });
});