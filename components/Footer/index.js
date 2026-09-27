import React from "react";
import Socials from "../Socials";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="
        relative
        mt-24
        overflow-hidden
        border-t
        border-blue-400/10
        pt-16
        laptop:mt-40
        laptop:pt-20
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          left-1/2
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-blue-600/10
          blur-[100px]
        "
      />

      <div className="relative px-2 laptop:px-0">
        {/* Heading */}
        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.3em]
            text-blue-400
          "
        >
          Have a project?
        </p>

        <h2
          className="
            mt-4
            max-w-3xl
            text-4xl
            font-bold
            leading-tight
            text-white
            tablet:text-5xl
            laptop:text-7xl
          "
        >
          Let&apos;s build something
          <span className="text-blue-500"> great.</span>
        </h2>

        {/* Contact */}
      <div className="mt-8">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=sandeshstha519@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      gap-3
      rounded-xl
      border
      border-blue-400/20
      bg-blue-500/10
      px-6
      py-3
      text-sm
      font-semibold
      text-blue-300
      backdrop-blur-md
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-400/40
      hover:bg-blue-500/20
      hover:shadow-[0_10px_40px_rgba(37,99,235,0.20)]
    "
  >
    Get in touch
    <span className="text-lg">↗</span>
  </a>
</div>

        {/* Socials */}
        <div className="mt-10">
          <Socials />
        </div>

        {/* Bottom */}
        <div
          className="
            mt-16
            flex
            flex-col
            justify-between
            gap-3
            border-t
            border-blue-400/10
            py-6
            text-xs
            text-blue-100/40
            tablet:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} {`Sandesh Shrestha`}. All rights reserved.
          </p>

          <p>
            Designed & built with{" "}
            <span className="text-blue-400">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;