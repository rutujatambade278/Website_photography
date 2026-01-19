import "./Event.css";

const Event = () => {
  return (
    <div className="event-page">

      {/* HERO */}
      <section className="event-hero">
        <h1>
          Moments That <span>Speak</span> <br />
          Louder Than Words
        </h1>
        <p>Event Photography • Real • Raw • Timeless</p>
      </section>

      {/* IMAGE GALLERY */}
      <section className="event-gallery">
        <img src="/Event/IMG_3775.jpg" alt="event" />
        <img src="/photos/event/e2.jpg" alt="event" />
        <img src="/photos/event/e3.jpg" alt="event" />
        <img src="/photos/event/e4.jpg" alt="event" />
        <img src="/Event/IMG_3803.jpg" alt="event" />
        <img src="/photos/event/e6.jpg" alt="event" />
        <img src="/photos/event/e7.jpg" alt="event" />
        <img src="/photos/event/e8.jpg" alt="event" />
        <img src="/photos/event/e9.jpg" alt="event" />
      </section>

      {/* FULL SCREEN VIDEO */}
      <section className="event-video">
        <video autoPlay muted loop playsInline>
          <source src="/Event/IMG_3811.mp4" type="video/mp4" />
        </video>

        <div className="video-text">
          <h2>
            Feel the <span>Energy</span>
          </h2>
          <p>Every frame tells a story</p>
        </div>
      </section>

    </div>
  );
};

export default Event;
