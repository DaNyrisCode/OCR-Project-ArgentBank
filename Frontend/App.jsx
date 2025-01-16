import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './src/components/Footer';
import Navbar from './src/components/Navbar';
import Home from './src/pages/Home';
import Sign_in from './src/pages/Sign-in';
import User from './src/pages/User';
import PrivateRoute from './src/components/PrivateRoute';
import './src/styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Sign_in />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
