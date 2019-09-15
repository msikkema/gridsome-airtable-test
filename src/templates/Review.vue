<template>
  <Layout :showHome="true">
    <div class="hero-panel" :style="heroPanelBackground($page.review.heroImage[0].url)">
      <div class="hero-label">{{ $page.review.title }}</div>
    </div>
    <h2>{{ $page.review.rating }} stars out of 5</h2>

    <p>by {{ $page.review.author }}</p>
    <div class="content-body" v-html="getContentHtml($page.review.content)"></div>
  </Layout>
</template>

<page-query>
query Review ($id: String!) {
  review (id: $id) {
    title
    content
    author
    rating
    date
    heroImage {
      url
    }
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue"
import * as markdownit from 'markdown-it'

export default {
  components: {
    Layout
  },
  metaInfo() {
    return {
      title: this.$page.review.title
    };
  },
  methods: {
    getContentHtml (str) {
      const md = new markdownit()
      return md.render(str)
    },
    heroPanelBackground(url) {
      return `background-image: url(${url})`
    }
  },
};
</script>

<style lang="scss">
img.hero-image {
  max-height: 300px;
}
.content-body {
  background-color: #E6F1FA;
  color: #333;
  padding: 25px;
  font-size: 16px;
  margin-bottom: 55px;
}
.hero-panel {
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 15px;

  .hero-label {
    background-color: #FFEF5E;
    padding: 10px;
    color: #333;
    font-size: 30px;
  }
}
</style>
