<template>
  <component
    :is="tag"
    :class="{
      [`v-title--${size}`]: size,
      [`v-title--${variant}`]: variant,
    }"
    class="v-title"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

export enum TITLE_SIZES {
  MICRO = 'micro',
  SMALL = 'small',
  DEFAULT = 'default',
  LARGE = 'large',
  COLOSSAl = 'colossal',
}

export enum TITLE_VARIANTS {
  DARK = 'dark',
  LIGHT = 'light',
}

@Component({ name: 'Title' })
export default class Title extends Vue {
  @Prop({
    type: String,
    default: 'h2',
  })
  tag!: String

  @Prop({
    type: String,
    default: 'default',
    validator: (val) => Object.values(TITLE_SIZES).includes(val),
  })
  size!: String

  @Prop({
    type: String,
    default: 'dark',
    validator: (val) => Object.values(TITLE_VARIANTS).includes(val),
  })
  variant!: String
}
</script>

<style lang="scss" scoped>
$sizes: (
  'micro': 16px,
  'small': 18px,
  'default': 24px,
  'large': 32px,
  'colossal': 96px,
);

$variants: (
  'dark': 'text',
  'light': 'light',
);

.v-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: $space-md;
  @include color-theme(color, 'text');

  @each $size-name, $size in $sizes {
    &.v-title--#{$size-name} {
      font-size: #{$size};
    }
  }

  @each $variant-name, $variant in $variants {
    &.v-title--#{$variant-name} {
      @include color-theme(color, $variant);
    }
  }
}
</style>
