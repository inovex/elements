import { MDCMenu } from '@material/menu';

export class MDCCustomMenu extends MDCMenu {

  // Really hacky
  // TODO: Test if basic onclick and keydown events still come trough
  constructor(mdcMenu) {
    super(mdcMenu);
    this.foundation_.handleKeydown = (evt) => {};
    this.foundation_.handleClick = (evt) => {};
    this.menuSurface_.handleBodyClick_ = (evt) => {};
    this.menuSurface_.handleKeydown_ = (evt) => {};
  }
}
