import React from 'react'
import { FaRegImage } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import { MdPalette } from "react-icons/md";

import './OptionItem.scss';

export const OptionItem = ({ nameOption, onClick, active }) => {
    return (
        <div className="option-item-container">
            <div
                className={active ? "option-item-buffer active" : "option-item-buffer"}
                onClick={() => onClick()}
            >
                <div className="option-icon">
                    {nameOption === "Background" && <FaRegImage />}
                    {nameOption === "Shortcuts" && <BsLink />}
                    {nameOption === "Color and theme" && <MdPalette />}
                </div>
                <div className="option-name">{nameOption}</div>
            </div>
        </div>
    )
}