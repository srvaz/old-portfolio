<template>
  <transition>
    <div class="container">
      <MainContainer />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
  components: {
    MainContainer: () => import('@/components/containers/MainContainer.vue'),
  },
})
</script>

<style>
.container {
  margin: 0;
  min-height: 100vh;
}
</style>
