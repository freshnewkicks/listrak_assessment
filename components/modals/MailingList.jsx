import {useEffect, useState} from "react";


export default function MailingList() {
    const [isLoading, setIsLoading] = useState(true)
    const [currentSlide, setCurrentSlide] = useState(null)

    useEffect( () => {
        setIsLoading(false)
        setCurrentSlide('registration')
    }, [currentSlide, isLoading])

    return (
        <div className="flex justify-center align-center items-center">
            {isLoading &&
                <h1>No</h1>
            }
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