import React from 'react';
import { Link } from 'react-router'; 
import Logo from '../../../Component/Logo/Logo';
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaInstagram, FaYoutube, FaHandHoldingWater } from "react-icons/fa";
import { MdOutlineArrowForwardIos, MdOutlineWaterDrop, MdOutlinePhone, MdMailOutline, MdOutlineAccessTime } from "react-icons/md";
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { TbTestPipe2 } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import logoitem from "../../../assets/logoitems.png";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-[rgb(255,250,100,0.6)] text-black p-10 justify-items-center">

  {/* footer logo side desing start*/}
  <nav className=''>
    <div className='h-60 justify-center grid'>
        <div className='flex'>
            <div>
                <Logo></Logo>
            </div>
        </div>
        
        <div className='justify-center grid'>
            <h6 className='w-40 text-[10px]'>
                LifeLine connects donors, hospitals, and patients to ensure blood is available when it matters most. One donation can save many lives.
            </h6>
            <img className='w-40 h-10' src={logoitem} alt="" />
        </div>

        <div className='flex gap-2'>
            <div>
               <button className='item-center justify-center p-2 border-1 border-solid rounded-full border-red-600 shadow-md hover:bg-red-600 hover:text-white hover:text-xl'>
                 <RiFacebookFill />
               </button>
            </div>
          
            <div>
               <button className='item-center justify-center p-2 border-1 border-solid rounded-full border-red-600 shadow-md hover:bg-red-600 hover:text-white hover:text-xl'>
                    <FaTwitter />
                </button>
            </div>
           <div>
                <button className='item-center justify-center p-2 border-1 border-solid rounded-full border-red-600 shadow-md hover:bg-red-600 hover:text-white hover:text-xl'>
                    <FaInstagram />
                </button>
           </div>
            <div>
                <button className='item-center justify-center p-2 border-1 border-solid rounded-full border-red-600 shadow-md hover:bg-red-600 hover:text-white hover:text-xl'>
                    <FaYoutube />
                </button>
            </div>
        </div>
    </div>
  </nav>
  {/* footer logo side desing end*/}


  {/* footer quick link section start (Only existing project routes) */}
  <nav> 
    <div className='h-70 justify-center grid'>
        <h1 className="font-bold text-[17px] text-red-700">Quick Links</h1>
        
        <div className='w-32 flex justify-between items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <Link to="/" className='flex items-center w-full'>Home</Link>
            <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
        </div>

        <div className='w-32 flex justify-between items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <Link to="/about" className='flex items-center w-full'>About Us</Link>
            <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
        </div>

        <div className='w-32 flex justify-between items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <Link to="/donors" className='flex items-center w-full'>Donors</Link>
            <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
        </div>

        <div className='w-32 flex justify-between items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <Link to="/blood-stock" className='flex items-center w-full'>Blood Stock</Link>
            <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
        </div>

        <div className='w-32 flex justify-between items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <Link to="/request" className='flex items-center w-full'>Requests</Link>
            <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
        </div>


        <div className='w-32 flex justify-between items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <Link to="/contact" className='flex items-center w-full'>Contact Us</Link>
            <span className='text-[13px] text-red-700'><MdOutlineArrowForwardIos /></span>
        </div>
    </div>
  </nav>
  {/* footer quick link section end */}


  {/* footer Our services section start (Filtered to core blood bank features) */}
  <nav> 
    <div className='h-70 justify-center grid'>
        <h1 className="font-bold text-[17px] text-red-700">Our Services</h1>
        
        <div className='flex justify-start gap-2 items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <span className='text-[20px] text-red-700'><MdOutlineWaterDrop /></span>
            <Link to="/become-donor">Donate Blood</Link>
        </div>

        <div className='gap-2 justify-start flex items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <span className='text-[20px] text-red-700'><IoSearchOutline /></span>
            <Link to="/donors">Find Blood</Link>
        </div>

        <div className='gap-2 justify-start flex items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <span className='text-[20px] text-red-700'><FaHandHoldingWater /></span>
            <Link to="/request">Requests Blood</Link>
        </div>

        <div className='flex gap-2 justify-start items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <span className='text-[20px] text-red-700'><IoPersonOutline /></span>
            <Link to="/become-donor">Become a Donor</Link>
        </div>

        <div className='flex gap-2 justify-start items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <span className='text-[20px] text-red-700'><TbTestPipe2 /></span>
            <Link to="/blood-stock">Blood stock Status</Link>
        </div>
    </div>
  </nav>
  {/* footer Our services section end */}

  {/* footer contact section */}
  <nav> 
    <div className='h-70 justify-center grid'>
        <h1 className="font-bold text-[17px] text-red-700">Contact Us</h1>
        
        <div className='w-48 flex justify-start gap-2 items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <span className='text-[20px] text-red-700'><MdOutlinePhone /></span>
            <p>+8801861196596</p>
        </div>

        <div className='w-48 flex justify-start gap-2 items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <span className='text-[20px] text-red-700'><MdOutlinePhone /></span>
            <p>+8801834292488</p>
        </div>

        <div className='w-48 gap-2 justify-start flex items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <span className='text-[20px] text-red-700'><MdMailOutline /></span>
            <p>Lifeline@gmail.com</p>
        </div>

        <div className='w-48 gap-2 justify-start flex items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <span className='text-[20px] text-red-700'><GrLocation /></span>
            <p>Khulsi, Chattogram 4100</p>
        </div>

        <div className='w-48 flex gap-2 justify-start items-center hover:border-b-2 border-red-700 hover:shadow-lg hover:font-bold hover:text-red-700'>
            <span className='text-[20px] text-red-700'><MdOutlineAccessTime /></span>
            <p>Fri-Thu: 9AM - 6PM</p>
        </div>
    </div>
  </nav>

</footer>
    );
};

export default Footer;