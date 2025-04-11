"use client"
import React, {Suspense, useEffect, useState} from 'react';
import Image from "next/image";
import './globals.css'
import {InlineWidget} from "react-calendly";
import headerImage from "@/../public/assets/images/fliped-keyboard-scaled.jpg"
import { motion } from 'framer-motion';

import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Loading from "@/components/Loading";
import Testimonials from "@/components/Testimonials";


const projects = [
    {
        title: 'An Author Blogging Site',
        description: 'A platform for authors to share their stories and connect with readers through engaging blog posts.',
        techStack: 'WordPress, Custom Plugins',
        image: '/assets/images/celebrating-our-stories.png',
        link: 'https://celebratingourstories.com/',
    },
    {
        title: 'Travel Tours Website',
        description: 'A comprehensive travel tours website offering detailed itineraries, booking options, and customer reviews.',
        techStack: 'WordPress, WooCommerce, Custom API',
        image: '/assets/images/dunstun-travel.png',
        link: 'https://duntravelsafaris.com/',
    },
    {
        title: 'Qatar Based Maids Services',
        description: 'A service platform connecting users with professional maid services in Qatar, featuring booking and payment integration.',
        techStack: 'WordPress, WooCommerce, Payment Gateway Integration',
        image: '/assets/images/riyadh.png',
        link: 'https://riyadhmaidsconnect.com/',
    },
    {
        title: 'A Non-Profit Organization Website',
        description: 'A website for a non-profit organization, showcasing their mission, events, and donation options.',
        techStack: 'WordPress, Donation Plugins',
        image: '/assets/images/triohubwomen.png',
        link: 'https://triohubwomen.org/',
    },
    {
        title: 'Fundraising Platform',
        description: 'A secure platform for managing fundraising campaigns, tracking donations, and engaging with supporters.',
        techStack: 'WordPress, WooCommerce, Custom Plugins',
        image: '/assets/images/smfundraisingconsultants.png',
        link: 'https://smfundraisingconsultants.com/',
    },
    {
        title: 'Mobile Gym Connect App',
        description: 'A mobile app connecting gym enthusiasts with trainers and classes, featuring scheduling and notifications.',
        techStack: 'React Native, Firebase, Push Notifications',
        image: '/assets/images/aara.png',
        // link: 'https://tripticktravels.com/',
        link: '',
    },
];


const LandingPage: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const [currency, setCurrency] = useState<string>('USD');
    // const [isLoading, setIsLoading] = useState(true);


    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        alert('Thank you! Your details have been submitted.');
        closeModal();
    };


    useEffect(() => {
        // Function to fetch user's location based on IP
        const fetchUserLocation = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/'); // Free IP geolocation API
                const data = await response.json();

                if (data.country_name === 'Kenya') {
                    setCurrency('KES');
                } else if (data.currency) {
                    setCurrency(data.currency);
                } else {
                    setCurrency('USD'); // Default fallback
                }
            } catch (err) {
                console.error('Error fetching location:', err);
                setCurrency('USD');
            }
        };

        fetchUserLocation();

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <Suspense fallback={<Loading />}>
            <div className="bg-gray-50">
                {/* Navbar */}
                <Navbar />

                <main className="mt-20">
                    {/* Hero Section */}
                    <motion.section
                        className="relative text-white py-32 text-center overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Background Image */}
                        <motion.div 
                            className="absolute inset-0 group"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={headerImage}
                                alt="Flipped keyboard"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                                priority
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40" />
                        </motion.div>

                        {/* Overlay Content */}
                        <div className="relative z-10 max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.h1 
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Welcome to{" "}
                                <motion.span 
                                    className="text-yellow-400"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    Fazilabs Digital Services
                                </motion.span>
                            </motion.h1>
                            <motion.p 
                                className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Transforming your ideas into{" "}
                                <motion.span 
                                    className="font-semibold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    stunning websites
                                </motion.span>{" "}
                                and{" "}
                                <motion.span 
                                    className="font-semibold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    mobile apps
                                </motion.span>.
                            </motion.p>
                            <motion.div 
                                className="mt-6 sm:mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <a
                                    href="#services"
                                    className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
                                >
                                    Explore Our Services
                                </a>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* About Section */}
                    <motion.section
                        id="about-us"
                        className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="max-w-[80vw] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <motion.h2 
                                    className="text-4xl font-bold mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    About <motion.span 
                                        className="text-yellow-400"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        Me
                                    </motion.span>
                                </motion.h2>
                                <motion.p 
                                    className="text-lg mb-6 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    Hi, I'm Brian Murithi, a passionate full-stack developer and the founder of Fazilabs. 
                                    With expertise in WordPress, React, and mobile app development, I help businesses transform 
                                    their ideas into powerful digital solutions.
                                </motion.p>
                                <motion.ul 
                                    className="space-y-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    {[
                                        'Full-Stack Development Expertise',
                                        'Personalized Client Approach',
                                        'End-to-End Project Management'
                                    ].map((item, index) => (
                                        <motion.li 
                                            key={index}
                                            className="flex items-center"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                        >
                                            <motion.span 
                                                className="bg-yellow-400 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ 
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 20,
                                                    delay: 0.8 + index * 0.1
                                                }}
                                            >
                                                ✓
                                            </motion.span>
                                            <p>{item}</p>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>

                            {/* Image Content */}
                            <motion.div 
                                className="relative overflow-hidden rounded-lg"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="overflow-hidden rounded-lg"
                                >
                                    <Image
                                        src="/assets/images/AFRIVEN_Profile.png"
                                        alt="Brian Murithi - Full Stack Developer"
                                        className="relative rounded-lg shadow-lg w-full h-[400px] object-contain transition-transform duration-700 ease-out"
                                        width={400}
                                        height={400}
                                        quality={100}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Scroll to Top Button */}
                    {showScrollToTop && (
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
                        >
                            ↑
                        </button>
                    )}

                    {/* Services Section */}
                    <motion.section
                        id="services"
                        className="py-24 bg-gradient-to-b from-gray-50 to-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <motion.h2 
                                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    Our Services
                                </motion.h2>
                                <motion.p 
                                    className="text-xl text-gray-600 max-w-2xl mx-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    We help you advance your business to new heights with our comprehensive digital solutions.
                                </motion.p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: 'WordPress Development',
                                        description: 'Custom WordPress themes, plugins, and solutions tailored to your brand.',
                                        icon: '🌐',
                                        features: [
                                            'Custom Theme Development',
                                            'Plugin Development',
                                            'E-commerce Integration',
                                            'Performance Optimization'
                                        ]
                                    },
                                    {
                                        title: 'Mobile App Development',
                                        description: 'Cross-platform apps built with React Native for seamless performance.',
                                        icon: '📱',
                                        features: [
                                            'iOS & Android Apps',
                                            'UI/UX Design',
                                            'API Integration',
                                            'App Store Deployment'
                                        ]
                                    },
                                    {
                                        title: 'Custom Web Development',
                                        description: 'Modern web solutions using React.js, Next.js, and Python Flask.',
                                        icon: '💻',
                                        features: [
                                            'Full-Stack Development',
                                            'API Development',
                                            'Database Design',
                                            'Cloud Integration'
                                        ]
                                    }
                                ].map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="p-8">
                                            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                            <p className="text-gray-600 mb-6">{service.description}</p>
                                            <ul className="space-y-3">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-gray-700">
                                                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="px-8 pb-8">
                                            <a
                                                href="#contact"
                                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                                            >
                                                Get Started
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>


                    {/* Projects Section */}
                    <section id="projects" className="py-16 px-6 bg-white text-gray-700">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Our Projects</h2>
                            <p className="mt-4 text-lg">Here are some projects we've worked on:</p>
                            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                                {projects.map((project, index) => (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                                        <div
                                            className="relative group bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 "
                                        >
                                            <div
                                                style={{
                                                    backgroundImage: `url(${project.image})`,
                                                }}
                                                className="w-full h-[78vh] bg-cover bg-top transition-all duration-[3000ms] group-hover:bg-bottom"
                                            ></div>
                                            <div
                                                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                                                <div
                                                    className="bg-white w-[80%] rounded-lg transition-all ease-in-out duration-[4000ms] text-gray-700 p-3">
                                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                                    <p className="mt-2 text-xs font-semibold">{project.techStack}</p>
                                                    <p className="mt-2 text-sm">{project.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <Testimonials />

                    {/*Pricing*/}
                    <PricingSection currency={currency} openModal={openModal}/>

                    {/* Contact Section */}
                    <section id="contact" className="py-16 bg-blue-600 text-white">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
                            <p className="mt-4 text-lg">Contact us to discuss your project requirements.</p>

                            {/* Contact Details */}
                            <div className="mt-10 max-w-2xl mx-auto text-left">
                                <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
                                <p className="text-lg mb-4">We would love to hear from you! Reach out to discuss
                                    your ideas, and let&apos;s work together to bring them to life.</p>
                                <p className="text-lg mb-4">Email: <a href="mailto:hello@fazilabs.com"
                                                                      className="text-yellow-400 hover:underline">hello@fazilabs.com</a>
                                </p>
                                <p className="text-lg mb-6">Phone: +254 706 134 387</p>
                                <a
                                    href="https://calendly.com/murithibrianm/project-discovery-call"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Book a Discovery Call
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="py-6 bg-gray-800 text-gray-300 sm:px-4">
                        <div className="text-center">
                            <p>&copy; 2025 Fazilabs Digital Services. All rights reserved.</p>
                        </div>
                    </footer>
                </main>
            </div>


            {/* Modal for Custom Plan */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                        <h3 className="text-2xl font-bold mb-4 text-gray-700">Tell Us About Your Needs</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="mt-1 block w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                                    Project Details
                                </label>
                                <textarea
                                    id="details"
                                    rows={4}
                                    className="mt-1 block w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Tell us more about your requirements..."
                                ></textarea>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Suspense>
    );
};

export default LandingPage;