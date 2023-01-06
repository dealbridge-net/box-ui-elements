import React from 'react';
import IconSecurityClassification from '../../../icons/general/IconSecurityClassification';

import './Disclaimer.scss';

const Discalimer = () => {
    return (
        <div className="disclaimer">
            <IconSecurityClassification color="#013c4d" height={20} />
            <b>We value your privacy and security.</b> Every investor who request access to confidential documents in
            your data room has an active non-disclosure agreement
        </div>
    );
};

export default Discalimer;
