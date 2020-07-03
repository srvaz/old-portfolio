import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

import { Author } from '~/types'

@Module({
  name: 'profile',
  stateFactory: true,
  namespaced: true,
})
export default class Profile extends VuexModule {
  profile = {}

  get profileData() {
    return this.profile
  }

  @Mutation
  setProfile(profile: Author) {
    this.profile = profile
  }
}
