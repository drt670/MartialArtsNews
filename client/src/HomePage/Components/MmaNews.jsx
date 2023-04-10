import React, { useContext, useState } from 'react';
import { MmaContext } from "../../../contexts/MmaContext.js";
import moment from "moment";
import './MmaNews.css';
const MmaNews = () => {
    const { mmaItems, filteredMmaItems, isLoading } = useContext(MmaContext);
    const itemsPerPage = 6;
    const mmaNews = filteredMmaItems.length ? filteredMmaItems : mmaItems;

    const currentItems = mmaNews.slice(80, 86);

    return (
        <div className = "news-grid">
            {currentItems.map((item) => (
                <div>
                <div
                    key={item.postUrl}
                    className="post-url"
                >
                    <a
                        href={item.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="img"
                            referrerpolicy="no-referrer"
                        />
                    </a>
                    <div className="title-section">
                        <h2 className="title">
                            {item.title}
                        </h2>
                        <div className="date-link">
                            <p className="date">
                                {moment(item.date).fromNow()}
                            </p>
                            <a
                                href={item.postUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
};

export default MmaNews;