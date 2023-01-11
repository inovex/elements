import * as React from 'react';
import ReactDOM from 'react-dom';
import {
  InoButton,
  InoIcon,
  InoImg,
  InoInput,
  InoSnackbar,
  InoPopover,
  InoTab,
} from '../shared/InovexElements';
import { InputType } from '@inovex.de/elements';
import './Guide.scss';
import logo from '../assets/elements.svg';

export const LoginFormApp: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showSnackbar, setSnackbar] = React.useState(false);
  const [isValid, setValidity] = React.useState(false);
  const [hidePassword, setVisibility] = React.useState<InputType>('password');

  const togglePasswordVisibility = () => {
    if (hidePassword === 'password') {
      setVisibility('text');
    } else {
      setVisibility('password');
    }
  };

  const submit = () => {
    setSnackbar(true);
    setValidity(email.length > 0 && password.length >= 8);
    setEmail('');
    setPassword('');

    setTimeout(() => {
      setSnackbar(false);
    }, 5000);
  };

  const ValidateLogin = () => {
    if (isValid) {
      return (
        <InoSnackbar
          action-text="Welcome back!"
          timeout={5000}
          type="success"
          stay-visible-on-hover="false"
        >
          Sucessfully logged in
        </InoSnackbar>
      );
    } else {
      return (
        <InoSnackbar
          action-text="email and/or password too short"
          timeout={5000}
          type="error"
          stay-visible-on-hover="false"
        >
          Login failed
        </InoSnackbar>
      );
    }
  };
  return (
    <div className="container">
      <div className="leftpage">
        <div className="header">
          <InoImg
            alt="Elements logo"
            decoding="async"
            src={logo}
            height={75}
            width={75}
            fallbackIcon="cloud"
          ></InoImg>
          <h1 style={{ paddingLeft: 25, fontSize: 25 }}>Elements</h1>
        </div>
        <div className="body">
          <h1>Login to your Account</h1>
          <p>Login using social networks</p>
          <div className="login-alternatives">
            <InoTab icon="mail" indicator-content-width="false" stacked>
              Gmail
            </InoTab>
            <InoTab icon="mail" indicator-content-width="false" stacked>
              Yahoo
            </InoTab>
          </div>

          <p>or</p>

          <div className="login-inputs">
            <InoInput
              type="email"
              label="email"
              outline
              value={email}
              onValueChange={(value) => setEmail(value.detail)}
            ></InoInput>
            <InoInput
              type={hidePassword}
              label="password"
              outline
              value={password}
              onValueChange={(value) => setPassword(value.detail)}
            >
              <InoIcon
                slot="icon-trailing"
                icon="password"
                clickable
                onClick={() => togglePasswordVisibility()}
              ></InoIcon>
            </InoInput>
          </div>
          <InoButton
            type="submit"
            onClick={() => {
              submit();
            }}
          >
            Sign In
          </InoButton>
        </div>
        {showSnackbar ? <ValidateLogin /> : null}
      </div>
      <div className="rightpage">
        <h1>New Here?</h1>
        <p>Sign up here and discover the power of the Elements</p>
        <InoButton id="sign-up">Sign Up</InoButton>
        <InoPopover for="sign-up" placement="bottom" interactive>
          <div className="styled-popover">
            <InoIcon icon="user"></InoIcon>
            Already have an account? Sign in.
          </div>
        </InoPopover>
      </div>
    </div>
  );
};

ReactDOM.render(<LoginFormApp />, document.getElementById('root'));
