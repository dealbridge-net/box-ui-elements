import React from 'react';
import securityIcon from '../../../icons/general/security.png';

const Discalimer = () => {
    return (
        <div>
            <img src={securityIcon} alt="" />
            <b>We value your privacy and security.</b> Every investor who request access to confidential documents in
            your data room has an active non-disclosure agreement
        </div>
    );
};

export default Discalimer;
