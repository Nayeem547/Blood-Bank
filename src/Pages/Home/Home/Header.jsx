import { FaHeart, FaMagnifyingGlass, FaUserPlus, FaUserGroup, FaDroplet, FaHospital, FaArrowTrendUp } from "react-icons/fa6";
import heroBanner from "../../../assets/hero_banner.png";
import heroDrop from "../../../assets/hero_banner_blood_drop.png";
import { useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Each word is its own element so words can fade in one after another
const Word = ({ children }) => (
  <span className="hero-word inline-block" aria-hidden="true">
    {children}
  </span>
);

const stats = [
  {
    icon: <FaUserGroup />,
    iconClass: "bg-amber-100 text-amber-600",
    value: "12,540+",
    trend: true,
    label: "Registered Donors",
  },
  {
    icon: <FaDroplet />,
    iconClass: "bg-red-100 text-red-500",
    value: "3,218+",
    label: "Units of Blood Available",
  },
  {
    icon: <FaHospital />,
    iconClass: "bg-amber-100 text-amber-600",
    value: "186+",
    label: "Hospitals Connected",
  },
  {
    icon: <FaHeart />,
    iconClass: "bg-red-100 text-red-500",
    value: "9,600+",
    label: "Lives Impacted",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Hero: words fade in from slight blur, then the paragraph
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".hero-word", {
        opacity: 0,
        y: 18,
        filter: "blur(8px)",
        duration: 0.9,
        stagger: 0.12,
      }).from(
        ".hero-para",
        {
          opacity: 0,
          y: 12,
          filter: "blur(6px)",
          duration: 0.9,
        },
        "-=0.5"
      );

      // Stats: same soft staggered entrance, played when the section scrolls into view
      gsap.from(".stat-text", {
        opacity: 0,
        y: 18,
        filter: "blur(8px)",
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".stats-wrap",
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="w-full max-w-full overflow-x-hidden bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      {/* Emergency Alert Bar */}
      <div className="bg-red-700 text-white text-sm sm:text-base py-3 px-4 sm:px-6 font-bold flex items-center shadow-lg border-b-2 border-red-800">
        {/* Urgent Alert Badge with Pulsing Red Dot */}
        <div className="bg-amber-300 text-red-900 px-3 py-1 rounded-md font-extrabold uppercase text-xs sm:text-sm shrink-0 mr-4 shadow-md flex items-center gap-2 z-10 relative">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
          </span>
          <span>EMERGENCY ALERT</span>
        </div>

        {/* Scrolling Text */}
        <marquee behavior="scroll" direction="left" scrollamount="7" className="w-full flex-1 tracking-wide font-semibold">
          🚨 জরুরি রক্তের প্রয়োজনে কল করুন: +880 1800-000000 | রক্তদান করুন, জীবন বাঁচান! | LifeLine-এ যেকোনো রক্তের গ্রুপ তাৎক্ষণিক খুঁজে পেতে আমাদের ওয়েবসাইট ব্যবহার করুন।
        </marquee>
      </div>

      {/* hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-0 sm:pb-4 lg:pb-8 grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-6 lg:gap-10 items-center">
        {/* left: text */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-800 text-xs sm:text-sm font-medium px-4 py-2 rounded-full">
            <FaHeart className="text-red-600" />
            Donate Blood • Save Lives
          </span>

          {/* Two separate lines at every screen size */}
          <h1
            aria-label="Every Drop Can Save a Life"
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mt-6 leading-tight"
          >
            <span className="block">
              <Word>Every</Word> <Word>Drop</Word> <Word>Can</Word>
            </span>
            <span className="block text-red-600 font-serif italic font-normal">
              <Word>Save</Word> <Word>a</Word> <Word>Life</Word>
            </span>
          </h1>

          <p className="hero-para text-gray-600 text-base sm:text-lg mt-6 max-w-md mx-auto lg:mx-0">
            LifeLine connects donors, hospitals, and patients to ensure blood
            is available when it matters most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors w-full sm:w-auto justify-center">
              Find Blood
              <FaMagnifyingGlass />
            </button>
            <Link
              to="/become-donor"
              className="flex items-center gap-2 border border-amber-300 hover:bg-amber-100 text-gray-800 font-semibold px-6 py-3 rounded-full transition-colors w-full sm:w-auto justify-center"
            >
              Become a Donor
              <FaUserPlus />
            </Link>
          </div>
        </div>

        {/* right: hand with blood drop image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroDrop}
            alt="Blood donation"
            className="w-full max-w-xs sm:max-w-md h-auto"
          />
        </div>
      </div>

      {/* stats */}
      <div className="stats-wrap relative z-10 max-w-7xl mx-auto px-4 sm:px-6 -mt-20 sm:-mt-12 lg:mt-0 pb-10 sm:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-3 sm:px-5 py-3 sm:py-4"
            >
              <div className={`h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center rounded-full text-base sm:text-lg shrink-0 ${s.iconClass}`}>
                {s.icon}
              </div>
              <div>
                <p className="stat-text text-base sm:text-xl font-bold text-gray-900 flex items-center gap-1">
                  {s.value}
                  {s.trend && <FaArrowTrendUp className="text-green-500 text-sm" />}
                </p>
                <p className="stat-text text-xs sm:text-sm text-gray-600">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="stat-text text-center text-gray-600 mt-8 text-sm sm:text-base">
          One donation can bring hope.{" "}
          <span className="text-red-600 font-semibold">
            Be the reason someone lives.
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;