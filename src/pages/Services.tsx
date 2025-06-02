import Header from "../components/Header"
import Footer from "../components/Footer"

function Services() {
  return (
    <>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-bg-100 text-text-100 font-urbanist">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-lg">Welcome to Services Page</p>
        </div>
        <Footer/>
    </>
  )
}

export default Services
