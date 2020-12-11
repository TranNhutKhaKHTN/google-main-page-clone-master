import React, { useEffect, useRef } from "react";
import "./ImageCrop.scss";
import "cropperjs/dist/cropper.min.css";
import Cropper from "react-cropper";

export const ImageCrop = ({
    source,
    width,
    crop,
    setShowSelectProfileInfo,
}) => {
    const inputEl = useRef(null);

    useEffect(() => {
        if (crop) {
            console.log("Set Avatar");
            setShowSelectProfileInfo(false);
        }
    });

    return (
        <div className="image-crop-container">
            {/* <button onClick={(event) => handleClickCrop(event)}>crop</button> */}
            <div className="image-crop-gallery">
                {/* <img ref={image} src={src} style={{ width: "100px", height: "auto" }} /> */}
                <div className="gallery" style={{ width: width }}>
                    <Cropper
                        style={{ height: "100%", width: "auto" }}
                        aspectRatio={1 / 1}
                        dragMode={"none"}
                        viewMode={3}
                        responsive={false}
                        zoomable={false}
                        highlight={true}
                        src={source}
                        ready={() => { }}
                        crop={() => { }}
                        ref={inputEl}
                    />
                </div>
            </div>
        </div>
    );
};