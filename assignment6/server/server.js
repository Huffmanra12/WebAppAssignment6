const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const knex = require("knex")(require("../database/knexfile.js")["development"]);

app.use(express.json());
app.use(cors());

//All Get Requests
//-------------------------------------------------
app.get("/", (req, res) => {
  res.status(200).send("Server Is Running!");
});
//-------------------------------------------------
app.get("/welcome", async (req, res) => {
  try {
    const welcomeMessage = await knex("site_messages")
      .select("*")
      .where("key", "Welcome Message");
    res.status(200).json(welcomeMessage);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve welcome message." });
  }
});

//-------------------------------------------------
app.get("/items", async (req, res) => {
  try {
    const items = await knex("items").select("*");
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve items." });
  }
});
//--------------------------------------------------
app.get("/items/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await knex("items").select("*").where("items.id", id);

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve item." });
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await knex("users")
      .join("accounts", "accounts.id", "users.account_type")
      .select(
        "users.id",
        "users.username",
        "accounts.account_type as account_type"
      )
      .where("users.id", id);

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve user." });
  }
});

//----------------POST Requests---------------
app.post("/addItems", async (req, res) => {
  const { item_name, item_desc, item_price, id } = req.body;

  try {
    const newItem = {
      item_name: item_name,
      item_description: item_desc,
      item_price: item_price,
      item_owner: id,
    };

    let addedItem = await knex("items").insert(newItem).returning("*");

    res.status(201).json(addedItem);
  } catch (err) {
    res.status(500).json({ message: "Error adding new Item." });
  }
});

app.listen(port, () => {
  console.log("Express Server Is Up & Running!");
});
