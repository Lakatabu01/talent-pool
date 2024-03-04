import React, { useState } from "react";
import SuccessPopup from "./success_popup";

interface PopupProps {
  children: React.ReactNode;
  onClose?: () => void; // Optional close handler
  acceptTerms?: () => void;
  checked?: true | false;
}

const Popup: React.FC<PopupProps> = ({
  children,
  onClose,
  acceptTerms,
  checked,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose && acceptTerms) {
      onClose();
      acceptTerms();
    }
  };

  const displayButton = () => {
    if (checked) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 bg-opacity-80 bg-black  transition-opacity duration-150 ease-in-out ${
          isOpen ? "visible" : "invisible"
        }`}>
        {/* onClick={handleClose}> */}
        <div className="p-4 flex flex-col items-center mx-auto bg-white rounded-lg shadow-md w-fit max-w-[90%] lg:max-w-[40%] mt-14 opacity-100">
          {children}
          <button
            disabled={displayButton()}
            type="button"
            className="mt-4 px-4 w-[80%] mx-auto py-2 rounded-md text-white bg-dark-blue hover:bg-blue-700 "
            onClick={handleClose}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
