import React from 'react'
import Navbar from './_components/Navbar'
import Sidebar from './_components/Sidebar'

const page = () => {
  return (
    <div className='w-full h-full'>
        <div className='flex flex-row h-full'>
            <div className='flex-1 md:max-w-[250px] bg-white mr-5'>
                <Sidebar />
            </div>
            <div className='flex-4'>
                <div>
                    <Navbar />
                </div>
                <main className='h-full bg-white p-5 mt-5'>
                    <h1>Dashboard</h1>
                    <p className="text-gray-500 my-3">Hello, Padam this is dashboard page. Where you can manage your data.</p>
                </main>
            </div>
        </div>
    </div>
  )
}

export default page