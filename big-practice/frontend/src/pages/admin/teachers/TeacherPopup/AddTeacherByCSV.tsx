// @ts-nocheck
import React, { useState } from 'react';

import TableV2 from '@/components/Table/TableV2';
import { Column } from '@/types/Table.type';
import NotData from '@/components/NotData';
export default function AddTeacherByCSV() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string: string) => {
    const csvHeader = string.slice(0, string.indexOf('\n')).split(',');
    const csvRows = string.slice(string.indexOf('\n') + 1).split('\n');

    const array = csvRows.map((i) => {
      const values = i.split(',');
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file && typeof window !== 'undefined') {
      const fileReader = new FileReader();

      fileReader.onload = function (event: ProgressEvent<FileReader>) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }

    // if (file && typeof window !== 'undefined') {
    //   import('file-reader') // Import FileReader dynamically
    //     .then(({ default: FileReader }) => {
    //       const fileReader = new FileReader();
    //       fileReader.onload = function (event: ProgressEvent<FileReader>) {
    //         const text = event.target.result;
    //         csvFileToArray(text);
    //       };

    //       fileReader.readAsText(file);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
  };

  const header = Object.keys(Object.assign({}, ...array));
  const headerKeys: Column = header.map((item) => ({
    key: item,
    header: item.toLocaleUpperCase().replace(`${'item'}`, ''),
  }));

  return (
    <div>
      <div className="text-center mt-5">
        <form className="mt-5">
          <div className="md:pl-10 flex gap-2">
            <input
              type={'file'}
              id={'csvFileInput'}
              accept={'.csv'}
              onChange={handleOnChange}
              className="border border-gray-300 p-2 rounded-md "
            />

            <button
              onClick={(e) => {
                handleOnSubmit(e);
              }}
              className={`bg-cyan-500 px-3 py-2 rounded-md text-white ${
                !file && 'cursor-not-allowed bg-slate-300 text-white'
              }`}
            >
              IMPORT CSV
            </button>
          </div>
        </form>

        <br />

        {array.length !== 0 && <TableV2 columns={headerKeys} data={array} />}
        {array.length === 0 && <NotData />}
        {array.length !== 0 && (
          <div className="pt-5">
            <button className="bg-sky-600 text-white px-3 py-3 w-36 rounded-lg font-kumbh-sans ">
              Add Teachers
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
