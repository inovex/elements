import { useState } from 'react';
import { InoInput, InoCheckbox, InoButton } from '@inovex.de/elements-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="h-[682px] w-[565px] bg-white rounded-2xl border border-solid border-inovex-p-5 shadow-2xl grid grid-rows-auto gap-y-8 px-24 py-28">
      <h1 className="text-left">Login to your account</h1>
      <p className="text-left body-l text-inovex-n-11 pb-8">
        Welcome back! Enter your credentials to access your account. This modern
        login interface is crafted with inovex Elements and Tailwind CSS.
      </p>
      <InoInput
        label="Email"
        outline
        type="email"
        value={email}
        onValueChange={(e) => setEmail(e.detail)}
      />
      <InoInput
        label="Password"
        outline
        type="password"
        value={password}
        onValueChange={(e) => setPassword(e.detail)}
      />
      <div className="flex justify-between items-center">
        <label className="flex items-center cursor-pointer">
          <InoCheckbox
            checked={rememberMe}
            onCheckedChange={() => setRememberMe(!rememberMe)}
          />
          <span className="body-l text-inovex-n-11 ml-2">Remember me</span>
        </label>
        <a className="body-l cursor-pointer">Forgot your password?</a>
      </div>
      <div className="flex justify-end">
        <InoButton variant="filled">Login</InoButton>
      </div>
    </div>
  );
};

export default Login;
