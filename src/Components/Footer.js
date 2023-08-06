import React from "react";
import { GoDotFill } from 'react-icons/go'

const Footer = () => {
    return(
        <>
            <div className="min-h-[30vh] flex">
                {/* 1 */}
                <div className="flex flex-col w-1/4  px-[80px] mt-[50px]">
                    <p className="text-[19px] font-semibold mb-[20px]">Oboosho</p>
                    <p className="text-[14px] opacity-[0.7]">Copyright 2017 Oboosho All rights reserved</p>
                </div>
                {/* 2 */}
                <div className="flex w-1/2 justify-center mt-[50px]">
                    {/* 2.1 */}
                    <div className="flex flex-col w-1/3  pl-[80px]">
                        <p className="text-[19px] font-semibold mb-[20px]">The goods</p>
                        <p className="text-[14px] opacity-[0.7]">About us</p>
                        <p className="text-[14px] opacity-[0.7]">Carreers</p>
                        <p className="text-[14px] opacity-[0.7]">Contact Us</p>
                        <p className="text-[14px] opacity-[0.7]">Become Cleaner</p>
                    </div>
                    {/* 2.2 */}
                    <div className="flex flex-col w-1/3 pl-[80px]">
                        <p className="text-[19px] font-semibold mb-[20px]">Our Services</p>
                        <p className="text-[14px] opacity-[0.7]">Home Cleaning</p>
                        <p className="text-[14px] opacity-[0.7]">Office Cleaning</p>
                        <p className="text-[14px] opacity-[0.7]">50 Point Checklist</p>
                        <p className="text-[14px] opacity-[0.7]">Other menu point</p>
                    </div>
                    {/* 2.3 */}
                    <div className="flex flex-col w-1/3 pl-[80px]">
                        <p className="text-[19px] font-semibold mb-[20px]">Connect</p>
                        <p className="text-[14px] opacity-[0.7]">Twitter</p>
                        <p className="text-[14px] opacity-[0.7]">Facebook</p>
                        <p className="text-[14px] opacity-[0.7]">Instagram</p>
                        <p className="text-[14px] opacity-[0.7]">Yelp</p>
                    </div>
                </div>
                {/* 3 */}
                <div className="flex flex-col w-1/4 mt-[50px]">
                    <p className="text-[19px] font-semibold mb-[10px]">We clean, you relax. It's that simple!</p>
                    <div className="flex flex-row pl-[30px] text-[#4143CC]">
                        <GoDotFill size={60}/>
                        <GoDotFill size={60}/>
                        <GoDotFill size={60}/>
                        <GoDotFill size={60}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;