import React, { useState } from 'react';

import TableV2 from '@/components/Table/TableV2';
import { Column } from '@/types/Table.type';
export default function AddTeacherByCSV() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  console.log(
    '🚀 ~ file: AddTeacherByCSV.tsx:6 ~ AddTeacherByCSV ~ array:',
    // JSON.parse(array),
  );

  const fileReader = new FileReader();

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

    if (file) {
      fileReader.onload = function (event: ProgressEvent<FileReader>) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };
  /*
    const columns: Column[] = [
  { key: 'name', header: 'Name' },
  { key: 'classSchool', header: 'Class' },
  { key: 'subjects', header: 'Subjects' },
  { key: 'email', header: 'Email' },
  { key: 'gender', header: 'Gender' },
];
  */
  const header = Object.keys(Object.assign({}, ...array));
  const headerKeys: Column = header.map((item) => ({
    key: item,
    header: item.toLocaleUpperCase().replace(`${'item'}`, ''),
  }));

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>REACTJS CSV IMPORT EXAMPLE </h1>
        <form>
          <input
            type={'file'}
            id={'csvFileInput'}
            accept={'.csv'}
            onChange={handleOnChange}
          />

          <button
            onClick={(e) => {
              handleOnSubmit(e);
            }}
          >
            IMPORT CSV
          </button>
        </form>

        <br />
        {/* <table>
          <thead>
            <tr key={'header'}>
              {headerKeys.map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {array.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table> */}
        <TableV2 columns={headerKeys} data={array} />
      </div>
    </div>
  );
}
