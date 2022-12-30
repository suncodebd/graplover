import styled from 'styled-components';

export const Infosec = styled.div`
    background: #fff;

    padding: 2rem 0;
`;
export const InfoRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
    gap: 0 7rem;
    padding: 0px 10rem;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0 2rem;
    }
`;
export const InfoColumn = styled.div`
    margin-bottom: 15px;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    paddiing-bottom: 60px;
    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.p`
    color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #2b1b9a;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`;
export const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;

    color: #2b1b9a;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const Description = styled.p`
    line-height: 32px;
    font-size: 24px;
    color: #2b1b9a;
    font-weight: 500;
`;

export const PriceText = styled.h2`
    color: #3c21ff;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    background-color: #f5f4fd;
    padding: 5px;
    display: inline-block;
`;
export const PriceTextUsd = styled.span`
    color: black;
`;

export const ImageWraper = styled.div`
    width: 651px;
    height: 100%;

    @media screen and (max-width: 1025px) {
        width: 375px;
        height: auto;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;
export const Img = styled.img`
    padding-right: 0;
    border: 0;
    width: 100%;
    vertical-align: middle;
    display: block;
    height: 100%;
    object-fit: cover;
`;
