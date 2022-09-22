
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


// Horizontal scroll
gsap.registerPlugin(ScrollTrigger)

const container = document.querySelector(".horizontal-container");

gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    invalidateOnRefresh: true,
    pin: true,
    markers: true,
    scrub: 1,
    end: () => "+=" + ((container.offsetWidth - innerWidth) / 2)
  }
})