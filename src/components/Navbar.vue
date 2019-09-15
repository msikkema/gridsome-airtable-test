<template>
  <div class="navbar-container">
    <div class="logo-container">
      <img class="logo" src="/reachout_logo.svg" />
    </div>

    <div class="link-container">
      <g-link class="navbar-link" to="/" v-if="showHome">Home</g-link>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    showHome: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .navbar-container {
    height: 70px;
    background-color: #0073CF;
    border-bottom: 2px solid white;
    display: flex;
    justify-content: space-between;

    .logo-container {
      display: flex;
      align-items: center;
    }
    .logo {
      height: 50px;
    }
    .link-container {
      display: flex;
      align-items: center;

      .navbar-link {
        font-size: 24px;
      }
    }
  }
</style>