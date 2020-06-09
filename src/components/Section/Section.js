import React from 'react';
import style from "./Section.module.scss";

const Section = ({children, hide, pointer}) => (
    <div className={`${style.section} ${hide && style.hide}`}>
        {children}
    </div>
)

export default Section;