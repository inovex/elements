import MyTest from "@/workshop/MyComponent.vue";
import NavBar from "@/workshop/NavBar.vue";
import NavBarIcons from "@/workshop/NavBarIcons.vue"
import NavbarAction from "@/workshop/NavbarAction.vue";
import NavBarRight from "@/workshop/NavBarRight.vue"; // <-- the .vue is important!
import FilterButton from "@/workshop/FilterButton.vue"; // <-- the .vue is important!
import NicerHome from "@/workshop/team-nicer/Home.vue"; // <-- the .vue is important!

/**
 *  add your components/ui-pattern below, give it a label and some unique id
 *  your component will be available under .../workshop/my-unique-id
 */
export const components = [
  {
    label: 'Meine Komponente',
    id: 'my-component',
    component: MyTest
  },
  {
    label: 'NavBar',
    id: 'my-nav-bar',
    component: NavBar
  },
  {
    label: 'NavBar with Icons',
    id: 'my-nav-bar-with-icons',
    component: NavBarIcons
  },
  {
    label: 'NavBar with Action',
    id: 'my-nav-bar-with-action',
    component: NavbarAction
  },
  {
    label: 'NavBar Right',
    id: 'my-nav-bar-right',
    component: NavBarRight
  },
  {
    label: 'FilterButton',
    id: 'table',
    component: FilterButton
  },
  {
    label: 'Team Nicer - Home',
    id: 'team-nicer',
    component: NicerHome
  },
]
