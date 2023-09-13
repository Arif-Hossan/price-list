/* eslint-disable no-unused-vars */
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    // console.log(price);

    // const {id,name} = props.price;


    return (
        <div className='bg-indigo-500 p-4 m-2 flex flex-col'>
            <p className='py-3 text-center'>
                <span className='text-5xl font-extrabold text-purple-900'>{price.price}</span>
                <span className='text-xl font-semibold text-white'>/mon</span>
            </p>
            <h5 className='text-2xl font-bold text-center '>{price.name}</h5>
            <p className='underline font-semibold text-xl text-white mt-3'>Features :</p>
            <div>
                {
                    price.features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}></Feature>)
                }
            </div>
            <button className='bg-green-500 mt-auto w-full py-2 rounded-md font-semibold text-white hover:bg-green-600 duration-500 '>Buy Now</button>
        </div>
    );
};

export default PriceCard;