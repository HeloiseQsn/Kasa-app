import React from 'react'
import { createRoot } from 'react-dom/client'
import RoutesKasa from './routes/routes.jsx'

const rootElement = document.getElementById('root')

const root = createRoot(rootElement)

root.render(<RoutesKasa />)
