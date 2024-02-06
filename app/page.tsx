import styles from './page.module.css'
import CounterApp from "../components/Counter"

export default function Home() {
  return (
    <main className={styles.main}>
     <CounterApp />
    </main>
  )
}
