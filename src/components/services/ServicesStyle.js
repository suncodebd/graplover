import styled from 'styled-components';

export const ServiceArea = styled.div`
    background: #fdf4fc;
    padding: 2rem 4rem;

    @media screen and (max-width: 1025px) {
        padding: 1rem 1rem;
    }
`;

export const Heading = styled.div`
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.div`
    color: black;
    font-size: 45px;
    font-weight: 600;
    border-bottom: 4px solid #9d91f5;
    padding-bottom: 0.7rem;
    line-height: 32px;
`;

export const ServiceRow = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 500px);
    gap: 40px 40px;
    justify-content: center;

    @media screen and (max-width: 576px) {
        grid-template-columns: repeat(auto-fit, 100%);
    }
`;
export const ServiceContent = styled.div`
    border-radius: 10px;

    overflow: hidden;
`;
export const ServiceContentTitle = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    background-color: #363354;
    color: #fff;
    line-height: 32px;
    margin: 0;
    padding: 20px 0;

    @media screen and (max-width: 768) {
        font-size: 30px;
    }
`;
export const ImageContainer = styled.div`
    text-align: center;
`;
