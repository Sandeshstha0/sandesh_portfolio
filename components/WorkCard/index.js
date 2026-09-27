import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-2xl
        border
        border-blue-400/10
        bg-[#0a1d3a]/70
        p-2
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-400/40
        hover:bg-[#0d2448]/90
        hover:shadow-[0_20px_60px_rgba(37,99,235,0.20)]
      "
    >
      {/* Blue Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-blue-500/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-blue-500/20
        "
      />

      {/* Image */}
      <div
        className="
          relative
          overflow-hidden
          rounded-xl
          bg-[#07172f]
        "
      >
        <img
          src={img}
          alt={name}
          className="
            h-56
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Image Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#06142f]
            via-transparent
            to-transparent
            opacity-70
          "
        />

        {/* View Project */}
        <div
          className="
            absolute
            bottom-4
            right-4
            translate-y-3
            rounded-full
            border
            border-blue-300/20
            bg-[#06142f]/80
            px-4
            py-2
            text-xs
            font-semibold
            text-blue-300
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          View Project →
        </div>
      </div>

      {/* Content */}
      <div className="relative px-3 pb-4 pt-5">
        <h2
          className="
            text-xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-blue-400
          "
        >
          {name}
        </h2>

        <p
          className="
            mt-2
            line-clamp-3
            text-sm
            leading-relaxed
            text-blue-100/55
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