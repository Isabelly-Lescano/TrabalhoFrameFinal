import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Head>
        <title> Home </title>
      </Head>
      <div className={styles.principal1}>
        <div className={styles.principal}>
          <h3 className={styles.t3}> Bem-vindo ao Banco de descrição dos personagens da Turma da Monica, onde a paixão pelo desenho encontra a inclusão visual! Nosso compromisso é tornar a experiência do desenho acessível a todos,
 especialmente àqueles com deficiência visual. Ao explorar nosso site, você encontrará descrições minuciosas e envolventes da Turma da Monica, elaboradas com o propósito de 
 proporcionar uma compreensão completa e rica em detalhes. <br /> Para aqueles que dependem de leitores de tela, cada descrição é cuidadosamente desenvolvida para transmitir 
 a essência, cores e elementos distintivos de cada personagem. Queremos criar um espaço onde a imaginação seja iluminada por palavras, permitindo que cada fã do desenho, 
 independentemente de sua capacidade visual, possa vivenciar a emoção e o orgulho associados ao seu desenho e personagem favorito. </h3>
          <div className={styles.principal2}>
            <p className={styles.t2}><a href="\personagens"> Lista de Personagens </a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
