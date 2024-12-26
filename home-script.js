// import gsap from "gsap"

const timeline = gsap.timeline()
gsap.registerPlugin("ScrollTrigger")

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

gsap.utils.toArray(".step_bstep_cards").forEach((section,i)=>{
    gsap.to(section,
      {
    opacity:1,
    scrollTrigger:{
        trigger: section,
        start: "top 70%",
        end: "bottom 90%",
        stagger: 0.5,
        scrub: true
    }
})
})


gsap.fromTo("#service_title", {
    opacity:0,
    y:50
},
{
    opacity:1,
    y:0,
    scrollTrigger:{
        trigger:"#service_title",
        start: "top 60%",
        end: "bottom 90%",
    }
}
)

document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    const main = document.getElementById('main_id');
    const pointer = document.getElementById('pointer');
    const card_height = document.getElementById("main_id").clientHeight

    gsap.to(pointer, {
        y: () => (main.offsetHeight - pointer.offsetHeight ),
        ease: "none",
        scrollTrigger: {
            trigger: main,
            start: "top center",
            end: "bottom center",
            scrub: true,
        }
    });

    gsap.to("#line", {
        height: () => (main.offsetHeight - pointer.offsetHeight ),
        ease: "none",
        scrollTrigger: {
            trigger: main,
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });
});
let sbs_process;
document.addEventListener("DOMContentLoaded", ()=>{
  sbs_process = gsap.timeline()
  if(window.innerWidth < 1027)
    return;
  sbs_process.add(gsap.utils.toArray(".l-pointer").forEach((pointer)=>{
  
      gsap.to(pointer,{
          border: "10px solid black",
          x: -5.5,
          y:-20,
          ease: "linear",
          scrollTrigger: {
              trigger: pointer,
              start: "top center",
              end: "bottom center",
          }
      })
  })
  )
  
  sbs_process.add( gsap.utils.toArray(".step_bstep_cards").forEach((section, index) => {
            
          gsap.fromTo(
              ".hr_marker",
            {
              width: 0,      
              opacity: 0,  
            },
            {
              width: "4.15em",       
              opacity: 1,  
              scrollTrigger: {
                trigger: section,
                start: "top 45%",
                end: "bottom 55%",
              },
            }
          );
  })
  )
})


document.addEventListener("resize",()=>{
  if (window.innerWidth < 1027){
    sbs_process.clear()
  }
})

