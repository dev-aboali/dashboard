import React from 'react'
import "./topbar.css"

// import { NotificationsNoneIcon, settings, LanguageIcon} from '@mui/icons-material/';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { LanguageOutlined, NotificationsNone, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">Admin Panel</div>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageOutlined />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <span className="topIconBadge"></span>
                    </div>
                    <img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt="admin avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
