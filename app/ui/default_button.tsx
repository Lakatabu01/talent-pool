//Type definition for default button
interface DefaultButtonProps {
  buttonName: string;
  buttonColor: string;
}

const defaultButton = ({ buttonName, buttonColor }: DefaultButtonProps) => {
  return (
    <button
      className={` bg-[#2F2F8C] text-sm rounded px-4 py-2 border text-white`}>
      {buttonName}
    </button>
  );
};

export default defaultButton;
