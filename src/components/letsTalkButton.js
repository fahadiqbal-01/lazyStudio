import Link from "next/link";

export default function LetsTalkButton({ text, className, textSec, id }) {
  return (
    <Link
      href="/contact"
      id={id}
      className={` w-[95%] h-15 mt-10 px-3 rounded-full uppercase bg-sec cursor-pointer flex items-center justify-between select-none ${className} overflow-hidden group relative`}
    >
      <h3
        className=" font-satoshiBold text-[18px] font-semibold text-white px-8 absolute top-[50%] left-0 translate-y-[-50%] 
        group-hover:top-100 group-hover:text-transparent duration-400 ease-in-out pointer-events-none "
      >
        {text}
      </h3>
      <h4
        className=" font-satoshiBold text-[18px] font-semibold text-transparent px-8 absolute -top-100 left-0 
        group-hover:top-[50%] group-hover:translate-y-[-50%] group-hover:text-white  duration-400 ease-inpointer-events-none "
      >
        {textSec}
      </h4>

      <div className="flex items-center rounded-full w-fit ml-auto z-50 ">
        <div className="flex -space-x-3">
          <img
            className="w-8 h-8 rounded-full "
            src="https://i.pravatar.cc/100?img=1"
            alt=""
          />

          <img
            className="w-8 h-8 rounded-full "
            src="https://i.pravatar.cc/100?img=2"
            alt=""
          />

          <img
            className="w-8 h-8 rounded-full "
            src="https://i.pravatar.cc/100?img=3"
            alt=""
          />
        </div>
      </div>
      <div
        id="fadeOut"
        className=" h-15 w-full bg-black absolute left-[50%] top-[50%] 
                        translate-x-[-50%] translate-y-[-50%] rounded-full -z-50 cursor-pointer
                        group-hover:-left-5 group-hover:scale-150 transition-all duration-500 "
      ></div>
    </Link>
  );
}
