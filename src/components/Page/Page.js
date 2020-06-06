import React from 'react';
import styled from 'styled-components';

const PageDiv = styled.div`

    background-color: white;
    width: ${({size}) => 210*(size[1] < 883 ? 0.8 : 0.5)}vmin;
    height: ${({size}) => 297*(size[1] < 883 ? 0.8 : 0.5)}vmin;

    min-height: 1494.89px;
    max-height: 1514.350px;

    margin: 20px auto;
    padding: 40px;
    box-shadow: 5px 10px 10px grey;
    overflow: hidden;
`


const Page = ( {children, size } ) => (
    <PageDiv size={size}>
        {children}
    </PageDiv>
)

export default Page;