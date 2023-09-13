// import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Feature = ({feature}) => {
    return (
        <div className='flex items-center ml-2'>
            <span> <CheckCircleIcon className="h-4 w-4 mr-1 text-white" /></span>
           <p>{feature}</p>
        </div>
    );
};

export default Feature;