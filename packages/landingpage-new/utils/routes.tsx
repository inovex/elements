type RouteTree = MainRoute[];

type Route = {
  key: string;
  url: string;
};

type SubRoute = Route & {
  fragment: string;
};

type MainRoute = Route & {
  subRoutes: SubRoute[];
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
  HOME_KPI = 'kpi',
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
    key: 'home',
    url: MainRoutes.HOME,
    subRoutes: [
      {
        key: 'info',
        fragment: SubRoutes.HOME_INFO,
        url: `${MainRoutes.HOME}#${SubRoutes.HOME_INFO}`,
      },
      {
        key: 'core_aspects',
        fragment: SubRoutes.HOME_CORE_ASPECTS,
        url: `${MainRoutes.HOME}#${SubRoutes.HOME_CORE_ASPECTS}`,
      },
      {
        key: 'components',
        fragment: SubRoutes.HOME_COMPONENTS,
        url: `${MainRoutes.HOME}#${SubRoutes.HOME_COMPONENTS}`,
      },
      {
        key: 'faq',
        fragment: SubRoutes.HOME_FAQ,
        url: `${MainRoutes.HOME}#${SubRoutes.HOME_FAQ}`,
      },
    ],
  },
  {
    key: 'explore',
    url: MainRoutes.EXPLORE,
    subRoutes: [
      {
        key: 'examples',
        fragment: SubRoutes.EXPLORE_EXAMPLES,
        url: `${MainRoutes.EXPLORE}#${SubRoutes.EXPLORE_EXAMPLES}`,
      },
      {
        key: 'resources',
        fragment: SubRoutes.EXPLORE_RESSOURCES,
        url: `${MainRoutes.EXPLORE}#${SubRoutes.EXPLORE_RESSOURCES}`,
      },
      {
        key: 'demos',
        fragment: SubRoutes.EXPLORE_DEMOS,
        url: `${MainRoutes.EXPLORE}#${SubRoutes.EXPLORE_DEMOS}`,
      },
    ],
  },
  {
    key: 'getting_started',
    url: MainRoutes.GETTING_STARTED,
    subRoutes: [
      {
        key: 'javascript',
        fragment: SubRoutes.GETTING_STARTED_JAVASCRIPT,
        url: `${MainRoutes.GETTING_STARTED}/${SubRoutes.GETTING_STARTED_JAVASCRIPT}`,
      },
      {
        key: 'react',
        fragment: SubRoutes.GETTING_STARTED_REACT,
        url: `${MainRoutes.GETTING_STARTED}/${SubRoutes.GETTING_STARTED_REACT}`,
      },
      {
        key: 'angular',
        fragment: SubRoutes.GETTING_STARTED_ANGULAR,
        url: `${MainRoutes.GETTING_STARTED}/${SubRoutes.GETTING_STARTED_ANGULAR}`,
      },
      {
        key: 'vue',
        fragment: SubRoutes.GETTING_STARTED_VUE,
        url: `${MainRoutes.GETTING_STARTED}/${SubRoutes.GETTING_STARTED_VUE}`,
      },
    ],
  },
  {
    key: 'library',
    url: MainRoutes.LIBRARY,
    subRoutes: [
      {
        key: 'components',
        fragment: SubRoutes.LIBRARY_COMPONENTS,
        url: `${MainRoutes.LIBRARY}/${SubRoutes.LIBRARY_COMPONENTS}`,
      },
      /*
      {
        key: 'styleguide',
        fragment: SubRoutes.LIBRARY_STYLEGUIDE,
        url: `${MainRoutes.LIBRARY}/${SubRoutes.LIBRARY_STYLEGUIDE}`,
      },
      {
        key: 'patterns',
        fragment: SubRoutes.LIBRARY_PATTERNS,
        url: `${MainRoutes.LIBRARY}/${SubRoutes.LIBRARY_PATTERNS}`,
      },
      {
        key: 'changelogs',
        fragment: SubRoutes.LIBRARY_CHANGELOGS,
        url: `${MainRoutes.LIBRARY}/${SubRoutes.LIBRARY_CHANGELOGS}`,
      },
       */
    ],
  },
  {
    key: 'about',
    url: MainRoutes.ABOUT,
    subRoutes: [
      {
        key: 'team',
        fragment: SubRoutes.ABOUT_TEAM,
        url: `${MainRoutes.ABOUT}#${SubRoutes.ABOUT_TEAM}`,
      },
      {
        key: 'history',
        fragment: SubRoutes.ABOUT_HISTORY,
        url: `${MainRoutes.ABOUT}#${SubRoutes.ABOUT_HISTORY}`,
      },
      {
        key: 'activity',
        fragment: SubRoutes.ABOUT_ACTIVITY,
        url: `${MainRoutes.ABOUT}#${SubRoutes.ABOUT_ACTIVITY}`,
      },
    ],
  },
];
