import './global.css'
import { useState, useEffect } from 'react'
import { Button } from './components/button'
import styles from './app.module.css'
// import { useMessage } from './hooks/useMessage'

export function App() {
  const [count, setCount] = useState(0)
  // const message = useMessage({ name: 'Victor', age: 28 })

  function handleAdd() {
    setCount(count + 1)
  }

  function handleRemove() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  useEffect(() => {
    if (count > 0) {
      console.log('The count value changes to: ' + count)
    }
  }, [count])

  return (
    <div className={styles.container}>
      <Button
        name="Adicionar"
        onClick={() => handleAdd()}
        // onClick={() => show('Message from my custom hook')}
      />
      <span>{count}</span>
      <Button name="Remover" onClick={() => handleRemove()} />
    </div>
  )
}
