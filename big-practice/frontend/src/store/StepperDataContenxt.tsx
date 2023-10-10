import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export interface IInfor {
  name: {
    adminName: string;
    schoolName: string;
    emailSchool: string;
  };
  password: string;
  schoolAddress: string;
  numberOfStaff: number;
}
const defaultvalues: IInfor = {
  name: {
    adminName: '',
    emailSchool: '',
    schoolName: '',
  },
  password: '',
  numberOfStaff: 0,
  schoolAddress: '',
};
interface IProps {
  children: ReactNode;
}
interface LabelContextProps {
  infor: IInfor;
  setInfor: Dispatch<SetStateAction<IInfor>>;
  nextPage: () => void;
  prevPage: () => void;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  handleChange: (name: string) => (e: ChangeEvent<HTMLSelectElement>) => void;
  setSenderInfo: (name: string) => (e: ChangeEvent<HTMLInputElement>) => void;
}

// Define initial context state
const defaultValuesContext: LabelContextProps = {
  infor: defaultvalues,
  setInfor: () => {},
  nextPage: () => {},
  prevPage: () => {},
  page: 0,
  setPage: () => {},
  handleChange: (name: string) => (e: ChangeEvent<HTMLSelectElement>) => {},
  setSenderInfo: (name: string) => (e: ChangeEvent<HTMLInputElement>) => {},
};

export const LabelContext = createContext(defaultValuesContext);
export const LabelProvider = (props: IProps) => {
  const [page, setPage] = useState(0);
  const [infor, setInfor] = useState(defaultvalues);
  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  const handleChange =
    (name: string) => (e: ChangeEvent<HTMLSelectElement>) => {
      console.log('Heare');

      setInfor({ ...infor, [name]: e.target.value });
    };
  const setSenderInfo =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      if (name === 'password') {
        setInfor({
          ...infor,
          [name]: event.target.value,
        });
      } else {
        setInfor({
          ...infor,
          name: { ...infor.name, [name]: event.target.value },
        });
      }
    };
  console.log('inFor', infor);
  return (
    <LabelContext.Provider
      value={{
        infor,
        setInfor,
        nextPage,
        prevPage,
        page,
        setPage,
        handleChange,
        setSenderInfo,
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};
