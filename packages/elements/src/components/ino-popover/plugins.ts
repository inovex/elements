// See https://atomiks.github.io/tippyjs/v5/plugins/

export const hideOnPopperBlur = {
  name: 'hideOnPopperBlur',
  defaultValue: true,
  fn(instance) {
    return {
      onCreate() {
        instance.popper.addEventListener('focusout', event => {
          if (
            instance.props.hideOnPopperBlur &&
            event.relatedTarget &&
            !instance.popper.contains(event.relatedTarget)
          ) {
            instance.hide();
          }
        });
      }
    };
  }
};

export const hideOnEsc = {
  name: 'hideOnEsc',
  defaultValue: true,
  fn({ hide }) {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        hide();
      }
    }

    return {
      onShow() {
        document.addEventListener('keydown', onKeyDown);
      },
      onHide() {
        document.removeEventListener('keydown', onKeyDown);
      }
    };
  }
};
