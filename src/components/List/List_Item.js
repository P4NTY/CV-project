import React from 'react';
import style from './List_Item.module.scss';

const List = ({children, title, smTitle, hover, pointer, onMouseEnter, onMouseLeave, onClick}) => (
    <li
        className={`${style.item} ${hover && style.hover}  ${(pointer || onClick) && style.pointer}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
    >
        {title && <h2>{title}</h2>}
        {smTitle && <h3>{smTitle}</h3>}
        <span>{children}</span>
    </li>
)

export default List;