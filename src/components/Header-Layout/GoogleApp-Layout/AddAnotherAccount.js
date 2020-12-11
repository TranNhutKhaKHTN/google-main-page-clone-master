import React from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";

import "../../../css/AddAnotherAccount.scss";

export const AddAnotherAccount = () => {

    return (
        <div className="add-another-account-container">
            <a
                className="add-another-account"
                href="https://accounts.google.com/AddSession?hl=en&continue=https://www.google.com%3Fhl%3Den-US"
            >
                <AiOutlineUserAdd className="add-another-account-buffer" />
                <div className="add-another-account-text">Add another account</div>
            </a>
        </div>
    )
}