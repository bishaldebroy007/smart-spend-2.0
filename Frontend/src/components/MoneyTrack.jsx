import React, { useState } from 'react';
import PickADate from './PickADate';

const MoneyTrack = () => {
    const [activeTab, setActiveTab] = useState('Today');
    const [viewAll, setViewAll] = useState(false);

    const transactions = {
        Today: { income: 15000, cost: 5000 },
        Week: { income: 65000, cost: 20000 },
        Month: { income: 280000, cost: 100000 },
        Year: { income: 1500000, cost: 500000 },
    };

    const renderContent = () => {
        const { income, cost } = transactions[activeTab];

        if (viewAll) {
            return (
                <div className='flex flex-col py-5 space-y-3 items-center justify-center'>
                    <div className="text-lg sm:text-xl md:text-2xl text-green-600">Money Added: BDT {income}</div>
                    <div className="text-lg sm:text-xl md:text-2xl text-red-700">Money Spent: BDT {cost}</div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold pt-5">Total Transactions: BDT {income - cost}</div>
                </div>
            );
        } else {
            return (
                <div className='text-lg sm:text-xl md:text-2xl'>
                    {activeTab}'s Transactions: BDT {income - cost}
                </div>
            );
        }
    };

    return (
        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto my-10 card rounded-3xl bg-gradient-to-r from-blue-200 to-cyan-200 shadow-2xl p-4 sm:p-6 md:p-8">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h2 className="card-title text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-0">Recent Transaction</h2>

                <button
                    className="btn btn-soft btn-accent rounded-md p-5 text-lg sm:text-xl md:text-2xl duration-300"
                    onClick={() => setViewAll(!viewAll)}
                >
                    {viewAll ? 'Hide Details' : 'View All'}
                </button>
            </div>

            {/* Tabs Section */}
            <div className="tabs tabs-boxed my-4 flex flex-wrap justify-around gap-1">
                {['Today', 'Week', 'Month', 'Year'].map((tab) => (
                    <button
                        key={tab}
                        className={`tab text-sm sm:text-base md:text-lg ${activeTab === tab ? 'tab-active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
                <PickADate />
            </div>

            {/* Content Section */}
            <div className="mt-4">
                {renderContent()}
            </div>
        </div>
    );
};

export default MoneyTrack;