import Unleash from "./unleash";
import DefaultButton from "./default_button";
import { TransparentButton } from "./default_button";
import dashes from "../public/assets/icons/dashes.svg";
import Image from "next/image";

function OurInfo() {
  return (
    <main className=" w-full pt-24">
      <div className=" bg-gradient-to-b from-[#A1A1FF77] via-[#9E9EF877] to-[#fff] pb-20 relative">
        <div className="flex w-full justify-end  ">
          <div className="flex flex-col justify-end">
            <div className="bg-[#2F2F8C] p-2 rounded rotate-45 lg:mr-20 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="lg:w-6 lg:h-6 w-3 h-3 text-white">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
            </div>
          </div>
          <div>
            <svg
              className="w-14 h-14 lg:w-24 lg:h-24"
              xmlns="http://www.w3.org/2000/svg"
              width="116"
              height="147"
              viewBox="0 0 116 147"
              fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M116.76 94.0476C117.01 93.2736 117.43 92.1618 117.239 90.9797C117.112 90.1886 116.522 89.5591 116.332 88.7252C116.041 87.4472 116.357 86.0017 116.09 84.7883C115.845 83.6686 115.373 82.7793 115.116 81.8864C115.024 79.8065 116.853 77.7519 119.197 77.3014C121.541 76.8514 123.518 78.1745 123.609 80.2548C123.476 80.9836 123.164 81.792 123.247 82.6517C123.357 83.7931 124.076 84.8086 124.301 85.9947C124.549 87.2969 124.312 88.6822 124.507 89.8452C124.774 91.4386 125.142 92.7269 125.173 93.8062C124.839 95.9335 122.683 97.7148 120.361 97.7814C118.04 97.848 116.426 96.175 116.76 94.0476Z"
                fill="#2F2F8C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M69.0945 6.67207C69.3451 5.89808 69.7646 4.7863 69.5741 3.60414C69.4466 2.81305 68.8566 2.1836 68.6668 1.34962C68.3761 0.0716597 68.6916 -1.37387 68.4255 -2.58722C68.1799 -3.70699 67.708 -4.59626 67.4507 -5.48917C67.3593 -7.56907 69.1879 -9.62367 71.5317 -10.0741C73.8758 -10.5242 75.8528 -9.20105 75.9444 -7.12071C75.8107 -6.39199 75.4992 -5.58351 75.5821 -4.72387C75.6922 -3.58248 76.4111 -2.56693 76.6364 -1.38085C76.8838 -0.0786395 76.6475 1.30667 76.8423 2.46961C77.1093 4.06305 77.4775 5.35133 77.5081 6.43063C77.1742 8.55799 75.0181 10.3392 72.6963 10.4059C70.3745 10.4724 68.7606 8.79942 69.0945 6.67207Z"
                fill="#2F2F8C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M70.2501 94.829C70.8845 94.1918 71.841 93.3035 72.3735 92.0691C72.7298 91.243 72.6414 90.3633 72.975 89.4672C73.486 88.0942 74.5547 86.8345 75.0475 85.5354C75.5023 84.3365 75.6527 83.2583 75.9686 82.2743C77.0911 80.2135 79.6606 79.0516 81.703 79.6815C83.7453 80.3121 84.492 82.4968 83.3695 84.5582C82.8501 85.2047 82.1496 85.8477 81.72 86.72C81.1497 87.8782 81.1149 89.1915 80.6067 90.4456C80.0487 91.8224 79.0748 93.0596 78.5566 94.2774C77.8466 95.9459 77.3885 97.3642 76.7933 98.4259C75.3199 100.339 72.6577 101.087 70.852 100.094C69.0464 99.1013 68.7767 96.7422 70.2501 94.829Z"
                fill="#2F2F8C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61.9936 68.7696C61.1589 68.7036 59.9725 68.5545 58.5775 68.9757C57.644 69.2576 56.7989 69.9269 55.8032 70.2744C54.2774 70.8071 52.6866 70.8227 51.24 71.3193C49.905 71.7776 48.7868 72.3937 47.7094 72.8152C45.3062 73.3342 43.3343 72.0995 43.3092 70.0593C43.2846 68.0188 45.2155 65.9409 47.6192 65.4216C48.4265 65.3906 49.2879 65.5049 50.2907 65.2492C51.622 64.9098 52.9367 64.0423 54.3435 63.5885C55.888 63.0903 57.4264 63.0153 58.8002 62.5941C60.6826 62.017 62.2364 61.4118 63.48 61.1577C65.8485 61.016 67.4384 62.6064 67.0282 64.7069C66.618 66.8075 64.3621 68.6279 61.9936 68.7696Z"
                fill="#2F2F8C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M49.1066 40.2733C48.6937 39.6793 48.1514 38.7877 47.0303 38.2497C46.28 37.8896 45.2652 37.9178 44.427 37.5738C43.1425 37.0468 42.2407 36.0357 41.0297 35.5289C39.912 35.0612 38.7877 34.868 37.8439 34.5347C36.08 33.431 35.9786 31.105 37.6182 29.3439C39.2582 27.5828 42.0216 27.0492 43.7861 28.1529C44.2624 28.6463 44.6512 29.2988 45.4189 29.7259C46.4382 30.293 47.8761 30.3976 49.0302 30.9154C50.2972 31.484 51.2179 32.4105 52.3271 32.935C53.847 33.6536 55.206 34.1366 56.107 34.7201C57.5457 36.1242 57.1453 38.5083 55.2135 40.0407C53.2817 41.5732 50.5453 41.6774 49.1066 40.2733Z"
                fill="#2F2F8C"
              />
            </svg>
          </div>
        </div>

        <div className="lg:w-full w-[85%] mt-10 mx-auto  lg:mx-0">
          <h1 className="text-center text-2xl lg:text-3xl font-bold ">
            Get In Touch
          </h1>
          <p className="text-center text-sm lg:text-base my-3">
            DashTalents is your go-to platform for connecting with highly
            skilled <br /> professionals at affordable rates.
          </p>
        </div>

        <div className="flex mx-auto justify-center mt-10 w-full pb-20">
          <button
            className={` bg-[#2F2F8C] text-sm rounded px-3 py-2 border border-[#2F2F8C] text-white w-[40%] lg:w-[12%] h-14`}>
            As a company
          </button>{" "}
          <button className="w-[40%] lg:w-[12%] bg-[rgba(25, 25, 93, 0)] -ml-1 text-sm h-14 rounded px-3 py-2 border border-[#2F2F8C] text-[#2F2F8C] ">
            As a talent
          </button>
        </div>

        <div className="flex w-full">
          <form
            action=""
            method="post"
            className="bg-[#fff] w-[90%] lg:w-[80%] mx-auto border border-[#D8D1D1] rounded">
            <div className="w-full border border-b-[#D8D1D1] px-5 py-6">
              <p className="text-dark-blue font-montserrat text-lg font-semibold">
                Send us a message
              </p>
            </div>

            <div className="w-[90%] mx-auto my-6 p-4">
              <div className="flex justify-between flex-col lg:flex-row ">
                <input
                  type="text"
                  placeholder="Name"
                  className="lg:w-[45%] placeholder:text-base w-[95%] mt-8 border border-[#D8D1D1] px-4 py-3 focus:outline-none rounded-lg placeholder:text-black"
                />

                <input
                  type="email"
                  placeholder="Email address "
                  className="lg:w-[45%] placeholder:text-base w-[95%] mt-8 border border-[#D8D1D1] px-4 py-3 focus:outline-none rounded-lg placeholder:text-black"
                />
              </div>
              <div className="flex justify-between py-10 flex-col lg:flex-row  ">
                <input
                  type="tel"
                  placeholder="Phone Number "
                  className="lg:w-[45%] placeholder:text-base w-[95%]  border border-[#D8D1D1] lg:mt-7 px-4 py-3 focus:outline-none rounded-lg placeholder:text-black"
                />

                <input
                  type="text"
                  placeholder="Company name "
                  className="lg:w-[45%] w-[95%] placeholder:text-base mt-8 border border-[#D8D1D1] px-4 py-3 rounded-lg focus:outline-none placeholder:text-black"
                />
              </div>
              <div className="flex justify-between lg:mt-4">
                <textarea
                  name="Message"
                  id=""
                  placeholder="Message "
                  className="w-full h-28 placeholder:text-base border px-4 py-3 focus:outline-none rounded-lg border-[#D8D1D1] placeholder:text-black"></textarea>
              </div>
            </div>

            <div className="flex justify-center my-20">
              {" "}
              <button
                className={` bg-[#2F2F8C] text-sm rounded px-3 py-2 border border-[#2F2F8C] text-white  mx-auto`}>
                Submit message
              </button>
            </div>
          </form>

          <Image
            width="100"
            height="100"
            src={dashes}
            alt="dash icon"
            className="absolute top-[60%] rotate-45  -5 -ml-7 hidden lg:block"
          />
        </div>
      </div>

      <Unleash />
    </main>
  );
}

export default OurInfo;
