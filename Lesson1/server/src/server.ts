import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de users");

  //JSON
  response.json([
    "Marco",
    "Artur",
    "Jocas",
    "Lopes"
  ]);
});
app.listen(3333);