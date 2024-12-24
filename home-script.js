
const timeline = gsap.timeline()

timeline.from(".hero_title",{
    y: -200,
    duration:1.8,
    opacity:0
})

timeline.from(".hero_imgs",{
    y: 200,
    duration:0.5,
    opacity:0
})

timeline.from(".hero_other",{
    opacity:0
})

gsap.fromTo(".service_card",{
    x:-100,
    opacity:0,

},{
    duration:2,
    x:0,
    opacity:1,
    scrollTrigger: {
        trigger: ".service_card",
        start: "top 65%",
        end: "bottom 85%",
        scrub: true,
        yoyo: true,
    }

})

gsap.fromTo(
    ".testimonial_text",
    {
      opacity: 0, // Starting opacity
    },
    {
      opacity: 1, // Final opacity
      duration: 1.5,
      scrollTrigger: {
        trigger: ".testimonial_text",
        start: "top 90%",
        end: "bottom 80%",
      },
    }
  );
  

gsap.fromTo(".service_title, .service_description",{
    y:-100,
    opacity:0,
},{
    opacity:1,
    duration:1,
    y:0,
    scrollTrigger: {
        trigger: ".service_title, .service_description",
        start: "top 60%",
        end: "bottom 90%",
    }
})