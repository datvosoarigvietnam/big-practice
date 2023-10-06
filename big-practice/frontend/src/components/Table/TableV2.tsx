import { Column, User } from '@/pages/admin/teachers';
import React from 'react';

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

interface DataTableProps<T> {
  data: T[];
  columns: Column[];
}
export interface IStudent {
  id: string;
  name: string;
  gender: string;
}
const DataTable: React.FC<DataTableProps<User>> = ({ data, columns }) => {
  return (
    <div className="p-4 mt-6 overflow-x-auto w-full md:pl-[50px]">
      <table className=" w-full">
        <thead className="">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`p-2 text-left ${
                  column.header === 'Name' &&
                  'sticky left-0 z-10 bg-white sm:bg-inherit'
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr
                key={row.id}
                className={`${
                  index % 2 === 0 ? 'bg-[#f0f8ff]' : 'bg-white'
                } py-6 px-4 hover:bg-[#81afd7] transition duration-150 hover:rounded`}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="py-4 px-4 sticky left-0 z-10 text-[#4F4F4F] font-medium"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
