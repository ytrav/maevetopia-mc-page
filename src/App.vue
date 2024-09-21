<script>
// import { RouterLink } from 'vue-router';
import { mapStores } from 'pinia';
import { useVarStore } from './stores/VarStore';
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppMenu from './components/AppMenu.vue';

export default {
  components: {
    RouterView,
    AppHeader,
    AppMenu
  },
  computed: {
    ...mapStores(useVarStore)
  },

}
</script>

<template>
  <AppHeader />
  <RouterView />
  <Transition name="menu">
    <AppMenu v-if="varStore.menuOpen" />
  </Transition>

</template>
