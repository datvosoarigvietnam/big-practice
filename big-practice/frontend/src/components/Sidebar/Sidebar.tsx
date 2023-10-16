import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import billIcon from '@/common/icons/billIcon.svg';
import examIcon from '@/common/icons/examIcon.svg';
import featureIcon from '@/common/icons/featureIcon.svg';
import homeIcon from '@/common/icons/home-2.svg';
import settingIcon from '@/common/icons/settingIcon.svg';
import studentIcon from '@/common/icons/studentIcon.svg';
import avatar from '@/common/imgs/avatar.svg';
import SidebarMobile from '@/components/Sidebar/SidebarMobile';
export default function Sidebar() {
  const { pathname } = useRouter();
  const lastPathSegment = pathname.split('/').pop();
  const [activeTab, setActiveTab] = useState(lastPathSegment || 'Dashboard');
  const menuList = [
    { icon: homeIcon, title: 'Dashboard', href: '/admin/dashboard' },
    { icon: homeIcon, title: 'Teachers', href: '/admin/teachers' },
    { icon: studentIcon, title: 'Students', href: '/admin/students' },
    { icon: billIcon, title: 'Billing', href: '/admin/billing' },
    {
      icon: settingIcon,
      title: 'Settings and profile',
      href: '/admin/settings',
    },
    { icon: examIcon, title: 'Exams', href: '/admin/exams' },
  ];
  const handleActiveTab = (title: string) => {
    setActiveTab(title);
  };

  return (
    <div className="hidden lg:block w-[240px] h-[100vh] bg-[#152259]">
      <div className="pt-[26px] ">
        {/* Header */}
        <div className="border-b-[0.5px] border-[#BDBDBD] flex flex-col justify-center items-center mb-4">
          <div className="">
            <Image src={avatar} alt="avatar" className="pb-[22px] " />
          </div>
          <div className="hidden md:block pb-[40px] font-kumbh-sans font-semibold text-[#FFFFFF] leading-4">
            <p>Udemy Inter. school</p>
          </div>
        </div>
        {/* Menu */}
        <div className="flex flex-col justify-center items-center pt-[4] px-3">
          <ul className="flex flex-col gap-2 ">
            {menuList.map((menuItem) => {
              return (
                <li
                  key={menuItem.title}
                  // className="hover:bg-[#509CDB] hover:rounded px-2 transition duration-150 "
                  className={`hover:bg-[#509CDB] hover:rounded px-2 rounded transition duration-150 ${
                    activeTab.toLowerCase() === menuItem.title.toLowerCase()
                      ? 'bg-[#509CDB]'
                      : ''
                  }`}
                >
                  <Link
                    href={menuItem.href}
                    className="flex gap-[16px] py-3 items-center"
                    onClick={() => handleActiveTab(menuItem.title)}
                  >
                    <div className="pl-2">
                      <Image src={menuItem.icon} alt="avatar" />
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
            <Image src={featureIcon} alt="avatar" />
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
