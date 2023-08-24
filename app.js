// 


const crsr = document.querySelector('#crsr');
const crsr1 = document.querySelector('#crsr1');
window.addEventListener('mousemove',function(e){
    crsr.style.left = e.x+"px";
    crsr.style.top = e.y+"px";
    crsr1.style.left = e.x-20+"px";
    crsr1.style.top = e.y+"px";

})

var tl=gsap.timeline();

tl.to('.loader',{
    top:'-110vh',
    delay:0.5 ,
    duration:1.5
})
tl.from('.black-box h1',{
    y:-250,
    delay:0.5 ,
    duration:1.5,
    opacity:0,
    // stagger:0.1,
    scrollTrigger:{
        trigger:'.black-box h1',
        scroller:'body',
        start:"top 110%",
        scrub:5,
    }
})
tl.from('.section1 .card img',{
   scale:0,
    // delay:0.5 ,
    duration:1.5,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:'.section1 .card img',
        scroller:'body',
        scrub:5,
        // markers:true,
        start:'top 90%',
        end: 'top 30%'
    }
})