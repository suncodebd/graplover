import React from 'react';
import styled from 'styled-components';

function Coding() {
    return (
        <CodingContainer>
            <ComingSong>Coming soon...</ComingSong>
        </CodingContainer>
    );
}

export default Coding;

export const CodingContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f6fa;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ComingSong = styled.h2`
    font-size: 50px;
`;
