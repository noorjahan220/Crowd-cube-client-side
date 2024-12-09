import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './utils/router';
import AuthProvider from './Provider/AuthProvider';
import { ThemeProvider } from './routes/ThemeProvider';
import './theme.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
