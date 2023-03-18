// JavaScript Document

$(document).ready(function(){
	//alert("boo");
//  $('.your-class').slick({
//    //setting-name: setting-value
//  });
  //
  $('.allDecks').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 2,
  centerMode: false,
 variableWidth: true,
 initialSlide: 0,
  centerPadding: '0px',
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
  slidesToScroll: 3,
   centerMode: false,
   dots: true
        
      }
    },
    {
      breakpoint: 568,
      settings: {
       slidesToShow: 1,
  slidesToScroll: 1,
   centerMode: true,
   dots: true
        
      }
    }
  ]
});

//
  $('.mainDealCarousel').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
 variableWidth: true,
 initialSlide: 0,
  centerPadding: '0px',
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
  slidesToScroll: 3,
   centerMode: false,
   dots: true
        
      }
    },
    {
      breakpoint: 568,
      settings: {
       slidesToShow: 1,
  slidesToScroll: 1,
   centerMode: true,
   dots: true
        
      }
    }
  ]
});

$('.nav-slick').slick({
  dots: false,
  infinite: false,
  speed: 300,
    slidesToShow: 3,
       slidesToScroll: 3,
  centerMode: false,
 variableWidth: true,
 initialSlide: 0,
  //centerPadding: '10px',
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: false
      }
    },
    {
      breakpoint: 568,
      settings: {
       infinite: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


});