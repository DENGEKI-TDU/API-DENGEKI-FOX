import express from "express";
import { setupMiddleware } from "./lib/middleware";
import watchdog from "./watchdog/watchdog";
import v1 from "./v1/v1";
const app = express();

// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
setupMiddleware(app);
app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/health", (req, res) => res.sendStatus(200));
app.post("/test", (req, res) => {
  console.log(req.body);
});
app.use("/watchdog", watchdog);
app.use("/v1", v1);

const port = process.env.PORT || 3006;

app.listen(port, "0.0.0.0", () => {
  console.log("Server listening on 3006!");
});

export default app;
