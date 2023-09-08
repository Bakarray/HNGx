const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;

    const currentDate = new Date().toDateString();
    const utcTime = new Date().toISOString();

    const jsonResponse = {
        slack_name: Poesitor,
        current_day: currentDate,
        utc_time: utcTime,
        track: "backend",
        github_file_url: "https://github.com/Bakarray/HNGx/blob/main/Task%201/server.js",
        github_repo_url: "https://github.com/Bakarray/HNGx",
        status_code: 200,
    };

    res.json(jsonResponse);
})

