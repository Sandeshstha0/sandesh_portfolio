import React from "react";
import Link from "next/link";

const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  return (
    <header className="relative z-50 px-2 pt-5 laptop:px-0">
      <div
        className="
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-blue-400/10
          bg-[#07172f]/60
          px-5
          py-4
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <div className="group cursor-pointer">
          <div className="flex items-center gap-2">
            <div
              className="
                h-2
                w-2
                rounded-full
                bg-blue-500
                shadow-[0_0_15px_rgba(59,130,246,0.8)]
              "
            />

            <span
              className="
                text-lg
                font-bold
                tracking-wide
                text-white
              "
            >
            <Link href="/">Portfolio</Link> 
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2 tablet:gap-4">
          <button
            onClick={handleWorkScroll}
            className="
              rounded-lg
              px-3
              py-2
              text-sm
              font-medium
              text-blue-100/60
              transition-all
              duration-300
              hover:bg-blue-500/10
              hover:text-blue-400
            "
          >
            Work
          </button>

          <button
            onClick={handleAboutScroll}
            className="
              rounded-lg
              px-3
              py-2
              text-sm
              font-medium
              text-blue-100/60
              transition-all
              duration-300
              hover:bg-blue-500/10
              hover:text-blue-400
            "
          >
            About
          </button>

          {/* Contact */}
          <Link
            href="/resume"
            className="
              hidden
              rounded-lg
              border
              border-blue-400/20
              bg-blue-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-blue-300
              transition-all
              duration-300
              hover:border-blue-400/40
              hover:bg-blue-500/20
              hover:text-blue-200
              tablet:block
            "
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;