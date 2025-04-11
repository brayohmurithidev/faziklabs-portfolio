import React from 'react';
import { motion } from 'framer-motion';


const Loading: React.FC = () => {
    return (
        <motion.div
            className="flex justify-center items-center h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        </motion.div>
    );
};


export default Loading;