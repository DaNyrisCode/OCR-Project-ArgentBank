import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './src/components/Footer';
import Navbar from './src/components/Navbar';
import Home from './src/pages/Home';
import Sign_in from './src/pages/Sign-in';
// import Sign_up from './src/pages/Sign-up';
import './src/styles/main.scss'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Sign_in />} />
        {/* <Route path="/sign-up" element={<Sign_up />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
