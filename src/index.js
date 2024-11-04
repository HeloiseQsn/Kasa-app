import React from 'react'
import { createRoot } from 'react-dom/client'
import RoutesKasa from './Routes/Routes'

const rootElement = document.getElementById('root')

const root = createRoot(rootElement)

root.render(<RoutesKasa />)
