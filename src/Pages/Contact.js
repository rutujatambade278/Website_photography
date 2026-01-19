import { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  // scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );
    reveals.forEach(r => observer.observe(r));
  }, []);

  return (
    <div className="contact-page">

      {/* ================= HELLO INTRO ================= */}
      <section className="contact-hello reveal">
        <h1>Hello!</h1>
        <p>
         Thank you for reaching out to me. I am honored and humbled that you are considering me for one of the most important aspects of your wedding day. I would love to hear from you, your story and all about your wedding. Getting to know you better is a significant part of the entire process.
          I want to know more about the both of you, your story, your connection, your wedding day and how excited you are! Tell me all the tiny details, stories and the people that matter the most. From sacred rituals to stolen glances — tell me everything.
        </p>
      </section>

      {/* ================= PHOTOGRAPHER INFO ================= */}
      <section className="contact-photographer reveal">
        
        <div className="photo-img">
          <img src="/MY/123.jpg" alt="Photographer" />
        </div>

        <div className="photo-info">
          <h2>Don't Hesitate.</h2>
          <p>
            I believe in real emotions, genuine moments and timeless storytelling.
            From sacred rituals to stolen glances — every detail matters.
          </p>

          <ul>
            <li><strong>📍 Address:</strong> Pune, Maharashtra</li>
            <li><strong>📧 Email:</strong> rushibhor214@gmail.com</li>
            <li><strong>📞 Call:</strong> +91 8856 886940</li>
          </ul>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="contact-form-section reveal">
        <h2>Get in Touch</h2>
        <p>Tell me about your wedding or event</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Event Location" />
          <input type="date" />

          <select>
            <option>Select Service</option>
            <option>Photography</option>
            <option>Cinematography</option>
            <option>Both</option>
          </select>

          <textarea rows="4" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* ================= MAP ================= */}
      <section className="contact-map reveal">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
          loading="lazy"
        />
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-card">
            <h3>Message Sent 🎉</h3>
            <p>I’ll contact you shortly</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Contact;
