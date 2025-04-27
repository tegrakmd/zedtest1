import { TestimonialSection } from "./compos/TestimonialSection";

const testimonialData = {
  title: "Build by makers, loved by thousand developers",
  subtitle: "Gemini is evolving to be more than just the models...",
  testimonials: [
    {
      size: "big",
      logo: {
        src: "/assets/images/logos/nike.svg",
        alt: "Nike Logo",
      },
      quote: "Tailus has transformed the way I develop...",
      authorName: "Shekinah Tshiokufila",
      authorTitle: "Software Engineer",
      avatar: "/assets/images/avatars/1.jpg",
    },
    // Ajouter d'autres témoignages...
  ],
};

// Initialisation
const testimonialSection = new TestimonialSection(testimonialData);
document.querySelector("#testimonials-container").innerHTML =
  testimonialSection.render();
