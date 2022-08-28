<template>
  <div class="mt-10 p-6 flex flex-col justify-content-center items-center w-full">
    <h3 class="text-3xl mt-10 mb-5">New Episode Every Week!</h3>
    <span class="text-md text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.</span>
    <div class="flex flex-row my-6">
      <input v-model="email" class="bg-gray-100 py-4 px-6 text-sm" placeholder="Type your email" type="text">
      <button
          class="bg-primary-red text-white px-2 hover:bg-transparent hover:text-primary-red border-primary-red border border-sm transition ease-in-out duration-300"
          @click="validateEmail">
        Subscribe
        <font-awesome-icon icon="fa-solid fa-arrow-right"/>
      </button>
    </div>
    <div>
      <span v-if="errors.length" class="text-primary-red text-sm">{{ errors }}</span>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const errors = ref('')
    const email = ref('')

    const validateEmail = () => {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!emailRegex.test(email.value)) {
        errors.value = 'Please enter a valid email'
      } else {
        errors.value = ''
      }
    }

    return {
      errors,
      email,
      validateEmail,
    }
  }
}
</script>
