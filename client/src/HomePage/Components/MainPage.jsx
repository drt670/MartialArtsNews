import React, {useContext} from 'react';
import './MainPage.css';
import './slider-animations.css'
import UFCLogo from '../../Images/UFC-HOMEPAGE_LOGO.webp';
import Slider from 'react-animated-slider';
import { NewsContext } from "../../../contexts/NewsContext.js";
import { array } from "prop-types";
import Loading from './Loading.jsx';
import moment from "moment";
import Button from "@mui/material/Button";
import LinearGradient from "react-native-web-linear-gradient";
import BoxingComponent from "./BoxingComponent.jsx";

const MainPage = ({ filteredMmaItems = [] }) => {
    const { mmaItems, boxingItems, isLoading, } = useContext(NewsContext);

    const slides = [
        { title: 'First item', description: 'Lorem ipsum'},
        { title: 'Second item', description: 'Lorem ipsum'},
        { title: 'Third item', description: 'Lorem ipsum'},
        { title: 'Fourth item', description: 'Lorem ipsum'}
    ];

    const mmaHasThumbnail = mmaItems.filter((item) => item.thumbnail);
    const currentItems = mmaHasThumbnail.slice(0, 4);

    const boxingHasThumbnail = boxingItems.filter((item) => item.thumbnail);
    const currentBoxingItems = boxingHasThumbnail.slice(0,2);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
            <div>
                <LinearGradient style={{ height: 'auto', width: 'auto' }} colors={['#292C33', '#939799', 'white']} >
                    <div style={{ marginTop: '7rem' }}>
                        <div className='center-box'>
                            <div className='box'>
                                <img src={UFCLogo} className='ufc-box'/>
                            </div>
                            <div className='box2'>
                                <Slider className='slider-wrapper'>
                                    {slides.map((slide, index) =>
                                        <div key={index} >
                                            <img src={currentItems?.[index].thumbnail} referrerPolicy="no-referrer"/>
                                            <h1>{currentItems?.[index].title}</h1>
                                            <div className='author-date'>
                                                <p className='author'>Posted by <strong>{currentItems?.[index].author}</strong></p>
                                                <p className='date'>{moment(currentItems?.[index].date).fromNow()}</p>
                                            </div>
                                            <div className='button'>
                                                <Button><a href={currentItems?.[index].postUrl} className='slider-link'>Read More</a></Button>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </LinearGradient>
                <BoxingComponent currentBoxingItems={currentBoxingItems} />
            </div>
            )}
        </>
    )
}

MainPage.propTypes = {
    filteredMmaItems: array,
}

export default MainPage;