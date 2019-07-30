import MenuList from '@/components/menu/MenuList.vue';
import MenuForm from '@/components/menu/MenuForm.vue';

import MainDishList from '@/components/dishes/mainDish/MainDishList.vue';
import MainDishForm from '@/components/dishes/mainDish/MainDishForm.vue';

import SideDishList from '@/components/dishes/sideDish/SideDishList.vue';
import SideDishForm from '@/components/dishes/sideDish/SideDishForm.vue';

import SaladList from '@/components/dishes/salad/SaladList.vue';
import SaladForm from '@/components/dishes/salad/SaladForm.vue';

const routes = [
  { path: '/menu', component: MenuList },
  { path: '/menu/:action', component: MenuForm },
  { path: '/menu/:action/:id', component: MenuForm },
  { path: '/dishes/mainDish', component: MainDishList },
  { path: '/dishes/mainDish/:action', component: MainDishForm },
  { path: '/dishes/mainDish/:action/:id', component: MainDishForm },
  { path: '/dishes/sideDish', component: SideDishList },
  { path: '/dishes/sideDish/:action', component: SideDishForm },
  { path: '/dishes/sideDish/:action/:id', component: SideDishForm },
  { path: '/dishes/salad', component: SaladList },
  { path: '/dishes/salad/:action', component: SaladForm },
  { path: '/dishes/salad/:action/:id', component: SaladForm },
];

export default routes;
