import React from 'react'
import styles from './Galeria.module.scss';
import Tags from '../Tags';

export default function Galeria() {
    return (
    <section className={styles}>
        <h2 className="">Navegue pela galeria</h2>
        <Tags />
        <ul className=""></ul>
    </section>
    )
}
