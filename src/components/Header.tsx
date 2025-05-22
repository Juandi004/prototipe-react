import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="grid grid-cols-3 items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-25 h-25 object-contain" />
        </div>
        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-normal">
            InCode.ec
          </h1>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
