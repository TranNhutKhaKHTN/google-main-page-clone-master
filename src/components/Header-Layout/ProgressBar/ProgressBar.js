import React from "react";
import "./ProgressBar.scss";

export const ProgressBar = ({ value }) => {
    return (
        <div className="progress-bar-container">
            <div id="page-wrap">
                <div>Uploading</div>
                <div class="meter">
                    <span style={{ width: `${value}%` }}></span>
                </div>
            </div>
        </div>
    );
};