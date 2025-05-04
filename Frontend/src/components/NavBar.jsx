import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Avatar from './Avatar'


const NavBar = () => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const location = useLocation();

    // Define the pages where you want to hide specific elements
    const hideMenuOn = ['/'];
    const hideNotificationsOn = ['/'];
    const hideSearchOn = ['/', '/DashBoard'];

    // Helper function to check if a component should be hidden
    const shouldHideMenu = !hideMenuOn.includes(location.pathname);
    const shouldHideNotifications = !hideNotificationsOn.includes(location.pathname);
    const shouldHideSearch = !hideSearchOn.includes(location.pathname);

    console.log(shouldHideMenu);
    console.log(shouldHideNotifications);
    console.log(shouldHideSearch);

    return (
        <nav className="navbar h-25 bg-gradient-to-r from-stone-900 to-indigo-900 text-neutral-content shadow-md">
            {/* Navbar Start (Hamburger Menu) */}
            <div className="navbar-start">
                {/* {shouldHideMenu && (
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle transform hover:scale-100 hover:duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content font-bold bg-primary text-neutral-content text-lg sm:text-xl md:text-2xl rounded-box z-1 mt-3 w-52 locationp-2 drop-shadow-md">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/DashBoard">Dashboard</Link></li>
                            <li><Link to="/TransitionHistory">Transaction History</Link></li>
                        </ul>
                    </div>
                )} */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle transform hover:scale-100 hover:duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content font-bold bg-primary text-neutral-content text-lg sm:text-xl md:text-2xl rounded-box z-1 mt-3 w-52 locationp-2 drop-shadow-md">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/DashBoard">Dashboard</Link></li>
                        <li><Link to="/TransitionHistory">Transaction History</Link></li>
                    </ul>
                </div>
            </div>

            {/* Navbar Center (Logo/Brand Name) */}
            <div className="navbar-center">
                <a className="cursor-pointer font-bold text-xl sm:text-2xl md:text-3xl">Smart Spend</a>
            </div>

            {/* Navbar End (Search, Notifications, Avatar) */}
            <div className="navbar-end">
                {/* Search Button */}
                {shouldHideSearch && (
                    <button className={`btn btn-ghost btn-circle sm:inline-flex`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>


                )}


                {/* Notifications Button */}
                {shouldHideNotifications && (
                    <button className="btn btn-ghost btn-circle sm:inline-flex">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="badge badge-xs badge-warning indicator-item"></span>
                        </div>
                    </button>
                )}
                {/* Avatar (Visible on All Screens) */}
                <Avatar />
            </div>
        </nav>

    )
}

export default NavBar
