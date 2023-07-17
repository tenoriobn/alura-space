import Banner from "../../Componentes/Banner";
import Cabecalho from "../../Componentes/Cabecalho";
import Galeria from "../../Componentes/Galeria";
import Populares from "../../Componentes/Populares";
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

                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            
            <Rodape />
        </>
    )
}