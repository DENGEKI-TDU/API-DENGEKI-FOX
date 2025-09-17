import { Router, Request, Response } from "express";
import { checkJWT } from "../../lib/jwt";
import axios from "axios";
import { setupMiddleware } from "../../lib/middleware";

const router = Router();
setupMiddleware(router);
router.get("/getSession", async (req: Request, res: Response) => {
  console.log(req.headers.cookie);
  const cookies = req.headers.cookie || "";
  const jwt = cookies
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
  if (jwt != "" && jwt) {
    const checkData = await checkJWT(jwt);
    res.json(checkData);
  } else {
    res.json({
      name: "",
      isLogin: false,
      isAdmin: false,
      isDev: false,
      isTreasurer: false,
    });
  }
});
router.get("/logout", async (res: Response, req: Request) => {
  console.log("LOGOUT FUNCTION");
  res.setHeader("Set-Cookie", `token=;Path=/; HttpOnly; Secure; Max-Age=10800`);
  res.json({
    status: "success from express",
  });
});

router.post("/login", async (res: Response, req: Request) => {
  // const { name, pass } = req.body;
  // const fetchResponse = await fetch("https://sso.dengeki-fox.net/login/", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ name: name, pass: pass }),
  // });
  console.log(req.body);
  // res.json(req.headers);
  // await axios
  //   .post("https://sso.dengeki-fox.net/login", { name: name, pass: pass })
  //   .then(async (fetchResponse) => {
  //     const response = await fetchResponse.data;
  //     console.log(response);
  //     if (response.status == "success") {
  //       const checkData = await checkJWT(response.token);
  //       res.setHeader(
  //         "Set-Cookie",
  //         `token=${response.token};Path=/; HttpOnly; Secure; Max-Age=10800`
  //       );
  //       res.json({
  //         name: checkData.name,
  //         isAdmin: checkData.isAdmin,
  //         isDev: checkData.isDev,
  //       });
  //     } else {
  //       res.status(500).json({ status: "failed" });
  //     }
  //   });
});

export default router;
