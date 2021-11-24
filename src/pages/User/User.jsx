import React from 'react'
import "./user.css"

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PublishIcon from '@mui/icons-material/Publish';

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">John Doe</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">John33</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">1/05/1993</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroidIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">+2 123 456 7891</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">test@test.com</span>
                        </div>
                        <div className="userShowInfo">
                            <MyLocationIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">Cairo | Egypt</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text"  placeholder="John33" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text"  placeholder="test@test.com" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text"  placeholder="Cairo | Egypt" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text"  placeholder="John Doe" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text"  placeholder="+2 123 456 7891" className="userUpdateInput"/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <img className="userUpdateImg" src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt="" />
                            <label htmlFor="file"><PublishIcon /></label>
                            <input type="file" name="" id="file" />
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
