import React from 'react';
import { GoPerson } from 'react-icons/go';
import { PiDotsThreeLight } from 'react-icons/pi';


const Navbar = () => {
    return(
        // Navbar
        <div className='flex w-full h-[100px] bg-slate-100 items-center pl-[70px] font-custom'> 
            {/* Logo and descript*/}
            <div className='flex w-4/5 items-center h-full'>
                {/* Logo */}
                <div className='mr-[19px]'>
                    <p className='font-semibold text-[20px]'>Oboosho</p>
                </div>
                {/* Descript */}
                <div className=''>
                    <p className='font-light text-[14px] opacity-[0.7]'>Home cleaning services</p>
                </div>
            </div>
            {/* Login */}
            <div className='w-1/5 flex h-full'>
                {/* login */}
                <div className='flex w-1/2 justify-center items-center h-full cursor-pointer'>
                    <div className='flex w-[100px] h-[40px] rounded-full items-center justify-center bg-slate-950'>
                        <GoPerson className='text-white mr-[5px]'/>
                        <p className='text-white text-[14px]'>Login</p>
                    </div>
                </div>
                {/* points */}
                <div className='flex w-1/2 justify-start h-full items-center'>
                    <PiDotsThreeLight size={50} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;