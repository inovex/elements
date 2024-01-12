import '@inovex.de/elements-react';
import {
  MyPatternA,
  myPatternAHtml,
  Login,
  loginHtml,
} from '@inovex.de/ui-patterns';

function App() {
  console.log(loginHtml);
  console.log(myPatternAHtml);
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      {/* Developer Note */}
      <div className="bg-blue-200 p-4 mb-8 rounded-lg shadow-md max-w-lg text-sm text-gray-700">
        <p>
          <strong>Developer Note:</strong> Utilize Inovex UI patterns with theme
          colors from Tailwind (e.g., border-inovex-p-5 on the border of the
          login-pattern). For a full color reference, see the Tailwind config.{' '}
          <strong>TODO:</strong> Implement navigation and enhance the developer
          experience to encapsulate patterns efficiently.
        </p>
      </div>

      {/* Patterns */}
      <MyPatternA />
      <Login />
    </div>
  );
}

export default App;
