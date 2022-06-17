import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import AboutUs from './pages/aboutUs';
import AiApp from './pages/aiApp';
import Home from './pages/home';
import OurVision from './pages/OurVision';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/our-vision" element={<OurVision/>}/>
        <Route path="/ai-app" element={<AiApp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
