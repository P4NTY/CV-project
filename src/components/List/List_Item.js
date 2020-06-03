import React from 'react';
//import style from './List_Item.module.scss';

const List = ({children, title, smTitle, className, onMouseEnter, onMouseLeave}) => (
    <li className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {title && <h2>{title}</h2>}
        {smTitle && <h3>{smTitle}</h3>}
        <span  dangerouslySetInnerHTML={{__html: children}}></span>
    </li>
)

export default List;