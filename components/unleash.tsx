import avatar1 from "../public/assets/images/Avatar1.png";
import avatar2 from "../public/assets/images/Avatar2.png";
import avatar3 from "../public/assets/images/Avatar3.png";
import Image from "next/image";
import DefaultButton from "./default_button";

const Unleash = () => {
  return (
    <div className="flex w-full justify-center bg-[#F9FAFB]">
      <div className="lg:w-[50%] w-[90%] my-10">
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

        <h3 className="text-[#2F2F8C] text-2xl lg:text-4xl text-center py-8">
          Unleash your talent now and begin your internship role Today
        </h3>

        <div className="w-full flex justify-center">
          <DefaultButton buttonName="Register" />
        </div>
      </div>
    </div>
  );
};

export default Unleash;
