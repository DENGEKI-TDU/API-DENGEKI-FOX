import { Router, Request, Response } from "express";
import main from "./main/main";

const router = Router();
router.use("/main", main);

export default router;
