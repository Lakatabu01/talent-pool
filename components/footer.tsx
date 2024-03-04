"use client";
import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "../utils/disableNavWithFooter";

function Footer() {
  const path = usePathname();

  return (
    <>
      {!disableNavWithFooter.includes(path) && (
        <footer className="bg-[#202054] mt-14 w-full flex flex-col lg:flex-row px-5 lg:px-10 py-8 text-[#E1E1E1] font-semibold text-sm">
          <div className=" lg:w-[40%] w-[100%] ">
            <div className="lg:w-[70%] w-full">
              <div className="h-14 w-24 bg-[#D9D9D9] rounded-sm mb-5"></div>
              <p>
                An organization that is focused on equipping African youths with
                the knowledge and skills needed in the tech space.
              </p>
            </div>
          </div>

          <div className="lg:w-[60%] w-full flex justify-between mt-8 lg:mt-0">
            <div className="lg:w-[30%] w-[45%] flex flex-col lg:pl-8">
              <h4 className="text-base">Company</h4>
              <p className="my-3">About</p>
              <p>Contact us</p>
            </div>

            <div className="lg:w-[30%] w-[45%]">
              <h4 className="text-base">Our Solutions</h4>
              <p className="my-3">Brand & product design</p>
              <p>Data Science & Analytics</p>
              <p className="my-3">Application Development</p>
              <p>Project Management</p>
            </div>

            <div className="w-[30%] lg:block hidden">
              <h4 className="text-base">Socials</h4>
              <p className="my-3">X (formerly Twitter)</p>
              <p>Instagram</p>
              <p className="my-3">Linkedin</p>
              <p>Facebook</p>
            </div>
          </div>

          <div className=" lg:hidden block mt-5">
            <h4 className="text-base">Socials</h4>
            <p className="my-3">X (formerly Twitter)</p>
            <p>Instagram</p>
            <p className="my-3">Linkedin</p>
            <p>Facebook</p>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
