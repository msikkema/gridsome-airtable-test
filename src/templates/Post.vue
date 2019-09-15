<template>
  <Layout :showHome="true">
    <h1>{{ $page.post.title }}</h1>
    <p>by {{ $page.post.author }}</p>
    <div v-html="getContentHtml($page.post.content)"></div>
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
import Layout from "~/layouts/Default.vue"
import * as markdownit from 'markdown-it'

export default {
  components: {
    Layout
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  methods: {
    getContentHtml (str) {
      const md = new markdownit()
      return md.render(str)
    }
  }
};
</script>