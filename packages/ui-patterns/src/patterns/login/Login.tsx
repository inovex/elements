import htmlContent from './login.html?raw';
import PatternWrapper from '../PatternWrapper';

function Login() {
  return <PatternWrapper htmlContent={htmlContent} />;
}

export default Login;
