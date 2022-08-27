<template>
  <div class="py-2 md:px-24 px-6">
    <Navigation/>
    <Hero/>
  </div>
  <div class="bg-white w-full h-full">
    <div class="px-6 py-4 md:px-24 relative">
      <Podcasts/>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import {useStore} from 'vuex'
import Navigation from './components/Navigation/Index.vue'
import Hero from './components/Hero/Index.vue'
import Podcasts from './components/Podcasts/Index.vue'

export default {

  components: {
    Navigation,
    Hero,
    Podcasts,
  },

  setup() {

    const store = useStore()

    onMounted(async () => {
      await store.dispatch('getPages')
      await store.dispatch('getHero')
    })
  }
}
</script>

<style scoped>

</style>
