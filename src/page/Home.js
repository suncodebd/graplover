import React from 'react';

import { homeObjOne, homeObjTow } from '../components/data';
import InfoSection from '../components/headingSection/InfoSection';
import Infosectiontow from '../components/homesectiontow/InfoSection';
import Love from '../components/love/Love';
import Services from '../components/services/Services';
import TestiMonial from '../components/testimonial/TestiMonial';
import UnderServices from '../components/underServices/UnderServices';

function Home() {
    return (
        <div>
            <InfoSection {...homeObjOne} />
            <Infosectiontow {...homeObjTow} />
            <Services />
            <UnderServices />
            <TestiMonial />
            <Love />
        </div>
    );
}

export default React.memo(Home);
