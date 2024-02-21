import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyPatternA, Login } from '@inovex.de/ui-patterns';
import NavigationDrawer from './components/navigationDrawer';
import Guide from './components/guide';
import HeroSection from './components/heroSection';

function App() {
  return (
    <Router>
      <NavigationDrawer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mypatterna" element={<MyPatternA />} />
          <Route path="/herosection" element={<HeroSection />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </NavigationDrawer>
    </Router>
  );
}

export default App;
