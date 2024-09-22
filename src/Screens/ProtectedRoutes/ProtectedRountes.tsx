import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRountes = () => {

  const user = localStorage.getItem('user')
  
  return user ? <Outlet/> : <Navigate to={'/'}/>

}
