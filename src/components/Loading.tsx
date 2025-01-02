import React from 'react';


const Loading = ({}) => {
    return (
        <div className="fixed inset-0 bg-blue-600 flex items-center justify-center z-50">
            <div className="text-white text-xl font-semibold animate-pulse">
                Loading...
            </div>
        </div>
    );
};


export default Loading;