// import React from 'react';

import { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div>
            <h2 className="text-purple-900 text-5xl font-bold bg-purple-300 pt-2 pb-4 text-center">Awesome affordable prices</h2>
            <div className="grid grid-cols-3 gap-3 justify-items-center">
            {
                prices.map(price => <PriceCard
                    key={price.id}
                    price={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;