import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import AuthProvider from './contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*semua yang ada di dalam route boleh menggunakan context*/}
    <AuthProvider>
       <RouterProvider router={router}/>
    </AuthProvider>
    {/* RouterProvider : pembungkus element untuk memunculkan element sesuai path yang di minta, router= : memberikan daftar routing yang ada di routes/index.jsx */}
  </StrictMode>,
)
