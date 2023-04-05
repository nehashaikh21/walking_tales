import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { send } from "emailjs-com";

export default function FeedBackdata() {
  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [message, set_message] = useState("");

  const handleName = (e) => {
    set_sender_name(e.target.value);
  };

  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };

  const handlemessage = (e) => {
    set_message(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_4bm52mf",
      "template_f1dfq1l",
      { sender_name, sender_email, message },
      "hv0P0yt8BmoP5RYe0"
    )
      .then((response) => {
        console.log(
          "Message sent successfully",
          response.status,
          response.text
        );
      })
      .catch((err) => {
        console.log("Failed", err);
      });
    set_sender_name("");
    set_sender_email("");
    set_message("");
  };

  return (
    <>
      <Header />

      <div className="container py-3">
        <div className="card-body p-4 p-md-5 rounded shadow">
          <h4> Please Submit your FeedBack </h4>

          <form id="feedbackForm" className="px-md-2 " onSubmit={sendMail}>
            <div className="form-outline mb-4">
              <label className="form-label">Name &nbsp;</label>
              <input
                type="text"
                name="sender_name"
                value={sender_name}
                onChange={handleName}
                required
                placeholder="Please enter your name"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Email &nbsp;</label>
              <input
                type="text"
                name="sender_email"
                value={sender_email}
                onChange={handleEmail}
                required
                placeholder="Please enter your email "
              />
            </div>

            <div className="col-md-9 pe-5 ">
              <label className="form-message">Message &nbsp;</label>
              <textarea
                value={message}
                onChange={handlemessage}
                required
                placeholder="your message"
                className="form-control-sm"
                rows="4"
              />
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success my-4 text-bg-success "
              >
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
