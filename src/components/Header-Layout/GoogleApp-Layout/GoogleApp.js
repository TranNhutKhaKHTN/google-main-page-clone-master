import React from "react";

export const GoogleApp = ({ url, name, height, link }) => {
    return (
        <div className="col-4 google-app-item">
            <a
                className="image-icon img-fluid"
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundPositionX: -3,
                    backgroundPositionY: -height,
                    backgroundSizeX: 64,
                    backgroundSizeY: 2962,
                }}
                href={link}
            >hidden</a>
            <a className="space-hidden" href={link}>hidden</a>
            <a
                className="name-icon"
                href={link}
            >
                {name}</a>
        </div>
    );
};