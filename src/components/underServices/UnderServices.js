import React from 'react';
import Doner from '../../image/donor.svg';
import Ecommerce from '../../image/ecommerce.svg';
import Editor from '../../image/editor.svg';
import Recher from '../../image/researcher.svg';
import Support from '../../image/support.svg';
import Time from '../../image/timer.svg';
import {
    Description,
    Img,
    ServiceArea,
    ServiceContainer,
    ServicesContent,
    // eslint-disable-next-line prettier/prettier
    Title
} from './UnderServicsStyle';

function UnderServices() {
    return (
        <ServiceArea>
            <ServiceContainer>
                <ServicesContent>
                    <Img src={Editor} alt="Editor" />
                    <Title>Edited by hand</Title>
                    <Description>
                        Get your images back in as little as six hours, even if you have thousands
                        of shots to get through
                    </Description>
                </ServicesContent>
                <ServicesContent>
                    <Img src={Recher} alt="Recher" />
                    <Title>Pixel perfect results</Title>
                    <Description>
                        Our designers can handle even the most complex cutouts — no straight
                        polygonal lasso lines where they shouldn’t be
                    </Description>
                </ServicesContent>
                <ServicesContent>
                    <Img src={Support} alt="Suppoet" />
                    <Title>24/7 support</Title>
                    <Description>
                        Your dedicated customer support team is ready to help, whenever you need us
                    </Description>
                </ServicesContent>
                <ServicesContent>
                    <Img src={Time} alt="Time" />
                    <Title>Quick turnaround</Title>
                    <Description>
                        Get your images back in as little as six hours, even if you have thousands
                        of shots to get through
                    </Description>
                </ServicesContent>
                <ServicesContent>
                    <Img src={Doner} alt="Doner" />
                    <Title>Under budget</Title>
                    <Description>
                        Edits start at just <b>25¢</b> per image, way less than it would cost to do
                        it in-house —
                    </Description>
                </ServicesContent>
                <ServicesContent>
                    <Img src={Ecommerce} alt="Ecommerce" />
                    <Title>Ecommerce optimized</Title>
                    <Description>
                        Get consistent, quality images that sell, in every format you need
                    </Description>
                </ServicesContent>
            </ServiceContainer>
        </ServiceArea>
    );
}

export default UnderServices;
