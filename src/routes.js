import MenuList from './components/menu/MenuList.vue';
import MenuForm from './components/menu/MenuForm.vue';

import PrincipalList from './components/pratos/principal/PrincipalList.vue';
import PrincipalForm from './components/pratos/principal/PrincipalForm.vue';

import AcompanhamentoList from './components/pratos/acompanhamento/AcompanhamentoList.vue';
import AcompanhamentoForm from './components/pratos/acompanhamento/AcompanhamentoForm.vue';

import SaladaList from './components/pratos/salada/SaladaList.vue';
import SaladaForm from './components/pratos/salada/SaladaForm.vue';

const routes = [
  { path: '/menu', component: MenuList },
  { path: '/menu/:action', component: MenuForm },
  { path: '/menu/:action/:id', component: MenuForm },
  { path: '/cadastro/prato/principal', component: PrincipalList },
  { path: '/cadastro/prato/principal/:action', component: PrincipalForm },
  { path: '/cadastro/prato/principal/:action/:id', component: PrincipalForm },
  { path: '/cadastro/prato/acompanhamento', component: AcompanhamentoList },
  { path: '/cadastro/prato/acompanhamento/:action', component: AcompanhamentoForm },
  { path: '/cadastro/prato/acompanhamento/:action/:id', component: AcompanhamentoForm },
  { path: '/cadastro/prato/salada', component: SaladaList },
  { path: '/cadastro/prato/salada/:action', component: SaladaForm },
  { path: '/cadastro/prato/salada/:action/:id', component: SaladaForm },
];

export default routes;
