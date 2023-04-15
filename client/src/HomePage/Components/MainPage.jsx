import React from 'react';
import './MainPage.css';
import UFCLogo from '../../Images/UFC-HOMEPAGE_LOGO.webp';

const MainPage = () => {
    return (
        <>
            <div style={{ marginTop: '7rem' }}>
                HELLO THERE
                <div className='center-box'>
                    <div className='test-box'>
                        <img src={UFCLogo} className='test-box2'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;