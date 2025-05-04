import React, { useEffect } from "react";
import FrontBanner from '../components/FrontBanner';
import { Link } from 'react-router-dom';


const FrontPage = ({ setIsLoading }) => {
    useEffect(() => {
        // Simulate loading delay
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 2 seconds delay

        return () => clearTimeout(timer);
    }, [setIsLoading]);

    return (
        <>
            {/* <FrontBanner /> */}
            {/* url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp) */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661775756810-82dbd209fc95?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Hello there,</h1>
                        <p className="mb-5 text-xl font-semibold">
                            Welcome to Smart Spend, where savvy budgeting meets effortless savings. Discover smart solutions to maximize your financial potential today!
                        </p>
                        <button className="btn btn-accent rounded-xl shadow"><Link to="/Login">Login</Link></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FrontPage;
