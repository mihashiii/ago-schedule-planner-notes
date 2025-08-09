import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';

function App() {
  return (
    <div>
      <Navbar />
        <div className="pt-24">
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  );
}

export default App;