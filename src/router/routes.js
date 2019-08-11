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
  { path: '/login', component: TheLogin },
  { path: '/menu', component: TheMenuList },
  { path: '/menu/:action', component: TheMenuForm },
  { path: '/menu/:action/:id', component: TheMenuForm },
  { path: '/dishes/mainDish', component: TheMainDishList },
  { path: '/dishes/mainDish/:action', component: TheMainDishForm },
  { path: '/dishes/mainDish/:action/:id', component: TheMainDishForm },
  { path: '/dishes/sideDish', component: TheSideDishList },
  { path: '/dishes/sideDish/:action', component: TheSideDishForm },
  { path: '/dishes/sideDish/:action/:id', component: TheSideDishForm },
  { path: '/dishes/salad', component: TheSaladList },
  { path: '/dishes/salad/:action', component: TheSaladForm },
  { path: '/dishes/salad/:action/:id', component: TheSaladForm },
  { path: '*', redirect: '/login' },
];

export default routes;
