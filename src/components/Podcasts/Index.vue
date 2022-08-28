<template>
  <div class="p-6 -mt-12 bg-white podcasts-card flex flex-col">
    <div class="flex md:flex-row flex-col w-full">
      <span class="text-3xl">Latest Podcast Episodes</span>
      <button
          class="ml-auto md:mt-0 mt-4 bg-primary-red text-white py-2 px-6 rounded hover:bg-transparent hover:text-primary-red border-primary-red border border-sm transition ease-in-out duration-300 w-full md:w-auto">
        View All
      </button>
    </div>
    <div v-if="podcasts" class="px-5 flex flex-col gap-8 mt-10">
      <Card v-for="podcast in podcasts" :key="podcast.id" :podcast="podcast"/>
    </div>
    <div class="px-5 py-7 w-full flex flex-col items-center justify-content-center mt-6">
      <button
          class="md:w-60  w-full bg-transparent text-primary-red py-2 px-6 rounded border border-primary-red hover:bg-primary-red hover:text-white transition ease-in-out duration-300">
        Show more episodes
      </button>
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

    const podcasts = computed(() => {
      return store.getters.podcasts
    })

    return {
      podcasts
    }
  }

}
</script>

<style lang="scss" src="./Styles.scss"></style>