import React from "react";
import Slider from "react-slick";
import "./services.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const servicesData = [
  {
    title: "Wedding Photography",
    description:
      "Capture the magical moments of your wedding with elegance and creativity. Every emotion and memory is beautifully preserved for a lifetime.",
    images:[
  "/photos/wedding1.jpg",
  "/photos/wedding2.jpg",
  "/photos/wedding3.jpg"
]
  },
  {
    title: "Birthday Photoshoots",
    description:
      "Celebrate milestones with fun-filled birthday photoshoots that capture joy, laughter, and unforgettable memories.",
    images: ["/images/birthday1.jpg", "/images/birthday2.jpg", "/images/birthday3.jpg"],
  },
  {
    title: "Mehendi & Engagement",
    description:
      "Document your Mehendi and Engagement ceremonies with vibrant, candid shots that reflect every special ritual and moment.",
    images: ["/images/engagement1.jpg", "/images/engagement2.jpg", "/images/engagement3.jpg"],
  },
  {
    title: "Baby Shoot",
    description:
      "Cherish your baby’s first moments with adorable, heartwarming photoshoots that capture innocence and joy.",
    images: ["/images/baby1.jpg", "/images/baby2.jpg", "/images/baby3.jpg"],
  },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="services-fullscreen">
      {servicesData.map((service, idx) => (
        <div key={idx} className="service-section">
          <div className="service-text">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
          <Slider {...settings} className="service-carousel">
            {service.images.map((img, i) => (
              <div key={i} className="carousel-image">
                <img src={img} alt={service.title} />
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default Services;
