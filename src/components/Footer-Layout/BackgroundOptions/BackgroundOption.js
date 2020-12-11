import React, { useEffect, useState } from 'react';
import { BackgroundOptionSpecific } from '../BackgroundOptionSpecific/BackgroundOptionSpecific';
import { OptionContentItem } from '../OptionContentItem/OptionContentItem';
import './BackgroundOptions.scss';

const BACKGROUND_OPTION = "BACKGROUND_OPTION";
const BACKGROUND_SPECIFIC_OPTION = "BACKGROUND_SPECIFIC_OPTION";

export const BackgroundOptions = ({
    setTitle,
    setTitleMode,
    showOptions,
    setShowOptions,
    setBackgroundImage,
    nameFileBackgroundSpecific,
    setNameFileBackgroundSpecific,
    setAuthorImage,
}) => {
    const [dataContent, setDataContent] = useState([]);
    useEffect(() => {
        loadData("./data/link-image/manage-data-file.json");
    }, []);

    async function loadData(nameFile) {
        const dataFetch = fetch(nameFile);
        const dataPromise = await dataFetch;
        const data = await dataPromise.json();
        setDataContent(data.list_data_content);
    }
    return (
        <React.Fragment>
            {showOptions === BACKGROUND_OPTION && (
                <div className="background-options-container">
                    <div className="background-options-buffer">
                        <div className="container-fluid">
                            <div className="row">
                                {dataContent.map((item) => {
                                    const url = item.url_image_example
                                        .replace("WIDTH", "176")
                                        .replace("HEIGHT", "176");
                                    return (
                                        <div className="col-4" key={url}>
                                            <OptionContentItem
                                                nameContent={item.name_content}
                                                nameFile={item.name_file}
                                                urlImageExample={url}
                                                setTitle={setTitle}
                                                setNameFileBackgroundSpecific={
                                                    setNameFileBackgroundSpecific
                                                }
                                                setTitleMode={setTitleMode}
                                                setShowOptions={setShowOptions}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showOptions === BACKGROUND_SPECIFIC_OPTION && (
                <BackgroundOptionSpecific
                    nameFileListBackgroundOption={nameFileBackgroundSpecific}
                    setBackgroundImage={setBackgroundImage}
                    setAuthorImage={setAuthorImage}
                />
            )}
        </React.Fragment>
    )
}