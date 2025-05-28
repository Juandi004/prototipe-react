const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-3">Shop and Learn</h3>
            <ul className="space-y-2">
              <li>Mac</li>
              <li>iPhone</li>
              <li>iPad</li>
              <li>Watch</li>
              <li>AirPods</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li>Apple Music</li>
              <li>Apple TV+</li>
              <li>iCloud</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Apple Store</h3>
            <ul className="space-y-2">
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">For Business</h3>
            <ul className="space-y-2">
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">About Apple</h3>
            <ul className="space-y-2">
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Investors</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <span>© 2025 InCode. All rights reserved.</span>
          <div className="space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
