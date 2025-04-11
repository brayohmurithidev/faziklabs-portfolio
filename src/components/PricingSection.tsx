import React, {useState} from "react";

const plans = [
    {
        title: 'Basic',
        prices: {
            wordpress: 500,
            mobile: 1200,
            fullstack: 2000,
            design: 300,
        },
        services: {
            wordpress: [
                'Single-page WordPress website',
                'Basic SEO setup',
                'Responsive design',
                'Simple contact form integration',
            ],
            mobile: ['Static splash screen', 'Basic navigation (React Native)', 'No backend functionality'],
            fullstack: ['Static HTML/React landing page', 'Basic styling', 'No backend functionality'],
            design: ['Basic logo design', 'Simple poster design']
        },
    },
    {
        title: 'Standard',
        prices: {
            wordpress: 1200,
            mobile: 3000,
            fullstack: 4500,
            design: 800,
        },
        services: {
            wordpress: [
                'Multi-page WordPress website (up to 5 pages)',
                'Intermediate SEO setup',
                'Responsive design',
                'Social media integration',
            ],
            mobile: [
                'Multi-screen app',
                'API integration',
                'Authentication (email/password)',
                'Supports iOS and Android',
            ],
            fullstack: [
                'Simple full-stack web app',
                'Basic backend (Node.js/Flask)',
                'Database integration (PostgreSQL/MySQL)',
            ],
            design: ['Advanced logo design', 'Multi-page brochure design', 'Social media graphics']
        },
    },
    {
        title: 'Premium',
        prices: {
            wordpress: 2500,
            mobile: 6000,
            fullstack: 10000,
            design: 1500,
        },
        services: {
            wordpress: [
                'Custom WordPress theme',
                'Unlimited pages with advanced responsiveness',
                'E-commerce integration (20 products)',
                'Newsletter subscription setup',
            ],
            mobile: [
                'Fully functional app',
                'Advanced features (e.g., maps, notifications)',
                'Backend with cloud storage (Firebase)',
                'App store submission support',
            ],
            fullstack: [
                'Complex full-stack web app',
                'Advanced backend with API integrations',
                'Real-time features (chat, notifications)',
                'Deployment on AWS/GCP',
            ],
            design: ['Comprehensive branding package', 'Custom illustrations', 'High-quality print materials']
        },
    },
];

interface PricingSectionProps {
    currency: string; // Represents the user's selected currency, e.g., "USD", "KES", etc.
    openModal: () => void; // A function that is triggered to open a modal.
}


const PricingSection: React.FC<PricingSectionProps> = ({currency, openModal}) => {
    const [activeTab, setActiveTab] = useState<"wordpress" | "mobile" | "fullstack" | "design">("wordpress");

    return (
        <section id="pricing" className="py-16 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">Pricing</h2>

                {/* Tabs */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {['wordpress', 'mobile', 'fullstack', 'design'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-6 py-3 rounded-full shadow-md transition-all duration-300 ${
                                activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                            }`}
                            onClick={() => setActiveTab(tab as 'wordpress' | 'mobile' | 'fullstack' | 'design')}
                        >
                            {tab === 'wordpress'
                                ? 'WordPress'
                                : tab === 'mobile'
                                ? 'Mobile Development'
                                : tab === 'fullstack'
                                ? 'Full-Stack'
                                : 'Design'}
                        </button>
                    ))}
                </div>

                {/* Plans */}
                <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-left"
                        >
                            <h4 className="text-2xl font-bold text-center text-gray-900">{plan.title}</h4>
                            <p className="text-xl font-semibold mt-4 text-center text-gray-700">
                                From ${plan.prices[activeTab].toLocaleString()}
                            </p>
                            <ul className="mt-6 text-base text-gray-600 space-y-2">
                                {plan.services[activeTab].map((service, i) => (
                                    <li key={i} className="flex items-center space-x-2">
                                        <span className="text-blue-500">✓</span>
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Custom Pricing Option */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-12">
                    <p className="mt-4 text-2xl text-gray-700 w-[80%] mx-auto">
                        Have specific requirements? Share your details with us, and we&#39;ll create a tailored
                        package just for you!
                    </p>
                    <button
                        onClick={openModal}
                        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Get a Customized Plan
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;