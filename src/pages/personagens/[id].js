import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../../styles/Info_personagens.module.css';
function Profile({ user = {} }) {
    return (
        <div className={styles.body}>
            <Navbar />
            <div className={styles.conteudo}>
                <h2>{user.nome}</h2>
                <p>Usuario: {user.usuario}</p>
                <p>{user.descricao}</p>
            </div>
            <div className={styles.voltar}>
                <p className={styles.t4}><a href="\personagens">Voltar</a></p>
            </div>
            <Footer/>
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=mônica')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=mônica')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
export default Profile;