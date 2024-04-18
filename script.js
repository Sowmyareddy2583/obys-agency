var t1 = gsap.timeline();
t1.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});
t1.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 27);
  },
});
t1.to(".line h2",{
    opacity:1,
    animationName:"anime"
})
t1.to("#loader", {
  opacity: 0,
  delay: 4,
  duration: 0.4,
});
tl.from("#page1", {
    delay: 0.1,
    opacity: 0, 
    y: 1600,
    duration: 0.5,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
