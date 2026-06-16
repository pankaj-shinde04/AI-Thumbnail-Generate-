import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Generate from './pages/Generate';
import MyGeneration from './pages/MyGeneration';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/my-generation" element={<MyGeneration />} />
      </Routes>
      <Footer />
    </>
  );
}
