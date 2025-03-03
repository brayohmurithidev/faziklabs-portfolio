import React, {useState} from "react";

const plans = [
    {
        title: 'Basic',
        prices: {
            wordpress: 15000,
            mobile: 59999,
            fullstack: 119999,
            graphics: 0, // or adjust if you have specific pricing for graphics
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
            graphics: [""]
        },
    },
    {
        title: 'Standard',
        prices: {
            wordpress: 34999,
            mobile: 149999,
            fullstack: 179999,
            graphics: 0, // Adjust pricing as needed
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
            graphics: [""]
        },
    },
    {
        title: 'Premium',
        prices: {
            wordpress: 49999,
            mobile: 249999,
            fullstack: 499999,
            graphics: 0, // Adjust pricing as needed
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
            graphics: [""]
        },
    },
];

interface PricingSectionProps {
    currency: string; // Represents the user's selected currency, e.g., "USD", "KES", etc.
    openModal: () => void; // A function that is triggered to open a modal.
}


const PricingSection: React.FC<PricingSectionProps> = ({currency, openModal}) => {
    const [activeTab, setActiveTab] = useState<"wordpress" | "mobile" | "fullstack" | "graphics">("wordpress");

    return (
        <section id="pricing" className="py-16 bg-gray-100 text-gray-700">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>

                {/* Tabs */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    {["wordpress", "mobile", "fullstack", "graphics"].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 rounded ${
                                activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => setActiveTab(tab as "wordpress" | "mobile" | "fullstack" | "graphics")}
                        >
                            {tab === "wordpress"
                                ? "WordPress"
                                : tab === "mobile"
                                    ? "Mobile Development"
                                    : tab === "fullstack"
                                        ? "Full-Stack"
                                        : "Design"}
                        </button>
                    ))}
                </div>

                {/* Plans */}
                <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-left"
                        >
                            <h4 className="text-xl font-semibold text-center">{plan.title}</h4>
                            <p className="text-lg font-bold mt-2 text-center">
                                From{" "}
                                {currency === "KES"
                                    ? `Ksh. ${plan.prices[activeTab].toLocaleString()}`
                                    : `$ ${plan.prices[activeTab]}`}
                            </p>
                            <ul className="mt-4 text-sm text-gray-600">
                                {plan.services[activeTab].map((service, i) => (
                                    <li key={i}>- {service}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Custom Pricing Option */}
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 mt-10">
                    <p className="mt-4 text-xl text-gray-600 w-[80%] mx-auto">
                        Have specific requirements? Share your details with us, and we&#39;ll create a tailored
                        package just for you!
                    </p>
                    <button
                        onClick={openModal}
                        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                        Get a Customized Plan
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;