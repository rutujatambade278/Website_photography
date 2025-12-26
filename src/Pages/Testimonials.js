import { useEffect, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Amit & Priya",
    text:
      "Every photo felt alive. You captured emotions we didn’t even notice on the day.",
  },
  {
    name: "Rohit Sharma",
    text:
      "Professional, calm, creative. The wedding film still gives us goosebumps.",
  },
  {
    name: "Neha Kulkarni",
    text:
      "More than photography — it was storytelling. Absolutely magical work.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials">
      <h2>Words from our Clients</h2>

      <div className="testimonial-box">
        <p className="quote">“{testimonials[index].text}”</p>
        <h4>- {testimonials[index].name}</h4>
      </div>
    </section>
  );
};

export default Testimonials;
