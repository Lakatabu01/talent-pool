import Image from "next/image";
import model3 from "../assets/images/model3.jpeg";
import dashes from "../assets/icons/dashes.svg";
import boardMeeting from "../assets/images/board-meeting.png";
import SimpleSlider from "./partners_slider";
import SmilingWoman from "../assets/images/woman.png";
import FrequentlyAskedQuestions from "./frequently_asked_questions";
import Unleash from "./unleash";
import dashesTwo from "../assets/icons/dashes-2.svg";
import happyEmployees from "../assets/images/happy-employees.png";

function Company() {
  return (
    <section className="pt-24 w-full font-montserrat">
      <div className="flex justify-between w-full">
        {" "}
        <div className="lg:block lg:w-[35%] w-1/2 pl-0 h-48 bg-gradient-to-br blur from-blue-700 via-white to-white rounded-tr-3xl   opacity-25"></div>
        <Image
          src={dashes}
          alt="icon"
          width="100"
          height="100"
          className="ml-auto rotate-180 mb-auto  lg:hidden w-10 h-10 "
        />
      </div>
      <div className="lg:-mt-16 -mt-28 bg-white w-[90%] mx-auto  flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-[55%] lg:mt-0 w-full font-montserrat flex flex-col items-center lg:items-start">
          <div className="rounded-full bg-light-blue w-fit px-3 py-1">
            <p className="text-dark-blue text-center">
              Where brilliance meets opportunity
            </p>
          </div>
          <h2 className="text-light-black lg:text-3xl my-4">
            About Our Company
          </h2>
          <h2 className="text-dark-blue lg:text-3xl">DashTalent</h2>
          <p className="my-4 text-center">
            We are a dynamic platform dedicated to bridging the gap between
            ambitious interns and forward-thinking companies. We are devoted to
            empowering the next generation of professionals by connecting them
            with exciting internship opportunities, carefully curated and vetted
            by our team of industry experts.
          </p>
        </div>
        <div className="lg:w-[40%] w-full lg:h-[65vh] h-[40vh] flex mt-10 lg:mt-0">
          <Image
            src={model3}
            alt="Smiling model"
            width="400"
            height="400"
            className="w-full  h-full object-cover rounded-2xl hidden lg:block"
          />

          <Image
            src={happyEmployees}
            alt="Smiling model"
            width="400"
            height="400"
            className="w-full  h-full object-cover rounded-2xl  lg:hidden"
          />
          <div className="hidden lg:block">
            <Image
              src={dashes}
              alt="icon"
              //   width="400"
              //   height="400"
              className="-mt-10 -ml-8"
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto  mt-28">
        <div className="w-full hidden lg:block">
          <Image
            src={boardMeeting}
            height={1000}
            width={1000}
            alt="Board meeting"
            className="w-full rounded-md"
          />
        </div>

        <div className="w-full mt-24 flex justify-between">
          <div className="w-[20%] p-4 border rounded-sm  shadow-lg">
            <h2 className="text-2xl font-semibold">20K+</h2>
            <h4 className="text-dark-blue my-3 text-lg">Job Opportunities</h4>
            <p>
              We have over 20,000 job opportunities accross all professional
              sectors.
            </p>
          </div>
          <div className="w-[20%] p-4 border rounded-sm  shadow-lg">
            <h2 className="text-2xl font-semibold">13K+</h2>
            <h4 className="text-dark-blue my-3 text-lg">Happy Clients</h4>
            <p>
              We have over 20,000 job opportunities accross all professional
              sectors. sectors.
            </p>
          </div>
          <div className="w-[20%] p-4 border rounded-sm shadow-lg">
            <h2 className="text-2xl font-semibold">100</h2>
            <h4 className="text-dark-blue my-3 text-lg">Vetted Individuals</h4>
            <p>
              We have over 20,000 job opportunities accross all professional
              sectors.
            </p>
          </div>
          <div className="w-[20%] p-4 border rounded-sm shadow-lg">
            <h2 className="text-2xl font-semibold">20K+</h2>
            <h4 className="text-dark-blue my-3 text-lg">Job Opportunities</h4>
            <p>
              We have over 20,000 job opportunities accross all professional
              sectors.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="mt-24 w-[90%] mx-auto ">
        <div>
          <ul className="list-disc pl-4 lg:flex-none flex justify-center lg:justify-start">
            <li className="text-[#2F2F8C] text-sm lg:text-lg">
              Trusted Patners
            </li>
          </ul>

          <h2 className="lg:text-4xl text-2xl my-4 lg:text-start text-center">
            Building Success Together <br /> with Trusted Allies
          </h2>
        </div>

        <SimpleSlider />

        <div className="w-full justify-between hidden lg:flex mt-8">
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
        </div>
      </div> */}

      {/* <div className="w-full bg-[#F4F4F4] mt-20">
        <div className="mx-auto w-[90%] flex justify-between items-center py-28">
          <div className="w-[55%]">
            <div>
              <ul className="list-disc pl-4 lg:flex-none flex justify-center lg:justify-start">
                <li className="text-[#2F2F8C] text-sm lg:text-lg">
                  Our Mission
                </li>
              </ul>

              <h2 className="lg:text-4xl text-2xl my-4 lg:text-start text-center">
                Fostering Futures, <br /> Connecting Talent
              </h2>
            </div>
            Our mission is to empower the next generation of professionals by
            revolutionizing the way interns and companies connect. We are
            dedicated to fostering a dynamic and inclusive community where
            talent meets opportunity. Through meticulous curation, transparent
            processes, and a commitment to excellence, we strive to be the
            catalyst for meaningful and mutually beneficial collaborations.
          </div>

          <div className="w-[35%] h-[70vh]">
            <Image
              src={SmilingWoman}
              height={400}
              width={400}
              alt="Smiling Woman"
              className="w-full rounded-md h-full object-cover"
            />
          </div>
        </div>
      </div> */}

      {/* <FrequentlyAskedQuestions />
      <Unleash /> */}
    </section>
  );
}

export default Company;
