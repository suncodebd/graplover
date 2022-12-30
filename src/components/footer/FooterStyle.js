import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Payment = styled.div`
    width: 100%;

    text-align: center;
    background-color: #d2d0df;
`;
export const Title = styled.h2`
    font-size: 35px;
    color: #3c3b3b;
`;
export const ImgContainer = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem 4rem;
`;
export const Img = styled.img`
    cursor: pointer;
    width: 90px;
    height: 64px;
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    width: 100%;
    padding: 1rem 0;
    background-color: #363354;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialIcon = styled(FaMagento)`
    margin-right: 10px;
`;

export const WebsiteRights = styled.b`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    svg {
        transition: 0.3s ease;
        &:hover {
            color: #25dfe6;
            transform: scale(1.3);
        }
    }
`;
