import React, { useContext, useState } from 'react';
import { NewsContext } from "../../../contexts/NewsContext.js";
import moment from "moment";
import './MmaNewsGrid.css';
import UFCLogo from '../../Images/UFC-Logo.png';
import ReactPaginate from "react-paginate";
import Loading from "./Loading.jsx";
import {array, string} from "prop-types";
const MmaNewsGrid = ({ currentItems = [], logo = {} }) => {
    const { isLoading } = useContext(NewsContext);
    const [startIndex, setStartIndex] = useState(0);

    const itemsPerPage = 6;
    const pageCount = Math.ceil(currentItems.length / itemsPerPage);
    const endIndex = startIndex + itemsPerPage;

    const handlePageChange = (e) => {
        const newStartIndex = (e.selected * itemsPerPage) % currentItems.length;
        setStartIndex(newStartIndex);
    }

    const currentItemsDisplayed = currentItems.slice(startIndex, endIndex);

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

MmaNewsGrid.propTypes = {
    currentItems: array,
    logo: string,
}

export default MmaNewsGrid;