import React from 'react';
import { Link } from 'react-router';
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlinePhone, MdMailOutline, MdOutlineAccessTime } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import logo from "../../../assets/logo.png";

const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Donors', to: '/donors' },
    { label: 'Blood Stock', to: '/blood-stock' },
    { label: 'Requests', to: '/request' },
    { label: 'Contact Us', to: '/contact' },
];

const services = [
    { label: 'Become a Donor', to: '/become-donor' },
    { label: 'Find Blood', to: '/donors' },
    { label: 'Request Blood', to: '/request' },
    { label: 'Blood Stock Status', to: '/blood-stock' },
];

const socials = [
    { label: 'Facebook', icon: <RiFacebookFill />, href: '#' },
    { label: 'Twitter', icon: <FaTwitter />, href: '#' },
    { label: 'Instagram', icon: <FaInstagram />, href: '#' },
    { label: 'YouTube', icon: <FaYoutube />, href: '#' },
];

const linkClass =
    'inline-block text-gray-800 transition-all hover:translate-x-1 hover:font-semibold hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 rounded-sm';

const headingClass = 'mb-4 border-b-2 border-red-600 pb-2 text-base font-bold text-red-800';

const iconBadge =
    'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-600 text-lg text-white';

const Footer = () => {
    return (
        <footer className="border-t-4 border-red-600 bg-[#F7C6C0] text-gray-900">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
                {/* Brand */}
                <div className="space-y-4">
                    <Link to="/" aria-label="LifeLine home" className="inline-block">
                        <img src={logo} alt="LifeLine" className="h-12 w-auto" />
                    </Link>
                    <p className="max-w-xs text-sm leading-relaxed text-gray-800">
                        LifeLine connects donors, hospitals, and patients so blood is available when it matters most. One donation can save many lives.
                    </p>
                    <div className="flex gap-2.5">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-600 text-lg text-red-700 transition hover:bg-red-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick links */}
                <nav aria-label="Quick links">
                    <h3 className={headingClass}>Quick Links</h3>
                    <ul className="space-y-2.5 text-sm">
                        {quickLinks.map((l) => (
                            <li key={l.label}><Link to={l.to} className={linkClass}>{l.label}</Link></li>
                        ))}
                    </ul>
                </nav>

                {/* Services */}
                <nav aria-label="Our services">
                    <h3 className={headingClass}>Our Services</h3>
                    <ul className="space-y-2.5 text-sm">
                        {services.map((l) => (
                            <li key={l.label}><Link to={l.to} className={linkClass}>{l.label}</Link></li>
                        ))}
                    </ul>
                </nav>

                {/* Contact */}
                <div>
                    <h3 className={headingClass}>Contact Us</h3>
                    <ul className="space-y-3.5 text-sm">
                        <li className="flex items-start gap-3">
                            <span className={iconBadge}><MdOutlinePhone /></span>
                            <div className="flex flex-col">
                                <a href="tel:+8801861196596" className="hover:text-red-700">+880 1861-196596</a>
                                <a href="tel:+8801834292488" className="hover:text-red-700">+880 1834-292488</a>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className={iconBadge}><MdMailOutline /></span>
                            <a href="mailto:Lifeline@gmail.com" className="break-all hover:text-red-700">Lifeline@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className={iconBadge}><GrLocation /></span>
                            <span>Khulsi, Chattogram 4100</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className={iconBadge}><MdOutlineAccessTime /></span>
                            <span>Fri–Thu: 9AM – 6PM</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-red-700 text-white">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-6 py-4 text-center text-xs">
                    <p>© {new Date().getFullYear()} LifeLine. All rights reserved.</p>
                    <p>Donate blood. Save lives.</p>
                    <p>Developed by Sta Rahi &amp; Nayeem Hossain</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;