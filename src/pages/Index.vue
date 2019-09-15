<template>
  <Layout>
    <h1>Gridsome + Airtable Demo</h1>

    <h2>Movie Reviews</h2>
    <p>Select a card below to read the full review</p>
    <div class="card-container">
      <ArticleCard
        v-for="edge in $page.allReview.edges"
        :key="edge.node.id"
        :background-image="edge.node.heroImage[0].url"
        :title="edge.node.title"
        :url="`/reviews/${getSlug(edge.node.title)}`"
        :author="edge.node.author"
      />
    </div>

    <h2>Blog Posts</h2>
      <li v-for="edge in $page.allPost.edges" :key="edge.node.id">
        <g-link :to="'/posts/' + getSlug(edge.node.title)">{{ edge.node.title }}</g-link>
      </li>
  </Layout>
</template>

<page-query>
query getTitles {
  allReview {
    edges {
      node {
        id
        title
        heroImage {
          url
        }
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
import slugify from 'slugify'
import Layout from '~/layouts/Default'
import ArticleCard from '~/components/ArticleCard'

export default {
  components: {
    Layout,
    ArticleCard
  },
  methods: {
    getSlug (str) {
      return slugify(str.toLowerCase(0))
    }
  }
};
</script>

<style lang="scss">
.card-container {
  display: flex;
  flex-wrap: wrap;

  >div {
    margin: 0 5px 5px 0;
  }
}
</style>
