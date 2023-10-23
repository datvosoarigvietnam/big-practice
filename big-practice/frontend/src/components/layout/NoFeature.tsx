import Image from 'next/image';
import { useState } from 'react';

import SidebarMobile from '../Sidebar';
import Sidebar from '../Sidebar/Sidebar';
import menuIcon from '@/common/icons/menuIcon.svg';

export function NoFeatureLayout() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);
  const onClose = () => {
    setShowSidebarMenu(false);
  };
  const handleShowSidebar = () => {
    setShowSidebarMenu((prev) => !prev);
  };
  return (
    <div className="flex">
      <Sidebar />

      {showSidebarMenu && (
        <SidebarMobile showSidebarMenu={showSidebarMenu} onClose={onClose} />
      )}
      <div className="pt-5 pl-4 pr-4 md:pr-0">
        <div className="flex justify-between items-center gap-4 pb-[12px] ">
          <div className="">
            <Image
              src={menuIcon}
              alt=""
              className="lg:hidden w-6 h-6"
              onClick={handleShowSidebar}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center">
        <h1 className="font-extrabold text-blue-600 text-4xl lg:-translate-y-[200px]">
          Feature will be update after next version
        </h1>
      </div>
    </div>
  );
}
