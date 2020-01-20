import React from 'react';
import style from './Page.module.scss';

const Page = ( {children, } ) => (
    <div className={style.Page}>
        {children}
    </div>
)

export default Page;