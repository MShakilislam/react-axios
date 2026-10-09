import React, { useState } from 'react';
import LinkNav from './LinkNav';
import { Menu, X } from 'lucide-react';
const NavigationData = [
    {
        id: 1,
        name: "Google",
        path: "https://www.google.com",
    },
    {
        id: 2,
        name: "YouTube",
        path: "https://www.youtube.com",
    },
    {
        id: 3,
        name: "Facebook",
        path: "https://www.facebook.com",
    },
    {
        id: 4,
        name: "GitHub",
        path: "https://github.com",
    },
    {
        id: 5,
        name: "React",
        path: "https://react.dev",
    },
];

const NavBar = () => {

    const Links = (
        NavigationData.map(res => <LinkNav key={res.id} res={res} />)
    )
    const [opent, setOpen] = useState(false)
    return (
        <nav className='flex justify-between items-center p-4'>
            <span className="flex" onClick={() => setOpen(!opent)}>
                {
                    opent ?
                        <X className="md:hidden"></X> :
                        <Menu className="md:hidden"></Menu>
                }
                <ul className={`md:hidden absolute duration-1000 
                        ${opent ? "top-20" : "-top-75"}
                    text-black bg-amber-400`}>
                    {Links}
                </ul>
                <h3 className="ml-2">My NavBar</h3>
            </span>
            <ul className='md:flex hidden justify-between'>

                {Links}
            </ul>
            {/* <ul className='flex justify-center gap-4 bg-gray-200 p-4'>
                <li className='flex justify-center'><a href="#">Home</a></li>
                <li className='flex justify-center'><a href="#">About</a></li>
                <li className='flex justify-center'><a href="#">Contact</a></li>
            </ul> */}
            <button>Sin In</button>
        </nav>
    );
};

export default NavBar;