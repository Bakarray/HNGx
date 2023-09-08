const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;

    const currentDate = new Date().toLocaleDateString(undefined, { weekday: 'long' });
    const utcTime = new Date().toJSON().split(".")[0] + "Z";

    const jsonResponse = {
        slack_name: slackName,
        current_day: currentDate,
        utc_time: utcTime,
        track: "backend",
        github_file_url: "https://github.com/Bakarray/HNGx/blob/main/Task%201/server.js",
        github_repo_url: "https://github.com/Bakarray/HNGx",
        status_code: 200,
    };
    
    res.json(jsonResponse);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})