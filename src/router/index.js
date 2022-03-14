import Vue from "vue";
import VueRouter from "vue-router";
import MeuInicio from "../views/MeuInicio.vue";
import ListaClassificacao from "../views/ListaClassificacao";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MeuInicio",
    component: MeuInicio,
  },
  {
    path: "/ListaClassificacao",
    name: "ListaClassificacao",
    component: ListaClassificacao,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
