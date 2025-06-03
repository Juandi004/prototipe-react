import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
     <>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-100 text-text-100 font-urbanist">
      <h1 className="text-5xl font-bold mb-4">Contact Page</h1>
      <p className="text-lg">Welcome contact Page</p>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
