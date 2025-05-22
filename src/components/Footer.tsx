const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
        </h1>   
        
      </div>
      
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-black-400 text-sm pb-8"
      >
        <span>© 2025 InCode. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <span>Contact Us</span>
      </div>
    </footer>
  );
};

export default Footer;