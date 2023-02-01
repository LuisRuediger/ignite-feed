import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar}
            src="https://github.com/luisruediger.png" 
            alt="" 
          />
        </div>
        <div className={styles.authorInfo}>
          <strong>Luis Ruediger</strong>
          <span>Web Developer</span>
        </div>

        <time title='01 de fevereiro ás 06:30h' dateTime="2023-02-01 06:30:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

      <p>👉 <a href=''>jane.design/doctorcare</a></p>

      <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}