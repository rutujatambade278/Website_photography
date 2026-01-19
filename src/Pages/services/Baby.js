import "./Baby.css";



const Baby = () => {
  return (
    <div className="baby-page">

      {/* HERO SECTION */}
      <section
        className="baby-hero"
       style={{ backgroundImage: "url(/photos/baby.jpg)" }}
      >
        <div className="hero-overlay">
          <h1>Baby Photoshoot</h1>
          <p>Capturing the purest moments of your little one</p>
        </div>
      </section>

      {/* INTRO CONTENT */}
<section className="baby-content">
  <span className="baby-tagline">Tiny Moments • Big Memories</span>

  <h2>
    Where Every Smile <br />
    Becomes a Forever Memory
  </h2>

  <p>
    Every baby carries a world of innocence, warmth, and priceless emotions.
    Our baby photoshoots are thoughtfully crafted to capture those fleeting
    moments with love, patience, and creativity.
  </p>

  <p>
    From peaceful newborn portraits to joyful toddler expressions, we create
    timeless photographs that tell your baby’s story beautifully — today and
    for years to come.
  </p>
</section>

      {/* FULL WIDTH GALLERY */}
      <section className="baby-gallery">
        <img src="/Baby/DSC03734.jpg" alt="baby" />
        <img src="/Baby/DSC07599.jpg" alt="baby" />
        <img src="/Baby/DSC07912.jpg" alt="baby" />
        <img src="/Baby/DSC03835.jpg" alt="baby" />
        <img src="/Baby/365018952.webp" alt="baby" />
        <img src="/Baby/Baby4.jpg" alt="baby" />
        <img src="/Baby/Baby3.jpg" alt="baby" />
        <img src="/Baby/Baby2.jpg" alt="baby" />
        <img src="/Baby/Baby1.jpg" alt="baby" />
         <img src="/Baby/Baby5.jpg" alt="baby" />
          <img src="/Baby/Baby6.jpg" alt="baby" />
           <img src="/Baby/Baby7.jpg" alt="baby" />
            <img src="/Baby/Baby8.jpg" alt="baby" />
      </section>

      {/* CTA */}
      <section className="baby-cta">
        <h2>Let’s Create Beautiful Memories</h2>
        <p>Book your baby photoshoot today</p>
        <a href="/contact">Book Now</a>
      </section>

    </div>
  );
};

export default Baby;
