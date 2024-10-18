import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-start items-center h-full ">
      
       
      
<div className="w-full mt-20">
  <img src="https://bwhr.co.uk/wp-content/uploads/2020/11/slider-image-1.jpg" className=" w-full h-full object-cover" alt="bg-image" />
</div>
     
 <div className="absolute w-full justify-center bg-slate-600/40 mt-20 px-8 py-16 ">

 <div className=" flex flex-col justify-center items-center"> 
 <p className="text-[40px] text-white text-center font-bold drop-shadow-lg">
      Unlock Talent. Empower Businesses.
    </p>    
     <p className="text-sm lg:text-lg text-white  text-center mt-4 max-w-2xl drop-shadow-lg">
      Your trusted partner in hiring top talent and matching candidates with their dream jobs. 
      Connecting people with opportunities to build a brighter future together.
    </p> 
        <div className="flex mt-8 justify-center space-x-4">
      <button className="bg-blue-600 hover:bg-blue-700 text-white w-[150px] rounded-lg p-3 font-bold uppercase">
        I'm Hiring
      </button>
      <button className="bg-slate-700 hover:bg-slate-600 text-white w-[150px] rounded-lg p-3 font-bold uppercase">
        Find a Job
      </button>
    </div>

 </div>

   
</div> 


      
    </div>
  );
}


/*


  {/* Overlay with gradient 
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent flex flex-col justify-center items-center px-8 py-16">
    {/* Main Title 
   
    

    {/* Buttons 
   
  </div>
</div>

*/