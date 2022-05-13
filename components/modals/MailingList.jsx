import {useEffect, useState} from "react";


export default function MailingList() {
    const [currentSlide, setCurrentSlide] = useState(null)

    useEffect( () => {
            setCurrentSlide('registration')
    }, [currentSlide])

    return (
        <div className="flex justify-center align-center items-center">
            {currentSlide === 'registration' ? (

            <div className="position absolute top-1/2 bottom-1/2 flex flex-col justify-center align-center items-center">
                <div className="max-w-[680px] max-h-[500px] bg-white">

                </div>
            </div>
            ) : (
                <p>Not Registration</p>
            )}
        </div>
    )
}