<script>

export default {
    data() {
        return {
            anchors: [
                { name: 'about', label: 'About' },
                { name: 'map', label: 'Map' },
                { name: 'faq', label: 'FAQ' },
                { name: 'discord', label: 'Discord' }
            ]
        }
    }
}
</script>

<template>
    <header>
        <a href="#top">
            <h2>Maevetopian Settlement</h2>
            <h2 class="short">MS</h2>
        </a>
        <div class="anchors">
            <a v-wave="{
                duration: 0.2,
                color: 'currentColor',
                initialOpacity: 0.2,
                easing: 'ease-out'
            }" v-for="(anchor, index) in anchors" :key="index" :href="`#${anchor.name}`">{{ anchor.label }}</a>
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