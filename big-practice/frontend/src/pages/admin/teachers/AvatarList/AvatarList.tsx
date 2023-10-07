import Image from "next/image";

import avatarIcon from "@/common/icons/avatar.png"

const AvatarList = () => {
    return (
        <div className="flex justify-center items-center mt-5 gap-2">
            <div className="flex -space-x-4">
                <Image className="w-10 h-10 rounded-full" src={avatarIcon} alt="" />
                <Image className="w-10 h-10 rounded-full" src={avatarIcon} alt="" />
                <Image className="w-10 h-10 rounded-full" src={avatarIcon} alt="" />
                <Image className="w-10 h-10 rounded-full" src={avatarIcon} alt="" />
            </div>
            <div className="">
                <a href="" className="text-[#73B0E2] text-xs">+12 more</a>
            </div>
        </div>
    );
};
export default AvatarList;