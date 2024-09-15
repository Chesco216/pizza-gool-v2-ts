import React from 'react'
import styles from './Form.module.css'
import { useNavigate } from 'react-router-dom'

export type formDataType = {
  type: string,
  name: string,
  value: string,
  ph: string,
  set: React.Dispatch<React.SetStateAction<string>>
}

export const Form = ({ inputFields, title, handleClick }: 
  { inputFields: Array<formDataType>, title: string, handleClick: (option: string) => void }) => {
  const navigate = useNavigate()

  return (
    <form 
      className={styles.container}
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className={styles.title}>{title}</h2>
      {
        inputFields.map(field => 
          <input
            className={styles.field}
            key={field.name}
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={(e) => field.set(e.target.value)}
            placeholder={field.ph}
          />
        )
      }
      <button 
        type='submit'
        className={styles.btn}
        onClick={() => (inputFields.length === 2) ? 
          handleClick('login')
          :
          handleClick('signup')
        }
      >
        {
          (inputFields.length == 2) ? 'Log in' : 'Sign up'
        }
      </button>
      {
        (inputFields.length === 2) &&
          <label>Dont have an accouunt? <strong onClick={() => navigate('/signup')}>create acoount</strong></label>
      }
      {
        (inputFields.length === 3) &&
          <label>Already have an accouunt? <strong onClick={() => navigate('/login')}>sign in</strong></label>
      }
    </form>
  )
}

