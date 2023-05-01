import React from 'react';
import Title from "../Title.jsx";
import MmaNewsGrid from "./MmaNewsGrid.jsx";
import './MmaNews.css'
import LinearGradient from "react-native-web-linear-gradient";

const MmaNews = () => {
    return (
        <>
            <LinearGradient style={{ height: 'auto', width: 'auto' }} colors={['#292C33', '#939799', 'white']} >
                <div className='information-page'>
                    <Title/>
                    <div className="bar"></div>
                </div>
                <MmaNewsGrid />
            </LinearGradient>
        </>
    )
}

export default MmaNews;