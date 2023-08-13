import { html } from "../lib.js";
import games from "../utils/games.js";

function onHover(e) {
  const gameCard = e.currentTarget;

  const gameSummary = gameCard.nextElementSibling.nextElementSibling;
  gameSummary.style.opacity = "1";
  gameSummary.style.maxHeight = "1000px";
}

function onMouseOut(e) {
  const gameCard = e.currentTarget;

  const gameSummary = gameCard.nextElementSibling.nextElementSibling;
  gameSummary.style.opacity = "0";
  gameSummary.style.maxHeight = "0";
}

const workTemplate = () => html`
  <section id="work">
    <div
      class="row d-flex m-3 text-center align-items-center justify-content-center"
    >
      <p class="h2">Our Work</p>

      ${games.map(game => gameCardTemplate(game))}
    </div>
  </section>
`;

const gameCardTemplate = game => html`
  <div class="col-md">
    <div
      class="card bg-dark text-light d-flex m-2 text-center align-items-center justify-content-center"
    >
      <img
        src="${game.image}"
        alt="${game.name}"
        width="300"
        class="m-3 game-image"
        @mouseenter=${onHover}
        @mouseleave=${onMouseOut}
      />

      <a
        href="https://www.casino.org/slots/free/"
        target="_blank"
        class="btn btn-secondary m-3"
        >Go And Play</a
      >

      <p class="game-summary">${game.summary}</p>
    </div>
  </div>
`;

export function showWork(ctx, next) {
  ctx.showView(workTemplate(onHover, onMouseOut));
}
