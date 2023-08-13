import { html } from "../lib.js";

const messageSubmittedTemplate = () => html`
  <section id="submittedMessage">
    <div class="message-container">
      <p class="text-center" id="message">Message Submitted!</p>
      <i class="bi bi-patch-check-fill h1"></i>

      <a href="/" class="btn btn-secondary">Go Back Home</a>
    </div>
  </section>
`;

export function showMessageSubmitted(ctx, next) {
  ctx.showView(messageSubmittedTemplate());
}
