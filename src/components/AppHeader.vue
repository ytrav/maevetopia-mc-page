<script>
import { mapStores } from 'pinia';
import { useVarStore } from '../stores/VarStore';

export default {
    computed: {
        ...mapStores(useVarStore)
    },
    data() {
        return {
          
        }
    }
}
</script>

<template>
    <header :class="{ bg: varStore.scrolled }">
        <a @click="varStore.setMenu(false)" href="#top">
            <h2>Maevetopian Settlement</h2>
            <h2 class="short">Maevetopia</h2>
        </a>
        <div class="anchors">
            <a v-wave="{
                duration: 0.2,
                color: 'currentColor',
                initialOpacity: 0.2,
                easing: 'ease-out'
            }" v-for="(anchor, index) in varStore.anchors" :key="index" :href="`#${anchor.name}`">{{ anchor.label }}</a>
            <div @click="varStore.toggleMenu()" v-wave="{
                duration: 0.2,
                color: 'currentColor',
                initialOpacity: 0.2,
                easing: 'ease-out'
            }" :class="{open: varStore.menuOpen}" class="menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>menu-open</title>
                    <path
                        d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z" />
                </svg></div>
        </div>
        <!-- <div class="right-side">
            <a v-wave="{
                duration: 0.15,
                color: 'currentColor',
                initialOpacity: 0.2,
                easing: 'ease-out'
            }" href="#discord" class="cta">Join soon</a>

        </div> -->
    </header>
</template>