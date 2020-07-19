<template>
  <section :role="role" class="v-container">
    <div class="v-container__wrapper">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'Container',
})
export default class Container extends Vue {
  @Prop({
    type: String,
    required: false,
  })
  readonly role!: string
}
</script>

<style lang="scss" scoped>
.v-container {
  min-height: 100vh;
  width: 100%;
  padding: $space-md;

  @media (min-width: $screen-lg) {
    padding: $space-xl 0;
  }

  .v-container__wrapper {
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
  }
}
</style>
