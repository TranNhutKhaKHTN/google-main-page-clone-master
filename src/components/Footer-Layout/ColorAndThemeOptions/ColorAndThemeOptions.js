import React, { useState } from "react";
import "./ColorAndThemeOptions.scss";
import data from "../../../data/icons/color-icon.json";

export const ColorAndThemeOptions = () => {
    const [activeColor, setActiveColor] = useState("");

    return (
        <div className="color-and-theme-options-container">
            <div className="color-and-theme-options-buffer">
                <div className="container-fluid">
                    <div className="row">
                        {data.color_icons.map((item) => {
                            return (
                                <div className="col-2 item-color" key={item.color}>
                                    <div className="item-color-buffer">
                                        <div className="color-image-container">
                                            <div
                                                className={
                                                    activeColor === item.color
                                                        ? "symbol-icon active"
                                                        : "symbol-icon"
                                                }
                                            >
                                                <div
                                                    className="mask-image"
                                                    style={{
                                                        WebkitMaskImage:
                                                            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiPjxkZWZzPjxwYXRoIGQ9Ik0wIDBoMTh2MThIMFYweiIgaWQ9ImEiLz48cGF0aCBkPSJNMTAuMTIuNDdsMS4xNi41NSAxLjA1Ljc0LjkxLjkxLjc0IDEuMDQuNTUgMS4xNy4zNSAxLjI3TDE1IDcuNWwtLjEyIDEuMzUtLjM1IDEuMjctLjU1IDEuMTYtLjc0IDEuMDUtLjkxLjkxLTEuMDUuNzQtMS4xNi41NS0xLjI3LjM1TDcuNSAxNWwtMS4zNS0uMTItMS4yNy0uMzUtMS4xNy0uNTUtMS4wNC0uNzQtLjkxLS45MS0uNzQtMS4wNS0uNTUtMS4xNi0uMzUtMS4yN0wwIDcuNWwuMTItMS4zNS4zNS0xLjI3LjU1LTEuMTcuNzQtMS4wNC45MS0uOTEgMS4wNC0uNzRMNC44OC40NyA2LjE1LjEyIDcuNSAwbDEuMzUuMTIgMS4yNy4zNXpNMy4zMSA2LjQ0TDIuMjUgNy41IDYgMTEuMjVsNi43NS02Ljc1LTEuMDYtMS4wNkw2IDkuMTMgMy4zMSA2LjQ0eiIgaWQ9ImIiLz48L2RlZnM+PHVzZSB4bGluazpocmVmPSIjYSIgZmlsbC1vcGFjaXR5PSIwIi8+PHVzZSB4bGluazpocmVmPSIjYSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwIi8+PGc+PHVzZSB4bGluazpocmVmPSIjYiIgZmlsbD0iIzQyODVmNCIvPjx1c2UgeGxpbms6aHJlZj0iI2IiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMCIvPjwvZz48L3N2Zz4=)",
                                                    }}
                                                ></div>
                                            </div>
                                            <img
                                                onClick={() => {
                                                    setActiveColor(item.color);
                                                }}
                                                src={item.color}
                                                alt="Color"
                                                className={
                                                    activeColor === item.color
                                                        ? "img-fluid active"
                                                        : "img-fluid"
                                                }
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};