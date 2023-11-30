# @inovex.de/ui-patterns

This package is a dedicated library for UI patterns, designed to accelerate the development of beautifully crafted web applications. It leverages the power of our inovex Elements web components, styled with Tailwind CSS.

## Motivation

The primary goal of this library is to provide users with a collection of common UI patterns to facilitate rapid and efficient UI development. These patterns demonstrate the versatility of the inovex Elements web components and aim to inspire users in crafting visually appealing web applications.

## How It Works Internally

The `@inovex.de/ui-patterns` package utilizes a Vite-based application to manage and compile our UI patterns. Here's an overview of its internal mechanics:

- **Compilation and Build Process**: 
  - The package uses Vite to compile the patterns into a single JavaScript file, `ui-patterns.js`, which is located in the `dist` folder. This file includes all the necessary code for the patterns to function in a React environment.

- **Pattern Structure and Development**:
  - Developers create new UI patterns as a combination of HTML and TSX files within the `src/patterns` directory. 
  - These patterns leverage `inovex Elements` web components and are styled using Tailwind CSS.

- **Static File Copying**:
  - The Vite configuration automatically copies the HTML files from `src/patterns` to a specified directory in the landing page (`public/patterns-html`). This ensures that the raw HTML code of the patterns are highlighted in the landingpage and replicatable for our users.

- **Integration with Landing Page**:
  - The `@inovex.de/ui-patterns` is installed into the our`landingpage` package as a dependency.
  - Developers and contributors can then easily import individual patterns from this compiled library into the landing page project using standard module imports.


## Contributing

To begin contributing a new UI pattern, initiate the Vite application server by running the `start:ui-patterns` command.

1. Navigate to `ui-patterns/src/patterns` and create a new folder for your pattern.
2. Inside this folder, create an HTML file with the Tailwind-styled UI pattern using `inovex-elements` components. 
3. Then, create a corresponding TSX file and import the HTML content, wrapping it with our `PatternWrapper`.

   Example:

   ```html
   <!-- my-pattern-a.html -->
   <h1 class="text-3xl font-bold underline">
     Tailwind h1
   </h1>
   <ino-button>
     Click me
   </ino-button>
   ```

   ```js
   // my-pattern-a.tsx
   import htmlContent from './my-pattern-a.html?raw';
   import PatternWrapper from '../PatternWrapper';

   function MyPatternA() {
      return <PatternWrapper htmlContent={htmlContent} />;
   }  

   export default MyPatternA;
   ```
4. Run the `build:ui-patterns` command. The Vite configuration will handle the copying of HTML code to the landingpage and ensure proper integration of the React component.

5. Finally, import the new pattern component and its HTML content at the beginning of the landingpage pattern page:

   ```js
   // landingpage/pages/[lang]/library/patterns/index.tsx
   import { MyPatternA } from '@inovex.de/ui-patterns'
   import myPatternAhtml from 'public/patterns-html/my-pattern-a.html';
   ```

   - Add the pattern to the `PreviewBox` component, which will display the pattern and the highlighted code snippet:

   ```js
   <PreviewBox
      title="MyPatternA"
      id="MyPatternA"
      description="Pattern description here..."
      previewComponent={<MyPatternA />}
      highlightedCode={highlightedCodes.login}
      rawCode={codeStrings.login}
   />
   ```

   - Include the HTML string in the `codeStrings` object within `getStaticProps`:

   ```js
   export const getStaticProps: GetStaticProps = async (ctx) => {
      const codeStrings = {
         login: myPatternAhtml,
         // other patterns...
      };
      // ...
   };
   ```
   6. Additionally, import the pattern in the `ui-patterns-playground` package. This allows to showcase the pattern in the playground and test it in a development environment.
   
Done! Your contribution is now live, both in dev mode and once deployed on our official landing page. It's ready to be viewed and copied on the library patterns page, showcasing the potential of our inovex Elements library. **Thanks for contributing and enriching our library with your UI Pattern!**
