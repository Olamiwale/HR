import React from 'react'



export default function Analytic() {

  const des = 'At HR Solutions, our mission is to foster a healthy and productive workplace through modern HR strategies. We envision a future where organizations thrive on the success and well-being of their employees.'
  return (
    <div className='bg-white py-10'>
    <div className='w-full justify-center bg-slate-100 items-center grid md:grid-cols-2 lg:grid-cols-3 '>

      <div>
       <div className='p-6 flex flex-col justify-center items-center'>
          <p className='text-2xl font-bold mb-5 ' >About Us</p>
          
          <p className='leading-7'>
            {des}
          </p>
          <button className='bg-blue-500 hover:bg-blue-600 ease-in-out duration-1000 rounded-md w-[250px] my-8 mx-aut text-white p-5 uppercase font-bold'>Discover more</button>
        </div>

      </div>  

    <img className='lg:col-span-2 lg:w-full' src='https://www.corpstrat.com/wp-content/uploads/2018/10/Managing-Attendance-in-a-HR-System-on-laptop-computer.jpg' alt='/' />

   
    </div>
      
    </div>
  )
}




