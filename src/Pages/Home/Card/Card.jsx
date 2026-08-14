import React, { useEffect, useRef } from 'react';
import card1 from "../../../assets/card_1.png";
import card2 from "../../../assets/card2.png";
import card3 from "../../../assets/card3.png";
import card4 from "../../../assets/card4.png";
import card5 from "../../../assets/card5.png";
import card6 from "../../../assets/card6.png";

// ami ja ja change korchi ogola sob comment e explane korchi bro
const Card = () => {
  const sliderRef = useRef(null);

  // 2sec por por scroll marega buijo kintu
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        
        // jodi ekdom last e jayga abr 1st theke suru korbe r ki dada 
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
        // eta hocche dan e slide hocche ota 
          sliderRef.current.scrollBy({ left: 392, behavior: 'smooth' });
        }
      }
    }, 3000); //eta mane koto second por amar j card gula ase ogola left to right slide hobe

    return () => clearInterval(interval);
  }, []);

  return (
    /* flex + overflow-x-auto dea ey slide ta banaichi bujcchen */
    <div 
      ref={sliderRef}
      className='flex overflow-x-auto scroll-smooth gap-4 m-4 py-4 no-scrollbar'
    >
      {/* card section 1 start */}
      <div className="card w-96 shrink-0 bg-base-100 shadow-md h-64 bg-yellow-50">
        <div className="card-body relative">
          <div>
            <div>
              <h2 className="text-3xl font-bold">Donate Blood</h2>
              <h2 className="text-3xl font-bold text-red-600">Saves Lives</h2>
              <h3 className='w-40 text-balance pt-3 pb-3'>Your single donation can save up to 3 lives. Be a hero, donate today</h3>
              <button className="p-1 rounded-2xl bg-red-600 text-white border w-30 mt-3 hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">Donate Now</button>

              <div className="absolute right-0 bottom-5">
                <img className='w-64' src={card1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card section 1 end */}

      {/* card section 2 start */}
      <div className="card w-96 shrink-0 bg-base-100 shadow-md h-64 bg-yellow-100">
        <div className="card-body relative">
          <div>
            <div>
              <h2 className="text-3xl font-bold">Find Blood</h2>
              <h2 className="text-3xl font-bold text-red-600">Anywhere</h2>
              <h3 className='w-40 text-balance pt-3 pb-3'>Search blood by group and location. Get the blood you need, when you need it.</h3>
              <button className="p-1 rounded-2xl bg-red-600 text-white border w-30 mt-3 hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">Find Blood</button>

              <div className="absolute right-0 bottom-5">
                <img className='w-40' src={card2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card section 2 end */}

      {/* card section 3 start */}
      <div className="card w-96 shrink-0 bg-base-100 shadow-md h-64 bg-yellow-50">
        <div className="card-body relative">
          <div>
            <div>
              <h2 className="text-3xl font-bold">Request Blood</h2>
              <h2 className="text-3xl font-bold text-red-600">In Emergency</h2>
              <h3 className='w-40 text-balance pt-3 pb-3'>Need blood urgently? Send a request and connect with nearby donors.</h3>
              <button className="p-1 rounded-2xl bg-red-600 text-white border w-30 mt-3 hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">Request Now</button>

              <div className="absolute right-0 bottom-5">
                <img className='w-35' src={card3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card section 3 end */}

      {/* card section 4 start */}
      {/* become a donnor eta rakhbo na */}
      {/* <div className="card w-96 shrink-0 bg-base-100 shadow-md h-64 bg-yellow-100">
        <div className="card-body relative">
          <div>
            <div>
              <h2 className="text-3xl font-bold">Become a Donor</h2>
              <h2 className="text-3xl font-bold text-red-600">Saves Lives</h2>
              <h3 className='w-40 text-balance pt-3 pb-3'>Join our community of life savers. Register as a donor and make a difference.</h3>
              <button className="p-1 rounded-2xl bg-red-600 text-white border w-30 mt-3 hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">Register Now</button>

              <div className="absolute right-0 bottom-5">
                <img className='w-35' src={card4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* card section 4 end */}

      {/* card section 5 start */}
      <div className="card w-96 shrink-0 bg-base-100 shadow-md h-64 bg-yellow-50">
        <div className="card-body relative">
          <div>
            <div>
              <h2 className="text-3xl font-bold">Blood Stock</h2>
              <h2 className="text-3xl font-bold text-red-600">Status</h2>
              <h3 className='w-40 text-balance pt-3 pb-3'>Check real-time blood availability in our blood bank.</h3>
              <button className="p-1 rounded-2xl bg-red-600 text-white border w-30 mt-3 hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">View Stock</button>

              <div className="absolute right-0 bottom-5">
                <img className='w-35' src={card5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card section 5 end */}

      {/* card section 6 start */}
      <div className="card w-96 shrink-0 bg-base-100 shadow-md h-64 bg-yellow-100">
        <div className="card-body relative">
          <div>
            <div>
              <h2 className="text-3xl font-bold">Your Donation</h2>
              <h2 className="text-3xl font-bold text-red-600">Matters</h2>
              <h3 className='w-40 text-balance pt-3 pb-3'>Track your donations and see the impact you've made.</h3>
              <button className="p-1 rounded-2xl bg-red-600 text-white border w-30 mt-3 hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">Track Now</button>

              <div className="absolute right-0 bottom-5">
                <img className='w-35' src={card6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card section 6 end */}
    </div>
  );
};

export default Card;