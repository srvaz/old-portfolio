<template>
  <Container role="application" class="v-skills-container">
    <VCard decorated tag="article">
      <Title :size="titleSize">
        My Skills

        <template #subtitle>
          See my main skills
        </template>
      </Title>

      <VSkillSlider :skills="skills" />
    </VCard>
  </Container>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Container from './Container.vue'
import { TITLE_SIZES, TITLE_VARIANTS } from '@/components/typography/Title.vue'
import { TEXT_VARIANTS } from '@/components/typography/VText.vue'
import { SkillsService } from '@/services/Skills.service'

@Component({
  name: 'SkillsContainer',
  components: {
    Container,
    Title: () => import('@/components/typography/Title.vue'),
    VCard: () => import('@/components/cards/VCard.vue'),
    VSkillSlider: () => import('@/components/VSkillSlider.vue'),
    VText: () => import('@/components/typography/VText.vue'),
  },
  // middleware: ['profile'],
})
export default class MainContainer extends Container {
  textVariants = TEXT_VARIANTS
  titleSizes = TITLE_SIZES
  titleVariants = TITLE_VARIANTS

  async fetch() {
    const skillService = new SkillsService()
    const skillList = await skillService.getSkills()
    this.$store.commit('Skills/setSkills', skillList)
  }

  get skills() {
    return this.$store.getters['Skills/allSkills']
  }

  get textVariant() {
    return this.textVariants.DARK
  }

  get titleSize() {
    return this.titleSizes.LARGE
  }

  get titleVariant() {
    return this.titleVariants.DARK
  }
}
</script>

<style lang="scss" scoped>
.v-skills-container {
  align-items: center;
  display: flex;
  justify-content: center;
  box-shadow: $space-st 0 $space-st $color-shadow;
}
</style>
