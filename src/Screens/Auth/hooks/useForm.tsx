import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../../firebase/firebase"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "./useStore"
import { set_user } from "../../../store/userSlice"

export const useForm = () => {

  //NOTE: erase that pipipi
  const [name, setName] = useState<string>('pipipi')
  const [email, setEmail] = useState<string>('')
  const [pass, setPass] = useState<string>('')

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const signUp = async() => {
    try {
      const usr = await createUserWithEmailAndPassword(auth, email, pass)
      const user = usr.user
      // TODO: change user info with  firebase info
      dispatch(set_user(
        {
          name: name,
          email: email,
          password: pass
        }
      ))
      localStorage.setItem('user',JSON.stringify(
        {
          name: name,
          email: email,
          password: pass
        }
      ))
      console.log(user)
      navigate('/yourprofile')
    } catch (error: any) {
      alert(error.code)
    }
  }

  const login = async() => {
    try {
      const usr = await signInWithEmailAndPassword(auth, email, pass)
      const user = usr.user
      dispatch(set_user(
        {
          name: 'name pipipi',
          email: email,
          password: pass
        }
      ))
      localStorage.setItem('user', JSON.stringify(
        {
          name: name,
          email: email,
          password: pass
        }
      ))
      console.log(user)
      navigate('/yourprofile')
    } catch (error: any) {
      alert(error.code)
    }
  }

  const handleClick = (option: string) => {
    (option == 'signup') ?
        signUp()
      : 
        (option == 'login') ?
            login()
          :
            console.log('invalid option')
  }

  return {
    name, setName,
    email, setEmail,
    pass, setPass,
    handleClick
  }
}
