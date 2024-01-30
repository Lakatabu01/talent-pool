import React from "react";

function Footer() {
  return (
    <footer className="bg-[#202054] mt-14 w-full flex px-10 py-8 text-[#E1E1E1] font-semibold text-sm">
      <div className="w-[40%]">
        <div className="w-[70%]">
          <div className="h-14 w-24 bg-[#D9D9D9] rounded-sm mb-5"></div>
          <p>
            An organization that is focused on equipping African youths with the
            knowledge and skills needed in the tech space.
          </p>
        </div>
      </div>

      <div className="w-[60%] flex justify-between ">
        <div className="w-[30%] flex flex-col pl-8">
          <h4 className="text-base">Company</h4>
          <p className="my-3">About</p>
          <p>Contact us</p>
        </div>

        <div className="w-[30%]">
          <h4 className="text-base">Our Solutions</h4>
          <p className="my-3">Brand & product design</p>
          <p>Data Science & Analytics</p>
          <p className="my-3">Application Development</p>
          <p>Project Management</p>
        </div>

        <div className="w-[30%]">
          <h4 className="text-base">Socials</h4>
          <p className="my-3">X (formerly Twitter)</p>
          <p>Instagram</p>
          <p className="my-3">Linkedin</p>
          <p>Facebook</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
