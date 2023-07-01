import React, { useContext, useState } from 'react';
import { NewsContext } from "../../../contexts/NewsContext.js";
import moment from "moment";
import './NewsGrid.css';
import UFCLogo from '../../Images/UFC-Logo.png';
import ReactPaginate from "react-paginate";
import Loading from "./Loading.jsx";
import {array, string} from "prop-types";
const NewsGrid = ({ currentItems = [], logo = "", searchValue = "" }) => {
    const { isLoading } = useContext(NewsContext);
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = currentItems.filter((item) => item.title.toLowerCase().includes(searchValue));

    const itemsPerPage = 6;
    const pageCount = Math.ceil(itemsToShow.length / itemsPerPage);
    const endIndex = startIndex + itemsPerPage;

    const handlePageChange = (e) => {
        const newStartIndex = (e.selected * itemsPerPage) % itemsToShow.length;
        setStartIndex(newStartIndex);
    }

    const currentItemsDisplayed = itemsToShow.slice(startIndex, endIndex);

    return (
        <div>
            {isLoading ? (
                <div className="loader-container">
                    <Loading />
                </div>
            ) : (
            <div className = "news-grid">
                {currentItemsDisplayed.map((item) => (
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
                                    src={item.thumbnail ? item.thumbnail : logo}
                                    className="img"
                                    referrerPolicy="no-referrer"
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
            )}
            <ReactPaginate
                className="pagination"
                breakLabel="..."
                pageCount={pageCount}
                onPageChange={handlePageChange}
                pageRangeDisplayed={5}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                activeClassName="active-page"
            />
        </div>
    )
};

NewsGrid.propTypes = {
    currentItems: array,
    logo: string,
    searchValue: string,
}

export default NewsGrid;