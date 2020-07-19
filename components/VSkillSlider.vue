<template>
  <div class="v-skill-slider">
    <vs-alert :page.sync="page" class="v-skill-slider__mobile-slider">
      <template #title>
        {{ skills[page - 1].name }}
      </template>

      <div
        v-for="(skill, index) in skills"
        :key="index"
        :slot="`page-${index + 1}`"
      >
        {{ skill.description }}
      </div>
    </vs-alert>
    <div class="v-skill-slider__desktop-slider">
      <VCardSkill
        v-for="(skill, index) in skills"
        :key="index"
        :skill="skill"
        class="v-skill-slider__card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Skill } from '@/types'

@Component({
  name: 'VSkillSlider',
  components: {
    VCardSkill: () => import('@/components/cards/VCardSkill.vue'),
  },
})
export default class VSkillSlider extends Vue {
  page = 1

  @Prop({
    type: Array as () => Array<Skill>,
    required: true,
  })
  skills!: Array<Skill>
}
</script>

<style lang="scss" scoped>
.v-skill-slider {
  .v-skill-slider__mobile-slider {
    @media (min-width: $screen-lg) {
      display: none;
    }
  }

  .v-skill-slider__desktop-slider {
    display: grid;
    gap: $space-lg;
    // grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

    @media (max-width: $screen-lg - 1) {
      display: none;
    }
  }
}
</style>
