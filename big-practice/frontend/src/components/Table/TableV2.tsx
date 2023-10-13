/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';

import { User } from '@/pages/admin/teachers';
import { IStudent } from '@/pages/admin/students';
import { Column } from '@/@types/Table.type';

export type UserData = IStudent | User;

interface DataTableProps<T> {
  data: T[];
  columns: Column[];
  onRowClick?: (id: number) => void;
  onEditClick?: (id: number) => void;
  onDeleteClick?: (id: number) => void;
}

const DataTable: React.FC<DataTableProps<User | IStudent>> = ({
  data,
  columns,
  onRowClick,
  onEditClick,
  onDeleteClick,
}) => {
  const handleClickRow = (id: number) => {
    if (onRowClick) {
      onRowClick(id);
    }
  };

  const handleEditClick = (id: number) => {
    if (onEditClick) {
      onEditClick(id);
    }
  };

  const handleDeleteClick = (id: number) => {
    if (onDeleteClick) {
      onDeleteClick(id);
    }
  };

  const isUser = (data: User | IStudent): data is User => {
    return 'subject' in data;
  };

  return (
    <div className="p-4 mt-6 overflow-x-auto w-full md:pl-[50px]">
      {data && (
        <table className=" w-full">
          <thead className="">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`p-2 text-left ${
                    column.header === 'Name' && ' bg-white sm:bg-inherit'
                  }`}
                >
                  {column.header}
                </th>
              ))}
              {/* Add Edit and Delete headers */}
              <th className="p-2 text-left  bg-white sm:bg-inherit">Edit</th>
              <th className="p-2 text-left  bg-white sm:bg-inherit">Delete</th>
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
                  onClick={() => handleClickRow(row.id)}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key as string}
                      className="py-4 px-4  text-[#4F4F4F] font-medium"
                    >
                      {isUser(row)
                        ? (row as User)[column.key]
                        : (row as IStudent)[column.key]}
                    </td>
                  ))}
                  {/* Edit button */}
                  <td
                    className="py-4 px-4  text-[#4F4F4F] font-medium cursor-pointer hover:text-blue-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(row.id);
                    }}
                  >
                    Edit
                  </td>
                  {/* Delete button */}
                  <td
                    className="py-4 px-4  text-[#4F4F4F] font-medium cursor-pointer hover:text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(row.id);
                    }}
                  >
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;
