import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./portfolio.css";

Modal.setAppElement("#root");

const videos = [
  "/photos/video.mp4",
  "/photos/video1.mp4",
];

const images = [
  "/Gallary/DSC07350.JPG",
  "/Gallary/DSC09251.JPG",
  "/Gallary/IMG_0158.JPG",
  "/Gallary/IMG_0736.JPG",
  "/Gallary/DSC07698.JPG",
  "/Gallary/IMG_0745.JPG",
   "/photos/hero4.jpg",
  "/photos/boy.png",
  "/photos/hero2.jpg",
   "/photos/engegment1.jpg",
   "/photos/hero1.jpg",
  "/photos/mehandi1.png",
  "/photos/girl.png",
  "/photos/butterfly.png",
  "/photos/camera.png",
  "/photos/bday2.jpg",
  "/photos/Post-wedding-Rituals-11.jpg",
  "/photos/provide2.jpg"
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const videoSettings = {
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="portfolio">

      {/* HERO VIDEO BACKGROUND */}
      <section className="video-carousel">
        <Slider {...videoSettings}>
          {videos.map((vid, i) => (
            <div key={i} className="video-slide">
              <video autoPlay muted loop playsInline>
                <source src={vid} type="video/mp4" />
              </video>

              <div className="video-overlay">
                <h1>Wedding Stories</h1>
                <p>CAPTUREING TIMELESS LOVE & EMOTIONS</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* INTRO */}
      <section className="intro" data-aos="fade-up">
        <h2>Our Portfolio</h2>
        <p>
          Premium wedding, maternity, baby & lifestyle photography with cinematic storytelling.
        </p>
      </section>

      {/* MASONRY GALLERY */}
      <section className="masonry">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="portfolio"
            data-aos="zoom-in"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </section>

      {/* LIGHTBOX */}
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        className="lightbox"
        overlayClassName="overlay"
      >
        <img src={selectedImage} alt="preview" />
        <button onClick={() => setSelectedImage(null)}>✕</button>
      </Modal>

      {/* CTA */}
      <section className="cta" data-aos="fade-up">
        <h2>Are You Ready To Capture Your Memories...?</h2>
        <button> <a href="/contact">Book Now</a></button>
      </section>

    </div>
  );
};

export default Portfolio;
