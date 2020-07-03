<template>
  <figure
    class="v-figure"
    :class="{
      [`v-figure--legended`]: label,
    }"
  >
    <img :src="imgPath" :alt="alt || label" />
    <figcaption v-if="label">
      {{ label }}
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

@Component({ name: 'VFigure' })
export default class VFigure extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  imgPath!: string

  @Prop({
    type: String,
    default: '',
  })
  alt!: string

  @Prop({
    type: String,
    default: '',
  })
  label!: string
}
</script>

<style lang="scss" scoped>
.v-figure {
  position: relative;

  img {
    box-shadow: -16px 16px 30px rgba(0, 0, 0, 0.35);
    filter: grayscale(100%) brightness(0.8) contrast(120%);
    height: 500px;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    user-select: none;
    width: 400px;
  }

  figcaption {
    bottom: 0;
    font-size: 14px;
    left: 0;
    max-width: 230px;
    padding: 16px 40px;
    position: absolute;
    @include color-theme(background-color, 'light');
  }

  &.v-figure--legended > img {
    margin-bottom: 22px;
    margin-left: 64px;
  }
}
</style>
