import { html } from "../lib.js";
import testimonials from "../utils/testimonialsData.js";

const testimonialsTemplate = () => html`
  <section id="testimonial">
    <div class="row text-center g-4 testimonial-container m-2 ">
      <p class="h2">Testimonials</p>

      ${testimonials.map(t => testimonialTemplate(t))}
    </div>
  </section>
`;

const testimonialTemplate = ({ image, testimonial, name }) => html`
  <div class="col-md">
    <div class="card bg-dark text-light">
      <p id="landing-text" class="text-white h2">${name}</p>

      <div class="mb-3">
        <img
          src="${image}"
          alt="image-of-a-man"
          width="300"
          class="testimonial-images"
        />
      </div>

      <p>${testimonial}</p>
    </div>
  </div>
`;

export function showTestimonials(ctx, next) {
  ctx.showView(testimonialsTemplate());
}
