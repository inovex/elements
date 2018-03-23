import { Component, Prop, State, Watch, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'st-input',
  styleUrl: 'st-input.scss',
  shadow: false
})
export class stInput {

  //
  // Element reference
  //
  @Element() el: HTMLElement;

  //
  // Internal state (data flow: @Prop -> @State)
  //
  @State() intAccesskey: string;
  @State() intAutocomplete: string;
  @State() intAutofocus = false;
  @State() intDisabled = false;
  @State() intForm: string;
  @State() intHasError = false;
  @State() intHelperText: string;
  @State() intIcon: string;
  @State() intMaxLength: number;
  @State() intMaxRows = 0;
  @State() intMultiline = false;
  @State() intName: string;
  @State() intPlaceholder: string;
  @State() intRows = 1;
  @State() intShowCounter = false;
  @State() intSpellcheck = false;
  @State() intTabindex: number;
  @State() intType = 'text';
  @State() intValue: string;

  // Other internal state
  @State() lengthExceeded: boolean;
  @State() mirrorText: string;

  //
  // Public props + watchers on that props
  //
  @Prop() stAccesskey: string;
  @Watch('stAccesskey')
  setAccesskey(newVal) {
    this.intAccesskey = newVal;
  }

  @Prop() stAutocomplete: string;
  @Watch('stAutocomplete')
  setAutocomplete(newVal) {
    this.intAutocomplete = newVal;
  }

  @Prop() stAutofocus: boolean;
  @Watch('stAutofocus')
  setAutofocus(newVal) {
    this.intAutofocus = newVal;
  }

  @Prop() stDisabled: boolean;
  @Watch('stDisabled')
  setDisabled(newVal) {
    this.intDisabled = newVal;
  }

  @Prop() stForm: string;
  @Watch('stForm')
  setForm(newVal) {
    this.intForm = newVal;
  }

  @Prop() stHasError: boolean;
  @Watch('stHasError')
  setError(newVal) {
    this.intHasError = newVal;
  }

  @Prop() stHelperText: string;
  @Watch('stHelperText')
  setHelperText(newVal) {
    this.intHelperText = newVal;
  }

  @Prop() stIcon: string;
  @Watch('stIcon')
  setIcon(newVal) {
    this.intIcon = newVal;
  }

  @Prop() stMaxLength: number;
  @Watch('stMaxLength')
  setMaxLength(newVal) {
    this.intMaxLength = newVal;
  }

  @Prop() stMaxRows: number;
  @Watch('stMaxRows')
  setMaxRows(newVal) {
    this.intMaxRows = newVal;
    this.autoGrow();
  }

  @Prop() stMultiline: boolean;
  @Watch('stMultiline')
  setMultiline(newVal) {
    this.intMultiline = newVal;
  }

  @Prop() stName: string;
  @Watch('stName')
  setName(newVal) {
    this.intName = newVal;
  }

  @Prop() stPlaceholder: string;
  @Watch('stPlaceholder')
  setPlaceholder(newVal) {
    this.intPlaceholder = newVal;
  }

  @Prop() stRows: number;
  @Watch('stRows')
  setRows(newVal) {
    this.intRows = newVal;
    this.autoGrow();
  }

  @Prop() stShowCounter: boolean;
  @Watch('stShowCounter')
  setShowCounter(newVal) {
    this.intShowCounter = newVal;
  }

  @Prop() stSpellcheck: boolean;
  @Watch('stSpellcheck')
  setSpellCheck(newVal) {
    this.intSpellcheck = newVal;
  }

  @Prop() stTabindex: number;
  @Watch('stTabindex')
  setTabindex(newVal) {
    this.intType = newVal;
  }

  @Prop() stType: string;
  @Watch('stType')
  setType(newVal) {
    this.intType = newVal;
  }

  @Prop() stValue: string;
  @Watch('stValue')
  setValue(newVal) {
    this.intValue = newVal;
  }

  //
  // Public events
  //
  @Event() change: EventEmitter;

  //
  // Lifecycle hooks
  //
  componentWillLoad() {
    // getting the attribute values the first time
    this.intAutocomplete = this.stAutocomplete;
    this.intAutofocus = this.stAutofocus;
    this.intForm = this.stForm;
    this.intName = this.stName;
    this.intSpellcheck = this.stSpellcheck;
    this.intValue = this.stValue || '';
    this.intHelperText = this.stHelperText;
    this.intHasError = this.stHasError;
    this.intMaxLength = this.stMaxLength;
    this.intShowCounter = this.stShowCounter;
    this.intPlaceholder = this.stPlaceholder;
    this.intType = this.stType;
    this.intTabindex = this.stTabindex;
    this.intIcon = this.stIcon;
    this.intAccesskey = this.stAccesskey;
    this.intMultiline = this.stMultiline;
    this.intMaxRows = this.stMaxRows;
    this.intRows = this.stRows;

    this.updateLengthExceeded();
  }

  componentDidLoad() {
    this.autoGrow();
  }

  //
  // Private methods
  //
  private updateLengthExceeded() {
    this.lengthExceeded = this.intMaxLength && (this.intValue.length > this.intMaxLength);
  }

  private handleChange(event) {
    event.preventDefault();

    this.intValue = event.target.value;
    this.change.emit(this.intValue);

    this.updateLengthExceeded();
    this.autoGrow();
  }

  private autoGrow() {
    if (!this.intMultiline)
      return;

    let tokens;
    if (this.intValue) {
      tokens = this.intValue
        .replace(/&/gm, '&amp;')
        .replace(/"/gm, '&quot;')
        .replace(/'/gm, '&#39;')
        .replace(/</gm, '&lt;')
        .replace(/>/gm, '&gt;')
        .split('\n');
    } else {
      tokens = [''];
    }

    let valueForMirror = [''];
    if (this.intMaxRows > 0 && tokens.length > this.intMaxRows) {
      valueForMirror = tokens.slice(0, this.intMaxRows);
    } else {
      valueForMirror = tokens.slice(0);
    }

    while (this.intRows > 0 && valueForMirror.length < this.intRows) {
      valueForMirror.push('');
    }

    // &#160; instead &nbsp; allows using this element in XHTML
    this.el.querySelector('.mirror').innerHTML = valueForMirror.join('<br/>') + '&#160;';
  }

  private classes(elementClass) {
    let classes = [];

    classes.push(elementClass);
    switch (elementClass) {
      case 'placeholder':
        if (this.intValue) {
          classes.push('placeholder--above');
        }
        break;
      case 'wrapper':
        if (this.intHasError) {
          classes.push('has-error');
        }
        break;
      case 'counter':
        if (this.lengthExceeded) {
          classes.push('is-exceeded');
        }
        break;
      case 'icon':
        if (this.intIcon) {
          classes.push(`icon--visible`)
          classes.push(`icon--${this.intIcon}`)
        }
        break;
    }

    return classes.join(' ');
  }

  private counterText() {
    if (this.intShowCounter) {
      return this.intMaxLength ? `<span>${this.intValue.length}</span>/${this.intMaxLength}` : `${this.intValue.length}`
    }
  }

  private inputTemlate() {
    return ([
      <input
        class="input"
        autocomplete={this.intAutocomplete}
        autofocus={this.intAutofocus}
        form={this.intForm}
        name={this.intName}
        spellcheck={this.intSpellcheck}
        type={this.intType}
        value={this.intValue}
        tabindex={this.intDisabled ? '-1' : undefined}
        onKeyUp={ (event: UIEvent) => this.handleChange(event) }
        accessKey={this.intAccesskey}
      />,

      this.placeholderWithBorderTemplate(),
      this.bottomLineTemplate()
    ])
  }

  private textAreaTemplate() {

    return (
        <div class="multiline-wrapper">
          <div class="mirror" aria-hidden="true">&#160;</div>

          <div class="fit">
            <textarea
              class="input"
              style={ {resize: 'none'} }
              autofocus={this.intAutofocus}
              form={this.intForm}
              name={this.intName}
              spellcheck={this.intSpellcheck}
              value={this.intValue}
              tabindex={this.intDisabled ? '-1' : undefined}
              onKeyUp={ (event: UIEvent) => this.handleChange(event) }
              accessKey={this.intAccesskey}
              rows={this.intRows}
            />

            {this.placeholderWithBorderTemplate()}
            {this.bottomLineTemplate()}
          </div>
        </div>
    )
  }

  private placeholderWithBorderTemplate() {
    return ([
      <div class={this.classes('placeholder')}>{this.intPlaceholder}</div>,
      <div class="border-wrapper">
        <div class="border"></div>
      </div>
    ])
  }

  private bottomLineTemplate() {
    return (
      <div class="bottom-line">
        <div class="helper-text">{this.intHelperText}</div>
        <div class={this.classes('counter')} innerHTML={this.counterText()}></div>
      </div>
    )
  }

  render() {
    return (
      <div class="composer">
        <div class={this.classes('icon')}></div>
        <div class={this.classes('wrapper')}>
          {this.intMultiline ? this.textAreaTemplate() : this.inputTemlate() }
        </div>
      </div>
    );
  }
}
