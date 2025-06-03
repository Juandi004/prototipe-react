import Footer from "../components/Footer"
import Header from "../components/Header"

function Blog() {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-100 text-text-100 font-urbanist">
      <h1 className="text-5xl font-bold mb-4">Blog Page</h1>
      <p className="text-lg">Welcome to the blog section. Stay tuned for updates!</p>
    </div>
    <Footer/>
    </>
  )
}

export default Blog
