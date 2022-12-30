import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Paynore from '../../image/Payoneer.png';
import Perfact from '../../image/perfectmoney.webp';
import Skrill from '../../image/skrill.jpg';

import {
    FooterContainer,
    Img,
    ImgContainer,
    Payment,
    SocialIconLink,
    SocialIcons,
    SocialMedia,
    SocialMediaWrap,
    Title,
    // eslint-disable-next-line prettier/prettier
    WebsiteRights
} from './FooterStyle';

const Footer = function Footer() {
    const [date, setDate] = useState();
    const getYear = () => setDate(new Date().getFullYear());

    useEffect(() => {
        getYear();
    }, []);

    return (
        <FooterContainer>
            <Payment>
                <Title>We accept payment personally.</Title>
                <ImgContainer>
                    <Img src={Perfact} alt="perfact money" />
                    <Img src={Skrill} alt="skrill" />
                    <Img src={Paynore} alt="payoneer" />
                </ImgContainer>
            </Payment>

            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>© 2019 to {date} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink
                            href="https://www.facebook.com/graplover/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink
                            href="https://www.instagram.com/graploverbd/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            href="https://www.youtube.com/channel/UCkzFRtqJy0vOF2edO8mvldQ"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink
                            href="https://twitter.com/graplover"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;
