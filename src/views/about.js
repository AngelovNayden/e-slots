import { html } from "../lib.js";

const aboutTemplate = () => html`
  <section
    class="p-5 d-flex flex-column justify-content-center align-items-center"
    id="about"
  >
    <div class="row text-center g-4">
      <p class="h2">About Us</p>
      <div class="col-md">
        <div class="card bg-dark text-light">
          <p id="landing-text" class="text-white h2">Who Are We ?</p>

          <div class="h1 mb-3">
            <i class="bi bi-dice-5"></i>
          </div>

          <p>
            Welcome to E-Slots, a leading name in the world of online
            e-gambling. We are dedicated to providing an unparalleled gaming
            experience for enthusiasts around the globe. With a passion for
            innovation and a commitment to excellence, we bring you a diverse
            range of thrilling games and entertainment.
          </p>
        </div>
      </div>

      <div class="col-md">
        <div class="card bg-dark text-light">
          <p id="landing-text" class="text-white h2">Our Vision</p>

          <div class="h1 mb-3">
            <i class="bi bi-7-square-fill"></i>
            <i class="bi bi-7-square-fill"></i>
            <i class="bi bi-7-square-fill"></i>
          </div>

          <p>
            At E-Slots, our vision is to create a virtual gaming haven where
            players can engage in exciting e-gambling activities in a safe,
            responsible, and fair environment. We strive to become the ultimate
            destination for those seeking entertainment and adventure, all from
            the comfort of their screens.
          </p>
        </div>
      </div>

      <div class="col-md flex-fill">
        <div class="card bg-dark text-light">
          <p id="landing-text" class="text-white h2">Cutting-Edge Technology</p>

          <div class="h1 mb-3">
            <i class="bi bi-lightbulb-fill"></i>
          </div>

          <p>
            We leverage the latest in technology to provide a seamless and
            immersive e-gambling experience. Our platform is designed for easy
            navigation and accessibility across devices, enabling you to enjoy
            our games anytime, anywhere.
          </p>
        </div>
      </div>

      <div class="col-md flex-fill">
        <div class="card bg-dark text-light">
          <p id="landing-text" class="text-white h2">Responsible Gambling</p>

          <div class="h1 mb-3">
            <i class="bi bi-life-preserver"></i>
          </div>

          <p>
            We understand the importance of responsible gaming. As a responsible
            e-gambling company, we prioritize the well-being of our players. Our
            platform features robust tools and resources to help players
            maintain control over their gaming habits. We promote ethical
            gameplay and adhere to stringent regulations to ensure the safety of
            our users.
          </p>
        </div>
      </div>

      <div class="col-md">
        <div class="card bg-dark text-light">
          <p id="landing-text" class="text-white h2">Customer Satisfaction</p>

          <div class="h1 mb-3">
            <i class="bi bi-emoji-smile-fill"></i>
          </div>

          <p>
            Our commitment to customer satisfaction is unwavering. Our friendly
            and knowledgeable support team is available around the clock to
            assist you with any inquiries or concerns. We believe in building
            strong relationships with our players and providing them with the
            support they deserve. Join us on a journey of excitement,
            entertainment, and endless possibilities.
          </p>
        </div>
      </div>

      <div class="col-md">
        <div class="card bg-dark text-light">
          <p id="landing-text" class="text-white h2">Diversity On The Market</p>

          <div class="h1 mb-3">
            <i class="bi bi-suit-club-fill"></i>
          </div>

          <p>
            Discover a comprehensive selection of e-gambling options that cater
            to a wide range of preferences. From classic casino games to modern
            and interactive betting experiences, we offer something for every
            type of player. Our games are carefully curated to ensure quality,
            entertainment, and the chance to win big. We care for out customers
            satisfaction and enjoyment.
          </p>
        </div>
      </div>
    </div>
  </section>
`;

export function showAbout(ctx, next) {
  ctx.showView(aboutTemplate());
  console.log("it works");
  
}
