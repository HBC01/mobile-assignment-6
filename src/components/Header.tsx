import Image from "next/image";


export default function Header(){
  return(<>
    <header>
      <div className="column ">
        
        
        <div className="content flex flex-col gap-12 ">
          <h1>Learn new skills online with ease</h1>
        <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
        <div className="flex gap-16 pt-14 ">
          <button className="bg-black  text-white p-4 rounded" >Start learning now</button>
          <button className="p-4 border border-black rounded">Explore Courses</button>
        </div>
        
      </div>
    <Image src="/Image.jpg" alt="picture" width={424} height={390} />
    </header>
  </>)
}