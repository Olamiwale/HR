import React from 'react'

export default function Service() {

  const des = 'FindingFinding the right talent to power your businessvvvFinding the right talent to power your businessFinding the right talent to power your businessFinding the right talent to power your businessFinding the right talent to power your businessFinding the right talent to power your businessFinding the right talent to power your businessFinding the right talent to power your businessFinding the right talent to power your business the right talent to power your business.'
  return (
    <div id="services" className="py-16 px-10 bg-slate-200 ">

    <div className="mx-auto text-center p-5">
      <h3 className="text-3xl font-bold mb-8">Our Services</h3>

      
        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-10">

          <div className="bg-gray-300 shadow-lg shadow-slate-400 rounded-lg">
            
            <img src='https://tse2.mm.bing.net/th?id=OIP.shNTxms8RDdb1Po60Ywa-QHaEs&pid=Api&P=0&h=220' className='rounded-t-lg w-full h-64' />
            <h4 className="text-xl font-semibold text-blue-600 my-6">Recruitment</h4>
            <p className="text-gray-600">{des}</p>
          </div>
          <div className="bg-gray-300 shadow-lg shadow-slate-400 rounded-lg">
            
            <img src='https://trainingindustry.com/content/uploads/2019/08/Train-the-trainer-Programs-8.14.19.jpg' className='rounded-t-lg w-full h-64' />
            <h4 className="text-xl font-semibold text-blue-600 my-6">Recruitment</h4>
            <p className="text-gray-600">{des}</p>
          </div>
          <div className="bg-gray-300 shadow-lg shadow-slate-400 rounded-lg">
            
            <img src='https://www.womendailymagazine.com/wp-content/uploads/2018/05/ladies-heres-why-human-resources-is-perfect-for-you-2.png' className='rounded-t-lg w-full h-64' />
            <h4 className="text-xl font-semibold text-blue-600 my-6">Recruitment</h4>
            <p className="text-gray-600">{des}</p>
          </div>

        </div>

        
  
    </div>
  </div>
  )
}
