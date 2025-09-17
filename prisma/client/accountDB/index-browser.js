
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.MainAccountScalarFieldEnum = {
  id: 'id',
  year: 'year',
  date: 'date',
  type: 'type',
  typeAlphabet: 'typeAlphabet',
  subtype: 'subtype',
  fixture: 'fixture',
  income: 'income',
  outcome: 'outcome'
};

exports.Prisma.HatosaiAccountScalarFieldEnum = {
  id: 'id',
  year: 'year',
  date: 'date',
  type: 'type',
  typeAlphabet: 'typeAlphabet',
  subtype: 'subtype',
  fixture: 'fixture',
  income: 'income',
  outcome: 'outcome'
};

exports.Prisma.ClubsupportAccountScalarFieldEnum = {
  id: 'id',
  year: 'year',
  date: 'date',
  type: 'type',
  typeAlphabet: 'typeAlphabet',
  subtype: 'subtype',
  fixture: 'fixture',
  income: 'income',
  outcome: 'outcome'
};

exports.Prisma.AlumniAccountScalarFieldEnum = {
  id: 'id',
  year: 'year',
  date: 'date',
  type: 'type',
  typeAlphabet: 'typeAlphabet',
  subtype: 'subtype',
  fixture: 'fixture',
  income: 'income',
  outcome: 'outcome'
};

exports.Prisma.AidScalarFieldEnum = {
  id: 'id',
  year: 'year',
  date: 'date',
  type: 'type',
  typeAlphabet: 'typeAlphabet',
  subtype: 'subtype',
  fixture: 'fixture',
  income: 'income',
  outcome: 'outcome'
};

exports.Prisma.AccessHistoryScalarFieldEnum = {
  id: 'id',
  accessDate: 'accessDate'
};

exports.Prisma.ThreadIDScalarFieldEnum = {
  id: 'id',
  hookurl: 'hookurl',
  threadID: 'threadID',
  mode: 'mode'
};

exports.Prisma.TokensScalarFieldEnum = {
  id: 'id',
  tokens: 'tokens',
  isUser: 'isUser',
  isAdmin: 'isAdmin',
  loginDate: 'loginDate',
  limit: 'limit'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  user: 'user',
  pass: 'pass',
  isAdmin: 'isAdmin',
  isUser: 'isUser'
};

exports.Prisma.OneTimeTokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  limit: 'limit'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  mainAccount: 'mainAccount',
  hatosaiAccount: 'hatosaiAccount',
  clubsupportAccount: 'clubsupportAccount',
  alumniAccount: 'alumniAccount',
  aid: 'aid',
  accessHistory: 'accessHistory',
  threadID: 'threadID',
  tokens: 'tokens',
  users: 'users',
  oneTimeToken: 'oneTimeToken'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
