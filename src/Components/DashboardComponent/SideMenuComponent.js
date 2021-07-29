import React from 'react'
import { useState } from 'react'
import MenuItemComponent from './MenuItemComponent'
import { Link } from 'react-router-dom'
import './CSS/SideMenuComponent.css'

export default function SideMenuComponent() {
    const [inactive, setInactive] = useState(false)

    const itemList = [
        {
            text: <Link  className="link" to="/">Dashboard</Link>,
            logo:  <i className="bi bi-speedometer2"></i>
        },
        {
            text: 'Profile',
            logo: <i className="bi bi-person-circle"></i>
        },
        {
            text: <Link className="link" to="/applications">Applications</Link>,
            logo: <i className="bi bi-app-indicator"></i>
        },
        {
            text: <Link className="link" to="/screenshots">Screenshots</Link>,
            logo: <i className="bi bi-fullscreen"></i>
        },
        {
            text: <Link className="link" to="/network">Network</Link>,
            logo: <i className="bi bi-cloud"></i>
        },
        {
            text: <Link className="link" to="/files">Files</Link>,
            logo: <i className="bi bi-file-earmark"></i>
        },
        {
            text: 'Clipboard',
            logo: <i className="bi bi-clipboard"></i>
        },
        {
            text: 'Session',
            logo: <i className="bi bi-binoculars"></i>
        }
    ]

    return (
        <div className={`side-menu ${inactive ? 'inactive': ''}`}>
            <div className="top-section">
                <div className="logo">
                    <img src="#" alt="logo"/>
                </div>
                <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
                    {inactive ? (<i class="bi bi-arrow-left-square-fill"></i>):
                     (<i className="bi bi-arrow-right-square-fill"></i>)}
                </div>    
            </div>

            <div className="search-controller">
                <button className="search-btn">
                    <i className="bi bi-search"></i>
                </button>
                <input type="date" placeholder="search"/>
            </div>

            <div className="divider"></div>

            <div className="main-menu">
                <ul>
                    {itemList.map((item, index) => (
                        <MenuItemComponent
                            key={index}
                            name = {item.text}
                            logo = {item.logo}
                            onClick={() => {
                                if(inactive){
                                    setInactive(false);
                                }
                            }}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}
