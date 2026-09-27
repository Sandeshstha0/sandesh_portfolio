import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";
import IDCard from "../components/Idcard/IDCard";

export default function Home() {
  // Refs
  const workRef = useRef();
  const aboutRef = useRef();

  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Work Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // Handling About Scroll
  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // Text Animation
  useIsomorphicLayoutEffect(() => {
    stagger(
      [
        textOne.current,
        textTwo.current,
        textThree.current,
        textFour.current,
      ],
      {
        y: 40,
        x: -10,
        transform: "scale(0.95) skew(10deg)",
      },
      {
        y: 0,
        x: 0,
        transform: "scale(1)",
      }
    );
  }, []);

  return (
    <div
      className={`
        relative
        min-h-screen
        overflow-hidden
        bg-[#06142f]
        text-white
        ${data.showCursor && "cursor-none"}
      `}
    >
      {/* Custom Cursor */}
      {data.showCursor && <Cursor />}

      {/* Page Title */}
      <Head>
        <title>{data.name}</title>
      </Head>

      {/* ================= BLUE BACKGROUND GLOW ================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Top right glow */}
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/20
            blur-[120px]
          "
        ></div>

        {/* Middle left glow */}
        <div
          className="
            absolute
            -left-40
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        ></div>

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            right-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-700/20
            blur-[140px]
          "
        ></div>
      </div>

      {/* ================= PAGE CONTAINER ================= */}

      <div className="container mx-auto mb-10">

        {/* ================= HEADER ================= */}

        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        {/* ================= HERO SECTION ================= */}

        <div
          className="
            flex
            flex-col
            laptop:flex-row
            items-center
            laptop:items-start
            justify-between
            gap-10
            laptop:gap-6
            px-2
            laptop:px-0
          "
        >
          {/* ================= TEXT SECTION ================= */}

          <div
            className="
              w-full
              laptop:w-3/5
              laptop:mt-16
              mt-8
            "
          >
            <div className="mt-5">

              {/* Small introduction */}
              <p
                className="
                  mb-5
                  text-sm
                  tablet:text-base
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-blue-400
                "
              >
               Let&apos;s build something
              </p>

              {/* Line 1 */}
              <h1
                ref={textOne}
                className="
                  p-1
                  tablet:p-2
                  text-2xl
                  tablet:text-4xl
                  laptop:text-5xl
                  laptopl:text-6xl
                  font-bold
                  leading-tight
                  text-white
                "
              >
                {data.headerTaglineOne}
              </h1>

              {/* Line 2 */}
              <h1
                ref={textTwo}
                className="
                  p-1
                  tablet:p-2
                  text-2xl
                  tablet:text-4xl
                  laptop:text-5xl
                  laptopl:text-6xl
                  font-bold
                  leading-tight
                  text-blue-400
                "
              >
                {data.headerTaglineTwo}
              </h1>

              {/* Line 3 */}
              <h1
                ref={textThree}
                className="
                  p-1
                  tablet:p-2
                  text-2xl
                  tablet:text-4xl
                  laptop:text-5xl
                  laptopl:text-6xl
                  font-bold
                  leading-tight
                  text-white
                "
              >
                {data.headerTaglineThree}
              </h1>

              {/* Line 4 */}
              <h1
                ref={textFour}
                className="
                  p-1
                  tablet:p-2
                  text-2xl
                  tablet:text-4xl
                  laptop:text-5xl
                  laptopl:text-6xl
                  font-bold
                  leading-tight
                  text-blue-300
                "
              >
                {data.headerTaglineFour}
              </h1>
            </div>

            {/* Social Icons */}
            <Socials className="mt-5" />
          </div>

          {/* ================= ID CARD ================= */}

          <div
            className="
              w-full
              laptop:w-2/5
              flex
              justify-center
              laptop:justify-end
              mt-6
              laptop:mt-16
              mr-0
              laptop:mr-10
            "
          >
            <IDCard />
          </div>
        </div>

        {/* ================= WORK ================= */}

        <div
          className="
            mt-20
            laptop:mt-32
            p-2
            laptop:p-0
          "
          ref={workRef}
        >
          <h1
            className="
              text-2xl
              tablet:text-3xl
              font-bold
              text-white
            "
          >
            Work<span className="text-blue-500">.</span>
          </h1>

          <div
            className="
              mt-8
              laptop:mt-10
              grid
              grid-cols-1
              tablet:grid-cols-2
              gap-4
            "
          >
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {/* ================= SERVICES ================= */}

        <div
          className="
            mt-20
            laptop:mt-32
            p-2
            laptop:p-0
          "
        >
          <h1
            className="
              tablet:m-10
              text-2xl
              tablet:text-3xl
              font-bold
              text-white
            "
          >
            Services<span className="text-blue-500">.</span>
          </h1>

          <div
            className="
              mt-8
              tablet:m-10
              grid
              grid-cols-1
              laptop:grid-cols-2
              gap-6
            "
          >
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* ================= ABOUT ================= */}

        <div
          className="
            mt-20
            laptop:mt-40
            p-2
            laptop:p-0
          "
          ref={aboutRef}
        >
          <h1
            className="
              tablet:m-10
              text-2xl
              tablet:text-3xl
              font-bold
              text-white
            "
          >
            About<span className="text-blue-500">.</span>
          </h1>

          <p
            className="
              tablet:m-10
              mt-5
              text-xl
              laptop:text-3xl
              leading-relaxed
              text-blue-100/80
              w-full
              laptop:w-3/5
            "
          >
            {data.aboutpara}
          </p>
        </div>

        {/* ================= FOOTER ================= */}

        <Footer />
      </div>
    </div>
  );
}