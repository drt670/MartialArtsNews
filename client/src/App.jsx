import React, { useCallback, useState, useEffect, useMemo } from 'react';
import axios from "axios";
import Title from "./HomePage/Title";
import Toolbar from "./HomePage/Components/Toolbar";
import './HomePage/index.css';
import { NewsContextProvider } from "../contexts/NewsContext.js";
import LinearGradient from "react-native-web-linear-gradient";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MmaNews from "./HomePage/Components/MmaNews.jsx";
import MainPage from "./HomePage/Components/MainPage.jsx";
import UFCLogo from "./Images/UFC-Logo.png";
import BoxingLogo from "./Images/boing-logo.jpg";
import MuayThaiLogo from "./Images/muay-thai-logo.jpg";

const API_BASE_URL = "http://localhost:3000";
const App = () => {
    const [page, setPage] = useState('home-page');
    const [mmaItems, setMmaItems] = useState([]);
    const [boxingItems, setBoxingItems] = useState([]);
    const [muayThaiItems, setMuayThaiItems] = useState([]);
    const [BJJItems, setBJJItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMmaItems, setFilteredMmaItems] = useState([]);

    const fetchNews = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/mma`);
            setMmaItems(response.data);
            const responseBoxing = await axios.get(`${API_BASE_URL}/api/boxing`);
            setBoxingItems(responseBoxing.data);
            const responseMuayThai = await axios.get(`${API_BASE_URL}/api/muaythai`);
            setMuayThaiItems(responseMuayThai.data);
            const responseBJJ = await axios.get(`${API_BASE_URL}/api/BJJ`);
            setBJJItems(responseBJJ.data);
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
        fetchNews();
    }, [fetchNews])

      return (
          <Router>
        <NewsContextProvider
            value={{
                boxingItems,
                setBoxingItems,
                muayThaiItems,
                setMuayThaiItems,
                BJJItems,
                setBJJItems,
                mmaItems,
                setMmaItems,
                isLoading,
                setLoading,
                fetchNews,
                setSearchQuery,
                searchQuery,
                filteredMmaItems,
                setFilteredMmaItems
            }}
        >
            <div className="static-page" page={page}>
                    <div className='container'>
                        <Toolbar />
                        <Routes>
                            <Route exact path='/' element={<MainPage filteredMmaItems={mmaItems}/>} />
                            <Route path='/ufcnews' element={<MmaNews currentItems={mmaItems} logo={UFCLogo}/>} />
                            <Route path='/boxing' element={<MmaNews currentItems={boxingItems} logo={BoxingLogo}/>} />
                            <Route path='/muaythai' element={<MmaNews currentItems={muayThaiItems} logo={MuayThaiLogo}/>} />
                            <Route path='/BJJ' element={<MmaNews currentItems={BJJItems} logo={MuayThaiLogo}/>} />
                        </Routes>
                    </div>
            </div>
        </NewsContextProvider>
          </Router>
      );
}

App.propTypes = {
}

export default App;
