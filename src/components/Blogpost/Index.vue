<template>
  <div class="mt-10 p-6 flex flex-col justify-content-center items-center w-full">
    <h3 class="text-3xl my-4">Blog Posts</h3>
    <div class="flex md:flex-row flex-col gap-3">
      <Card v-for="post in posts" :key="post.id" :post="post"/>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

import Card from "./Card.vue";

export default {

  components: {
    Card,
  },

  setup() {
    const store = useStore()
    const posts = computed(() => {
      return store.getters.posts
    })
    return {
      posts
    }
  }
}
</script>

<style scoped>

</style>