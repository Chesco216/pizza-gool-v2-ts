import { Form } from './components/Form'
import { useForm } from './hooks/useForm'
import styles from './LogSign.module.css'
import { formDataType } from './components/Form'

export const Login = () => {

  const {
    email, setEmail,
    pass, setPass,
    handleClick
  } = useForm()
  const fields: Array<formDataType> = [
    {
      type: 'text',
      name: 'email',
      value: email,
      set: setEmail,
      ph: 'Your email here'
    },
    {
      type: 'password',
      name: 'pass',
      value: pass,
      set: setPass,
      ph: 'Password'
    },
  ]

  return (
    <div className={styles.container}>
      <img src='https://www.alfaforni.com/wp-content/uploads/2018/08/impasto-2.jpg' className={styles.image}/>
      <Form inputFields={fields} title='Welcome back!' handleClick={handleClick}/>
    </div>
  )
}
