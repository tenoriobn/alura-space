import Banner from "../../Componentes/Banner";
import Cabecalho from "../../Componentes/Cabecalho";
import Menu from "../../Componentes/menu";
import styles from './PaginaInicial.module.scss';

export default function Paginainicial() {
    return (
        <>
            <Cabecalho />

            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <Banner />
                    </div>
                </section>
            </main>
        </>
    )
}