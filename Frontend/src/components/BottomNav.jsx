import React from 'react'
import { TbHistoryToggle } from "react-icons/tb";

// Also Footer B.

const BottomNav = () => {
    return (
        <footer>
            <div className="dock bg-gradient-to-r from-stone-900 to-indigo-900 text-neutral-content">
                <button>
                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10" strokeWidth="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></line></g></svg>
                    <span className="dock-label font-semibold">Home</span>
                </button>

                <button className="dock-active">
                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" strokeWidth="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></rect></g></svg>
                    <span className="dock-label font-semibold">Dashboard</span>
                </button>

                <button>
                    <TbHistoryToggle size={20} />
                    <span className="dock-label font-bold">History</span>
                </button>
            </div>
        </footer>

    )
}

export default BottomNav
