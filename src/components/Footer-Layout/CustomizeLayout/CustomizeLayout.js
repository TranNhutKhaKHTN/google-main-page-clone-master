import React, { useState } from 'react';
import { BackgroundOptions } from '../BackgroundOptions/BackgroundOption';
import { ShortcutsOptions } from '../ShortcutsOptions/ShortcutsOptions';
import { ColorAndThemeOptions } from '../ColorAndThemeOptions/ColorAndThemeOptions';
import { OptionItem } from '../OptionItem/OptionItem';
import { MdKeyboardBackspace } from "react-icons/md";

import "./CustomizeLayout.scss";

const BACKGROUND = "Background";
const SHORTCUTS = "Shortcuts";
const COLOR_AND_THEME = "Color and theme";

const CUSTOMISE_MODE = "CUSTOMISE";
const SPECIFIC_MODE = "SPECIFIC";

const BACKGROUND_OPTION = "BACKGROUND_OPTION";
// const BACKGROUND_SPECIFIC_OPTION = "BACKGROUND_SPECIFIC_OPTION";

export const CustomizeLayout = ({
    backgroundImage,
    setBackgroundImage,
    setDefaultBackground,
    setShowCustomizeLayout,
    setImageDefaultBackground,
    setLinkIcon,
    setAuthorImage,
    setDefaultInfoImage
}) => {
    const [contentMode, setContentMode] = useState(BACKGROUND);
    const [titleBackgroundMode, setTitleBackgroundMode] = useState(CUSTOMISE_MODE);
    const [title, setTitle] = useState("");
    const [nameFileBackgroundSpecific, setNameFileBackgroundSpecific] = useState("");
    const [showOptions, setShowOptions] = useState(BACKGROUND_OPTION);
    return (
        <div className="customize-layout-overlay">
            <div className="customize-layout-container">
                <div className="content-customize-layout">
                    <div className="option-bar-container">
                        <div className="title-option-bar-container"></div>
                        <div className="content-option-bar-container">
                            <OptionItem
                                nameOption={BACKGROUND}
                                active={contentMode === BACKGROUND}
                                onClick={() => { setContentMode(BACKGROUND) }}
                            />
                            <OptionItem
                                nameOption={SHORTCUTS}
                                active={contentMode === SHORTCUTS}
                                onClick={() => { setContentMode(SHORTCUTS) }}
                            />
                            <OptionItem
                                nameOption={COLOR_AND_THEME}
                                active={contentMode === COLOR_AND_THEME}
                                onClick={() => { setContentMode(COLOR_AND_THEME) }}
                            />
                        </div>
                    </div>
                    <div className="display-content-container">
                        {(titleBackgroundMode === CUSTOMISE_MODE ||
                            contentMode === COLOR_AND_THEME ||
                            contentMode === SHORTCUTS) && (
                                <div className="title-content-container">Customize this page</div>
                            )}
                        {titleBackgroundMode === SPECIFIC_MODE &&
                            contentMode === BACKGROUND && (
                                <div className="title-content-container">
                                    <div className="back-to-customize"
                                        onClick={() => {
                                            setTitle("");
                                            setTitleBackgroundMode(CUSTOMISE_MODE);
                                            setShowOptions(BACKGROUND_OPTION);
                                        }}
                                    >
                                        <MdKeyboardBackspace
                                            style={{ paddingRight: "10px", fontSize: "28", cursor: "pointer" }}
                                        />
                                    </div>
                                    {title}
                                </div>
                            )}
                        <div className="option-content-container">
                            {contentMode === BACKGROUND && (
                                <BackgroundOptions
                                    setTitle={setTitle}
                                    setTitleMode={setTitleBackgroundMode}
                                    showOptions={showOptions}
                                    setShowOptions={setShowOptions}
                                    setBackgroundImage={setBackgroundImage}
                                    nameFileBackgroundSpecific={nameFileBackgroundSpecific}
                                    setNameFileBackgroundSpecific={setNameFileBackgroundSpecific}
                                    setAuthorImage={setAuthorImage}
                                // setShowBackgroundImageAttributes={setShowBackgroundImageAttributes}
                                />
                            )}
                            {contentMode === SHORTCUTS && (
                                <ShortcutsOptions />
                            )}
                            {contentMode === COLOR_AND_THEME && (
                                <ColorAndThemeOptions />
                            )}
                        </div>
                    </div>
                </div>
                <div className="footer-customize-layout">
                    <div
                        className="button cancel"
                        onClick={() => {
                            setShowCustomizeLayout(false);
                            setDefaultBackground(true);
                            setDefaultInfoImage(true);
                        }}
                    >Cancel</div>
                    <div className="button done"
                        onClick={() => {
                            setShowCustomizeLayout(false);
                            setDefaultBackground(false);
                            setImageDefaultBackground(backgroundImage);
                            setDefaultInfoImage(false);
                        }}
                    >
                        Done
                    </div>
                </div>
            </div>
        </div>
    );
}