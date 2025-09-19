import express from "express"

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.text());

//=====testing endpoint=====//
app.get("/", (req, res) => {
  res.send("Welcome hello");
});
//--mai iss code mai cicd implement kruga--//

//--handle invalid api route--//
// app.all("*", handle_InvalidRoute);

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});
