import { useEffect } from "react";
import "./MyPhotographyStyle.css";

/* ===== DATA ===== */
const stylesData = [
  {
    title: "Storytelling Approach",
    text: "I capture moments as they naturally unfold. Every photograph tells a story filled with real emotions and meaningful connections.",
    icon: "📖",
  },
  {
    title: "Natural & Timeless",
    text: "My editing is clean, soft, and timeless. I avoid heavy filters so your memories stay real and beautiful forever.",
    icon: "🌿",
  },
  {
    title: "Emotion Over Poses",
    text: "Instead of stiff posing, I gently guide you to create natural expressions and genuine moments.",
    icon: "❤️",
  },
  {
    title: "Cinematic Details",
    text: "From tiny details to grand celebrations, I focus on light, composition, and mood for a cinematic look.",
    icon: "🎬",
  },
];

/* ===== COMPONENT ===== */
const MyPhotographyStyle = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".style-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // ✅ animation only once
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((card) => observer.observe(card));

    // ✅ cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <section className="style-section">
      {/* HEADER */}
      <header className="style-header">
        <h1>My Photography Style</h1>
        <p>
          A thoughtful blend of emotion, storytelling, and timeless visuals
        </p>
      </header>

      {/* BRIEF INTRO */}
      <div className="style-brief">
        <p>
          My photography is inspired by real moments and honest emotions.
          I believe the best photographs happen naturally — when you are
          fully present, relaxed, and being yourself.
          My goal is to preserve your memories in a way that feels authentic,
          cinematic, and timeless.
        </p>
      </div>

      {/* STYLE CARDS */}
      <div className="style-grid">
        {stylesData.map((item, index) => (
          <article className="style-card" key={index}>
            <span className="style-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      {/* EXTRA SECTION */}
      <div className="style-extra">
        <h2>Why My Style Feels Different</h2>
        <p>
          I don’t just document events — I focus on emotions, light, and
          meaningful connections. Every frame is carefully edited to maintain
          a luxury yet natural feel, so your photographs remain timeless for
          years to come.
        </p>
      </div>
    </section>
  );
};

export default MyPhotographyStyle;
