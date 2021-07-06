import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import { MDCLinearProgress } from '@material/linear-progress/component';
import classNames from 'classnames';

@Component({
  tag: 'ino-progress-bar',
  styleUrl: 'ino-progress-bar.scss',
  shadow: true,
})
export class InoProgressBar implements ComponentInterface {
  private mdcProgress: MDCLinearProgress;

  @Element() el: HTMLElement;

  /**
   * Sets the buffer progress
   */
  @Prop() buffer?: number = 0;
  @Watch('buffer')
  bufferChanged(newVal: number) {
    this.mdcProgress.buffer = newVal;
  }

  /**
   * Indicates whether the state of the progress bar is indeterminate
   */
  @Prop() indeterminate?: boolean = false;
  @Watch('indeterminate')
  indeterminateChanged(newVal: boolean) {
    this.mdcProgress.determinate = !newVal;
  }

  /**
   * Sets the label of the progress bar
   */
  @Prop() label?: string;

  /**
   * Sets the progress of the progress bar.
   * Should always be between 0 and 1
   */
  @Prop() progress?: number = 0;
  @Watch('progress')
  progressChanged(newVal: number) {
    this.mdcProgress.progress = newVal;
  }

  componentDidLoad(): void {
    this.initializeComponent();
  }

  disconnectedCallback(): void {
    this.mdcProgress?.destroy();
  }

  private initializeComponent = () => {
    this.mdcProgress = new MDCLinearProgress(
      this.el.shadowRoot.querySelector('.mdc-linear-progress')
    );
    this.mdcProgress.determinate = !this.indeterminate;
    this.mdcProgress.progress = this.progress;
    this.mdcProgress.buffer = this.buffer;
  };

  render() {
    const progressBarClasses = classNames({
      'mdc-linear-progress': true,
    });

    return (
      <Host>
        <div
          role="progressbar"
          class={progressBarClasses}
          aria-label={this.label}
          aria-valuemin="0"
          aria-valuemax="1"
        >
          <div class="mdc-linear-progress__buffer">
            <div class="mdc-linear-progress__buffer-bar"></div>
            <div class="mdc-linear-progress__buffer-dots"></div>
          </div>
          <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
            <span class="mdc-linear-progress__bar-inner"></span>
          </div>
          <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
            <span class="mdc-linear-progress__bar-inner"></span>
          </div>
        </div>
      </Host>
    );
  }
}
