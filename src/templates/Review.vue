<template>
  <Layout :title="$page.review.title">
    <h1>{{ $page.review.title }}</h1>
    <p>{{ $page.review.content }}</p>
  </Layout>
</template>

<page-query>
query Review ($id: String!) {
  review (id: $id) {
    title
    content
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
