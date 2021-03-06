import React from 'react';
import styled from 'styled-components';
import background from '../../assets/pictures/page_bg.png';

const PageDiv = styled.div`

    background-image: ${({background}) => `url('${background}')`};
    background-size: 10%;
    width: ${({size}) => 210*(size[1] < 883 ? 0.8 : 0.5)}vmin;
    height: ${({size}) => 297*(size[1] < 883 ? 0.8 : 0.5)}vmin;

    min-height: 1494.89px;
    max-height: 1514.350px;

    margin: 20px auto;
    padding: 40px;
    box-shadow: 5px 10px 10px grey;
    overflow: hidden;

    @media print {
        width: 100%;
        margin: 0;
        background: white;
        height: fit-content;
        max-height: max-content;
        min-height: min-content;
        padding: 20px;
    }
`


const Page = ( {children, size } ) => (
    <PageDiv size={size} background={background}>
        {children}
    </PageDiv>
)

export default Page;