import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./Pages/Home/Home/Navbar";
import Footer from "./Pages/Home/Home/Footer";
import Home from "./Pages/Home/Home/Home";
import Donors from "./Component/Donors";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import About from "./Component/About";
import BloodRequests from "./Component/BloodRequests"; 
import BloodStock from "./Component/BloodStock";
import BecomeDonor from "./Component/BecomeDonor";
import Blog from "./Component/Blog";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/30">
      <Navbar />
      {/* Main Content & Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/blood-stock" element={<BloodStock />} />
          <Route path="/request" element={<BloodRequests />} /> 
          <Route path="/become-donor" element={<BecomeDonor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;