import React from 'react';
import style from './Menu.module.scss';

const Menu = ({children, see}) => (
    <div className={`${style.menu} ${see && style.expand}`}>
        <div dangerouslySetInnerHTML={{ __html: children }}></div>
    </div>
)

export default Menu;