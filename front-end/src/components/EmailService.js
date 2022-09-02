import emailjs from "emailjs-com";
import React from "react";

function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mim8l5d",
        "template_qbs000p",
        e.target,
        "WYR2yXHFo3iIL7bXN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group pt-2 mx-auto">
              <label
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={"abc@gmail.com"}
              />
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactUs;
