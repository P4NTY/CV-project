import React from 'react';
import style from './Picture.module.scss';

const Picture = ({picture, circle, absolute, small}) => (
    <div
        className={`
            ${style.picture}
            ${circle ? style.circle : style.sqare}
            ${absolute && style.absolute}
            ${small && style.small}
        `}
        style={{backgroundImage: `url("${picture}")`}}
    ></div>
)

export default Picture;