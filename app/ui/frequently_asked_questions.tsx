"use client";
import { useState } from "react";

const FrequentlyAskedQuestions = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);

  const FAQ1 = () => {
    setClicked1(!clicked1);
  };

  const FAQ2 = () => {
    setClicked2(!clicked2);
  };

  const FAQ3 = () => {
    setClicked3(!clicked3);
  };

  const FAQ4 = () => {
    setClicked4(!clicked4);
  };

  const FAQ5 = () => {
    setClicked5(!clicked5);
  };

  return (
    <div>
      <div className="w-[90%] flex flex-col items-center mt-16 lg:mt-32 mb-10 mx-auto">
        <h3 className="text-[#2F2F8C] text-2xl lg:text-4xl text-center lg:text-start">
          Frequently asked questions
        </h3>
        <p className="text-center my-5">
          We believe that diverse perspectives drive innovation, and we strive
          to create an{" "}
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="lg:w-[80%] w-[90%] flex flex-col text-base font-semibold font-montserrat text-[#101828]">
          <div className="my-4 py-2 px-4">
            <div className="flex justify-between items-center">
              <p className=" mr-3 lg:mr-0">
                How long is the internship program?
              </p>
              <button className="bg-[transparent] border-none " onClick={FAQ1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#202054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`w-full font-normal animate-slide-in-up pt-2 ${
                clicked1 ? "block" : "hidden"
              } `}>
              Lorem, ipsum dolor.
            </div>
          </div>

          <div className="my-4 py-2 px-4">
            <div className="flex justify-between items-center">
              <p className=" mr-3 lg:mr-0">
                Can I apply for more than one internship position?
              </p>
              <button className="bg-[transparent] border-none " onClick={FAQ2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#202054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`w-full font-normal animate-slide-in-up pt-2 ${
                clicked2 ? "block" : "hidden"
              } `}>
              Lorem, ipsum dolor.
            </div>
          </div>

          <div className="my-4 py-2 px-4">
            <div className="flex justify-between items-center">
              <p className=" mr-3 lg:mr-0">Are remote internships available?</p>
              <button className="bg-[transparent] border-none " onClick={FAQ3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#202054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`w-full font-normal animate-slide-in-up pt-2 ${
                clicked3 ? "block" : "hidden"
              } `}>
              Lorem, ipsum dolor.
            </div>
          </div>

          <div className="my-4 py-2 px-4">
            <div className="flex justify-between items-center">
              <p className=" mr-3 lg:mr-0">
                How can I stay updated on internship opportunities and company
                news?
              </p>
              <button className="bg-[transparent] border-none " onClick={FAQ4}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#202054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`w-full font-normal animate-slide-in-up pt-2 ${
                clicked4 ? "block" : "hidden"
              } `}>
              Lorem, ipsum dolor.
            </div>
          </div>

          <div className="my-4 py-2 px-4">
            <div className="flex justify-between items-center">
              <p className=" mr-3 lg:mr-0">
                What happens after I submit my application?
              </p>
              <button className="bg-[transparent] border-none " onClick={FAQ5}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#202054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`w-full font-normal animate-slide-in-up pt-2 ${
                clicked5 ? "block" : "hidden"
              } `}>
              Lorem, ipsum dolor.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
