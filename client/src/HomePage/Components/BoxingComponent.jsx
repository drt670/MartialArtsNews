import React from 'react';
import { array } from "prop-types";


const BoxingComponent = ({ currentBoxingItems = [] }) => {
    return (
        <div className="boxing-container">
            <div className='boxing-label'>BOXING</div>
            <div className='tracks'>
                <div className='track'>
                    <div className='boxing-image'>
                        <a href={currentBoxingItems?.[0].postUrl} className='boxing-thumbnail'>
                            <div>
                                <img src={currentBoxingItems?.[0].thumbnail}
                                />
                            </div>
                        </a>
                    </div>
                    <div className='boxing-text'>
                        <a href={currentBoxingItems?.[0].postUrl}>
                            <h3>{currentBoxingItems?.[0].title}</h3>
                        </a>
                    </div>
                </div>
                <div className='track'>
                    <div className='boxing-text'>
                        <a href={currentBoxingItems?.[1].postUrl}>
                            <h3>{currentBoxingItems?.[1].title}</h3>
                        </a>
                    </div>
                    <div className='boxing-image'>
                        <a href={currentBoxingItems?.[1].postUrl} className='boxing-thumbnail'>
                            <div>
                                <img src={currentBoxingItems?.[1].thumbnail} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

BoxingComponent.propTypes = {
    currentBoxingItems: array,
}

export default BoxingComponent;