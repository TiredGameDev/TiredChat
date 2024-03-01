const express = require("express");
const app = express();

app.set("view engine", "ejs");

const port = 3000;
// DEV = 3000
// PROD = 443

app.get("/", (req, res) => {
    res.render("index.ejs", {tab_title: "Home"});
})

if (port == 3000) {
    app.listen(port, () => {
        console.log("Server started on port 3000\nPress Ctrl+C to exit\nSERVER IS IN DEVELOPMENT MODE\n Open http://localhost:3000 in your browser");
    })
}

if (port == 443) {
    app.listen(port, () => {
        console.log("Server started on port 443\nPress Ctrl+C to exit\nSERVER IS IN PRODUCTION MODE");
    })
}
