
$(window).on("load", function () {
  $(".preloader").fadeOut(10000);
  $(".preloader").remove();
});
$(() => {
  new WOW().init();
  var mobile = $(".menu").addClass("mob");
  $(document).on("click", ".m-menu", () => {
    $(".menu").fadeIn("fast");
  });

  if ($(window).width() > 768) {

  }


});

var action = 'click';
$(document).on(action, 'li.question', function() {
    $(this).next().slideToggle(200)
        .siblings("li.answer").slideUp();

    var img = $(this).find('.arrow__down');

    $('.arrow__down').not(img).removeClass('rotate').css("transition", "all .2s ease")
    img.toggleClass('rotate')
})




$(".question").click(()=>{
  if ($(this).find(".klik-detail").text() === 'Klik Detail') {
    $(this).text('Tutup');
  } else {
      $(this).text('Klik Detail');        
  }

//  return false; 
})
$(".scroll-down").click(() => {
  $('html, body').animate({
    scrollTop: $("#first").offset().top
  }, 500);

})

$(".scroll-to-top").click(()=>{
  $('html, body').animate({scrollTop: '0px'}, 300);
})


$(".to-up").click(()=>{
  $("html, body").animate({ scrollTop: 0 });
})

$("#first_").click(function() {
  $(".load-show-one").fadeIn();
  $(this).hide();
  $('html,body').animate({
      scrollTop: $(".load-show-one").offset().top -40},
      'slow');
});

$("#two_").click(function() {
  $(".load-show-two").fadeIn();
  $(this).hide();
  $('html,body').animate({
      scrollTop: $(".load-show-two").offset().top -40},
      'slow');
});

$("#three_").click(function() {
  $(".load-show-three").fadeIn();
  $(this).hide();
  $('html,body').animate({
      scrollTop: $(".load-show-three").offset().top -40},
      'slow');
});

$("#four_").click(function() {
  // $(".horizontal-container").css('filter','blur(0)');
  $(".load-show-four").css('opacity','1');
  $(this).hide();
  $('html,body').animate({
      scrollTop: $(".load-show-four").offset().top -40},
      'slow');
});


document.addEventListener("DOMContentLoaded", function(){
  const progressbarinner = document.querySelector('.progress-bars-inner');

  window.addEventListener('scroll', function(){
    let h = document.documentElement;
    let st = h.scrollTop || this.document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;

    let percent = st/ (sh - h.clientHeight) * 100;
    let roundedPercent = Math.round(percent);

    progressbarinner.style.width = roundedPercent + "%";
    progressbarinner.innerText = roundedPercent + "%"
  })

})

$.ajax({
  url: "js/data.json",
  type: "GET",
  success: (repsonse)=>{
    // console.log(repsonse);
    var a;
    for(a=0; a<repsonse.length; a++) {
      var nama = repsonse[a].nama;
      var img = repsonse[a].img;
      var img_mobile = repsonse[a].img_mobile;
      var situs = repsonse[a].situs;
      var category = repsonse[a].category;
      var tahun = repsonse[a].tahun;
      var desc = repsonse[a].desc;
      {/* <div class="hehe haha">
                <small>Bisa di klik</small>
                <img src="img/up-arrow.png" alt="">
              </div> */}
      $(".horizontal-container").append(`
        <section class="containerx">
          <div class="list blue-soft">
           
            <div class="containerx__img mt-3">
              <picture>
                <source media="(max-width:766px)" srcset="${img_mobile}">
                <img src="${img}" alt="${nama}" title="${nama}">
              </picture>
            </div>
            <div class="text-center mt-3 position-relative">
              <a href="${situs}" target="_blank" class="color-black">
                <h2 class="font-bold font-stdbig text-center">${nama}</h2>
              </a>
              
            </div>
            <div class="text-center font-stdbig my-1 font-bold tahuns">${tahun}</div>
            <div class="wrap-detik mt-3">
              <p>${desc}</p>
            </div>
          </div>
        </section>
      `)
    }

          // Horizontal scroll
      gsap.registerPlugin(ScrollTrigger)

      const container = document.querySelector(".horizontal-container");

      gsap.to(container, {
        x: () => -((container.scrollWidth) - document.documentElement.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          invalidateOnRefresh: true,
          pin: true,
          markers: true,
          scrub: 1,
          // end: () => "+=" + ((container.offsetWidth - innerWidth) / 2)
          end: () => "+=" + (((container.offsetWidth - innerWidth) ))
        }
      })

      // console.log(container.scrollWidth);
  }
})


// Skew
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter("#skew", "skewY", "deg"),
    clamp = gsap.utils.clamp(-20, 20); 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / 300);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

gsap.set("#skew", {transformOrigin: "left center", force3D: true});




