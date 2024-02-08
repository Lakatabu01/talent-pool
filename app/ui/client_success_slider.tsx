"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import layer from "../assets/icons/layer.svg";
import Image from "next/image";

export default class SuccessSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 830,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div
        className="lg:hidden"
        style={{
          width: "82vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3em",
          // border: "2px solid red",
        }}>
        <Slider {...settings}>
          <div className="p-4 border-[#4D4DB2] border-t-0 border-l-0 border-r-2 border-b-2 border-dashed">
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
              <div className="w-8 bg-blue-900 p-1 rounded-full mr-4 h-fit">
                <Image src={layer} alt="layer icon" width="100" height="100" />
              </div>
              <div className="text-xl font-semibold text-[#000]">
                Obanijesu Ropola
              </div>
            </div>
          </div>
          <div className="p-4  border-[#4D4DB2] border-t-0 border-l-0 border-r-2 border-b-2 border-dashed">
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
              <div className="w-8 bg-blue-900 p-1 rounded-full mr-4 h-fit">
                <Image src={layer} alt="layer icon" width="100" height="100" />
              </div>
              <div className="text-xl font-semibold text-[#000]">
                Obanijesu Ropola
              </div>
            </div>
          </div>
          <div className="p-4  border-[#4D4DB2] border-t-0 border-l-0 border-r-2 border-b-2 border-dashed">
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
              <div className="w-8 bg-blue-900 p-1 rounded-full mr-4 h-fit">
                <Image src={layer} alt="layer icon" width="100" height="100" />
              </div>
              <div className="text-xl font-semibold text-[#000]">
                Obanijesu Ropola
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
