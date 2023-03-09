export function Storybook() {
  return (
        <div>
              <iframe src="https://elements.inovex.de/version/v7.1.2/?path=/story/docs-welcome--page"
            style={{  
                position: 'absolute',
                left: 0,
                top: 120,
                height: 'calc(100vh - 120px)', // 120px = Navbar height
                width: '100%',
                border: 'none'
            }}>
          </iframe> 
        </div>
  );
}

export default Storybook;
