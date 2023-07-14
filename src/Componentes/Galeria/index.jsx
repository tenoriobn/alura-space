import React from 'react'
import Tags from '../Tags';
import styles from './Galeria.module.scss';
import fotos from './fotos.json';
import open from './open.png';
import favorito from './favorito.png';

export default function Galeria() {
    return (
    <section className={styles.galeria}>
        <h2 className="">Navegue pela galeria</h2>
        <Tags />
        <ul className={styles.galeria__cards}>
        {fotos.map((foto) => {
            return(
                <li key={foto.id} className={styles.galeria__card}>
                    <img src={foto.imagem} alt={foto.titulo} className={styles.galeria__imagem} />
                    <p className={styles.galeria__descricao}>{foto.titulo}</p>
                    <div>
                        <p>{foto.creditos}</p>
                        <span>
                            <img src={favorito} alt="Ícone coração de curtir" />
                            <img src={open} alt="Ícone de abrir modal" />
                        </span>
                    </div>
                </li>
            );
        })}
        </ul>
    </section>
    )
}
