const express = require("express");
const { generateMmaNews, generateBoxingNews } = require("./generateNews")
// const generateBoxingNews = re
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send( {
        message: "UFC FIGHT SERVER",
        data: res,
    });
});

app.get("/api/mma", async(req, res) => {
    try {
        const news = await generateMmaNews();
        res.status(200).json(news);
    } catch (error) {
        console.error(`Error fetching news: ${error}`);
        res.status(500).json({ error: "Failed to fetch news"});
    }
});

app.get("/api/boxing", async(req, res) => {
    try {
        const news = await generateBoxingNews();
        res.status(200).json(news);
    } catch (error) {
        console.error(`Error fetching news: ${error}`);
        res.status(500).json({ error: "Failed to fetch news"});
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
