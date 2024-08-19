import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import UploadPage from './pages/Upload'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/uploads',
    element: <UploadPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
