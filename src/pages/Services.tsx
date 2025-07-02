import Header from "../components/Header"
import Footer from "../components/Footer"
import Slider from "../components/Slider"

function Services() {
  return (
    <>
        <Header/>
        <div className="flex flex-col items-center  py-10 bg-bg-100 text-text-100 font-urbanist">
          <h1 className="text-5xl font-bold mb-4">Services</h1>
          <p className="text-lg">Welcome to Services Page</p>
        </div>
        <Slider/>
        <Footer/>
    </>
  )
}

export default Services
