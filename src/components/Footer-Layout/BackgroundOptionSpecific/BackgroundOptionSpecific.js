import React, { useState, useEffect } from "react";
import "./BackgroundOptionSpecific.scss";
import { BackgroundOptionSpecificOption } from "../BackgroundOptionSpecificOption/BackgroundOptionSpecificOption";

export const BackgroundOptionSpecific = ({
    nameFileListBackgroundOption,
    setBackgroundImage,
    setAuthorImage,
}) => {
    const [listBackground, setListBackground] = useState([]);
    const [urlImageSelected, setUrlImageSelected] = useState("");

    useEffect(() => {
        loadData(
            "./data/link-image/" + nameFileListBackgroundOption + ".json"
        );
    }, [nameFileListBackgroundOption]);

    useEffect(() => {
        if (urlImageSelected !== "")
            setBackgroundImage(
                //change size of image to replace default background
                urlImageSelected.replace("w156", "w3840").replace("h117", "h2160")
            );
    });

    async function loadData(nameFile) {
        const dataFetch = fetch(nameFile);
        const dataPromise = await dataFetch;
        const data = await dataPromise.json();
        setListBackground(data.link_list);
    }

    return (
        <div className="background-specific-options-container">
            <div className="background-specific-options-buffer">
                <div className="container-fluid">
                    <div className="row">
                        {listBackground.map((item) => {
                            return (
                                <div className="col-4" key={item.url}>
                                    <BackgroundOptionSpecificOption
                                        urlImage={item.url}
                                        author={item.author}
                                        setAuthorImage={setAuthorImage}
                                        urlImageSelected={urlImageSelected}
                                        setUrlImageSelected={setUrlImageSelected}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
