import { useState } from "react";
import "./Question.css";

/* ✅ STEP 1: DATA COMPONENTच्या वर define कर */
const faqData = [
  {
    category: "About My Photography Style",
    questions: [
      {
        q: "How would you describe your photography style?",
        a: `I focus on honest, real, and emotionally connected storytelling.
        My goal is to document your wedding in a natural and timeless way,
        capturing both grand moments and quiet emotions.`
      }
    ]
  },
  {
    category: "Booking & Availability",
    questions: [
      {
        q: "How far in advance should we book you?",
        a: "I recommend booking 6–12 months in advance, especially for peak wedding season."
      },
      {
        q: "How do we book you?",
        a: `Get in touch → Consultation → Pricing guide → Contract & 50% retainer
        to lock in your date.`
      }
    ]
  },
  {
    category: "Editing & Delivery",
    questions: [
      {
        q: "When will we receive our photos & videos?",
        a: `Preview images within 20 days.
        Full gallery within 45–60 days.
        Cinematic films: 90 days.`
      }
    ]
  }
];

/* ✅ STEP 2: COMPONENT */
const Question = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">
        Everything you need to know before we work together
      </p>

      {faqData.map((item, i) => (
        <div key={i} className="faq-block">
          <h3 className="faq-category">{item.category}</h3>

          {item.questions.map((qna, j) => {
            const index = `${i}-${j}`;
            return (
              <div
                key={index}
                className={`faq-item ${active === index ? "open" : ""}`}
                onClick={() => toggle(index)}
              >
                <div className="faq-question">
                  <span>{qna.q}</span>
                  <span className="icon">
                    {active === index ? "–" : "+"}
                  </span>
                </div>

                <div className="faq-answer">
                  <p>{qna.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default Question;
