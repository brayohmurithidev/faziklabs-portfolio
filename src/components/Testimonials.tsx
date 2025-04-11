'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Review {
    name: string;
    rating: number;
    comment: string;
    createTime: string;
    reviewer: {
        profilePhotoUrl?: string;
        displayName: string;
    };
}

const Testimonials: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api/reviews');
                const data = await response.json();
                
                if (!response.ok) {
                    throw new Error(data.error || 'Failed to fetch reviews');
                }

                setReviews(data.reviews || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load reviews');
                console.error('Error fetching reviews:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    if (loading) {
        return (
            <div className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md">
                                    <div className="h-24 bg-gray-200 rounded mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-red-500 font-semibold">Error loading reviews</p>
                        <p className="text-red-400 text-sm mt-2">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <motion.section
            id="testimonials"
            className="py-16 bg-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
        >
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="flex items-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">What Our Clients Say</h2>
                        <div className="ml-4 flex items-center">
                            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <span className="ml-2 text-xl font-semibold">
                                {reviews.length > 0 
                                    ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
                                    : '4.9'}
                            </span>
                        </div>
                    </div>
                    <a
                        href="https://maps.app.goo.gl/your-google-business-url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6h2v-2h-2v2zm0-4h2V6h-2v6z"/>
                        </svg>
                        Leave a Review
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                    {review.reviewer.profilePhotoUrl ? (
                                        <Image
                                            src={review.reviewer.profilePhotoUrl}
                                            alt={review.reviewer.displayName}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500 text-lg">
                                                {review.reviewer.displayName.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold">{review.reviewer.displayName}</h3>
                                </div>
                            </div>
                            <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-2">{review.comment}</p>
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-500">
                                    {new Date(review.createTime).toLocaleDateString()}
                                </p>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6h2v-2h-2v2zm0-4h2V6h-2v6z"/>
                                    </svg>
                                    <span className="text-sm text-blue-500">Google</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Testimonials; 