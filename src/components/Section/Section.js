import React from 'react';
import style from "./Section.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const Section = ({children, hide, pointer}) => (
    <div className={`${style.section} ${hide && style.hide}`}>
        {children}
        <FontAwesomeIcon icon={faAngleDoubleUp} />
    </div>
)

export default Section;