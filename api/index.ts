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
app.post("/test", (req, res) => {
  console.log(req.body);
});
app.use("/watchdog", watchdog);
app.use("/v1", v1);

export default app;
