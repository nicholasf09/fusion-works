import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import UploadPage from './pages/Upload'
import CollectionsPage from './pages/Collections'
import MedievalPage from './pages/Medievals'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/uploads',
    element: <UploadPage />,
  },
  {
    path: '/collections',
    element: <CollectionsPage />,
  },
  {
    path: '/exh/medieval',
    element: <MedievalPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
