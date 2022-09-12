<template>
  <div>
    <header>
      <h2 class="header">App Header</h2>
      <p>items: {{ cartCount }}</p>
    </header>
  </div>
</template>
<script>
  export default {
    computed: {
      cartCount() {
        return this.$store.state.cartItems;
      },
    },
  };
</script>
<style scoped>
  .header {
    color: blueviolet;
  }
</style>
