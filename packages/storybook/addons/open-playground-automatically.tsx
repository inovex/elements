import { addons } from '@storybook/addons';

addons.register('open-playground-automatically', () => {
  // Function to add click event listener to eligible buttons
  const attachClickEvent = (button: HTMLElement) => {
    button.addEventListener('click', () => {
      console.log('clicked');
    });
  };
  console.log('running');

  // Function to initialize and attach the MutationObserver
  const initializeObserver = () => {
    const observer = new MutationObserver(mutationsList => {
      console.log('mutated');

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

          // Attach click event to added buttons whose text starts with "ino-"
          addedNodes.forEach(node => {
            if (node instanceof HTMLButtonElement) {
              if (node.innerText.startsWith('ino-')) {
                console.log('added click listener');
                console.log('target', mutation.target);
                console.log('found', mutation.addedNodes);

                attachClickEvent(node);
              }
            }
          });
        }
      }
    });

    let nav = document.querySelector('nav.container.sidebar-container');

    if (nav) {
      console.log(nav);
      // Observe only for direct child list changes (added/removed elements)
      observer.observe(nav, { childList: true, subtree: true });
    }
  };

  initializeObserver();
});
