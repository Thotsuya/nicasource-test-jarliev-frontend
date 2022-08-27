<template>
  <div class="py-2 md:px-10 px-3">
    <Navigation/>
  </div>
</template>

<script>
import {onMounted} from "vue";
import {useStore} from 'vuex'
import Navigation from './components/Navigation/Index.vue'

export default {

  components: {
    Navigation,
  },

  setup() {

    const store = useStore()

    onMounted(async () => {
      await store.dispatch('getPages')
    })
  }
}
</script>

<style scoped>

</style>
