import React, { useEffect, useState } from "react";
import { firebase } from "../../../firebase/index";

import "../../../css/UploadPhoto.scss";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { ImageCrop } from "../ImageCrop/ImageCrop";

const START = "START";
const UPLOADING = "UPLOADING";
const DISPLAY = "DISPLAY";

export const UploadPhoto = ({
    setProfilePhoto,
    setActiveSetProfilePhoto,
    setShowSelectProfileInfo,
}
) => {
    const [status, setStatus] = useState(START);
    const [showHightLight, setShowHightLight] = useState(false);
    const [progressValue, setProgressValue] = useState(0);
    const [source, setSource] = useState("");
    const [width, setWidth] = useState("100%");
    // crop image bool
    const [crop, setCrop] = useState(false);

    // crop image - setAvatar
    useEffect(() => {
        if (setProfilePhoto) {
            // crop image and set avatar.
            setCrop(true);
            // after that disappear select profile Infor
        }
    }, [setProfilePhoto]);

    const preventDefault = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    function findHHandWW() {
        const imgHeight = this.height;
        const imgWidth = this.width;

        const dropAreaHeight = document.getElementsByClassName("drop-area")[0]
            .offsetHeight;
        const newWidth = (((imgWidth * dropAreaHeight) / imgHeight) * 80) / 100;
        setWidth(newWidth);
        return true;
    }

    function showImage(imgPath) {
        var myImage = new Image();
        myImage.name = imgPath;
        myImage.onload = findHHandWW;
        myImage.src = imgPath;
    }

    const previewFile = (file) => {
        setStatus(DISPLAY);
        setActiveSetProfilePhoto(true);
    };

    const handleUpload = (file) => {
        setStatus(UPLOADING);
        // Create a storage ref
        var storeRef = firebase.storage().ref("images/" + file.name);

        // Upload file
        var task = storeRef.put(file);

        task.on(
            "state_changed",
            (snapshot) => {
                var percentage =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                if (percentage - progressValue > 5 || percentage === 100) {
                    setProgressValue(percentage);
                }
            },
            function error(err) {
                console.log(err);
            },
            function complete() {
                setTimeout(() => {
                    previewFile(file);
                }, 2000);
            }
        );
    };

    const handlesFiles = (files) => {
        const listFiles = [...files];

        const reader = new FileReader();
        reader.readAsDataURL(listFiles[0]);
        reader.onloadend = () => {
            showImage(reader.result);
            setSource(reader.result);
        };

        handleUpload(listFiles[0]);
    };

    const handleDrop = (event) => {
        const data = event.dataTransfer;
        const files = data.files;

        handlesFiles(files);
    };

    // prevent default behavious when you drop file
    useEffect(() => {
        ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
            document.getElementsByTagName("body")[0].addEventListener(
                eventName,
                (event) => {
                    event.preventDefault();
                },
                false
            );
        });
    }, []);

    return (
        <div className="upload-photos-component">
            <div
                className={showHightLight ? "drop-area highlight" : "drop-area"}
                onDragEnter={(event) => {
                    preventDefault(event);
                    setShowHightLight(true);
                }}
                onDragOver={(event) => {
                    preventDefault(event);
                    setShowHightLight(true);
                }}
                onDragLeave={(event) => {
                    preventDefault(event);
                    setShowHightLight(false);
                }}
                onDrop={(event) => {
                    preventDefault(event);
                    setShowHightLight(false);
                    handleDrop(event);
                }}
            >
                {status === START && (
                    <form className="my-form">
                        <input
                            type="file"
                            id="fileElement"
                            multiple={false}
                            accept="image/*"
                            onChange={(event) => { handlesFiles(event.target.files); }}
                        ></input>
                        <label
                            className="button"
                            htmlFor="fileElement"
                        >
                            <div className="image-icon"></div>
                            <div className="big-text text">Drag a profile photo here</div>
                            <div className="small-text text">— or —</div>
                            <div className="select-button">
                                Select a photo from your computer
                            </div>
                        </label>
                    </form>
                )}
                {status === UPLOADING && (
                    <ProgressBar
                        value={Math.floor(progressValue)}
                        className="progress-bar-call"
                    />
                )}
                {status === DISPLAY && (
                    <ImageCrop
                        source={source}
                        width={width}
                        crop={crop}
                        setShowSelectProfileInfo={setShowSelectProfileInfo}
                    />
                )}
            </div>
        </div>
    );
};