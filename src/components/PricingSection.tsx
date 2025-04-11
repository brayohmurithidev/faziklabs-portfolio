import React, {useState} from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
    {
        name: 'Basic',
        price: 299,
        features: [
            'Custom WordPress Website',
            'Responsive Design',
            'Basic SEO Setup',
            'Contact Form',
            '1 Month Support'
        ]
    },
    {
        name: 'Professional',
        price: 599,
        features: [
            'Everything in Basic',
            'Advanced Customization',
            'Premium Plugins',
            'E-commerce Integration',
            '3 Months Support'
        ]
    },
    {
        name: 'Enterprise',
        price: 999,
        features: [
            'Everything in Professional',
            'Custom Plugin Development',
            'API Integrations',
            'Performance Optimization',
            '6 Months Support'
        ]
    }
];

const PricingSection = () => {
    return (
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="max-w-[80vw] mx-auto px-6">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Pricing <span className="text-blue-600">Plans</span>
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className="bg-white rounded-lg shadow-lg p-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-6">${plan.price}</div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <FaCheck className="text-green-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingSection