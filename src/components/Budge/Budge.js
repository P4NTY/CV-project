import React from 'react';
import style from './Budge.module.scss';

const Budge = ({children, img, link}) => (
    <div className={style.budge}>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{backgroundImage: `url(${img})`}}> </a>
        <p>{children}</p>
    </div>
)

export default Budge;