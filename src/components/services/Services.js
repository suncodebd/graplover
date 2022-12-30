import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ClipingPathOne from '../../image/clipingpathone.png';
import ClipingPathTow from '../../image/clipingpathtow.png';
import ColorChange from '../../image/colorChange.png';
import MaskingOne from '../../image/maskingone.png';
import MaskingTow from '../../image/maskingtow.png';
import MultiClipOne from '../../image/multiclipingpathone.png';
import MultiClipTow from '../../image/multiclipingpathtow.png';
import NeckJointOne from '../../image/neckjointCompleted.png';
import NeckJointTow from '../../image/neckjointincomplete.png';
import ImageOne from '../../image/one.png';
import RetuchOne from '../../image/RetuchOne.png';
import RetuchTow from '../../image/retuchTow.png';
import ShadawOne from '../../image/shadows.png';
import ShadawTow from '../../image/shadowtow.png';
import ImageTow from '../../image/tow.png';
import VectorOne from '../../image/vectorConversationOne.png';
import VectorTow from '../../image/vectorConversationTow.png';

import {
    Heading,
    ImageContainer,
    ServiceArea,
    ServiceContent,
    ServiceContentTitle,
    ServiceRow,
    // eslint-disable-next-line prettier/prettier
    Title
} from './ServicesStyle';

function Services() {
    return (
        <div>
            <ServiceArea>
                <Heading>
                    <Title>Services</Title>
                </Heading>

                <ServiceRow>
                    <ServiceContent>
                        <ServiceContentTitle>Cliping path</ServiceContentTitle>
                        <ImageContainer>
                            <ReactCompareSlider
                                itemOne={
                                    <ReactCompareSliderImage
                                        src={ClipingPathOne}
                                        srcSet={ClipingPathTow}
                                        alt="Image one"
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage
                                        src={ClipingPathTow}
                                        srcSet={ClipingPathOne}
                                        alt="Image two"
                                    />
                                }
                            />
                        </ImageContainer>
                    </ServiceContent>
                    <ServiceContent>
                        <ServiceContentTitle>Background Removal</ServiceContentTitle>
                        <ImageContainer>
                            <ReactCompareSlider
                                itemOne={
                                    <ReactCompareSliderImage
                                        src={ImageOne}
                                        srcSet={ImageTow}
                                        alt="Image one"
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage
                                        src={ImageTow}
                                        srcSet={ImageOne}
                                        alt="Image two"
                                    />
                                }
                            />
                        </ImageContainer>
                    </ServiceContent>
                    <ServiceContent>
                        <ServiceContentTitle>Image Masking</ServiceContentTitle>
                        <ImageContainer>
                            <ReactCompareSlider
                                itemOne={
                                    <ReactCompareSliderImage
                                        src={MaskingOne}
                                        srcSet={MaskingTow}
                                        alt="Image one"
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage
                                        src={MaskingTow}
                                        srcSet={MaskingOne}
                                        alt="Image two"
                                    />
                                }
                            />
                        </ImageContainer>
                    </ServiceContent>
                    <ServiceContent>
                        <ServiceContentTitle>Photo Retouching</ServiceContentTitle>
                        <ImageContainer>
                            <ReactCompareSlider
                                itemOne={
                                    <ReactCompareSliderImage
                                        src={RetuchOne}
                                        srcSet={RetuchOne}
                                        alt="Image one"
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage
                                        src={RetuchTow}
                                        srcSet={RetuchTow}
                                        alt="Image two"
                                    />
                                }
                            />
                        </ImageContainer>
                    </ServiceContent>
                    <ServiceContent>
                        <ServiceContentTitle>Shadows</ServiceContentTitle>
                        <ImageContainer>
                            <ReactCompareSlider
                                itemOne={
                                    <ReactCompareSliderImage
                                        src={ShadawOne}
                                        srcSet={ShadawOne}
                                        alt="Image one"
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage
                                        src={ShadawTow}
                                        srcSet={ShadawTow}
                                        alt="Image two"
                                    />
                                }
                            />
                        </ImageContainer>
                    </ServiceContent>
                    <ServiceContent>
                        <ServiceContentTitle>Vector Conversion</ServiceContentTitle>
                        <ImageContainer>
                            <ReactCompareSlider
                                itemOne={
                                    <ReactCompareSliderImage
                                        src={VectorOne}
                                        srcSet={VectorOne}
                                        alt="Image one"
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage
                                        src={VectorTow}
                                        srcSet={VectorTow}
                                        alt="Image two"
                                    />
                                }
                            />
                        </ImageContainer>
                    </ServiceContent>
                    <ServiceContent>
                        <ServiceContentTitle>Multi-clipping Path</ServiceContentTitle>
                        <ImageContainer>
                            <ReactCompareSlider
                                itemOne={
                                    <ReactCompareSliderImage
                                        src={MultiClipOne}
                                        srcSet={MultiClipOne}
                                        alt="Image one"
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage
                                        src={MultiClipTow}
                                        srcSet={MultiClipTow}
                                        alt="Image two"
                                    />
                                }
                            />
                        </ImageContainer>
                    </ServiceContent>
                    <ServiceContent>
                        <ServiceContentTitle>Ghost Mannequin</ServiceContentTitle>
                        <ImageContainer>
                            <ReactCompareSlider
                                itemOne={
                                    <ReactCompareSliderImage
                                        src={NeckJointOne}
                                        srcSet={NeckJointOne}
                                        alt="NeckJointOne"
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage
                                        src={NeckJointTow}
                                        srcSet={NeckJointTow}
                                        alt="NeckJointTow"
                                    />
                                }
                            />
                        </ImageContainer>
                    </ServiceContent>
                    <ServiceContent>
                        <ServiceContentTitle>Color Change</ServiceContentTitle>
                        <ImageContainer>
                            <ReactCompareSlider
                                itemOne={
                                    <ReactCompareSliderImage
                                        src={ColorChange}
                                        srcSet={ColorChange}
                                        alt="Image one"
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage
                                        src={ClipingPathOne}
                                        srcSet={ClipingPathOne}
                                        alt="Image two"
                                    />
                                }
                            />
                        </ImageContainer>
                    </ServiceContent>
                </ServiceRow>
            </ServiceArea>
        </div>
    );
}

export default Services;
