import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStyle } from './global-styles'
import { DataProvider } from '@context/dataContext'
import { MainPage } from '@pages/index'

const container = document.getElementById('root') as HTMLElement

const initialChildren = (
  <StrictMode>
    <DataProvider>
      <GlobalStyle />
      <MainPage />
    </DataProvider>
  </StrictMode>
)

const root = createRoot(container)
root.render(initialChildren)
