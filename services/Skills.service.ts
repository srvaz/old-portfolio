import { Skill } from '~/types'
import axios from '@/plugins/axios'

export class SkillsService {
  private path = '/skills'

  async getSkills() {
    const skillResponse = await axios.get<Skill[]>(this.path)
    return skillResponse.data
  }
}
