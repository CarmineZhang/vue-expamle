<template>
  <div>
  	<Display></Display>
  	<Increment></Increment>
  </div>
</template>

<script>
import Display from './Display.vue'
import Increment from './Increment.vue'
import store from '../stores/store'

export default {
  components: {
    Display,
    Increment
  },
  store
}
</script>