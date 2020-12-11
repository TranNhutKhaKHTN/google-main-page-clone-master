import React, { useEffect, useState } from 'react';
import data from "../../../data/icons/icons-google.json";
import { GoogleApp } from '../GoogleApp-Layout/GoogleApp';
import './GoogleAppsContainer.scss';

export const GoogleAppsContainer = ({ outsideClick }) => {
    const [heightContainer, setHeightContainer] = useState(460);

    useEffect(() => {
        if (window.innerHeight < 630) {
            setHeightContainer(window.innerHeight - 58 - 20);
        }
        function onResizeWindow() {
            if (window.innerHeight > 630) setHeightContainer(460);
            else setHeightContainer(window.innerHeight - 58 - 20);
        }
        window.onresize = onResizeWindow;
    }, []);
    return (
        <div
            className="container-google-apps-container"
            ref={outsideClick}
            style={{ height: heightContainer }}
        >
            <div className="google-apps-group group-1 row">
                <div className="col-4 google-app-item">
                    <a
                        className="image-icon img-fluid"
                        style={{
                            backgroundImage: `url(${data["account-icon"].url})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "50%"
                        }}
                        href={data["account-icon"].link}
                    >
                    </a>
                    <a className="space-hidden" href={`${data["account-icon"].link}`} >link-hidden</a>
                    <a
                        className="name-icon"
                        href={data["account-icon"].link}
                    >
                        {data["account-icon"].name}</a>
                </div>
                {data["latitude-google-icons-group-1"].map((dataItem) => {
                    return (
                        <GoogleApp
                            url={data["google-icon-link"]}
                            name={dataItem.name}
                            height={dataItem.height}
                            link={dataItem.link}
                            key={dataItem.name}
                        />
                    )
                })}
            </div>
            <div className="google-apps-group group-2 row">
                {data["latitude-google-icons-group-2"].map((dataItem) => {
                    return (
                        <GoogleApp
                            url={data["google-icon-link"]}
                            name={dataItem.name}
                            height={dataItem.height}
                            link={dataItem.link}
                            key={dataItem.name}
                        />
                    )
                })}
            </div>
            <div className="more-from-google">
                <div className="buffer-more">
                    <a href="https://about.google/intl/en/products/?tab=rh" >More from Google</a>
                </div>
            </div>
        </div>
    )
}