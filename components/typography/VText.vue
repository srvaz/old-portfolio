<template>
  <component
    :is="tag"
    :class="{
      [`v-text--${size}`]: size,
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
  ITALIC = 'italic',
}

@Component({ name: 'VText' })
export default class VText extends Vue {
  @Prop({
    type: String,
    default: 'default',
  })
  size!: String

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
$sizes: (
  'micro': 12px,
  'small': 14px,
);

$variants: (
  'dark' color 'text',
  'light' color 'light',
  'italic' font-style italic
);

.v-text {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  @include color-theme(color, 'text');

  @each $size-name, $size in $sizes {
    &.v-text--#{$size-name} {
      font-size: $size;

      @if $size-name == micro {
        font-style: italic;
        font-weight: 400;
      }
    }
  }

  @each $variant-name, $prop, $variant in $variants {
    &.v-text--#{$variant-name} {
      @if $prop == color {
        @include color-theme($prop, $variant);
      } @else {
        #{$prop}: $variant;
        @if $variant == italic {
          font-weight: 400;
        }
      }
    }
  }
}
</style>
