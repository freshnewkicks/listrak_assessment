import {useEffect, useState} from "react";


export default function MailingList() {
    const [currentSlide, setCurrentSlide] = useState('registration')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setCurrentSlide('success')
    }

    return (
        <div className="flex justify-center align-center items-center">
            {currentSlide === 'registration' ? (
                    <div className="position absolute top-1/2 bottom-1/2 flex flex-col justify-center align-center items-center shadow">
                        <div className="sm:max-w-[680px] sm:max-h-[500px] max-w-[350px] max-h-[546px] bg-white shadow flex-col border border-black flex ">
                            <div className="flex justify-end align-center items-center  px-2">
                                <span className="w-[32px] h-[32px] flex justify-center items-center text-center text-[#e9e9e9]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full justify-center align-center items-center">
                                <div className="flex flex-col w-full text-center sm:text-[65px] text-[45px] text-[#464646] tracking-widest sm:ml-24 mt-8 sm:mt-12 sm:mb-24">Get Your Style On</div>
                                <div className="flex text-[65px] text-[#FD8C94] justify-center align-center items-center text-right w-full">&</div>
                                <div className="flex flex-col text-left w-full position relative bottom-2">
                                    <div className="flex w-full md:w-[50%] text-[167px] text-[#464646] text-left sm:mr-24 sm:mt-36 position relative bottom-12 sm:bottom-0 sm:justify-start justify-center">20<span className="text-[82px] position relative top-5">%<p className="text-[28px]">OFF</p></span></div>
                                    <div className="flex flex-col sm:mb-24 sm:mr-24">
                                        <form onSubmit={e => { handleFormSubmit(e) } } className="flex flex-col items-center sm:flex-row w-full justify-between position relative sm:bottom-0 bottom-24">
                                            <input className="w-[320px] sm:w-[180px] border-b-[3px] border-black font-PTSans font-bold focus:outline-none focus:text-gray-500 active:text-gray-700 text-center sm:mb-0 mb-6" type="text" name="email" placeholder="Email Address"/>
                                            <button type="submit" className="w-[320px] sm:w-[93px] font-bold font-PTSans text-[#fd8c94] sm:border-b-[3px] sm:border-0 border-[3px] border-[#fd8c94] tracking-widest p-2 sm:p-0"><span className="position relative sm:bottom-[4px]">Sign Up</span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ) : (
                <div className="position absolute top-1/2 bottom-1/2 flex flex-col justify-center align-center items-center shadow border-black">
                    <div className="sm:max-w-[680px] sm:max-h-[500px] max-w-[350px] max-h-[546px] bg-white shadow flex-col border border-black flex ">
                        <div className="flex justify-end align-center items-center  px-2">
                                <span className="w-[32px] h-[32px] flex justify-center items-center text-center text-[#e9e9e9]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                        </div>


                        <div className="w-full w-[350px] h-[526px] sm:w-[680px] sm:h-[500px]">
                            <div className="flex justify-center align-center items-center w-full sm:w-[567px] sm:h-[388px]">

                                <h1 className="flex w-[246px] h-[263px] sm:w-[497px] sm:h-[174px] sm:ml-12 text-[50px] sm:text-[55px] text-left text-[#464646] tracking-[13px] leading-[85px]">Just Like Old Friends</h1>

                            </div>

                            <div className="flex justify-center w-full">
                                <div  className="flex position relative right-24 top-16 sm:top-10 sm:right-48 sm:bottom-4">
                                    <span className="position relative sm:bottom-24 flex sm:w-[165px] flex justify-between items-center">
                                        <div className="w-[9.62px] h-[9.62px] bg-[#e9e9e9] rounded-full"/>
                                        <div className="w-[102px] h-0  border-[1px] border-[#e9e9e9] position absolute left-3"/>
                                        <div className="w-[14.75px] h-[14.75px] bg-[#e9e9e9] rounded-full position relative left-32"/>
                                        <div className="w-[9.62px] h-[9.62px] bg-[#e9e9e9] rounded-full position relative left-24"/>
                                        <div className="w-[9.62px] h-[9.62px] bg-[#e9e9e9] rounded-full position relative left-32"/>
                                    </span>
                                </div>
                            </div>

                            <div className="w-full flex justify-center text-center sm:text-justify">
                                <div className="w-[261px] h-[69px] sm:w-[488px] sm:h-[18px] position relative sm:bottom-32  sm:right-8">
                                    <p className="w-full text-[14px] tracking-[0.7px] leading-7 position relative sm:top-0 top-24 text-justify">We&apos;ll keep you updated on any deals, news, or gossip that comes our way!</p>
                                </div>
                            </div>

                            <div className="w-full flex justify-center text-justify position relative sm:bottom-14 sm:right-60 top-28">
                                <button type="submit" className="w-[320px] sm:w-[93px] font-bold font-PTSans text-[#fd8c94] sm:border-b-[3px] sm:border-0 border-[3px] border-[#fd8c94] tracking-widest p-2 sm:p-0 "><span className="">Go Shop!</span></button>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}