<template>
    <form @submit.prevent="submit">
        <input type="text" placeholder="Текст объявления" v-model="description">
        <input type="text" placeholder="Имя автора" v-model="author">
        <button type="submit">Создать пост</button>
    </form>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        data() {
            return {
                description: '',
                author: ''
            }
        },
        methods: {
            ...mapMutations(["createPost"]),
            submit() {
                this.createPost({
                    description: this.description,
                    author: this.author,
                    id: Date.now()
                });
                this.description = this.author = ''
            }
        }
    }

</script>