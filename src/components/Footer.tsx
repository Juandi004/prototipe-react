import { Link } from "react-router-dom";

const Footer = () => {

return (
    <>
    <footer className="bg-bg-100 text-text-200 text-sm font-urbanist">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h3 className="text-text-100 font-semibold mb-3">Shop and Learn</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary-100 cursor-pointer">Mac</li>
              <li className="hover:text-primary-100 cursor-pointer">iPhone</li>
              <li className="hover:text-primary-100 cursor-pointer">iPad</li>
              <li className="hover:text-primary-100 cursor-pointer">Watch</li>
              <li className="hover:text-primary-100 cursor-pointer">AirPods</li>
            </ul>
          </div>
          <div>
            <h3 className="text-text-100 font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary-100 cursor-pointer">Apple Music</li>
              <li className="hover:text-primary-100 cursor-pointer">Apple TV+</li>
              <li className="hover:text-primary-100 cursor-pointer">iCloud</li>
            </ul>
          </div>
          <div>
            <h3 className="text-text-100 font-semibold mb-3">Apple Store</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary-100 cursor-pointer">Find a Store</li>
              <li className="hover:text-primary-100 cursor-pointer">Genius Bar</li>
              <li className="hover:text-primary-100 cursor-pointer">Order Status</li>
            </ul>
          </div>
          <div>
            <h3 className="text-text-100 font-semibold mb-3">For Business</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary-100 cursor-pointer">Apple and Business</li>
              <li className="hover:text-primary-100 cursor-pointer">Shop for Business</li>
            </ul>
          </div>
          <div>
            <h3 className="text-text-100 font-semibold mb-3">About Apple</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary-100 cursor-pointer">Newsroom</li>
              <li className="hover:text-primary-100 cursor-pointer">Careers</li>
              <li className="hover:text-primary-100 cursor-pointer">Investors</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-bg-300 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <span className="text-text-200">© 2025 InCode. All rights reserved.</span>
          <div className="space-x-4 mt-4 sm:mt-0">
            <a className="hover:text-primary-100">Privacy Policy</a>
            <a className="hover:text-primary-100">Terms of Use</a>
            <a className="hover:text-primary-100"><Link to="/Contacts">Contacts</Link></a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
