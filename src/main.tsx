import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import { FavoritesProvider } from './characters/context/characterContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ErrorBoundary>
  </StrictMode>,
)
