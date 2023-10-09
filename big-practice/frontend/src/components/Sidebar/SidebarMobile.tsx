import Image from 'next/image'
import React from 'react'

import avatar from '@/common/imgs/avatar.svg';
import menubarIcon from '@/common/icons/menuBar'
export default function SidebarMobile() {
    return (
        <div className=''>
            <div className="border-b-[0.5px] border-[#BDBDBD] flex flex-col justify-center items-center mb-4">
                <div className="">
                    <Image src={avatar} alt="avatar" className="pb-[22px] " />
                </div>
            </div>
            <div className="">
                {menubarIcon}
            </div>
        </div>
    )
}
