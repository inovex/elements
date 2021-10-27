# @inovex.de/elements-react

This is the integration layer package for integrating the inovex elements into React projects.

## Installation

See [instructions](https://github.com/inovex/elements/tree/master/packages/storybook/src/stories/docs/framework-integration) how to integrate it into your project.

## Contributing

Please refer to the top level [README at GitHub](https://github.com/inovex/elements) to see the available script commands.

### Adding or Removing Components

Everytime a new component ist added or removed from the `@inovex.de/elements` package, you must make sure
that `src/components/index.ts` is adjusted properly. For each new component a new export is needed to
make that element available for the consumer of this package and therefor for the React world. Same
goes for removing a component.

### Updating the React Integration Layer

See https://github.com/ionic-team/ionic/tree/master/packages/react for more info about implementation
details. The structure of files and folders in this package should be in sync with that of the react
package in the ionic repo.

## License

MIT
