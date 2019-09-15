<template>
  <div
    class="article-card-container"
    :style="style"
    @click="$router.push(url)"
  >
    <div class="label-container">
      {{ title }}
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    author: String,
    title: String,
    content: String,
    rating: Number,
    date: String,
    backgroundImage: String,
    url: String
  },
  computed: {
    style() {
      return `background-image: url(${this.backgroundImage});`
    }
  },
}
</script>

<style lang="scss">
  .article-card-container {
    height: 320px;
    width: 270px;
    background-color: #E6F1FA;
    color: #333333;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 10px;

    &:hover {
      cursor: pointer;
    }
    .label-container {
      display: inline;
      padding: 7px;
      font-size: 20px;
      background-color: #E6F1FA;
    }
  }
</style>