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
  DOCS = '/docs',
  EXPLORE = '/explore',
  CONTACT = '/contact',
  ABOUT = '/about'
}

// TODO: create meaningful routes
export const Routes: RouteTree = [
  {
    name: 'home',
    url: MainRoutes.HOME,
    subRoutes: [
      {
        name: 'under home',
        url: '#subroute',
      },
      {
        name: 'some other',
        url: '#subroute',
      },
    ],
  },
  {
    name: 'explore',
    url: MainRoutes.EXPLORE,
    subRoutes: [
      {
        name: 'under explore',
        url: '#subroute',
      },
    ],
  },
  {
    name: 'docs',
    url: MainRoutes.DOCS,
    subRoutes: [
      {
        name: 'under docs',
        url: '#subroute',
      },
    ],
  },
  {
    name: 'about',
    url: MainRoutes.ABOUT,
    subRoutes: [
      {
        name: 'under about',
        url: '#subroute',
      },
    ],
  },
  {
    name: 'contact',
    url: MainRoutes.CONTACT,
    subRoutes: [
      {
        name: 'under contact',
        url: '#subcontact',
      },
    ],
  },
];
