
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


$(".scroll-down").click(() => {
  $('html, body').animate({
    scrollTop: $("#first").offset().top
  }, 500);

})

$(".to-up").click(()=>{
  $("html, body").animate({ scrollTop: 0 });
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

      $(".horizontal-container").append(`
        <section class="containerx">
          <div class="list">
           
            <div class="containerx__img mt-3">
              <img src="${img}" alt="${nama}" title="${nama}" class="isdesktop">
              <img src="${img_mobile}" alt="${nama}" title="${nama}" class="ismobile">
            </div>
            <div class="text-center mt-3">
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
          markers: false,
          scrub: 1,
          // end: () => "+=" + ((container.offsetWidth - innerWidth) / 2)
          end: () => "+=" + (((container.offsetWidth - innerWidth) ))
        }
      })

      console.log(container.scrollWidth);
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




