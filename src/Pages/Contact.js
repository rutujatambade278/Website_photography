import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-intro">
  <h1>Hello!</h1>

  <div className="contact-intro-fulltext">
    <h2>
      Thank you for reaching out to me. I am honored and humbled that you are
      considering me for one of the most important aspects of your wedding day.
      I would love to hear from you, your story and all about your wedding.
      Getting to know you better is a significant part of the entire process.
      I want to know more about the both of you, your story, your connection,
      your wedding day and how excited you are!
      Tell me all the tiny details, stories and the people that matter the most.
      From sacred rituals to stolen glances — tell me everything.
    </h2>
  </div>

  <h3 className="contact-note">
    For prices and availability, simply fill the form below. I generally reply
    within <strong>2 to 4 hours</strong>. If you don’t hear from me within 24
    hours, please check your spam folder. If you’re in a hurry, feel free to
    call me at <strong>+91 96 23 44 84 88</strong>.
  </h3>
</div>


      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-card">
            <h3>Message Sent Successfully 🎉</h3>
            <p>We will contact you shortly</p>
          </div>
        </div>
      )}

      {/* CONTACT CARD */}
      <div className="contact-card-full">
        <div className="contact-left">
          <img src="/photos/contact.jpg" alt="Contact" />
        </div>

        <div className="contact-right">
          <h2>Get in Touch</h2>
          <p>Tell us about your event & we’ll reach out.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />

            <input type="text" placeholder="Event Location" />
            <input type="date" />

            <select>
              <option value="">Select Service</option>
              <option>Photography</option>
              <option>Cinematography</option>
              <option>Both</option>
            </select>

            <input type="number" placeholder="Guest Count" />

            <textarea rows="4" placeholder="Your Message"></textarea>

            <button className="btn-animate">Send Message</button>
          </form>
        </div>
      </div>

      {/* MAP FULL WIDTH */}
      <div className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
