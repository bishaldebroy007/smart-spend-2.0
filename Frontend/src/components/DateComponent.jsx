import React from 'react';

const DateComponent = () => {
    const today = new Date();
    const day = today.toLocaleString('en-US', { weekday: 'long' });
    const date = today.getDate();
    const month = today.toLocaleString('en-US', { month: 'long' });
    const year = today.getFullYear();

    return (
        <>
            {/* flex justify-center items-center h-18 my-3 mx-auto */}
            <div className="">
                <div className="text-center py-3">
                    <div className="text-3xl font-bold">{day.toUpperCase()}</div>
                    <div className="text-2xl">
                        {month.toUpperCase()} {date}, {year}
                    </div>
                </div>
            </div>

        </>

    );
};

export default DateComponent;