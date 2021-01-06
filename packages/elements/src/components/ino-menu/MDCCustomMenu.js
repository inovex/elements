import { MDCMenu } from '@material/menu';

export class MDCCustomMenu extends MDCMenu {

  // Really hacky
  constructor(mdcMenu) {
    super(mdcMenu);

    // Prevent menu from closing
    this.foundation.handleKeydown = _ => {};
    this.foundation.handleClick = _ => {};
    this.menuSurface_.handleKeydown = _ => {};
    this.foundation.handleMenuSurfaceOpened = _ => {};
    this.foundation.handleItemAction = _ => {};

    this.menuSurface_.handleBodyClick = _ =>  this.root.dispatchEvent(
        new CustomEvent('menu:close', {  bubbles: true, }
      )
    );
  }
}
