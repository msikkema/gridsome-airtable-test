<template>
  <Layout>
    <h1>The Articles in the system are</h1>

    <h2>Movie Reviews</h2>
    <ol>
      <li v-for="edge in $page.allReview.edges" :key="edge.node.id">
        <g-link :to="'/reviews/' + getSlug(edge.node.title)">{{ edge.node.title }}</g-link>
      </li>    
    </ol>

    <h2>Blog Posts</h2>
    <ol>
      <li v-for="edge in $page.allPost.edges" :key="edge.node.id">
        <g-link :to="'/posts/' + getSlug(edge.node.title)">{{ edge.node.title }}</g-link>
      </li>    
    </ol>
  </Layout>
</template>

<page-query>
query getTitles {
  allReview {
    edges {
      node {
        id
        title
      }
    }
  }
  allPost {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue'
import slugify from 'slugify'

export default {
  components: {
    Layout
  },
  methods: {
    getSlug (str) {
      return slugify(str.toLowerCase(0))
    }
  }
};

</script>
