<script></script>

<template>
  <div class="nav">
    <RouterLink to="/" class="green">
      <h1>Home</h1>
    </RouterLink>

    <RouterLink to="/about" class="green">
      <h1>About</h1>
    </RouterLink>
  </div>

  <RouterView />
</template>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
}
</style>
