import app from "./App";

const PORT = process.env.PORT || 3001;

app.express.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Server is listening on ${PORT}`);
});
