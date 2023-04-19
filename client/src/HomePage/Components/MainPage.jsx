import React, {useContext} from 'react';
import './MainPage.css';
import './slider-animations.css'
import UFCLogo from '../../Images/UFC-HOMEPAGE_LOGO.webp';
import Slider from 'react-animated-slider';
import { MmaContext } from "../../../contexts/MmaContext.js";
import { array } from "prop-types";
import Placeholder from '../../Images/UFC-PLACEHOLDER.webp'
import Loading from './Loading.jsx';
import moment from "moment";
import Button from "@mui/material/Button";

const MainPage = ({ filteredMmaItems = [] }) => {
    const { mmaItems, isLoading } = useContext(MmaContext);
    console.log(isLoading);

    const slides = [
        { title: 'First item', description: 'Lorem ipsum'},
        { title: 'Second item', description: 'Lorem ipsum'},
        { title: 'Third item', description: 'Lorem ipsum'},
        { title: 'Fourth item', description: 'Lorem ipsum'}
    ];

    const hasThumbnail = mmaItems.filter((item) => item.thumbnail);
    const currentItems = hasThumbnail.slice(0, 4);
    console.log(currentItems);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
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
                                        <Button><a href={currentItems?.[index].postUrl} className='link'>Read More</a></Button>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

MainPage.propTypes = {
    filteredMmaItems: array,
}

export default MainPage;