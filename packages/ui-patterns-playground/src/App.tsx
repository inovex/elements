import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyPatternA, Login, SettingsPage, Footer, Hero } from '@inovex.de/ui-patterns';
import '@inovex.de/elements-react';

import Guide from './components/guide';
import NavigationDrawer from './components/navigationDrawer';
import FaqSection from './faqSection';

function App() {
  return (
    <Router>
      <NavigationDrawer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/mypatterna" element={<MyPatternA />} />
          <Route path="/faq" element={<FaqSection />} />
        </Routes>
      </NavigationDrawer>
    </Router>
  );
}

export default App;
