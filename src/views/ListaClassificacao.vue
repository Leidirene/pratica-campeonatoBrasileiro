<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação dos clubes</h2>
    <ClubesLista :clubes="clubesOrdenados" />
  </v-container>
</template>

<script>
import ClubesLista from "@/components/ClubesLista.vue";

export default {
  components: { ClubesLista },
  name: "ListaClassificacao",
  data: () => ({
    listaClassificacao: [],
  }),
  created() {
    fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json")
      .then((resposta) => resposta.json())
      .then((json) => (this.listaClassificacao = json));
  },
  computed: {
    clubesOrdenados() {
      const listaOrdenada = this.listaClassificacao
        .slice(0)
        .sort((a, b) => b.pontos - a.pontos);
      return listaOrdenada;
    },
  },
};
</script>

<style></style>
