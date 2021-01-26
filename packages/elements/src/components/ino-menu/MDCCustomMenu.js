import { MDCMenu } from '@material/menu';

export class MDCCustomMenu extends MDCMenu {
  // Really hacky
  constructor(mdcMenu) {
    super(mdcMenu);

    // TODO: wait for https://github.com/material-components/material-components-web/issues/4357 to be resolved
    this.foundation.handleKeydown = (_) => {};
    this.foundation.handleClick = (_) => {};
    this.menuSurface_.handleKeydown = (_) => {};
    this.foundation.handleMenuSurfaceOpened = (_) => {};
    this.foundation.handleItemAction = (_) => {};

    this.menuSurface_.handleBodyClick = (e) => {
      if (this.root.contains(e.target)) return;

      this.root.dispatchEvent(
        new CustomEvent('menu:outside-click', { bubbles: true })
      );
    };
  }
}
