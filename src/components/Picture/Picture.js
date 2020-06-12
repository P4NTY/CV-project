import React, { useState } from 'react';
import style from './Picture.module.scss';

const Picture = ({picture, circle, absolute, small, medium, large, width, height}) => {
    const [ size , setSize ] = useState(large);

    const handleClick = () => {
        setSize(!size);
    }

    return (
        /*
        <div
            className={`
                ${style.picture}
                ${circle ? style.circle : style.sqare}
                ${absolute && style.absolute}
                ${small && style.small}
                ${medium && style.medium}
                ${(large || size) && style.large}
            `}
            style={{backgroundImage: `url("${picture}")`, width: `${width ? width + 'px' : 'auto'}`, height: `${height ? height + 'px' : 'auto'}`}}
            onClick={handleClick}
        ></div>
        */
        <img
            src={picture}
            alt=""
            className={`
                ${style.picture}
                ${circle ? style.circle : style.sqare}
                ${absolute && style.absolute}
                ${small && style.small}
                ${medium && style.medium}
                ${(large || size) && style.large}
            `}
            width={160}
            height={90}
            onClick={() => (handleClick())}
        />
    );
}

export default Picture;