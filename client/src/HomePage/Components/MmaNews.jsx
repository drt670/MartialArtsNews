import React, { useContext, useState } from 'react';
import { MmaContext } from "../../../contexts/MmaContext.js";
import moment from "moment";
import './MmaNews.css';
import UFCLogo from '../../Images/UFC-Logo.png';
import ReactPaginate from "react-paginate";
const MmaNews = () => {
    const { mmaItems, filteredMmaItems, isLoading } = useContext(MmaContext);
    const [startIndex, setStartIndex] = useState(0);

    const itemsPerPage = 6;
    const pageCount = Math.ceil(mmaItems.length / itemsPerPage);
    const endIndex = startIndex + itemsPerPage;

    const mmaNews = filteredMmaItems.length ? filteredMmaItems : mmaItems;

    const currentItems = mmaNews.slice(startIndex, endIndex);

    const handlePageChange = (e) => {
        const newStartIndex = (e.selected * itemsPerPage) % mmaItems.length;
        setStartIndex(newStartIndex);
    }

    return (
        <div>
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
                                src={item.thumbnail ? item.thumbnail : UFCLogo}
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
            <ReactPaginate
                className="pagination"
                breakLabel="..."
                pageCount={pageCount}
                onPageChange={handlePageChange}
                pageRangeDisplayed={5}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active-page"
            />
        </div>
    )
};

export default MmaNews;