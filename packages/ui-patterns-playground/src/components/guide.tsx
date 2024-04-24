function Guide() {
  const codeBgClass = 'bg-inovex-n-1 rounded-sm px-2 py-1';
  const liClass = 'mb-4 body-l  p-2';

  return (
    <div className="p-4">
      <h1 className="text-inovex-primary mb-6">Developing with Tailwind CSS and inovex Elements</h1>
      <div className="bg-inovex-white p-6 rounded-lg shadow-md">
        <p className="body-l mb-4">
          To develop new patterns using Tailwind CSS and inovex Elements, follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-4">
          <li className={liClass}>
            Install the Tailwind CSS IntelliSense extension in VS Code for enhanced autocomplete and linting. JetBrains
            IDEs include support for intelligent Tailwind CSS completions in your HTML when using{' '}
            <code className={codeBgClass}>@apply</code>.
          </li>
          <li className={liClass}>
            Utilize the predefined color palette from the inovex Elements theme in your Tailwind CSS classes.
          </li>
          <div className="p-4 shadow-inner bg-inovex-n-1 rounded-md inline-block">
            <p className="body-l mb-2">
              For example, to apply the inovex primary color as a background, use the class:
            </p>
            <pre className="bg-inovex-primary text-inovex-white rounded-md p-2 my-2 inline-block ">
              {"<div className='bg-inovex-primary'>...</div>"}
            </pre>
          </div>
          <li className={liClass}>
            Develop new patterns in the <code className={codeBgClass}>ui-patterns-playground</code> project. Add a route
            in <code className={codeBgClass}>App.tsx</code> for your new pattern and develop it there.
            <pre className="bg-inovex-n-1 rounded-sm p-2 mt-2 inline-block">
              {"<Route path='/new-pattern' element={<YourNewPatternComponent />} />"}
            </pre>
          </li>
          <li className={liClass}>
            Once your pattern is complete, transfer the code to the <code className={codeBgClass}>ui-patterns</code>{' '}
            library. Add the pattern's HTML structure to the library and build it.
          </li>
          <li className={liClass}>
            Finally, use the built component from the <code className={codeBgClass}>ui-patterns</code> library as the
            route element in this <code className={codeBgClass}>ui-patterns-playground</code> project.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Guide;
