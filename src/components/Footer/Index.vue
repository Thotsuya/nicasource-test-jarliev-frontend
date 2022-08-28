<template>
  <div class="mt-10 p-6 flex md:flex-row flex-col justify-center w-full">
    <div class="md:w-1/4 w-full">
      <Logo/>
      <div class="my-4">
        <span
            class="text-gray-400 text-md">Lorem ipsum dolor sit amet, consetetur sadipscing  elitr, sed diam nonumy eirmod.</span>
      </div>
      <div class="flex flex-row gap-4">
        <button class="social-icon">
          <font-awesome-icon icon="fa-brands fa-facebook-f"/>
        </button>
        <button class="social-icon">
          <font-awesome-icon icon="fa-brands fa-linkedin"/>
        </button>
        <button class="social-icon">
          <font-awesome-icon icon="fa-brands fa-instagram"/>
        </button>
        <button class="social-icon">
          <font-awesome-icon icon="fa-brands fa-skype"/>
        </button>
      </div>
    </div>
    <div class="md:w-1/4 w-full">
      <span>Pages</span>
      <div class="my-8 flex flex-col gap-4">
        <a v-for="page in pages" :key="page.id"
           class="text-gray-400 hover:text-primary-red transition ease-in-out duration-300"
           href="#">{{ page.title.rendered }}</a>
      </div>
    </div>
    <div class="md:w-1/4 w-full">
      <span>Recent Episodes</span>
      <div class="my-8 flex flex-col gap-4">
        <a v-for="podcast in podcasts" :key="podcast.id"
           class="text-gray-400 hover:text-primary-red transition ease-in-out duration-300"
           href="#">{{ podcast.title.rendered }}</a>
      </div>

    </div>
    <div class="md:w-1/4 w-full">
      <span>Listen My Podcasts Also In</span>
      <button
          class="flex flex-row gap-1 border border-gray-200 px-5 py-1 rounded-sm transition ease-in-out duration-300 hover:bg-gray-100 mt-8">
        <div class="my-auto">
          <img src="/assets/google-podcasts.svg" width="30px"/>
        </div>
        <div class="flex flex-col my-auto">
          <span class="text-xs text-gray-400 mr-auto">Listen on </span>
          <span class="text-lg"><span class="font-bold">Google</span> Podcasts</span>
        </div>
      </button>
      <button
          class="flex flex-row gap-1 border border-gray-200 px-5 py-1 rounded-sm transition ease-in-out duration-300 hover:bg-gray-100 mt-2">
        <div class="my-auto">
          <img src="/assets/apple-podcasts.svg" width="30px"/>
        </div>
        <div class="flex flex-col my-auto">
          <span class="text-xs text-gray-400 mr-auto">Listen on </span>
          <span class="text-lg"><span class="font-bold">Apple</span> Podcasts</span>
        </div>
      </button>
      <button
          class="flex flex-row gap-1 border border-gray-200 px-5 py-1 rounded-sm transition ease-in-out duration-300 hover:bg-gray-100 mt-2">
        <div class="my-auto">
          <img src="/assets/spotify.svg" width="30px"/>
        </div>
        <div class="flex flex-col my-auto">
          <span class="text-xs text-gray-400 mr-auto">Listen on </span>
          <span class="text-lg font-bold">Spotify</span>
        </div>
      </button>
    </div>
  </div>
  <div class="mt-10 p-6 flex flex-col justify-content-center items-center w-full border-t-2 border-gray-100">
    <span class="text-gray-400">@2022 NicaSource All Rights Reserved</span>
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  components: {
    Logo,
  },
  setup() {
    const store = useStore()
    const pages = computed(() => {
      return store.getters.pages
    })
    const podcasts = computed(() => {
      return store.getters.podcasts
    })
    return {
      pages,
      podcasts,
    }
  }
}
</script>

<style lang="scss" src="./Styles.scss"></style>