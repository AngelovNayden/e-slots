import { html } from "../lib.js";

const homeTemplate = () => html`
  <section
    id="home"
    class="p-5 d-flex flex-column justify-content-center align-items-center"
  >
    <h2 id="landing-text" class="text-black mb-5">Welcome to E-Slots</h2>

    <img
      src="../../images/slot-machines-background.jpg"
      alt="image-of-slots"
      class="fluid-image slot-machine"
    />

    <a class="btn btn-secondary mt-5 p-3" href="/our-work">Look Around</a>
  </section>
`;

export function showHome(ctx, next) {
  ctx.showView(homeTemplate());
}
