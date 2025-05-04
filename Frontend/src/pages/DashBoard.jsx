import React, { useEffect } from "react";

// Import the Cally library
import "cally";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import DateComponent from '../components/DateComponent';
import MoneyTrack from '../components/MoneyTrack';


// import { PiPlusBold, HiOutlineMinusSm } from "react-icons/pi";


const DashBoard = ({ setIsLoading }) => {
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
      {/* <DateComponent /> */}

      <>
        <section className="bg-gradient-to-t from-slate-20 to-indigo-300">
          <div className="breadcrumbs ml-2 md:ml-10 text-sm">
            <ul>
              <li className=""><a>Home</a></li>
              <li className=""><a>Dashboard</a></li>
            </ul>
          </div>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 mb-20">

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 rounded-4xl p-8 md:p-12 mb-8 shadow-xl">
              <div className="stats flex flex-item border-0">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div className="stat-title text-2xl font-semibold text-white">Account Balance</div>
                  <div className="stat-value text-success">87,000 BDT</div>
                  <div className="stat-desc text-sm text-gray-400">21% more than last month</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div className="stat-title text-2xl font-semibold text-white">Last Transaction</div>
                  <div className="stat-value text-secondary">+ 23,00 BDT</div>
                  <div className="stat-desc text-sm text-gray-400">21% more than last month</div>
                </div>

                <div className="stat">
                  <div className="stat-value text-xl font-semibold text-white">Spent</div>
                  <div className="stat-title text-2xl font-semibold text-white">86%</div>
                  <div className="stat-desc text-sm text-gray-400">More than last month</div>
                </div>
              </div>
              {/* First box View All section */}
              <div className="text-info font-semibold mx-5"><a href="#">View All</a></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* second Box */}
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-4xl p-3 md:p-8 shadow-2xl">
                <div className="stat w-full">
                  {/* Stat Title remains */}
                  <div className="stat-title text-white text-xl font-semibold">Withdrawn Amount</div>

                  {/* Container for Stat Value and Date Picker */}
                  {/* Use flex, justify-between to push items apart, items-center to vertically align */}
                  {/* Added flex-wrap and gap-2 for better handling on smaller screens */}
                  {/* Added mb-4 for spacing below this row, before the table */}
                  <div className="flex justify-between items-center flex-wrap gap-2 mb-4">
                    {/* Stat Value */}
                    <div className="stat-value text-error">32,400 BDT</div>

                    {/* Date Picker */}
                    <input
                      type="date"
                      // Daisy UI classes for a small, bordered input
                      // Tailwind classes for dark mode and width control
                      className="input input-bordered input-sm w-auto max-w-xs dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-accent"
                    // May manage the date value with state in React
                    // Example: value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>

                  {/* Table Section - Original responsiveness maintained */}
                  <div className="overflow-x-auto text-gray-300"> {/* Allows horizontal scrolling on small screens */}
                    <table className="table">
                      {/* head */}
                      <thead className="text-gray-100 font-bold">
                        <tr>
                          <th></th>
                          <th>Amount</th>
                          <th>Purpose</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>1</th>
                          <td>2,560</td>
                          <td>Chilox</td>
                          <td>12/04/25</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>2</th>
                          <td>2,000</td>
                          <td>Buying a new headphone </td>
                          <td>9/04/25</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>3</th>
                          <td>600</td>
                          <td>Foodpanda</td>
                          <td>04/04/25</td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* third box */}
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-4xl p-3 md:p-8 shadow-2xl">
                <div className="stat w-full">
                  {/* Stat Title remains */}
                  <div className="stat-title text-white text-xl font-semibold">Deposited Amount</div>

                  {/* Container for Stat Value and Date Picker */}
                  {/* Use flex, justify-between to push items apart, items-center to vertically align */}
                  {/* Added flex-wrap and gap-2 for better handling on smaller screens */}
                  {/* Added mb-4 for spacing below this row, before the table */}
                  <div className="flex justify-between items-center flex-wrap gap-2 mb-4">
                    {/* Stat Value */}
                    <div className="stat-value text-accent">14,700 BDT</div>

                    {/* Date Picker */}
                    <input
                      type="date"
                      // Daisy UI classes for a small, bordered input
                      // Tailwind classes for dark mode and width control
                      className="input input-bordered input-sm w-auto max-w-xs dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-accent"
                    // May manage the date value with state in React
                    // Example: value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>

                  {/* Table Section - Original responsiveness maintained */}
                  <div className="overflow-x-auto text-gray-300"> {/* Allows horizontal scrolling on small screens */}
                    <table className="table">
                      {/* head */}
                      <thead className="text-gray-100 font-bold">
                        <tr>
                          <th></th>
                          <th>Amount</th>
                          <th>Purpose</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>1</th>
                          <td>2,560</td>
                          <td>Chilox</td>
                          <td>12/04/25</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>2</th>
                          <td>2,000</td>
                          <td>Buying a new headphone </td>
                          <td>9/04/25</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>3</th>
                          <td>600</td>
                          <td>Foodie</td>
                          <td>04/04/25</td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </>

      {/* <MoneyTrack /> */}

    </>
  )
}

export default DashBoard;