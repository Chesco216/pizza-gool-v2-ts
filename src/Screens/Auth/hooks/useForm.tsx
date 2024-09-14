import { useState } from "react"

export const useForm = () => {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [pass, setPass] = useState<string>('')

  return {
    name, setName,
    email, setEmail,
    pass, setPass
  }
}
