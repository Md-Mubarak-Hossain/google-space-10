import React from 'react';

const Loading = () => {
    return (
        <div className='w-full py-40 h-96 flex flex-col justify-center items-center'>
            <div><h1>
                Please wait,The page is running to ready
                </h1>
                </div>
           <div>Loading...
           <span className="mx-auto loading loading-spinner text-success"></span>
           </div>
        </div>
    );
};

export default Loading;