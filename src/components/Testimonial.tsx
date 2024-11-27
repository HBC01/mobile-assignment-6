import { RxStarFilled } from "react-icons/rx";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Image from "next/image";




export default function Testimonial(){
  return(<div className="testimonial px-2 ">
    <div className="flex flex-col gap-10 mx-4">
    <div className=" border border-red-600 flex flex-col  justify-center ">
      <h4 className="font-bold text-4xl">What our students say</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    
      <div className="pic  border border-black  ">
        <div className="pl-10 flex flex-col gap-10 ">
        <div className="flex gap-2"><RxStarFilled/>
           <RxStarFilled/>
            <RxStarFilled/>
             <RxStarFilled/>
              <RxStarFilled/></div>
              <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</q>
              <div className="flex items-center gap-10 ">
                <Image src="/fac-c.svg" alt="Picture" width={56} height={56} className="rounded-full"/>
                <div>
                  <h5>James Nduku</h5>
                  <p>Software Developer</p>
                </div>
                </div>
               </div>
               </div>
              
    
      
    
    <div className="flex items-center justify-between text-2xl pt-16 ">
      <div className="flex gap-1">
        <FaCircle />
       <FaRegCircle/>
         <FaRegCircle/>
          <FaRegCircle/>
           <FaRegCircle/>
      </div>
      <div className="flex gap-10 justify-between items-center text-5xl">
        <IoArrowBackCircleOutline/>
          <IoArrowForwardCircleOutline/>
      </div>
      
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    </div>
    
    
    
    
    
    
    
    
    
    )
}