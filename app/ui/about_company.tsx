import Image from "next/image";
import model3 from "../assets/images/model3.jpeg";
import dashes from "../assets/icons/dashes.svg";
import boardMeeting from "../assets/images/board-meeting.png";
import SimpleSlider from "./partners_slider";
import SmilingWoman from "../assets/images/woman.png";

function Company() {
  return (
    <section className="pt-24 w-full font-montserrat">
      <div className="w-[35%] pl-0 h-48 bg-gradient-to-br blur from-blue-700 via-white to-white rounded-tr-3xl   opacity-25"></div>
      <div className="-mt-16 bg-white w-[90%] mx-auto flex justify-between items-center">
        <div className="w-[55%] font-montserrat">
          <div className="rounded-full bg-light-blue w-fit px-3 py-1">
            <p className="text-dark-blue">Where brilliance meets opportunity</p>
          </div>
          <h2 className="text-light-black lg:text-3xl my-4">
            About Our Company
          </h2>
          <h2 className="text-dark-blue lg:text-3xl">DashTalent</h2>
          <p className="my-4">
            We are a dynamic platform dedicated to bridging the gap between
            ambitious interns and forward-thinking companies. We are devoted to
            empowering the next generation of professionals by connecting them
            with exciting internship opportunities, carefully curated and vetted
            by our team of industry experts.
          </p>
        </div>
        <div className="w-[40%] h-[65vh] flex">
          <Image
            src={model3}
            alt="Smiling model"
            width="400"
            height="400"
            className="w-full  h-full object-cover rounded-2xl"
          />
          <div className="">
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
        <div className="w-full">
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

      <div className="mt-24 w-[90%] mx-auto ">
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

        {/* Carousel when viewed on mobile */}
        <SimpleSlider />

        <div className="w-full justify-between hidden lg:flex mt-8">
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
          <div className="bg-[#747474] w-[18%] h-8 "></div>
        </div>
      </div>

      <div className="w-full bg-[#F4F4F4] mt-20">
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
              className="w-full rounded-md h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
