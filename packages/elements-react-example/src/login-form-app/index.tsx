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
import './Guide.scss';
import logo from '../../../landingpage/src/assets/logos/elements.svg';

export const LoginFormApp: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showSnackbar, setSnackbar] = React.useState(false);
  const [hidePassword, setVisibility] = React.useState('password');

  const onValueChanged = (value: CustomEvent<string>, input: string) => {
    switch (input) {
      case 'email':
        setEmail(value.detail);
        break;
      case 'password':
        setPassword(value.detail);
        break;
    }
  };

  const togglePasswordVisibility = () => {
    if (hidePassword === 'password') {
      setVisibility('text');
    } else {
      setVisibility('password');
    }
  };

  const submit = () => {
    setSnackbar(true);

    setTimeout(() => {
      setSnackbar(false);
    }, 5000);
  };

  const ValidateLogin = () => {
    if (email.length === 0 || password.length < 8) {
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
    } else {
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
              type="text"
              label="email"
              outline
              value={email}
              onValueChange={(value) => onValueChanged(value, 'email')}
            ></InoInput>
            <InoInput
              type={hidePassword}
              label="password"
              outline
              value={password}
              onValueChange={(value) => onValueChanged(value, 'password')}
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
        <InoButton id="register">Sign Up</InoButton>
        <InoPopover for="register" placement="bottom">
          <div className="styled-popover">to be continued.</div>
        </InoPopover>
      </div>
    </div>
  );
};

ReactDOM.render(<LoginFormApp />, document.getElementById('root'));
