<template>
  <div class="py-2 md:px-36 px-6">
    <Navigation/>
    <Hero/>
  </div>
  <div class="bg-white w-full h-full">
    <div class="px-2 py-4 md:px-36 relative">
      <Podcasts/>
      <BlogPosts/>
      <Gallery/>
      <Contact/>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import {useStore} from 'vuex'
import Navigation from './components/Navigation/Index.vue'
import Hero from './components/Hero/Index.vue'
import Podcasts from './components/Podcasts/Index.vue'
import BlogPosts from './components/Blogpost/Index.vue'
import Gallery from './components/Gallery/Index.vue'
import Contact from './components/Contact/Index.vue'

export default {

  components: {
    Navigation,
    Hero,
    Podcasts,
    BlogPosts,
    Gallery,
    Contact,
  },

  setup: function () {

    const store = useStore()

    onMounted(async () => {
      await Promise.all([
        store.dispatch('getPages'),
        store.dispatch('getHero'),
        store.dispatch('getPodcasts'),
        store.dispatch('getPosts'),
      ])
    })
  }
}
</script>

<style scoped>

</style>
