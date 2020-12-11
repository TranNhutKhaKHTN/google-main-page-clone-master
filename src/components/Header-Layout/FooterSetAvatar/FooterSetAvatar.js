import React from "react"

import "./FooterSetAvatar.scss";

export const FooterSetAvatar = ({
    setShowSelectProfileInfo,
    setSetProfilePhoto,
    activeSetProfilePhoto
}) => {
    return (
        <div className="footer-set-avatar">
            <div
                className={
                    activeSetProfilePhoto
                        ? "set-profile-photo-button button set-button active"
                        : "set-profile-photo-button button set-button"
                }
                onClick={() => {
                    setSetProfilePhoto(true);
                }}
            >
                Set as profile photo
            </div>
            <div
                className="cancel-button button"
                onClick={() => {
                    setShowSelectProfileInfo(false);
                }}
            >
                Cancel
            </div>
        </div>
    )
}