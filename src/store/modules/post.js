export default {
    state: {
        posts: [],
        url: 'http://6sotok42.ru/api/data'
    },
    actions: {
        async fetchPosts(ctx, url = 'http://6sotok42.ru/api/data') {
            const res = await fetch(`${url}/data.php`);
            const posts = await res.json();
            ctx.commit("updatePosts", posts)
        },
        async createPost(ctx, url = 'http://6sotok42.ru/api/data') {
            const res = await fetch(`${url}/create_post.php`,
                {
                    method: "POST",
                    mode: "cors",
                    cache: "default",
                    body: JSON.stringify(this.post)
                });
            const post = await res.json();
            ctx.commit("createPost", post)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            console.log(state);
            //state.posts.unshift(newPost)
        }
    },
    getters: {
        validPost(state) {
            return state.posts.filter(p => {
                return p.description && p.author
            })
        },
  /*      allPosts(state) {
            return state.posts
        },*/
        postsCount(state, getters) {
            return getters.validPost.length
        },
        postsUrl(state) {
            return state.url
        }
    }

}