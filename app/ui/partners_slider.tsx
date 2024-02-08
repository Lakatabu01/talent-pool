"use client";
import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
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
          breakpoint: 600,
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
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3em",
        }}>
        <Slider {...settings}>
          <div className="bg-[#747474] h-8"></div>
          <div className="bg-[black] h-8"></div>
          <div className="bg-[#747474] h-8"></div>
          <div className="bg-[black] h-8"></div>
          <div className="bg-[#747474] h-8"></div>
        </Slider>
      </div>
    );
  }
}
