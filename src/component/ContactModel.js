"use client"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

const Bloginner = () => {
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

  return (
    <>
      <section className="w-full py-10 font-secondary bg-cover bg-no-repeat bg-center">
        <div className="text-center mb-20 justify-center">
          <h6 className="text-xl xs:text-base font-semibold">Connect with us</h6>
          <h2 className="text-[40px] font-semibold leading-10 mt-2 mb-2 xs:text-[30px]">
            We Would Love to Serve You
          </h2>
          <p className="w-[60%] mx-auto md:w-[90%] sm:w-[100%] xs:w-[100%] px-5">
            Our team of professionals is at your service round the clock. We love making things happen for our customers, and we would love to be your partner in making you a successful author. Fill in the details, and let our representatives contact you.
          </p>
        </div>
        <div className="container relative max-w-6xl md:max-w-2xl py-10 px-10 border bg-white rounded-xl shadow-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:px-5 sm:space-y-0 sm:space-x-1">
          <form
            className="col-span-10 md:col-span-1 pr-36 md:pr-0 md:justify-center xs:pr-0 sm:pr-0 xs:align-center"
            onSubmit={handleSubmit}
            method="Post"
          >
            <div className="pr-16 md:pr-0 md:px-0 md:mb-16 xs:pr-0 sm:pr-0">
              <div className="grid grid-cols-2 gap-3 xs:flex-col md:grid md:grid-cols-2 mb-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-3 bg-[#ededed] text-[#989898] border-b-2 border-[#fff] pb-2"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="p-3 bg-[#ededed] text-[#989898] border-b-2 border-[#fff] pb-2"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="w-full mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-3 bg-[#ededed] text-[#989898] border-b-2 border-[#fff] pb-2 w-full"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="w-full mb-3">
                <textarea
                  type="textarea"
                  id="message"
                  name="message"
                  className="p-3 h-36 bg-[#ededed] text-[#989898] border-b-2 border-[#fff] pb-2 w-full"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="basis-[30%] mb-4 flex items-center space-x-2 justify-center">
                <button
                  type="submit"
                  className="w-full bg-[#ededed] text-[#00c0e4] px-10 py-2 hover:bg-[#00c0e4] hover:text-[#1d1d1f]"
                >
                  {score}
                </button>
              </div>
            </div>
          </form>
          <div className="absolute right-[-70px] top-9 md:px-0 md:relative md:right-0 md:top-0 sm:relative sm:-right-2 sm:top-0 xs:relative xs:right-0 xs:top-0">
            <div className="bg-[#00C0E4] px-8 py-14 sm:px-5 sm:py-8 rounded-[30px] shadow-xl space-y-2">
              <h4 className="font-bold text-white text-3xl mb-4">
                Contact details
              </h4>
              <ul className="text-sm text-white">
                <li className="mb-4 border-b-2 border-[#f9f9f9]">
                  <FontAwesomeIcon icon={faEnvelope} className="px-2" /> info@educationlogo.com
                </li>
                <li className="mb-4 border-b-2 border-[#ffffff]">
                  <FontAwesomeIcon icon={faPhone} className="px-2" />
                  +123-456-7890
                </li>
              </ul>
              <h3 className=" text-[20px] font-bold mt-3 text-white">Follow Us:</h3>
              <div className="flex space-x-2 basis-8/12 items-center text-[12px] xs:text-center xs:mx-auto">
                <FontAwesomeIcon icon={faFacebookF} className="rounded-[50%] text-[#fff] border-2 p-1 h-3 w-3" />
                <FontAwesomeIcon icon={faTwitter} className="rounded-[50%] text-[#fff] border-2 p-1 h-3 w-3" />
                <FontAwesomeIcon icon={faInstagram} className="rounded-[50%] text-[#fff] border-2 p-1 h-3 w-3" />
                <FontAwesomeIcon icon={faLinkedinIn} className="rounded-[50%] text-[#fff] border-2 p-1 h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bloginner;
