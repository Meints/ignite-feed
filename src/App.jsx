import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Cadu Meints" 
            content= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci vitae sequi quia! Natus error sed voluptates totam minus quam quia?"
          />
          <Post 
            author="Alek" 
            content= "Novo post"
          />
        </main>
      </div>
      
    </div>
  )
}

