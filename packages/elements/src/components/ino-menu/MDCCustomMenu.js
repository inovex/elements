import { MDCMenu } from '@material/menu';

export class MDCCustomMenu extends MDCMenu {
  // Really hacky
  // TODO: Test if basic onclick and keydown events still come trough
  constructor(mdcMenu) {
    super(mdcMenu);
    this.foundation.handleKeydown = (evt) => {};
    this.foundation.handleClick = (evt) => {};
    this.menuSurface_.handleBodyClick = (evt) => {};
    this.menuSurface_.handleKeydown = (evt) => {};
  }
}
