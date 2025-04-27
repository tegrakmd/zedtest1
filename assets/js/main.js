// Add blur effect on scroll for about section
gsap.registerPlugin(ScrollTrigger);
// Init Splitting
Splitting();
// Create GSAP timeline for hero elements
const heroTimeline = gsap.timeline({
  defaults: { ease: "power3.out", duration: 0.8 },
});
//
heroTimeline
  .from(".hero_bg-img", {
    scale: 2,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
  })
  .from("nav", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.8,
  })
  .from(
    ".hero_wrapper_top",
    {
      y: -30,
      opacity: 0,
      duration: 0.7,
    },
    "-=0.3"
  )
  .from(
    ".wrapper_hero_team",
    {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.4"
  )
  .from(
    ".hero_wrapper_bottoms ",
    {
      // y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.9,
      scale: 0.9,
    },
    "-=0.3"
  )
  .from(
    ".hero_wrapper_bottom",
    {
      y: 40,
      opacity: 0,
      duration: 0.9,
    },
    "-=0.2"
  );

//
gsap.to(".word", {
  opacity: 1,
  filter: "blur(0px)",
  x: 0,
  scale: 1,
  ease: "elastic.out(1, 1)",
  duration: 4,
  stagger: {
    each: 0.06,
    from: "start",
  },
  delay: 0.2,
});
// Framer-style horizontal animation
// Add animations to the timeline
