// import { User } from '@/pages/admin/teachers';
import React from 'react';
import Image from 'next/image';

import avatar from '@/common/icons/avatar.png';
import { User } from '@/pages/admin/teachers';
interface IProps {
  headers: string[];
  data: User[];
}

const Table: React.FC<IProps> = ({ headers, data }) => {
  return (
    <div className="p-4 overflow-x-auto w-full md:pl-[50px]">
      <table className="w-full ">
        <thead>
          <tr className="">
            {headers.map((item) => {
              return (
                <th
                  className={`p-2 text-left ${
                    item === 'Name' &&
                    'sticky left-0 z-10 bg-white sm:bg-inherit'
                  }`}
                  key={item}
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? 'bg-[#f0f8ff]' : 'bg-white'
                } py-6 px-4 hover:bg-[#589cd9] transition duration-150 hover:rounded`}
              >
                <td className="py-4 px-2 sticky left-0 z-10 bg-white sm:bg-inherit">
                  <div className=" md:flex gap-2">
                    <Image
                      src={avatar}
                      alt="avatar"
                      className="w-6 h-6 rounded-full"
                    />
                    {item.name}
                  </div>
                </td>
                {/* <td className=" p-2">{item.subject}</td>
                <td className=" p-2">{item.class}</td>
                <td className=" p-2">{item.email}</td>
                <td className=" p-2">{item.gender}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
