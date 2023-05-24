$(function(){

  $('.carousel__inner').slick({
    arrows: true,
    dots: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

 

$('.program__acc-link').on('click', function(e) {
  e.preventDefault()
  if ($(this).hasClass('program__acc-link--active')) {
    $(this).removeClass('program__acc-link--active')
    $(this).children('.program__acc-text').slideUp()
  } else {
    $('.program__acc-link').removeClass('program__acc-link--active')
    $('.program__acc-text').slideUp()
    $(this).addClass('program__acc-link--active')
    $(this).children('.program__acc-text').slideDown()
    
  }

  })
});