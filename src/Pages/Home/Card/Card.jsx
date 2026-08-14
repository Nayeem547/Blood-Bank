import React from 'react';
import card1 from "../../../assets/card_1.png";
import card2 from "../../../assets/card2.png";
import card3 from "../../../assets/card3.png";
import card4 from "../../../assets/card4.png";
import card5 from "../../../assets/card5.png";
import card6 from "../../../assets/card6.png";

const Card = () => {
    return (
       <div className='md:grid md:grid-cols-2 lg:grid-cols-3  content-center justify-items-center gap-4 justify-center justify-self-center m-4'>
         <div className="card w-96 bg-base-100 shadow-md m-2 h-64  bg-yellow-50 ">
  <div className="card-body relative ">
    <div className='   '>
<div className=" ">
      <h2 className="text-3xl font-bold">Donate Blood</h2>
     <h2 className="text-3xl font-bold text-red-600 ">Saves Lives</h2>
     <h3 className='w-40 text-balance pt-3 pb-3'>Your single donation can save up to 3 lives. Be a hero, doante today</h3>
    <button className=" p-1 rounded-2xl bg-red-600 text-white  border   w-30 mt-3  hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">Donate Now</button>

    <div className=" absolute right-0 bottom-5  ">
        <img className='w-64 ' src={card1} alt="" />
    </div>

    </div>
    
    
    </div>
    
  </div>
</div>
{/* card section 2 end */}

 {/* card section 2 start */}
  <div className="card w-96 bg-base-100 shadow-md m-2 h-64  bg-yellow-100">
  <div className="card-body relative ">
    <div className='   '>
<div className=" ">
      <h2 className="text-3xl font-bold">Find Blood</h2>
     <h2 className="text-3xl font-bold text-red-600 ">Anywhere</h2>
     <h3 className='w-40 text-balance pt-3 pb-3'>Search blood by group and location.get the blood you need, when you need it.</h3>
    <button className=" p-1 rounded-2xl bg-red-600 text-white  border   w-30 mt-3  hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">Find Blood</button>

    <div className=" absolute right-0 bottom-5  ">
        <img className='w-40 ' src={card2} alt="" />
    </div>

    </div>
    
    
    </div>
    
  </div>
</div>
 {/* card section 2 end */}

  {/* card section 3 start */}

 <div className="card w-96 bg-base-100 shadow-md m-2 h-64  bg-yellow-50">
  <div className="card-body relative ">
    <div className='   '>
<div className=" ">
      <h2 className="text-3xl font-bold">Request Blood</h2>
     <h2 className="text-3xl font-bold text-red-600 ">In Emergency</h2>
     <h3 className='w-40 text-balance pt-3 pb-3'>Need blood urgently? Send a request and connect with nearby donors. </h3>
    <button className=" p-1 rounded-2xl bg-red-600 text-white  border   w-30 mt-3  hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">Request Now</button>

    <div className=" absolute right-0 bottom-5  ">
        <img className='w-35 ' src={card3} alt="" />
    </div>

    </div>
    
    
    </div>
    
  </div>
</div>
 {/* card section 3 end */}

  {/* card section 4 start */}
  <div className="card w-96 bg-base-100 shadow-md m-2 h-64  bg-yellow-100">
  <div className="card-body relative ">
    <div className='   '>
<div className=" ">
      <h2 className="text-3xl font-bold">Become a Donor</h2>
     <h2 className="text-3xl font-bold text-red-600 ">Saves Lifes</h2>
     <h3 className='w-40 text-balance pt-3 pb-3'>Join our community of life savers. Register as a donor and make a difference. </h3>
    <button className=" p-1 rounded-2xl bg-red-600 text-white  border   w-30 mt-3  hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">Request Now</button>

    <div className=" absolute right-0 bottom-5  ">
        <img className='w-35 ' src={card4} alt="" />
    </div>

    </div>
    
    
    </div>
    
  </div>
</div>
 {/* card section 4 end */}

  {/* card section 5 start */}
 <div className="card w-96 bg-base-100 shadow-md m-2 h-64  bg-yellow-50">
  <div className="card-body relative ">
    <div className='   '>
<div className=" ">
      <h2 className="text-3xl font-bold">Blood Stock</h2>
     <h2 className="text-3xl font-bold text-red-600 ">Status</h2>
     <h3 className='w-40 text-balance pt-3 pb-3'>Cheack real-time blood availability in our blood bank. </h3>
    <button className=" p-1 rounded-2xl bg-red-600 text-white  border   w-30 mt-3  hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">View Stock</button>

    <div className=" absolute right-0 bottom-5  ">
        <img className='w-35 ' src={card5} alt="" />
    </div>

    </div>
    
    
    </div>
    
  </div>
</div>
 {/* card section 5 end */}


  {/* card section 6 start */}
<div className="card w-96 bg-base-100 shadow-md m-2 h-64  bg-yellow-100">
  <div className="card-body relative ">
    <div className='   '>
<div className=" ">
      <h2 className="text-3xl font-bold">Your Donation</h2>
     <h2 className="text-3xl font-bold text-red-600 ">matters</h2>
     <h3 className='w-40 text-balance pt-3 pb-3'>Track your donations and see the impact you've made. </h3>
    <button className=" p-1 rounded-2xl bg-red-600 text-white  border   w-30 mt-3  hover:bg-white hover:text-red-600 hover:border-red-300 font-bold">View Stock</button>

    <div className=" absolute right-0 bottom-5  ">
        <img className='w-35 ' src={card6} alt="" />
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