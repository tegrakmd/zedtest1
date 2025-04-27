// // Initializes smooth scrolling with Lenis and integrates it with GSAP's ScrollTrigger.
// // Function to set up smooth scrolling.
// const initSmoothScrolling = () => {
//   // Initialize Lenis for smooth scroll effects. Lerp value controls the smoothness.
//   const lenis = new Lenis({ lerp: 0.2 });

//   // Sync ScrollTrigger with Lenis' scroll updates.
//   lenis.on("scroll", ScrollTrigger.update);

//   // Ensure GSAP animations are in sync with Lenis' scroll frame updates.
//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1900); // Convert GSAP's time to milliseconds for Lenis.
//   });

//   // Turn off GSAP's default lag smoothing to avoid conflicts with Lenis.
//   gsap.ticker.lagSmoothing(0);
// };

// // Activate the smooth scrolling feature.
// initSmoothScrolling();
// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
