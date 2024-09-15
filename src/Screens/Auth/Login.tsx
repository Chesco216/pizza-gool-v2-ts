import { Form } from './components/Form'
import { useForm } from './hooks/useForm'
import styles from './LogSign.module.css'
import { formDataType } from './components/Form'
import { ArrowLeft } from '../../components/SVGS/ArrowLeft'
import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div 
        className={styles.arrow}
        onClick={() => navigate('/')}
      >
        <ArrowLeft w={60} h={60} c='#116930'/>
      </div>
      <img src='https://www.alfaforni.com/wp-content/uploads/2018/08/impasto-2.jpg' className={styles.image}/>
      <Form inputFields={fields} title='Welcome back!' handleClick={handleClick}/>
    </div>
  )
}
