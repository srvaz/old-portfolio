<template>
  <component
    :is="tag"
    :class="{
      [`v-text--${variant}`]: variant,
    }"
    class="v-text"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

export enum TEXT_VARIANTS {
  DARK = 'dark',
  LIGHT = 'light',
}

@Component({ name: 'VText' })
export default class VText extends Vue {
  @Prop({
    type: String,
    default: 'p',
  })
  tag!: String

  @Prop({
    type: String,
    default: 'dark',
    validator: (val) => Object.values(TEXT_VARIANTS).includes(val),
  })
  variant!: String
}
</script>

<style lang="scss" scoped>
$variants: (
  'dark': 'text',
  'light': 'light',
);

.v-text {
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  @include color-theme(color, 'text');

  @each $variant-name, $variant in $variants {
    &.v-text--#{$variant-name} {
      @include color-theme(color, $variant);
    }
  }
}
</style>
