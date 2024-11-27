

export default function Layout(){
    return(<>
      <div className="w-[428px] h-[452px]  flex justify-center items-center">
        <div className="w-[380px] h-[355px]  flex flex-col">
          
        <div className="pb-3 space-y-2 ">
          <h2>Our Achivements</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
        </div>
        <div className="grid grid-cols-2 gap-5 pt-8">
          <div className="flex flex-col items-center ">
            <h3>+200</h3>
            <p>Courses</p>
          </div>
          <div className="flex flex-col items-center">
            <h3>50K</h3>
            <p>Members</p>
          </div>
          <div className="flex flex-col items-center">
            <h3>370K</h3>
            <p>Students</p>
          </div>
          <div className="flex flex-col items-center">
            <h3>100+</h3>
            <p>Recognition</p>
          </div>
        </div>
        </div>
      </div>
      
    </>)
  }