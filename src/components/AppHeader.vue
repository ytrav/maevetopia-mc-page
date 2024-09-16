<template>
    <header>
        <RouterLink to="/">
            <h2>Maevetopian Settlement</h2>
            <h2 class="short">Minecraft</h2>
        </RouterLink>
        <div class="right-side">
            <a v-wave="{
                duration: 0.15,
                color: 'currentColor',
                initialOpacity: 0.2,
                easing: 'ease-out'
            }" href="#play" class="cta">Join now</a>

        </div>
    </header>
</template>