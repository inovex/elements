import { MDCDrawer } from '@material/drawer/component';

export class MDCCustomDrawer extends MDCDrawer {

  constructor(mdcDrawer) {
    super(mdcDrawer);
    this.foundation_.handleKeydown = (e) => {};
  }
}
