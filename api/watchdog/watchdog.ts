import { Router, Request, Response } from "express";
import { accountDBPrisma } from "../lib/prisma";
import { ssoSupabase } from "../lib/supabase";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const date = new Date();
  try {
    const accountWatchdogResult = await accountDBPrisma.accessHistory.create({
      data: {
        accessDate: date,
      },
    });
    const ssoWatchdogResult = await ssoSupabase.from("watchdog").insert({
      created_at: date,
    });
    console.log(accountWatchdogResult);
    console.log(ssoWatchdogResult);
    res.json({ message: "Success", date: date }, { status: 200 });
  } catch (error) {
    console.error(error);
    res.json({ message: error });
  }
});

export default router;
