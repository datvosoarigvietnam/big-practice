interface IProps {
  title: string;
  className?: string;
  onClick?: () => void;
  disable?: boolean;
}

export default function Button({ title, className, onClick, disable }: IProps) {
  const defaulStyletButton =
    'w-full  md:min-w-[250px] h-[42px] py-3 rounded-sm';
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${
        className ? className + '' : defaulStyletButton
      } bg-[#2D88D4]  font-bold leading-normal md:mx-[0] flex justify-center items-center hover:bg-white hover:text-black hover:border hover:border-slate-800 transition duration-150 font-kumbh-sans text-white ${
        !disable ? ' disabled:bg-white disabled:text-black' : ''
      } `}
      onClick={handleClick}
      // disabled={disable}
    >
      {title}
    </button>
  );
}
