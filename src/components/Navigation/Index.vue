<template>
  <div>
    <div class="nav-menu">

      <button
          :class="showMobileMenu ? 'menu-active' : ''"
          class="menu-icon"
          @click="showMenu()">
        <font-awesome-icon icon="fa-solid fa-bars"/>
      </button>
      <div
          :class="showMobileMenu ? 'open-menu' : 'closed-menu'"
          class="nav-content"
      >
        <div class="logo">
          <Logo/>
        </div>

        <ul class="nav-items">
          <li v-for="page in pages" :key="page.id" class="menu-item">
            <a href="#">
              <i class="fas fa-home"></i>
              <span>{{ page.title.rendered }}</span>
            </a>
          </li>
        </ul>
        <div>
          <button
              class="bg-primary-red text-white py-2 px-6 rounded hover:bg-transparent hover:text-primary-red border-primary-red border border-sm transition ease-in-out duration-300 mr-2">
            Subscribe
          </button>
          <button
              class="bg-transparent text-primary-red py-2 px-6 rounded border border-primary-red hover:bg-primary-red hover:text-white transition ease-in-out duration-300">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../Logo.vue'
import {useStore} from "vuex";
import {computed, ref} from "vue";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

export default {

  components: {
    Logo,
    FontAwesomeIcon,
  },

  setup() {
    const store = useStore()
    const showMobileMenu = ref(false)

    const pages = computed(() => {
      return store.getters.pages
    })

    const showMenu = () => {
      showMobileMenu.value = !showMobileMenu.value
    }

    return {
      pages,
      showMobileMenu,
      showMenu,
    }

  }

}
</script>

<style lang="scss" src="./Styles.scss"></style>