import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-bg-100 text-text-100 font-urbanist">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4 gap-4 md:gap-0">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          <h3 className='font-bold font-urbanist'>InCode</h3>
        </div>

        {/* Menú - se adapta solo */}
        <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm font-light">
          <li className="hover:text-primary-100"><Link to="/">Home</Link></li>
          <li className="hover:text-primary-100"><Link to="/AboutUs">About Us</Link></li>
          <li className="hover:text-primary-100"><Link to="/Blog">Blog</Link></li>
          <li className="hover:text-primary-100"><Link to="/Services">Services</Link></li>
          <li className="hover:text-primary-100"><Link to="/Contacts">Contacts</Link></li>
        </ul>

        {/* Iconos */}
        <div className="flex space-x-4">
          <button className="hover:text-primary-100">
            <i className="fas fa-search"></i>
          </button>
          <button className="hover:text-primary-100">
            <i className="fas fa-shopping-bag"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
