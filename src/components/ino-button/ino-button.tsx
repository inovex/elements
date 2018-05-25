import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-button',
  styleUrl: 'ino-button.scss',
  shadow: false
})
export class Button {
  /**
   * Sets the autofocus for this element.
   */
  @Prop() autofocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The name of the element.
   */
  @Prop() name?: string;

  /**
   * The form id this element origins to.
   */
  @Prop() form?: string;

  /**
   * The type of this form.
   *
   * Can either be `button`, `submit` or `reset`.
   */
  @Prop() type?: 'button'|'submit'|'reset';


  /**
   * Sets a secondary button style
   */
  @Prop() inoSecondary?: boolean;

  /**
   * Appends an icon before the text.
   */
  @Prop() inoIconLeft?: string;

  /**
   * Prepends an icon after the text.
   */
  @Prop() inoIconRight?: string;


  render() {
    return (
      <button
        autoFocus={this.autofocus}
        disabled={this.disabled}
        name={this.name}
        class={this.inoSecondary && 'secondary'}
        type={this.type}
        form={this.form}>

        {this.inoIconLeft && <ino-icon class="icon-left" ino-icon={this.inoIconLeft}></ino-icon>}
        <slot />
        {this.inoIconRight && <ino-icon class="icon-right" ino-icon={this.inoIconRight}></ino-icon>}
      </button>
    );
  }
}
