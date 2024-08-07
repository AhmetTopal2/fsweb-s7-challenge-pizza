import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function NotFound() {
    const history = useHistory();
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-svh '>
        <h1 className='text-[86px] font-bold text-center text-black'>NotFound</h1>
        <button onClick={() => history.push("/")} className='w-[195px] h-14 bg-[#FDC913] mt-4 rounded-3xl'>Home</button>
        </div>
    </>
  )
}

export default NotFound