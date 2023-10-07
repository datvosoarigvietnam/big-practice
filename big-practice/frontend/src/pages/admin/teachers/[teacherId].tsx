import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import bellIcon from '@/common/icons/bell-notifi-icon.svg';
import Button from '@/components/Button';
import { NextPageWithLayout } from '@/models/common';
import { MainLayout } from '@/components/layout';
import finIcon from '@/common/icons/findIcon.svg';
import avatarIcon from '@/common/icons/avatar.png'
import studentIcon from '@/common/icons/studentIcon.svg'
import AvatarList from './AvatarList';
const TeacherDetail: NextPageWithLayout = () => {
    const router = useRouter()
    console.log("Teacher Id", router.query.teacherId)
    return (
        <div className="w-full px-5 md:px-10">
            <div className="pt-5 flex flex-col-reverse justify-between items-center md:flex-row">
                <div className="flex justify-center items-center gap-4">
                    <Button
                        title="Export CSV"
                        className="w-32 h-10 rounded-lg font-kumbh-sans"
                    />
                    <Button
                        title="Add Teachers"
                        className="w-32 h-10 rounded-lg font-kumbh-sans"
                    />
                </div>
                <div className="flex justify-center items-center gap-4 pb-[12px] md:justify-end">
                    <Image src={bellIcon} alt="" />
                    <Button
                        title="Log out"
                        className="w-32 h-10 rounded-lg font-kumbh-sans text-white"
                    />
                </div>

            </div>
            <div className="flex mt-7 md:pl-10">
                {/* Fillter */}
                <div className="flex flex-col justify-center flex-1  gap-4 md:flex-row">
                    <select
                        className="flex justify-between items-center px-4 py-4 text-[#C4C4C4] border-gray-400 border outline-none rounded sm:border-none"
                        property=""
                    >
                        <option value="">Add filter</option>
                    </select>
                    <div className="flex flex-1 p-4 bg-gray-200 gap-4 rounded">
                        <Image src={finIcon} alt="findIcon" className="flex-0" />
                        <input
                            placeholder="Search for a teacher by name or email "
                            className="text-[#8A8A8A] w-full bg-inherit outline-none"
                        />
                    </div>
                </div>
            </div>
            <div className="pt-12 lg:pt-40">
                <div className="flex flex-col gap-10  justify-center items-center md:gap-8 lg:gap-28 lg:flex-row">
                    <div className="flex flex-col justify-center items-center gap-4 ">
                        <Image src={avatarIcon} alt='avatarIcon' className='w-72 h-72 md:w-60 md:h-60 object-cover rounded-full lg:w-72 lg:h-72' />
                        <div className="">
                            <h3 className='text-[#1A1A1A] font-kumbh-sans font-bold'>Kristin Watson</h3>
                            <p className='font-bold text-[#A7A7A7] text-sm'>Geology teacher</p>
                        </div>
                    </div>
                    <div className="flex gap-6 flex-col lg:flex-col-reverse">
                        <div className="flex justify-center items-center gap-28">
                            <div className="flex flex-col gap-2">
                                <p className='text-[#1A1A1A] font-bold font-kumbh-sans'>Age</p>
                                <p className='text-[#A7A7A7] '>34</p>
                            </div>
                            <div className="flex flex-col">
                                <p className='text-[#1A1A1A] font-bold font-kumbh-sans'>Gender</p>
                                <p className='text-[#A7A7A7]'>Male</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className='text-[#1A1A1A] font-semibold text-center'>About</h3>
                            <p className='text-[#A7A7A7] text-center md:w-80 '>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-between items-center mt-6 sm:flex-row sm:mt-5 sm:justify-around lg:justify-evenly lg:mt-28">
                    <div className="flex gap-6">
                        <div className="w-14 h-14 bg-[#A7A7A7] flex justify-center items-center rounded-lg">
                            <Image src={studentIcon} alt='studentIcon' className='w-8 h-8 text-[#A7A7A7]' />
                        </div>
                        <div className="w-14 h-14 bg-[#A7A7A7] flex justify-center items-center rounded-lg">
                            <Image src={studentIcon} alt='studentIcon' className='w-8 h-8 text-[#A7A7A7]' />
                        </div>
                        <div className="w-14 h-14 bg-[#A7A7A7] flex justify-center items-center rounded-lg">
                            <Image src={studentIcon} alt='studentIcon' className='w-8 h-8 text-[#A7A7A7]' />
                        </div>
                    </div>
                    <div className="pb-6 sm:pb-0 mt-4 text-center">
                        <h4 className='text-[#1A1A1A] text-xs font-semibold'>Teachers from the same class</h4>
                        <AvatarList />
                    </div>
                </div>
            </div>
        </div>
    )
}

TeacherDetail.Layout = MainLayout

export default TeacherDetail
