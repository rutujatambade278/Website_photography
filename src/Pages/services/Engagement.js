import "./Engagement.css";

const Engagement = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="eng-hero"
        style={{ backgroundImage: "url(/images/engagement/hero.jpg)" }}
      >
        <div className="eng-hero-content">
          <h1>Engagement Photography</h1>
          <p>
            A promise. A bond. A beautiful beginning — captured forever.
          </p>
        </div>
      </section>

      {/* ===== BREADCRUMB ===== */}
      <div className="eng-breadcrumb">
        Home <span>›</span> Services <span>›</span> Engagement
      </div>

      {/* ===== CONTENT ===== */}
      <section className="eng-content">
        <div className="eng-text">
          <h2>Your Engagement, Our Storytelling</h2>
          <p>
            Engagement is not just a ceremony — it’s the first chapter of your
            forever. We capture candid smiles, stolen glances, emotions and
            traditions in a cinematic and elegant style.
          </p>
          <p>
            From traditional rituals to modern couple portraits, our engagement
            photography focuses on natural emotions and premium aesthetics.
          </p>
        </div>

        <div className="eng-gallery">
          <img src="/images/engagement/1.jpg" alt="Engagement" />
          <img src="/images/engagement/2.jpg" alt="Engagement" />
          <img src="/images/engagement/3.jpg" alt="Engagement" />
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="eng-highlights">
        <div className="eng-card">Candid Moments</div>
        <div className="eng-card">Traditional Rituals</div>
        <div className="eng-card">Couple Portraits</div>
        <div className="eng-card">Premium Editing</div>
      </section>

      {/* ===== CTA ===== */}
      <section className="eng-cta">
        <h2>Make Your Engagement Unforgettable</h2>
        <p>Let’s capture love, laughter & lifelong memories</p>
        <button>Book Engagement Shoot</button>
      </section>
    </>
  );
};

export default Engagement;
