import { DOCUMENT } from '@angular/common';
import { APP_INITIALIZER } from '@angular/core';
import type { Provider } from '@angular/core';
import { appInitialize, ConfigToken } from '@inovex.de/elements-angular/shared';
import { InoElementsConfig } from '@inovex.de/elements';

export const provideElementsAngular = (
  config?: InoElementsConfig,
): Provider[] => {
  return [
    {
      provide: ConfigToken,
      useValue: config,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitialize,
      multi: true,
      deps: [ConfigToken, DOCUMENT],
    },
  ];
};
