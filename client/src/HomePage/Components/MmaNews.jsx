import React from 'react';
import Title from "../Title.jsx";
import MmaNewsGrid from "./MmaNewsGrid.jsx";
import './MmaNews.css';

const MmaNews = () => {
    return (
        <>
            <div className='information-page'>
                <Title/>
                <div className="bar"></div>
            </div>
            <MmaNewsGrid />
        </>
    )
}

export default MmaNews;