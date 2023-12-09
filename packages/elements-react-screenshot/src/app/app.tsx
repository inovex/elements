// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { InoButton, InoSegmentButton } from '@inovex.de/elements-react';

export function App() {
  return (
    <Routes>
      <Route
        path="/ino-segment-button"
        element={
          <div data-testid="container">
            <InoSegmentButton>My Button</InoSegmentButton>
            <InoSegmentButton checked={true}>My Button</InoSegmentButton>
            <InoSegmentButton disabled={true}>My Button</InoSegmentButton>
          </div>
        }
      />
      <Route
        path="/page-2"
        element={
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
