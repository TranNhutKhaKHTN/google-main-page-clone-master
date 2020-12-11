import React, { useState, useRef } from "react";
import "./ShortcutsOptions.scss";

const MY_SHORTCUTS = "MY SHORTCUTS";
const MOST_VISITED_SITES = "MOST VISITED SITES";
const NONE = "NONE";

export const ShortcutsOptions = () => {
    const [mode, setMode] = useState(MY_SHORTCUTS);
    const [saveMode, setSaveMode] = useState();
    const [activeClass, setActiveClass] = useState("");
    const inputRef = useRef(null);

    return (
        <div className="shortcuts-options-container">
            <div className="shortcuts-options-buffer">
                <div className="show-mode-container">
                    <div className="show-mode-item my-shortcuts">
                        <div className="show-mode-icon-container">
                            <div
                                className={
                                    mode === MY_SHORTCUTS
                                        ? "show-mode-icon-buffer active"
                                        : "show-mode-icon-buffer"
                                }
                                onClick={() => {
                                    setMode(MY_SHORTCUTS);
                                    setActiveClass("");
                                    setSaveMode(MY_SHORTCUTS);
                                    inputRef.current.checked = false;
                                }}
                            >
                                <div className="symbol-icon">
                                    <div
                                        className={
                                            mode === MY_SHORTCUTS ? "mask-image active" : "mask-image"
                                        }
                                        style={{
                                            WebkitMaskImage:
                                                "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0iIzYyNjI2MiI+PHBhdGggZD0iTTI0IDRDMTIuOTUgNCA0IDEyLjk1IDQgMjRzOC45NSAyMCAyMCAyMCAyMC04Ljk1IDIwLTIwUzM1LjA1IDQgMjQgNHptMCA2YzMuMzEgMCA2IDIuNjkgNiA2IDAgMy4zMi0yLjY5IDYtNiA2cy02LTIuNjgtNi02YzAtMy4zMSAyLjY5LTYgNi02em0wIDI4LjRjLTUuMDEgMC05LjQxLTIuNTYtMTItNi40NC4wNS0zLjk3IDguMDEtNi4xNiAxMi02LjE2czExLjk0IDIuMTkgMTIgNi4xNmMtMi41OSAzLjg4LTYuOTkgNi40NC0xMiA2LjQ0eiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)",
                                        }}
                                    ></div>
                                </div>
                                <div className="google-text-container">
                                    <div
                                        className={
                                            mode === MY_SHORTCUTS
                                                ? "google-text-buffer active"
                                                : "google-text-buffer"
                                        }
                                    >
                                        <div
                                            className={
                                                mode === MY_SHORTCUTS
                                                    ? "tick-icon-container active"
                                                    : "tick-icon-container"
                                            }
                                        >
                                            <div className="mask-image"></div>
                                        </div>
                                        <div className="google-image-container">
                                            <div className="mask-image"></div>
                                        </div>
                                        <div className="multiple-dot-container">
                                            <div
                                                className={
                                                    mode === MY_SHORTCUTS
                                                        ? "mask-image active"
                                                        : "mask-image"
                                                }
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="show-mode-description">
                            <div className="title">My shortcuts</div>
                            <div className="description">Shortcuts are curated by you</div>
                        </div>
                    </div>
                    <div className="show-mode-item most-visited-sites">
                        <div className="show-mode-icon-container">
                            <div
                                className={
                                    mode === MOST_VISITED_SITES
                                        ? "show-mode-icon-buffer active"
                                        : "show-mode-icon-buffer"
                                }
                                onClick={() => {
                                    setSaveMode(MOST_VISITED_SITES);
                                    setMode(MOST_VISITED_SITES);
                                    setActiveClass("");
                                    inputRef.current.checked = false;
                                }}
                            >
                                <div className="symbol-icon">
                                    <div
                                        className={
                                            mode === MOST_VISITED_SITES
                                                ? "mask-image active"
                                                : "mask-image"
                                        }
                                        style={{
                                            WebkitMaskImage:
                                                "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmM1LjUyIDAgMTAgNC40OCAxMCAxMHMtNC40OCAxMC0xMCAxMFMyIDE3LjUyIDIgMTIgNi40OCAyIDEyIDJ6TTQgMTJoNC40YzMuNDA3LjAyMiA0LjkyMiAxLjczIDQuNTQzIDUuMTI3SDkuNDg4djIuNDdhOC4wMDQgOC4wMDQgMCAwIDAgMTAuNDk4LTguMDgzQzE5LjMyNyAxMi41MDQgMTguMzMyIDEzIDE3IDEzYy0yLjEzNyAwLTMuMjA2LS45MTYtMy4yMDYtMi43NWgtMy43NDhjLS4yNzQtMi43MjguNjgzLTQuMDkyIDIuODctNC4wOTIgMC0uOTc1LjMyNy0xLjU5Ny44MTEtMS45N0E4LjAwNCA4LjAwNCAwIDAgMCA0IDEyeiIgZmlsbD0iIzNDNDA0MyIvPjwvc3ZnPg==)",
                                        }}
                                    ></div>
                                </div>
                                <div className="google-text-container">
                                    <div
                                        className={
                                            mode === MOST_VISITED_SITES
                                                ? "google-text-buffer active"
                                                : "google-text-buffer"
                                        }
                                    >
                                        <div
                                            className={
                                                mode === MOST_VISITED_SITES
                                                    ? "tick-icon-container active"
                                                    : "tick-icon-container"
                                            }
                                        >
                                            <div className="mask-image"></div>
                                        </div>
                                        <div className="google-image-container">
                                            <div className="mask-image"></div>
                                        </div>
                                        <div className="multiple-dot-container">
                                            <div
                                                className={
                                                    mode === MOST_VISITED_SITES
                                                        ? "mask-image active"
                                                        : "mask-image"
                                                }
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="show-mode-description">
                            <div className="title">Most-visited sites</div>
                            <div className="description">
                                Shortcuts are suggested based on websites that you visit often
              </div>
                        </div>
                    </div>
                </div>
                <div className="hidden-shortcuts-container">
                    <div className={"hidden-shortcuts-buffer " + activeClass}>
                        <div className="eye-icon-container">
                            <div
                                className={"mask-image " + activeClass}
                                style={{
                                    WebkitMaskImage:
                                        "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzVGNjM2OCI+PHBhdGggZD0iTTEyIDdjMi43NiAwIDUgMi4yNCA1IDUgMCAuNjUtLjEzIDEuMjYtLjM2IDEuODNsMi45MiAyLjkyYzEuNTEtMS4yNiAyLjctMi44OSAzLjQzLTQuNzUtMS43My00LjM5LTYtNy41LTExLTcuNS0xLjQgMC0yLjc0LjI1LTMuOTguN2wyLjE2IDIuMTZDMTAuNzQgNy4xMyAxMS4zNSA3IDEyIDd6TTIgNC4yN2wyLjI4IDIuMjguNDYuNDZBMTEuODA0IDExLjgwNCAwIDAgMCAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjUgMS41NSAwIDMuMDMtLjMgNC4zOC0uODRsLjQyLjQyTDE5LjczIDIyIDIxIDIwLjczIDMuMjcgMyAyIDQuMjd6TTcuNTMgOS44bDEuNTUgMS41NWMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjY2IDEuMzQgMyAzIDMgLjIyIDAgLjQ0LS4wMy42NS0uMDhsMS41NSAxLjU1Yy0uNjcuMzMtMS40MS41My0yLjIuNTMtMi43NiAwLTUtMi4yNC01LTUgMC0uNzkuMi0xLjUzLjUzLTIuMnptNC4zMS0uNzhsMy4xNSAzLjE1LjAyLS4xNmMwLTEuNjYtMS4zNC0zLTMtM2wtLjE3LjAxeiIvPjwvc3ZnPg==)",
                                }}
                            ></div>
                        </div>
                        <div className={"hidden-text-title-container " + activeClass}>
                            <div className="hidden-text-title">Hidden shortcuts</div>
                            <div className="hidden-text-description">
                                Don't show shortcuts on this page
              </div>
                        </div>
                        <div className="custom-control custom-switch">
                            <input
                                ref={inputRef}
                                type="checkbox"
                                className="custom-control-input"
                                id="customSwitch1"
                                onClick={(event) => {
                                    if (event.currentTarget.checked) {
                                        setSaveMode(mode);
                                        setMode(NONE);
                                        setActiveClass("active");
                                    } else {
                                        setMode(saveMode);
                                        setActiveClass("");
                                    }
                                }}
                            />
                            <label
                                className={"custom-control-label active " + activeClass}
                                htmlFor="customSwitch1"
                            ></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};