## @ionic/react (alpha)

These are React specific building blocks on top of  `@inovex/elements` and is gathered from [@ionic/core](https://www.npmjs.com/package/@ionic/core) components/services.

We are currently working on providing more detailed documentation on usage but please refer to our example application for now.
If you would like to see an example app of the implementation please go to our [example react app](https://gitlab.inovex.de/inovex-elements/example-react).


```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { registerInovexElements } from '@inovex/elements/dist/react';
import App from './App';

registerInovexElements();

ReactDOM.render(<App />, document.getElementById('root'));
```

## Updating this react wrapper

Simply copy all the files from https://github.com/ionic-team/ionic/tree/master/react and see what has changed.

The `props` in the wrapper need to be changed to match the typings. The function to change the names is in `react/src/inovexCustom.ts` and should only left out if ionic takes care of changing propnames.

## License

* [MIT](https://raw.githubusercontent.com/ionic-team/ionic/master/LICENSE)
