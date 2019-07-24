import CardapioList from './components/cardapio/CardapioList.vue';
import CardapioForm from './components/cardapio/CardapioForm.vue';

import PrincipalList from './components/pratos/principal/PrincipalList.vue';
import PrincipalForm from './components/pratos/principal/PrincipalForm.vue';

import AcompanhamentoList from './components/pratos/acompanhamento/AcompanhamentoList.vue';
import AcompanhamentoForm from './components/pratos/acompanhamento/AcompanhamentoForm.vue';

import SaladaList from './components/pratos/salada/SaladaList.vue';
import SaladaForm from './components/pratos/salada/SaladaForm.vue';

const routes = [
  { path: '/cadastro/cardapio', component: CardapioList },
  { path: '/cadastro/cardapio/new', component: CardapioForm },
  { path: '/cadastro/prato/principal', component: PrincipalList },
  { path: '/cadastro/prato/principal/new', component: PrincipalForm },
  { path: '/cadastro/prato/acompanhamento', component: AcompanhamentoList },
  { path: '/cadastro/prato/acompanhamento/new', component: AcompanhamentoForm },
  { path: '/cadastro/prato/salada', component: SaladaList },
  { path: '/cadastro/prato/salada/new', component: SaladaForm },
];

export default routes;
