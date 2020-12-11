import React from 'react'

import "../../../css/AccountItem.scss";

export const AccountItem = ({ avatar, name, email }) => {
    return (
        <a
            className="account-item-container"
            href="https://www.google.com/webhp?authuser=1"
        >
            <div className="account-item-avatar-container">
                <img
                    src={avatar}
                    alt="avatar"
                    className="img-fluid"
                />
            </div>
            <div className="account-item-info-container">
                <div className="account-item-info-name">{name}</div>
                <div className="account-item-info-email">{email}</div>
            </div>
        </a>
    )
}