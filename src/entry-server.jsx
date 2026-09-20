import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { allRoutes } from './routes.js'

export { allRoutes }

export function render(pathname) {
  return renderToString(<App pathname={pathname} />)
}
