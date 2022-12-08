<template>
  <RouterLink :to="{ name: 'home' }">&lt; Go back to home</RouterLink>
  <h1>Hello, User</h1>
  <RouterLink :to="{ name: 'userDetails' }">View user details</RouterLink>
  <RouterView />
</template>
<style>
.router-link-exact-active {
  display: none;
}
</style>
