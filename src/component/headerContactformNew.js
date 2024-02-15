import { useState } from "react";

import Router from "next/router";
const HeaderContactForm = () => {
  const [score, setScore] = useState("Submit Form");

  const HandleSubmit = async (event) => {
    const [score, setScore] = useState("Submit Form");

    const handleSubmit = async (e) => {
      e.preventDefault();


      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
      }

      const JSONdata = JSON.stringify(data);
      console.log(JSONdata);
      setScore('Sending Data');
      fetch('../api/form', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSONdata
      }).then((res) => {
        console.log(`Response received ${res}`)
        if (res.status === 200) {
          console.log(`Response Successed ${res}`)
        }
      })
      const { pathname } = Router
      if (pathname == pathname) {
        window.location.href = '/ThankYou';
      }
    }




  }
  return (
    <section className=" bg-white w-full font-secondary md:p-5 xs:px-4">
      <div className='container max-w-7xl lg:max-w-6xl bg-[#F2F2F2] rounded-3xl sm:rounded-none py-14 px-20 font-secondary md:py-10 md:px-8 sm:py-10 sm:px-10 xs:p-5 hover:shadow-lg hover:shadow-[#707070] md:items-center '>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 xs:grid-cols-1  md:items-center">
          <div className="... xs:pt-5">
            <h3 className='font-bold text-[40px] leading-[50px] xs:text-3xl mt-3 mb-5 md:text-[32px] md:leading-[40px]'>Unlock Your Literary Success Today</h3>
           
          </div>
          <div className="col-span-2 ... border-l-2 border-solid border-[#989898] sm:border-l-0 xs:border-l-0" >
            <form onSubmit={HandleSubmit}>
              <div className='px-10 md:px-5 sm:px-0 xs:px-0 '>
                <div className='grid grid-cols-3 gap-5 xs:flex-col md:grid md:grid-cols-1 sm:grid-cols-1 sm:grid xs:grid-cols-1 mb-8 xs:mb-5'>
                  <input
                    name="name"
                    className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2"
                    placeholder="Full Name"
                  />
                  <input
                    name="email"
                    className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2"
                    placeholder="Email Address"
                  />
                  <input
                    name="phone"
                    className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2"
                    placeholder="Phone No"
                  />
                </div>
                <div className='w-full'>
                  <input
                    name="message"
                    className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2 w-full"
                    placeholder="Enter a brief description about your book"
                  />

                </div>

                <div className='w-full flex items-center font-secondary xs:flex-none sm:grid-cols-1 sm:grid xs:grid-cols-1 xs:grid '>
                  
                  <div className="mt-10 flex items-stretch justify-end md:mt-28 sm:justify-center sm:mt-5 xs:mt-0 xs:mb-10 xs:justify-center ">
                    <button type="submit" className="bg-[#00c0e4] hover:font-semibold text-white px-8 py-1 md:px-4 hover:bg-[#00c0e4] sm:px-32 xs:px-20 hover:text-white">
                      {score}
                    </button>
                    {/* <Link type="submit" href='#' className='bg-black text-white px-8 py-1 md:px-4 hover:bg-[#00c0e4] xs:px-20 hover:text-[#1d1d1f]'>Submit Now</Link> */}
                  </div>
                 
                  
                </div>
                <div className='w-full mt-3'><p className='text-[17px] font-semibold'>Get captivating ghostwriting & book  writing services with up to 70% savings!</p></div>

              </div>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderContactForm;
