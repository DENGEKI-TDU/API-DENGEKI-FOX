import { PrismaClient as mainDB } from "../../prisma/client/mainDB";
import { PrismaClient as accountDB } from "../../prisma/client/accountDB";

const mainDBPrisma = new mainDB({ log: ["info"] });
const accountDBPrisma = new accountDB({ log: ["info"] });

export { mainDBPrisma, accountDBPrisma };
