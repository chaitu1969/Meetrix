import express from "express";

const app = express();

app.get("/user", (req, res) => {
  res.json({ firstname: "chaitu", lastname: "karle" });
});

app.post("/profile", (req, res) => {
  res.send("Post method is worked");
});

app.get("/profile", (req, res) => {
  res.send("Get profile method is worked");
});

app.use("/test", (req, res) => {
  res.send("Test page");
});

app.options("/", (req, res) => {
  res.send("All options are availbale");
});

app.listen(3000, () => {
  console.log(`Server is up and running on port 3000`);
});
