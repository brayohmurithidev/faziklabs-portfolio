import {useState} from 'react';
import Image from 'next/image';
import logo from "@/../public/assets/images/logo-1.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white shadow-md z-50 top-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <Image src={logo} alt="Logo" width={100} height={100}/>

                {/* Hamburger Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-gray-700 focus:outline-none -mt-10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6">
                    {['About Us', 'Services', 'Projects', 'Testimonials', 'Pricing'].map((label, index) => (
                        <li key={index}>
                            <a
                                href={`#${label.toLowerCase().replace(' ', '-')}`}
                                className="text-gray-700 hover:text-blue-600 font-medium"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Call-to-Action Button */}
                <a
                    href={`#contact`}
                    className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition"
                >
                    Book a Discovery Call
                </a>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <ul className="absolute top-16 left-0 w-full bg-blue-50 shadow-lg rounded-lg px-6 py-4 md:hidden space-y-4 text-center animate-slide-down">
                    {['About Us', 'Services', 'Projects', 'Testimonials', 'Pricing'].map((label, index) => (
                        <li key={index}>
                            <a
                                href={`#${label.toLowerCase().replace(' ', '-')}`}
                                className="text-gray-700 hover:text-blue-600 font-medium block py-2"
                                onClick={() => setIsMenuOpen(false)} // Close menu on click
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;