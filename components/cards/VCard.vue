<template>
  <component
    :is="tag"
    :class="{
      'v-card--decorated': decorated,
    }"
    class="v-card"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'VCard',
})
export default class VCard extends Vue {
  @Prop({
    type: Boolean,
    default: false,
  })
  decorated!: boolean

  @Prop({
    type: String,
    default: 'div',
  })
  tag!: string
}
</script>

<style lang="scss" scoped>
.v-card {
  background-color: #fff;
  border: 1px solid unquote('rgb(var(--vs-gray-4))');
  border-radius: var(--vs-radius);
  padding: $space-st;
  position: relative;

  &.v-card--decorated {
    border: none;
    box-shadow: 0 0 $space-st $color-shadow;

    &::before {
      content: '';
      border-radius: var(--vs-radius);
      position: absolute;
      top: -$space-st;
      left: -$space-st;
      width: 100%;
      height: 100%;
      background-image: url('~assets/img/dot.svg');
      z-index: -1;
    }
  }
}
</style>
