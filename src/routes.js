import Cardapio from './components/cardapio/Cardapio.vue'
import Principal from './components/pratos/principal/PrincipalForm.vue'
import Acompanhamento from './components/pratos/acompanhamento/AcompanhamentoForm.vue'
import Salada from './components/pratos/salada/SaladaForm.vue'

export const routes = [
    { path: '/cardapio', component: Cardapio},
    { path: '/cadastro/prato/principal', component: Principal},
    { path: '/cadastro/prato/acompanhamento', component: Acompanhamento},
    { path: '/cadastro/prato/salada', component: Salada}
]