import React from 'react';
import style from './Budge.module.scss';

const Budge = ({children, img, link, description}) => (
    <p className={style.wrapper}>
        <div className={style.budge}>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{backgroundImage: `url(${img})`}}> </a>
            <p>{children}</p>
        </div>
        {(description&&description.html !== "<p></p>")&&
            <p
                className={style.hover}
                dangerouslySetInnerHTML={{__html: description.html}}>
            </p>
        }
    </p>
)

export default Budge;