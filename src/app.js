import { page, render } from "./lib.js";
import { showAbout } from "./views/about.js";
import { showContact } from "./views/contact.js";
import { showHome } from "./views/home.js";
import { showMessageSubmitted } from "./views/messageSubmitted.js";

const root = document.querySelector("#main-content-wrapper");

function showView(content, next) {
  render(content, root);
}

function decoratorContext(ctx, next) {
  ctx.showView = showView;
  next();
}

page(decoratorContext);
page("/", showHome);
page("/about", showAbout);
page("/contact", showContact);
page("/message", showMessageSubmitted);

page.start();
