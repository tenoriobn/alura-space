import React from 'react';
import styles from './Rodape.module.scss';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';


export default function Rodape() {
    return (
    <footer className={styles.rodape}>
        <div className={styles.icon}>
            <a href="https://www.facebook.com/AluraCursosOnline/" target="_blank" rel="noreferrer">
                <img src={facebook} alt="Icon Facebook" />
            </a>
            <a href="https://twitter.com/aluraonline?lang=en" target="_blank" rel="noreferrer">
                <img src={twitter} alt="Icon Twitter" />
            </a>

            <a href="https://www.instagram.com/aluraonline/?hl=en" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Icon Instagram" />
            </a>
        </div>
        <p className={styles.creditos}>Desenvolvido por Alura</p>
    </footer>
    )
}
