import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Team from '../views/Team.vue';
import TeamDetail from '../views/PokemonDetail.vue';
//import PokemonDetail from '../views/PokemonDetail.vue';
import SearchResults from '../views/SearchResults.vue';
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/team', name: 'Team', component: Team },
    { path: '/team/:id', name: 'PokemonDetail', component: TeamDetail, alias: ['/pokemon/:id'] },
    //{ path: '/pokemon/:id', name: 'PokemonDetail', component: PokemonDetail },
    { path: '/search/:query', name: 'SearchResults', component: SearchResults },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
