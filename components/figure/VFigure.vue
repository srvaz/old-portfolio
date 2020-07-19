<template>
  <figure
    class="v-figure"
    :class="{
      [`v-figure--legended`]: label,
    }"
  >
    <img :src="imgPath" :alt="alt || label" />
    <figcaption v-if="label">
      <VText size="small" variant="italic">
        {{ label }}
      </VText>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

@Component({
  name: 'VFigure',
  components: {
    VText: () => import('@/components/typography/VText.vue'),
  },
})
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
    border-radius: var(--vs-radius);
    box-shadow: -16px 16px 30px $color-shadow;
    filter: grayscale(100%) brightness(0.8) contrast(120%);
    height: 500px;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    user-select: none;
    width: 400px;
  }

  figcaption {
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
    bottom: 0;
    left: 0;
    max-width: 230px;
    padding: 16px 40px;
    position: absolute;
    @include color-theme(background-color, 'light');

    &::before {
      background-color: #195bff;
      background-image: linear-gradient(
        (62deg + 90deg),
        #195bff 0%,
        #b721ff 100%
      );
      border-bottom-right-radius: var(--vs-radius);
      border-top-right-radius: var(--vs-radius);
      content: '';
      height: 100%;
      position: absolute;
      right: -16px;
      top: 0;
      width: $space-md;
    }
  }

  &.v-figure--legended > img {
    margin-bottom: 22px;
    margin-left: 64px;
  }
}
</style>
