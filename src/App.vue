<template>
  <v-app>
      <AppNavBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppNavBar from './components/shared/AppNavBar.vue';

export default {
  name: 'App',
  components: {
    AppNavBar
  }
};
</script>
