import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyPatternA, Login } from '@inovex.de/ui-patterns';
import NavigationDrawer from './components/navigationDrawer';
import SettingsPage from './components/settingsPage';
import Guide from './components/guide';

function App() {
  return (
    <Router>
      {/* <NavigationDrawer> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mypatterna" element={<MyPatternA />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      {/* </NavigationDrawer> */}
    </Router>
  );
}

export default App;
