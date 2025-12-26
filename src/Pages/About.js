import React, { useEffect } from "react";
import "./About.css";

const About = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.25 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about">

     {/* ===== HERO FULL IMAGE WITH TEXT ===== */}
<section className="about-hero">
  <img src="/photos/natures.jpg" alt="Photographer" className="hero-bg" />

  <div className="hero-overlay"></div>

  <div className="about-content">
    <span className="about-tag">ABOUT ME</span>
    <h1>Stories through my lens</h1>
    <p>Moments fade. Photographs remain forever.</p>
  </div>
</section>

    {/* ===== STORY ===== */}
<section className="about-story">

  {/* LEFT SIDE */}
  <div className="story-left reveal">
    <h2>Photography is not just my work.</h2>
    <h3>It’s how I feel the world.</h3>

    <div className="story-image">
      <img src="/Gallary/IMG_0738.PNG" alt="Photography Story" />
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="story-right reveal">
    <p>
      I’m a professional photographer with over 5+ years of experience capturing
      life’s most meaningful moments — from soulful weddings and tender maternity
      journeys to timeless portraits and candid lifestyle stories.
    </p>

    <p>
      Photography for me is more than just pressing a shutter. It’s about observing
      quietly, understanding emotions, and being present in the moment without
      interrupting its natural flow.
    </p>

    <p>
      My approach is simple yet intentional — I let moments unfold naturally while
      I capture them honestly and artistically. I focus on real smiles, raw emotions,
      subtle glances, and the unspoken connections that make every story unique.
    </p>

    <p>
      I believe the most powerful photographs are the ones you don’t just see,
      but truly feel. Images that take you back in time, letting you relive the love,
      warmth, and emotions long after the moment has passed.
    </p>

    <p>
      Every shoot is a collaboration, and my goal is to create a comfortable space
      where you can be yourself — because that’s where the most beautiful stories
      are born.
    </p>
  </div>

</section>


{/* ===== STATS ===== */}
<section className="about-stats">
  <div className="stat reveal">
    <h2>5+</h2>
    <p>Years <br /> Experience</p>
  </div>

  <div className="stat reveal">
    <h2>300+</h2>
    <p>Happy <br /> Clients</p>
  </div>

  <div className="stat reveal">
    <h2>1500+</h2>
    <p>Stories <br /> Captured</p>
  </div>
</section>


      {/* ===== IMAGE CAROUSEL ===== */}
      <section className="about-carousel">
        <div className="carousel-track">
          <img src="/photos/wedding1.jpg" alt="" />
          <img src="/photos/wedding2.jpg" alt="" />
          <img src="/photos/hero1.jpg" alt="" />
          <img src="/photos/hero3.jpg" alt="" />
          <img src="/photos/nature.png" alt="" />
          <img src="/photos/bday3.jpg" alt="" />

          {/* duplicate for seamless loop */}
          <img src="/photos/service3.jpg" alt="" />
          <img src="/photos/video1.mp4" alt="" />
          <img src="/photos/provider4.jpg" alt="" />
            <img src="/photos/provider2.jpg" alt="" />
        </div>
      </section>

      {/* ===== SIGNATURE ===== */}
      <section className="about-signature reveal">
        <p>Let’s create something timeless together.</p>
        <h3>— XYZ Photography</h3>
      </section>

    </div>
  );
};

export default About;
