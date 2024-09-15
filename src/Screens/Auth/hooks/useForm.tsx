import { useState } from "react"

export const useForm = () => {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [pass, setPass] = useState<string>('')

  const signUp = () => {
    console.log('signUp succesfully')
  }
  const login = () => {
    console.log('login succesfully')
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
