import styled from 'styled-components';

export const LoveContainer = styled.div`
    background-color: #f8f6fa;

    padding: 5rem 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        margin-top: 2rem;
        padding: 3rem 2rem;
    }
`;
export const LoveImg = styled.img`
    width: 200px;
    height: auto;
`;
export const LoveText = styled.h2`
    font-size: 40px;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
`;
