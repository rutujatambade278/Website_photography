import { useEffect, useState } from "react";
import "./Family.css";

const images = [
  "/photos/family/f1.jpg",
  "/photos/family/f2.jpg",
  "/photos/family/f3.jpg",
  "/photos/family/f4.jpg",
  "/photos/family/f5.jpg",
  "/photos/family/f6.jpg",
  "/photos/family/f7.jpg",
  "/photos/family/f8.jpg",
];

const Family = () => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="family-page">

      {/* HERO */}
      <section className="family-hero">
        <div className="family-overlay">
          <h1>Family Moments Forever</h1>
          <p>Love • Togetherness • Memories</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="family-intro reveal">
        <h2>Because Family Is Everything</h2>
        <p>
          Family photography is about capturing love, laughter, and the
          unbreakable bond you share. Every smile, every hug, every glance
          becomes a memory you’ll cherish forever.
        </p>
      </section>

      {/* GALLERY */}
      <section className="family-gallery">
        {images.map((img, i) => (
          <div
            key={i}
            className="family-card reveal"
            onClick={() => setLightbox(img)}
          >
            <img src={img} alt="family" />
          </div>
        ))}
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="fullscreen" />
          <span className="close">×</span>
        </div>
      )}

    </div>
  );
};

export default Family;
