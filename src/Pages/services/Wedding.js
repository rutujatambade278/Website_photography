import "./Wedding.css";

const Wedding = () => {
  return (
    <div className="wedding-page">

      {/* HERO */}
      <section className="wedding-hero">
        <img
          src="/photos/wedding-hero.jpg"
          alt="Wedding"
          className="wedding-hero-img"
        />

        <div className="wedding-overlay"></div>

        <div className="wedding-hero-text">
          <span>WEDDING STORIES</span>
          <h1>Timeless Love Stories</h1>
          <p>Captured with elegance, emotions & honesty</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="wedding-intro">
        <h2>Your Love. Your Story.</h2>
        <p>
          We believe wedding photography is about capturing emotions,
          traditions and real moments. From sacred rituals to stolen
          glances — we document everything with heart.
        </p>
      </section>

      {/* GALLERY */}
      <section className="wedding-gallery">
        <img src="/photos/w1.jpg" alt="" />
        <img src="/photos/w2.jpg" alt="" />
        <img src="/photos/w3.jpg" alt="" />
        <img src="/photos/w4.jpg" alt="" />
        <img src="/photos/w5.jpg" alt="" />
        <img src="/photos/w6.jpg" alt="" />
      </section>

      {/* QUOTE */}
      <section className="wedding-quote">
        <h2>
          “We don’t just capture weddings,
          we preserve emotions forever.”
        </h2>
      </section>

    
      <section className="wedding-cta">
        <h2>Let’s Capture Your Wedding</h2>
        <button>Book Your Date</button>
      </section>

    </div>
  );
};

export default Wedding;
