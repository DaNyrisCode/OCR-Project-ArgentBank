import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Footer from './src/components/Footer';
import Navbar from './src/components/Navbar';
import PrivateRoute from './src/components/PrivateRoute';
import './src/styles/main.scss';

// Chargement différé des pages
const Home = lazy(() => import('./src/pages/Home'));
const Sign_in = lazy(() => import('./src/pages/Sign-in'));
const User = lazy(() => import('./src/pages/User'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
