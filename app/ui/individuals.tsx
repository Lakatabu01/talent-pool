import Image from "next/image";
import model1 from "../assets/images/model1.jpeg";
import model2 from "../assets/images/model2.jpeg";
import model3 from "../assets/images/model3.jpeg";
import whsam from "../assets/images/whsam.png";
import layer from "../assets/icons/layer.svg";

const Individuals = () => {
  return (
    <section className="flex flex-col items-center mt-8 font-montserrat">
      <div className="w-[90%]  ">
        <div>
          <div>
            <ul className="list-disc pl-4">
              <li className="text-[#2F2F8C] text-lg">Featured Talents</li>
            </ul>

            <h2 className="text-4xl my-4">
              Discover Extraordinary <br /> Individuals
            </h2>
          </div>
        </div>

        <div className="flex w-full justify-between mt-10 max-h-72">
          <div className="w-[20%] ">
            <Image
              src={model1}
              alt="First model"
              width="200"
              height="200"
              className="w-full  h-full object-cover rounded-3xl"
            />

            <div className=" text-sm relative bottom-14 mx-auto w-[80%] bg-gradient-to-b from-[#7C7CEAE8] via-[#4545B884] to-[#4545C44F] flex flex-col items-center text-white rounded-3xl">
              <p>Product Designer</p>
              <p>Level: Intern</p>
            </div>
          </div>
          <div className="w-[20%] ">
            {" "}
            <Image
              src={model2}
              alt="second model"
              width="200"
              height="200"
              className="w-full  h-full object-cover rounded-3xl"
            />
            <div className=" text-sm relative bottom-14 mx-auto w-[80%] bg-gradient-to-b from-[#7C7CEAE8] via-[#4545B884] to-[#4545C44F] flex flex-col items-center text-white rounded-3xl">
              <p>Product Designer</p>
              <p>Level: Intern</p>
            </div>
          </div>
          <div className="w-[20%]">
            {" "}
            <Image
              src={model3}
              alt="third model"
              width="200"
              height="200"
              className="w-full  h-full object-cover rounded-3xl"
            />
            <div className=" text-sm relative bottom-14 mx-auto w-[80%] bg-gradient-to-b from-[#7C7CEAE8] via-[#4545B884] to-[#4545C44F] flex flex-col items-center text-white rounded-3xl">
              <p>Product Designer</p>
              <p>Level: Intern</p>
            </div>
          </div>
          <div className="w-[20%]">
            {" "}
            <Image
              src={model1}
              alt="fourth model"
              width="200"
              height="200"
              className="w-full  h-full object-cover rounded-3xl"
            />
            <div className=" text-sm relative bottom-14 mx-auto w-[80%] bg-gradient-to-b from-[#7C7CEAE8] via-[#4545B884] to-[#4545C44F] flex flex-col items-center text-white rounded-3xl">
              <p>Product Designer</p>
              <p>Level: Intern</p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div>
            <ul className="list-disc pl-4">
              <li className="text-[#2F2F8C] text-lg">Trusted Patners</li>
            </ul>

            <h2 className="text-4xl my-4">
              Building Success Together <br /> with Trusted Allies
            </h2>
          </div>
        </div>

        <div className="w-full flex justify-between mt-8">
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
        </div>

        <div className="w-full mt-28">
          <div className="flex w-[100%] justify-between  relative ">
            <div>
              <ul className="list-disc pl-4">
                <li className="text-[#2F2F8C] text-lg">Why Choose Us?</li>
              </ul>

              <h2 className="text-4xl my-4 font-semibold">
                Hire With Confidence, Here <br /> On DashTalent
              </h2>
            </div>

            <div className="mt-14 opacity-70 blur-2xl rotate-280 relative bottom-8 left-6 bg-gradient-to-l from-[#4545C44F] via-[#7C7CEAE8] to-[#fff] w-60 h-40"></div>
          </div>
        </div>
      </div>

      <div className="w-full  flex justify-center mt-20">
        <div className="h-[55vw]  bg-[#9797FF] rounded-tr-full p-10 pt-20 rounded-tl-full w-[100vw] flex justify-around">
          <div className="w-[40%] font-montserrat">
            <div className="bg-[white] py-4 rounded-2xl border p-4">
              <div className="flex mb-6">
                <div className="w-8 bg-blue-900 p-1 rounded-full mr-4">
                  <Image
                    src={layer}
                    alt="layer icon"
                    width="100"
                    height="100"
                  />
                </div>
                <div className="text-xl font-semibold text-[#2C2B2B]">
                  Vetting By Proffessionals
                </div>
              </div>
              <div>
                <p className="text-base">
                  We ensure that only the best talents make it to our platform.
                  Your skills are evaluated by industry experts, giving you the
                  credibility you deserve.
                </p>
              </div>
            </div>

            <div className="bg-[white] py-4 rounded-2xl border p-4 my-5">
              <div className="flex mb-6">
                <div className="w-8 bg-blue-900 p-1 rounded-full mr-4">
                  <Image
                    src={layer}
                    alt="layer icon"
                    width="100"
                    height="100"
                  />
                </div>
                <div className="text-xl font-semibold text-[#2C2B2B]">
                  Affordable Hire
                </div>
              </div>
              <div>
                <p className="text-base">
                  We understand the struggle of expensive talent acquisition.
                  DashTalents offers affordable hiring solutions, making it a
                  win-win for both talents and companies.
                </p>
              </div>
            </div>

            <div className="bg-[white] py-4 rounded-2xl border p-4">
              <div className="flex mb-6">
                <div className="w-8 bg-blue-900 p-1 rounded-full mr-4">
                  <Image
                    src={layer}
                    alt="layer icon"
                    width="100"
                    height="100"
                  />
                </div>
                <div className="text-xl font-semibold text-[#2C2B2B]">
                  Internship Opportuninies
                </div>
              </div>
              <div>
                <p className="text-base">
                  Invest in the future of tech by hiring sound interns through
                  DashTalents. Nurture emerging talent and watch your projects
                  flourish.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-[50%] items-center justify-center">
            <div className="flex -mt-20 justify-center h-[80%] items-center">
              <div className="bg-white border rounded-tr-3xl rounded-bl-3xl p-4 text-xl -mr-10">
                <div className="flex items-center mb-3">
                  <div className="w-8 bg-white p-1 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M18.7501 10.0001C18.7521 10.2564 18.6741 10.507 18.5271 10.7171C18.3801 10.9271 18.1713 11.0861 17.9298 11.172L12.9735 12.9743L11.172 17.9298C11.0832 18.169 10.9233 18.3753 10.7138 18.521C10.5043 18.6667 10.2552 18.7448 10.0001 18.7448C9.74491 18.7448 9.49585 18.6667 9.28636 18.521C9.07688 18.3753 8.917 18.169 8.8282 17.9298L7.02586 12.9688L2.07039 11.172C1.83117 11.0832 1.62485 10.9233 1.47916 10.7138C1.33346 10.5043 1.25537 10.2552 1.25537 10.0001C1.25537 9.74491 1.33346 9.49585 1.47916 9.28636C1.62485 9.07688 1.83117 8.917 2.07039 8.8282L7.03133 7.02586L8.8282 2.07039C8.917 1.83117 9.07688 1.62485 9.28636 1.47916C9.49585 1.33346 9.74491 1.25537 10.0001 1.25537C10.2552 1.25537 10.5043 1.33346 10.7138 1.47916C10.9233 1.62485 11.0832 1.83117 11.172 2.07039L12.9743 7.03133L17.9298 8.8282C18.1713 8.91408 18.3801 9.07308 18.5271 9.2831C18.6741 9.49312 18.7521 9.74372 18.7501 10.0001Z"
                        fill="#2F2F8C"
                      />
                    </svg>
                  </div>
                  <div className="text-base">Product Strategy</div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="w-8 bg-white p-1 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M18.7501 10.0001C18.7521 10.2564 18.6741 10.507 18.5271 10.7171C18.3801 10.9271 18.1713 11.0861 17.9298 11.172L12.9735 12.9743L11.172 17.9298C11.0832 18.169 10.9233 18.3753 10.7138 18.521C10.5043 18.6667 10.2552 18.7448 10.0001 18.7448C9.74491 18.7448 9.49585 18.6667 9.28636 18.521C9.07688 18.3753 8.917 18.169 8.8282 17.9298L7.02586 12.9688L2.07039 11.172C1.83117 11.0832 1.62485 10.9233 1.47916 10.7138C1.33346 10.5043 1.25537 10.2552 1.25537 10.0001C1.25537 9.74491 1.33346 9.49585 1.47916 9.28636C1.62485 9.07688 1.83117 8.917 2.07039 8.8282L7.03133 7.02586L8.8282 2.07039C8.917 1.83117 9.07688 1.62485 9.28636 1.47916C9.49585 1.33346 9.74491 1.25537 10.0001 1.25537C10.2552 1.25537 10.5043 1.33346 10.7138 1.47916C10.9233 1.62485 11.0832 1.83117 11.172 2.07039L12.9743 7.03133L17.9298 8.8282C18.1713 8.91408 18.3801 9.07308 18.5271 9.2831C18.6741 9.49312 18.7521 9.74372 18.7501 10.0001Z"
                        fill="#2F2F8C"
                      />
                    </svg>
                  </div>
                  <div className="text-base">Product Strategy</div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="w-8 bg-white p-1 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M18.7501 10.0001C18.7521 10.2564 18.6741 10.507 18.5271 10.7171C18.3801 10.9271 18.1713 11.0861 17.9298 11.172L12.9735 12.9743L11.172 17.9298C11.0832 18.169 10.9233 18.3753 10.7138 18.521C10.5043 18.6667 10.2552 18.7448 10.0001 18.7448C9.74491 18.7448 9.49585 18.6667 9.28636 18.521C9.07688 18.3753 8.917 18.169 8.8282 17.9298L7.02586 12.9688L2.07039 11.172C1.83117 11.0832 1.62485 10.9233 1.47916 10.7138C1.33346 10.5043 1.25537 10.2552 1.25537 10.0001C1.25537 9.74491 1.33346 9.49585 1.47916 9.28636C1.62485 9.07688 1.83117 8.917 2.07039 8.8282L7.03133 7.02586L8.8282 2.07039C8.917 1.83117 9.07688 1.62485 9.28636 1.47916C9.49585 1.33346 9.74491 1.25537 10.0001 1.25537C10.2552 1.25537 10.5043 1.33346 10.7138 1.47916C10.9233 1.62485 11.0832 1.83117 11.172 2.07039L12.9743 7.03133L17.9298 8.8282C18.1713 8.91408 18.3801 9.07308 18.5271 9.2831C18.6741 9.49312 18.7521 9.74372 18.7501 10.0001Z"
                        fill="#2F2F8C"
                      />
                    </svg>
                  </div>
                  <div className="text-base">Product Strategy</div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 bg-white p-1 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M18.7501 10.0001C18.7521 10.2564 18.6741 10.507 18.5271 10.7171C18.3801 10.9271 18.1713 11.0861 17.9298 11.172L12.9735 12.9743L11.172 17.9298C11.0832 18.169 10.9233 18.3753 10.7138 18.521C10.5043 18.6667 10.2552 18.7448 10.0001 18.7448C9.74491 18.7448 9.49585 18.6667 9.28636 18.521C9.07688 18.3753 8.917 18.169 8.8282 17.9298L7.02586 12.9688L2.07039 11.172C1.83117 11.0832 1.62485 10.9233 1.47916 10.7138C1.33346 10.5043 1.25537 10.2552 1.25537 10.0001C1.25537 9.74491 1.33346 9.49585 1.47916 9.28636C1.62485 9.07688 1.83117 8.917 2.07039 8.8282L7.03133 7.02586L8.8282 2.07039C8.917 1.83117 9.07688 1.62485 9.28636 1.47916C9.49585 1.33346 9.74491 1.25537 10.0001 1.25537C10.2552 1.25537 10.5043 1.33346 10.7138 1.47916C10.9233 1.62485 11.0832 1.83117 11.172 2.07039L12.9743 7.03133L17.9298 8.8282C18.1713 8.91408 18.3801 9.07308 18.5271 9.2831C18.6741 9.49312 18.7521 9.74372 18.7501 10.0001Z"
                        fill="#2F2F8C"
                      />
                    </svg>
                  </div>
                  <div className="text-base">Product Strategy</div>
                </div>
              </div>

              <div className=" ">
                <Image
                  src={whsam}
                  alt="Whsam closeup shot"
                  width="500"
                  height="600"
                  className="h-full w-full"
                />
                <div className=" text-sm relative bottom-14 mx-auto w-[100%] bg-[#2F2F8C] flex flex-col items-center text-white rounded-t-2xl py-4">
                  <p className="text-xl text-[#FBFBFB] font-semibold">
                    Khing Whsam
                  </p>
                  <p className="font-sm text-[#E1E1E1] italic">
                    Team Lead DashTalent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Individuals;
