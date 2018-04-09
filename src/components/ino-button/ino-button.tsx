import { Component, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'ino-button',
  styleUrl: 'ino-button.scss',
  shadow: true
})
export class Button {
  @Prop() autofocus: boolean;
  @Prop() disabled: boolean;
  @Prop() name: string;
  @Prop() form: string; 
  @Prop() type: string;

  @Prop() secondary: boolean;
  @Prop() iconLeft: string;
  @Prop() iconRight: string;

  @Event() inoClick: EventEmitter;

  private parentForm: HTMLFormElement;

  @Element() el: HTMLElement;

  componentWillLoad() {
    if(this.form) {
      this.parentForm = document.getElementById(this.form) as HTMLFormElement;
    } else {
      // Search for parent form and submit it if necessary
      // See https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit
      for (let parent = this.el.parentElement; parent; parent = parent.parentElement) {
        if (parent.tagName == 'FORM') {
          this.parentForm = parent as HTMLFormElement;
          break;
        }
      }
    }
  }

  private handleClick(event: UIEvent) {
    event.preventDefault();
    this.inoClick.emit();

    if(this.parentForm && this.type) {
      if(this.type == 'reset') {
        this.parentForm.reset();
      } else if(this.type = 'submit') {
        this.parentForm.submit();
      }
    }
  }

  render() {
    return ([
      <button 
        autoFocus={this.autofocus}
        disabled={this.disabled}  
        name={this.name}  
        class={this.secondary && 'secondary'} 
        onClick={(event: MouseEvent) => this.handleClick(event)}>
        
        {this.iconLeft && <ino-icon class="icon-left" icon={this.iconLeft}></ino-icon>}
        <slot />
        {this.iconRight && <ino-icon class="icon-right" icon={this.iconRight}></ino-icon>}
      </button>
    ])
  }

}
