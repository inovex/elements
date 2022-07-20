import * as React from 'react';
import ReactDOM from 'react-dom';
import {
  InoButton,
  InoIcon,
  InoImg,
  InoFab,
  InoFabSet,
  InoHeader,
  InoInput,
} from '../shared/InovexElements';
import './Guide.scss';
import logo from '../../../landingpage/src/assets/logos/elements.svg';

export const LoginFormApp: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
          <div>
            <InoFabSet
              open-dial="false"
              dial-direction="right"
              topBottomLocation="top"
              leftRightLocation="left"
            >
              <InoFab label="First FAB">
                <InoIcon slot="icon-leading" icon="star"></InoIcon>
              </InoFab>
              <InoFab label="Second FAB">
                <InoIcon slot="icon-leading" icon="favorite"></InoIcon>
              </InoFab>
              <InoFab label="Third FAB">
                <InoIcon slot="icon-leading" icon="info"></InoIcon>
              </InoFab>
            </InoFabSet>
          </div>
          <InoHeader>or</InoHeader>
          <InoInput
            type="text"
            label="email"
            outline={true}
            value={email}
            onValueChange={(value) => onValueChanged(value, 'email')}
          ></InoInput>
          <InoInput
            type="text"
            icon-trailing=""
            label="password"
            outline={true}
            value={password}
            onValueChange={(value) => onValueChanged(value, 'password')}
          >
            <InoIcon
              slot="icon-trailing"
              icon="password"
              clickable={true}
            ></InoIcon>{' '}
            {/* TODO after ino-icon fix: clickEl reinpacken damit man das passwort verstecken kann oder nicht*/}
          </InoInput>
          <InoButton
            type="submit"
            onClick={() => alert('email: ' + email + '\n' +'password: ' + password)}
          >
            Sign In
          </InoButton>
        </div>
      </div>
      <div className="rightpage">
        <h1>New Here?</h1>
        <p>Sign up here and discover the power of the Elements</p>
        <InoButton>Sign Up</InoButton>
      </div>
    </div>
  );
};

ReactDOM.render(<LoginFormApp />, document.getElementById('root'));
