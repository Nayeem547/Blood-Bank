import React from 'react';
import Logo from '../../../Component/Logo/Logo';
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineWaterDrop } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaHandHoldingWater } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { TbTestPipe2 } from "react-icons/tb";
import { BsHeartPulse } from "react-icons/bs";
import { BsHospital } from "react-icons/bs";
import { MdOutlinePhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import logoitem from "../../../assets/logoitems.png";




const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-[rgb(255,250,100,0.6)] text-black p-10  justify-items-center  ">

  {/* footer logo side desing start*/}
    <nav className='' >
<div className='h-60 justify-center grid   '>


    <div className='flex'>
    <div>
        <Logo></Logo>
    </div>

    </div>
    
    <div className=' justify-center grid '>
        <h6 className='w-40 text-[10px]'>
            LifeLine connects donors, hospitals, and patients to ensure blood is available when it matters most. One donation can save many lives.
        </h6>
        <img className='w-40 h-10' src={logoitem} alt="" />
    </div>

    <div className=' flex  gap-2 '>
        <div>
       <button className='item-center justify-center p-2 border-1 border-solid  rounded-full border-red-600  shadow-md hover:bg-red-600 hover:text-white hover:text-xl'>

     <RiFacebookFill className='' />
    </button>
        </div>
      
<div>
 <button   className='item-center justify-center p-2 border-1 border-solid  rounded-full border-red-600  shadow-md hover:bg-red-600 hover:text-white hover:text-xl'>
        <FaTwitter />
    </button>
</div>
   <div>
<button className='item-center justify-center p-2 border-1 border-solid  rounded-full border-red-600  shadow-md hover:bg-red-600 hover:text-white hover:text-xl'>
        <FaInstagram />
    </button>
   </div>
    <div>
 <button className='item-center justify-center p-2 border-1 border-solid  rounded-full border-red-600  shadow-md hover:bg-red-600 hover:text-white hover:text-xl'>
    <FaYoutube />
    </button>
    </div>


   
    </div>
</div>
  </nav>
  {/* footer logo side desing end*/}


  {/* footer quick link section start */}
  <nav > 
    <div className='h-70 justify-center grid   '>
    <h1 className="font-bold text-[17px] text-red-700">Quick Links</h1>
    <div className=' w-25 flex  justify-between  items-center  hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700 '>
    <button className=' flex  items-center content-center '>Home</button>
     <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
    
    </div>

   <div className=' w-25 flex  justify-between  items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
    <button className=' flex  items-center content-center'>About Us</button>
     <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
    
    </div>

   <div className=' w-25 flex  justify-between  items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
    <button className=' flex  items-center content-center '>Donors</button>
     <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
    
    </div>

    <div className=' w-25 flex  justify-between  items-center  hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700 '>
    <button className=' flex  items-center content-center '>Blood Stock</button>
     <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
    
    </div>

    <div className=' w-25 flex  justify-between  items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
    <button className=' flex  items-center content-center '>Requests</button>
     <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
    </div>

    <div className=' w-25 flex  justify-between  items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
    <button className=' flex  items-center content-center '>Events</button>
     <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
    
    </div>

    <div className=' w-25 flex  justify-between  items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
    <button className=' flex  items-center content-center '>Blog</button>
     <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
    
    </div>

    <div className=' w-25 flex  justify-between  items-center  hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700 '>
    <button className=' flex  items-center content-center '>Contact Us</button>
     <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
    
    </div>
    </div>
  </nav>
{/* footer quick link section end */}

  {/* footer Our services section start */}
 <nav > 
    <div className='h-70 justify-center grid '>
    <h1 className="font-bold text-[17px] text-red-700">Our Services</h1>
    <div className=' flex  justify-start gap-2  items-center  hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700 '>
        <span className='text-[20px] text-red-700'> <MdOutlineWaterDrop /> </span>
    <button className=' flex  items-center content-center '>Donate Blood</button>
     
    
    </div>

   <div className=' gap-2 justify-start  flex  items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
         <span className='text-[20px] text-red-700'> <IoSearchOutline /></span>

    <button className=' flex  items-center content-center'>Find Blood</button>
    
    </div>

   <div className='  gap-2 justify-start flex items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
         <span className='text-[20px] text-red-700'><FaHandHoldingWater /></span>

    <button className=' flex  items-center content-center '>Requests Blood</button>
    
    </div>

    <div className='  flex  gap-2 justify-start  items-center  hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700 '>
             <span className='text-[20px] text-red-700'><IoPersonOutline /></span>

    <button className=' flex  items-center content-center '>Become a Donor</button>
    
    </div>

    <div className='  flex  gap-2 justify-start  items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
             <span className='text-[20px] text-red-700'> <TbTestPipe2 /> </span>

    <button className=' flex  items-center content-center '>Blood stock Status</button>
    </div>

    <div className='  flex gap-2 justify-start  items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
        <span className='text-[20px] text-red-700'><BsHeartPulse /></span>
    <button className=' flex  items-center content-center '>Donation History</button>
     
    
    </div>

    <div className='  flex  gap-2 justify-start items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
             <span className='text-[20px] text-red-700'><BsHospital /></span>

    <button className=' flex  items-center content-center '>Hospital Directory</button>
    
    </div>
    </div>
  </nav>
  {/* footer Our services section end */}






  <nav > 
    <div className='h-70 justify-center grid    '>
    <h1 className="font-bold text-[17px] text-red-700">Contact Us</h1>
    <div className=' w-38 flex  justify-start gap-2  items-center  hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700 '>
        <span className='text-[20px] text-red-700'> <MdOutlinePhone /> </span>
    <button className=' flex  items-center content-center '>+8801861196596</button>
     
    
    </div>
    <div className=' w-38 flex  justify-start gap-2  items-center  hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700 '>
        <span className='text-[20px] text-red-700'> <MdOutlinePhone /> </span>
    <button className=' flex  items-center content-center '>+8801834292488</button>
    </div>

   <div className='w-38 gap-2 justify-start  flex  items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
         <span className='text-[20px] text-red-700'> <MdMailOutline /> </span>

    <button className=' flex  items-center content-center'>Lifeline@gmail.com</button>
    
    </div>

   <div className=' w-38 gap-2 justify-start flex items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700  '>
         <span className='text-[20px] text-red-700'> <GrLocation />  </span>

    <button className=' flex  items-center content-center '> Khulsi,Chattogram 4100, Bangladesh </button>
    
    </div>

    <div className=' w-38 flex  gap-2 justify-start  items-center  hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700 '>
             <span className='text-[20px] text-red-700'> <MdOutlineAccessTime />  </span>

    <button className=' flex  items-center content-center '> Fri-Thu: 9.00 AM - 6.00 PM</button>
    
    </div>

    

    

    
    </div>
  </nav>
</footer>


    );
};

export default Footer;