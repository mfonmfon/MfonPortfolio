import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MFON_MFON_PORTFOLIO_ROUTES from './routers/Router'

function App() {
  const portfolioRouter = createBrowserRouter([
    ...MFON_MFON_PORTFOLIO_ROUTES,
  ])

  return (
    <>
     <RouterProvider router={portfolioRouter}>

     </RouterProvider>
    </>
  )
}

export default App
