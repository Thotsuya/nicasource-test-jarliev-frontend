<template>
  <div class="py-2 md:px-24 px-3">
    <Navigation/>
    <Hero/>
  </div>
  <div class="bg-white w-full h-full">
    <div class="px-3 py-2 md:px-24">

    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import {useStore} from 'vuex'
import Navigation from './components/Navigation/Index.vue'
import Hero from './components/Hero/Index.vue'

export default {

  components: {
    Navigation,
    Hero,
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
