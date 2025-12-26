import React, { useEffect } from "react";
import "./Maternity.css";

const images = [
  "/photos/provider2.jpg",
  "/photos/services3.jpg",
  "/photos/mehandi3.jpg",
  "/photos/natures.jpg",
  "/photos/image.png",
  "/photos/hero3.jpg",
];

const reviews = [
  {
    name: "Emily R.",
    comment: "Amazing experience! The photos captured every emotion beautifully.",
  },
  {
    name: "Sophia L.",
    comment: "Highly professional and made me feel comfortable throughout the shoot.",
  },
];

const Maternity = () => {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedItems.forEach((item) => observer.observe(item));
  }, []);

  return (
    <div className="maternity-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Celebrate Motherhood</h1>
        <p>Beautiful memories captured in every moment</p>

      {/* Image Grid Section */}
      <div className="image-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className={`grid-item animate-on-scroll ${
              index % 2 === 0 ? "slide-left" : "slide-right"
            }`}
          >
            <img src={img} alt={`maternity ${index}`} />
          </div>
        ))}
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="reviews">
        <h2 className="section-title animate-on-scroll fade-up">
          What Our Clients Say
        </h2>
        <div className="review-cards">
          {reviews.map((rev, idx) => (
            <div key={idx} className="review-card animate-on-scroll fade-up">
              <p>"{rev.comment}"</p>
              <h4>- {rev.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta animate-on-scroll fade-up">
        <h2>Book Your Maternity Session Today</h2>
        <button><a href="/contact">Book Now</a></button>
    
      </section>
    </div>
  );
};

export default Maternity;
