import DefaultButton from "./default_button";

const Header = () => {
  return (
    <header className="w-full bg-[#fff] flex justify-center py-8 ">
      <div className="flex justify-around items-center w-[80%]">
        <div className="bg-[#747474] w-12 h-6 rounded"></div>
        <nav className="flex text-base list-none">
          <li className="px-2">Join talent pool</li>
          <li className="px-2">Hire a talent</li>
          <li className="px-2">Discover solutions</li>
          <li className="px-2">About</li>
          <li className="px-2">Contact</li>
        </nav>

        <DefaultButton buttonName="Get started" />
        <div className="flex">
          <p>Login</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 pl-2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
