import React from 'react'
import { AiOutlineCamera } from "react-icons/ai";

export const AccountInfo = ({ showSelectProfileInfo, setShowSelectProfileInfo }) => {
    // const [showSelectProfileInfo, setShowSelectProfileInfo] = useState(false);
    const hanleClickSelectProfileInfo = () => {
        if (!showSelectProfileInfo)
            setShowSelectProfileInfo(true);
    }
    return (
        <div className="avatar">
            <div className="avatar-container">
                <img
                    src="https://lh3.googleusercontent.com/-A1lUXyyCP7Q/XhDIuG5FAHI/AAAAAAAAC20/uNbfoAqTnKYdAY3WF42C5sq3YL6I-2w9gCEwYBhgLKtQDAL1OcqzKVV_kKgBTm3vpxFz1HncCRUz3o9Ou4Ih37qxMVawHhKfWTbFQIbVoEXJK50W0Hp4cYhC0t95I9SvxMCjJMYdbaQAUpNdwC9RO-iA-pP-JvS0dtbFPYG_6Z90XCBh5-yxTObMrzY4M9pMplIgwJPw2eH_09TA2iYOruCcbUrM98auu2vfMvN3UN825cM5BI9RGy-hkKgTr6dVhxbZw_yyaVcWspEZMmw1niR-F2OgmDLG-QSUqHOunGxz_-ZnLMi2MOQXhmNRO0WXHyQp2o1UfCEbYBUnCsHMTs7weJ7_AGY0Vq6y2Z3yr6VKqrdo0RAUjPNe_lKMms-_1pRHOin6kb_KLYE_urK4sbI0sOKS23xLcslJoUBz9rQ04u2n0oDCN0--Ze57stw4q8LP2huVBeXoMrkffn4In3MAwHpYGdJIcRLGRSok5t_u-jowauIH-PoD8Y7VpWugYpjMluq5X_cfCUT7HoCCUrECVl--vSWmKWUe-t0XO0C_QBEoJhrOUBKiJ81pnooSiZDaBAfdJysBIoqt_Pv_38SM0SiLZtx_VMaXECldGkaC9XmXGmqJ774JcXuFLZwstsKOI59awIC1D2yfwbEuORB7A8vKcMI7TiP0F/w139-h140-p/2020-01-04.jpg"
                    alt="avatar"
                    className="img-fluid"
                >
                </img>
                <div
                    className="camera-container"
                    onClick={hanleClickSelectProfileInfo}
                >
                    <AiOutlineCamera className="camera-setting-avatar" />
                </div>
            </div>
            <div className="info-account">
                <div className="name-account">Cảnh Lộc Phan</div>
                <div className="email-account">vuizuizui1010@gmail.com</div>
                <div className="manage-account">
                    <a href="https://myaccount.google.com/?utm_source=OGB&tab=rk&utm_medium=act">
                        Manage your Google Account
                        </a>
                </div>
            </div>
        </div>
    )
}