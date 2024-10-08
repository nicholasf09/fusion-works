import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import UploadPage from './pages/Upload'
import MedievalPage from './pages/Medievals'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Collections from './pages/Collections'
import Artwork from './pages/Artwork'
// register Swiper custom elements
register();

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
    element: <Collections />,
  },
  {
    path: '/exh/medieval',
    element: <MedievalPage />,
  },
  {
    path: '/artwork',
    element: <Artwork />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  
)
