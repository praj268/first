// --top box----
gsap.to("#main-box", {
    scale: 1,
    y: 500, // Move upwards
    duration: 2,
    opacity: 0,
    delay: 1.5,
    ease: "power3.out",

})
gsap.to("#main-box .h1", {

    x: -100, // Slide 'Meet' in from the left
    duration: 2,
    delay: 1,
    opacity: 1,
    ease: "power3.out",

});
gsap.to("#main-box .h2", {
    x: 100, // Slide 'Baku' in from the right
    duration: 2,
    delay: 1,
    opacity: 1,
    ease: "power3.out",
});
// ---top box end----


// second section---
gsap.from(".mobile", {
    delay: 0.5,
    duration: 2,
    scrollTrigger: {
        trigger: ".mobile",
        scroller: "body",
        // markers: "true",
        start: "top 0%",
        end: "top -250%",
        scrub: 3,
        pin: true
    }
})

gsap.from(".mobile .h1", {
    transform: "translateX(-80%)",
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".mobile .h1",
        scroller: "body",
        // markers: "true",
        start: "top 0%",
        end: "top -250%",
        scrub: 2,
    }
})
gsap.from(".mobile .h2", {

    transform: "translateX(80%)",
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".mobile .h2",
        scroller: "body",
        // markers: "true",
        start: "top 0%",
        end: "top -250%",
        scrub: 2,
    }
})
gsap.to(".mobile-container", {

    y: -350,
    scrollTrigger: {
        trigger: ".mobile-container",
        scroller: "body",
        markers: "true",
        start: "top 10%",
        end: "top -250%",
        scrub: 2,
    }
})
gsap.to(".mobile-cover", {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        y: -400,
        scrollTrigger: {
            trigger: ".mobile-cover",
            scroller: "body",
            start: "top 0%",
            end: "top -250%",
            scrub: 2,
        }
    })
    //     // second section end--