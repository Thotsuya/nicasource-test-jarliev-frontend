<template>
  <div class="bg-white shadow shadow-lg py-8 rounded ">
    <div class="px-6 border-l-2 border-primary-red">
      <span class="text-primary-red">By {{ post._embedded.author[0].name }}</span>
      <span class="text-gray-400 text-sm">{{ formattedDate }}</span>
      <br>
      <span class="text-gray-400 text-sm">NicaSource Radio</span>
    </div>
    <div class="py-6 pl-6 pr-10">
      <h3 class="text-xl" v-html="post.title.rendered "></h3>
    </div>
    <div class="py-3 pl-7 pr-10 text-gray-400 text-md" v-html="post.content.rendered">
    </div>
    <div class="py-3 pl-7 pr-10">
      <button
          class="w-40 bg-transparent text-primary-red py-2 px-6 rounded border border-primary-red hover:bg-primary-red hover:text-white transition ease-in-out duration-300">
        Read More
      </button>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import moment from "moment";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {

    const formattedDate = computed(() => {
      return ' ' + moment(props.post.date).format('MMMM Do YYYY')
    })

    return {
      formattedDate,
    }

  }
}
</script>>

<style lang="scss" src="./Styles.scss"></style>