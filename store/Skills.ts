import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

import { Skill } from '~/types'
import axios from '@/plugins/axios'

@Module({
  name: 'skills',
  stateFactory: true,
  namespaced: true,
})
export default class Skills extends VuexModule {
  skills: Skill[] = []

  get allSkills() {
    return this.skills
  }

  @Mutation
  setSkills(skills: Skill[]) {
    this.skills = skills
  }

  @Action
  async getSkills() {
    const skillResponse = await axios.get<Skill[]>('/skills')
    this.setSkills(skillResponse.data)
  }
}

// export const skillsModule = getModule(Skills)
