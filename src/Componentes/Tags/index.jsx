import React from 'react';
import styles from "./Tags.module.scss"

export default function Tags() {
    return (
        <div className={styles.tags}>
            <p className="">Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                <li className="">Estrelas</li>
                <li className="">Galáxias</li>
                <li className="">Lua</li>
                <li className="">Planetas</li>
            </ul>
        </div>
    )
}
