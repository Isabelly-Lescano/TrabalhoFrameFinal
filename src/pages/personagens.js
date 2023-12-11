import React from 'react';
import styles from '../styles/Personagens.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
function Users({ users }) {
    return (
        <div className={styles.body}>
            <Navbar />
            <h1> Lista de Personagens </h1>
            <div className={styles.conteudo}>
                {users.map((user, index) => (
                    <Link href='/personagens/[id]' as={`/personagens/${index}`}>
                        <div className={styles.nome} key={user._id}> <p> {user.nome} </p> </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=mônica')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
export default Users;
