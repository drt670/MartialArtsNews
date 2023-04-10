import React, { useCallback, useState, useEffect, useMemo } from 'react';
import axios from "axios";
import Title from "./HomePage/Title";
import Toolbar from "./HomePage/Components/Toolbar";
import './HomePage/index.css'
import { MmaContextProvider } from "../contexts/MmaContext";
import MmaNews from "./HomePage/Components/MmaNews.jsx";

const API_BASE_URL = "http://localhost:3000";
const App = () => {
    const [page, setPage] = useState('home-page');
    const [mmaItems, setMmaItems] = useState([]);
    const [isLoading, setLoading] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMmaItems, setFilteredMmaItems] = useState([]);

    const fetchMma = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/mma`);
            setMmaItems(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, [])

    const filteredMma = useMemo(() => {
        return mmaItems.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [mmaItems, searchQuery]);

    useEffect(() => {
        if (searchQuery.length > 0) {
            setMmaItems(filteredMma);
        } else {
            setMmaItems(mmaItems);
        }
    }, [filteredMma, mmaItems, searchQuery]);

    useEffect(() => {
        fetchMma();
    }, [fetchMma])

      return (
        <MmaContextProvider
            value={{
                mmaItems,
                setMmaItems,
                isLoading,
                setLoading,
                fetchMma,
                setSearchQuery,
                searchQuery,
                filteredMmaItems,
                setFilteredMmaItems
            }}
        >
            <div className="home-page" page={page}>
                <div className='container'>
                    <span>
                        <Toolbar setPage={setPage}/>
                    </span>
                    <div className='information-page'>
                        <Title/>
                        <div className="bar"></div>
                    </div>
                    <MmaNews />
                </div>
            </div>
        </MmaContextProvider>
      );
}

App.propTypes = {
}

export default App;
