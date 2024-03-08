import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyPatternA, Login, SettingsPage } from '@inovex.de/ui-patterns';
import '@inovex.de/elements-react';

import Guide from './components/guide';
import NavigationDrawer from './components/navigationDrawer';

function App() {
  return (
    <Router>
      <NavigationDrawer>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mypatterna" element={<MyPatternA />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      </NavigationDrawer>
    </Router>
  );
}

export default App;
