import { Router, Request, Response } from "express";
import { mainDBPrisma } from "../../lib/prisma";
import session from "./session";

const router = Router();

router.post("/update", async (req: Request, res: Response) => {
  const {
    MemberID,
    MemberIcon,
    MemberXId,
    MemberHaritora,
    MemberMessage,
    MemberisReader,
    MemberisSubReader,
    MemberisFirstReader,
    MemberisActor,
    MemberisWriter,
    MemberisDirector,
    MemberisMaking,
    MemberisSoundReader,
    MemberisSound,
    MemberisLightReader,
    MemberisLight,
    MemberisPropReader,
    MemberisProp,
    MemberisClothReader,
    MemberisCloth,
    MemberisRetired,
    MemberLevel,
  } = req.body;
  const result = await mainDBPrisma.member.update({
    where: {
      id: MemberID,
    },
    data: {
      Icon: MemberIcon,
      X_id: MemberXId,
      haritora: MemberHaritora,
      message: MemberMessage,
      isReader: MemberisReader,
      isSubReader: MemberisSubReader,
      isFirstReader: MemberisFirstReader,
      isActor: MemberisActor,
      isWriter: MemberisWriter,
      isDirector: MemberisDirector,
      isMaking: MemberisMaking,
      isSoundReader: MemberisSoundReader,
      isSound: MemberisSound,
      isLightReader: MemberisLightReader,
      isLight: MemberisLight,
      isPropReader: MemberisPropReader,
      isProp: MemberisProp,
      isClothReader: MemberisClothReader,
      isCloth: MemberisCloth,
      isRetired: MemberisRetired,
      level: MemberLevel,
    },
  });
  res.json(result);
});
router.post("/create", async (req: Request, res: Response) => {
  const {
    MemberName,
    MemberCourse,
    MemberGeneration,
    MemberIcon,
    MemberXId,
    MemberHaritora,
    MemberMessage,
    MemberisReader,
    MemberisSubReader,
    MemberisFirstReader,
    MemberisActor,
    MemberisWriter,
    MemberisDirector,
    MemberisMaking,
    MemberisSoundReader,
    MemberisSound,
    MemberisLightReader,
    MemberisLight,
    MemberisPropReader,
    MemberisProp,
    MemberisClothReader,
    MemberisCloth,
    MemberLevel,
  } = req.body;
  const result = await mainDBPrisma.member.create({
    data: {
      name: MemberName,
      course: MemberCourse,
      generation: MemberGeneration,
      Icon: MemberIcon,
      X_id: MemberXId,
      haritora: MemberHaritora,
      message: MemberMessage,
      isReader: MemberisReader,
      isSubReader: MemberisSubReader,
      isFirstReader: MemberisFirstReader,
      isActor: MemberisActor,
      isWriter: MemberisWriter,
      isDirector: MemberisDirector,
      isMaking: MemberisMaking,
      isSoundReader: MemberisSoundReader,
      isSound: MemberisSound,
      isLightReader: MemberisLightReader,
      isLight: MemberisLight,
      isPropReader: MemberisPropReader,
      isProp: MemberisProp,
      isClothReader: MemberisClothReader,
      isCloth: MemberisCloth,
      level: MemberLevel,
    },
  });
  res.json(result);
});

router.use("/session", session);

export default router;
