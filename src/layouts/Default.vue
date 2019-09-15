<template>
  <div class="layout">
    <Navbar :showHome="showHome"/>

    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: { Navbar },
  props: {
    showHome: Boolean
  }
}
</script>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #0073CF;
  color: white;
}

.layout {
  max-width: 900px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

a {
  text-decoration: none;
  color: white;

  &:hover {
    color: #FFEF5E;
  }
}
</style>
