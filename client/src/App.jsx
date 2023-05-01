import React, { useCallback, useState, useEffect, useMemo } from 'react';
import axios from "axios";
import Title from "./HomePage/Title";
import Toolbar from "./HomePage/Components/Toolbar";
import './HomePage/index.css';
import { MmaContextProvider } from "../contexts/MmaContext";
import LinearGradient from "react-native-web-linear-gradient";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MmaNews from "./HomePage/Components/MmaNews.jsx";
import MainPage from "./HomePage/Components/MainPage.jsx";

const API_BASE_URL = "http://localhost:3000";
const App = () => {
    const [page, setPage] = useState('home-page');
    const [mmaItems, setMmaItems] = useState([]);
    const [boxingItems, setBoxingItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
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

    const fetchBoxing = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/boxing`);
            setBoxingItems(response.data);
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

    useEffect(() => {
        fetchBoxing();
    }, [fetchBoxing])

      return (
          <Router>
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
            <div className="static-page" page={page}>
                    <div className='container'>
                        <Toolbar setPage={setPage}/>
                        <Routes>
                            <Route exact path='/' element={<MainPage filteredMmaItems={mmaItems}/>} />
                            <Route path='/ufcnews' element={<MmaNews />} />
                        </Routes>
                    </div>
            </div>
        </MmaContextProvider>
          </Router>
      );
}

App.propTypes = {
}

export default App;
