import React, { useEffect, useState } from "react";
import "./Home.css";

/* ================= HERO SLIDES ================= */
const slides = [
  {
    tag: "ENGAGEMENT",
    title: "Photoshoot",
    image: "/Gallary/IMG_0299.JPG",
  },
  {
    tag: "PRE WEDDING",
    title: "Photoshoot",
    image: "/Gallary/DSC08568.jpg",
  },
  {
    tag: "MATERNITY",
    title: "Indoor Photoshoot",
    image: "/Gallary/IMG_0158.jpg",
  },
  {
    tag: "WEDDING",
    title: "Photoshoot",
    image: "/Gallary/DSC09251.JPG",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  <div className="hero-text" key={current}>
  <span className="hero-tag">{slides[current].tag}</span>

  <h1 className="hero-title">
    {slides[current].title.split(" ").map((word, i) => (
      <span
        key={i}
        className="hero-word"
        style={{ animationDelay: `${i * 0.2}s` }}
      >
        {word}&nbsp;
      </span>
    ))}
  </h1>

  <button className="hero-btn">CALL NOW</button>
</div>


  /* ===== AUTO SLIDER ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ===== SCROLL ANIMATION ===== */
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <div className="home-page">
      {/* ================= HERO SLIDER ================= */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>

            <div className="hero-text">
              <span>{slide.tag}</span>
              <h1>{slide.title}</h1>
              <button>CALL NOW</button>
            </div>
          </div>
        ))}

        <div className="hero-indicator">
          <span>{current + 1}</span>
          <span className="line"></span>
          <span>{slides.length}</span>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="intro-section">
        <div className="intro-image">
          <img src="/photos/intro.jpg" alt="Wedding Photographer" />
        </div>

        <div className="intro-text">
          <h1>
            Hello. My name is <span>XYZ</span>, I’m a photographer in
            <br /> Pune & Mumbai
          </h1>

          <p className="intro-subtitle">
            dedicated to telling honest & authentic moments in <em>weddings</em>
          </p>

          <div className="intro-divider">
            <span></span>
            <i className="arrow">⌄</i>
            <span></span>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section">
        <h2 className="services-title">Wedding Services We Offer</h2>
        <p className="services-subtitle">EVERYTHING UNDER ONE ROOF</p>
        <div className="services-line"></div>

        <div className="services-grid">
          <div className="service-card">
            <img src="/photos/service1.jpg" alt="Pre Wedding" />
            <h3>Pre Wedding Photography</h3>
          </div>

          <div className="service-card">
            <img src="/photos/service2.jpg" alt="Wedding" />
            <h3>Wedding Photography</h3>
          </div>

          <div className="service-card">
            <img src="/photos/service3.jpg" alt="Cinematography" />
            <h3>Wedding Cinematography</h3>
          </div>

          <div className="service-card">
            <img src="/photos/service4.jpg" alt="Albums" />
            <h3>Wedding Albums</h3>
          </div>
        </div>
      </section>
{/* ================= STORY ================= */}
<section className="story-section">
  {/* LEFT TEXT */}
  <div className="story-text reveal-left">
    <h2>Your Story, Captured Beautifully</h2>

    <p className="story-tagline">Love. Laughter. Forever.</p>

    <div className="story-lines">
      <p>Moments made eternal.</p>
      <p>Because love deserves to be remembered.</p>
      <p>Real weddings. Real emotions.</p>
      <p>We shoot what it feels like, not what it looks like.</p>
      <p>Moments that matter. Memories forever.</p>
    </div>
  </div>

  {/* RIGHT IMAGES */}
  <div className="story-images reveal-right">

    {/* TOP TWO IMAGES */}
    <div className="story-images-top">
      <img
        src="/photos/story1.jpg"
        alt="Couple 1"
        className="story-img small"
      />
      <img
        src="/photos/story2.jpg"
        alt="Couple 2"
        className="story-img small"
      />
    </div>

    {/* BOTTOM IMAGE */}
    <div className="story-images-bottom">
      <img
        src="/photos/story3.jpg"
        alt="Couple 3"
        className="story-img big"
      />
    </div>

  </div>
</section>

      {/* ================= PROVIDE ================= */}
      <section className="provide-section">
        <h2 className="provide-title">We Also Provide</h2>
        <div className="provide-line"></div>

        <div className="provide-grid">
          <div className="provide-card">
            <img src="/photos/provider1.jpg" alt="Maternity" />
            <h3>Maternity Shoot</h3>
          </div>

          <div className="provide-card">
            <img src="/photos/provider2.jpg" alt="Kids" />
            <h3>Kids Shoot</h3>
          </div>

          <div className="provide-card">
            <img src="/photos/provider4.jpg" alt="Birthday" />
            <h3>Birthday</h3>
          </div>

          <div className="provide-card">
            <img src="/photos/provider3.jpg" alt="Anniversary" />
            <h3>Wedding Anniversary</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;