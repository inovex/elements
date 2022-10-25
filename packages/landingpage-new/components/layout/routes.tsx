type RouteTree = MainRoute[];

type Route = {
  name: string;
  url: string;
};

type MainRoute = Route & {
  subRoutes: Route[];
};

// TODO: create meaningful routes
export const Routes: RouteTree = [
  {
    name: 'home',
    url: '/',
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
    url: '/explore',
    subRoutes: [
      {
        name: 'under explore',
        url: '#subroute',
      },
    ],
  },
  {
    name: 'docs',
    url: '/docs',
    subRoutes: [
      {
        name: 'under docs',
        url: '#subroute',
      },
    ],
  },
  {
    name: 'about',
    url: '/about',
    subRoutes: [
      {
        name: 'under about',
        url: '#subroute',
      },
    ],
  },
  {
    name: 'contact',
    url: '/contact',
    subRoutes: [
      {
        name: 'under contact',
        url: '#subcontact',
      },
    ],
  },
];
