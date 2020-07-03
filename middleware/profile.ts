import { Middleware } from '@nuxt/types'
import axios from 'axios'

const myMiddleware: Middleware = async (context) => {
  const res = await axios.get(
    'https://5efe8072dd373900160b4385.mockapi.io/perfil'
  )

  context.store.commit('Profile/setProfile', res.data[0])
}

export default myMiddleware
