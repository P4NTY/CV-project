import React from 'react';
import style from './Link.module.scss';

const Link = ({children, img, link}) => (
    <a className={style.Link} href={link} target="_blank"  rel="noopener noreferrer">
        <span>
            <img src={img} alt=""/>
        </span>
        <span>
            {children}
        </span>
    </a>
)

export default Link;