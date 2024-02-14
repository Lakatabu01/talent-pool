import React from "react";

//Type definition
interface TwoLinePlaceholderProps {
  children?: string;
}

const TwoLinePlaceholder: React.FC<TwoLinePlaceholderProps> = ({}) => {
  //   if (!children) {
  //     throw new Error("TwoLinePlaceholder requires children prop!");
  //   }

  const placeholderText: string = "First line\nSecond line"; // Define placeholder as a string

  //   const lines = children.split("\n");
  return (
    <input
      className="w-[45%] border border-black px-4 py-3 focus:outline-none"
      placeholder={placeholderText} // Pass the string value
    />
  );
};

export default TwoLinePlaceholder;
