import "./Event.css";

const Event = () => {
  return (
    <div className="event-page">

      {/* HERO SLOGAN */}
      <section className="event-hero">
        <h1>
          Moments That <span>Speak</span> <br />
          Louder Than Words
        </h1>
        <p>Event Photography • Real • Raw • Timeless</p>
      </section>

      {/* FULL SCREEN IMAGE COLLAGE */}
      <section className="event-gallery">
        <img src="/photos/event/e1.jpg" alt="event" />
        <img src="/photos/event/e2.jpg" alt="event" />
        <img src="/photos/event/e3.jpg" alt="event" />
        <img src="/photos/event/e4.jpg" alt="event" />
        <img src="/photos/event/e5.jpg" alt="event" />
        <img src="/photos/event/e6.jpg" alt="event" />
        <img src="/photos/event/e7.jpg" alt="event" />
        <img src="/photos/event/e8.jpg" alt="event" />
        <img src="/photos/event/e9.jpg" alt="event" />
      </section>

    </div>
  );
};

export default Event;
