<template>
  <Layout :showHome="true">
    <h1>{{ $page.review.title }}</h1>
    <img class="hero-image" :src="$page.review.heroImage[0].url" />
    <h2>{{ $page.review.rating }} stars out of 5</h2>

    <p>by {{ $page.review.author }}</p>
    <p>{{ $page.review.content }}</p>
  </Layout>
</template>

<page-query>
query Review ($id: String!) {
  review (id: $id) {
    title
    content
    author
    rating
    heroImage {
      url
    }
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout
  },
  metaInfo() {
    return {
      title: this.$page.review.title
    };
  }
};
</script>

<style lang="scss">
img.hero-image {
  max-height: 300px;
}
</style>
