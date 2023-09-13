/* eslint-disable no-unused-vars */
import React from 'react';

const PriceCard = ({price}) => {
    console.log(price);

    // const {id,name} = props.price;

 
    return (
        <div>
            <p>
               <span className='text-5xl font-extrabold text-purple-900'>{price.price}</span>
               <span className='text-xl font-semibold'>/mon</span>
            </p>
            <h5 className='text-2xl font-bold '>{price.name}</h5>
        </div>
    );
};

export default PriceCard;