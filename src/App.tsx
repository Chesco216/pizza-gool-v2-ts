import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Screens/Home/Home"
import { Login } from "./Screens/Auth/Login"
import { Signup } from "./Screens/Auth/Signup"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { ProtectedRountes } from "./Screens/ProtectedRoutes/ProtectedRountes"
import { Profile } from "./Screens/Profile/Profile"
import { Promos } from "./Screens/Promos/Promos"
import { Cart } from "./Screens/Cart/Cart"
import { Foods } from "./Screens/Foods/Foods"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      element: <ProtectedRountes/>,
      children: [
        {
          path: '/pizzas',
          element: <Foods food='pizzas'/>
        },
        {
          path: '/drinks',
          element: <Foods food='drinks'/>
        },
        {
          path: '/yourprofile',
          element: <Profile/>
        },
        {
          path: '/promotions',
          element: <Promos/>
        },
        {
          path: '/yourcart',
          element: <Cart/>
        },
      ]
    },
  ])

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
