import React from 'react';
import style from './Box.module.scss';

const Box = ({children, title}) => (
    <div className={style.box}>
        <h1 className={style.title}>
            {title}
        </h1>
        {children}
    </div>
)

export default Box;