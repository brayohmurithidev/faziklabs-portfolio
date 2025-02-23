"use client"
import React, {Suspense, useEffect, useState} from 'react';
import Image from "next/image";
import './globals.css'
import {InlineWidget} from "react-calendly";
import headerImage from "@/../public/assets/images/fliped-keyboard-scaled.jpg"

import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Loading from "@/components/Loading";


const projects = [
    {
        title: 'E-Commerce Website',
        description: 'A responsive e-commerce platform built with WordPress.',
        techStack: 'WordPress, WooCommerce',
        image: '/assets/images/celebrating-our-stories.png', // Replace with actual image paths
    }, {
        title: 'E-Commerce Website',
        description: 'A responsive e-commerce platform built with WordPress.',
        techStack: 'WordPress, WooCommerce',
        image: '/assets/images/dunstun-travel.png', // Replace with actual image paths
    }, {
        title: 'E-Commerce Website',
        description: 'A responsive e-commerce platform built with WordPress.',
        techStack: 'WordPress, WooCommerce',
        image: '/assets/images/triptick-1.png', // Replace with actual image paths
    },
    {
        title: 'E-Commerce Website',
        description: 'A responsive e-commerce platform built with WordPress.',
        techStack: 'WordPress, WooCommerce',
        image: '/assets/images/riyadh.png', // Replace with actual image paths
    }, {
        title: 'E-Commerce Website',
        description: 'A responsive e-commerce platform built with WordPress.',
        techStack: 'WordPress, WooCommerce',
        image: '/assets/images/triohubwomen.png', // Replace with actual image paths
    },
    {
        title: 'E-Commerce Website',
        description: 'A responsive e-commerce platform built with WordPress.',
        techStack: 'WordPress, WooCommerce',
        image: '/assets/images/smfundraisingconsultants.png', // Replace with actual image paths
    },
    {
        title: 'Mobile Booking App',
        description: 'A React Native app for booking appointments seamlessly.',
        techStack: 'React Native, Firebase',
        image: '/assets/images/aara.png',
    },
];


const LandingPage: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

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
    }, []);


    return (
        <Suspense fallback={<Loading/>}>
            <div className="bg-gray-50">
                {/* Navbar */}
                <Navbar/>

                <main className="mt-20">
                    {/* Hero Section */}
                    <section className="relative text-white py-16 text-center">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={headerImage}
                                alt="Flipped keyboard"
                                className="w-full h-full object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40"/>
                        </div>

                        {/* Overlay Content */}
                        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                Welcome to{" "}
                                <span className="text-yellow-400">Fazilabs Digital Services</span>
                            </h1>
                            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl">
                                Transforming your ideas into{" "}
                                <span className="font-semibold">stunning websites</span> and{" "}
                                <span className="font-semibold">mobile apps</span>.
                            </p>
                            <div className="mt-6 sm:mt-8">
                                <a
                                    href="#services"
                                    className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
                                >
                                    Explore Our Services
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about-us"
                             className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
                        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div data-aos="fade-right">
                                <h2 className="text-4xl font-bold mb-6">
                                    About <span className="text-yellow-400">Fazilabs</span>
                                </h2>
                                <p className="text-lg mb-6 leading-relaxed">
                                    At Fazilabs Digital Services, we specialize in building innovative solutions for
                                    businesses of all sizes.
                                    From WordPress websites to mobile apps and custom projects, we bring your ideas to
                                    life with precision and care.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
          <span className="bg-yellow-400 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4">
            ✓
          </span>
                                        <p>Professional and Creative Solutions</p>
                                    </li>
                                    <li className="flex items-center">
          <span className="bg-yellow-400 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4">
            ✓
          </span>
                                        <p>Tailored Digital Services</p>
                                    </li>
                                    <li className="flex items-center">
          <span className="bg-yellow-400 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4">
            ✓
          </span>
                                        <p>Customer-Centric Approach</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Image Content */}
                            <div data-aos="fade-left" className="relative">
                                <div
                                    className="absolute inset-0 bg-blue-500 rounded-lg transform scale-95 blur-xl opacity-40"></div>
                                <Image
                                    src="/assets/images/header-background-image.png" // Replace with an actual image path
                                    alt="About Fazilabs"
                                    className="relative rounded-lg shadow-lg w-full object-cover"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section id="services" className="py-16 bg-gray-100 text-gray-700">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
                            <p className="mt-4 text-lg md:text-xl leading-relaxed w-[80%] mx-auto">We help you advance
                                your business to new heights.</p>
                            <div className="mt-10 grid gap-8 md:grid-cols-3">
                                {[
                                    {
                                        title: 'WordPress Development',
                                        description: 'Custom WordPress themes, plugins, and solutions tailored to your brand.',
                                        icon: '🌐',
                                    },
                                    {
                                        title: 'Mobile App Development',
                                        description: 'Cross-platform apps built with React Native for seamless performance.',
                                        icon: '📱',
                                    },
                                    {
                                        title: 'Custom Web Development',
                                        description: 'Modern web solutions using React.js, Next.js, and Python Flask.',
                                        icon: '💻',
                                    },
                                ].map((service, index) => (
                                    <div
                                        key={index}
                                        className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="text-4xl">{service.icon}</div>
                                        <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                                        <p className="mt-2 text-gray-600">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


                    {/* Projects Section */}
                    <section id="projects" className="py-16 px-6 bg-white text-gray-700">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Our Projects</h2>
                            <p className="mt-4 text-lg">Here are some projects we&#39;ve worked on:</p>
                            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
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
                                ))}
                            </div>
                        </div>
                    </section>


                    {/*Pricing*/}
                    <PricingSection currency={currency} openModal={openModal}/>

                    {/* Contact Section */}
                    <section id="contact" className="py-16 bg-blue-600 text-white">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
                            <p className="mt-4 text-lg">Contact us to discuss your project requirements.</p>

                            {/* Flex Container for Calendly and Contact */}
                            <div className="mt-10 flex flex-col md:flex-row justify-center  space-x-8">

                                {/* Calendly Inline Widget */}
                                <div className="flex-1 mb-6 md:mb-0">
                                    {/*<div*/}
                                    {/*    className="calendly-inline-widget w-full h-[630px]"*/}
                                    {/*    data-url="https://calendly.com/murithibrianm/project-discovery-call?hide_event_type_details=1&hide_gdpr_banner=1"*/}

                                    {/*></div>*/}
                                    <InlineWidget
                                        url='https://calendly.com/murithibrianm/project-discovery-call?hide_event_type_details=1&hide_gdpr_banner=1'/>
                                </div>

                                {/* Contact Details */}
                                <div className="flex-1 text-left">
                                    <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
                                    <p className="text-lg mb-4">We would love to hear from you! Reach out to discuss
                                        your ideas, and let’s work together to bring them to life.</p>
                                    <p className="text-lg mb-4">Email: <a href="mailto:hello@fazilabs.com"
                                                                          className="text-yellow-400 hover:underline">hello@fazilabs.com</a>
                                    </p>
                                    <p className="text-lg">Phone: +254 706 134 387</p>
                                </div>
                            </div>

                            {/*/!* Call to Action Button *!/*/}
                            {/*<a*/}
                            {/*    href="mailto:hello@fazilabs.com"*/}
                            {/*    className="mt-6 inline-block px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition"*/}
                            {/*>*/}
                            {/*    Contact Us*/}
                            {/*</a>*/}
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
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"
                    async></script>
        </Suspense>
    );
};

export default LandingPage;