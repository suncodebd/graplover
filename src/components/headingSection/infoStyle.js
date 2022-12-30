import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Infosec = styled.div`
    background: #f8f6fa;
    padding: 2rem 0;
    @media screen and (max-width: 992px) {
        height: 100%;
    }
`;
export const InfoRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 0 7rem;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
    padding: 0px 10rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0 2rem;
    }

    @media screen and (max-width: 1300px) {
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
    font-weight: 400;

    color: #2b1b9a;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;
export const BoldText = styled.span`
    font-weight: 600;
    font-size: 26px;
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

export const Button = styled(NavLink)`
    padding: 5px;
    text-decoration: none;
    color: #2b1b9a;
    border: none;
    font-weight: bold;
    background-color: #67b6f4;
    font-size: 20px;
    padding: 15px 41px;
    border-radius: 6px;
    color: #fff;
    transition: all 0.3s;
    &:hover {
        background-color: #9d91f5;
    }

    svg {
        font-size: 20px;
        margin-left: 3px;
    }
`;
