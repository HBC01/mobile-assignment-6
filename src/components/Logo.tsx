import Image from "next/image";

export default function Logo(){
  return(
  
  <> <div className="logo flex justify-center flex-col gap-2">
  <div className="pl-2">
      <h5>Trusted by 2000+ companies worldwide.</h5>
      </div>
    
      <div className="flex gap-4">
        <Image src="/Logo-a.svg" alt="Logo-1" width={123.8} height={38.52}/>
         <Image src="/Logo-b.svg" alt="Logo-2" width={123.8} height={38.52}/>
          <Image src="/Logo-c.svg" alt="Logo-3" width={123.8} height={38.52}/>
       </div>
       
       
    </div>
  </>)
}