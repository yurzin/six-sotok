<template>
  <div>
    <h1>Главная</h1>
    <div class="item" v-for="(item, index) in data" :key="item.id">
      {{index + 1}} | {{item.description}} | <img :src="url+item.path">
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      data: [],
      url: 'http://6sotok42.ru/api/data'
    };
  },
  mounted() {
    fetch(`${this.url}/data.php`)
        .then(response => response.json())
        .then(data => this.data = data);
  },
  methods: {},
};
</script>

<style scoped>

img {
    width: auto;
    height: 50px;
}

.item {
    padding: 0;
     height: 60px;
}

</style>