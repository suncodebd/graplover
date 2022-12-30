import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/Navbar';
import About from './page/About';
import Coding from './page/Coding';
import Contact from './page/Contact';
import Home from './page/Home';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="coding" element={<Coding />} />
                <Route path="contact" element={<Contact />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
