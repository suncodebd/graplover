/* eslint-disable prettier/prettier */
import React from 'react';

import {
    Description,
    Heading,
    ImageWraper,
    Img,
    InfoColumn,
    InfoRow,
    Infosec, PriceText, PriceTextUsd, SubTitle,
    TextWrapper
} from './infoStyle';

const InfoSection = function InfoSection({ headline, subheading ,imgStart, img, alt,description }) {
    return (
        <Infosec>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        
                        <Heading>{headline}</Heading>
                        <SubTitle>{subheading}</SubTitle>
                        <Description>{description}</Description>

                        <PriceText> Starting at <PriceTextUsd >25¢</PriceTextUsd>  per image </PriceText>
                        
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
