import { InoMeetupAccordion } from '@inovex.de/elements-react';

export default function FaqSection() {
  return (
    <div className="max-w-6xl p-6 bg-white ">
      <h3 className="text-3xl header-d3 mb-8 text-inovex-primary">FAQs</h3>
      
      <InoMeetupAccordion accordionTitle="What are Web Components?">
        Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. They are based on existing web standards and work across modern browsers.
      </InoMeetupAccordion>
      
      <InoMeetupAccordion accordionTitle="How can I use Web Components in my project?">
        You can use Web Components in any project by importing them into your HTML file or JavaScript framework. For example, with the inovex Elements library, you can install it using npm and then import the components you need in your React, Angular, or Vue.js project.
      </InoMeetupAccordion>
      
      <InoMeetupAccordion accordionTitle="What are the main advantages of using Web Components?">
        The main advantages of Web Components include reusability across different frameworks, encapsulation of styles and functionality, and the ability to create custom elements that work seamlessly with existing HTML, CSS, and JavaScript.
      </InoMeetupAccordion>
      
      <InoMeetupAccordion accordionTitle="How do I style Web Components?">
        With inovex Elements, you can use CSS variables like --ino-input-line-color to customize the appearance of components.
      </InoMeetupAccordion>
      
      <InoMeetupAccordion accordionTitle="Can I use Web Components with React?">
        We provide a React wrapper, making it easy to use our web components in React projects with a familiar syntax.
      </InoMeetupAccordion>
      
      <InoMeetupAccordion accordionTitle="What are slots in Web Components?">
        Slots are a feature of Web Components that allow you to define placeholders in your component that can be filled with custom content. This makes components more flexible and customizable.
      </InoMeetupAccordion>
    </div>
  );
}