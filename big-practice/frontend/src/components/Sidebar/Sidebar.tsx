import React from 'react';

import avatar from '@/common/imgs/avatar.svg';
import Link from 'next/link';
import homeIcon from '@/common/icons/home-2.svg';
import studentIcon from '@/common/icons/studentIcon.svg';
import billIcon from '@/common/icons/billIcon.svg';
import settingIcon from '@/common/icons/settingIcon.svg';
import examIcon from '@/common/icons/examIcon.svg';
import featureIcon from '@/common/icons/featureIcon.svg';
export default function Sidebar() {
  const menuList = [
    { icon: homeIcon.src, title: 'Dashboard', href: '/dashboard' },
    { icon: homeIcon.src, title: 'Teachers', href: '/teachers' },
    { icon: studentIcon.src, title: 'Students/ classes', href: '/students' },
    { icon: billIcon.src, title: 'Billing', href: '/billing' },
    { icon: settingIcon.src, title: 'Settings and profile', href: '/settings' },
    { icon: examIcon.src, title: 'Exams', href: '/exams' },
  ];
  return (
    <div className="w-[240px] h-[100vh] bg-[#152259]">
      <div className="pt-[26px] ">
        {/* Header */}
        <div className="border-b-[0.5px] border-[#BDBDBD] flex flex-col justify-center items-center mb-4">
          <div className="">
            <img src={avatar.src} alt="avatar" className="pb-[22px] " />
          </div>
          <div className="pb-[40px] font-kumbh-sans font-semibold text-[#FFFFFF] leading-4">
            <p>Udemy Inter. school</p>
          </div>
        </div>
        {/* Menu */}
        <div className="flex flex-col justify-center items-center pt-[4] px-3">
          <ul className="flex flex-col gap-2 ">
            {menuList.map((menuItem, index) => {
              return (
                <li
                  key={menuItem.title}
                  className="hover:bg-[#509CDB] hover:rounded px-2 transition duration-150 "
                >
                  <Link
                    href={menuItem.href}
                    className="flex gap-[16px] py-3 items-center"
                  >
                    <div className="pl-2">
                      <img src={menuItem.icon} alt="avatar" />
                    </div>
                    <div className="text-[#FFFFFF] font-kumbh-sans">
                      {menuItem.title}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Footer */}
        <div className="mt-[114px] flex items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-4">
            <img src={featureIcon.src} alt="avatar" />
            <div className="text-[#FFFFFF] font-kumbh-sans">Features</div>
          </div>
          <span className="bg-[#B9D7F1]  text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full text-black text-[12px] leading-[12px] font-kumbh-sans">
            New
          </span>
        </div>
      </div>
    </div>
  );
}
