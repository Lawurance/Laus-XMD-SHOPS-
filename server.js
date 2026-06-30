const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let users = [];
let orders = [];

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("LAUS XMD BACKEND RUNNING");
});

// SAVE CUSTOMER EMAIL (PHASE 2)
app.post("/register", (req, res) => {
    users.push(req.body);
    res.send({message:"User saved", users});
});

// SAVE ORDER (PHASE 3)
app.post("/order", (req, res) => {
    orders.push(req.body);
    res.send({message:"Order received", orders});
});

// GET DATA (ADMIN PANEL)
app.get("/admin", (req, res) => {
    res.send({users, orders});
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
