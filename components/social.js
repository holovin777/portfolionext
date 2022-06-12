import styles from '../styles/Social.module.css'
import Image from 'next/image'

export default function Social({url, picture, name, description}) {
  return (
    <a href={url} className={styles.card}>
      <h2>
        <Image
          src={picture}
          alt="Picture of the author"
          width={24}
          height={24}
        /> {name}
      </h2>
      <p>{description}</p>
    </a>
  )
}
