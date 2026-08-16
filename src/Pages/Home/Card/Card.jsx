import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router'; 
import card1 from "../../../assets/card_1.png";
import card2 from "../../../assets/card2.png";
import card3 from "../../../assets/card3.png";
import card5 from "../../../assets/card5.png";
import card6 from "../../../assets/card6.png";

const Card = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 392, behavior: 'smooth' });
        }
      }
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const cardsData = [
    {
      title: "Donate Blood",
      highlight: "Saves Lives",
      desc: "Your single donation can save up to 3 lives. Be a hero, donate today",
      btnText: "Learn More",
      path: "/about", 
      img: card1,
      imgClass: "w-64",
      bg: "bg-yellow-50"
    },
    {
      title: "Find Blood",
      highlight: "Anywhere",
      desc: "Search blood by group and location. Get the blood you need, when you need it.",
      btnText: "Find Blood",
      path: "/find-blood", 
      img: card2,
      imgClass: "w-40",
      bg: "bg-yellow-100"
    },
    {
      title: "Request Blood",
      highlight: "In Emergency",
      desc: "Need blood urgently? Send a request and connect with nearby donors.",
      btnText: "Request Now",
      path: "/request",
      img: card3,
      imgClass: "w-35",
      bg: "bg-yellow-50"
    },
    {
      title: "Blood Stock",
      highlight: "Status",
      desc: "Check real-time blood availability in our blood bank.",
      btnText: "View Stock",
      path: "/blood-stock", 
      img: card5,
      imgClass: "w-35",
      bg: "bg-yellow-50"
    },
    {
      title: "Your Donation",
      highlight: "Matters",
      desc: "Track your donations and see the impact you've made.",
      btnText: "Read Blogs",
      path: "/blog", 
      img: card6,
      imgClass: "w-35",
      bg: "bg-yellow-100"
    }
  ];

  return (
    <div 
      ref={sliderRef}
      className='flex overflow-x-auto scroll-smooth gap-4 m-4 py-4 no-scrollbar'
    >
      {cardsData.map((card, index) => (
        <div key={index} className={`card w-96 shrink-0 bg-base-100 shadow-md h-64 ${card.bg}`}>
          <div className="card-body relative">
            <div>
              <div>
                <h2 className="text-3xl font-bold">{card.title}</h2>
                <h2 className="text-3xl font-bold text-red-600">{card.highlight}</h2>
                <h3 className='w-40 text-balance pt-3 pb-3'>{card.desc}</h3>

                <Link 
                  to={card.path} 
                  className="inline-block text-center p-1 rounded-2xl bg-red-600 text-white border w-30 mt-3 hover:bg-white hover:text-red-600 hover:border-red-300 font-bold cursor-pointer"
                >
                  {card.btnText}
                </Link>

                <div className="absolute right-0 bottom-5">
                  <img className={card.imgClass} src={card.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;