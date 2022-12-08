<script>
import PostForm from "./PostForm.vue";
import PostItem from "./PostItem.vue";

export default {
  components: {
    PostItem,
    PostForm,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Lorem Ipsum",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At adipisci earum atque cumque quo culpa velit suscipit distinctio. Amet omnis blanditiis dolor! Officia fuga modi amet similique consequuntur quibusdam at.",
          imageUrl:
            "https://cdn.pixabay.com/photo/2022/11/20/13/18/squirrel-7604249_960_720.jpg",
          date: "Wednesday, 23 November, 2022",
          isLiked: false,
        },
      ],
      showLiked: false,
    };
  },
  methods: {
    handleCreatePost(post) {
      this.posts.push({ ...post, id: this.posts.length + 1 });
    },

    handleLike(id) {
      const index = this.posts.findIndex((post) => post.id === id);
      if (this.posts[index].isLiked) this.posts[index].isLiked = false;
      else this.posts[index].isLiked = true;
    },

    toggleLikedPosts() {
      if (this.showLiked) this.showLiked = false;
      else this.showLiked = true;
    },
  },
  computed: {
    likedPosts() {
      return this.posts.filter((post) => post.isLiked);
    },
    toggleButtonText() {
      if (this.showLiked) return "Hide Liked Posts";
      return "Show Liked Posts";
    },
    toggleButtonIconClass() {
      if (this.showLiked) return "fa-minus";
      return "fa-plus";
    },
  },
};
</script>

<template>
  <div class="flex gap-8">
    <div class="w-3/5">
      <div class="p-3">
        <PostForm @createPost="handleCreatePost" />
      </div>
      <hr />
      <div class="flex flex-wrap">
        <div v-for="post of posts" :key="post.id" class="w-full p-4">
          <PostItem :post="post" @onLike="handleLike" />
        </div>
      </div>
    </div>
    <div class="w-2/5">
      <div class="flex items-center justify-between">
        <p class="text-primary">
          Liked Posts : {{ posts.filter((post) => post.isLiked).length }}
        </p>
        <a
          href="#"
          class="px-4 py-2 text-white rounded-full bg-primary group"
          @click="toggleLikedPosts"
          ><span
            :class="'mr-1 fa-solid group-hover:mr-2 transition-all ' +
              toggleButtonIconClass
            "
          ></span
          >{{ toggleButtonText }}</a
        >
      </div>
      <div v-if="showLiked">
        <div v-for="post of likedPosts" :key="post.id" class="w-full p-4">
          <PostItem :post="post" @onLike="handleLike" />
        </div>
      </div>
    </div>
  </div>
</template>
