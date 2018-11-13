export default events => storyFn => {

    const root = document && document.getElementById('root');
  
    events.forEach(element => {
      root.addEventListener(element.name, e => {
        element.handler(e);
      });
    });
  
    return storyFn();
  }
  