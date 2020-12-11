import React, { useEffect, useState } from 'react';
import { HiPencil } from "react-icons/hi";
import { CustomizeLayout } from '../Footer-Layout/CustomizeLayout/CustomizeLayout';
import "./Footer.scss";

export const Footer = ({
    backgroundImage,
    setBackgroundImage,
    setDefaultBackground,
    setImageDefaultBackground,
}) => {
    const [showCustomizeLayout, setShowCustomizeLayout] = useState(false);
    const [authorImage, setAuthorImage] = useState("");
    const [defaultInfoImage, setDefaultInfoImage] = useState(false);
    useEffect(() => {
        if (defaultInfoImage) {
            setDefaultInfoImage(false);
            setAuthorImage(authorImage);
        }
    }, [defaultInfoImage, authorImage])
    return (
        <div
            className="footer-container"
        >
            <div
                className="customize-button"
                title="Customize this page"
                onClick={() => { setShowCustomizeLayout(!showCustomizeLayout) }}
            >
                <HiPencil
                    className="customize-icon"
                />
                <div className="customize-text">Customize</div>
            </div>
            {showCustomizeLayout && (
                <CustomizeLayout
                    backgroundImage={backgroundImage}
                    setBackgroundImage={setBackgroundImage}
                    setDefaultBackground={setDefaultBackground}
                    setShowCustomizeLayout={setShowCustomizeLayout}
                    setImageDefaultBackground={setImageDefaultBackground}
                    setAuthorImage={setAuthorImage}
                    defaultInfoImage={defaultInfoImage}
                    setDefaultInfoImage={setDefaultInfoImage}
                />
            )}
        </div>
    )
}