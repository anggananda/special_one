import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './Component/Pages/Home'
import Journey from './Component/Pages/Journey'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/journey',
    element: <Journey/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
