import React, { useState, useEffect, useRef } from "react";
import "./EditShortcut.scss";

export const EditShortcut = ({
    nameEdit,
    showEditShortcut,
    setShowEditShortcut,
    currentEditShortcut,
    setcurrentEditShortcut,
    stateListMostVisitedPage,
    setStateListMostVisitedPage,
}) => {
    const nameRef = useRef(null);
    const urlRef = useRef(null);
    const [currentEditShortcutShadow, setcurrentEditShortcutShadow] = useState(
        currentEditShortcut
    );
    const [doneActive, setDoneActive] = useState(true);

    useEffect(() => {
        if (
            currentEditShortcutShadow.name === "" ||
            currentEditShortcutShadow.url === ""
        ) {
            setDoneActive(false);
        } else {
            setDoneActive(true);
        }
    }, [currentEditShortcutShadow]);

    const handleRemoveClick = () => {
        setShowEditShortcut(false);
        const newListMostVisitedPage = stateListMostVisitedPage.filter((item) => {
            if (
                item.name !== currentEditShortcutShadow.name ||
                item.url !== currentEditShortcutShadow.url
            )
                return item;
            else return null;
        });
        setStateListMostVisitedPage(newListMostVisitedPage);
    };

    const handleCancelClick = () => {
        setShowEditShortcut(false);
    };

    const handleDoneClick = () => {
        setShowEditShortcut(false);
        const newListMostVisitedPage = stateListMostVisitedPage.map((item) => {
            if (
                item.name === currentEditShortcut.name &&
                item.url === currentEditShortcut.url
            ) {
                return currentEditShortcutShadow;
            } else return item;
        });
        if (nameEdit === "Add shortcut") {
            let check = true;
            newListMostVisitedPage.forEach((item) => {
                if (item.url === currentEditShortcutShadow.url) {
                    check = false;
                }
            });
            if (check === true)
                newListMostVisitedPage.push(currentEditShortcutShadow);
        }
        setStateListMostVisitedPage(newListMostVisitedPage);
    };
    const randomId = Math.floor(Math.random() * 100) + 10;

    return (
        <div className="edit-shortcut-container">
            <div className="edit-shortcut-form-container">
                <div className="text-title-edit-shortcut">{nameEdit}</div>
                <div className="edit-area">
                    <label htmlFor="name-input-edit" className="label-edit-shorcut">
                        Name
          </label>
                    <input
                        ref={nameRef}
                        id="name-input-edit"
                        className="input-edit"
                        value={currentEditShortcutShadow.name}
                        onChange={(event) => {
                            setcurrentEditShortcutShadow({
                                name: event.target.value,
                                url: currentEditShortcutShadow.url,
                            });
                        }}
                    />
                    <label htmlFor="url-input-edit" className="label-edit-shorcut">
                        URL
          </label>
                    <input
                        ref={urlRef}
                        id="url-input-edit"
                        className="input-edit"
                        value={currentEditShortcutShadow.url}
                        onChange={(event) => {
                            setcurrentEditShortcutShadow({
                                id: randomId,
                                name: currentEditShortcutShadow.name,
                                url: event.target.value,
                            });
                        }}
                    />
                </div>
                <div className="button-area">
                    <div className="remove-container">
                        <button
                            disabled={nameEdit === "Add shortcut" ? true : false}
                            className={
                                nameEdit === "Edit shortcut"
                                    ? "button-edit-shortcut remove-button"
                                    : "button-edit-shortcut remove-button disabled-remove"
                            }
                            onClick={() => handleRemoveClick()}
                            title="Remove"
                        >
                            Remove
            </button>
                    </div>
                    <div className="edit-container">
                        <button
                            className="button-edit-shortcut cancel-button"
                            onClick={() => handleCancelClick()}
                            title="Cancel"
                        >
                            Cancel
            </button>
                        <button
                            disabled={doneActive ? false : true}
                            className={
                                doneActive
                                    ? "button-edit-shortcut done-button"
                                    : "button-edit-shortcut done-button disabled-done"
                            }
                            onClick={() => handleDoneClick()}
                            title="Done"
                        >
                            Done
            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};