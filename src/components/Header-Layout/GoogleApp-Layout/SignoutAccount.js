import React from 'react'

import "../../../css/SignoutAccount.scss";

export const SignoutAccount = () => {
    return (
        <div className="signout-account-container">
            <a
                className="signout-account"
                href="https://accounts.google.com/signin/v2/identifier?hl=vi&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAAQ&flowName=GlifWebSignIn&flowEntry=AddSession"
            >
                Sign out of all accounts
            </a>
        </div>
    )
}