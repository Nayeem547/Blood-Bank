import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import card1 from "../../../assets/card_1.png";
import card2 from "../../../assets/card2.png";
import card3 from "../../../assets/card3.png";
import card5 from "../../../assets/card5.png";
import card6 from "../../../assets/card6.png";

const cardsData = [
  {
    title: "Donate Blood",
    highlight: "Saves Lives",
    desc: "Your single donation can save up to 3 lives. Be a hero, donate today",
    btnText: "Learn More",
    path: "/about",
    img: card1,
    imgClass: "w-64",
    bg: "bg-yellow-50",
  },
  {
    title: "Find Blood",
    highlight: "Anywhere",
    desc: "Search blood by group and location. Get the blood you need, when you need it.",
    btnText: "Find Blood",
    path: "/find-blood",
    img: card2,
    imgClass: "w-40",
    bg: "bg-yellow-100",
  },
  {
    title: "Request Blood",
    highlight: "In Emergency",
    desc: "Need blood urgently? Send a request and connect with nearby donors.",
    btnText: "Request Now",
    path: "/request",
    img: card3,
    imgClass: "w-36",
    bg: "bg-yellow-50",
  },
  {
    title: "Blood Stock",
    highlight: "Status",
    desc: "Check real-time blood availability in our blood bank.",
    btnText: "View Stock",
    path: "/blood-stock",
    img: card5,
    imgClass: "w-36",
    bg: "bg-yellow-50",
  },
  {
    title: "Your Donation",
    highlight: "Matters",
    desc: "Track your donations and see the impact you've made.",
    btnText: "Read Blogs",
    path: "/blog",
    img: card6,
    imgClass: "w-36",
    bg: "bg-yellow-100",
  },
];

const Card = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  // prev / next
  const slide = (dir) => {
    const el = sliderRef.current;
    const step = el.firstElementChild.offsetWidth + 16;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  // GSAP: staggered entrance when section scrolls into view
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".slide-card", {
        opacity: 0,
        x: 80,
        scale: 0.92,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: undefined,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // GSAP: hover lift
  const onEnter = (e) =>
    gsap.to(e.currentTarget, { y: -10, scale: 1.03, duration: 0.3, ease: "power2.out" });
  const onLeave = (e) =>
    gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });

  // drag to scroll
  useEffect(() => {
    const el = sliderRef.current;
    let isDown = false, startX = 0, startScroll = 0;

    const down = (e) => {
      isDown = true;
      el.classList.add('dragging');
      startX = e.pageX;
      startScroll = el.scrollLeft;
    };
    const up = () => {
      isDown = false;
      el.classList.remove('dragging');
    };
    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      el.scrollLeft = startScroll - (e.pageX - startX);
    };

    el.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    el.addEventListener('mousemove', move);
    return () => {
      el.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      el.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden m-0 pt-[10px] pb-0 bg-red-50 -mt-14"
    >
      {/* prev / next */}
      <button
        onClick={() => slide(-1)}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-red-600 text-white text-xl font-bold shadow-lg hover:bg-white hover:text-red-600 transition cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={() => slide(1)}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-red-600 text-white text-xl font-bold shadow-lg hover:bg-white hover:text-red-600 transition cursor-pointer"
      >
        ›
      </button>

      <div
        ref={sliderRef}
        className="card-slider flex overflow-x-auto scroll-smooth px-4 py-3 select-none"
      >
        {cardsData.map((card) => (
          <div
            key={card.path}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className={`slide-card card w-96 shrink-0 mr-4 shadow-md h-72 ${card.bg}`}
          >
            <div className="card-body relative h-full">
              <h2 className="text-3xl font-bold">{card.title}</h2>
              <h2 className="text-3xl font-bold text-red-600">{card.highlight}</h2>
              <h3 className="w-40 text-balance pt-3">{card.desc}</h3>

              <Link
                to={card.path}
                draggable={false}
                className="absolute bottom-6 left-8 z-10 inline-block text-center p-1 rounded-2xl bg-red-600 text-white border w-32 hover:bg-white hover:text-red-600 hover:border-red-300 font-bold cursor-pointer"
              >
                {card.btnText}
              </Link>

              <div className="absolute right-0 bottom-5">
                <img
                  className={card.imgClass}
                  src={card.img}
                  alt={card.title}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;