import { addons } from '@storybook/addons';

// This addon efficiently adds click event handlers that automatically open the Playground page when a component folder is clicked.
addons.register('open-playground-automatically', () => {
  console.log('running');

  // Look for the nav element
  const navObserver = new MutationObserver(function(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const navElement = (mutation.target as HTMLElement).querySelector(
          'nav.container.sidebar-container'
        ) as HTMLElement;
        if (navElement) {
          console.log('found nav');
          observer.disconnect();
          listenForInoButtons(navElement);
          break;
        }
      }
    }
  });

  navObserver.observe(document.body, { childList: true, subtree: false });

  // Continously look for "ino-" buttons in the navigation
  function listenForInoButtons(target: HTMLElement) {
    const buttonObserver = new MutationObserver(function(
      mutationsList,
      observer
    ) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const addedNodes = Array.from(mutation.addedNodes);

          let target = mutation.target as HTMLElement;

          if (
            Array.from(target.classList).some(className =>
              className.startsWith('sto-')
            )
          ) {
          }

          // Attach click event to all visible component folder buttons
          addedNodes.forEach(node => {
            if (node instanceof HTMLButtonElement) {
              if (node.innerText.startsWith('ino-')) {
                attachClickEvent(node);
              }
            }
          });
        }
      }
    });

    const observerConfig = {
      attributes: true,
      childList: true,
      subtree: true,
    };

    buttonObserver.observe(target, observerConfig);
  }

  const attachClickEvent = (button: HTMLElement) => {
    button.addEventListener('click', () => {
      console.log('clicked');
    });
    console.log('added click listener');
  };
});
