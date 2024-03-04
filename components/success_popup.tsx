"use client";
import React, { useState } from "react";
import Link from "next/link";

interface successProps {
  children: React.ReactNode;
  onClose?: () => void; // Optional close handler
}

const SuccessPopup: React.FC<successProps> = ({ children, onClose }) => {
  // const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => {
    // setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Link href="/">
      <div
        onClick={handleClose}
        className="fixed top-0 left-0 w-full h-full z-50 bg-opacity-80 bg-black  transition-opacity duration-150">
        <div className="p-4 flex flex-col absolute top-10 left-4 w-[80%] right-4 items-center mx-auto bg-[white] z-70 rounded-lg shadow-lg  lg:max-w-[40%] mt-14 opacity-100">
          {children}
        </div>
      </div>
    </Link>
  );
};

export default SuccessPopup;
