export class TestimonialSection extends HTMLElement {
  constructor() {
    super();
    this.defaultData = {
      title: "Build by makers, loved by thousand developers",
      subtitle:
        "Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.",
      testimonials: [
        {
          size: "big",
          quote:
            "Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow.",
          authorName: "Shekinah Tshiokufila",
          authorTitle: "Software Engineer",
          avatar: "./assets/images/avatars/1.jpg",
          logo: {
            src: "https://html.tailus.io/blocks/customers/nike.svg",
            alt: "Nike Logo",
          },
        },
        {
          size: "medium",
          quote:
            "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.",
          authorName: "Jonathan Yombo",
          authorTitle: "Software Engineer",
          avatar: "./assets/images/avatars/2.jpg",
        },
        {
          size: "small1",
          quote:
            "Great work on tailfolio template. This is one of the best personal website that I have seen so far!",
          authorName: "Yucel Faruksahan",
          authorTitle: "Creator, Tailkits",
          avatar: "./assets/images/avatars/3.jpg",
        },
        {
          size: "small2",
          quote:
            "Great work on tailfolio template. This is one of the best personal website that I have seen so far!",
          authorName: "Rodrigo Aguilar",
          authorTitle: "Creator, TailwindAwesome",
          avatar: "./assets/images/avatars/4.jpg",
        },
      ],
    };
    this.data = this.defaultData;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="testimonial_section padding-global">
        <div class="testimonial_container max_container padding_section_large">
          <div class="testmonial_wrapper">
            ${this.renderHeader()}
            <div class="testimonial-grid">
              ${this.data.testimonials
                .map((t) => this.renderTestimonial(t))
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderHeader() {
    return `
      <div class="testmonial_header">
        <h2 class="testmonial_heading">${this.data.title}</h2>
        <p class="testmonial_subtitle">${this.data.subtitle}</p>
      </div>
    `;
  }

  renderTestimonial(testimonial) {
    return `
      <div class="card card-${testimonial.size}">
        ${testimonial.logo ? this.renderLogo(testimonial.logo) : ""}
        <div class="content">
          <blockquote class="blockquote">
            <p class="${
              testimonial.size.includes("small")
                ? "quote-text-small"
                : "quote-text"
            }">
              ${testimonial.quote}
            </p>
            ${this.renderAuthor(testimonial)}
          </blockquote>
        </div>
      </div>
    `;
  }

  renderLogo(logo) {
    return `
      <header>
        <img class="card-logo" 
             src="${logo.src}" 
             alt="${logo.alt || "Company logo"}"
             loading="lazy">
      </header>
    `;
  }

  renderAuthor(testimonial) {
    return `
      <div class="citation">
        <div class="avatar">
          <img src="${testimonial.avatar}" 
               alt="${testimonial.authorName}"
               loading="lazy">
        </div>
        <div class="author-info">
          <cite class="author-name">${testimonial.authorName}</cite>
          <span class="author-title">${testimonial.authorTitle}</span>
        </div>
      </div>
    `;
  }
}

customElements.define("testimonial-section", TestimonialSection);
