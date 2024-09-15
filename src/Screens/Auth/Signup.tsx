import { useNavigate } from 'react-router-dom'
import { Form } from './components/Form'
import { formDataType } from './components/Form'
import { useForm } from './hooks/useForm'
import styles from './LogSign.module.css'
import { ArrowLeft } from '../../components/SVGS/ArrowLeft'

export const Signup = () => {

  const {
    name, setName,
    email, setEmail,
    pass, setPass,
    handleClick
  } = useForm()

  const fields: Array<formDataType> = [
    {
      type: 'text',
      name: 'name',
      value: name,
      set: setName,
      ph: 'Name'
    },
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
      ph: 'Pasword'
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
      <img src='https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/77c0ae95c98683757058aaa04931465d.jpg' className={styles.image}/>
      <Form inputFields={fields} title='Welcome to Pizza Goool' handleClick={handleClick}/>
    </div>
  )
}

