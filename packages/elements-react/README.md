# @inovex/elements-react

> The following information is only relevant if you want to contribute to this `@inovex/elements-react`
> package. If you just want to use the UI elements for your own project, please refer to the top level
> [README](../../README.md).

This is the integration layer package for integrating the inovex elements into React projects.

## Contributing

Please refer to the top level [README](../../README.md) to see the available script commands.

### Adding or Removing Components

Everytime a new component ist added or removed from the `@inovex/elements` package, you must make sure
that `src/components/index.ts` is adjusted properly. For each new component a new export is needed to
make that element available for the consumer of this package and therefor for the React world. Same
goes for removing a component.

### Updating the React Integration Layer

See https://github.com/ionic-team/ionic/tree/master/packages/react for more info about implementation
details. The structure of files and folders in this package should be in sync with that of the react
package in the ionic repo.

## License

TBD
