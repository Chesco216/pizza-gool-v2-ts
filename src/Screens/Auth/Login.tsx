import { Form } from 'react-router-dom'
import { useForm } from './hooks/useForm'
import styles from './LogSign.module.css'

export const Login = () => {

  const {
    email, setEmail,
    pass, setPass
  } = useForm()
  const fields = [
    {
      type: 'text',
      name: 'email',
      value: email,
      set: setEmail
    },
    {
      type: 'password',
      name: 'pass',
      value: pass,
      set: setPass
    },
  ]

  return (
    <div className={styles.container}>
      <img src='https://www.alfaforni.com/wp-content/uploads/2018/08/impasto-2.jpg' className={styles.image}/>
      {
        //FIX: the Form component
      }
      <Form fields={fields}/>
    </div>
  )
}
