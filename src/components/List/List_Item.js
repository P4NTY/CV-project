import React from 'react';
import style from './List_Item.module.scss';
import { renderToString } from 'react-dom/server';

const List = ({children, title, smTitle, hover, pointer, onMouseEnter, onMouseLeave, onClick}) => (
    <li
        className={`${style.item} ${hover && style.hover}  ${pointer && style.pointer}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
    >
        {title && <h2>{title}</h2>}
        {smTitle && <h3>{smTitle}</h3>}
        {
            children && (
                typeof children === 'string' ? (
                    <span>{children}</span>
                ) : (
                    <span dangerouslySetInnerHTML={{__html: renderToString(children)}}></span>
                )
            )
        }
    </li>
)

export default List;