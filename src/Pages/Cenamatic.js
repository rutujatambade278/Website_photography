import React from "react";
import "./Cenamatic.css";

const videos = [
  {
    title: "Wedding Cinematic Film",
    subtitle: "A timeless love story",
    video: "/videos/cinematic1.mp4",
  },
  {
    title: "Pre-Wedding Story",
    subtitle: "Emotion • Romance • Drama",
    video: "/videos/cinematic2.mp4",
  },
  {
    title: "Engagement Highlights",
    subtitle: "Moments that matter",
    video: "/videos/cinematic3.mp4",
  },
  {
    title: "Reception Film",
    subtitle: "Lights • Music • Celebration",
    video: "/videos/cinematic4.mp4",
  },
];

const Cinematic = () => {
  return (
    <div className="cinematic-page">

      {/* ===== HERO ===== */}
      <section className="cinematic-hero">
        <div className="cinematic-overlay">
          <h1>Cinematic Films</h1>
          <p>We don’t shoot videos — we craft stories</p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="cinematic-intro reveal">
        <h2>Our Cinematic Approach</h2>
        <p>
          Every frame is carefully composed, every moment thoughtfully captured.
          Our cinematic films blend emotion, storytelling, and aesthetics to
          create timeless wedding memories.
        </p>
      </section>

      {/* ===== VIDEO GRID ===== */}
      <section className="cinematic-grid">
        {videos.map((item, index) => (
          <div className="cinematic-card reveal" key={index}>
            <video
              src={item.video}
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />
            <div className="cinematic-card-overlay">
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
            </div>
          </div>
        ))}
      </section>

      {/* ===== CTA ===== */}
      <section className="cinematic-cta">
        <h2>Let’s Tell Your Story</h2>
        <p>Your wedding deserves a cinematic experience</p>
        <a href="/contact">Book Cinematic Shoot</a>
      </section>

    </div>
  );
};

export default Cinematic;
