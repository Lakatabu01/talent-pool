//Type definition for default button
interface DefaultButtonProps {
  buttonName: string;
}
interface TransparentButtonProps {
  btnName: string;
}
const DefaultButton = ({ buttonName }: DefaultButtonProps) => {
  return (
    <button
      className={` bg-[#2F2F8C] text-sm rounded px-4 py-2 border text-white`}>
      {buttonName}
    </button>
  );
};

const TransparentButton = ({ btnName }: TransparentButtonProps) => {
  return (
    <button className="bg-[rgba(25, 25, 93, 0)] text-sm rounded px-4 py-2 border border-[#2F2F8C] text-[#2F2F8C] ml-6">
      {btnName}
    </button>
  );
};

export default DefaultButton;
export { TransparentButton };
