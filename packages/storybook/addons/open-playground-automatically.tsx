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

          // Attach click event to added buttons whose text starts with "ino-"
          addedNodes.forEach(node => {
            if (node instanceof HTMLElement) {
              const buttons = node.querySelectorAll(
                'button.sidebar-item'
              ) as NodeListOf<HTMLElement>;
              buttons.forEach(button => {
                if (button.innerText.startsWith('ino-')) {
                  console.log(button);

                  attachClickEvent(button);
                }
              });
            }
          });
        }
      }
    });

    // Observe only for direct child list changes (added/removed elements)
    observer.observe(document.body, { childList: true, subtree: true });
  };

  initializeObserver();
});
