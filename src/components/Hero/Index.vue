<template>
  <div class="w-100 flex flex-column py-5">
    <div class="flex flex-col md:flex-row justify-content-between items-center w-full">
      <div class="w-full p-5">
        <div class="flex flex-row">
          <div class="hero-heading mr-1"></div>
          <span class="text-sm">The trending episode</span>
        </div>
        <div class="my-6">
          <h3 class="text-4xl">{{ hero?.acf?.hero_title }}</h3>
          <p class="text-md mt-4">{{ hero?.acf?.hero_description }}</p>
        </div>
        <div class="flex flex-row">
          <span class="text-sm">Listen also on</span>
          <div class="hero-heading ml-1"></div>
        </div>
        <div class="flex md:flex-row flex-col gap-2 mt-3">
          <button
              class="flex flex-row gap-1 border border-gray-200 px-6 py-2 rounded-sm transition ease-in-out duration-300 hover:bg-gray-100">
            <div class="my-auto">
              <img src="/assets/spotify.svg" width="40px"/>
            </div>
            <div class="flex flex-col my-auto">
              <span class="text-xs text-gray-400 mr-auto">Listen on </span>
              <span class="font-bold text-xl">Spotify</span>
            </div>
          </button>
          <button
              class="flex flex-row gap-1 border border-gray-200 px-6 py-2 rounded-sm transition ease-in-out duration-300 hover:bg-gray-100">
            <div class="my-auto">
              <img src="/assets/google podcasts.svg" width="40px"/>
            </div>
            <div class="flex flex-col my-auto">
              <span class="text-xs text-gray-400 mr-auto">Listen on </span>
              <span class="text-xl"><span class="font-bold">Google</span> Podcasts</span>
            </div>
          </button>
          <button
              class="flex flex-row gap-1 border border-gray-200 px-6 py-2 rounded-sm transition ease-in-out duration-300 hover:bg-gray-100">
            <div class="my-auto">
              <img src="/assets/apple podcasts.svg" width="40px"/>
            </div>
            <div class="flex flex-col my-auto">
              <span class="text-xs text-gray-400 mr-auto">Listen on </span>
              <span class="text-xl"><span class="font-bold">Apple</span> Podcasts</span>
            </div>
          </button>
        </div>
      </div>
      <div class="w-full">
        <img :src="hero?.acf?.featured_image" alt="Trending Episode" class="object-cover mx-auto">
      </div>

    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore()

    const hero = computed(() => {
      return store.getters.hero
    })

    return {
      hero,
    }

  }
}
</script>

<style lang="scss" src="./Styles.scss"></style>