<script>
import PostList from "./components/PostList.vue";
export default {
  components: {
    PostList,
  },
};
</script>

<template>
  <div class="mb-10">
    <div class="flex items-center justify-center h-16">
      <div class="container">
        <h1 class="m-0 text-3xl text-center text-primary">Posts</h1>
      </div>
    </div>
    <div class="container mt-5">
      <PostList />
    </div>
  </div>
</template>
