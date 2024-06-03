import { useState } from 'react'
import Todo from './components/Todo'
import styles from '../src/styles/app.module.css'

function App() {

  return (
    <div className={styles.App}>
      <Todo/>
    </div>
  )
}

export default App
