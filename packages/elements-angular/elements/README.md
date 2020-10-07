# @inovex.de/elements-angular

> The following information is only relevant if you want to contribute to this `@inovex.de/elements-angular`
> package. If you just want to use the UI elements for your own project, please refer to the top level
> [README](../../../README.md).

This is the integration layer package for integrating the inovex elements into Angular projects.

## Contributing

Please refer to the top level [README](../../../README.md) to see the available script commands.

### Adding or Removing Components

Everytime a new component ist added or removed from the `@inovex.de/elements` package you must ensure that
the following files are written after running the `build` command:

* `src/directives/proxies-list.ts`
* `src/directives/proxies.ts`

These files are updated automatically. This ensures that the component is available for the consumer in
the Angular world. If the component needs a custom value accessor to support the `ngModel` directive,
please update the following files also:

* `src/public-api` (modify)
* `src/ino-elements.module.ts` (modify)
* `src/directives/control-value-accesors/ino-COMPONENT-NAME-value-accessor.directive.ts` (create)

### Updating the Angular Integration Layer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.
as an Angular library project. So you can update this project as you would do any other Angular
library project.

## License

TBD
