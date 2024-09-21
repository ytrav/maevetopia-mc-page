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

    <div class="side-menu">
        <div class="anchors">
            <a @click="varStore.setMenu(false)" v-for="(anchor, index) in varStore.anchors" :key="index" :href="`#${anchor.name}`" v-wave="{
                duration: 0.2,
                color: 'currentColor',
                initialOpacity: 0.2,
                easing: 'ease-out'
            }">{{ anchor.label }}</a>
        </div>
    </div>
</template>