import React from "react";

const Contact = () => {
    return(
        <>
            {/* Body */}
            <div className="h-[90vh] flex">
                {/* left */}
                <div className="bg-[#4143CC] flex flex-col w-1/2 ">
                    {/* Top */}
                    <div className="h-1/2 justify-center items-center flex flex-col  px-[120px] text-white">
                        <p className="text-[50px] mb-[50px] font-semibold">Still have questions?</p>   
                        <p className="text-[14px] opacity-[0.7]">Can't find the answer you're looking for? Call on at (917) 388-6727 or email support@oboosho.com and we'll tell you ournelven!</p>
                    </div>
                    {/* Bottom */}
                    <div className="h-1/2 justify-center items-center flex">
                        <div className="bg-white min-h-[60px] min-w-[140px] rounded-md p-[20px] flex justify-center items-center  cursor-pointer">
                            Write E-mail
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="flex flex-col w-1/2 bg-slate-100">
                    {/* Top */}
                    <div className="h-1/2 justify-center items-center flex flex-col  px-[120px]">
                        <p className="text-[50px] mb-[50px] font-semibold">Book your cleaning</p>   
                        <p className="text-[14px] opacity-[0.7]">Leave for work in the morning (or take a spa day).we'll have your place and looking great when you get back. We won't even tell anyone that we were there that'll be between us.</p>
                    </div>
                    {/* Bottom */}
                    <div className="h-1/2 justify-center items-center flex ">
                        <div className="bg-[#4143CC] text-white min-h-[60px] min-w-[140px] rounded-md p-[20px] flex justify-center items-center  cursor-pointer">
                            Book your cleaning services today!
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;