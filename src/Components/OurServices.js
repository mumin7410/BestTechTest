import React from "react";
import { MdOutlineMail } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'
import Monster from '../../src/monster.png'; // Import the image
const OurServices = () => {
    return(
        <>
            {/* Body */}
            <div className="min-h-[100vh] flex font-custom overflow-hidden relative mt-[35px]">
                {/* Left */}
                <div className="flex flex-col w-1/2 pl-[120px]">
                    {/* 1 */}
                    <div className="h-1/3">
                        <p className="text-[50px]  mt-[15px]">Our Services</p>
                    </div>
                    {/* 2 */}
                    <div className="h-1/3 ">
                        <div className="h-1/2">
                            <p className="font-semibold">Are you ready to schedule your first cleaning?</p>
                            <p className="font-semibold">Or maybe you stll have some questions?</p>
                        </div>
                        <p className=" text-[14px] opacity-[0.7]">We have all the answers!</p>
                    </div>
                    {/* 3 */}
                    <div className="h-1/3  pt-[40px]">
                        <p className="font-semibold mb-[20px]">Contact us</p>
                        <div className="flex text-[15px] items-center">
                            {/* icon */}
                            <MdOutlineMail size={24}/>
                            {/* Text */}
                            <div className="ml-[9px]">support@oboosho.com</div>
                        </div>
                        <div className="flex text-[15px]">
                            {/* icon */}
                            <BiPhoneCall size={24}/>
                            {/* Text */}
                            <div className="ml-[9px]">(917) 388-6727</div>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className="flex flex-col w-1/2">
                    <div className="absolute right-0 transform translate-x-1/2 top-[-190px]">
                        <img src={Monster} alt="My Image" />
                    </div>
                    {/* 1 */}
                    <div className="h-1/3 ">
                        
                    </div>
                    {/* 2 */}
                    <div className="h-1/3 flex flex-col ">
                        <div className="h-1/2">
                            
                        </div>
                        <p className="text-[14px] opacity-[0.7]">Our support team is here for you. Give a call or shoot us an email during business</p>
                        <p className="text-[14px] opacity-[0.7]">hours for immediate support. You can also reach out to us after hours and we will get</p>
                        <p className="text-[14px] opacity-[0.7]">back to you as</p>
                        <p className="text-[14px] opacity-[0.7]">quikly as possible</p>
                    </div>
                    {/* 3 */}
                    <div className="h-1/3  pt-[40px]">
                        <p className="font-semibold mb-[20px]">Business hours are in EST</p>
                        {/* monday */}
                        <div className="flex text-[15px]">
                            {/* day */}
                            <p className="w-1/5">Monday - Friday</p>
                            {/* time */}
                            <p className="ml-[40px]">8am - 9pm</p>
                        </div>
                        {/* saturday */}
                        <div className="flex text-[15px]">
                            {/* day */}
                            <p className="w-1/5">Saturday - Sunday</p>
                            {/* time */}
                            <p className="ml-[40px]">9am - 6pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices;