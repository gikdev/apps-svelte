import App from './App.svelte'
import '@phosphor-icons/web/duotone'
import './main.scss'

type Target = (Document | Element | ShadowRoot)

const app = new App({
  target: document.getElementById('app') as Target,
})

export default app