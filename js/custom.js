
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });


  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  document.getElementsByClassName('navbar')[0].style.display = "none";
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

  document.getElementsByClassName('navbar')[0].style.display = "block";
}