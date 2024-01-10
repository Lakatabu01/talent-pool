import Image from "next/image";
import model1 from "../assets/images/model1.jpeg";
import model2 from "../assets/images/model2.jpeg";
import model3 from "../assets/images/model3.jpeg";
import background from "../assets/images/background.png";

const Individuals = () => {
  return (
    <section className="flex flex-col items-center my-8 font-montserrat">
      <div className="w-[95%]  ">
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
        <div className="h-[50vw]  bg-blue-500 rounded-tr-full rounded-tl-full w-[100vw]">
          <div className="w-[30%]">
            <div className="bg-[white] py-8 rounded-2xl border">
              <div className="flex">
                <div className="w-8 bg-yellow-500">lorem</div>
                <div>Vetting By Proffessionals</div>
              </div>
              <div>
                <p>
                  We ensure that only the best talents make it to our platform.
                  Your skills are evaluated by industry experts, giving you the
                  credibility you deserve.
                </p>
              </div>
            </div>

            <div className="my-4 bg-[white] py-10 rounded-2xl border">
              <div className="flex">
                <div className="w-8 bg-yellow-500">lorem</div>
                <div>Vetting By Proffessionals</div>
              </div>
              <div>
                <p>
                  We ensure that only the best talents make it to our platform.
                  Your skills are evaluated by industry experts, giving you the
                  credibility you deserve.
                </p>
              </div>
            </div>

            <div className="bg-[white] py-8 rounded-2xl border">
              <div className="flex">
                <div className="w-8 bg-yellow-500">lorem</div>
                <div>Vetting By Proffessionals</div>
              </div>
              <div>
                <p>
                  We ensure that only the best talents make it to our platform.
                  Your skills are evaluated by industry experts, giving you the
                  credibility you deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Individuals;
