import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import Map from './pages/Map.jsx';
import Statistics from './pages/Statistics.jsx';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
