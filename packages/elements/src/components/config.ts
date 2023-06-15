export interface InoElementsConfig {
  /**
   * A supported locale for currency number formatting.
   * See https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
   */
  currencyLocale: string;
}
export interface InoElementsWindow extends Window {
  inoElements: any;
  __zone_symbol__requestAnimationFrame?: (ts: FrameRequestCallback) => number;
}
export class Config {
  get(key: keyof InoElementsConfig, fallback?: any): any {
    const value = this.storage && this.storage[key];
    return value ?? fallback;
  }

  patch(key: keyof InoElementsConfig, value?: any) {
    if (this.storage && this.storage[key]) {
      this.storage[key] = value;
    }
  }

  private get storage(): InoElementsConfig | null {
    if (typeof (window as any) !== 'undefined') {
      const configWrapper = (window as any as InoElementsWindow).inoElements;
      if (configWrapper && configWrapper.config) {
        return configWrapper.config;
      }
    }
    return null;
  }
}
export const inoElementsConfig = new Config();

/**
 * Setups the config. Function to be called during initialization to set config / user preferences.
 *
 * @param config A given config
 */
export const setupConfig = (config: InoElementsConfig) => {
  const win = window as any as InoElementsWindow;
  const namespace = win.inoElements;
  if (
    namespace &&
    namespace.config &&
    namespace.config.constructor.name !== 'Object'
  ) {
    console.error('inovex elements config was already initialized');
    return;
  }
  win.inoElements = win.inoElements || {};
  win.inoElements.config = config;
};
