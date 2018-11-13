(function () {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top) //On the wiki version online, add -48 or the size to make it fit with the navbar (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  //TOP BUTTON APPEARS

  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
  };


  //js-scroll-trigger for the button

  $("button.js-scroll-trigger").click(function(){
    $('html,body').animate({
      scrollTop:$("navigationbar").offset().top //REplace by: "0px"   if is not working
    },"1000", "easeInOutExpo");
    return false})



  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar

  $(window).on("load", function() {
   var navbarCollapse = function() {
     if ($("#mainNav").offset().top > 100) { 

       $("#mainNav").addClass("navbar-shrink");
     } else {
       $("#mainNav").removeClass("navbar-shrink");
     }
   };
   // Collapse now if page is not at top
   navbarCollapse();

   // Collapse the navbar when page is scrolled
   $(window).scroll(navbarCollapse);

   // Collapse boostrap dropdown menus when scrolling

//   if ($(".dropdown-item").is(:hover)) {
//     console.log('prova');
//   };

//   var estasubratllat

//  $(".dropdown-item").hover(function(){
//    var estasubratllat = false;
//    console.log('subratllat');
//    },);
   
   
//  var zoquete = function(){ 
//    if (!estasubratllat) {
//      console.log('fake');
//    }
//  };

//  zoquete();

//   if (estasubratllat) { function() {

//      $(".dropdown-item").off('hover',function(){
//        console.log("hi");
//        $(window).scroll(function() {
//          console.log('Scroll');
//          $('.dropdown-menu').collapse('show');
//       });
//      });
//      };
//    };

//        $(".dropdown-item").each(function(){
//        var prova2 = function(){
//          $("h1").on('click',
//            console.log('hello')
//          );
//        };
//        prova2();

//        });


//        $(".dropdown-item").each(function(){
//          $(this).on('hover',function(){
//            var provatonta = $(this);
//            console.log(provatonta);
 //         });
//        });
    


//        $(window).scroll(function() {
//          $('.dropdown-item').not(":hover").$('.dropdown-menu').collapse('hide');
//        });


//        $('.dropdown-item').hover(function(){
//          console.log('hello')
//        }, function(){
//          console.log('leaving')
//            $(window).scroll(function(){
//              console.log('active');
//              $('.dropdown-menu').collapse('hide');
//            })
//        });

//        $('.dropdown-item').not(":hover")

//        $(window).scroll(function() {
//          $('.dropdown-item').mouseleave(function(){
//            $('.dropdown-menu').collapse('hide');
//        })});

//        var prova4 = function() {
//          $('.dropdown-item').mouseleave(function(){
//            $(window).scroll(function(){
//            $('.dropdown-menu').collapse('hide');})
//        })};

        //Fer el mateix que si està hovered sigui show.


//var amagabarra = function(){
//  $(window).scroll(function() {
//    console.log("activada amagabarra");
//    $('.dropdown-menu').collapse('hide');
//  });
//};


//var amagabona = window.setInterval(function(){
//  if ($('li.nav-item.dropdown.show').length > 0) {
//
//  }
//  else {
//    $(window).scroll(function() {
//      console.log("activada amagabarra");
//      $('.dropdown-menu').collapse('hide');
//    });
//  }
//}, 2500)
//})


//var executala = window.setInterval(function(){
//if ($('li.nav-item.dropdown.show').length > 0) {
  
//}
//else
//{
  //console.log("amagant");
  //amagabarra()
//}
//},250);

//executala();





//        $('li').not('.show').function () {
//          console.log("hillo");
//          css("display","blocked")
//        };

var navbar = $('nav');

var hovered = false;

navbar.hover(function() {
  hovered = true;
},
function() {
  hovered = false;
});

$(window).scroll(function(){
if (!hovered) {
  $('.dropdown-menu').collapse('hide');
}
});


//$(window).scroll(function(){
//  console.log("1", window.pageYOffset || document.documentElement.scrollTop);
//  console.log("2", $(window).scrollTop());
//  });


$(window).scroll(function(){
  var currentScrollPosition = $(window).scrollTop();
  var HeaderHeight = $('header').height();
  var dropdwnItems = $('.dropdown-item');

  if (currentScrollPosition > HeaderHeight) {
    $(dropdwnItems).addClass('below-header');
  } else {
    $(dropdwnItems).removeClass('below-header');
  }
  
//  if (!hovered) {
//    $('.dropdown-menu').collapse('hide');
//  }
});

  });

})(jQuery); // End of use strict

//location.reload()  //Recarga pq el JQUERY aquest s'executi