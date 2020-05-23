import React from 'react';
import style from './Menu.module.scss';

const Menu = ({children}) => (
    <div className={style.menu}>
        <div>{children}</div>
    </div>
)

export default Menu;