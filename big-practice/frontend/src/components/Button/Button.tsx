import React from 'react';

interface IProps {
  title: string;
}

export default function Button({ title }: IProps) {
  return (
    <button className="w-full rounded-sm md:min-w-[250px] h-[42px] bg-[#2D88D4] flex justify-center items-center py-3 text-white font-bold leading-normal  md:mx-[0]">
      Next
    </button>
  );
}
