import './Admin.scss'
import { blockAccount, unBlockAccount } from "../../redux/actions/actions"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Admin ({isProfileOpen, toggleProfile, isConfigBarOpen, closeSideBar, openAdmin, toggleAdmin}) {
    


    const dispatch = useDispatch();

    const handleAdminButtonClick = () => {
        toggleAdmin();
        closeSideBar();            
        if(isProfileOpen){
            toggleProfile();
        }
    }

    return (
        <div>
            <button className="admin-button" onClick={handleAdminButtonClick}>
                A
            </button>
            <div className={`admin-window ${openAdmin ? 'admin-window--open' : ''} ${isConfigBarOpen ? 'config-sidebar-open' : ''}`}>
                 <h1>admiiiin</h1>
                 <h1>admiiiin</h1>
                 <h1>admiiiin</h1>
                 <h1>admiiiin</h1>
            </div>
        </div>
    );
}

export default Admin;
