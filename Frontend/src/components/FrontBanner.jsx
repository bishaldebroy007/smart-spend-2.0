import React from 'react'
import { Link } from 'react-router-dom';



const FrontBanner = () => {
    return (
        // bg-yellow-500 text-white
        <div className="bg-info text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-bold">Start Today!</h2>
                    <p className="text-sm font-bold">Sign Up now to track your money.</p>

                </div>
                {/* <a className="btn btn-soft rounded-2xl shadow-2xl duration-400">Sign up</a> */}
                <button className="btn btn-soft rounded-2xl shadow-2xl duration-400"><Link to="/SignUp">Sign Up</Link></button>
            </div>
        </div>

    )
}

export default FrontBanner;
