<template>
  <Layout :showHome="true">
    <h1>{{ $page.post.title }}</h1>
    <p>by {{ $page.post.author }}</p>
    <p>{{ $page.post.content }}</p>
  </Layout>
</template>

<page-query>
query getPost ($id: String!) {
  post (id: $id) {
    title
    content
    author
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