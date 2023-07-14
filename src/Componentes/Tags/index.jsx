import React from 'react';
import styles from "./Tags.module.scss"

export default function Tags() {
    return (
        <div className={styles}>
            <p className="">Filtre por tags:</p>
            <ul className="">
                <li className="">Estrelas</li>
                <li className="">Galáxias</li>
                <li className="">Lua</li>
                <li className="">Planetas</li>
            </ul>
        </div>
    )
}
