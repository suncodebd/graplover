import React from 'react';
import Contact from '../components/contact/ContactUs';

function contact() {
    return (
        <div>
            <Contact />
        </div>
    );
}

export default React.memo(contact);
