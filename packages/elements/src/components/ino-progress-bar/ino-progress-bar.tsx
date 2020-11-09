import { Component, ComponentInterface, Element, Host, Prop, Watch, h } from '@stencil/core';
import { MDCLinearProgress } from '@material/linear-progress/component';
import classNames from 'classnames';

@Component({
  tag: 'ino-progress-bar',
  styleUrl: 'ino-progress-bar.scss',
  shadow: true
})
export class InoProgressBar implements ComponentInterface{
  private mdcProgress: MDCLinearProgress;

  @Element() el: HTMLElement;

  /**
   * Sets the buffer progress
   */
  @Prop() inoBuffer?: number = 0;
  @Watch('inoBuffer')
  bufferChanged(newVal: number) {
    this.mdcProgress.buffer = newVal;
  }

  /**
   * Indicates whether the state of the progress bar is indeterminate
   */
  @Prop() inoIndeterminate?: boolean = false;
  @Watch('inoIndeterminate')
  indeterminateChanged(newVal: boolean) {
    this.mdcProgress.determinate = !newVal;
  }

  /**
   * Sets the label of the progress bar
   */
  @Prop() inoLabel?: string;

  /**
   * Reverses the progress bar
   */
  @Prop() inoReversed?: boolean = false;
  @Watch('inoReversed')
  reverseChanged(newVal: boolean) {
    this.mdcProgress.reverse = newVal;
  }

  /**
   * Sets the progress of the progress bar
   * Should always be between 0 and 1
   */
  @Prop() inoProgress?: number = 0;
  @Watch('inoProgress')
  progressChanged(newVal: number) {
    this.mdcProgress.progress = newVal;
  }

  componentDidLoad(): void {
    this.initializeComponent();
  }

  componentWillUnload(): void {
    this.mdcProgress.destroy();
  }

  private initializeComponent = () => {
    this.mdcProgress = new MDCLinearProgress(this.el.shadowRoot.querySelector('.mdc-linear-progress'));
    this.mdcProgress.determinate = !this.inoIndeterminate;
    this.mdcProgress.progress = this.inoProgress;
    this.mdcProgress.buffer = this.inoBuffer;
    this.mdcProgress.reverse = this.inoReversed;
  };

  render() {
    const progressBarClasses = classNames({
      'mdc-linear-progress': true,
      'mdc-linear-progress--reversed': this.inoReversed
    });

    return (
      <Host>
        <div
          role="progressbar"
          class={progressBarClasses}
          aria-label={this.inoLabel}
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
