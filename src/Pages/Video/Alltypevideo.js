import React from "react";
import "./Alltypevideo.css";

const videoData = [
  {
    id: 1,
    title: "Wedding Cinematic Film",
    desc: "Emotionally crafted cinematic wedding films.",
    video: "/videos/wedding.mp4",
  },
  {
    id: 2,
    title: "Pre-Wedding Film",
    desc: "Beautiful storytelling before the big day.",
    video: "/videos/prewedding.mp4",
  },
  {
    id: 3,
    title: "Event Highlights",
    desc: "Corporate & personal event coverage.",
    video: "/videos/event.mp4",
  },
  {
    id: 4,
    title: "Photography Reel",
    desc: "A glimpse of premium photography moments.",
    video: "/videos/photography.mp4",
  },
];

const AllTypeVideo = () => {
  return (
    <div className="video-page">

      {/* ===== HEADER ===== */}
      <div className="video-header">
        <h1>Photography & Videography</h1>
        <p>
          We don’t just capture visuals — we capture emotions, stories & moments.
        </p>
      </div>

      {/* ===== VIDEO GRID ===== */}
      <div className="video-grid">
        {videoData.map((item) => (
          <div className="video-card" key={item.id}>
            <div className="video-wrapper">
              <video
                src={item.video}
                muted
                loop
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
              <div className="video-overlay">
                <span>▶</span>
              </div>
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AllTypeVideo;
