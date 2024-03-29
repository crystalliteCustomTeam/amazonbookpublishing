import React from 'react'

const manuscript = () => {
    return (
        <>
            <section className='bg-[#f2f2f2]'>
                <div className='container max-w-7xl lg:max-w-6xl mx-auto py-28 font-secondary md:px-5 xs:py-10 xs:px-5 sm:px-5'>
                    <div className='grid grid-cols-2 gap-x-20 grid-rows-1 justify-between sm:grid-cols-1 xs:grid-cols-1 sm:gap-10 xs:justify-normal xs:gap-10 '>
                        <div>
                            <h6 className='text-xl font-semibold md:w-[80%]'>Our outstanding approach to writing</h6>
                            <h3 className='w-[85%] leading-[50px] lg:py-5 font-bold text-[40px] xs:w-[100%] sm:text-3xl sm:py-5 xs:text-3xl md:leading-[45px] md:py-3 xs:py-5'>We Will Create a Manuscript Free of Errors</h3>
                            <p className='text-justify'>Our writers work tirelessly to produce a manuscript that is not only devoid of errors but also reads well and requires much less micromanagement in the form of revisions.</p>
                        </div>
                        <div>
                            <h6 className='text-xl font-semibold'>Our outstanding publishing expertise</h6>
                            <h3 className='font-bold text-[40px] lg:py-5 leading-[50px] xs:w-[100%] sm:text-3xl sm:py-5 xs:text-3xl md:leading-[45px] md:py-3 xs:py-5'>Publishing Made Easy With Our Services</h3>
                            <p className='text-justify'>Publishing is the hardest aspect of delivering a story to its audience due to the complexities of publishing in this day and age. The older system of having large publishers who are entrenched in the industry and working with them is not accessible to everyone, which is why our convenient in-house publishing allows ease so you don’t have to worry about a single thing.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default manuscript
