import Image from "next/image";

import { IoMenuSharp } from "react-icons/io5";


export default function Nav(){
  return(<div className="nav ">
    <div className="flex items-center justify-between px-10 w-[428px] h-[72px] ">    
      <div>
        <Image src="/Column.svg" alt="logo" width={130} height={41}/>
        </div>
        <div>
          <IoMenuSharp size={40}/>
        </div>
        </div>
        </div>)
}