<template>
  <div class="flex md:flex-row flex-col justify-content-between w-full">
    <div class=" w-full md:w-3/4 flex md:flex-row flex-col gap-6">
      <div>
        <img :alt="podcast.title.rendered" :src="podcast.acf.featured_image" class="mx-auto object-cover">
      </div>
      <div class="flex flex-col gap-4">
        <span class="text-xl">{{ podcast.title.rendered }}</span>
        <div class="text-gray-500 text-md" v-html="podcast.content.rendered"></div>
        <button
            class="w-40 bg-transparent text-primary-red py-2 px-6 rounded border border-primary-red hover:bg-primary-red hover:text-white transition ease-in-out duration-300">
          Know More
        </button>
      </div>
    </div>

    <div
        class="w-full md:w-80 px-4 border-l-2 border-gray-100 ml-auto flex flex-col text-sm text-gray-400 gap-4 md:mt-0 mt-6">
      <span># {{ podcast.acf.season }}</span>
      <span># {{ formattedDate }}</span>
      <span># {{ podcast.acf.tags }}</span>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import moment from "moment";

export default {
  props: {
    podcast: {
      type: Object,
      required: true,
      default: {}
    },
  },
  setup(props) {

    const formattedDate = computed(() => {
      return `Posted on ${moment(props.podcast.date).format('MMMM Do YYYY')}`
    })

    return {
      formattedDate,
    }

  }
}
</script>
