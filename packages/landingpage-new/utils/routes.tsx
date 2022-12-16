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
  LEARN = '/learn',
  DOCS = '/docs',
  EXPLORE = '/explore',
  ABOUT = '/about',
}

export enum SubRoutes {
  HOME_INFO = 'info',
  HOME_CORE_ASPECTS = 'core-aspects',
  HOME_COMPONENTS = 'components',
  HOME_CONTACT = 'contact',
  EXPLORE_EXAMPLES = 'examples',
  EXPLORE_ARTICLES = 'articles',
  EXPLORE_DEMOS = 'demos',
  LEARN_TUTORIALS = 'tutorials',
  LEARN_TRAININGS = 'trainings',
  LEARN_MEETUP = 'meetups',
  LEARN_FAQ = 'faq',
  DOCS_INTRO = 'intro',
  DOCS_FRAMEWORK_INTEGRATION = 'framework-integration',
  DOCS_COMPONENTS = 'components',
  DOCS_PATTERNS = 'patterns',
  DOCS_CHANGELOGS = 'changelogs',
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
    name: 'learn',
    url: MainRoutes.LEARN,
    subRoutes: [
      {
        name: 'tutorials',
        url: SubRoutes.LEARN_TUTORIALS,
      },
      {
        name: 'trainings',
        url: SubRoutes.LEARN_TRAININGS,
      },
      {
        name: 'meetup',
        url: SubRoutes.LEARN_MEETUP,
      },
      {
        name: 'faq',
        url: SubRoutes.LEARN_FAQ,
      },
    ],
  },
  {
    name: 'docs',
    url: MainRoutes.DOCS,
    subRoutes: [
      {
        name: 'introduction',
        url: SubRoutes.DOCS_INTRO,
      },
      {
        name: 'framework integration',
        url: SubRoutes.DOCS_FRAMEWORK_INTEGRATION,
      },
      {
        name: 'components',
        url: SubRoutes.DOCS_COMPONENTS,
      },
      {
        name: 'patterns',
        url: SubRoutes.DOCS_PATTERNS,
      },
      {
        name: 'changelogs',
        url: SubRoutes.DOCS_CHANGELOGS,
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
