import React from 'react';
import Heart from '../../image/heart.svg';
import { LoveContainer, LoveImg, LoveText } from './LoveStyle';

function Love() {
    return (
        <LoveContainer>
            <LoveImg src={Heart} alt="Heart" />
            <LoveText>Find the time to fall in love with your work again.</LoveText>
        </LoveContainer>
    );
}

export default Love;
