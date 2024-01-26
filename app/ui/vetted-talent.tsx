"use client";

import DefaultButton from "./default_button";
import Image from "next/image";
import layer from "../assets/icons/layer.svg";
import avatar1 from "../assets/images/Avatar1.png";
import avatar2 from "../assets/images/Avatar2.png";
import avatar3 from "../assets/images/Avatar3.png";
import { useState } from "react";

const VettedTalent = () => {
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
    <section className="w-full ">
      <div className="w-full flex justify-center font-Montserrat bg-[#F4F4F4]">
        <div className="w-[60%] my-24">
          <h2 className="text-center text-[#2F2F8C] font-semibold text-4xl">
            Become a vetted talent today
          </h2>
          <p className="py-6 text-center text-[#484747] text-base">
            Unlock new opportunities by becoming a vetted talent with us. Join
            today to showcase your skills, connect with leading companies, and
            elevate your career to new heights. Embrace a future where your
            potential meets endless possibilities.
          </p>
          <div className="flex w-full justify-center">
            <DefaultButton buttonName="Become a Talent" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[90%] pt-24">
          <div>
            <ul className="list-disc pl-4">
              <li className="text-[#2F2F8C] text-lg">How it works</li>
            </ul>

            <h2 className="text-4xl my-4">
              Navigating Success: Our <br /> Simple Steps
            </h2>
          </div>

          <div className="font-montserrat flex pt-14">
            <div className="w-[50%]  border border-[#A09D9D] border-dashed border-r-0 border-b-0 border-l-0">
              <div className="w-[80%] -mt-3 ">
                <div className="rounded-full bg-[#4D4DB2] flex justify-center items-center p-2 w-6 h-6 text-white text-xs">
                  1
                </div>
                <h2 className="py-6 font-semibold  text-[28px]">
                  Vetted Proffessionals
                </h2>
                <p className="font-semibold text-base">
                  We ensure that only the best talents make it to our platform.
                  Your skills are evaluated by industry experts, giving you the
                  credibility you deserve.
                </p>
              </div>
            </div>
            <div className="w-[50%] border  border-[#A09D9D] border-dashed border-r-0 border-b-0 border-l-0">
              <div className="w-[80%] -mt-3 ">
                <div className="rounded-full bg-[#4D4DB2] flex justify-center items-center p-2 w-6 h-6 text-white text-xs">
                  2
                </div>
                <h2 className="py-6 font-semibold  text-[28px]">
                  Vetted Proffessionals
                </h2>
                <p className="font-semibold text-base">
                  We ensure that only the best talents make it to our platform.
                  Your skills are evaluated by industry experts, giving you the
                  credibility you deserve.
                </p>
              </div>
            </div>
          </div>

          <div className="font-montserrat flex pt-14">
            <div className="w-[50%]  border border-[#A09D9D] border-dashed border-r-0 border-b-0 border-l-0">
              <div className="w-[80%] -mt-3 ">
                <div className="rounded-full bg-[#4D4DB2] flex justify-center items-center p-2 w-6 h-6 text-white text-xs">
                  3
                </div>
                <h2 className="py-6 font-semibold  text-[28px]">
                  Vetted Proffessionals
                </h2>
                <p className="font-semibold text-base">
                  We ensure that only the best talents make it to our platform.
                  Your skills are evaluated by industry experts, giving you the
                  credibility you deserve.
                </p>
              </div>
            </div>
            <div className="w-[50%] border  border-[#A09D9D] border-dashed border-r-0 border-b-0 border-l-0">
              <div className="w-[80%] -mt-3 ">
                <div className="rounded-full bg-[#4D4DB2] flex justify-center items-center p-2 w-6 h-6 text-white text-xs">
                  4
                </div>
                <h2 className="py-6 font-semibold  text-[28px]">
                  Vetted Proffessionals
                </h2>
                <p className="font-semibold text-base">
                  We ensure that only the best talents make it to our platform.
                  Your skills are evaluated by industry experts, giving you the
                  credibility you deserve.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full my-32">
            <div>
              <ul className="list-disc pl-4">
                <li className="text-[#2F2F8C] text-lg">Proven Solutions</li>
              </ul>

              <h2 className="text-4xl my-4">
                Explore Profesionals In The <br /> Most Coveted Disciplines
              </h2>
            </div>

            <div className="flex w-full my-16 justify-between ">
              <div className="w-[23%] rounded-xl shadow-around border py-6 flex flex-col items-center px-4">
                <div className="bg-[#2F2F8C] p-3 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none">
                    <path
                      d="M0.623535 2.0625C0.623535 1.51549 0.840834 0.990888 1.22763 0.604095C1.61442 0.217301 2.13903 2.29097e-06 2.68604 2.29097e-06H23.311C23.7981 -0.000723361 24.2697 0.170957 24.6424 0.484636C25.015 0.798316 25.2646 1.23375 25.3469 1.71382C25.4293 2.19389 25.339 2.68761 25.0923 3.10753C24.8455 3.52746 24.458 3.84649 23.9985 4.00813V13.75C23.9985 14.844 23.5639 15.8932 22.7903 16.6668C22.0168 17.4404 20.9676 17.875 19.8735 17.875H13.686V20.625H17.811C17.9934 20.625 18.1682 20.6974 18.2972 20.8264C18.4261 20.9553 18.4985 21.1302 18.4985 21.3125C18.4985 21.4948 18.4261 21.6697 18.2972 21.7986C18.1682 21.9276 17.9934 22 17.811 22H8.18603C8.0037 22 7.82883 21.9276 7.6999 21.7986C7.57097 21.6697 7.49853 21.4948 7.49853 21.3125C7.49853 21.1302 7.57097 20.9553 7.6999 20.8264C7.82883 20.6974 8.0037 20.625 8.18603 20.625H12.311V17.875H6.12353C5.02952 17.875 3.98031 17.4404 3.20672 16.6668C2.43313 15.8932 1.99854 14.844 1.99854 13.75V4.00813C1.59624 3.86589 1.24796 3.60239 1.0017 3.25393C0.755436 2.90546 0.623312 2.4892 0.623535 2.0625ZM9.56103 6.875C9.3787 6.875 9.20383 6.94743 9.0749 7.07637C8.94597 7.2053 8.87353 7.38017 8.87353 7.5625C8.87353 7.74484 8.94597 7.91971 9.0749 8.04864C9.20383 8.17757 9.3787 8.25 9.56103 8.25H16.436C16.6184 8.25 16.7932 8.17757 16.9222 8.04864C17.0511 7.91971 17.1235 7.74484 17.1235 7.5625C17.1235 7.38017 17.0511 7.2053 16.9222 7.07637C16.7932 6.94743 16.6184 6.875 16.436 6.875H9.56103ZM7.49853 10.3125C7.49853 10.4948 7.57097 10.6697 7.6999 10.7986C7.82883 10.9276 8.0037 11 8.18603 11H17.811C17.9934 11 18.1682 10.9276 18.2972 10.7986C18.4261 10.6697 18.4985 10.4948 18.4985 10.3125C18.4985 10.1302 18.4261 9.9553 18.2972 9.82636C18.1682 9.69743 17.9934 9.625 17.811 9.625H8.18603C8.0037 9.625 7.82883 9.69743 7.6999 9.82636C7.57097 9.9553 7.49853 10.1302 7.49853 10.3125ZM9.56103 12.375C9.3787 12.375 9.20383 12.4474 9.0749 12.5764C8.94597 12.7053 8.87353 12.8802 8.87353 13.0625C8.87353 13.2448 8.94597 13.4197 9.0749 13.5486C9.20383 13.6776 9.3787 13.75 9.56103 13.75H16.436C16.6184 13.75 16.7932 13.6776 16.9222 13.5486C17.0511 13.4197 17.1235 13.2448 17.1235 13.0625C17.1235 12.8802 17.0511 12.7053 16.9222 12.5764C16.7932 12.4474 16.6184 12.375 16.436 12.375H9.56103Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="py-3 font-semibold text-xl text-[#353535] text-center">
                  Product Management
                </h4>
                <p className="text-base text-[#484747] text-center">
                  Take your business to the highest level with our managing
                  experts
                </p>
              </div>
              <div className="w-[23%] rounded-xl shadow-around border py-6 flex flex-col items-center px-4">
                <div className="bg-[#2F2F8C] p-3 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none">
                    <path
                      d="M0.623535 2.0625C0.623535 1.51549 0.840834 0.990888 1.22763 0.604095C1.61442 0.217301 2.13903 2.29097e-06 2.68604 2.29097e-06H23.311C23.7981 -0.000723361 24.2697 0.170957 24.6424 0.484636C25.015 0.798316 25.2646 1.23375 25.3469 1.71382C25.4293 2.19389 25.339 2.68761 25.0923 3.10753C24.8455 3.52746 24.458 3.84649 23.9985 4.00813V13.75C23.9985 14.844 23.5639 15.8932 22.7903 16.6668C22.0168 17.4404 20.9676 17.875 19.8735 17.875H13.686V20.625H17.811C17.9934 20.625 18.1682 20.6974 18.2972 20.8264C18.4261 20.9553 18.4985 21.1302 18.4985 21.3125C18.4985 21.4948 18.4261 21.6697 18.2972 21.7986C18.1682 21.9276 17.9934 22 17.811 22H8.18603C8.0037 22 7.82883 21.9276 7.6999 21.7986C7.57097 21.6697 7.49853 21.4948 7.49853 21.3125C7.49853 21.1302 7.57097 20.9553 7.6999 20.8264C7.82883 20.6974 8.0037 20.625 8.18603 20.625H12.311V17.875H6.12353C5.02952 17.875 3.98031 17.4404 3.20672 16.6668C2.43313 15.8932 1.99854 14.844 1.99854 13.75V4.00813C1.59624 3.86589 1.24796 3.60239 1.0017 3.25393C0.755436 2.90546 0.623312 2.4892 0.623535 2.0625ZM9.56103 6.875C9.3787 6.875 9.20383 6.94743 9.0749 7.07637C8.94597 7.2053 8.87353 7.38017 8.87353 7.5625C8.87353 7.74484 8.94597 7.91971 9.0749 8.04864C9.20383 8.17757 9.3787 8.25 9.56103 8.25H16.436C16.6184 8.25 16.7932 8.17757 16.9222 8.04864C17.0511 7.91971 17.1235 7.74484 17.1235 7.5625C17.1235 7.38017 17.0511 7.2053 16.9222 7.07637C16.7932 6.94743 16.6184 6.875 16.436 6.875H9.56103ZM7.49853 10.3125C7.49853 10.4948 7.57097 10.6697 7.6999 10.7986C7.82883 10.9276 8.0037 11 8.18603 11H17.811C17.9934 11 18.1682 10.9276 18.2972 10.7986C18.4261 10.6697 18.4985 10.4948 18.4985 10.3125C18.4985 10.1302 18.4261 9.9553 18.2972 9.82636C18.1682 9.69743 17.9934 9.625 17.811 9.625H8.18603C8.0037 9.625 7.82883 9.69743 7.6999 9.82636C7.57097 9.9553 7.49853 10.1302 7.49853 10.3125ZM9.56103 12.375C9.3787 12.375 9.20383 12.4474 9.0749 12.5764C8.94597 12.7053 8.87353 12.8802 8.87353 13.0625C8.87353 13.2448 8.94597 13.4197 9.0749 13.5486C9.20383 13.6776 9.3787 13.75 9.56103 13.75H16.436C16.6184 13.75 16.7932 13.6776 16.9222 13.5486C17.0511 13.4197 17.1235 13.2448 17.1235 13.0625C17.1235 12.8802 17.0511 12.7053 16.9222 12.5764C16.7932 12.4474 16.6184 12.375 16.436 12.375H9.56103Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="py-3 font-semibold text-xl text-[#353535] text-center">
                  Product Management
                </h4>
                <p className="text-base text-[#484747] text-center">
                  Take your business to the highest level with our managing
                  experts
                </p>
              </div>
              <div className="w-[23%] rounded-xl shadow-around border py-6 flex flex-col items-center px-4">
                <div className="bg-[#2F2F8C] p-3 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none">
                    <path
                      d="M0.623535 2.0625C0.623535 1.51549 0.840834 0.990888 1.22763 0.604095C1.61442 0.217301 2.13903 2.29097e-06 2.68604 2.29097e-06H23.311C23.7981 -0.000723361 24.2697 0.170957 24.6424 0.484636C25.015 0.798316 25.2646 1.23375 25.3469 1.71382C25.4293 2.19389 25.339 2.68761 25.0923 3.10753C24.8455 3.52746 24.458 3.84649 23.9985 4.00813V13.75C23.9985 14.844 23.5639 15.8932 22.7903 16.6668C22.0168 17.4404 20.9676 17.875 19.8735 17.875H13.686V20.625H17.811C17.9934 20.625 18.1682 20.6974 18.2972 20.8264C18.4261 20.9553 18.4985 21.1302 18.4985 21.3125C18.4985 21.4948 18.4261 21.6697 18.2972 21.7986C18.1682 21.9276 17.9934 22 17.811 22H8.18603C8.0037 22 7.82883 21.9276 7.6999 21.7986C7.57097 21.6697 7.49853 21.4948 7.49853 21.3125C7.49853 21.1302 7.57097 20.9553 7.6999 20.8264C7.82883 20.6974 8.0037 20.625 8.18603 20.625H12.311V17.875H6.12353C5.02952 17.875 3.98031 17.4404 3.20672 16.6668C2.43313 15.8932 1.99854 14.844 1.99854 13.75V4.00813C1.59624 3.86589 1.24796 3.60239 1.0017 3.25393C0.755436 2.90546 0.623312 2.4892 0.623535 2.0625ZM9.56103 6.875C9.3787 6.875 9.20383 6.94743 9.0749 7.07637C8.94597 7.2053 8.87353 7.38017 8.87353 7.5625C8.87353 7.74484 8.94597 7.91971 9.0749 8.04864C9.20383 8.17757 9.3787 8.25 9.56103 8.25H16.436C16.6184 8.25 16.7932 8.17757 16.9222 8.04864C17.0511 7.91971 17.1235 7.74484 17.1235 7.5625C17.1235 7.38017 17.0511 7.2053 16.9222 7.07637C16.7932 6.94743 16.6184 6.875 16.436 6.875H9.56103ZM7.49853 10.3125C7.49853 10.4948 7.57097 10.6697 7.6999 10.7986C7.82883 10.9276 8.0037 11 8.18603 11H17.811C17.9934 11 18.1682 10.9276 18.2972 10.7986C18.4261 10.6697 18.4985 10.4948 18.4985 10.3125C18.4985 10.1302 18.4261 9.9553 18.2972 9.82636C18.1682 9.69743 17.9934 9.625 17.811 9.625H8.18603C8.0037 9.625 7.82883 9.69743 7.6999 9.82636C7.57097 9.9553 7.49853 10.1302 7.49853 10.3125ZM9.56103 12.375C9.3787 12.375 9.20383 12.4474 9.0749 12.5764C8.94597 12.7053 8.87353 12.8802 8.87353 13.0625C8.87353 13.2448 8.94597 13.4197 9.0749 13.5486C9.20383 13.6776 9.3787 13.75 9.56103 13.75H16.436C16.6184 13.75 16.7932 13.6776 16.9222 13.5486C17.0511 13.4197 17.1235 13.2448 17.1235 13.0625C17.1235 12.8802 17.0511 12.7053 16.9222 12.5764C16.7932 12.4474 16.6184 12.375 16.436 12.375H9.56103Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="py-3 font-semibold text-xl text-[#353535] text-center">
                  Product Management
                </h4>
                <p className="text-base text-[#484747] text-center">
                  Take your business to the highest level with our managing
                  experts
                </p>
              </div>
              <div className="w-[23%] rounded-xl  shadow-around border py-6 flex flex-col items-center px-4">
                <div className="bg-[#2F2F8C] p-3 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none">
                    <path
                      d="M0.623535 2.0625C0.623535 1.51549 0.840834 0.990888 1.22763 0.604095C1.61442 0.217301 2.13903 2.29097e-06 2.68604 2.29097e-06H23.311C23.7981 -0.000723361 24.2697 0.170957 24.6424 0.484636C25.015 0.798316 25.2646 1.23375 25.3469 1.71382C25.4293 2.19389 25.339 2.68761 25.0923 3.10753C24.8455 3.52746 24.458 3.84649 23.9985 4.00813V13.75C23.9985 14.844 23.5639 15.8932 22.7903 16.6668C22.0168 17.4404 20.9676 17.875 19.8735 17.875H13.686V20.625H17.811C17.9934 20.625 18.1682 20.6974 18.2972 20.8264C18.4261 20.9553 18.4985 21.1302 18.4985 21.3125C18.4985 21.4948 18.4261 21.6697 18.2972 21.7986C18.1682 21.9276 17.9934 22 17.811 22H8.18603C8.0037 22 7.82883 21.9276 7.6999 21.7986C7.57097 21.6697 7.49853 21.4948 7.49853 21.3125C7.49853 21.1302 7.57097 20.9553 7.6999 20.8264C7.82883 20.6974 8.0037 20.625 8.18603 20.625H12.311V17.875H6.12353C5.02952 17.875 3.98031 17.4404 3.20672 16.6668C2.43313 15.8932 1.99854 14.844 1.99854 13.75V4.00813C1.59624 3.86589 1.24796 3.60239 1.0017 3.25393C0.755436 2.90546 0.623312 2.4892 0.623535 2.0625ZM9.56103 6.875C9.3787 6.875 9.20383 6.94743 9.0749 7.07637C8.94597 7.2053 8.87353 7.38017 8.87353 7.5625C8.87353 7.74484 8.94597 7.91971 9.0749 8.04864C9.20383 8.17757 9.3787 8.25 9.56103 8.25H16.436C16.6184 8.25 16.7932 8.17757 16.9222 8.04864C17.0511 7.91971 17.1235 7.74484 17.1235 7.5625C17.1235 7.38017 17.0511 7.2053 16.9222 7.07637C16.7932 6.94743 16.6184 6.875 16.436 6.875H9.56103ZM7.49853 10.3125C7.49853 10.4948 7.57097 10.6697 7.6999 10.7986C7.82883 10.9276 8.0037 11 8.18603 11H17.811C17.9934 11 18.1682 10.9276 18.2972 10.7986C18.4261 10.6697 18.4985 10.4948 18.4985 10.3125C18.4985 10.1302 18.4261 9.9553 18.2972 9.82636C18.1682 9.69743 17.9934 9.625 17.811 9.625H8.18603C8.0037 9.625 7.82883 9.69743 7.6999 9.82636C7.57097 9.9553 7.49853 10.1302 7.49853 10.3125ZM9.56103 12.375C9.3787 12.375 9.20383 12.4474 9.0749 12.5764C8.94597 12.7053 8.87353 12.8802 8.87353 13.0625C8.87353 13.2448 8.94597 13.4197 9.0749 13.5486C9.20383 13.6776 9.3787 13.75 9.56103 13.75H16.436C16.6184 13.75 16.7932 13.6776 16.9222 13.5486C17.0511 13.4197 17.1235 13.2448 17.1235 13.0625C17.1235 12.8802 17.0511 12.7053 16.9222 12.5764C16.7932 12.4474 16.6184 12.375 16.436 12.375H9.56103Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="py-3 font-semibold text-xl text-[#353535] text-center">
                  Product Management
                </h4>
                <p className="text-base text-[#484747] text-center">
                  Take your business to the highest level with our managing
                  experts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center  bg-[#F4F4F4] pb-32">
        <div className="w-[90%] pt-20">
          <div>
            <ul className="list-disc pl-4">
              <li className="text-[#2F2F8C] text-lg">Testimonials</li>
            </ul>

            <h2 className="text-4xl my-4">
              Client Success in Their Own <br /> Words
            </h2>
          </div>
        </div>

        <div className="w-[94%] ml-12 flex justify-between ">
          <div className="w-[30%]  p-4  border-[#4D4DB2] border-t-0 border-l-0 border-r-2 border-b-2 border-dashed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none">
              <path
                d="M10.554 1.74354C6.61697 4.26354 4.64897 7.30053 4.64897 10.8505C4.64897 11.9555 4.84197 12.5075 5.22597 12.5075L5.62197 12.4005C5.93397 12.2805 6.18497 12.2205 6.37797 12.2205C7.50497 12.2205 8.44797 12.6305 9.20297 13.4505C9.95897 14.2705 10.337 15.2805 10.337 16.4865C10.337 17.6435 9.92697 18.6265 9.11197 19.4335C8.29597 20.2405 7.31197 20.6435 6.15997 20.6435C4.55197 20.6435 3.22497 19.9835 2.17997 18.6605C1.13697 17.3405 0.615967 15.6805 0.615967 13.6835C0.615967 11.4235 1.05797 9.35653 1.94597 7.48054C2.83597 5.60554 4.18997 3.91054 6.01397 2.39554C7.83797 0.881535 9.00197 0.123535 9.50597 0.123535C9.84197 0.123535 10.118 0.285535 10.334 0.609535C10.55 0.932535 10.658 1.21454 10.658 1.45454L10.551 1.74254L10.554 1.74354ZM23.514 1.74354C19.577 4.26354 17.61 7.29954 17.61 10.8515C17.61 11.9565 17.803 12.5085 18.187 12.5085L18.583 12.4015C18.895 12.2815 19.146 12.2215 19.339 12.2215C20.442 12.2215 21.379 12.6315 22.146 13.4515C22.916 14.2715 23.298 15.2815 23.298 16.4875C23.298 17.6445 22.888 18.6275 22.073 19.4345C21.257 20.2415 20.273 20.6445 19.121 20.6445C17.513 20.6445 16.186 19.9845 15.141 18.6615C14.098 17.3415 13.577 15.6815 13.577 13.6845C13.577 11.4005 14.025 9.31454 14.927 7.42853C15.827 5.54153 17.182 3.85154 18.994 2.36154C20.809 0.870535 21.966 0.124536 22.469 0.124536C22.806 0.124536 23.082 0.286535 23.299 0.610535C23.514 0.934535 23.622 1.21654 23.622 1.45654L23.514 1.74354Z"
                fill="black"
              />
            </svg>
            <div className="my-6">
              <p className="text-base">
                My internship at Axia Africa has been nothing short of
                transformative. From day one, I was thrust into real projects,
                applying the skills I learned in school to solve actual
                challenges. The mentorship I received was invaluable, guiding me
                through complex coding scenarios and helping me grow as a
                developer.
              </p>
            </div>
            <div className="flex mb-3">
              <div className="w-8 bg-blue-900 p-1 rounded-full mr-4">
                <Image src={layer} alt="layer icon" width="100" height="100" />
              </div>
              <div className="text-xl font-semibold text-[#000]">
                Obanijesu Ropola
              </div>
            </div>
          </div>
          <div className="w-[30%]  p-4  border-[#4D4DB2] border-t-0 border-l-0 border-r-2 border-b-2 border-dashed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none">
              <path
                d="M10.554 1.74354C6.61697 4.26354 4.64897 7.30053 4.64897 10.8505C4.64897 11.9555 4.84197 12.5075 5.22597 12.5075L5.62197 12.4005C5.93397 12.2805 6.18497 12.2205 6.37797 12.2205C7.50497 12.2205 8.44797 12.6305 9.20297 13.4505C9.95897 14.2705 10.337 15.2805 10.337 16.4865C10.337 17.6435 9.92697 18.6265 9.11197 19.4335C8.29597 20.2405 7.31197 20.6435 6.15997 20.6435C4.55197 20.6435 3.22497 19.9835 2.17997 18.6605C1.13697 17.3405 0.615967 15.6805 0.615967 13.6835C0.615967 11.4235 1.05797 9.35653 1.94597 7.48054C2.83597 5.60554 4.18997 3.91054 6.01397 2.39554C7.83797 0.881535 9.00197 0.123535 9.50597 0.123535C9.84197 0.123535 10.118 0.285535 10.334 0.609535C10.55 0.932535 10.658 1.21454 10.658 1.45454L10.551 1.74254L10.554 1.74354ZM23.514 1.74354C19.577 4.26354 17.61 7.29954 17.61 10.8515C17.61 11.9565 17.803 12.5085 18.187 12.5085L18.583 12.4015C18.895 12.2815 19.146 12.2215 19.339 12.2215C20.442 12.2215 21.379 12.6315 22.146 13.4515C22.916 14.2715 23.298 15.2815 23.298 16.4875C23.298 17.6445 22.888 18.6275 22.073 19.4345C21.257 20.2415 20.273 20.6445 19.121 20.6445C17.513 20.6445 16.186 19.9845 15.141 18.6615C14.098 17.3415 13.577 15.6815 13.577 13.6845C13.577 11.4005 14.025 9.31454 14.927 7.42853C15.827 5.54153 17.182 3.85154 18.994 2.36154C20.809 0.870535 21.966 0.124536 22.469 0.124536C22.806 0.124536 23.082 0.286535 23.299 0.610535C23.514 0.934535 23.622 1.21654 23.622 1.45654L23.514 1.74354Z"
                fill="black"
              />
            </svg>
            <div className="my-6">
              <p className="text-base">
                My internship at Axia Africa has been nothing short of
                transformative. From day one, I was thrust into real projects,
                applying the skills I learned in school to solve actual
                challenges. The mentorship I received was invaluable, guiding me
                through complex coding scenarios and helping me grow as a
                developer.
              </p>
            </div>
            <div className="flex mb-3">
              <div className="w-8 bg-blue-900 p-1 rounded-full mr-4">
                <Image src={layer} alt="layer icon" width="100" height="100" />
              </div>
              <div className="text-xl font-semibold text-[#000]">
                Obanijesu Ropola
              </div>
            </div>
          </div>
          <div className="w-[30%]  p-4  border-[#4D4DB2] border-t-0 border-l-0 border-r-2 border-b-2 border-dashed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none">
              <path
                d="M10.554 1.74354C6.61697 4.26354 4.64897 7.30053 4.64897 10.8505C4.64897 11.9555 4.84197 12.5075 5.22597 12.5075L5.62197 12.4005C5.93397 12.2805 6.18497 12.2205 6.37797 12.2205C7.50497 12.2205 8.44797 12.6305 9.20297 13.4505C9.95897 14.2705 10.337 15.2805 10.337 16.4865C10.337 17.6435 9.92697 18.6265 9.11197 19.4335C8.29597 20.2405 7.31197 20.6435 6.15997 20.6435C4.55197 20.6435 3.22497 19.9835 2.17997 18.6605C1.13697 17.3405 0.615967 15.6805 0.615967 13.6835C0.615967 11.4235 1.05797 9.35653 1.94597 7.48054C2.83597 5.60554 4.18997 3.91054 6.01397 2.39554C7.83797 0.881535 9.00197 0.123535 9.50597 0.123535C9.84197 0.123535 10.118 0.285535 10.334 0.609535C10.55 0.932535 10.658 1.21454 10.658 1.45454L10.551 1.74254L10.554 1.74354ZM23.514 1.74354C19.577 4.26354 17.61 7.29954 17.61 10.8515C17.61 11.9565 17.803 12.5085 18.187 12.5085L18.583 12.4015C18.895 12.2815 19.146 12.2215 19.339 12.2215C20.442 12.2215 21.379 12.6315 22.146 13.4515C22.916 14.2715 23.298 15.2815 23.298 16.4875C23.298 17.6445 22.888 18.6275 22.073 19.4345C21.257 20.2415 20.273 20.6445 19.121 20.6445C17.513 20.6445 16.186 19.9845 15.141 18.6615C14.098 17.3415 13.577 15.6815 13.577 13.6845C13.577 11.4005 14.025 9.31454 14.927 7.42853C15.827 5.54153 17.182 3.85154 18.994 2.36154C20.809 0.870535 21.966 0.124536 22.469 0.124536C22.806 0.124536 23.082 0.286535 23.299 0.610535C23.514 0.934535 23.622 1.21654 23.622 1.45654L23.514 1.74354Z"
                fill="black"
              />
            </svg>
            <div className="my-6">
              <p className="text-base">
                My internship at Axia Africa has been nothing short of
                transformative. From day one, I was thrust into real projects,
                applying the skills I learned in school to solve actual
                challenges. The mentorship I received was invaluable, guiding me
                through complex coding scenarios and helping me grow as a
                developer.
              </p>
            </div>
            <div className="flex mb-3">
              <div className="w-8 bg-blue-900 p-1 rounded-full mr-4">
                <Image src={layer} alt="layer icon" width="100" height="100" />
              </div>
              <div className="text-xl font-semibold text-[#000]">
                Obanijesu Ropola
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] flex flex-col items-center mt-32 mb-20 mx-auto">
        <h3 className="text-[#2F2F8C] text-4xl">Frequently asked questions</h3>
        <p className="text-center my-5">
          We believe that diverse perspectives drive innovation, and we strive
          to create an{" "}
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[80%] flex flex-col text-base font-semibold font-montserrat text-[#101828]">
          <div className="my-4 py-2 px-4">
            <div className="flex justify-between items-center">
              <p>How long is the internship program?</p>
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
              className={`w-full  animate-slide-in-up pt-2 ${
                clicked1 ? "block" : "hidden"
              } `}>
              Lorem, ipsum dolor.
            </div>
          </div>

          <div className="my-4 py-2 px-4">
            <div className="flex justify-between items-center">
              <p>Can I apply for more than one internship position?</p>
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
              className={`w-full  animate-slide-in-up pt-2 ${
                clicked2 ? "block" : "hidden"
              } `}>
              Lorem, ipsum dolor.
            </div>
          </div>

          <div className="my-4 py-2 px-4">
            <div className="flex justify-between items-center">
              <p>Are remote internships available?</p>
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
              className={`w-full  animate-slide-in-up pt-2 ${
                clicked3 ? "block" : "hidden"
              } `}>
              Lorem, ipsum dolor.
            </div>
          </div>

          <div className="my-4 py-2 px-4">
            <div className="flex justify-between items-center">
              <p>
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
              className={`w-full  animate-slide-in-up pt-2 ${
                clicked4 ? "block" : "hidden"
              } `}>
              Lorem, ipsum dolor.
            </div>
          </div>

          <div className="my-4 py-2 px-4">
            <div className="flex justify-between items-center">
              <p>What happens after I submit my application?</p>
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
              className={`w-full  animate-slide-in-up pt-2 ${
                clicked5 ? "block" : "hidden"
              } `}>
              Lorem, ipsum dolor.
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center bg-[#F9FAFB]">
        <div className="w-[50%] my-10">
          <div className="w-full flex justify-center mt-14">
            <div className="flex justify-center px-4">
              <Image src={avatar1} alt="image of man" />
              <Image
                className="-ml-4"
                src={avatar2}
                alt="image of smiling woman"
              />
              <Image
                className="-ml-4"
                src={avatar3}
                alt="image of smiling woman"
              />
            </div>
          </div>

          <h3 className="text-[#2F2F8C] text-4xl text-center py-8">
            Unleash your talent now and begin your internship role Today
          </h3>

          <div className="w-full flex justify-center">
            <DefaultButton buttonName="Register" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VettedTalent;
