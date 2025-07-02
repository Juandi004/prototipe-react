import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-bg-100 text-text-100 font-urbanist"> 
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4 gap-4 md:gap-0">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>

        <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-m font-light">
          <li className="hover:text-primary-100"><Link to="/"><strong>Home</strong></Link></li>
          <li className="hover:text-primary-100"><Link to="/AboutUs"><strong>About Us</strong></Link></li>
          <li className="hover:text-primary-100"><Link to="/Blog"><strong>Blog</strong></Link></li>
          <li className="hover:text-primary-100"><Link to="/Services"><strong>Services</strong></Link></li>
          <li className="hover:text-primary-100"><Link to="/Contacts"><strong>Contacts</strong></Link></li>
        </ul>

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
