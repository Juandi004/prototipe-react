import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="h-10  w-auto" />
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-light">
          <li className="hover:text-gray-400 cursor-pointer">Store</li>
          <li className="hover:text-gray-400 cursor-pointer">Mac</li>
          <li className="hover:text-gray-400 cursor-pointer">iPhone</li>
          <li className="hover:text-gray-400 cursor-pointer">iPad</li>
          <li className="hover:text-gray-400 cursor-pointer">Watch</li>
          <li className="hover:text-gray-400 cursor-pointer">Support</li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <button className="hover:text-gray-400">
            <i className="fas fa-search"></i>
          </button>
          <button className="hover:text-gray-400">
            <i className="fas fa-shopping-bag"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
