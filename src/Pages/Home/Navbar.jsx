import { FaUser, FaHeartPulse, FaHeart, FaMagnifyingGlass, FaUserPlus, FaUserGroup, FaDroplet, FaHospital, FaArrowTrendUp } from "react-icons/fa6";
import logo from '../../assets/logo.png';
import heroBanner from "../../assets/hero_banner.png";
import heroDrop from "../../assets/hero_banner_blood_drop.png";
import { useNavigate } from "react-router";


const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      className="w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <nav>
        {/* navbar */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <img src={logo} alt="LifeLine logo" className="h-11 w-auto" />
          </div>

          <div>
            <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-800">
              <li className="text-red-600 font-semibold border-b-2 border-red-600 pb-1 cursor-pointer">Home</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">About</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Donors</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Blood Stock</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Request</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <button className="btn btn-active btn-secondary rounded-full bg-red-600 text-white">
              <FaHeartPulse className="size-[1.2em]" />
              Donate Now
            </button>

            {/* profile */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* hero content */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* left: text */}
        <div>
          <span className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-800 text-sm font-medium px-4 py-2 rounded-full">
            <FaHeart className="text-red-600" />
            Donate Blood • Save Lives
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-6 leading-tight">
            Every Drop Can{" "}
            <span className="text-red-600 font-serif italic font-normal">
              Save a Life
            </span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 max-w-md">
            LifeLine connects donors, hospitals, and patients to ensure blood
            is available when it matters most.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              Find Blood
              <FaMagnifyingGlass />
            </button>
            <button className="flex items-center gap-2 border border-amber-300 hover:bg-amber-100 text-gray-800 font-semibold px-6 py-3 rounded-full transition-colors"
              onClick={() => navigate('/signup')}
            >
              Become a Donor
              <FaUserPlus />
            </button>
          </div>
        </div>

        {/* right: hand with blood drop image */}
        <div className="flex justify-center lg:justify-end">
          <img src={heroDrop} alt="Blood donation" className="w-full max-w-md" />
        </div>
      </div>

      {/* stats */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-4">
            <div className="h-11 w-11 flex items-center justify-center rounded-full bg-amber-100 text-lg text-amber-600">
              <FaUserGroup />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 flex items-center gap-1">
                12,540+ <FaArrowTrendUp className="text-green-500 text-sm" />
              </p>
              <p className="text-sm text-gray-600">Registered Donors</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-4">
            <div className="h-11 w-11 flex items-center justify-center rounded-full bg-red-100 text-lg text-red-500">
              <FaDroplet />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">3,218+</p>
              <p className="text-sm text-gray-600">Units of Blood Available</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-4">
            <div className="h-11 w-11 flex items-center justify-center rounded-full bg-amber-100 text-lg text-amber-600">
              <FaHospital />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">186+</p>
              <p className="text-sm text-gray-600">Hospitals Connected</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-4">
            <div className="h-11 w-11 flex items-center justify-center rounded-full bg-red-100 text-lg text-red-500">
              <FaHeart />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">9,600+</p>
              <p className="text-sm text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8">
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