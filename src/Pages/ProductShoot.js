import React, { useEffect } from "react";
import "./ProductShoot.css";

const products = [
  {
    title: "Wedding Photography",
    price: "Starting ₹45,000",
    image: "/products/wedding.jpg",
  },
  {
    title: "Cinematic Wedding Film",
    price: "Starting ₹75,000",
    image: "/products/cinematic.jpg",
  },
  {
    title: "Pre-Wedding Shoot",
    price: "Starting ₹25,000",
    image: "/products/prewedding.jpg",
  },
  {
    title: "Drone Coverage",
    price: "Starting ₹18,000",
    image: "/products/drone.jpg",
  },
  {
    title: "Album Designing",
    price: "Starting ₹12,000",
    image: "/products/album.jpg",
  },
  {
    title: "Live Streaming",
    price: "Starting ₹15,000",
    image: "/products/live.jpg",
  },
];

const ProductShoot = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      cards.forEach((card) => {
        if (card.getBoundingClientRect().top < window.innerHeight - 100) {
          card.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="product-page">

      {/* HERO */}
      <section className="product-hero">
        <div className="product-hero-overlay">
          <h1>Our Premium Services</h1>
          <p>Luxury photography & cinematic experiences</p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="product-grid">
        {products.map((item, index) => (
          <div className="product-card reveal" key={index}>
            <div className="product-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="product-content">
              <h3>{item.title}</h3>
              <span>{item.price}</span>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="product-cta">
        <h2>Need Custom Package?</h2>
        <p>We design services tailored to your story</p>
        <a href="/contact">Get Quote</a>
      </section>

    </div>
  );
};

export default ProductShoot;
