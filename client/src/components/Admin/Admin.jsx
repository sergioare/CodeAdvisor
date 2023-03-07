import './Admin.scss'
import { blockAccount, unBlockAccount } from "../../redux/actions/actions"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvisorReviews } from '../../redux/actions/actions';
import Graphs from '../Graphs/Graphs'

function Admin ({isProfileOpen, toggleProfile, isConfigBarOpen, closeSideBar, openAdmin, toggleAdmin}) {
    const [displayUsers, setDisplayUsers] = useState("Users")

    const users = useSelector(state => state.users)
    const advisors = useSelector(state => state.advisors)
    const blockedUsers = useSelector(state => state.blockedAccounts)
    const Reviews = useSelector(state => state.advisorReviews)


    const dispatch = useDispatch();

    const handleAdminButtonClick = () => {
        toggleAdmin();
        closeSideBar();            
        if(isProfileOpen){
            toggleProfile();
        }
    }

    const displayInfo = (buttonName) => {
        setDisplayUsers(buttonName);
      }
    
    const showReviews = (id) => {
        dispatch(getAdvisorReviews(id));
        console.log(id)
    }

    const showUserReviews = (id) => {
        //dispatch();
        console.log(id)
    }

    const accountBlocking = (id) => {
        const confirmed = window.confirm("Are you sure you want to block this user?");
      
        if (confirmed) {
          //console.log(`Blocking user ${id}`);
          dispatch(blockAccount(id));
          // add logic to block the user here
        }
      }

    const accountUnblocking = (id) => {
    const confirmed = window.confirm("Are you sure you want to unblock this user?");

        if (confirmed) {
            //console.log(`Unblocking user ${id}`);
            dispatch(unBlockAccount(id));
            // add logic to unblock the user here
        }
    }   


    return (
        <div>
            <div className={`admin-window ${openAdmin ? 'admin-window--open' : ''} ${isConfigBarOpen ? 'config-sidebar-open' : ''}`}>
                <button onClick={handleAdminButtonClick}>Close</button>
                <h1>Platform administrator</h1>
                <p>Be responsible, be fair. Great power comes with great responsibility.</p>
                <div className='buttons-positions'>
                    <button onClick={() => displayInfo('Users')}>Users</button>
                    <button onClick={() => displayInfo('Advisors')}>Advisors</button>
                    <button onClick={() => displayInfo('Blocked users')}>Blocked users</button>
                    <button onClick={() => displayInfo('Graphs')}>Graphs</button>
                </div>
                <div className='positions'>
                    <div className='users-side'>
                        {displayUsers === 'Users' && (
                        <div>
                            <h2>Users</h2>
                            <ul className="admin-section-list">
                            {users.map((user) => (
                                <li key={user.id}>
                                <div className="admin-section-row">
                                    <div className="admin-section-info">
                                    <p className="admin-section-data">{user.Username}</p>
                                    <p className="admin-section-data">{user.Firstname} {user.Lastname}</p>
                                    </div>
                                    <div className="admin-section-buttons">
                                    <button onClick={()=>{showUserReviews(user.id)}} className="check-reviews-button">Check reviews</button>
                                    <button onClick={()=>{accountBlocking(user.id)}} className="block-account-button">Block account</button>
                                    </div>
                                </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                        )}
                        {displayUsers === 'Advisors' && (
                            <div>
                            <h2>Advisors</h2>
                            <ul className="admin-section-list">
                                {advisors.map((advisor) => (
                                <li key={advisor.id}>
                                    <div className="admin-section-row">
                                    <div className="admin-section-info">
                                        <p className="admin-section-data">{advisor.Nickname}</p>
                                        <p className="admin-section-data">{advisor.Firstname} {advisor.Lastname}</p>
                                    </div>
                                    <div className="admin-section-buttons">
                                        <button onClick={()=>{showReviews(advisor.id)}} className="check-reviews-button">Check reviews</button>
                                        <button onClick={()=>{accountBlocking(advisor.id)}} className="block-account-button">Block account</button>
                                    </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                            </div>
                        )}
                        {displayUsers === 'Blocked users' && (
                            <div>
                                <h2>Blocked users</h2>
                                <ul className="blocked-users-list">
                                    {blockedUsers.map((blockedUser) => (
                                        <li key={blockedUser.id}>
                                            <div className="admin-section-row">
                                                <div className="admin-section-info">
                                                    <p className="admin-section-data">{blockedUser.Nickname}</p>
                                                    <p className="admin-section-data">{blockedUser.Firstname} {blockedUser.Lastname}</p>
                                                </div>
                                                <div className="admin-section-buttons">
                                                    <button onClick={()=>{showReviews(blockedUser.id)}} className="check-reviews-button">Check reviews</button>
                                                    <button onClick={()=>{accountUnblocking(blockedUser.id)}} className="unblock-account-button">Unblock account</button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    {(displayUsers === 'Blocked users' || displayUsers === 'Advisors' || displayUsers === 'Users') && (<div className='reviews-side'>
                    <table className="table-3">
                        <tbody>
                        <tr>
                            <th className="col-1" colSpan="5">Reviews</th>
                        </tr>
                        <tr>
                            <th className="tittle" style={{ width: "15%" }}>Name</th>
                            <th className="tittle" style={{ width: "5%" }}>Score</th>
                            <th className="tittle" style={{ width: "80%" }}>Review</th>
                        </tr>
                        {Reviews.map((review, index) => (
                            <tr key={index}>
                            <td className="data" >{review.Name}</td>
                            <td className="data" >{review.score}</td>
                            <td className="data" >{review.Reviwer}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>)}
                </div>
                {displayUsers === 'Graphs' && (       
                    <div>
                        <Graphs></Graphs>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Admin;
