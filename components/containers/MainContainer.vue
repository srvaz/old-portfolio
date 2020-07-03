<template>
  <Container role="main" class="v-main-container">
    <div class="v-main-container__background-wrapper">
      <div class="v-main-container__background-shape" />
      <div class="v-main-container__background-texture" />
    </div>

    <div class="v-main-container__content-wrapper">
      <VFigure
        :img-path="profileImage"
        :label="profileLabel"
        class="v-main-container__figure"
      />

      <div>
        <Title :size="titleSizes.COLOSSAl" :variant="titleVariant">
          Hello, World!
        </Title>
        <VText class="v-main-container__text">
          {{ profileData.description }}
        </VText>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Container from './Container.vue'
import Title, {
  TITLE_SIZES,
  TITLE_VARIANTS,
} from '@/components/typography/Title.vue'
import VFigure from '@/components/figure/VFigure.vue'
import VText, { TEXT_VARIANTS } from '@/components/typography/VText.vue'
import { Author } from '@/types/index'

@Component({
  name: 'MainContainer',
  components: {
    Container,
    Title,
    VFigure,
    VText,
  },
  middleware: ['profile'],
})
export default class MainContainer extends Container {
  textVariants = TEXT_VARIANTS
  titleSizes = TITLE_SIZES
  titleVariants = TITLE_VARIANTS

  get profileData(): Author {
    return this.$store.getters['Profile/profileData']
  }

  get textVariant() {
    return this.textVariants.DARK
  }

  get titleVariant() {
    return this.titleVariants.DARK
  }

  get profileImage() {
    return require('@/assets/img/pp.jpg')
  }

  get profileLabel() {
    const { firstName, lastName, career } = this.profileData
    return `${firstName} ${lastName}, ${career}`
  }
}
</script>

<style lang="scss" scoped>
.v-main-container {
  align-items: center;
  display: flex;
  justify-content: center;

  .v-main-container__background-wrapper {
    display: grid;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    grid-template-rows: 1fr 0;

    @media (min-width: $screen-md) {
      grid-template-rows: 500px 1fr;
    }

    @media (min-width: $screen-lg) {
      grid-template-columns: 400px 1fr;
      grid-template-rows: inherit;
    }

    @media (min-width: $screen-xl) {
      grid-template-columns: 550px 1fr;
    }

    .v-main-container__background-shape {
      @include color-theme('background-color', 'primary');
    }

    .v-main-container__background-texture {
      background-image: url('~assets/img/dot.svg');
      @include color-theme('background-color', 'light');
    }
  }

  .v-main-container__content-wrapper {
    align-items: center;
    display: grid;

    @media (min-width: $screen-md) {
      grid-template-rows: 500px 1fr;
      padding: 0 $space-st;
    }

    @media (min-width: $screen-lg) {
      gap: $space-lg;
      grid-template-columns: auto 1fr;
    }

    @media (min-width: $screen-xl) {
      gap: $space-xxl;
      padding: 0;
    }

    .v-main-container__text {
      @include color-theme(color, 'light');

      @media (min-width: $screen-md) {
        padding: $space-md;
        @include color-theme(background-color, 'light');
        @include color-theme(color, 'dark');
      }
    }
  }
}
</style>

<style lang="scss">
.v-main-container__figure {
  @media (max-width: $screen-sm) {
    display: none;
  }

  @media (max-width: $screen-lg) {
    img {
      width: 350px !important;
      height: 400px !important;
    }
  }
}
</style>
