import React from 'react';
import style from './Picture.module.scss';

const Picture = ({picture, circle, absolute, small, medium, large, width, height}) => {
    const size = large;

    // const handleClick = () => {
    //     setSize(!size);
    // }

    return (
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
            width={width}
            height={height}
            //onClick={() => (handleClick())}
        />
    );
}

export default Picture;