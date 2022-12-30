import styled from 'styled-components';

export const ServiceArea = styled.div`
    padding: 5rem 10rem;
    background-color: #fff;
`;
export const ServiceContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 385px);
    gap: 2rem 4rem;

    @media screen and (max-width: 576px) {
        grid-template-columns: repeat(auto-fill, 1fr);
    }
`;
export const ServicesContent = styled.div`
    padding: 1rem;
    text-align: center;
`;
export const Img = styled.img`
    width: 174px;
    height: 174px;
`;

export const Title = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    color: #2b1b9a;
`;
export const Description = styled.h2`
    font-size: 20px;
    line-height: 32px;
    font-weight: 400;
    color: #2b1b9a;
`;
