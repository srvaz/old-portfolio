<template>
  <transition>
    <div class="container">
      <MainContainer />
      <SkillsContainer />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
  components: {
    MainContainer: () => import('@/components/containers/MainContainer.vue'),
    SkillsContainer: () =>
      import('@/components/containers/SkillsContainer.vue'),
  },
})
</script>

<style lang="scss">
.container {
  margin: 0;
  min-height: 100vh;
}
</style>
