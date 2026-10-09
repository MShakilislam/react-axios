import React from 'react';

const LinkNav = ({ res }) => {

    return (
        <li className='flex lg:mr-2  hover:bg-amber-600 justify-center mb-2'>
            <a className='p-2' href={res.path}>{res.name}</a>
        </li>
    );
};

export default LinkNav;