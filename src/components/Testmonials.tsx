import React, {useEffect, useState} from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

interface Review {
    id: string;
    author: string;
    content: string;
    rating: number; // Assuming ratings are between 1-5
    profilePhoto: string; // Optional author profile photo
}

interface TestimonialsPageProps {
    fetchReviews: () => Promise<Review[]>; // Function to fetch reviews (API call)
    addReviewUrl: string; // URL for users to add a review
}

const Testimonials: React.FC<TestimonialsPageProps> = ({
                                                           fetchReviews,
                                                           addReviewUrl,
                                                       }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadReviews = async () => {
            try {
                const fetchedReviews = await fetchReviews();
                setReviews(fetchedReviews);
            } catch (error) {
                console.error("Failed to fetch reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        loadReviews();
    }, [fetchReviews]);

    return (
        <section className="py-16 bg-gray-100 text-gray-700">
            <div className="max-w-5xl mx-auto px-4">
                {/* Title Section */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                        Testimonials
                    </h2>
                    <p className="mt-4 text-lg">
                        See what our amazing clients say about us.
                    </p>
                </div>

                {/* Reviews Section */}
                <motion.div
                    className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {loading ? (
                        <p className="text-center text-gray-500 col-span-full">
                            Loading reviews...
                        </p>
                    ) : reviews.length > 0 ? (
                        reviews.map((review) => (
                            <motion.div
                                key={review.id}
                                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center space-x-4">
                                    {review.profilePhoto ? (
                                        <Image
                                            src={review.profilePhoto}
                                            alt={review.author}
                                            className="w-12 h-12 rounded-full object-cover"
                                            width={48}
                                            height={48}
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                                    )}
                                    <div>
                                        <h4 className="text-lg font-semibold">{review.author}</h4>
                                        <div className="text-yellow-400 flex">
                                            {"★".repeat(review.rating)}
                                            {"☆".repeat(5 - review.rating)}
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-600">{review.content}</p>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">
                            No reviews yet. Be the first to leave one!
                        </p>
                    )}
                </motion.div>

                {/* Add Review Button */}
                <div className="text-center mt-12">
                    <a
                        href={addReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition"
                    >
                        Add a Review
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;