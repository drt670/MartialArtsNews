import React, { useState } from 'react';
import { func } from "prop-types";
import './Toolbar.css';

const styles = {
    AppBar : {
        position: 'fixed',
    },
    Container: {
        maxWidth: 'xl',
    },
    Link : {
        textDecoration: 'none',
    }
}

const ToolBar = () => {

    return (
        <div className="app-navbar-container">
            <a className="page-logo" href="/">
                <h1 className="logo-wrapper">LOGO</h1>
            </a>
            <nav className="category-list">
                <ol className="molecule nav-list">
                    <li className="list-item">
                        <a href="/ufcnews">UFC</a>
                    </li>
                    <li className="list-item">
                        <a href="/ufcnews">MUAY THAI</a>
                    </li>
                    <li className="list-item">
                        <a href="/boxing">BOXING</a>
                    </li>
                    <li className="list-item">
                        <a href="/ufcnews">BJJ</a>
                    </li>
                    <li className="list-item">
                        <a href="/ufcnews">WRESTLING</a>
                    </li>
                </ol>
            </nav>
        </div>
    )
};

ToolBar.propTypes = {
    setPage: func,
};

export default ToolBar;