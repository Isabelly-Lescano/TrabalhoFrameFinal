import styles from '../styles/Components.module.css'
export default function Navbar() {
    return (
        <div className={styles.navbar}>
               <p><a href="\">Home</a></p>
               <p><a href="\personagens">Personagens </a></p>
            <h1 className={styles.t}>Banco de descrição de Personagens da Turma da Mônica</h1>
        </div>
    )
}
