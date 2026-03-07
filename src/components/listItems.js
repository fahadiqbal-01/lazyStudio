export default function ({ className, children }) {
  return (
    <li
      className={` ${className} font-satoshiRegular text-[20px] tracking-[0.5px] select-none cursor-pointer z-50 px-2 hover:text-white duration-400 ease-in 
        after:content-[''] after:w-0 after:h-full after:bg-[#6f6f6f] after:-z-10 after:absolute after:left-0 after:bottom-0 
        before:content-[''] before:w-0 before:h-full before:bg-black before:-z-10 before:absolute before:right-0 before:bottom-0 
        hover:after:w-[50%] hover:after:duration-300 hover:after:ease-in-out hover:before:w-[50%] hover:before:duration-300 hover:before:ease-in-out relative `}
    >
      {children}
    </li>
  );
}
