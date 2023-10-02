import { addons } from '@storybook/addons';

const customSections = [
  'structure',
  'input',
  'buttons',
  'graphic',
  'notification',
];

addons.register('open-playground-automatically', () => {
  // Function to set up the observer
  function initializeExtension() {
    console.log('running');

    const buttons = document.querySelectorAll('button.sidebar-item');

    if (buttons.length === 0) {
      // If no buttons are found, wait and try again
      setTimeout(initializeExtension, 300);
      return;
    }

    console.log(buttons.length);

    buttons.forEach(button => {
      const neighboringElement = button.nextElementSibling;
      if (neighboringElement) {
        const hasAnchorTag = neighboringElement.querySelector(
          'a[id*="--playground"]'
        ) as HTMLAnchorElement;
        if (hasAnchorTag) {
          console.log(button);

          button.addEventListener('click', () => {
            console.log('clicked');
            // window.location.href = hasAnchorTag.href;
          });
        }
      }
    });

    const sectionObserver = new MutationObserver((mutations, observer) => {});

    // Create an observer instance for the sidebar container
    const sidebarObserver = new MutationObserver(function(mutations, observer) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          console.log('sidebar changed');

          const subheadings = document.querySelectorAll('.sidebar-subheading');
          // mutation.addedNodes.forEach(addedNode => {
          //   console.log('New sidebar-item added:', addedNode);
          // });
          console.log(subheadings);

          if (subheadings) {
            // subheadings.forEach(element => {
            //   console.log(element);
            //   const button = element.querySelector('button');
            //   if (button) {
            //     console.log(button);
            //     button.addEventListener('click', () => {
            //       console.log('clicked');
            //     });
            //   }
            // });
            // sidebarObserver.disconnect();
          }

          // mutation.removedNodes.forEach(removedNode => {
          //   console.log('sidebar-item removed:', removedNode);
          // });
        }
      });
    });

    // Configuration of the sidebarObserver:
    const config = { childList: true, subtree: true };

    const sidebarContainer = document.querySelector('sidebar-container');

    if (sidebarContainer) {
      // Pass in the sidebarContainer as the target node for the observer
      sidebarObserver.observe(sidebarContainer, config);
    }

    // // Function to add event listeners to 'sidebar-item' elements
    // function addEventListeners() {
    //   const buttons = document.querySelectorAll('button.sidebar-item');

    //   if (buttons.length === 0) return;

    //   buttons.forEach(btn => {
    //     const neighboringElement = btn.nextElementSibling;
    //     if (neighboringElement) {
    //       const hasAnchorTag = neighboringElement.querySelector(
    //         'a[id*="--playground"]'
    //       ) as HTMLAnchorElement;
    //       if (hasAnchorTag) {
    //         // btn.addEventListener('click', () => {
    //         //   console.log('clicked');
    //         //   // window.location.href = hasAnchorTag.href;
    //         // });
    //       }
    //     }
    //   });
    // }

    // // Call the addEventListeners function after a slight delay
    // setTimeout(addEventListeners, 500); // You can adjust the delay as needed
  }

  // Call the initialization function
  initializeExtension();
});
