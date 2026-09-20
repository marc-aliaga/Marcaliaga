import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Links shared before the move to real URLs looked like /#/articles/<slug>.
const legacy = window.location.hash.match(/^#\/((?:articles|posts)\/.+?)\/?$/)
if (legacy) {
  window.location.replace(`/${legacy[1]}/`)
} else {
  const root = document.getElementById('root')
  const app = (
    <StrictMode>
      <App pathname={window.location.pathname} />
    </StrictMode>
  )
  // Built pages ship pre-rendered HTML to hydrate; the dev server serves an empty shell.
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
}
