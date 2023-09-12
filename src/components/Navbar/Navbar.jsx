// import React from 'react';

import { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    // menu bar icon state
    const [open, setOpen] = useState(false)
    const routes = [
        {
            "id": 1,
            "name": "Home",
            "path": "/"
        },
        {
            "id": 2,
            "name": "About",
            "path": "/about"
        },
        {
            "id": 3,
            "name": "Services",
            "path": "/services"
        },
        {
            "id": 4,
            "name": "Contact",
            "path": "/contact"
        },
        {
            "id": 5,
            "name": "Blog",
            "path": "/blog"
        }
    ];

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="md:hidden">
                <span>{open ?
                    <XMarkIcon className="h-6 w-6 text-purple-500" />
                    : <Bars3Icon className="h-6 w-6 text-purple-500" />
                }</span>


            </div>
            <ul className={`md:flex w-full text-center md:justify-center absolute md:static bg-purple-500 duration-500 p-1 md:p-0 ${open ? "top-6" : "-top-36"}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;