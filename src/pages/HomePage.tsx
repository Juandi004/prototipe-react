import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

function HomePage() {
  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden font-urbanist">
        {/* 1. Fondo completo con blur */}
        

        {/* 2. Capa sobre el fondo para glassmorphism */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>

        {/* 3. Contenido encima */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
          <h1 className="text-5xl font-bold text-black mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg text-black max-w-xl">
            This is the home page. Explore our services and offerings.
          </p>
          <div className="py-20">
          <Slider />
          </div>
        </div>
      
        
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
