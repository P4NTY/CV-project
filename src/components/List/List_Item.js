import React from 'react';
import style from './List_Item.module.scss';
import { renderToString } from 'react-dom/server';

const List = ({children, title, smTitle, hover, onMouseEnter, onMouseLeave}) => (
    <li className={hover && style.hover} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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