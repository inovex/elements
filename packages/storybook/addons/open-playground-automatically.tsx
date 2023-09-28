import { addons } from '@storybook/addons';

const ADDON_ID = 'open-playground-automatically';

addons.register(ADDON_ID, () => {
  console.log('running');
  // const addClickListenersToSidebarItems = () => {
  const sidebarContainer = document.querySelector(
    'nav.container.sidebar-container'
  );

  if (sidebarContainer) {
    console.log('found sidebar');
    const buttons = document.querySelectorAll('.sidebar-item');
    console.log(buttons.length);

    if (buttons.length === 0) return;

    // observer.disconnect();

    buttons.forEach(btn => {
      const neighboringDiv = btn.nextElementSibling;
      if (neighboringDiv) {
        const anchorTag = neighboringDiv.querySelector(
          'a[id*="--playground"]'
        ) as HTMLAnchorElement;
        if (anchorTag) {
          btn.addEventListener('click', () => {
            console.log('clicked');
            window.location.href = anchorTag.href;
          });
        }
      }
    });
  }

  document.on;
  // };

  // // Instantiate the observer
  // const observer = new MutationObserver((mutationsList, observer) => {
  //   for (const mutation of mutationsList) {
  //     if (mutation.type === 'childList') {
  //       addClickListenersToSidebarItems();
  //     }
  //   }
  // });

  // // Start observing the entire body for changes in the child list
  // observer.observe(document.body, { childList: true, subtree: true });

  // // Optionally, disconnect the observer later if you no longer want to watch for mutations
  // // observer.disconnect();
});
``;
