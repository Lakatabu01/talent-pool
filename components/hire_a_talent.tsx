"use client";

import { useState } from "react";
import Image from "next/image";
import sidebar from "../public/assets/images/sidebar.png";
import backArrow from "../public/assets/icons/back-arrow.png";
import cancel from "../public/assets/icons/cancel.png";
import Link from "next/link";
import Popup from "./popup";
import SuccessPopup from "./success_popup";
import mark from "../public/assets/icons/Group.png";

const HireATalent = () => {
  const [next, setNext] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const updateTerms = () => {
    setAcceptTerms(true);
  };

  const handleCloseSuccessPopup = () => {
    setAcceptTerms(false);
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
    // updateTerms();
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleClick = () => {
    setNext(!next);
  };

  return (
    <section className="w-full flex font-montserrat">
      <div className="w-[35%] bg-blue-900 relative hidden lg:block">
        <Image
          src={sidebar}
          height={800}
          width={500}
          alt=""
          className="w-full h-full object-cover"
        />
        <p className="text-white absolute top-[20%] left-[20%] text-4xl font-semibold text-center ">
          Hire Talented <br /> Individuals with <br /> Confidence
        </p>
      </div>

      <div className="lg:w-[65%] w-full pt-8">
        <div className="w-[80%] mx-auto lg:flex justify-between mb-14 hidden">
          <div>
            {next && (
              <button
                onClick={handleClick}
                className="bg-transparent border border-[transparent] flex text-dark-blue font-semibold items-center font-montserrat text-base">
                <Image
                  src={backArrow}
                  alt="arrow icon"
                  height="20"
                  width="20"
                  className="mr-6"
                />
                Previous
              </button>
            )}
          </div>
          <div>
            <Link rel="stylesheet" href="/" className="ml-auto">
              <button className="bg-light-blue border border-[transparent] rounded-full w-8 h-8 flex justify-center items-center">
                <Image
                  src={cancel}
                  alt="arrow icon"
                  height="10"
                  width="10"
                  className=""
                />
              </button>{" "}
            </Link>
          </div>
        </div>

        <div className="w-[90%] lg:w-[80%] mx-auto mb-10">
          <h3 className="font-bold mb-3 text-2xl lg:text-3xl">
            Register as a Company
          </h3>
          <p className="text-light-black">
            Make sure that the information provided accurately represents your
            company and its hiring needs.
          </p>
        </div>

        <div className="flex w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            action=""
            method="post"
            className="bg-[#fff] w-[90%] lg:w-[80%] mx-auto mt-6">
            <div className={`w-full ${next == true ? "hidden" : "block"}`}>
              <div className="w-full ">
                <p className=" font-montserrat text-lg lg:text-2xl font-bold">
                  Contact Information
                </p>
              </div>

              <div className=" my-2">
                <div className="flex justify-between flex-col lg:flex-row ">
                  <label
                    htmlFor="Company-name"
                    className="block mt-8 lg:w-[45%] w-full font-semibold text-base">
                    Company name
                    <input
                      id="Company-name"
                      required
                      type="text"
                      placeholder="Enter your first name"
                      className="invalid:outline-red-500 block font-normal mt-1  border border-[#D8D1D1] px-4 py-3 focus:outline-none rounded-lg w-full"
                    />
                  </label>

                  <label
                    htmlFor="Industry"
                    className="block mt-8 lg:w-[45%] w-full font-semibold  text-base">
                    Industry
                    <input
                      id="industry"
                      required
                      type="text"
                      placeholder="Enter your Industry"
                      className=" block font-normal mt-1 w-full border border-[#D8D1D1] px-4 py-3 focus:outline-none rounded-lg "
                    />
                  </label>
                </div>
                <div className="flex justify-between pt-2 lg:pt-8 flex-col lg:flex-row">
                  <label
                    htmlFor="Email"
                    className="block mt-8 lg:w-[45%] w-full font-semibold text-base">
                    Email
                    <input
                      data-pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"
                      required
                      id="email"
                      type="email"
                      placeholder="Enter your Email address"
                      className="block font-normal mt-1 w-full  border border-[#D8D1D1] px-4 py-3 focus:outline-none rounded-lg "
                    />
                  </label>

                  <label
                    htmlFor="Company website"
                    className="block mt-8 lg:w-[45%] w-full font-semibold text-base">
                    Company website
                    <input
                      required
                      id="company-website"
                      type="text"
                      placeholder="Company website link"
                      className=" block font-normal mt-1 w-full  border border-[#D8D1D1] px-4 py-3 focus:outline-none rounded-lg "
                    />
                  </label>
                </div>
                <div className="flex justify-between py-8 flex-col lg:flex-row">
                  <label
                    htmlFor="Current location"
                    className="block mt-8 lg:w-[45%] w-full font-semibold text-base">
                    Current location
                    <input
                      required
                      type="text"
                      placeholder="Company location"
                      className=" block font-normal mt-1 w-full border border-[#D8D1D1] px-4 py-3 focus:outline-none rounded-lg "
                    />
                  </label>

                  <label
                    htmlFor="Experience"
                    className="block mt-8 lg:w-[45%] w-full font-semibold text-base">
                    Size of company
                    <select
                      required
                      name="languages"
                      id="lang"
                      className=" block font-normal mt-1 w-full border border-[#D8D1D1] px-4 py-3 focus:outline-none rounded-lg ">
                      <option value="6 months to one year">
                        1 to 10 employees{" "}
                      </option>
                      <option value="11 to 30 employees">
                        11 to 30 employees
                      </option>
                      <option value="31 to 50 years">30 to 50 employees</option>
                      <option value="Above 50 employees">
                        Above 50 employees
                      </option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="flex justify-center my-8 w-full lg:w-[90%]">
                {" "}
                <button
                  onClick={() => {
                    updateTerms();
                  }}
                  className={` bg-[#2F2F8C] text-base rounded px-3 py-3 border border-[#2F2F8C] text-white  w-[80%] `}>
                  Submit
                </button>
              </div>
            </div>
          </form>

          {/* Popup component is imported and used here to display the terms
          condition */}
          {showPopup && (
            <Popup onClose={handleClosePopup} acceptTerms={updateTerms}>
              {/* button that closes the popup */}
              <div className="w-[90%] mx-auto lg:flex justify-between hidden">
                <div></div>
                <div>
                  <button
                    onClick={handleClosePopup}
                    className=" border border-slate-200  rounded-full w-8 h-8 flex justify-center items-center">
                    <Image
                      src={cancel}
                      alt="arrow icon"
                      height="10"
                      width="10"
                      className=""
                    />
                  </button>{" "}
                </div>
              </div>
              <div className="w-[80%] mx-auto">
                <h1 className="text-dark-blue font-semibold text-lg font-montserrat text-center mb-1">
                  Terms & Conditions
                </h1>
                <p className="text-sm text-center font-semibold">
                  Please carefully read through our terms of agreement before
                  you proceed{" "}
                </p>
              </div>

              <div className="w-90% my-3">
                <p className="text-center text-sm">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p className="text-center text-sm pt-2">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi.
                </p>
                <p className="text-center text-sm pt-2">
                  Tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum{" "}
                </p>
              </div>

              <div className="w-[80%] bg-slate-200 flex mx-auto mt-3 px-2 py-1 rounded-sm  justify-center">
                <div className="flex">
                  <input type="checkbox" className="rounded-full" required />
                  <p className="pl-3 text-sm">
                    I agree with the terms & conditions
                  </p>
                </div>
              </div>
            </Popup>
          )}

          {/* use the background of the other popup for this one  */}

          {acceptTerms && (
            <SuccessPopup onClose={handleCloseSuccessPopup}>
              <div className="bg-light-blue rounded-full  ">
                {" "}
                <Image
                  src={mark}
                  alt="Successful mark"
                  height="40"
                  width="40"
                />
              </div>
              <h1 className="text-dark-blue font-semibold my-2">
                Registration Successful
              </h1>
              <p className="text-sm text-center">
                Your application was submitted successfully. Our team will reach
                out to you via mail once your application is reviewed.
              </p>
            </SuccessPopup>
          )}
        </div>
      </div>
    </section>
  );
};

export default HireATalent;

// When input checkbox is ticked, update the acceptTerms state to true,  so that this
// will allow the popup to be submitted and then bring up a successful modal
