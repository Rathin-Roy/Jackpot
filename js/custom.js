$(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 2000
  });



  // home page count down part start 
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
  dd = String(today.getDate()).padStart(2, "0"),
  mm = String(today.getMonth() + 1).padStart(2, "0"),
  yyyy = today.getFullYear(),
  nextYear = yyyy + 1,
  dayMonth = "12/26/",
  birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
  birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
  x = setInterval(function() {    

    const now = new Date().getTime(),
        distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

  //do something later when date is reached
  if (distance < 0) {
    document.getElementById("headline").innerText = "It's my birthday!";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    clearInterval(x);
  }
  //seconds
  }, 0);
  // home page count down part end


  // scroll bar part start 
  $(".tournaments_member_part").mCustomScrollbar();
  // scroll bar part end


});

new WOW().init();

// faq  // home page faq part start 
const faqs =document.querySelectorAll(".faq_main_part");

faqs.forEach((faq_main_part) => {
  faq_main_part.addEventListener("click",() => {
    faq_main_part.classList.toggle("active");
  });
});
// faq   // home page faq part end


// about us slider start 
$('.about_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  dots:true,

  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 900,
        infinite: true,
        dots: false,
      }
    },

            {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
  ]

});
// about us slider end


    // venovox start 
    new VenoBox({
      selector: '.my-video-links',
  });
    // venovox end





// clock    
// function clock(){
//   var hours = document.getElementById('hour');
//   var minutes = document.getElementById('minutes');
//   var seconds = document.getElementById('seconds');

//   var hrs = new Date().getHours();
//   var min = new Date().getMinutes();
//   var sec = new Date().getSeconds();

//   hours.innerHTML = hrs;
//   minutes.innerHTML = min;
//   seconds.innerHTML = sec;

// }
// var Interval = setInterval(clock, 1000);








// about us slider start 
  // $('.about_slider').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 2,
  //     autoplay: false,
  //     autoplaySpeed: 1500,
  //     arrows:false,
  //     dots:true,


  //     responsive: [
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           dots: false
  //         }
  //       },
  //       {
  //         breakpoint: 767,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           dots: false
  //         }
  //       },

  //     ]

  //   });

    // about us slider end