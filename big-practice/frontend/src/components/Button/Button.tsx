import React from 'react';

interface IProps {
  title: string;
  className?: string;
}

export default function Button({ title, className }: IProps) {
  const defaulStyletButton =
    'w-full  md:min-w-[250px] h-[42px]   py-3 rounded-sm';
  return (
    <button
      className={`${
        className ? className + '' : defaulStyletButton
      } bg-[#2D88D4] text-white font-bold leading-normal  md:mx-[0] flex justify-center items-center`}
    >
      {title}
    </button>
  );
}
