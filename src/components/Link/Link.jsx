/* eslint-disable react/prop-types */
// import React from 'react';

const Link = ({route}) => {
    return (
        <li className="mr-14 md:inline-block ">
            <a className="hover:bg-purple-800 md:block  md:p-3 p-1.5 hover:text-white " href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;