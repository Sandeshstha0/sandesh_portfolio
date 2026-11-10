
import React, { useState } from "react";

const WorkCard = ({ images = [], img, name, description, onClick }) => {
  const projectImages = images.length > 0 ? images : img ? [img] : [];
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImage(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  return (
    <div
      onClick={onClick}
      className="
        group relative cursor-pointer overflow-hidden rounded-2xl
        border border-blue-400/10 bg-[#0a1d3a]/70 p-2
        backdrop-blur-xl transition-all duration-500
        hover:-translate-y-2 hover:border-blue-400/40
        hover:bg-[#0d2448]/90
        hover:shadow-[0_20px_60px_rgba(37,99,235,0.20)]
      "
    >
      {/* Blue Glow */}
      <div
        className="
          pointer-events-none absolute -right-20 -top-20
          h-40 w-40 rounded-full bg-blue-500/10 blur-3xl
          transition-all duration-500 group-hover:bg-blue-500/20
        "
      />

      {/* Image Gallery */}
      <div className="relative overflow-hidden rounded-xl bg-[#07172f]">

        {projectImages.length > 0 && (
          <img
            src={projectImages[activeImage]}
            alt={`${name} - Image ${activeImage + 1}`}
            className="
              h-56 w-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
          />
        )}

        {/* Image Overlay */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t from-[#06142f]
            via-transparent to-transparent opacity-70
          "
        />

        {/* Image Navigation */}
        {projectImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="
                absolute left-3 top-1/2 -translate-y-1/2
                flex h-9 w-9 items-center justify-center
                rounded-full border border-white/20
                bg-[#06142f]/80 text-white backdrop-blur-md
                opacity-0 transition-all duration-300
                hover:bg-blue-600
                group-hover:opacity-100
              "
            >
              &#10094;
            </button>

            <button
              onClick={nextImage}
              aria-label="Next image"
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                flex h-9 w-9 items-center justify-center
                rounded-full border border-white/20
                bg-[#06142f]/80 text-white backdrop-blur-md
                opacity-0 transition-all duration-300
                hover:bg-blue-600
                group-hover:opacity-100
              "
            >
              &#10095;
            </button>

            {/* Image Counter */}
            <div
              className="
                absolute right-3 top-3 rounded-full
                border border-white/10 bg-[#06142f]/80
                px-3 py-1 text-xs text-white backdrop-blur-md
              "
            >
              {activeImage + 1} / {projectImages.length}
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(index);
                  }}
                  aria-label={`Show image ${index + 1}`}
                  className={`
                    h-1.5 rounded-full transition-all duration-300
                    ${
                      activeImage === index
                        ? "w-6 bg-blue-400"
                        : "w-1.5 bg-white/50 hover:bg-white"
                    }
                  `}
                />
              ))}
            </div>
          </>
        )}

        {/* View Project */}
        <div
          className="
            pointer-events-none absolute bottom-4 right-4
            translate-y-3 rounded-full border border-blue-300/20
            bg-[#06142f]/80 px-4 py-2 text-xs font-semibold
            text-blue-300 opacity-0 backdrop-blur-md
            transition-all duration-300
            group-hover:translate-y-0 group-hover:opacity-100
          "
        >
          View Project →
        </div>
      </div>

      {/* Content */}
      <div className="relative px-3 pb-4 pt-5">
        <h2
          className="
            text-xl font-bold text-white
            transition-colors duration-300
            group-hover:text-blue-400
          "
        >
          {name}
        </h2>

        <p
          className="
            mt-2 line-clamp-3 text-sm
            leading-relaxed text-blue-100/55
          "
        >
          {description}
        </p>

        {/* Bottom Accent */}
        <div className="mt-5 flex items-center gap-2">
          <span className="h-[2px] w-8 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-14" />

          <span className="text-xs uppercase tracking-[0.2em] text-blue-400/70">
            Project
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
