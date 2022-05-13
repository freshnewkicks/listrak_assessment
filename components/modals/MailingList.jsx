import {useEffect, useState} from "react";


export default function MailingList() {
    const [currentSlide, setCurrentSlide] = useState(null)

    useEffect( () => {
            setCurrentSlide('registration')
    }, [currentSlide])

    return (
        <div className="flex justify-center align-center items-center">
            {currentSlide === 'registration' ? (
                    <div className="position absolute top-1/2 bottom-1/2 flex flex-col justify-center align-center items-center shadow">
                        <div className="max-w-[680px] max-h-[500px] bg-white shadow flex-col border border-black">
                            <div className="flex flex-col sm:flex-row w-full justify-center align-center items-center">
                                <div className="flex flex-col w-48 text-[65px] text-[#464646] tracking-widest ml-24 mt-12 mb-24">Get Your Style On</div>
                                <div className="flex text-[65px] text-[#FD8C94] justify-center align-center items-center text-right w-full">&</div>
                                <div className="flex flex-col text-left">
                                    <div className="flex w-full md:w-[50%] text-[167px] text-[#464646] text-left mr-24 mt-36">20<span className="text-[82px] position relative top-5">%<p className="text-[28px]">OFF</p></span></div>
                                    <div className="flex flex-col  mb-24">
                                        <form action="" className="flex w-full justify-between">
                                            <input className="w-[180px] border-b border-black" type="text" name="email" placeholder="Email Address"/>
                                            <button className="w-[93px] border-b border-gray-400">Sign Up</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ) : (
                <p>Not Registration</p>
            )}
        </div>
    )
}