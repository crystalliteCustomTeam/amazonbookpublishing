import React from 'react'


import TABII1 from '../CoverDesign/TabCovers'

const TabNavigateCovers = () => {
    return (
        <>
            <section className="xs:py-10 font-secondary">
                <div className="container max-w-7xl relative z-10 ">
                    <div className="text-center justify-content-center ">
                        <h6 className='text-[20px] font-semibold'>Why we are exceptional</h6>
                        <h2 className='text-[34px] font-bold capitalize xs:text-[28px]'>Unique Book Covers for You</h2>
                        <p className='max-w-[90%] mx-auto my-5 text-[#05193c] font-normal text-[17px]'>
                            Our leading book cover design services include custom hardcover, paperback, and dust jacket covers. We make certain that your book’s cover is captivating. Our team of expert book cover designers is dedicated to helping your book make a lasting impression.</p>
                    </div>
                </div>
                <div className="relative mb-10 text-white " >
                    <div className='max-w-7xl mx-auto py-10 xs:px-5'>
                        <TABII1 />

                    </div>

                </div>
            </section>
        </>

    )
}

export default TabNavigateCovers
