<template>
    <div>
        <h1>Главная</h1>
        <table class="highlight centered">
            <thead>
            <tr>
                <th>#</th>
                <th>Описание недвижимости</th>
                <th>Автор объявления</th>
                <th>Изображение</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(post, index) in validPost" :key="post.id">
                <td>{{index + 1}}</td>
                <td>{{post.description}}</td>
                <td>{{post.author}}</td>
                <td><img :src="postsUrl + post.path"></td>
            </tr>
            </tbody>
        </table>
        <h4>{{postsCount}} поста</h4>
        <PostForm />
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import PostForm from '@/components/PostForm'
    export default {
        name: "home",
        computed: mapGetters(["validPost", "postsCount", "postsUrl"]),
        methods: mapActions(["fetchPosts", "createPost"]),
        components: {PostForm},
        async mounted() {
            this.fetchPosts()
        }
    };
</script>

<style scoped>

    img {
        width: auto;
        height: 50px;
    }

    tr {
        cursor: pointer;
    }

</style>