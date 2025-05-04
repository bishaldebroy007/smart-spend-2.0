import React from 'react'

const Avatar = () => {
    return (
        <div className="avatar avatar-online m-2 cursor-pointer duration-500 hover:opacity-70">
            <div className="w-12 rounded-full duration-500  hover:ring-2 ring-primary-400">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
    )
}

export default Avatar
