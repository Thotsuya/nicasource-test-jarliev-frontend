<template>
  <div class="mt-10 p-6 flex flex-col justify-content-center items-center w-full">
    <h3 class="text-3xl my-10">Our Gallery</h3>
    <div class="columns-2 md:columns-3 lg:columns-4 gap-0 m-0">
      <div v-for="image in gallery" v-if="gallery" :key="image.id" class="img-container">
        <img :src="image.full_image_url"
             class="object-cover w-full h-full"/>
        <div class="overlay">
          <a class="icon" href="#" title="Image Link">
            <font-awesome-icon icon="fa-solid fa-link"/>
          </a>
        </div>
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
    const gallery = computed(() => {
      return store.getters.gallery
    })
    return {
      gallery
    }
  }
}
</script>

<style lang="scss" src="./Styles.scss"></style>