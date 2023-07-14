import Banner from "../../Componentes/Banner";
import Cabecalho from "../../Componentes/Cabecalho";
import Galeria from "../../Componentes/Galeria";
import Rodape from "../../Componentes/Rodape";
import Menu from "../../Componentes/menu";
import styles from './PaginaInicial.module.scss';

export default function Paginainicial() {
    return (
        <>
            <Cabecalho />

            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <div>
                <Galeria />
            </div>
            <Rodape />
        </>
    )
}