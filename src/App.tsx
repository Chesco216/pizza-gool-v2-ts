import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Screens/Home/Home"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
