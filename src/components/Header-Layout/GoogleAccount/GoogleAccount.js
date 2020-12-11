import React, { useEffect, useState } from 'react';
import { AccountInfo } from '../GoogleApp-Layout/AccountInfo';
import { AccountItem } from '../GoogleApp-Layout/AccountItem';
import { AddAnotherAccount } from '../GoogleApp-Layout/AddAnotherAccount';
import { FooterGoogleAccount } from '../GoogleApp-Layout/FooterGoogleAccount';
import { SignoutAccount } from '../GoogleApp-Layout/SignoutAccount';

import "./GoogleAccount.scss";

export const GoogleAccount = ({ outsideClick, showSelectProfileInfo, setShowSelectProfileInfo }) => {
    const [heightContainer, setHeightContainer] = useState(467);

    useEffect(() => {
        if (window.innerHeight < 630) {
            setHeightContainer(window.innerHeight - 58 - 20);
        }
        function onResizeWindow() {
            if (window.innerHeight > 630) setHeightContainer(500);
            else setHeightContainer(window.innerHeight - 58 - 20);
        }
        window.onresize = onResizeWindow;
    }, []);
    return (
        <div
            className="container-google-account-container"
            ref={outsideClick}
            style={{ height: heightContainer }}
        >
            <AccountInfo
                showSelectProfileInfo={showSelectProfileInfo}
                setShowSelectProfileInfo={setShowSelectProfileInfo}
            />
            <AccountItem
                avatar="https://lh3.googleusercontent.com/ogw/ADGmqu_U8S72AKG_7fiCZDleieYV8x4oFC8Btt9zKssz=s83-c-mo"
                name="Phan Cảnh Lộc"
                email="pcloc101099@gmail.com"
            />
            <AddAnotherAccount />
            <SignoutAccount />
            <FooterGoogleAccount />
        </div>
    )
}