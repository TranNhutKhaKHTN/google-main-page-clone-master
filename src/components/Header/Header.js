import React, { useState, useRef } from 'react';
import { GoogleAccount } from '../Header-Layout/GoogleAccount/GoogleAccount';
import { GoogleAppsContainer } from "../Header-Layout/GoogleAppsContainer/GoogleAppsContainer";
import { SelectProfileInfo } from "../Header-Layout/SelectProfileInfo/SelectProfileInfo";
import useOutsideClick from "../Helpers/Helpers";
import './Header.scss';

export const Header = () => {
    const [showGoogleApps, setShowGoogleApps] = useState(false);
    const [showGoogleAccount, setShowGoogleAccount] = useState(false);
    const [showSelectProfileInfo, setShowSelectProfileInfo] = useState(false);
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (showGoogleApps) setShowGoogleApps(false);
        if (showGoogleAccount) setShowGoogleAccount(false);
    });
    return (
        <div className="container-header">
            <div className="header-item">
                <a href="https://mail.google.com/">Gmail</a>
            </div>
            <div className="header-item">
                <a href="https://image.google.com/">Images</a>
            </div>
            <div className="header-item container-google-apps-expand-icon">
                <div className="google-apps-round"
                    data-title="Google apps"
                    onClick={() => setShowGoogleApps(!showGoogleApps)}
                >
                    <div className="image-container"></div>
                </div>
            </div>
            <div className="header-item container-google-account-expand-icon" >
                <div
                    className="google-account-round"
                    data-title="pcloc101099@gmail.com"
                    onClick={() => setShowGoogleAccount(!showGoogleAccount)}
                >
                    <div className="image-container"></div>
                </div>
            </div>
            {showGoogleApps && <GoogleAppsContainer outsideClick={ref} />}
            {showGoogleAccount &&
                <GoogleAccount
                    outsideClick={ref}
                    showSelectProfileInfo={showSelectProfileInfo}
                    setShowSelectProfileInfo={setShowSelectProfileInfo}
                />
            }
            {showSelectProfileInfo && (
                <SelectProfileInfo
                    showSelectProfileInfo={showSelectProfileInfo}
                    setShowSelectProfileInfo={setShowSelectProfileInfo}
                />
            )}
        </div>
    );
}
