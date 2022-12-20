type RouteTree = MainRoute[];

type Route = {
  name: string;
  url: string;
};

type MainRoute = Route & {
  subRoutes: Route[];
};

export enum MainRoutes {
  HOME = '',
  GETTING_STARTED = '/getting-started',
  LIBRARY = '/library',
  EXPLORE = '/explore',
  ABOUT = '/about',
}

export enum SubRoutes {
  HOME_INFO = 'info',
  HOME_CORE_ASPECTS = 'core-aspects',
  HOME_COMPONENTS = 'components',
  HOME_CONTACT = 'contact',
  HOME_FAQ = 'faq',
  EXPLORE_EXAMPLES = 'examples',
  EXPLORE_PATTERNS = 'patterns',
  EXPLORE_RESSOURCES = 'ressources',
  EXPLORE_DEMOS = 'demos',
  GETTING_STARTED_JAVASCRIPT = 'javascript',
  GETTING_STARTED_REACT = 'react',
  GETTING_STARTED_ANGULAR = 'angular',
  GETTING_STARTED_VUE = 'vue',
  LIBRARY_STYLEGUIDE = 'styleguide',
  LIBRARY_COMPONENTS = 'components',
  LIBRARY_PATTERNS = 'patterns',
  LIBRARY_CHANGELOGS = 'changelogs',
  ABOUT_TEAM = 'team',
  ABOUT_HISTORY = 'history',
  ABOUT_ACTIVITY = 'activity',
}

// TODO: create meaningful routes
export const Routes: RouteTree = [
  {
    name: 'home',
    url: MainRoutes.HOME,
    subRoutes: [
      {
        name: 'info',
        url: SubRoutes.HOME_INFO,
      },
      {
        name: 'core aspects',
        url: SubRoutes.HOME_CORE_ASPECTS,
      },
      {
        name: 'components',
        url: SubRoutes.HOME_COMPONENTS,
      },
      {
        name: 'faq',
        url: SubRoutes.HOME_FAQ,
      },
    ],
  },
  {
    name: 'explore',
    url: MainRoutes.EXPLORE,
    subRoutes: [
      {
        name: 'examples',
        url: SubRoutes.EXPLORE_EXAMPLES,
      },
      {
        name: 'patterns',
        url: SubRoutes.EXPLORE_PATTERNS,
      },
      {
        name: 'ressources',
        url: SubRoutes.EXPLORE_RESSOURCES,
      },
      {
        name: 'demos',
        url: SubRoutes.EXPLORE_DEMOS,
      },
    ],
  },
  {
    name: 'getting started',
    url: MainRoutes.GETTING_STARTED,
    subRoutes: [
      {
        name: 'javascript',
        url: SubRoutes.GETTING_STARTED_JAVASCRIPT,
      },
      {
        name: 'react',
        url: SubRoutes.GETTING_STARTED_REACT,
      },
      {
        name: 'angular',
        url: SubRoutes.GETTING_STARTED_ANGULAR,
      },
      {
        name: 'vue',
        url: SubRoutes.GETTING_STARTED_VUE,
      },
    ],
  },
  {
    name: 'library',
    url: MainRoutes.LIBRARY,
    subRoutes: [
      {
        name: 'styleguide',
        url: SubRoutes.LIBRARY_STYLEGUIDE,
      },
      {
        name: 'components',
        url: SubRoutes.LIBRARY_COMPONENTS,
      },
      {
        name: 'patterns',
        url: SubRoutes.LIBRARY_PATTERNS,
      },
      {
        name: 'changelogs',
        url: SubRoutes.LIBRARY_CHANGELOGS,
      },
    ],
  },
  {
    name: 'about',
    url: MainRoutes.ABOUT,
    subRoutes: [
      {
        name: 'team',
        url: SubRoutes.ABOUT_TEAM,
      },
      {
        name: 'history',
        url: SubRoutes.ABOUT_HISTORY,
      },
      {
        name: 'activity',
        url: SubRoutes.ABOUT_ACTIVITY,
      },
    ],
  },
];
