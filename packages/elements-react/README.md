## @inovex/elements-react

This is a package contains awesome and reusable components based on native web components compatible to React. :fire:

> Please note: We are at the beginning of the inovex elements library. Things may break without giving any deprecation notice. Join the project slack channel #proj-inovex-elements to be up to date.

These are React specific building blocks on top of  `@inovex/elements` and is gathered from [@ionic/core](https://www.npmjs.com/package/@ionic/core) components/services.

### Integrate via npm

`@inovex/elements-react` are delivered via a private npm registry hosted at `https://artifactory.inovex.de/artifactory/api/npm/inovex-elements-react/`. First, you have to configure
your local environment to use this registry. To do so, execute the following npm commands:

```
npm config set registry https://artifactory.inovex.de/artifactory/api/npm/internal-npm/
or
npm config set @inovex:registry https://artifactory.inovex.de/artifactory/api/npm/internal-npm/
```

Now you are ready to add the `@inovex/elements-react` dependency to your project using `yarn` or `npm`:

```
yarn add @inovex/elements-react
npm i @inovex/elements-react
```

## Installation

After providing the dependency the components may be imported as usually.

```jsx

import React from 'react';

import { InoButton } from '@inovex/elements-react/dist';

const App: React.FC = () => {

    [...]
    return (
        <InoButton onClick={(ev: any) => addTodo()} ino-icon="add">
            Add
        </InoButton>
    );
}
```


If you would like to see an example app of the implementation please go to our [example react app](https://gitlab.inovex.de/inovex-elements/example-react).



## Updating this react wrapper

Simply copy all the files from https://github.com/ionic-team/ionic/blob/master/packages/react/ and see what has changed.

The `props` in the wrapper need to be changed to match the typings. The function to change the names is in `react/src/inovexCustom.ts` and should only left out if ionic takes care of changing propnames.

## License

* [MIT](https://raw.githubusercontent.com/ionic-team/ionic/master/LICENSE)
