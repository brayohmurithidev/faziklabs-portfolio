import Link from 'next/link';
import Image from "next/image";

const NotFoundPage = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex flex-col items-center justify-center text-white">
            <div className="text-center">
                <h1 className="text-8xl font-bold">404</h1>
                <p className="mt-4 text-2xl">Oops! The page you&#39;re looking for doesn&#39;t exist.</p>
                <p className="mt-2 text-lg text-gray-300">It might have been removed, renamed, or it never existed.</p>

                <div className="mt-8">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>

            <div className="mt-12">
                <Image
                    src="/assets/images/404-illustration.svg"
                    alt="Page not found illustration"
                    className="w-72 md:w-96"
                    width={100}
                    height={400}
                />
            </div>
        </div>
    );
};

export default NotFoundPage;