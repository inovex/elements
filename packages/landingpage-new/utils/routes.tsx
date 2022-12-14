type RouteTree = MainRoute[];

type Route = {
  name: string;
  url: string;
};

type MainRoute = Route & {
  subRoutes: Route[];
};

export enum MainRoutes {
  HOME = '/',
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
  EXPLORE_ARTICLES = 'articles',
  EXPLORE_DEMOS = 'demos',
  GETTING_STARTED_TUTORIALS = 'tutorials',
  GETTING_STARTED_FRAMEWORK_INTEGRATION = 'framework-integration',
  GETTING_STARTED_TRAININGS = 'trainings',
  GETTING_STARTED_MEETUP = 'meetups',
  LIBRARY_INTRO = 'intro',
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
        name: 'articles',
        url: SubRoutes.EXPLORE_ARTICLES,
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
        name: 'tutorials',
        url: SubRoutes.GETTING_STARTED_TUTORIALS,
      },
      {
        name: 'framework integration',
        url: SubRoutes.GETTING_STARTED_FRAMEWORK_INTEGRATION,
      },
      {
        name: 'trainings',
        url: SubRoutes.GETTING_STARTED_TRAININGS,
      },
      {
        name: 'meetup',
        url: SubRoutes.GETTING_STARTED_MEETUP,
      },
    ],
  },
  {
    name: 'library',
    url: MainRoutes.LIBRARY,
    subRoutes: [
      {
        name: 'introduction',
        url: SubRoutes.LIBRARY_INTRO,
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
