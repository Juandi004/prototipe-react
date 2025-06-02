import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/AboutUs" element={<AboutUs />} /> 
      <Route path="/Blog" element={<Blog />} /> 
      <Route path="/Services" element={<Services />} /> 
      <Route path="/Contacts" element={<Contact />} /> 
    </Routes>
  )
}

export default App
