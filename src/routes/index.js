import { Home, Contact, Shopping, Product, Page404 } from 'pages';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
    strict: true,
    sensitive: false,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    exact: true,
    strict: true,
    sensitive: false,
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping,
    exact: true,
    strict: true,
    sensitive: false,
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    exact: true,
    strict: true,
    sensitive: false,
  },
  {
    // path: '',
    name: 'Page 404',
    component: Page404,
    // exact: true,
    // strict: true,
    // sensitive: false,
  },
];
