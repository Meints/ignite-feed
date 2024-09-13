import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AleksVale.png',
      name: 'Aleksander Ribeiro',
      role: 'Fullstack Developer',	
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'aleks.design/doctorcare' },
    ],
    publishedAt: new Date('2024-09-13 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/JoaoPauloTeixeira.png',
      name: 'João Paulo Teixeira',
      role: 'Backend Developer',	
    },
    content: [
      { type: 'paragraph', content: 'E aí pessoal 👋' },
      { type: 'paragraph', content: 'Estou muito animado! Recentemente finalizei um projeto de API REST usando Node.js e Express. O projeto foi desenvolvido durante o GoStack da Rocketseat!' },
      { type: 'link', content: 'joao.dev/api-nodejs' },
    ],
    publishedAt: new Date('2024-09-13 09:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/thiagofgui.png',
      name: 'Thiago Ferreira Guimarães',
      role: 'Fullstack Developer',	
    },
    content: [
      { type: 'paragraph', content: 'Salve galera 👋' },
      { type: 'paragraph', content: 'Acabei de finalizar um app mobile super legal com React Native! Fiz esse projeto para melhorar minhas habilidades em desenvolvimento mobile. Confere aí no link!' },
      { type: 'link', content: 'thigas.dev/react-native-app' },
    ],
    publishedAt: new Date('2024-09-11 17:45:00'),
  },
  {
    id: 4,
    author: {
      avatarUrl: 'https://github.com/jeanmachadocx.png',
      name: 'Jean Machado',
      role: 'SAP Analyst',	
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal 👋' },
      { type: 'paragraph', content: 'Acabei de concluir uma integração entre SAP e sistemas de terceiros, automatizando processos de negócios com sucesso! Foi um desafio interessante, mas o resultado ficou ótimo.' },
      { type: 'link', content: 'jean.dev/integracao-sap' },
    ],
    publishedAt: new Date('2024-09-10 14:12:50'),
  },
  {
    id: 5,
    author: {
      avatarUrl: 'https://github.com/rafaballerini.png',
      name: 'Rafaella Ballerini',
      role: 'Criadora de Conteúdo',	
    },
    content: [
      { type: 'paragraph', content: 'Oi pessoal 👋' },
      { type: 'paragraph', content: 'Acabei de lançar um novo vídeo no meu canal, onde explico como iniciar na programação de forma simples e descomplicada. Se você está começando ou quer melhorar, dá uma olhada!' },
      { type: 'link', content: 'youtube.com/rafaballerini' },
    ],
    publishedAt: new Date('2024-09-09 22:34:28'),
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}

