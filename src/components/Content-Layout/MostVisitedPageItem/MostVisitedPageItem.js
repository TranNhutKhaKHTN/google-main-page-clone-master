import React from "react";
import "./MostVisitedPageItem.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

export const MostVisitedPageItem = ({
    name,
    link,
    showEditShortcut,
    setShowEditShortcut,
    setCurrentEditShortcut,
    setEditShortcutMode,
}) => {
    const hanleEditClick = () => {
        setEditShortcutMode("Edit shortcut");
        setCurrentEditShortcut({ name: name, url: link });
        setShowEditShortcut(true);
    };

    return (
        <div className="most-visited-page-item" title={name}>
            <div className="most-visited-page-item-buffer">
                <div
                    className="edit-shortcut-icon-button"
                    onClick={() => hanleEditClick()}
                >
                    <BsThreeDotsVertical />
                </div>
                <a
                    className="most-visited-page-item-link"
                    href={"https://" + link + "/"}
                >
                    <div className="background-container-icon">
                        <div className="circle-background">
                            <img
                                className="icon-page img-fluid"
                                src={`https://${link}/favicon.ico?${new Date().getTime()}`}
                                alt="icon page"
                                onError={(event) => {
                                    event.target.src =
                                        "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www." +
                                        link;
                                }}
                            ></img>
                        </div>
                    </div>
                    <div className="most-visited-page-item-name">{name}</div>
                </a>
            </div>
        </div>
    );
};
