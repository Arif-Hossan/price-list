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
        <div className="">
            <h2 className="text-purple-900 text-5xl font-bold bg-purple-300 p-4 m-2 text-center">Awesome affordable prices</h2>
            <div className="grid md:grid-cols-3 gap-3">
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