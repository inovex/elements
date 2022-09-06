import MyTest from "@/workshop/MyComponent.vue"; // <-- the .vue is important!

/**
 *  add your components/ui-pattern below, give it a label and some unique id
 *  your component will be available under .../workshop/my-unique-id
 */
export const components = [
  {
    label: 'Meine Komponente',
    id: 'my-component',
    component: MyTest
  }
]
