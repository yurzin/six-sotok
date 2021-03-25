<template>
    <nav class="light-blue darken-4">
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo">6 соток</router-link>
            <ul class="right hide-on-med-and-down">
                <router-link
                        to="/"
                        active-class="active"
                        custom v-slot="{navigate}"
                >
                    <li @click="navigate">Главная</li>
                </router-link>
                <router-link
                        to="/about"
                        active-class="active"
                        custom v-slot="{navigate}"
                >
                    <li @click="navigate">О сайте</li>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    nav {
        padding: 0 2rem;
    }

    li {
        cursor: pointer;
        margin: 0 2rem;
    }
</style>