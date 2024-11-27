import Image from "next/image";


export default function Team(){
  return(<>
     <div className="abcd flex flex-col gap-10 items-center w-[428px] h-[862px]">
    <div className="space-y-10">
      <h1>Explore Courses By Category</h1>
      <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    </div>
    
    
   
    <div className="flex items-center flex-col gap-10">
    <div className="card flex items-center justify-center">
         <Image src="/Frame-a.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Design & Development</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
  
  <div className="card flex items-center justify-around">
         <Image src="/Frame-b.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Marketing</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
    
    
    <div className="card flex items-center  justify-around ">
         <Image src="/Frame-c.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Development</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
    </div>
  
    <button className=" w-56 p-5 border border-black text-center rounded justify-center" >View All</button>
    </div>
    
    
  </>)
}