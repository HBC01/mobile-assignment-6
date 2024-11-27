import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";


export default function Faculty(){
  return(<div className=" faculty flex  items-center flex-col justify-around
  w-[428px] h-[862px] ">
    <div className="w-[385px]">
      <h2>Our Team</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
  
        <div className="flex items-center flex-col gap-10">
      <div className=" w-[394.67px] h-[273] flex flex-col items-center justify-center"><Image src="/fac-a.svg" alt="image" width={80} height={80}/> 
      <h5>James Naduku</h5>
      <p>Marketing Coordinator</p>
      <div className="flex items-center justify-center gap-6">
        <IoLogoLinkedin/>
        <FaTwitter/>
        <FaDribbble/>
      </div>
      </div>
      
      
  
  <div className=" w-[394.67px] h-[273] flex flex-col items-center justify-center"><Image src="/fac-b.svg" alt="image" width={80} height={80}/> 
      <h5>Joseph Munyambu</h5>
      <p>Nursing Assistant</p>
      <div className="flex items-center justify-center gap-6">
        <IoLogoLinkedin/>
        <FaTwitter/>
        <FaDribbble/>
      </div>
      </div>
      
      <div className=" w-[394.67px] h-[273] flex flex-col items-center justify-center"><Image src="/fac-c.svg" alt="image" width={80} height={80}/> 
      <h5>Joseph Ngumbau</h5>
      <p>Medical Assistant</p>
      <div className="flex items-center justify-center gap-6">
        <IoLogoLinkedin/>
        <FaTwitter/>
        <FaDribbble/>
      </div>
      </div>
      </div>
      
        
  </div> 
    

  )
}