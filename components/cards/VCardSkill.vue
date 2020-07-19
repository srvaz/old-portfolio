<template>
  <VCard class="v-card-skill">
    <img :src="skill.cover" alt="test" class="v-card-skill__img" />

    <div class="v-card-skill__header">
      <div class="v-card-skill__header-title">
        <Title size="micro">
          {{ skill.name }}
        </Title>

        <VText size="micro">
          {{ skill.label }}
        </VText>
      </div>

      <div class="v-card-skill__header-recommendation">
        <vs-avatar-group max="3">
          <vs-avatar
            v-for="(recommendation, index) in skill.recommenderProfiles"
            :key="index"
            circle
            size="35"
          >
            <img :src="recommendation.avatar" :alt="recommendation.name" />
          </vs-avatar>
        </vs-avatar-group>
      </div>
    </div>

    <div class="v-card-skill__content">
      <VText size="small">
        {{ skill.description }}
      </VText>
    </div>

    <div class="v-card-skill__actions">
      <vs-button :href="skill.link" blank>
        See more!
      </vs-button>
    </div>
  </VCard>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import VCard from './VCard.vue'
import { Skill } from '@/types'

@Component({
  name: 'VCardSkill',
  components: {
    VCard,
    Title: () => import('@/components/typography/Title.vue'),
    VText: () => import('@/components/typography/VText.vue'),
  },
})
export default class VCardSkill extends VCard {
  @Prop({
    type: Object as () => Skill,
    required: true,
  })
  skill!: Skill
}
</script>

<style lang="scss" scoped>
.v-card-skill {
  display: grid;
  gap: $space-md;
  grid-template-rows: 200px repeat(3, auto);
  min-height: 320px;
  position: relative;
  width: 320px;

  .v-card-skill__img {
    border-radius: var(--vs-radius);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.35);
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .v-card-skill__header {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: $space-sm;

    .vs-avatar__group {
      justify-content: flex-end;
    }
  }

  .v-card-skill__actions {
    position: absolute;
    bottom: -(32px / 2);
    right: $space-st;
  }
}
</style>
