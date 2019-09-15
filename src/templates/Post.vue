<template>
  <Layout :title="$page.post.title">
    <h1>{{ $page.post.title }}</h1>
    <p>{{ $page.post.content }}</p>
  </Layout>
</template>

<page-query>
query getPost ($id: String!) {
  post (id: $id) {
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
      title: this.$page.post.title
    };
  }
};
</script>