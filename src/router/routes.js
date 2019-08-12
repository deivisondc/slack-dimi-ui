import TheLogin from '@/components/login/TheLogin';

import TheMenuList from '@/components/menu/TheMenuList';
import TheMenuForm from '@/components/menu/TheMenuForm';

import TheMainDishList from '@/components/dishes/mainDish/TheMainDishList';
import TheMainDishForm from '@/components/dishes/mainDish/TheMainDishForm';

import TheSideDishList from '@/components/dishes/sideDish/TheSideDishList';
import TheSideDishForm from '@/components/dishes/sideDish/TheSideDishForm';
import TheSaladList from '@/components/dishes/salad/TheSaladList';
import TheSaladForm from '@/components/dishes/salad/TheSaladForm';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: TheLogin,
  },
  {
    path: '/menu',
    name: 'MenuList',
    component: TheMenuList,
  },
  {
    path: '/menu/new',
    name: 'MenuNew',
    component: TheMenuForm,
  },
  {
    path: '/menu/edit/:id',
    name: 'MenuEdit',
    component: TheMenuForm,
  },
  {
    path: '/menu/copy/:id',
    name: 'MenuCopy',
    component: TheMenuForm,
  },
  {
    path: '/dishes/mainDish',
    name: 'MainDishList',
    component: TheMainDishList,
  },
  {
    path: '/dishes/mainDish/new',
    name: 'MainDishNew',
    component: TheMainDishForm,
  },
  {
    path: '/dishes/mainDish/edit/:id',
    name: 'MainDishEdit',
    component: TheMainDishForm,
  },
  {
    path: '/dishes/sideDish',
    name: 'SideDishList',
    component: TheSideDishList,
  },
  {
    path: '/dishes/sideDish/new',
    name: 'SideDishNew',
    component: TheSideDishForm,
  },
  {
    path: '/dishes/sideDish/edit/:id',
    name: 'SideDishEdit',
    component: TheSideDishForm,
  },
  {
    path: '/dishes/salad',
    name: 'SaladList',
    component: TheSaladList,
  },
  {
    path: '/dishes/salad/new',
    name: 'SaladNew',
    component: TheSaladForm,
  },
  {
    path: '/dishes/salad/edit/:id',
    name: 'SaladEdit',
    component: TheSaladForm,
  },
  {
    path: '*',
    redirect: '/login',
  },
];

export default routes;
