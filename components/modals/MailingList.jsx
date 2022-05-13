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
                        <div className="sm:max-w-[680px] sm:max-h-[500px] max-w-[350px] max-h-[546px] bg-white shadow flex-col border border-black flex ">
                            <div className="flex flex-col sm:flex-row w-full justify-center align-center items-center">
                                <div className="flex flex-col w-full text-center sm:text-[65px] text-[45px] text-[#464646] tracking-widest sm:ml-24 mt-12 sm:mb-24">Get Your Style On</div>
                                <div className="flex text-[65px] text-[#FD8C94] justify-center align-center items-center text-right w-full">&</div>
                                <div className="flex flex-col text-left w-full">
                                    <div className="flex w-full md:w-[50%] text-[167px] text-[#464646] text-left sm:mr-24 sm:mt-36">20<span className="text-[82px] position relative top-5">%<p className="text-[28px]">OFF</p></span></div>
                                    <div className="flex flex-col sm:mb-24 sm:mr-24">
                                        <form action="" className="flex flex-col sm:flex-row w-full justify-between">
                                            <input className="w-[180px] border-b-[3px] border-black font-PTSans font-bold focus:outline-none focus:text-gray-500 active:text-gray-700" type="text" name="email" placeholder="Email Address"/>
                                            <button className="w-[93px] font-bold font-PTSans text-[#fd8c94] border-b-[3px] border-[#fd8c94]">Sign Up</button>
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