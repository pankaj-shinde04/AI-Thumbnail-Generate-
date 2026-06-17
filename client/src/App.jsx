import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Generate from './pages/Generate';
import MyGeneration from './pages/MyGeneration';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const AUTH_PATHS = ['/login', '/signup'];

export default function App() {
  const { pathname } = useLocation();
  const isAuthPage = AUTH_PATHS.includes(pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/my-generation" element={<MyGeneration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}
