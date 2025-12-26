import React from "react";
import "./PhotoGallery.css";

const galleryData = [
  {
    id: 1,
    title: "ADELINE & ROSHWYN",
    date: "JULY 11TH, 2025",
    img: "/photos/girl.png",
  },
  {
    id: 2,
    title: "RAGAV NAPUR",
    date: "JUNE 21ST, 2025",
    img: "/photos/butterfly.png",
  },
  {
    id: 3,
    title: "DAKSHITA X SAHIL",
    date: "MAY 3RD, 2025",
    img: "/photos/image.png",
  },
  {
    id: 4,
    title: "WEDDING CEREMONY",
    date: "FEB 14TH, 2025",
    img: "/photos/nature.png",
  },
  {
    id: 5,
    title: "ENGAGEMENT SHOOT",
    date: "JAN 28TH, 2025",
    img: "/photos/camera.png",
  },
  {
    id: 6,
    title: "PRE-WEDDING SHOOT",
    date: "DEC 5TH, 2024",
    img: "/photos/butterfly.png",
  },
  {
    id: 7,
    title: "ENGAGEMENT SHOOT",
    date: "JAN 28TH, 2025",
    img: "/photos/camera.png",
  },
  {
    id: 8,
    title: "WEDDING CEREMONY",
    date: "FEB 14TH, 2025",
    img: "/photos/nature.png",
  },
  {
    id: 9,
    title: "WEDDING CEREMONY",
    date: "FEB 14TH, 2025",
    img: "/photos/boy.png",
  },
  {
    id: 10,
    title: "WEDDING CEREMONY",
    date: "FEB 15TH, 2025",
    img: "/photos/image.png",
  },
];

const PhotoGallery = () => {
  return (
    <div className="gallery-container">

      {/* ===== CLIENT ALBUMS HEADER ===== */}
      <div className="albums-header">
        <h1>CLIENT<br />ALBUMS</h1>
        <p>"We Shoot What it Feels Like & Not What it Looks Like"</p>
      </div>

      {/* ===== GALLERY GRID ===== */}
      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery-card">
            <div className="img-wrapper">
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PhotoGallery;
