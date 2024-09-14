import styles from './Form.module.css'

type formDataType = {
  type: string,
  name: string,
  value: string,
  set: React.Dispatch<React.SetStateAction<string>>
}

export const Form = (fields: Array<formDataType>) => {
  return (
    <form className={styles.container}>
      {
        fields.map(field => 
          <input
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={(e) => field.set(e.target.value)}
          />
        )
      }
    </form>
  )
}

