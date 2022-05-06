import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import AboutUs from './pages/aboutUs';
import Home from './pages/home';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
