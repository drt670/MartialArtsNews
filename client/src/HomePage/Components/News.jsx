import React, {useState} from 'react';
import Title from "../Title.jsx";
import NewsGrid from "./NewsGrid.jsx";
import './MmaNews.css'
import LinearGradient from "react-native-web-linear-gradient";
import {array, string} from "prop-types";
import SearchComponent from "./SearchComponent.jsx";

const News = ({ currentItems = [], logo = {} }) => {
    const [search, setSearch] = useState("")

    return (
        <>
            <LinearGradient style={{ height: 'auto', width: 'auto' }} colors={['#292C33', '#939799', 'white']} >
                <div className='information-page'>
                    <Title/>
                    <div className="bar"></div>
                    <SearchComponent setSearch={setSearch}/>
                </div>
                <NewsGrid currentItems={currentItems} logo={logo} searchValue={search}/>
            </LinearGradient>
        </>
    )
}

News.propTypes = {
    currentItems: array,
    logo: string,
}

export default News;