<script>
// import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    RouterView,
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
  <RouterView />

</template>
