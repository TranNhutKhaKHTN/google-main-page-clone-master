import React from 'react'
import { BsDot } from "react-icons/bs";

import "../../../css/FooterGoogleAccount.scss"

export const FooterGoogleAccount = () => {
    return (
        <div className="footer-google-account-container">
            <a className="privacy-policy" href="https://policies.google.com/privacy?hl=en-GB">Privacy Policy</a>
            <div className="dot">
                <BsDot />
            </div>
            <a className="terms-of-service" href="https://policies.google.com/terms?hl=en-GB">Terms of Service</a>
        </div>
    )
}