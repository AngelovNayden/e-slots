import { html } from "../lib.js";

const contactView = onSubmit => html`
  <section class="p-5" id="contact">
   <div className="container">
     <div class="row text-center g-4 our-contact-info">
      <div class="col-md d-flex flex-column justify-content-center align-items-center text-light text-center" id="contact-information">
        <p class="h2">Get In Touch With Us</p>

        <i class="bi bi-arrow-right-circle-fill">
          Address: str 86, Central Park, NY, New York</i
        >

        <i class="bi bi-envelope-fill"> Email: e-slots@gmail.com</i>

        <i class="bi bi-clock-fill"
          >Business Hours: Monday - Friday 8am - 4pm</i
        >
      </div>

      <div class="col-md">
        <a
          href="https://www.google.com/maps/place/86+St/@40.7847358,-73.9698964,17z/data=!4m6!3m5!1s0x89c2589b0f90dd3d:0xbe2f057a6a5ea412!8m2!3d40.7852685!4d-73.9695849!16zL20vMGRua3k2?entry=ttu"
          target="_blank"
        >
          <img
            src="../images/new-york-address.png"
            alt="new-york-add"
            class="img-fluid map mb-4"
            width="500"
            height="500"
          />
        </a>
    </div>
   </div>

    <div class="container userinfo">   
        <form @submit=${onSubmit} class="input-group d-flex flex-column justify-content-center align-items-center text-white user-form mt-5">
             <p class="h2 text-white mt-5">Send Us A Message</p>
            <label htmlFor="firstName" class="mb-3">
                Name:
                <input type="text" class="form-control mt-2" id="firstName" name="firstName"
                placeholder="Enter Your Name"  />
            </label>

            <label htmlFor="email" class="mb-3">
                Email:
                <input type="email" class="form-control mt-2" id="email" name="email"
                placeholder="Enter Your Email" />
            </label>

            <label htmlFor="message" class="mb-3">
                Message:
                <textarea cols="30" rows="10" placeholder="Enter Your Message" id="message-input" name="message" class="form-control mt-3"></textarea>
            </label>

            <button class="btn btn-secondary mb-3" type="submit">Submit</button>
        </form>
    </div>
            
  </section>
`;

export function showContact(ctx, next) {
  ctx.showView(contactView(onSubmit));

  function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let { firstName, email, message } = Object.fromEntries(formData.entries());

    if (firstName === "" || email === "" || message === "") {
      return alert("All fields are required.");
    }

    e.target.reset();
    ctx.page.redirect("/message");
  }
}
