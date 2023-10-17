/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';

import { User } from '@/pages/admin/teachers';
import { IStudent } from '@/types/student.type';
import { Column } from '@/types/Table.type';
import { ITeacher } from '@/types/teacher.type';

export type UserData = IStudent | ITeacher;

interface DataTableProps<T> {
  data: T[];
  columns: Column[];
  onRowClick?: (id: string) => void;
  onDeleteClick?: (id: string) => void;
  isLoading?: boolean;
  handleEdit?: (id: string) => void;
}

const DataTable: React.FC<DataTableProps<ITeacher | IStudent>> = ({
  data,
  columns,
  onRowClick,
  onDeleteClick,
  handleEdit,
}) => {
  const handleClickRow = (id: number) => {
    if (onRowClick) {
      onRowClick(id);
    }
  };
  const handleDeleteClick = (id: number) => {
    onDeleteClick && onDeleteClick(id);
  };
  const handleEditClick = (id: string) => {
    handleEdit && handleEdit(id);
  };
  const isUser = (data: User | IStudent): data is User => {
    return 'subject' in data;
  };
  const formatSubjectArrayToString = (subjectArray) => {
    if (Array.isArray(subjectArray) && subjectArray.length > 0) {
      const subjectNames = subjectArray.map((subject) => subject.name);
      return subjectNames.join(', ');
    }
    return '';
  };
  return (
    <div className="p-4 mt-6 overflow-x-auto w-full md:pl-[10px]">
      {data && (
        <table className=" w-full">
          <thead className="">
            <tr>
              {columns.map((column) => {
                return (
                  <th
                    key={column.key}
                    className={`p-2 text-left ${
                      column.header === 'Student ID' && 'hidden xl:table-cell'
                    }`}
                  >
                    {column.header}
                  </th>
                );
              })}
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
                  {columns.map((column) => {
                    return (
                      <td
                        key={column.key as string}
                        // className="py-4 px-4  text-[#4F4F4F] font-medium"
                        className={`p-2 text-left ${
                          column.header === 'Student ID' &&
                          'hidden xl:table-cell'
                        } `}
                      >
                        {column.key === 'subjects' && isUser(row)
                          ? formatSubjectArrayToString(row.subject)
                          : isUser(row)
                          ? (row as User)[column.key]
                          : (row as IStudent)[column.key]}
                      </td>
                    );
                  })}
                  <td
                    className="py-4 px-4  text-[#4F4F4F] font-medium cursor-pointer hover:text-blue-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(row._id);
                    }}
                  >
                    Edit
                  </td>
                  <td
                    className="py-4 px-4  text-[#4F4F4F] font-medium cursor-pointer hover:text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(row._id);
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
