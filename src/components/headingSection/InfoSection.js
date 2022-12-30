/* eslint-disable prettier/prettier */
import React from 'react';
import { BsArrow90DegRight } from 'react-icons/bs';

import {
    BoldText,
    Button,
    Heading,
    ImageWraper,
    Img,
    InfoColumn,
    InfoRow,
    Infosec,
    SubTitle,
    TextWrapper,
    TopLine
} from './infoStyle';

const InfoSection = function InfoSection({ headline, topLine,  imgStart, img, alt }) {
    return (
        <Infosec>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading>{headline}</Heading>
                        <SubTitle>From a simple white background to the most complex clipping paths. <BoldText>Get pixel perfect image editing services,</BoldText>  whenever you need them.</SubTitle>
                        <Button to="/" >Get started  <BsArrow90DegRight /> </Button>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImageWraper>
                        <Img src={img} alt={alt} />
                    </ImageWraper>
                </InfoColumn>
            </InfoRow>
        </Infosec>
    );
};

export default InfoSection;
