import React from 'react';
import style from './Budge.module.scss';

const Budge = ({children, img, link}) => (
    <a className={style.budge} href={link} target="_blank" rel="noopener noreferrer" style={{background: `url(./astest/picture/${img})`}}>
        {children}
        <iframe title={link} src={link} />
    </a>
)

export default Budge;