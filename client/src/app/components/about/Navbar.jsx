import React from 'react';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-brand'>Company</div>
            <ul className='navbar-nav'>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#Services'>Services</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <button className='Join-btn'>Join Us</button>
        </nav>

    );

};


export default Navbar;
