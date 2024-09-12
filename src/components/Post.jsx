import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/AleksVale.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Cadu Meints</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Setembro às 10h' dateTime="2024-09-11 10:00:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href='a'>{' '}jane.design/doctorcare</a> </p>
                <p>
                    <a href='a'>#novoprojeto</a>{' '}
                    <a href="a">#nlw</a>{' '}
                    <a href="a">#rocketseat</a>
                 </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}