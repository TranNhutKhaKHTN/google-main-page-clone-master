import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { MostVisitedPageItem } from "../Content-Layout/MostVisitedPageItem/MostVisitedPageItem";
import { AddItemMostVisitedPage } from "../Content-Layout/AddItemMostVisitedPage/AddItemMostVisitedPage";

import './Content.scss';
import { EditShortcut } from '../Content-Layout/EditShortcut/EditShortcut';

export const Content = () => {
    const listMostVisitedPage = [
        { id: '1', name: 'Google', url: 'google.com' },
        { id: '2', name: 'ReactJS', url: 'reactjs.org' },
        { id: '3', name: 'W3Schools', url: 'w3schools.com' },
        { id: '4', name: 'Stack Overflow', url: 'stackoverflow.com' },
        { id: '5', name: 'Github', url: 'github.com' },
        { id: '6', name: 'Firebase', url: 'firebase.google.com' },
        { id: '7', name: 'Material UI', url: 'material-ui.com' },
        { id: '8', name: 'Udemy', url: 'udemy.com' },
        { id: '9', name: 'NodeJs', url: 'nodejs.org' },
    ];

    const [addItemOption, setAddItemOption] = useState(true);
    const [editShortcutMode, setEditShortcutMode] = useState("Shortcut");
    const [showEditShortcut, setShowEditShortcut] = useState(false);
    const [currentEditShortcut, setCurrentEditShortcut] = useState({
        id: "",
        name: "",
        url: "",
    });
    const [stateListMostVisitedPage, setStateListMostVisitedPage] = useState(listMostVisitedPage);

    useEffect(() => {
        setAddItemOption(stateListMostVisitedPage.length < 10);
    }, [stateListMostVisitedPage]);

    return (
        <div className="container-content">
            <div className="content-item logo">
                <div className="google-logo-container"></div>
            </div>
            <div className="content-item search-box">
                <div className="input-buffer">
                    <div className="search-icon">
                        <AiOutlineSearch />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Search Google or type a URL" />
                    </div>
                    <div className="record-box" data-title="Search by voice"></div>
                </div>
            </div>
            <div className="content-item user-mosted-box">
                <div className="most-visited-page-container">
                    {stateListMostVisitedPage.map(({ id, name, url }) => {
                        return (
                            <MostVisitedPageItem
                                key={id}
                                name={name}
                                link={url}
                                showEditShortcut={showEditShortcut}
                                setShowEditShortcut={setShowEditShortcut}
                                setCurrentEditShortcut={setCurrentEditShortcut}
                                setEditShortcutMode={setEditShortcutMode}
                            />
                        )
                    })}
                    {addItemOption && (
                        <AddItemMostVisitedPage
                            name="Add Item"
                            link={""}
                            showEditShortcut={showEditShortcut}
                            setShowEditShortcut={setShowEditShortcut}
                            setCurrentEditShortcut={setCurrentEditShortcut}
                            setEditShortcutMode={setEditShortcutMode}
                        />
                    )}
                </div>
            </div>
            {showEditShortcut && (
                <EditShortcut
                    nameEdit={editShortcutMode}
                    currentEditShortcut={currentEditShortcut}
                    setCurrentEditShortcut={setCurrentEditShortcut}
                    showEditShortcut={showEditShortcut}
                    setShowEditShortcut={setShowEditShortcut}
                    stateListMostVisitedPage={stateListMostVisitedPage}
                    setStateListMostVisitedPage={setStateListMostVisitedPage}
                />
            )}
        </div>
    )
}
