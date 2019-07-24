import Cardapio from './components/cardapio/Cardapio.vue';
import CardapioForm from './components/cardapio/CardapioForm.vue';
import PrincipalForm from './components/pratos/principal/PrincipalForm.vue';

import AcompanhamentoList from './components/pratos/acompanhamento/AcompanhamentoList.vue';
import AcompanhamentoForm from './components/pratos/acompanhamento/AcompanhamentoForm.vue';

import SaladaList from './components/pratos/salada/SaladaList.vue';
import SaladaForm from './components/pratos/salada/SaladaForm.vue';

const routes = [
  { path: '/cardapio', component: Cardapio },
  { path: '/cadastro/cardapio', component: CardapioForm },
  { path: '/cadastro/prato/principal', component: PrincipalForm },
  { path: '/cadastro/prato/acompanhamento', component: AcompanhamentoList },
  { path: '/cadastro/prato/acompanhamento/new', component: AcompanhamentoForm },
  { path: '/cadastro/prato/salada', component: SaladaList },
  { path: '/cadastro/prato/salada/new', component: SaladaForm },
];

export default routes;
