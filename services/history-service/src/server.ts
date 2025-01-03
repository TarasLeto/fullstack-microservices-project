import "reflect-metadata";
import app from "./app";

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`History Service running on http://localhost:${PORT}`);
});
