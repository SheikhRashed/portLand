$(function(){
  // 'use strict'; 
  

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }


  $('.bnnr_slide').slick ({
    dots:true,
    autoplay:true,
    autoplaySpeed: 2500,
    prevArrow:'<span class="prev-arrow"><i class="fa fa-angle-left"></i></span>',
    nextArrow:'<span class="next-arrow"><i class="fa fa-angle-right"></i></span>',
    fade:true,
    arrows: true,
    draggable:false,
  });

  $('.center').slick({
    centerMode: true,
    prevArrow:'<span class="prev-arrow"><i class="fa fa-angle-left"></i></span>',
    nextArrow:'<span class="next-arrow"><i class="fa fa-angle-right"></i></span>',
    centerPadding: '100px',
    slidesToShow: 1,
    slideToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });
});