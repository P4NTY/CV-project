import React from 'react';
import style from './Picture.module.scss';

const Picture = ({picture, type}) => (
    <div
        className={`
            ${style.picture}
            ${type === 'circle' ? style.circle : style.sqare}
        `}
        style={{backgroundImage: `url("${picture}")`}}
    ></div>
)

export default Picture;