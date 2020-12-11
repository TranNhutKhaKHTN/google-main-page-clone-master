import React from "react";
import "./AddItemMostVisitedPage.scss";
import { HiPlus } from "react-icons/hi";

export const AddItemMostVisitedPage = ({
    name,
    link,
    showEditShortcut,
    setShowEditShortcut,
    setCurrentEditShortcut,
    setEditShortcutMode,
}) => {
    return (
        <div className="most-visited-page-item" title={name}>
            <div
                className="most-visited-page-item-buffer"
                onClick={() => {
                    setCurrentEditShortcut({ name: "", url: "" });
                    setEditShortcutMode("Add shortcut");
                    setShowEditShortcut(true);
                }}
            >
                <div
                    className="most-visited-page-item-link"
                    href={"https://" + link + "/"}
                >
                    <div className="background-container-icon">
                        <div className="circle-background">
                            <HiPlus style={{ fontSize: 20 }} />
                        </div>
                    </div>
                    <div className="most-visited-page-item-name">{name}</div>
                </div>
            </div>
        </div>
    );
};
