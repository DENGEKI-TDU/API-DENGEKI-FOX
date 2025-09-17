
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model mainAccount
 * 
 */
export type mainAccount = $Result.DefaultSelection<Prisma.$mainAccountPayload>
/**
 * Model hatosaiAccount
 * 
 */
export type hatosaiAccount = $Result.DefaultSelection<Prisma.$hatosaiAccountPayload>
/**
 * Model clubsupportAccount
 * 
 */
export type clubsupportAccount = $Result.DefaultSelection<Prisma.$clubsupportAccountPayload>
/**
 * Model alumniAccount
 * 
 */
export type alumniAccount = $Result.DefaultSelection<Prisma.$alumniAccountPayload>
/**
 * Model aid
 * 
 */
export type aid = $Result.DefaultSelection<Prisma.$aidPayload>
/**
 * Model accessHistory
 * 
 */
export type accessHistory = $Result.DefaultSelection<Prisma.$accessHistoryPayload>
/**
 * Model threadID
 * 
 */
export type threadID = $Result.DefaultSelection<Prisma.$threadIDPayload>
/**
 * Model tokens
 * 
 */
export type tokens = $Result.DefaultSelection<Prisma.$tokensPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model oneTimeToken
 * 
 */
export type oneTimeToken = $Result.DefaultSelection<Prisma.$oneTimeTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MainAccounts
 * const mainAccounts = await prisma.mainAccount.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MainAccounts
   * const mainAccounts = await prisma.mainAccount.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.mainAccount`: Exposes CRUD operations for the **mainAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MainAccounts
    * const mainAccounts = await prisma.mainAccount.findMany()
    * ```
    */
  get mainAccount(): Prisma.mainAccountDelegate<ExtArgs>;

  /**
   * `prisma.hatosaiAccount`: Exposes CRUD operations for the **hatosaiAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HatosaiAccounts
    * const hatosaiAccounts = await prisma.hatosaiAccount.findMany()
    * ```
    */
  get hatosaiAccount(): Prisma.hatosaiAccountDelegate<ExtArgs>;

  /**
   * `prisma.clubsupportAccount`: Exposes CRUD operations for the **clubsupportAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClubsupportAccounts
    * const clubsupportAccounts = await prisma.clubsupportAccount.findMany()
    * ```
    */
  get clubsupportAccount(): Prisma.clubsupportAccountDelegate<ExtArgs>;

  /**
   * `prisma.alumniAccount`: Exposes CRUD operations for the **alumniAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlumniAccounts
    * const alumniAccounts = await prisma.alumniAccount.findMany()
    * ```
    */
  get alumniAccount(): Prisma.alumniAccountDelegate<ExtArgs>;

  /**
   * `prisma.aid`: Exposes CRUD operations for the **aid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aid
    * const aid = await prisma.aid.findMany()
    * ```
    */
  get aid(): Prisma.aidDelegate<ExtArgs>;

  /**
   * `prisma.accessHistory`: Exposes CRUD operations for the **accessHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessHistories
    * const accessHistories = await prisma.accessHistory.findMany()
    * ```
    */
  get accessHistory(): Prisma.accessHistoryDelegate<ExtArgs>;

  /**
   * `prisma.threadID`: Exposes CRUD operations for the **threadID** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ThreadIDS
    * const threadIDS = await prisma.threadID.findMany()
    * ```
    */
  get threadID(): Prisma.threadIDDelegate<ExtArgs>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.tokensDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.oneTimeToken`: Exposes CRUD operations for the **oneTimeToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OneTimeTokens
    * const oneTimeTokens = await prisma.oneTimeToken.findMany()
    * ```
    */
  get oneTimeToken(): Prisma.oneTimeTokenDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'mainAccount' | 'hatosaiAccount' | 'clubsupportAccount' | 'alumniAccount' | 'aid' | 'accessHistory' | 'threadID' | 'tokens' | 'users' | 'oneTimeToken'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      mainAccount: {
        payload: Prisma.$mainAccountPayload<ExtArgs>
        fields: Prisma.mainAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mainAccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mainAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mainAccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mainAccountPayload>
          }
          findFirst: {
            args: Prisma.mainAccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mainAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mainAccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mainAccountPayload>
          }
          findMany: {
            args: Prisma.mainAccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mainAccountPayload>[]
          }
          create: {
            args: Prisma.mainAccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mainAccountPayload>
          }
          createMany: {
            args: Prisma.mainAccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.mainAccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mainAccountPayload>
          }
          update: {
            args: Prisma.mainAccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mainAccountPayload>
          }
          deleteMany: {
            args: Prisma.mainAccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.mainAccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.mainAccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mainAccountPayload>
          }
          aggregate: {
            args: Prisma.MainAccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMainAccount>
          }
          groupBy: {
            args: Prisma.mainAccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MainAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.mainAccountCountArgs<ExtArgs>,
            result: $Utils.Optional<MainAccountCountAggregateOutputType> | number
          }
        }
      }
      hatosaiAccount: {
        payload: Prisma.$hatosaiAccountPayload<ExtArgs>
        fields: Prisma.hatosaiAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hatosaiAccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hatosaiAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hatosaiAccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hatosaiAccountPayload>
          }
          findFirst: {
            args: Prisma.hatosaiAccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hatosaiAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hatosaiAccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hatosaiAccountPayload>
          }
          findMany: {
            args: Prisma.hatosaiAccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hatosaiAccountPayload>[]
          }
          create: {
            args: Prisma.hatosaiAccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hatosaiAccountPayload>
          }
          createMany: {
            args: Prisma.hatosaiAccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.hatosaiAccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hatosaiAccountPayload>
          }
          update: {
            args: Prisma.hatosaiAccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hatosaiAccountPayload>
          }
          deleteMany: {
            args: Prisma.hatosaiAccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.hatosaiAccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.hatosaiAccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hatosaiAccountPayload>
          }
          aggregate: {
            args: Prisma.HatosaiAccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHatosaiAccount>
          }
          groupBy: {
            args: Prisma.hatosaiAccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HatosaiAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.hatosaiAccountCountArgs<ExtArgs>,
            result: $Utils.Optional<HatosaiAccountCountAggregateOutputType> | number
          }
        }
      }
      clubsupportAccount: {
        payload: Prisma.$clubsupportAccountPayload<ExtArgs>
        fields: Prisma.clubsupportAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clubsupportAccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clubsupportAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clubsupportAccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clubsupportAccountPayload>
          }
          findFirst: {
            args: Prisma.clubsupportAccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clubsupportAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clubsupportAccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clubsupportAccountPayload>
          }
          findMany: {
            args: Prisma.clubsupportAccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clubsupportAccountPayload>[]
          }
          create: {
            args: Prisma.clubsupportAccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clubsupportAccountPayload>
          }
          createMany: {
            args: Prisma.clubsupportAccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.clubsupportAccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clubsupportAccountPayload>
          }
          update: {
            args: Prisma.clubsupportAccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clubsupportAccountPayload>
          }
          deleteMany: {
            args: Prisma.clubsupportAccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.clubsupportAccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.clubsupportAccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clubsupportAccountPayload>
          }
          aggregate: {
            args: Prisma.ClubsupportAccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClubsupportAccount>
          }
          groupBy: {
            args: Prisma.clubsupportAccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClubsupportAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.clubsupportAccountCountArgs<ExtArgs>,
            result: $Utils.Optional<ClubsupportAccountCountAggregateOutputType> | number
          }
        }
      }
      alumniAccount: {
        payload: Prisma.$alumniAccountPayload<ExtArgs>
        fields: Prisma.alumniAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alumniAccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alumniAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alumniAccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alumniAccountPayload>
          }
          findFirst: {
            args: Prisma.alumniAccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alumniAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alumniAccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alumniAccountPayload>
          }
          findMany: {
            args: Prisma.alumniAccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alumniAccountPayload>[]
          }
          create: {
            args: Prisma.alumniAccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alumniAccountPayload>
          }
          createMany: {
            args: Prisma.alumniAccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.alumniAccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alumniAccountPayload>
          }
          update: {
            args: Prisma.alumniAccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alumniAccountPayload>
          }
          deleteMany: {
            args: Prisma.alumniAccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.alumniAccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.alumniAccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alumniAccountPayload>
          }
          aggregate: {
            args: Prisma.AlumniAccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlumniAccount>
          }
          groupBy: {
            args: Prisma.alumniAccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlumniAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.alumniAccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AlumniAccountCountAggregateOutputType> | number
          }
        }
      }
      aid: {
        payload: Prisma.$aidPayload<ExtArgs>
        fields: Prisma.aidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aidFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aidFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aidPayload>
          }
          findFirst: {
            args: Prisma.aidFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aidFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aidPayload>
          }
          findMany: {
            args: Prisma.aidFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aidPayload>[]
          }
          create: {
            args: Prisma.aidCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aidPayload>
          }
          createMany: {
            args: Prisma.aidCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.aidDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aidPayload>
          }
          update: {
            args: Prisma.aidUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aidPayload>
          }
          deleteMany: {
            args: Prisma.aidDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.aidUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.aidUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aidPayload>
          }
          aggregate: {
            args: Prisma.AidAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAid>
          }
          groupBy: {
            args: Prisma.aidGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AidGroupByOutputType>[]
          }
          count: {
            args: Prisma.aidCountArgs<ExtArgs>,
            result: $Utils.Optional<AidCountAggregateOutputType> | number
          }
        }
      }
      accessHistory: {
        payload: Prisma.$accessHistoryPayload<ExtArgs>
        fields: Prisma.accessHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accessHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accessHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accessHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accessHistoryPayload>
          }
          findFirst: {
            args: Prisma.accessHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accessHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accessHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accessHistoryPayload>
          }
          findMany: {
            args: Prisma.accessHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accessHistoryPayload>[]
          }
          create: {
            args: Prisma.accessHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accessHistoryPayload>
          }
          createMany: {
            args: Prisma.accessHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.accessHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accessHistoryPayload>
          }
          update: {
            args: Prisma.accessHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accessHistoryPayload>
          }
          deleteMany: {
            args: Prisma.accessHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.accessHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.accessHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accessHistoryPayload>
          }
          aggregate: {
            args: Prisma.AccessHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccessHistory>
          }
          groupBy: {
            args: Prisma.accessHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccessHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.accessHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<AccessHistoryCountAggregateOutputType> | number
          }
        }
      }
      threadID: {
        payload: Prisma.$threadIDPayload<ExtArgs>
        fields: Prisma.threadIDFieldRefs
        operations: {
          findUnique: {
            args: Prisma.threadIDFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threadIDPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.threadIDFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threadIDPayload>
          }
          findFirst: {
            args: Prisma.threadIDFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threadIDPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.threadIDFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threadIDPayload>
          }
          findMany: {
            args: Prisma.threadIDFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threadIDPayload>[]
          }
          create: {
            args: Prisma.threadIDCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threadIDPayload>
          }
          createMany: {
            args: Prisma.threadIDCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.threadIDDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threadIDPayload>
          }
          update: {
            args: Prisma.threadIDUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threadIDPayload>
          }
          deleteMany: {
            args: Prisma.threadIDDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.threadIDUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.threadIDUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threadIDPayload>
          }
          aggregate: {
            args: Prisma.ThreadIDAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateThreadID>
          }
          groupBy: {
            args: Prisma.threadIDGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ThreadIDGroupByOutputType>[]
          }
          count: {
            args: Prisma.threadIDCountArgs<ExtArgs>,
            result: $Utils.Optional<ThreadIDCountAggregateOutputType> | number
          }
        }
      }
      tokens: {
        payload: Prisma.$tokensPayload<ExtArgs>
        fields: Prisma.tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tokensFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tokensFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          findFirst: {
            args: Prisma.tokensFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tokensFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          findMany: {
            args: Prisma.tokensFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>[]
          }
          create: {
            args: Prisma.tokensCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          createMany: {
            args: Prisma.tokensCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tokensDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          update: {
            args: Prisma.tokensUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          deleteMany: {
            args: Prisma.tokensDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tokensUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tokensUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.tokensGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.tokensCountArgs<ExtArgs>,
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      oneTimeToken: {
        payload: Prisma.$oneTimeTokenPayload<ExtArgs>
        fields: Prisma.oneTimeTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.oneTimeTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$oneTimeTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.oneTimeTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$oneTimeTokenPayload>
          }
          findFirst: {
            args: Prisma.oneTimeTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$oneTimeTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.oneTimeTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$oneTimeTokenPayload>
          }
          findMany: {
            args: Prisma.oneTimeTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$oneTimeTokenPayload>[]
          }
          create: {
            args: Prisma.oneTimeTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$oneTimeTokenPayload>
          }
          createMany: {
            args: Prisma.oneTimeTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.oneTimeTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$oneTimeTokenPayload>
          }
          update: {
            args: Prisma.oneTimeTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$oneTimeTokenPayload>
          }
          deleteMany: {
            args: Prisma.oneTimeTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.oneTimeTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.oneTimeTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$oneTimeTokenPayload>
          }
          aggregate: {
            args: Prisma.OneTimeTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOneTimeToken>
          }
          groupBy: {
            args: Prisma.oneTimeTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OneTimeTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.oneTimeTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<OneTimeTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model mainAccount
   */

  export type AggregateMainAccount = {
    _count: MainAccountCountAggregateOutputType | null
    _avg: MainAccountAvgAggregateOutputType | null
    _sum: MainAccountSumAggregateOutputType | null
    _min: MainAccountMinAggregateOutputType | null
    _max: MainAccountMaxAggregateOutputType | null
  }

  export type MainAccountAvgAggregateOutputType = {
    id: number | null
    income: number | null
    outcome: number | null
  }

  export type MainAccountSumAggregateOutputType = {
    id: number | null
    income: number | null
    outcome: number | null
  }

  export type MainAccountMinAggregateOutputType = {
    id: number | null
    year: string | null
    date: Date | null
    type: string | null
    typeAlphabet: string | null
    subtype: string | null
    fixture: string | null
    income: number | null
    outcome: number | null
  }

  export type MainAccountMaxAggregateOutputType = {
    id: number | null
    year: string | null
    date: Date | null
    type: string | null
    typeAlphabet: string | null
    subtype: string | null
    fixture: string | null
    income: number | null
    outcome: number | null
  }

  export type MainAccountCountAggregateOutputType = {
    id: number
    year: number
    date: number
    type: number
    typeAlphabet: number
    subtype: number
    fixture: number
    income: number
    outcome: number
    _all: number
  }


  export type MainAccountAvgAggregateInputType = {
    id?: true
    income?: true
    outcome?: true
  }

  export type MainAccountSumAggregateInputType = {
    id?: true
    income?: true
    outcome?: true
  }

  export type MainAccountMinAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
  }

  export type MainAccountMaxAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
  }

  export type MainAccountCountAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
    _all?: true
  }

  export type MainAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mainAccount to aggregate.
     */
    where?: mainAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mainAccounts to fetch.
     */
    orderBy?: mainAccountOrderByWithRelationInput | mainAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mainAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mainAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mainAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mainAccounts
    **/
    _count?: true | MainAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MainAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MainAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MainAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MainAccountMaxAggregateInputType
  }

  export type GetMainAccountAggregateType<T extends MainAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateMainAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMainAccount[P]>
      : GetScalarType<T[P], AggregateMainAccount[P]>
  }




  export type mainAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mainAccountWhereInput
    orderBy?: mainAccountOrderByWithAggregationInput | mainAccountOrderByWithAggregationInput[]
    by: MainAccountScalarFieldEnum[] | MainAccountScalarFieldEnum
    having?: mainAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MainAccountCountAggregateInputType | true
    _avg?: MainAccountAvgAggregateInputType
    _sum?: MainAccountSumAggregateInputType
    _min?: MainAccountMinAggregateInputType
    _max?: MainAccountMaxAggregateInputType
  }

  export type MainAccountGroupByOutputType = {
    id: number
    year: string
    date: Date
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
    _count: MainAccountCountAggregateOutputType | null
    _avg: MainAccountAvgAggregateOutputType | null
    _sum: MainAccountSumAggregateOutputType | null
    _min: MainAccountMinAggregateOutputType | null
    _max: MainAccountMaxAggregateOutputType | null
  }

  type GetMainAccountGroupByPayload<T extends mainAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MainAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MainAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MainAccountGroupByOutputType[P]>
            : GetScalarType<T[P], MainAccountGroupByOutputType[P]>
        }
      >
    >


  export type mainAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    date?: boolean
    type?: boolean
    typeAlphabet?: boolean
    subtype?: boolean
    fixture?: boolean
    income?: boolean
    outcome?: boolean
  }, ExtArgs["result"]["mainAccount"]>

  export type mainAccountSelectScalar = {
    id?: boolean
    year?: boolean
    date?: boolean
    type?: boolean
    typeAlphabet?: boolean
    subtype?: boolean
    fixture?: boolean
    income?: boolean
    outcome?: boolean
  }


  export type $mainAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mainAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: string
      date: Date
      type: string
      typeAlphabet: string
      subtype: string
      fixture: string
      income: number
      outcome: number
    }, ExtArgs["result"]["mainAccount"]>
    composites: {}
  }


  type mainAccountGetPayload<S extends boolean | null | undefined | mainAccountDefaultArgs> = $Result.GetResult<Prisma.$mainAccountPayload, S>

  type mainAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mainAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MainAccountCountAggregateInputType | true
    }

  export interface mainAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mainAccount'], meta: { name: 'mainAccount' } }
    /**
     * Find zero or one MainAccount that matches the filter.
     * @param {mainAccountFindUniqueArgs} args - Arguments to find a MainAccount
     * @example
     * // Get one MainAccount
     * const mainAccount = await prisma.mainAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mainAccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, mainAccountFindUniqueArgs<ExtArgs>>
    ): Prisma__mainAccountClient<$Result.GetResult<Prisma.$mainAccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MainAccount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mainAccountFindUniqueOrThrowArgs} args - Arguments to find a MainAccount
     * @example
     * // Get one MainAccount
     * const mainAccount = await prisma.mainAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mainAccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mainAccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__mainAccountClient<$Result.GetResult<Prisma.$mainAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MainAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainAccountFindFirstArgs} args - Arguments to find a MainAccount
     * @example
     * // Get one MainAccount
     * const mainAccount = await prisma.mainAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mainAccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, mainAccountFindFirstArgs<ExtArgs>>
    ): Prisma__mainAccountClient<$Result.GetResult<Prisma.$mainAccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MainAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainAccountFindFirstOrThrowArgs} args - Arguments to find a MainAccount
     * @example
     * // Get one MainAccount
     * const mainAccount = await prisma.mainAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mainAccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mainAccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__mainAccountClient<$Result.GetResult<Prisma.$mainAccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MainAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MainAccounts
     * const mainAccounts = await prisma.mainAccount.findMany()
     * 
     * // Get first 10 MainAccounts
     * const mainAccounts = await prisma.mainAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mainAccountWithIdOnly = await prisma.mainAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mainAccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mainAccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mainAccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MainAccount.
     * @param {mainAccountCreateArgs} args - Arguments to create a MainAccount.
     * @example
     * // Create one MainAccount
     * const MainAccount = await prisma.mainAccount.create({
     *   data: {
     *     // ... data to create a MainAccount
     *   }
     * })
     * 
    **/
    create<T extends mainAccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, mainAccountCreateArgs<ExtArgs>>
    ): Prisma__mainAccountClient<$Result.GetResult<Prisma.$mainAccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MainAccounts.
     *     @param {mainAccountCreateManyArgs} args - Arguments to create many MainAccounts.
     *     @example
     *     // Create many MainAccounts
     *     const mainAccount = await prisma.mainAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mainAccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mainAccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MainAccount.
     * @param {mainAccountDeleteArgs} args - Arguments to delete one MainAccount.
     * @example
     * // Delete one MainAccount
     * const MainAccount = await prisma.mainAccount.delete({
     *   where: {
     *     // ... filter to delete one MainAccount
     *   }
     * })
     * 
    **/
    delete<T extends mainAccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, mainAccountDeleteArgs<ExtArgs>>
    ): Prisma__mainAccountClient<$Result.GetResult<Prisma.$mainAccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MainAccount.
     * @param {mainAccountUpdateArgs} args - Arguments to update one MainAccount.
     * @example
     * // Update one MainAccount
     * const mainAccount = await prisma.mainAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mainAccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, mainAccountUpdateArgs<ExtArgs>>
    ): Prisma__mainAccountClient<$Result.GetResult<Prisma.$mainAccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MainAccounts.
     * @param {mainAccountDeleteManyArgs} args - Arguments to filter MainAccounts to delete.
     * @example
     * // Delete a few MainAccounts
     * const { count } = await prisma.mainAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mainAccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mainAccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MainAccounts
     * const mainAccount = await prisma.mainAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mainAccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, mainAccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MainAccount.
     * @param {mainAccountUpsertArgs} args - Arguments to update or create a MainAccount.
     * @example
     * // Update or create a MainAccount
     * const mainAccount = await prisma.mainAccount.upsert({
     *   create: {
     *     // ... data to create a MainAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MainAccount we want to update
     *   }
     * })
    **/
    upsert<T extends mainAccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, mainAccountUpsertArgs<ExtArgs>>
    ): Prisma__mainAccountClient<$Result.GetResult<Prisma.$mainAccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MainAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainAccountCountArgs} args - Arguments to filter MainAccounts to count.
     * @example
     * // Count the number of MainAccounts
     * const count = await prisma.mainAccount.count({
     *   where: {
     *     // ... the filter for the MainAccounts we want to count
     *   }
     * })
    **/
    count<T extends mainAccountCountArgs>(
      args?: Subset<T, mainAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MainAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MainAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MainAccountAggregateArgs>(args: Subset<T, MainAccountAggregateArgs>): Prisma.PrismaPromise<GetMainAccountAggregateType<T>>

    /**
     * Group by MainAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mainAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mainAccountGroupByArgs['orderBy'] }
        : { orderBy?: mainAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mainAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMainAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mainAccount model
   */
  readonly fields: mainAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mainAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mainAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the mainAccount model
   */ 
  interface mainAccountFieldRefs {
    readonly id: FieldRef<"mainAccount", 'Int'>
    readonly year: FieldRef<"mainAccount", 'String'>
    readonly date: FieldRef<"mainAccount", 'DateTime'>
    readonly type: FieldRef<"mainAccount", 'String'>
    readonly typeAlphabet: FieldRef<"mainAccount", 'String'>
    readonly subtype: FieldRef<"mainAccount", 'String'>
    readonly fixture: FieldRef<"mainAccount", 'String'>
    readonly income: FieldRef<"mainAccount", 'Int'>
    readonly outcome: FieldRef<"mainAccount", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * mainAccount findUnique
   */
  export type mainAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mainAccount
     */
    select?: mainAccountSelect<ExtArgs> | null
    /**
     * Filter, which mainAccount to fetch.
     */
    where: mainAccountWhereUniqueInput
  }


  /**
   * mainAccount findUniqueOrThrow
   */
  export type mainAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mainAccount
     */
    select?: mainAccountSelect<ExtArgs> | null
    /**
     * Filter, which mainAccount to fetch.
     */
    where: mainAccountWhereUniqueInput
  }


  /**
   * mainAccount findFirst
   */
  export type mainAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mainAccount
     */
    select?: mainAccountSelect<ExtArgs> | null
    /**
     * Filter, which mainAccount to fetch.
     */
    where?: mainAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mainAccounts to fetch.
     */
    orderBy?: mainAccountOrderByWithRelationInput | mainAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mainAccounts.
     */
    cursor?: mainAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mainAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mainAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mainAccounts.
     */
    distinct?: MainAccountScalarFieldEnum | MainAccountScalarFieldEnum[]
  }


  /**
   * mainAccount findFirstOrThrow
   */
  export type mainAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mainAccount
     */
    select?: mainAccountSelect<ExtArgs> | null
    /**
     * Filter, which mainAccount to fetch.
     */
    where?: mainAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mainAccounts to fetch.
     */
    orderBy?: mainAccountOrderByWithRelationInput | mainAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mainAccounts.
     */
    cursor?: mainAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mainAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mainAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mainAccounts.
     */
    distinct?: MainAccountScalarFieldEnum | MainAccountScalarFieldEnum[]
  }


  /**
   * mainAccount findMany
   */
  export type mainAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mainAccount
     */
    select?: mainAccountSelect<ExtArgs> | null
    /**
     * Filter, which mainAccounts to fetch.
     */
    where?: mainAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mainAccounts to fetch.
     */
    orderBy?: mainAccountOrderByWithRelationInput | mainAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mainAccounts.
     */
    cursor?: mainAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mainAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mainAccounts.
     */
    skip?: number
    distinct?: MainAccountScalarFieldEnum | MainAccountScalarFieldEnum[]
  }


  /**
   * mainAccount create
   */
  export type mainAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mainAccount
     */
    select?: mainAccountSelect<ExtArgs> | null
    /**
     * The data needed to create a mainAccount.
     */
    data: XOR<mainAccountCreateInput, mainAccountUncheckedCreateInput>
  }


  /**
   * mainAccount createMany
   */
  export type mainAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mainAccounts.
     */
    data: mainAccountCreateManyInput | mainAccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * mainAccount update
   */
  export type mainAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mainAccount
     */
    select?: mainAccountSelect<ExtArgs> | null
    /**
     * The data needed to update a mainAccount.
     */
    data: XOR<mainAccountUpdateInput, mainAccountUncheckedUpdateInput>
    /**
     * Choose, which mainAccount to update.
     */
    where: mainAccountWhereUniqueInput
  }


  /**
   * mainAccount updateMany
   */
  export type mainAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mainAccounts.
     */
    data: XOR<mainAccountUpdateManyMutationInput, mainAccountUncheckedUpdateManyInput>
    /**
     * Filter which mainAccounts to update
     */
    where?: mainAccountWhereInput
  }


  /**
   * mainAccount upsert
   */
  export type mainAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mainAccount
     */
    select?: mainAccountSelect<ExtArgs> | null
    /**
     * The filter to search for the mainAccount to update in case it exists.
     */
    where: mainAccountWhereUniqueInput
    /**
     * In case the mainAccount found by the `where` argument doesn't exist, create a new mainAccount with this data.
     */
    create: XOR<mainAccountCreateInput, mainAccountUncheckedCreateInput>
    /**
     * In case the mainAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mainAccountUpdateInput, mainAccountUncheckedUpdateInput>
  }


  /**
   * mainAccount delete
   */
  export type mainAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mainAccount
     */
    select?: mainAccountSelect<ExtArgs> | null
    /**
     * Filter which mainAccount to delete.
     */
    where: mainAccountWhereUniqueInput
  }


  /**
   * mainAccount deleteMany
   */
  export type mainAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mainAccounts to delete
     */
    where?: mainAccountWhereInput
  }


  /**
   * mainAccount without action
   */
  export type mainAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mainAccount
     */
    select?: mainAccountSelect<ExtArgs> | null
  }



  /**
   * Model hatosaiAccount
   */

  export type AggregateHatosaiAccount = {
    _count: HatosaiAccountCountAggregateOutputType | null
    _avg: HatosaiAccountAvgAggregateOutputType | null
    _sum: HatosaiAccountSumAggregateOutputType | null
    _min: HatosaiAccountMinAggregateOutputType | null
    _max: HatosaiAccountMaxAggregateOutputType | null
  }

  export type HatosaiAccountAvgAggregateOutputType = {
    id: number | null
    income: number | null
    outcome: number | null
  }

  export type HatosaiAccountSumAggregateOutputType = {
    id: number | null
    income: number | null
    outcome: number | null
  }

  export type HatosaiAccountMinAggregateOutputType = {
    id: number | null
    year: string | null
    date: Date | null
    type: string | null
    typeAlphabet: string | null
    subtype: string | null
    fixture: string | null
    income: number | null
    outcome: number | null
  }

  export type HatosaiAccountMaxAggregateOutputType = {
    id: number | null
    year: string | null
    date: Date | null
    type: string | null
    typeAlphabet: string | null
    subtype: string | null
    fixture: string | null
    income: number | null
    outcome: number | null
  }

  export type HatosaiAccountCountAggregateOutputType = {
    id: number
    year: number
    date: number
    type: number
    typeAlphabet: number
    subtype: number
    fixture: number
    income: number
    outcome: number
    _all: number
  }


  export type HatosaiAccountAvgAggregateInputType = {
    id?: true
    income?: true
    outcome?: true
  }

  export type HatosaiAccountSumAggregateInputType = {
    id?: true
    income?: true
    outcome?: true
  }

  export type HatosaiAccountMinAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
  }

  export type HatosaiAccountMaxAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
  }

  export type HatosaiAccountCountAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
    _all?: true
  }

  export type HatosaiAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hatosaiAccount to aggregate.
     */
    where?: hatosaiAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hatosaiAccounts to fetch.
     */
    orderBy?: hatosaiAccountOrderByWithRelationInput | hatosaiAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hatosaiAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hatosaiAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hatosaiAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hatosaiAccounts
    **/
    _count?: true | HatosaiAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HatosaiAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HatosaiAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HatosaiAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HatosaiAccountMaxAggregateInputType
  }

  export type GetHatosaiAccountAggregateType<T extends HatosaiAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateHatosaiAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHatosaiAccount[P]>
      : GetScalarType<T[P], AggregateHatosaiAccount[P]>
  }




  export type hatosaiAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hatosaiAccountWhereInput
    orderBy?: hatosaiAccountOrderByWithAggregationInput | hatosaiAccountOrderByWithAggregationInput[]
    by: HatosaiAccountScalarFieldEnum[] | HatosaiAccountScalarFieldEnum
    having?: hatosaiAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HatosaiAccountCountAggregateInputType | true
    _avg?: HatosaiAccountAvgAggregateInputType
    _sum?: HatosaiAccountSumAggregateInputType
    _min?: HatosaiAccountMinAggregateInputType
    _max?: HatosaiAccountMaxAggregateInputType
  }

  export type HatosaiAccountGroupByOutputType = {
    id: number
    year: string
    date: Date
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
    _count: HatosaiAccountCountAggregateOutputType | null
    _avg: HatosaiAccountAvgAggregateOutputType | null
    _sum: HatosaiAccountSumAggregateOutputType | null
    _min: HatosaiAccountMinAggregateOutputType | null
    _max: HatosaiAccountMaxAggregateOutputType | null
  }

  type GetHatosaiAccountGroupByPayload<T extends hatosaiAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HatosaiAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HatosaiAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HatosaiAccountGroupByOutputType[P]>
            : GetScalarType<T[P], HatosaiAccountGroupByOutputType[P]>
        }
      >
    >


  export type hatosaiAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    date?: boolean
    type?: boolean
    typeAlphabet?: boolean
    subtype?: boolean
    fixture?: boolean
    income?: boolean
    outcome?: boolean
  }, ExtArgs["result"]["hatosaiAccount"]>

  export type hatosaiAccountSelectScalar = {
    id?: boolean
    year?: boolean
    date?: boolean
    type?: boolean
    typeAlphabet?: boolean
    subtype?: boolean
    fixture?: boolean
    income?: boolean
    outcome?: boolean
  }


  export type $hatosaiAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hatosaiAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: string
      date: Date
      type: string
      typeAlphabet: string
      subtype: string
      fixture: string
      income: number
      outcome: number
    }, ExtArgs["result"]["hatosaiAccount"]>
    composites: {}
  }


  type hatosaiAccountGetPayload<S extends boolean | null | undefined | hatosaiAccountDefaultArgs> = $Result.GetResult<Prisma.$hatosaiAccountPayload, S>

  type hatosaiAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<hatosaiAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HatosaiAccountCountAggregateInputType | true
    }

  export interface hatosaiAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hatosaiAccount'], meta: { name: 'hatosaiAccount' } }
    /**
     * Find zero or one HatosaiAccount that matches the filter.
     * @param {hatosaiAccountFindUniqueArgs} args - Arguments to find a HatosaiAccount
     * @example
     * // Get one HatosaiAccount
     * const hatosaiAccount = await prisma.hatosaiAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hatosaiAccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, hatosaiAccountFindUniqueArgs<ExtArgs>>
    ): Prisma__hatosaiAccountClient<$Result.GetResult<Prisma.$hatosaiAccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HatosaiAccount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {hatosaiAccountFindUniqueOrThrowArgs} args - Arguments to find a HatosaiAccount
     * @example
     * // Get one HatosaiAccount
     * const hatosaiAccount = await prisma.hatosaiAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends hatosaiAccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hatosaiAccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__hatosaiAccountClient<$Result.GetResult<Prisma.$hatosaiAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HatosaiAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hatosaiAccountFindFirstArgs} args - Arguments to find a HatosaiAccount
     * @example
     * // Get one HatosaiAccount
     * const hatosaiAccount = await prisma.hatosaiAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hatosaiAccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, hatosaiAccountFindFirstArgs<ExtArgs>>
    ): Prisma__hatosaiAccountClient<$Result.GetResult<Prisma.$hatosaiAccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HatosaiAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hatosaiAccountFindFirstOrThrowArgs} args - Arguments to find a HatosaiAccount
     * @example
     * // Get one HatosaiAccount
     * const hatosaiAccount = await prisma.hatosaiAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends hatosaiAccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hatosaiAccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__hatosaiAccountClient<$Result.GetResult<Prisma.$hatosaiAccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HatosaiAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hatosaiAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HatosaiAccounts
     * const hatosaiAccounts = await prisma.hatosaiAccount.findMany()
     * 
     * // Get first 10 HatosaiAccounts
     * const hatosaiAccounts = await prisma.hatosaiAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hatosaiAccountWithIdOnly = await prisma.hatosaiAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends hatosaiAccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hatosaiAccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hatosaiAccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HatosaiAccount.
     * @param {hatosaiAccountCreateArgs} args - Arguments to create a HatosaiAccount.
     * @example
     * // Create one HatosaiAccount
     * const HatosaiAccount = await prisma.hatosaiAccount.create({
     *   data: {
     *     // ... data to create a HatosaiAccount
     *   }
     * })
     * 
    **/
    create<T extends hatosaiAccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, hatosaiAccountCreateArgs<ExtArgs>>
    ): Prisma__hatosaiAccountClient<$Result.GetResult<Prisma.$hatosaiAccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HatosaiAccounts.
     *     @param {hatosaiAccountCreateManyArgs} args - Arguments to create many HatosaiAccounts.
     *     @example
     *     // Create many HatosaiAccounts
     *     const hatosaiAccount = await prisma.hatosaiAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends hatosaiAccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hatosaiAccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HatosaiAccount.
     * @param {hatosaiAccountDeleteArgs} args - Arguments to delete one HatosaiAccount.
     * @example
     * // Delete one HatosaiAccount
     * const HatosaiAccount = await prisma.hatosaiAccount.delete({
     *   where: {
     *     // ... filter to delete one HatosaiAccount
     *   }
     * })
     * 
    **/
    delete<T extends hatosaiAccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, hatosaiAccountDeleteArgs<ExtArgs>>
    ): Prisma__hatosaiAccountClient<$Result.GetResult<Prisma.$hatosaiAccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HatosaiAccount.
     * @param {hatosaiAccountUpdateArgs} args - Arguments to update one HatosaiAccount.
     * @example
     * // Update one HatosaiAccount
     * const hatosaiAccount = await prisma.hatosaiAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hatosaiAccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, hatosaiAccountUpdateArgs<ExtArgs>>
    ): Prisma__hatosaiAccountClient<$Result.GetResult<Prisma.$hatosaiAccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HatosaiAccounts.
     * @param {hatosaiAccountDeleteManyArgs} args - Arguments to filter HatosaiAccounts to delete.
     * @example
     * // Delete a few HatosaiAccounts
     * const { count } = await prisma.hatosaiAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hatosaiAccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hatosaiAccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HatosaiAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hatosaiAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HatosaiAccounts
     * const hatosaiAccount = await prisma.hatosaiAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hatosaiAccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, hatosaiAccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HatosaiAccount.
     * @param {hatosaiAccountUpsertArgs} args - Arguments to update or create a HatosaiAccount.
     * @example
     * // Update or create a HatosaiAccount
     * const hatosaiAccount = await prisma.hatosaiAccount.upsert({
     *   create: {
     *     // ... data to create a HatosaiAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HatosaiAccount we want to update
     *   }
     * })
    **/
    upsert<T extends hatosaiAccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, hatosaiAccountUpsertArgs<ExtArgs>>
    ): Prisma__hatosaiAccountClient<$Result.GetResult<Prisma.$hatosaiAccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HatosaiAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hatosaiAccountCountArgs} args - Arguments to filter HatosaiAccounts to count.
     * @example
     * // Count the number of HatosaiAccounts
     * const count = await prisma.hatosaiAccount.count({
     *   where: {
     *     // ... the filter for the HatosaiAccounts we want to count
     *   }
     * })
    **/
    count<T extends hatosaiAccountCountArgs>(
      args?: Subset<T, hatosaiAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HatosaiAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HatosaiAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HatosaiAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HatosaiAccountAggregateArgs>(args: Subset<T, HatosaiAccountAggregateArgs>): Prisma.PrismaPromise<GetHatosaiAccountAggregateType<T>>

    /**
     * Group by HatosaiAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hatosaiAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hatosaiAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hatosaiAccountGroupByArgs['orderBy'] }
        : { orderBy?: hatosaiAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hatosaiAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHatosaiAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hatosaiAccount model
   */
  readonly fields: hatosaiAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hatosaiAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hatosaiAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the hatosaiAccount model
   */ 
  interface hatosaiAccountFieldRefs {
    readonly id: FieldRef<"hatosaiAccount", 'Int'>
    readonly year: FieldRef<"hatosaiAccount", 'String'>
    readonly date: FieldRef<"hatosaiAccount", 'DateTime'>
    readonly type: FieldRef<"hatosaiAccount", 'String'>
    readonly typeAlphabet: FieldRef<"hatosaiAccount", 'String'>
    readonly subtype: FieldRef<"hatosaiAccount", 'String'>
    readonly fixture: FieldRef<"hatosaiAccount", 'String'>
    readonly income: FieldRef<"hatosaiAccount", 'Int'>
    readonly outcome: FieldRef<"hatosaiAccount", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * hatosaiAccount findUnique
   */
  export type hatosaiAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hatosaiAccount
     */
    select?: hatosaiAccountSelect<ExtArgs> | null
    /**
     * Filter, which hatosaiAccount to fetch.
     */
    where: hatosaiAccountWhereUniqueInput
  }


  /**
   * hatosaiAccount findUniqueOrThrow
   */
  export type hatosaiAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hatosaiAccount
     */
    select?: hatosaiAccountSelect<ExtArgs> | null
    /**
     * Filter, which hatosaiAccount to fetch.
     */
    where: hatosaiAccountWhereUniqueInput
  }


  /**
   * hatosaiAccount findFirst
   */
  export type hatosaiAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hatosaiAccount
     */
    select?: hatosaiAccountSelect<ExtArgs> | null
    /**
     * Filter, which hatosaiAccount to fetch.
     */
    where?: hatosaiAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hatosaiAccounts to fetch.
     */
    orderBy?: hatosaiAccountOrderByWithRelationInput | hatosaiAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hatosaiAccounts.
     */
    cursor?: hatosaiAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hatosaiAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hatosaiAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hatosaiAccounts.
     */
    distinct?: HatosaiAccountScalarFieldEnum | HatosaiAccountScalarFieldEnum[]
  }


  /**
   * hatosaiAccount findFirstOrThrow
   */
  export type hatosaiAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hatosaiAccount
     */
    select?: hatosaiAccountSelect<ExtArgs> | null
    /**
     * Filter, which hatosaiAccount to fetch.
     */
    where?: hatosaiAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hatosaiAccounts to fetch.
     */
    orderBy?: hatosaiAccountOrderByWithRelationInput | hatosaiAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hatosaiAccounts.
     */
    cursor?: hatosaiAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hatosaiAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hatosaiAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hatosaiAccounts.
     */
    distinct?: HatosaiAccountScalarFieldEnum | HatosaiAccountScalarFieldEnum[]
  }


  /**
   * hatosaiAccount findMany
   */
  export type hatosaiAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hatosaiAccount
     */
    select?: hatosaiAccountSelect<ExtArgs> | null
    /**
     * Filter, which hatosaiAccounts to fetch.
     */
    where?: hatosaiAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hatosaiAccounts to fetch.
     */
    orderBy?: hatosaiAccountOrderByWithRelationInput | hatosaiAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hatosaiAccounts.
     */
    cursor?: hatosaiAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hatosaiAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hatosaiAccounts.
     */
    skip?: number
    distinct?: HatosaiAccountScalarFieldEnum | HatosaiAccountScalarFieldEnum[]
  }


  /**
   * hatosaiAccount create
   */
  export type hatosaiAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hatosaiAccount
     */
    select?: hatosaiAccountSelect<ExtArgs> | null
    /**
     * The data needed to create a hatosaiAccount.
     */
    data: XOR<hatosaiAccountCreateInput, hatosaiAccountUncheckedCreateInput>
  }


  /**
   * hatosaiAccount createMany
   */
  export type hatosaiAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hatosaiAccounts.
     */
    data: hatosaiAccountCreateManyInput | hatosaiAccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * hatosaiAccount update
   */
  export type hatosaiAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hatosaiAccount
     */
    select?: hatosaiAccountSelect<ExtArgs> | null
    /**
     * The data needed to update a hatosaiAccount.
     */
    data: XOR<hatosaiAccountUpdateInput, hatosaiAccountUncheckedUpdateInput>
    /**
     * Choose, which hatosaiAccount to update.
     */
    where: hatosaiAccountWhereUniqueInput
  }


  /**
   * hatosaiAccount updateMany
   */
  export type hatosaiAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hatosaiAccounts.
     */
    data: XOR<hatosaiAccountUpdateManyMutationInput, hatosaiAccountUncheckedUpdateManyInput>
    /**
     * Filter which hatosaiAccounts to update
     */
    where?: hatosaiAccountWhereInput
  }


  /**
   * hatosaiAccount upsert
   */
  export type hatosaiAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hatosaiAccount
     */
    select?: hatosaiAccountSelect<ExtArgs> | null
    /**
     * The filter to search for the hatosaiAccount to update in case it exists.
     */
    where: hatosaiAccountWhereUniqueInput
    /**
     * In case the hatosaiAccount found by the `where` argument doesn't exist, create a new hatosaiAccount with this data.
     */
    create: XOR<hatosaiAccountCreateInput, hatosaiAccountUncheckedCreateInput>
    /**
     * In case the hatosaiAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hatosaiAccountUpdateInput, hatosaiAccountUncheckedUpdateInput>
  }


  /**
   * hatosaiAccount delete
   */
  export type hatosaiAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hatosaiAccount
     */
    select?: hatosaiAccountSelect<ExtArgs> | null
    /**
     * Filter which hatosaiAccount to delete.
     */
    where: hatosaiAccountWhereUniqueInput
  }


  /**
   * hatosaiAccount deleteMany
   */
  export type hatosaiAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hatosaiAccounts to delete
     */
    where?: hatosaiAccountWhereInput
  }


  /**
   * hatosaiAccount without action
   */
  export type hatosaiAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hatosaiAccount
     */
    select?: hatosaiAccountSelect<ExtArgs> | null
  }



  /**
   * Model clubsupportAccount
   */

  export type AggregateClubsupportAccount = {
    _count: ClubsupportAccountCountAggregateOutputType | null
    _avg: ClubsupportAccountAvgAggregateOutputType | null
    _sum: ClubsupportAccountSumAggregateOutputType | null
    _min: ClubsupportAccountMinAggregateOutputType | null
    _max: ClubsupportAccountMaxAggregateOutputType | null
  }

  export type ClubsupportAccountAvgAggregateOutputType = {
    id: number | null
    income: number | null
    outcome: number | null
  }

  export type ClubsupportAccountSumAggregateOutputType = {
    id: number | null
    income: number | null
    outcome: number | null
  }

  export type ClubsupportAccountMinAggregateOutputType = {
    id: number | null
    year: string | null
    date: Date | null
    type: string | null
    typeAlphabet: string | null
    subtype: string | null
    fixture: string | null
    income: number | null
    outcome: number | null
  }

  export type ClubsupportAccountMaxAggregateOutputType = {
    id: number | null
    year: string | null
    date: Date | null
    type: string | null
    typeAlphabet: string | null
    subtype: string | null
    fixture: string | null
    income: number | null
    outcome: number | null
  }

  export type ClubsupportAccountCountAggregateOutputType = {
    id: number
    year: number
    date: number
    type: number
    typeAlphabet: number
    subtype: number
    fixture: number
    income: number
    outcome: number
    _all: number
  }


  export type ClubsupportAccountAvgAggregateInputType = {
    id?: true
    income?: true
    outcome?: true
  }

  export type ClubsupportAccountSumAggregateInputType = {
    id?: true
    income?: true
    outcome?: true
  }

  export type ClubsupportAccountMinAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
  }

  export type ClubsupportAccountMaxAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
  }

  export type ClubsupportAccountCountAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
    _all?: true
  }

  export type ClubsupportAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clubsupportAccount to aggregate.
     */
    where?: clubsupportAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubsupportAccounts to fetch.
     */
    orderBy?: clubsupportAccountOrderByWithRelationInput | clubsupportAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clubsupportAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubsupportAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubsupportAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clubsupportAccounts
    **/
    _count?: true | ClubsupportAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClubsupportAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClubsupportAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubsupportAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubsupportAccountMaxAggregateInputType
  }

  export type GetClubsupportAccountAggregateType<T extends ClubsupportAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateClubsupportAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClubsupportAccount[P]>
      : GetScalarType<T[P], AggregateClubsupportAccount[P]>
  }




  export type clubsupportAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clubsupportAccountWhereInput
    orderBy?: clubsupportAccountOrderByWithAggregationInput | clubsupportAccountOrderByWithAggregationInput[]
    by: ClubsupportAccountScalarFieldEnum[] | ClubsupportAccountScalarFieldEnum
    having?: clubsupportAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubsupportAccountCountAggregateInputType | true
    _avg?: ClubsupportAccountAvgAggregateInputType
    _sum?: ClubsupportAccountSumAggregateInputType
    _min?: ClubsupportAccountMinAggregateInputType
    _max?: ClubsupportAccountMaxAggregateInputType
  }

  export type ClubsupportAccountGroupByOutputType = {
    id: number
    year: string
    date: Date
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
    _count: ClubsupportAccountCountAggregateOutputType | null
    _avg: ClubsupportAccountAvgAggregateOutputType | null
    _sum: ClubsupportAccountSumAggregateOutputType | null
    _min: ClubsupportAccountMinAggregateOutputType | null
    _max: ClubsupportAccountMaxAggregateOutputType | null
  }

  type GetClubsupportAccountGroupByPayload<T extends clubsupportAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubsupportAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubsupportAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubsupportAccountGroupByOutputType[P]>
            : GetScalarType<T[P], ClubsupportAccountGroupByOutputType[P]>
        }
      >
    >


  export type clubsupportAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    date?: boolean
    type?: boolean
    typeAlphabet?: boolean
    subtype?: boolean
    fixture?: boolean
    income?: boolean
    outcome?: boolean
  }, ExtArgs["result"]["clubsupportAccount"]>

  export type clubsupportAccountSelectScalar = {
    id?: boolean
    year?: boolean
    date?: boolean
    type?: boolean
    typeAlphabet?: boolean
    subtype?: boolean
    fixture?: boolean
    income?: boolean
    outcome?: boolean
  }


  export type $clubsupportAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clubsupportAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: string
      date: Date
      type: string
      typeAlphabet: string
      subtype: string
      fixture: string
      income: number
      outcome: number
    }, ExtArgs["result"]["clubsupportAccount"]>
    composites: {}
  }


  type clubsupportAccountGetPayload<S extends boolean | null | undefined | clubsupportAccountDefaultArgs> = $Result.GetResult<Prisma.$clubsupportAccountPayload, S>

  type clubsupportAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clubsupportAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClubsupportAccountCountAggregateInputType | true
    }

  export interface clubsupportAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clubsupportAccount'], meta: { name: 'clubsupportAccount' } }
    /**
     * Find zero or one ClubsupportAccount that matches the filter.
     * @param {clubsupportAccountFindUniqueArgs} args - Arguments to find a ClubsupportAccount
     * @example
     * // Get one ClubsupportAccount
     * const clubsupportAccount = await prisma.clubsupportAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends clubsupportAccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clubsupportAccountFindUniqueArgs<ExtArgs>>
    ): Prisma__clubsupportAccountClient<$Result.GetResult<Prisma.$clubsupportAccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ClubsupportAccount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {clubsupportAccountFindUniqueOrThrowArgs} args - Arguments to find a ClubsupportAccount
     * @example
     * // Get one ClubsupportAccount
     * const clubsupportAccount = await prisma.clubsupportAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends clubsupportAccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clubsupportAccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__clubsupportAccountClient<$Result.GetResult<Prisma.$clubsupportAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ClubsupportAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsupportAccountFindFirstArgs} args - Arguments to find a ClubsupportAccount
     * @example
     * // Get one ClubsupportAccount
     * const clubsupportAccount = await prisma.clubsupportAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends clubsupportAccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clubsupportAccountFindFirstArgs<ExtArgs>>
    ): Prisma__clubsupportAccountClient<$Result.GetResult<Prisma.$clubsupportAccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ClubsupportAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsupportAccountFindFirstOrThrowArgs} args - Arguments to find a ClubsupportAccount
     * @example
     * // Get one ClubsupportAccount
     * const clubsupportAccount = await prisma.clubsupportAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends clubsupportAccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clubsupportAccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__clubsupportAccountClient<$Result.GetResult<Prisma.$clubsupportAccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ClubsupportAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsupportAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClubsupportAccounts
     * const clubsupportAccounts = await prisma.clubsupportAccount.findMany()
     * 
     * // Get first 10 ClubsupportAccounts
     * const clubsupportAccounts = await prisma.clubsupportAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubsupportAccountWithIdOnly = await prisma.clubsupportAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends clubsupportAccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clubsupportAccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clubsupportAccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ClubsupportAccount.
     * @param {clubsupportAccountCreateArgs} args - Arguments to create a ClubsupportAccount.
     * @example
     * // Create one ClubsupportAccount
     * const ClubsupportAccount = await prisma.clubsupportAccount.create({
     *   data: {
     *     // ... data to create a ClubsupportAccount
     *   }
     * })
     * 
    **/
    create<T extends clubsupportAccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clubsupportAccountCreateArgs<ExtArgs>>
    ): Prisma__clubsupportAccountClient<$Result.GetResult<Prisma.$clubsupportAccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ClubsupportAccounts.
     *     @param {clubsupportAccountCreateManyArgs} args - Arguments to create many ClubsupportAccounts.
     *     @example
     *     // Create many ClubsupportAccounts
     *     const clubsupportAccount = await prisma.clubsupportAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends clubsupportAccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clubsupportAccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClubsupportAccount.
     * @param {clubsupportAccountDeleteArgs} args - Arguments to delete one ClubsupportAccount.
     * @example
     * // Delete one ClubsupportAccount
     * const ClubsupportAccount = await prisma.clubsupportAccount.delete({
     *   where: {
     *     // ... filter to delete one ClubsupportAccount
     *   }
     * })
     * 
    **/
    delete<T extends clubsupportAccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clubsupportAccountDeleteArgs<ExtArgs>>
    ): Prisma__clubsupportAccountClient<$Result.GetResult<Prisma.$clubsupportAccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ClubsupportAccount.
     * @param {clubsupportAccountUpdateArgs} args - Arguments to update one ClubsupportAccount.
     * @example
     * // Update one ClubsupportAccount
     * const clubsupportAccount = await prisma.clubsupportAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends clubsupportAccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clubsupportAccountUpdateArgs<ExtArgs>>
    ): Prisma__clubsupportAccountClient<$Result.GetResult<Prisma.$clubsupportAccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ClubsupportAccounts.
     * @param {clubsupportAccountDeleteManyArgs} args - Arguments to filter ClubsupportAccounts to delete.
     * @example
     * // Delete a few ClubsupportAccounts
     * const { count } = await prisma.clubsupportAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends clubsupportAccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clubsupportAccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClubsupportAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsupportAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClubsupportAccounts
     * const clubsupportAccount = await prisma.clubsupportAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends clubsupportAccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clubsupportAccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClubsupportAccount.
     * @param {clubsupportAccountUpsertArgs} args - Arguments to update or create a ClubsupportAccount.
     * @example
     * // Update or create a ClubsupportAccount
     * const clubsupportAccount = await prisma.clubsupportAccount.upsert({
     *   create: {
     *     // ... data to create a ClubsupportAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClubsupportAccount we want to update
     *   }
     * })
    **/
    upsert<T extends clubsupportAccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clubsupportAccountUpsertArgs<ExtArgs>>
    ): Prisma__clubsupportAccountClient<$Result.GetResult<Prisma.$clubsupportAccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ClubsupportAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsupportAccountCountArgs} args - Arguments to filter ClubsupportAccounts to count.
     * @example
     * // Count the number of ClubsupportAccounts
     * const count = await prisma.clubsupportAccount.count({
     *   where: {
     *     // ... the filter for the ClubsupportAccounts we want to count
     *   }
     * })
    **/
    count<T extends clubsupportAccountCountArgs>(
      args?: Subset<T, clubsupportAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubsupportAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClubsupportAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubsupportAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClubsupportAccountAggregateArgs>(args: Subset<T, ClubsupportAccountAggregateArgs>): Prisma.PrismaPromise<GetClubsupportAccountAggregateType<T>>

    /**
     * Group by ClubsupportAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clubsupportAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clubsupportAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clubsupportAccountGroupByArgs['orderBy'] }
        : { orderBy?: clubsupportAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clubsupportAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubsupportAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clubsupportAccount model
   */
  readonly fields: clubsupportAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clubsupportAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clubsupportAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the clubsupportAccount model
   */ 
  interface clubsupportAccountFieldRefs {
    readonly id: FieldRef<"clubsupportAccount", 'Int'>
    readonly year: FieldRef<"clubsupportAccount", 'String'>
    readonly date: FieldRef<"clubsupportAccount", 'DateTime'>
    readonly type: FieldRef<"clubsupportAccount", 'String'>
    readonly typeAlphabet: FieldRef<"clubsupportAccount", 'String'>
    readonly subtype: FieldRef<"clubsupportAccount", 'String'>
    readonly fixture: FieldRef<"clubsupportAccount", 'String'>
    readonly income: FieldRef<"clubsupportAccount", 'Int'>
    readonly outcome: FieldRef<"clubsupportAccount", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * clubsupportAccount findUnique
   */
  export type clubsupportAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubsupportAccount
     */
    select?: clubsupportAccountSelect<ExtArgs> | null
    /**
     * Filter, which clubsupportAccount to fetch.
     */
    where: clubsupportAccountWhereUniqueInput
  }


  /**
   * clubsupportAccount findUniqueOrThrow
   */
  export type clubsupportAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubsupportAccount
     */
    select?: clubsupportAccountSelect<ExtArgs> | null
    /**
     * Filter, which clubsupportAccount to fetch.
     */
    where: clubsupportAccountWhereUniqueInput
  }


  /**
   * clubsupportAccount findFirst
   */
  export type clubsupportAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubsupportAccount
     */
    select?: clubsupportAccountSelect<ExtArgs> | null
    /**
     * Filter, which clubsupportAccount to fetch.
     */
    where?: clubsupportAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubsupportAccounts to fetch.
     */
    orderBy?: clubsupportAccountOrderByWithRelationInput | clubsupportAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clubsupportAccounts.
     */
    cursor?: clubsupportAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubsupportAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubsupportAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clubsupportAccounts.
     */
    distinct?: ClubsupportAccountScalarFieldEnum | ClubsupportAccountScalarFieldEnum[]
  }


  /**
   * clubsupportAccount findFirstOrThrow
   */
  export type clubsupportAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubsupportAccount
     */
    select?: clubsupportAccountSelect<ExtArgs> | null
    /**
     * Filter, which clubsupportAccount to fetch.
     */
    where?: clubsupportAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubsupportAccounts to fetch.
     */
    orderBy?: clubsupportAccountOrderByWithRelationInput | clubsupportAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clubsupportAccounts.
     */
    cursor?: clubsupportAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubsupportAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubsupportAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clubsupportAccounts.
     */
    distinct?: ClubsupportAccountScalarFieldEnum | ClubsupportAccountScalarFieldEnum[]
  }


  /**
   * clubsupportAccount findMany
   */
  export type clubsupportAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubsupportAccount
     */
    select?: clubsupportAccountSelect<ExtArgs> | null
    /**
     * Filter, which clubsupportAccounts to fetch.
     */
    where?: clubsupportAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clubsupportAccounts to fetch.
     */
    orderBy?: clubsupportAccountOrderByWithRelationInput | clubsupportAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clubsupportAccounts.
     */
    cursor?: clubsupportAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clubsupportAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clubsupportAccounts.
     */
    skip?: number
    distinct?: ClubsupportAccountScalarFieldEnum | ClubsupportAccountScalarFieldEnum[]
  }


  /**
   * clubsupportAccount create
   */
  export type clubsupportAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubsupportAccount
     */
    select?: clubsupportAccountSelect<ExtArgs> | null
    /**
     * The data needed to create a clubsupportAccount.
     */
    data: XOR<clubsupportAccountCreateInput, clubsupportAccountUncheckedCreateInput>
  }


  /**
   * clubsupportAccount createMany
   */
  export type clubsupportAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clubsupportAccounts.
     */
    data: clubsupportAccountCreateManyInput | clubsupportAccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * clubsupportAccount update
   */
  export type clubsupportAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubsupportAccount
     */
    select?: clubsupportAccountSelect<ExtArgs> | null
    /**
     * The data needed to update a clubsupportAccount.
     */
    data: XOR<clubsupportAccountUpdateInput, clubsupportAccountUncheckedUpdateInput>
    /**
     * Choose, which clubsupportAccount to update.
     */
    where: clubsupportAccountWhereUniqueInput
  }


  /**
   * clubsupportAccount updateMany
   */
  export type clubsupportAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clubsupportAccounts.
     */
    data: XOR<clubsupportAccountUpdateManyMutationInput, clubsupportAccountUncheckedUpdateManyInput>
    /**
     * Filter which clubsupportAccounts to update
     */
    where?: clubsupportAccountWhereInput
  }


  /**
   * clubsupportAccount upsert
   */
  export type clubsupportAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubsupportAccount
     */
    select?: clubsupportAccountSelect<ExtArgs> | null
    /**
     * The filter to search for the clubsupportAccount to update in case it exists.
     */
    where: clubsupportAccountWhereUniqueInput
    /**
     * In case the clubsupportAccount found by the `where` argument doesn't exist, create a new clubsupportAccount with this data.
     */
    create: XOR<clubsupportAccountCreateInput, clubsupportAccountUncheckedCreateInput>
    /**
     * In case the clubsupportAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clubsupportAccountUpdateInput, clubsupportAccountUncheckedUpdateInput>
  }


  /**
   * clubsupportAccount delete
   */
  export type clubsupportAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubsupportAccount
     */
    select?: clubsupportAccountSelect<ExtArgs> | null
    /**
     * Filter which clubsupportAccount to delete.
     */
    where: clubsupportAccountWhereUniqueInput
  }


  /**
   * clubsupportAccount deleteMany
   */
  export type clubsupportAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clubsupportAccounts to delete
     */
    where?: clubsupportAccountWhereInput
  }


  /**
   * clubsupportAccount without action
   */
  export type clubsupportAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clubsupportAccount
     */
    select?: clubsupportAccountSelect<ExtArgs> | null
  }



  /**
   * Model alumniAccount
   */

  export type AggregateAlumniAccount = {
    _count: AlumniAccountCountAggregateOutputType | null
    _avg: AlumniAccountAvgAggregateOutputType | null
    _sum: AlumniAccountSumAggregateOutputType | null
    _min: AlumniAccountMinAggregateOutputType | null
    _max: AlumniAccountMaxAggregateOutputType | null
  }

  export type AlumniAccountAvgAggregateOutputType = {
    id: number | null
    income: number | null
    outcome: number | null
  }

  export type AlumniAccountSumAggregateOutputType = {
    id: number | null
    income: number | null
    outcome: number | null
  }

  export type AlumniAccountMinAggregateOutputType = {
    id: number | null
    year: string | null
    date: Date | null
    type: string | null
    typeAlphabet: string | null
    subtype: string | null
    fixture: string | null
    income: number | null
    outcome: number | null
  }

  export type AlumniAccountMaxAggregateOutputType = {
    id: number | null
    year: string | null
    date: Date | null
    type: string | null
    typeAlphabet: string | null
    subtype: string | null
    fixture: string | null
    income: number | null
    outcome: number | null
  }

  export type AlumniAccountCountAggregateOutputType = {
    id: number
    year: number
    date: number
    type: number
    typeAlphabet: number
    subtype: number
    fixture: number
    income: number
    outcome: number
    _all: number
  }


  export type AlumniAccountAvgAggregateInputType = {
    id?: true
    income?: true
    outcome?: true
  }

  export type AlumniAccountSumAggregateInputType = {
    id?: true
    income?: true
    outcome?: true
  }

  export type AlumniAccountMinAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
  }

  export type AlumniAccountMaxAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
  }

  export type AlumniAccountCountAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
    _all?: true
  }

  export type AlumniAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alumniAccount to aggregate.
     */
    where?: alumniAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumniAccounts to fetch.
     */
    orderBy?: alumniAccountOrderByWithRelationInput | alumniAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alumniAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumniAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumniAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alumniAccounts
    **/
    _count?: true | AlumniAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlumniAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlumniAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumniAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumniAccountMaxAggregateInputType
  }

  export type GetAlumniAccountAggregateType<T extends AlumniAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumniAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumniAccount[P]>
      : GetScalarType<T[P], AggregateAlumniAccount[P]>
  }




  export type alumniAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alumniAccountWhereInput
    orderBy?: alumniAccountOrderByWithAggregationInput | alumniAccountOrderByWithAggregationInput[]
    by: AlumniAccountScalarFieldEnum[] | AlumniAccountScalarFieldEnum
    having?: alumniAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumniAccountCountAggregateInputType | true
    _avg?: AlumniAccountAvgAggregateInputType
    _sum?: AlumniAccountSumAggregateInputType
    _min?: AlumniAccountMinAggregateInputType
    _max?: AlumniAccountMaxAggregateInputType
  }

  export type AlumniAccountGroupByOutputType = {
    id: number
    year: string
    date: Date
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
    _count: AlumniAccountCountAggregateOutputType | null
    _avg: AlumniAccountAvgAggregateOutputType | null
    _sum: AlumniAccountSumAggregateOutputType | null
    _min: AlumniAccountMinAggregateOutputType | null
    _max: AlumniAccountMaxAggregateOutputType | null
  }

  type GetAlumniAccountGroupByPayload<T extends alumniAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumniAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumniAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumniAccountGroupByOutputType[P]>
            : GetScalarType<T[P], AlumniAccountGroupByOutputType[P]>
        }
      >
    >


  export type alumniAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    date?: boolean
    type?: boolean
    typeAlphabet?: boolean
    subtype?: boolean
    fixture?: boolean
    income?: boolean
    outcome?: boolean
  }, ExtArgs["result"]["alumniAccount"]>

  export type alumniAccountSelectScalar = {
    id?: boolean
    year?: boolean
    date?: boolean
    type?: boolean
    typeAlphabet?: boolean
    subtype?: boolean
    fixture?: boolean
    income?: boolean
    outcome?: boolean
  }


  export type $alumniAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alumniAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: string
      date: Date
      type: string
      typeAlphabet: string
      subtype: string
      fixture: string
      income: number
      outcome: number
    }, ExtArgs["result"]["alumniAccount"]>
    composites: {}
  }


  type alumniAccountGetPayload<S extends boolean | null | undefined | alumniAccountDefaultArgs> = $Result.GetResult<Prisma.$alumniAccountPayload, S>

  type alumniAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<alumniAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlumniAccountCountAggregateInputType | true
    }

  export interface alumniAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alumniAccount'], meta: { name: 'alumniAccount' } }
    /**
     * Find zero or one AlumniAccount that matches the filter.
     * @param {alumniAccountFindUniqueArgs} args - Arguments to find a AlumniAccount
     * @example
     * // Get one AlumniAccount
     * const alumniAccount = await prisma.alumniAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends alumniAccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, alumniAccountFindUniqueArgs<ExtArgs>>
    ): Prisma__alumniAccountClient<$Result.GetResult<Prisma.$alumniAccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AlumniAccount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {alumniAccountFindUniqueOrThrowArgs} args - Arguments to find a AlumniAccount
     * @example
     * // Get one AlumniAccount
     * const alumniAccount = await prisma.alumniAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends alumniAccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, alumniAccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__alumniAccountClient<$Result.GetResult<Prisma.$alumniAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AlumniAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniAccountFindFirstArgs} args - Arguments to find a AlumniAccount
     * @example
     * // Get one AlumniAccount
     * const alumniAccount = await prisma.alumniAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends alumniAccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, alumniAccountFindFirstArgs<ExtArgs>>
    ): Prisma__alumniAccountClient<$Result.GetResult<Prisma.$alumniAccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AlumniAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniAccountFindFirstOrThrowArgs} args - Arguments to find a AlumniAccount
     * @example
     * // Get one AlumniAccount
     * const alumniAccount = await prisma.alumniAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends alumniAccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, alumniAccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__alumniAccountClient<$Result.GetResult<Prisma.$alumniAccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AlumniAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlumniAccounts
     * const alumniAccounts = await prisma.alumniAccount.findMany()
     * 
     * // Get first 10 AlumniAccounts
     * const alumniAccounts = await prisma.alumniAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alumniAccountWithIdOnly = await prisma.alumniAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends alumniAccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, alumniAccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alumniAccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AlumniAccount.
     * @param {alumniAccountCreateArgs} args - Arguments to create a AlumniAccount.
     * @example
     * // Create one AlumniAccount
     * const AlumniAccount = await prisma.alumniAccount.create({
     *   data: {
     *     // ... data to create a AlumniAccount
     *   }
     * })
     * 
    **/
    create<T extends alumniAccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, alumniAccountCreateArgs<ExtArgs>>
    ): Prisma__alumniAccountClient<$Result.GetResult<Prisma.$alumniAccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AlumniAccounts.
     *     @param {alumniAccountCreateManyArgs} args - Arguments to create many AlumniAccounts.
     *     @example
     *     // Create many AlumniAccounts
     *     const alumniAccount = await prisma.alumniAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends alumniAccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, alumniAccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlumniAccount.
     * @param {alumniAccountDeleteArgs} args - Arguments to delete one AlumniAccount.
     * @example
     * // Delete one AlumniAccount
     * const AlumniAccount = await prisma.alumniAccount.delete({
     *   where: {
     *     // ... filter to delete one AlumniAccount
     *   }
     * })
     * 
    **/
    delete<T extends alumniAccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, alumniAccountDeleteArgs<ExtArgs>>
    ): Prisma__alumniAccountClient<$Result.GetResult<Prisma.$alumniAccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AlumniAccount.
     * @param {alumniAccountUpdateArgs} args - Arguments to update one AlumniAccount.
     * @example
     * // Update one AlumniAccount
     * const alumniAccount = await prisma.alumniAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends alumniAccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, alumniAccountUpdateArgs<ExtArgs>>
    ): Prisma__alumniAccountClient<$Result.GetResult<Prisma.$alumniAccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AlumniAccounts.
     * @param {alumniAccountDeleteManyArgs} args - Arguments to filter AlumniAccounts to delete.
     * @example
     * // Delete a few AlumniAccounts
     * const { count } = await prisma.alumniAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends alumniAccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, alumniAccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlumniAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlumniAccounts
     * const alumniAccount = await prisma.alumniAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends alumniAccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, alumniAccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlumniAccount.
     * @param {alumniAccountUpsertArgs} args - Arguments to update or create a AlumniAccount.
     * @example
     * // Update or create a AlumniAccount
     * const alumniAccount = await prisma.alumniAccount.upsert({
     *   create: {
     *     // ... data to create a AlumniAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlumniAccount we want to update
     *   }
     * })
    **/
    upsert<T extends alumniAccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, alumniAccountUpsertArgs<ExtArgs>>
    ): Prisma__alumniAccountClient<$Result.GetResult<Prisma.$alumniAccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AlumniAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniAccountCountArgs} args - Arguments to filter AlumniAccounts to count.
     * @example
     * // Count the number of AlumniAccounts
     * const count = await prisma.alumniAccount.count({
     *   where: {
     *     // ... the filter for the AlumniAccounts we want to count
     *   }
     * })
    **/
    count<T extends alumniAccountCountArgs>(
      args?: Subset<T, alumniAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumniAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlumniAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlumniAccountAggregateArgs>(args: Subset<T, AlumniAccountAggregateArgs>): Prisma.PrismaPromise<GetAlumniAccountAggregateType<T>>

    /**
     * Group by AlumniAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends alumniAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alumniAccountGroupByArgs['orderBy'] }
        : { orderBy?: alumniAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, alumniAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumniAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alumniAccount model
   */
  readonly fields: alumniAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alumniAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alumniAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the alumniAccount model
   */ 
  interface alumniAccountFieldRefs {
    readonly id: FieldRef<"alumniAccount", 'Int'>
    readonly year: FieldRef<"alumniAccount", 'String'>
    readonly date: FieldRef<"alumniAccount", 'DateTime'>
    readonly type: FieldRef<"alumniAccount", 'String'>
    readonly typeAlphabet: FieldRef<"alumniAccount", 'String'>
    readonly subtype: FieldRef<"alumniAccount", 'String'>
    readonly fixture: FieldRef<"alumniAccount", 'String'>
    readonly income: FieldRef<"alumniAccount", 'Int'>
    readonly outcome: FieldRef<"alumniAccount", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * alumniAccount findUnique
   */
  export type alumniAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumniAccount
     */
    select?: alumniAccountSelect<ExtArgs> | null
    /**
     * Filter, which alumniAccount to fetch.
     */
    where: alumniAccountWhereUniqueInput
  }


  /**
   * alumniAccount findUniqueOrThrow
   */
  export type alumniAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumniAccount
     */
    select?: alumniAccountSelect<ExtArgs> | null
    /**
     * Filter, which alumniAccount to fetch.
     */
    where: alumniAccountWhereUniqueInput
  }


  /**
   * alumniAccount findFirst
   */
  export type alumniAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumniAccount
     */
    select?: alumniAccountSelect<ExtArgs> | null
    /**
     * Filter, which alumniAccount to fetch.
     */
    where?: alumniAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumniAccounts to fetch.
     */
    orderBy?: alumniAccountOrderByWithRelationInput | alumniAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alumniAccounts.
     */
    cursor?: alumniAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumniAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumniAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alumniAccounts.
     */
    distinct?: AlumniAccountScalarFieldEnum | AlumniAccountScalarFieldEnum[]
  }


  /**
   * alumniAccount findFirstOrThrow
   */
  export type alumniAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumniAccount
     */
    select?: alumniAccountSelect<ExtArgs> | null
    /**
     * Filter, which alumniAccount to fetch.
     */
    where?: alumniAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumniAccounts to fetch.
     */
    orderBy?: alumniAccountOrderByWithRelationInput | alumniAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alumniAccounts.
     */
    cursor?: alumniAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumniAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumniAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alumniAccounts.
     */
    distinct?: AlumniAccountScalarFieldEnum | AlumniAccountScalarFieldEnum[]
  }


  /**
   * alumniAccount findMany
   */
  export type alumniAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumniAccount
     */
    select?: alumniAccountSelect<ExtArgs> | null
    /**
     * Filter, which alumniAccounts to fetch.
     */
    where?: alumniAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumniAccounts to fetch.
     */
    orderBy?: alumniAccountOrderByWithRelationInput | alumniAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alumniAccounts.
     */
    cursor?: alumniAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumniAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumniAccounts.
     */
    skip?: number
    distinct?: AlumniAccountScalarFieldEnum | AlumniAccountScalarFieldEnum[]
  }


  /**
   * alumniAccount create
   */
  export type alumniAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumniAccount
     */
    select?: alumniAccountSelect<ExtArgs> | null
    /**
     * The data needed to create a alumniAccount.
     */
    data: XOR<alumniAccountCreateInput, alumniAccountUncheckedCreateInput>
  }


  /**
   * alumniAccount createMany
   */
  export type alumniAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alumniAccounts.
     */
    data: alumniAccountCreateManyInput | alumniAccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * alumniAccount update
   */
  export type alumniAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumniAccount
     */
    select?: alumniAccountSelect<ExtArgs> | null
    /**
     * The data needed to update a alumniAccount.
     */
    data: XOR<alumniAccountUpdateInput, alumniAccountUncheckedUpdateInput>
    /**
     * Choose, which alumniAccount to update.
     */
    where: alumniAccountWhereUniqueInput
  }


  /**
   * alumniAccount updateMany
   */
  export type alumniAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alumniAccounts.
     */
    data: XOR<alumniAccountUpdateManyMutationInput, alumniAccountUncheckedUpdateManyInput>
    /**
     * Filter which alumniAccounts to update
     */
    where?: alumniAccountWhereInput
  }


  /**
   * alumniAccount upsert
   */
  export type alumniAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumniAccount
     */
    select?: alumniAccountSelect<ExtArgs> | null
    /**
     * The filter to search for the alumniAccount to update in case it exists.
     */
    where: alumniAccountWhereUniqueInput
    /**
     * In case the alumniAccount found by the `where` argument doesn't exist, create a new alumniAccount with this data.
     */
    create: XOR<alumniAccountCreateInput, alumniAccountUncheckedCreateInput>
    /**
     * In case the alumniAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alumniAccountUpdateInput, alumniAccountUncheckedUpdateInput>
  }


  /**
   * alumniAccount delete
   */
  export type alumniAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumniAccount
     */
    select?: alumniAccountSelect<ExtArgs> | null
    /**
     * Filter which alumniAccount to delete.
     */
    where: alumniAccountWhereUniqueInput
  }


  /**
   * alumniAccount deleteMany
   */
  export type alumniAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alumniAccounts to delete
     */
    where?: alumniAccountWhereInput
  }


  /**
   * alumniAccount without action
   */
  export type alumniAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumniAccount
     */
    select?: alumniAccountSelect<ExtArgs> | null
  }



  /**
   * Model aid
   */

  export type AggregateAid = {
    _count: AidCountAggregateOutputType | null
    _avg: AidAvgAggregateOutputType | null
    _sum: AidSumAggregateOutputType | null
    _min: AidMinAggregateOutputType | null
    _max: AidMaxAggregateOutputType | null
  }

  export type AidAvgAggregateOutputType = {
    id: number | null
    income: number | null
    outcome: number | null
  }

  export type AidSumAggregateOutputType = {
    id: number | null
    income: number | null
    outcome: number | null
  }

  export type AidMinAggregateOutputType = {
    id: number | null
    year: string | null
    date: Date | null
    type: string | null
    typeAlphabet: string | null
    subtype: string | null
    fixture: string | null
    income: number | null
    outcome: number | null
  }

  export type AidMaxAggregateOutputType = {
    id: number | null
    year: string | null
    date: Date | null
    type: string | null
    typeAlphabet: string | null
    subtype: string | null
    fixture: string | null
    income: number | null
    outcome: number | null
  }

  export type AidCountAggregateOutputType = {
    id: number
    year: number
    date: number
    type: number
    typeAlphabet: number
    subtype: number
    fixture: number
    income: number
    outcome: number
    _all: number
  }


  export type AidAvgAggregateInputType = {
    id?: true
    income?: true
    outcome?: true
  }

  export type AidSumAggregateInputType = {
    id?: true
    income?: true
    outcome?: true
  }

  export type AidMinAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
  }

  export type AidMaxAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
  }

  export type AidCountAggregateInputType = {
    id?: true
    year?: true
    date?: true
    type?: true
    typeAlphabet?: true
    subtype?: true
    fixture?: true
    income?: true
    outcome?: true
    _all?: true
  }

  export type AidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aid to aggregate.
     */
    where?: aidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aid to fetch.
     */
    orderBy?: aidOrderByWithRelationInput | aidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aid from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aid.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aid
    **/
    _count?: true | AidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AidMaxAggregateInputType
  }

  export type GetAidAggregateType<T extends AidAggregateArgs> = {
        [P in keyof T & keyof AggregateAid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAid[P]>
      : GetScalarType<T[P], AggregateAid[P]>
  }




  export type aidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aidWhereInput
    orderBy?: aidOrderByWithAggregationInput | aidOrderByWithAggregationInput[]
    by: AidScalarFieldEnum[] | AidScalarFieldEnum
    having?: aidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AidCountAggregateInputType | true
    _avg?: AidAvgAggregateInputType
    _sum?: AidSumAggregateInputType
    _min?: AidMinAggregateInputType
    _max?: AidMaxAggregateInputType
  }

  export type AidGroupByOutputType = {
    id: number
    year: string
    date: Date
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
    _count: AidCountAggregateOutputType | null
    _avg: AidAvgAggregateOutputType | null
    _sum: AidSumAggregateOutputType | null
    _min: AidMinAggregateOutputType | null
    _max: AidMaxAggregateOutputType | null
  }

  type GetAidGroupByPayload<T extends aidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AidGroupByOutputType[P]>
            : GetScalarType<T[P], AidGroupByOutputType[P]>
        }
      >
    >


  export type aidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    date?: boolean
    type?: boolean
    typeAlphabet?: boolean
    subtype?: boolean
    fixture?: boolean
    income?: boolean
    outcome?: boolean
  }, ExtArgs["result"]["aid"]>

  export type aidSelectScalar = {
    id?: boolean
    year?: boolean
    date?: boolean
    type?: boolean
    typeAlphabet?: boolean
    subtype?: boolean
    fixture?: boolean
    income?: boolean
    outcome?: boolean
  }


  export type $aidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aid"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: string
      date: Date
      type: string
      typeAlphabet: string
      subtype: string
      fixture: string
      income: number
      outcome: number
    }, ExtArgs["result"]["aid"]>
    composites: {}
  }


  type aidGetPayload<S extends boolean | null | undefined | aidDefaultArgs> = $Result.GetResult<Prisma.$aidPayload, S>

  type aidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<aidFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AidCountAggregateInputType | true
    }

  export interface aidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aid'], meta: { name: 'aid' } }
    /**
     * Find zero or one Aid that matches the filter.
     * @param {aidFindUniqueArgs} args - Arguments to find a Aid
     * @example
     * // Get one Aid
     * const aid = await prisma.aid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aidFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, aidFindUniqueArgs<ExtArgs>>
    ): Prisma__aidClient<$Result.GetResult<Prisma.$aidPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Aid that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {aidFindUniqueOrThrowArgs} args - Arguments to find a Aid
     * @example
     * // Get one Aid
     * const aid = await prisma.aid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aidFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aidFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__aidClient<$Result.GetResult<Prisma.$aidPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Aid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aidFindFirstArgs} args - Arguments to find a Aid
     * @example
     * // Get one Aid
     * const aid = await prisma.aid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aidFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, aidFindFirstArgs<ExtArgs>>
    ): Prisma__aidClient<$Result.GetResult<Prisma.$aidPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Aid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aidFindFirstOrThrowArgs} args - Arguments to find a Aid
     * @example
     * // Get one Aid
     * const aid = await prisma.aid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aidFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aidFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__aidClient<$Result.GetResult<Prisma.$aidPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Aid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aidFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aid
     * const aid = await prisma.aid.findMany()
     * 
     * // Get first 10 Aid
     * const aid = await prisma.aid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aidWithIdOnly = await prisma.aid.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends aidFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aidFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aidPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Aid.
     * @param {aidCreateArgs} args - Arguments to create a Aid.
     * @example
     * // Create one Aid
     * const Aid = await prisma.aid.create({
     *   data: {
     *     // ... data to create a Aid
     *   }
     * })
     * 
    **/
    create<T extends aidCreateArgs<ExtArgs>>(
      args: SelectSubset<T, aidCreateArgs<ExtArgs>>
    ): Prisma__aidClient<$Result.GetResult<Prisma.$aidPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Aid.
     *     @param {aidCreateManyArgs} args - Arguments to create many Aid.
     *     @example
     *     // Create many Aid
     *     const aid = await prisma.aid.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aidCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aidCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aid.
     * @param {aidDeleteArgs} args - Arguments to delete one Aid.
     * @example
     * // Delete one Aid
     * const Aid = await prisma.aid.delete({
     *   where: {
     *     // ... filter to delete one Aid
     *   }
     * })
     * 
    **/
    delete<T extends aidDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, aidDeleteArgs<ExtArgs>>
    ): Prisma__aidClient<$Result.GetResult<Prisma.$aidPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Aid.
     * @param {aidUpdateArgs} args - Arguments to update one Aid.
     * @example
     * // Update one Aid
     * const aid = await prisma.aid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aidUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, aidUpdateArgs<ExtArgs>>
    ): Prisma__aidClient<$Result.GetResult<Prisma.$aidPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Aid.
     * @param {aidDeleteManyArgs} args - Arguments to filter Aid to delete.
     * @example
     * // Delete a few Aid
     * const { count } = await prisma.aid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aidDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aidDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aid
     * const aid = await prisma.aid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aidUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, aidUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aid.
     * @param {aidUpsertArgs} args - Arguments to update or create a Aid.
     * @example
     * // Update or create a Aid
     * const aid = await prisma.aid.upsert({
     *   create: {
     *     // ... data to create a Aid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aid we want to update
     *   }
     * })
    **/
    upsert<T extends aidUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, aidUpsertArgs<ExtArgs>>
    ): Prisma__aidClient<$Result.GetResult<Prisma.$aidPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Aid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aidCountArgs} args - Arguments to filter Aid to count.
     * @example
     * // Count the number of Aid
     * const count = await prisma.aid.count({
     *   where: {
     *     // ... the filter for the Aid we want to count
     *   }
     * })
    **/
    count<T extends aidCountArgs>(
      args?: Subset<T, aidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AidAggregateArgs>(args: Subset<T, AidAggregateArgs>): Prisma.PrismaPromise<GetAidAggregateType<T>>

    /**
     * Group by Aid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aidGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends aidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aidGroupByArgs['orderBy'] }
        : { orderBy?: aidGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, aidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aid model
   */
  readonly fields: aidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the aid model
   */ 
  interface aidFieldRefs {
    readonly id: FieldRef<"aid", 'Int'>
    readonly year: FieldRef<"aid", 'String'>
    readonly date: FieldRef<"aid", 'DateTime'>
    readonly type: FieldRef<"aid", 'String'>
    readonly typeAlphabet: FieldRef<"aid", 'String'>
    readonly subtype: FieldRef<"aid", 'String'>
    readonly fixture: FieldRef<"aid", 'String'>
    readonly income: FieldRef<"aid", 'Int'>
    readonly outcome: FieldRef<"aid", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * aid findUnique
   */
  export type aidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aid
     */
    select?: aidSelect<ExtArgs> | null
    /**
     * Filter, which aid to fetch.
     */
    where: aidWhereUniqueInput
  }


  /**
   * aid findUniqueOrThrow
   */
  export type aidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aid
     */
    select?: aidSelect<ExtArgs> | null
    /**
     * Filter, which aid to fetch.
     */
    where: aidWhereUniqueInput
  }


  /**
   * aid findFirst
   */
  export type aidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aid
     */
    select?: aidSelect<ExtArgs> | null
    /**
     * Filter, which aid to fetch.
     */
    where?: aidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aid to fetch.
     */
    orderBy?: aidOrderByWithRelationInput | aidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aid.
     */
    cursor?: aidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aid from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aid.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aid.
     */
    distinct?: AidScalarFieldEnum | AidScalarFieldEnum[]
  }


  /**
   * aid findFirstOrThrow
   */
  export type aidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aid
     */
    select?: aidSelect<ExtArgs> | null
    /**
     * Filter, which aid to fetch.
     */
    where?: aidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aid to fetch.
     */
    orderBy?: aidOrderByWithRelationInput | aidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aid.
     */
    cursor?: aidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aid from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aid.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aid.
     */
    distinct?: AidScalarFieldEnum | AidScalarFieldEnum[]
  }


  /**
   * aid findMany
   */
  export type aidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aid
     */
    select?: aidSelect<ExtArgs> | null
    /**
     * Filter, which aid to fetch.
     */
    where?: aidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aid to fetch.
     */
    orderBy?: aidOrderByWithRelationInput | aidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aid.
     */
    cursor?: aidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aid from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aid.
     */
    skip?: number
    distinct?: AidScalarFieldEnum | AidScalarFieldEnum[]
  }


  /**
   * aid create
   */
  export type aidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aid
     */
    select?: aidSelect<ExtArgs> | null
    /**
     * The data needed to create a aid.
     */
    data: XOR<aidCreateInput, aidUncheckedCreateInput>
  }


  /**
   * aid createMany
   */
  export type aidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aid.
     */
    data: aidCreateManyInput | aidCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * aid update
   */
  export type aidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aid
     */
    select?: aidSelect<ExtArgs> | null
    /**
     * The data needed to update a aid.
     */
    data: XOR<aidUpdateInput, aidUncheckedUpdateInput>
    /**
     * Choose, which aid to update.
     */
    where: aidWhereUniqueInput
  }


  /**
   * aid updateMany
   */
  export type aidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aid.
     */
    data: XOR<aidUpdateManyMutationInput, aidUncheckedUpdateManyInput>
    /**
     * Filter which aid to update
     */
    where?: aidWhereInput
  }


  /**
   * aid upsert
   */
  export type aidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aid
     */
    select?: aidSelect<ExtArgs> | null
    /**
     * The filter to search for the aid to update in case it exists.
     */
    where: aidWhereUniqueInput
    /**
     * In case the aid found by the `where` argument doesn't exist, create a new aid with this data.
     */
    create: XOR<aidCreateInput, aidUncheckedCreateInput>
    /**
     * In case the aid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aidUpdateInput, aidUncheckedUpdateInput>
  }


  /**
   * aid delete
   */
  export type aidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aid
     */
    select?: aidSelect<ExtArgs> | null
    /**
     * Filter which aid to delete.
     */
    where: aidWhereUniqueInput
  }


  /**
   * aid deleteMany
   */
  export type aidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aid to delete
     */
    where?: aidWhereInput
  }


  /**
   * aid without action
   */
  export type aidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aid
     */
    select?: aidSelect<ExtArgs> | null
  }



  /**
   * Model accessHistory
   */

  export type AggregateAccessHistory = {
    _count: AccessHistoryCountAggregateOutputType | null
    _avg: AccessHistoryAvgAggregateOutputType | null
    _sum: AccessHistorySumAggregateOutputType | null
    _min: AccessHistoryMinAggregateOutputType | null
    _max: AccessHistoryMaxAggregateOutputType | null
  }

  export type AccessHistoryAvgAggregateOutputType = {
    id: number | null
  }

  export type AccessHistorySumAggregateOutputType = {
    id: number | null
  }

  export type AccessHistoryMinAggregateOutputType = {
    id: number | null
    accessDate: Date | null
  }

  export type AccessHistoryMaxAggregateOutputType = {
    id: number | null
    accessDate: Date | null
  }

  export type AccessHistoryCountAggregateOutputType = {
    id: number
    accessDate: number
    _all: number
  }


  export type AccessHistoryAvgAggregateInputType = {
    id?: true
  }

  export type AccessHistorySumAggregateInputType = {
    id?: true
  }

  export type AccessHistoryMinAggregateInputType = {
    id?: true
    accessDate?: true
  }

  export type AccessHistoryMaxAggregateInputType = {
    id?: true
    accessDate?: true
  }

  export type AccessHistoryCountAggregateInputType = {
    id?: true
    accessDate?: true
    _all?: true
  }

  export type AccessHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accessHistory to aggregate.
     */
    where?: accessHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accessHistories to fetch.
     */
    orderBy?: accessHistoryOrderByWithRelationInput | accessHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accessHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accessHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accessHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accessHistories
    **/
    _count?: true | AccessHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessHistoryMaxAggregateInputType
  }

  export type GetAccessHistoryAggregateType<T extends AccessHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessHistory[P]>
      : GetScalarType<T[P], AggregateAccessHistory[P]>
  }




  export type accessHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accessHistoryWhereInput
    orderBy?: accessHistoryOrderByWithAggregationInput | accessHistoryOrderByWithAggregationInput[]
    by: AccessHistoryScalarFieldEnum[] | AccessHistoryScalarFieldEnum
    having?: accessHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessHistoryCountAggregateInputType | true
    _avg?: AccessHistoryAvgAggregateInputType
    _sum?: AccessHistorySumAggregateInputType
    _min?: AccessHistoryMinAggregateInputType
    _max?: AccessHistoryMaxAggregateInputType
  }

  export type AccessHistoryGroupByOutputType = {
    id: number
    accessDate: Date
    _count: AccessHistoryCountAggregateOutputType | null
    _avg: AccessHistoryAvgAggregateOutputType | null
    _sum: AccessHistorySumAggregateOutputType | null
    _min: AccessHistoryMinAggregateOutputType | null
    _max: AccessHistoryMaxAggregateOutputType | null
  }

  type GetAccessHistoryGroupByPayload<T extends accessHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AccessHistoryGroupByOutputType[P]>
        }
      >
    >


  export type accessHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessDate?: boolean
  }, ExtArgs["result"]["accessHistory"]>

  export type accessHistorySelectScalar = {
    id?: boolean
    accessDate?: boolean
  }


  export type $accessHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accessHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accessDate: Date
    }, ExtArgs["result"]["accessHistory"]>
    composites: {}
  }


  type accessHistoryGetPayload<S extends boolean | null | undefined | accessHistoryDefaultArgs> = $Result.GetResult<Prisma.$accessHistoryPayload, S>

  type accessHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<accessHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccessHistoryCountAggregateInputType | true
    }

  export interface accessHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accessHistory'], meta: { name: 'accessHistory' } }
    /**
     * Find zero or one AccessHistory that matches the filter.
     * @param {accessHistoryFindUniqueArgs} args - Arguments to find a AccessHistory
     * @example
     * // Get one AccessHistory
     * const accessHistory = await prisma.accessHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends accessHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, accessHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__accessHistoryClient<$Result.GetResult<Prisma.$accessHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AccessHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {accessHistoryFindUniqueOrThrowArgs} args - Arguments to find a AccessHistory
     * @example
     * // Get one AccessHistory
     * const accessHistory = await prisma.accessHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends accessHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, accessHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__accessHistoryClient<$Result.GetResult<Prisma.$accessHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AccessHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessHistoryFindFirstArgs} args - Arguments to find a AccessHistory
     * @example
     * // Get one AccessHistory
     * const accessHistory = await prisma.accessHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends accessHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, accessHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__accessHistoryClient<$Result.GetResult<Prisma.$accessHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AccessHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessHistoryFindFirstOrThrowArgs} args - Arguments to find a AccessHistory
     * @example
     * // Get one AccessHistory
     * const accessHistory = await prisma.accessHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends accessHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, accessHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__accessHistoryClient<$Result.GetResult<Prisma.$accessHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AccessHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessHistories
     * const accessHistories = await prisma.accessHistory.findMany()
     * 
     * // Get first 10 AccessHistories
     * const accessHistories = await prisma.accessHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessHistoryWithIdOnly = await prisma.accessHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends accessHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, accessHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accessHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AccessHistory.
     * @param {accessHistoryCreateArgs} args - Arguments to create a AccessHistory.
     * @example
     * // Create one AccessHistory
     * const AccessHistory = await prisma.accessHistory.create({
     *   data: {
     *     // ... data to create a AccessHistory
     *   }
     * })
     * 
    **/
    create<T extends accessHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, accessHistoryCreateArgs<ExtArgs>>
    ): Prisma__accessHistoryClient<$Result.GetResult<Prisma.$accessHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AccessHistories.
     *     @param {accessHistoryCreateManyArgs} args - Arguments to create many AccessHistories.
     *     @example
     *     // Create many AccessHistories
     *     const accessHistory = await prisma.accessHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends accessHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, accessHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccessHistory.
     * @param {accessHistoryDeleteArgs} args - Arguments to delete one AccessHistory.
     * @example
     * // Delete one AccessHistory
     * const AccessHistory = await prisma.accessHistory.delete({
     *   where: {
     *     // ... filter to delete one AccessHistory
     *   }
     * })
     * 
    **/
    delete<T extends accessHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, accessHistoryDeleteArgs<ExtArgs>>
    ): Prisma__accessHistoryClient<$Result.GetResult<Prisma.$accessHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AccessHistory.
     * @param {accessHistoryUpdateArgs} args - Arguments to update one AccessHistory.
     * @example
     * // Update one AccessHistory
     * const accessHistory = await prisma.accessHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends accessHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, accessHistoryUpdateArgs<ExtArgs>>
    ): Prisma__accessHistoryClient<$Result.GetResult<Prisma.$accessHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AccessHistories.
     * @param {accessHistoryDeleteManyArgs} args - Arguments to filter AccessHistories to delete.
     * @example
     * // Delete a few AccessHistories
     * const { count } = await prisma.accessHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends accessHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, accessHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessHistories
     * const accessHistory = await prisma.accessHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends accessHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, accessHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccessHistory.
     * @param {accessHistoryUpsertArgs} args - Arguments to update or create a AccessHistory.
     * @example
     * // Update or create a AccessHistory
     * const accessHistory = await prisma.accessHistory.upsert({
     *   create: {
     *     // ... data to create a AccessHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessHistory we want to update
     *   }
     * })
    **/
    upsert<T extends accessHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, accessHistoryUpsertArgs<ExtArgs>>
    ): Prisma__accessHistoryClient<$Result.GetResult<Prisma.$accessHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AccessHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessHistoryCountArgs} args - Arguments to filter AccessHistories to count.
     * @example
     * // Count the number of AccessHistories
     * const count = await prisma.accessHistory.count({
     *   where: {
     *     // ... the filter for the AccessHistories we want to count
     *   }
     * })
    **/
    count<T extends accessHistoryCountArgs>(
      args?: Subset<T, accessHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessHistoryAggregateArgs>(args: Subset<T, AccessHistoryAggregateArgs>): Prisma.PrismaPromise<GetAccessHistoryAggregateType<T>>

    /**
     * Group by AccessHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accessHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accessHistoryGroupByArgs['orderBy'] }
        : { orderBy?: accessHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accessHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accessHistory model
   */
  readonly fields: accessHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accessHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accessHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the accessHistory model
   */ 
  interface accessHistoryFieldRefs {
    readonly id: FieldRef<"accessHistory", 'Int'>
    readonly accessDate: FieldRef<"accessHistory", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * accessHistory findUnique
   */
  export type accessHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accessHistory
     */
    select?: accessHistorySelect<ExtArgs> | null
    /**
     * Filter, which accessHistory to fetch.
     */
    where: accessHistoryWhereUniqueInput
  }


  /**
   * accessHistory findUniqueOrThrow
   */
  export type accessHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accessHistory
     */
    select?: accessHistorySelect<ExtArgs> | null
    /**
     * Filter, which accessHistory to fetch.
     */
    where: accessHistoryWhereUniqueInput
  }


  /**
   * accessHistory findFirst
   */
  export type accessHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accessHistory
     */
    select?: accessHistorySelect<ExtArgs> | null
    /**
     * Filter, which accessHistory to fetch.
     */
    where?: accessHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accessHistories to fetch.
     */
    orderBy?: accessHistoryOrderByWithRelationInput | accessHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accessHistories.
     */
    cursor?: accessHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accessHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accessHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accessHistories.
     */
    distinct?: AccessHistoryScalarFieldEnum | AccessHistoryScalarFieldEnum[]
  }


  /**
   * accessHistory findFirstOrThrow
   */
  export type accessHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accessHistory
     */
    select?: accessHistorySelect<ExtArgs> | null
    /**
     * Filter, which accessHistory to fetch.
     */
    where?: accessHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accessHistories to fetch.
     */
    orderBy?: accessHistoryOrderByWithRelationInput | accessHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accessHistories.
     */
    cursor?: accessHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accessHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accessHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accessHistories.
     */
    distinct?: AccessHistoryScalarFieldEnum | AccessHistoryScalarFieldEnum[]
  }


  /**
   * accessHistory findMany
   */
  export type accessHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accessHistory
     */
    select?: accessHistorySelect<ExtArgs> | null
    /**
     * Filter, which accessHistories to fetch.
     */
    where?: accessHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accessHistories to fetch.
     */
    orderBy?: accessHistoryOrderByWithRelationInput | accessHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accessHistories.
     */
    cursor?: accessHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accessHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accessHistories.
     */
    skip?: number
    distinct?: AccessHistoryScalarFieldEnum | AccessHistoryScalarFieldEnum[]
  }


  /**
   * accessHistory create
   */
  export type accessHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accessHistory
     */
    select?: accessHistorySelect<ExtArgs> | null
    /**
     * The data needed to create a accessHistory.
     */
    data: XOR<accessHistoryCreateInput, accessHistoryUncheckedCreateInput>
  }


  /**
   * accessHistory createMany
   */
  export type accessHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accessHistories.
     */
    data: accessHistoryCreateManyInput | accessHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * accessHistory update
   */
  export type accessHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accessHistory
     */
    select?: accessHistorySelect<ExtArgs> | null
    /**
     * The data needed to update a accessHistory.
     */
    data: XOR<accessHistoryUpdateInput, accessHistoryUncheckedUpdateInput>
    /**
     * Choose, which accessHistory to update.
     */
    where: accessHistoryWhereUniqueInput
  }


  /**
   * accessHistory updateMany
   */
  export type accessHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accessHistories.
     */
    data: XOR<accessHistoryUpdateManyMutationInput, accessHistoryUncheckedUpdateManyInput>
    /**
     * Filter which accessHistories to update
     */
    where?: accessHistoryWhereInput
  }


  /**
   * accessHistory upsert
   */
  export type accessHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accessHistory
     */
    select?: accessHistorySelect<ExtArgs> | null
    /**
     * The filter to search for the accessHistory to update in case it exists.
     */
    where: accessHistoryWhereUniqueInput
    /**
     * In case the accessHistory found by the `where` argument doesn't exist, create a new accessHistory with this data.
     */
    create: XOR<accessHistoryCreateInput, accessHistoryUncheckedCreateInput>
    /**
     * In case the accessHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accessHistoryUpdateInput, accessHistoryUncheckedUpdateInput>
  }


  /**
   * accessHistory delete
   */
  export type accessHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accessHistory
     */
    select?: accessHistorySelect<ExtArgs> | null
    /**
     * Filter which accessHistory to delete.
     */
    where: accessHistoryWhereUniqueInput
  }


  /**
   * accessHistory deleteMany
   */
  export type accessHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accessHistories to delete
     */
    where?: accessHistoryWhereInput
  }


  /**
   * accessHistory without action
   */
  export type accessHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accessHistory
     */
    select?: accessHistorySelect<ExtArgs> | null
  }



  /**
   * Model threadID
   */

  export type AggregateThreadID = {
    _count: ThreadIDCountAggregateOutputType | null
    _avg: ThreadIDAvgAggregateOutputType | null
    _sum: ThreadIDSumAggregateOutputType | null
    _min: ThreadIDMinAggregateOutputType | null
    _max: ThreadIDMaxAggregateOutputType | null
  }

  export type ThreadIDAvgAggregateOutputType = {
    id: number | null
  }

  export type ThreadIDSumAggregateOutputType = {
    id: number | null
  }

  export type ThreadIDMinAggregateOutputType = {
    id: number | null
    hookurl: string | null
    threadID: string | null
    mode: string | null
  }

  export type ThreadIDMaxAggregateOutputType = {
    id: number | null
    hookurl: string | null
    threadID: string | null
    mode: string | null
  }

  export type ThreadIDCountAggregateOutputType = {
    id: number
    hookurl: number
    threadID: number
    mode: number
    _all: number
  }


  export type ThreadIDAvgAggregateInputType = {
    id?: true
  }

  export type ThreadIDSumAggregateInputType = {
    id?: true
  }

  export type ThreadIDMinAggregateInputType = {
    id?: true
    hookurl?: true
    threadID?: true
    mode?: true
  }

  export type ThreadIDMaxAggregateInputType = {
    id?: true
    hookurl?: true
    threadID?: true
    mode?: true
  }

  export type ThreadIDCountAggregateInputType = {
    id?: true
    hookurl?: true
    threadID?: true
    mode?: true
    _all?: true
  }

  export type ThreadIDAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which threadID to aggregate.
     */
    where?: threadIDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threadIDS to fetch.
     */
    orderBy?: threadIDOrderByWithRelationInput | threadIDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: threadIDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threadIDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threadIDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned threadIDS
    **/
    _count?: true | ThreadIDCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThreadIDAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThreadIDSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadIDMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadIDMaxAggregateInputType
  }

  export type GetThreadIDAggregateType<T extends ThreadIDAggregateArgs> = {
        [P in keyof T & keyof AggregateThreadID]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThreadID[P]>
      : GetScalarType<T[P], AggregateThreadID[P]>
  }




  export type threadIDGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: threadIDWhereInput
    orderBy?: threadIDOrderByWithAggregationInput | threadIDOrderByWithAggregationInput[]
    by: ThreadIDScalarFieldEnum[] | ThreadIDScalarFieldEnum
    having?: threadIDScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadIDCountAggregateInputType | true
    _avg?: ThreadIDAvgAggregateInputType
    _sum?: ThreadIDSumAggregateInputType
    _min?: ThreadIDMinAggregateInputType
    _max?: ThreadIDMaxAggregateInputType
  }

  export type ThreadIDGroupByOutputType = {
    id: number
    hookurl: string
    threadID: string
    mode: string
    _count: ThreadIDCountAggregateOutputType | null
    _avg: ThreadIDAvgAggregateOutputType | null
    _sum: ThreadIDSumAggregateOutputType | null
    _min: ThreadIDMinAggregateOutputType | null
    _max: ThreadIDMaxAggregateOutputType | null
  }

  type GetThreadIDGroupByPayload<T extends threadIDGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThreadIDGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadIDGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadIDGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadIDGroupByOutputType[P]>
        }
      >
    >


  export type threadIDSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hookurl?: boolean
    threadID?: boolean
    mode?: boolean
  }, ExtArgs["result"]["threadID"]>

  export type threadIDSelectScalar = {
    id?: boolean
    hookurl?: boolean
    threadID?: boolean
    mode?: boolean
  }


  export type $threadIDPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "threadID"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hookurl: string
      threadID: string
      mode: string
    }, ExtArgs["result"]["threadID"]>
    composites: {}
  }


  type threadIDGetPayload<S extends boolean | null | undefined | threadIDDefaultArgs> = $Result.GetResult<Prisma.$threadIDPayload, S>

  type threadIDCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<threadIDFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ThreadIDCountAggregateInputType | true
    }

  export interface threadIDDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['threadID'], meta: { name: 'threadID' } }
    /**
     * Find zero or one ThreadID that matches the filter.
     * @param {threadIDFindUniqueArgs} args - Arguments to find a ThreadID
     * @example
     * // Get one ThreadID
     * const threadID = await prisma.threadID.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends threadIDFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, threadIDFindUniqueArgs<ExtArgs>>
    ): Prisma__threadIDClient<$Result.GetResult<Prisma.$threadIDPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ThreadID that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {threadIDFindUniqueOrThrowArgs} args - Arguments to find a ThreadID
     * @example
     * // Get one ThreadID
     * const threadID = await prisma.threadID.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends threadIDFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, threadIDFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__threadIDClient<$Result.GetResult<Prisma.$threadIDPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ThreadID that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threadIDFindFirstArgs} args - Arguments to find a ThreadID
     * @example
     * // Get one ThreadID
     * const threadID = await prisma.threadID.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends threadIDFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, threadIDFindFirstArgs<ExtArgs>>
    ): Prisma__threadIDClient<$Result.GetResult<Prisma.$threadIDPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ThreadID that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threadIDFindFirstOrThrowArgs} args - Arguments to find a ThreadID
     * @example
     * // Get one ThreadID
     * const threadID = await prisma.threadID.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends threadIDFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, threadIDFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__threadIDClient<$Result.GetResult<Prisma.$threadIDPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ThreadIDS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threadIDFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ThreadIDS
     * const threadIDS = await prisma.threadID.findMany()
     * 
     * // Get first 10 ThreadIDS
     * const threadIDS = await prisma.threadID.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const threadIDWithIdOnly = await prisma.threadID.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends threadIDFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, threadIDFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$threadIDPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ThreadID.
     * @param {threadIDCreateArgs} args - Arguments to create a ThreadID.
     * @example
     * // Create one ThreadID
     * const ThreadID = await prisma.threadID.create({
     *   data: {
     *     // ... data to create a ThreadID
     *   }
     * })
     * 
    **/
    create<T extends threadIDCreateArgs<ExtArgs>>(
      args: SelectSubset<T, threadIDCreateArgs<ExtArgs>>
    ): Prisma__threadIDClient<$Result.GetResult<Prisma.$threadIDPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ThreadIDS.
     *     @param {threadIDCreateManyArgs} args - Arguments to create many ThreadIDS.
     *     @example
     *     // Create many ThreadIDS
     *     const threadID = await prisma.threadID.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends threadIDCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, threadIDCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ThreadID.
     * @param {threadIDDeleteArgs} args - Arguments to delete one ThreadID.
     * @example
     * // Delete one ThreadID
     * const ThreadID = await prisma.threadID.delete({
     *   where: {
     *     // ... filter to delete one ThreadID
     *   }
     * })
     * 
    **/
    delete<T extends threadIDDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, threadIDDeleteArgs<ExtArgs>>
    ): Prisma__threadIDClient<$Result.GetResult<Prisma.$threadIDPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ThreadID.
     * @param {threadIDUpdateArgs} args - Arguments to update one ThreadID.
     * @example
     * // Update one ThreadID
     * const threadID = await prisma.threadID.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends threadIDUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, threadIDUpdateArgs<ExtArgs>>
    ): Prisma__threadIDClient<$Result.GetResult<Prisma.$threadIDPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ThreadIDS.
     * @param {threadIDDeleteManyArgs} args - Arguments to filter ThreadIDS to delete.
     * @example
     * // Delete a few ThreadIDS
     * const { count } = await prisma.threadID.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends threadIDDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, threadIDDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThreadIDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threadIDUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ThreadIDS
     * const threadID = await prisma.threadID.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends threadIDUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, threadIDUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ThreadID.
     * @param {threadIDUpsertArgs} args - Arguments to update or create a ThreadID.
     * @example
     * // Update or create a ThreadID
     * const threadID = await prisma.threadID.upsert({
     *   create: {
     *     // ... data to create a ThreadID
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ThreadID we want to update
     *   }
     * })
    **/
    upsert<T extends threadIDUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, threadIDUpsertArgs<ExtArgs>>
    ): Prisma__threadIDClient<$Result.GetResult<Prisma.$threadIDPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ThreadIDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threadIDCountArgs} args - Arguments to filter ThreadIDS to count.
     * @example
     * // Count the number of ThreadIDS
     * const count = await prisma.threadID.count({
     *   where: {
     *     // ... the filter for the ThreadIDS we want to count
     *   }
     * })
    **/
    count<T extends threadIDCountArgs>(
      args?: Subset<T, threadIDCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadIDCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ThreadID.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadIDAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThreadIDAggregateArgs>(args: Subset<T, ThreadIDAggregateArgs>): Prisma.PrismaPromise<GetThreadIDAggregateType<T>>

    /**
     * Group by ThreadID.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threadIDGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends threadIDGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: threadIDGroupByArgs['orderBy'] }
        : { orderBy?: threadIDGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, threadIDGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadIDGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the threadID model
   */
  readonly fields: threadIDFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for threadID.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__threadIDClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the threadID model
   */ 
  interface threadIDFieldRefs {
    readonly id: FieldRef<"threadID", 'Int'>
    readonly hookurl: FieldRef<"threadID", 'String'>
    readonly threadID: FieldRef<"threadID", 'String'>
    readonly mode: FieldRef<"threadID", 'String'>
  }
    

  // Custom InputTypes

  /**
   * threadID findUnique
   */
  export type threadIDFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threadID
     */
    select?: threadIDSelect<ExtArgs> | null
    /**
     * Filter, which threadID to fetch.
     */
    where: threadIDWhereUniqueInput
  }


  /**
   * threadID findUniqueOrThrow
   */
  export type threadIDFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threadID
     */
    select?: threadIDSelect<ExtArgs> | null
    /**
     * Filter, which threadID to fetch.
     */
    where: threadIDWhereUniqueInput
  }


  /**
   * threadID findFirst
   */
  export type threadIDFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threadID
     */
    select?: threadIDSelect<ExtArgs> | null
    /**
     * Filter, which threadID to fetch.
     */
    where?: threadIDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threadIDS to fetch.
     */
    orderBy?: threadIDOrderByWithRelationInput | threadIDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for threadIDS.
     */
    cursor?: threadIDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threadIDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threadIDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of threadIDS.
     */
    distinct?: ThreadIDScalarFieldEnum | ThreadIDScalarFieldEnum[]
  }


  /**
   * threadID findFirstOrThrow
   */
  export type threadIDFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threadID
     */
    select?: threadIDSelect<ExtArgs> | null
    /**
     * Filter, which threadID to fetch.
     */
    where?: threadIDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threadIDS to fetch.
     */
    orderBy?: threadIDOrderByWithRelationInput | threadIDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for threadIDS.
     */
    cursor?: threadIDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threadIDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threadIDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of threadIDS.
     */
    distinct?: ThreadIDScalarFieldEnum | ThreadIDScalarFieldEnum[]
  }


  /**
   * threadID findMany
   */
  export type threadIDFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threadID
     */
    select?: threadIDSelect<ExtArgs> | null
    /**
     * Filter, which threadIDS to fetch.
     */
    where?: threadIDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threadIDS to fetch.
     */
    orderBy?: threadIDOrderByWithRelationInput | threadIDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing threadIDS.
     */
    cursor?: threadIDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threadIDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threadIDS.
     */
    skip?: number
    distinct?: ThreadIDScalarFieldEnum | ThreadIDScalarFieldEnum[]
  }


  /**
   * threadID create
   */
  export type threadIDCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threadID
     */
    select?: threadIDSelect<ExtArgs> | null
    /**
     * The data needed to create a threadID.
     */
    data: XOR<threadIDCreateInput, threadIDUncheckedCreateInput>
  }


  /**
   * threadID createMany
   */
  export type threadIDCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many threadIDS.
     */
    data: threadIDCreateManyInput | threadIDCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * threadID update
   */
  export type threadIDUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threadID
     */
    select?: threadIDSelect<ExtArgs> | null
    /**
     * The data needed to update a threadID.
     */
    data: XOR<threadIDUpdateInput, threadIDUncheckedUpdateInput>
    /**
     * Choose, which threadID to update.
     */
    where: threadIDWhereUniqueInput
  }


  /**
   * threadID updateMany
   */
  export type threadIDUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update threadIDS.
     */
    data: XOR<threadIDUpdateManyMutationInput, threadIDUncheckedUpdateManyInput>
    /**
     * Filter which threadIDS to update
     */
    where?: threadIDWhereInput
  }


  /**
   * threadID upsert
   */
  export type threadIDUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threadID
     */
    select?: threadIDSelect<ExtArgs> | null
    /**
     * The filter to search for the threadID to update in case it exists.
     */
    where: threadIDWhereUniqueInput
    /**
     * In case the threadID found by the `where` argument doesn't exist, create a new threadID with this data.
     */
    create: XOR<threadIDCreateInput, threadIDUncheckedCreateInput>
    /**
     * In case the threadID was found with the provided `where` argument, update it with this data.
     */
    update: XOR<threadIDUpdateInput, threadIDUncheckedUpdateInput>
  }


  /**
   * threadID delete
   */
  export type threadIDDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threadID
     */
    select?: threadIDSelect<ExtArgs> | null
    /**
     * Filter which threadID to delete.
     */
    where: threadIDWhereUniqueInput
  }


  /**
   * threadID deleteMany
   */
  export type threadIDDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which threadIDS to delete
     */
    where?: threadIDWhereInput
  }


  /**
   * threadID without action
   */
  export type threadIDDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threadID
     */
    select?: threadIDSelect<ExtArgs> | null
  }



  /**
   * Model tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensAvgAggregateOutputType = {
    id: number | null
  }

  export type TokensSumAggregateOutputType = {
    id: number | null
  }

  export type TokensMinAggregateOutputType = {
    id: number | null
    tokens: string | null
    isUser: boolean | null
    isAdmin: boolean | null
    loginDate: Date | null
    limit: Date | null
  }

  export type TokensMaxAggregateOutputType = {
    id: number | null
    tokens: string | null
    isUser: boolean | null
    isAdmin: boolean | null
    loginDate: Date | null
    limit: Date | null
  }

  export type TokensCountAggregateOutputType = {
    id: number
    tokens: number
    isUser: number
    isAdmin: number
    loginDate: number
    limit: number
    _all: number
  }


  export type TokensAvgAggregateInputType = {
    id?: true
  }

  export type TokensSumAggregateInputType = {
    id?: true
  }

  export type TokensMinAggregateInputType = {
    id?: true
    tokens?: true
    isUser?: true
    isAdmin?: true
    loginDate?: true
    limit?: true
  }

  export type TokensMaxAggregateInputType = {
    id?: true
    tokens?: true
    isUser?: true
    isAdmin?: true
    loginDate?: true
    limit?: true
  }

  export type TokensCountAggregateInputType = {
    id?: true
    tokens?: true
    isUser?: true
    isAdmin?: true
    loginDate?: true
    limit?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to aggregate.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokensWhereInput
    orderBy?: tokensOrderByWithAggregationInput | tokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _avg?: TokensAvgAggregateInputType
    _sum?: TokensSumAggregateInputType
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    id: number
    tokens: string
    isUser: boolean
    isAdmin: boolean
    loginDate: Date
    limit: Date
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokens?: boolean
    isUser?: boolean
    isAdmin?: boolean
    loginDate?: boolean
    limit?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type tokensSelectScalar = {
    id?: boolean
    tokens?: boolean
    isUser?: boolean
    isAdmin?: boolean
    loginDate?: boolean
    limit?: boolean
  }


  export type $tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tokens: string
      isUser: boolean
      isAdmin: boolean
      loginDate: Date
      limit: Date
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }


  type tokensGetPayload<S extends boolean | null | undefined | tokensDefaultArgs> = $Result.GetResult<Prisma.$tokensPayload, S>

  type tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tokensFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tokens'], meta: { name: 'tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {tokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tokensFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tokensFindUniqueArgs<ExtArgs>>
    ): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tokens that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tokensFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tokensFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tokensFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tokensFindFirstArgs<ExtArgs>>
    ): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tokensFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tokensFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokensWithIdOnly = await prisma.tokens.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tokensFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tokensFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tokens.
     * @param {tokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
    **/
    create<T extends tokensCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tokensCreateArgs<ExtArgs>>
    ): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tokens.
     *     @param {tokensCreateManyArgs} args - Arguments to create many Tokens.
     *     @example
     *     // Create many Tokens
     *     const tokens = await prisma.tokens.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tokensCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tokensCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tokens.
     * @param {tokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
    **/
    delete<T extends tokensDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tokensDeleteArgs<ExtArgs>>
    ): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tokens.
     * @param {tokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tokensUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tokensUpdateArgs<ExtArgs>>
    ): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {tokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tokensDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tokensDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tokensUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tokensUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tokens.
     * @param {tokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
    **/
    upsert<T extends tokensUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tokensUpsertArgs<ExtArgs>>
    ): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends tokensCountArgs>(
      args?: Subset<T, tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tokensGroupByArgs['orderBy'] }
        : { orderBy?: tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tokens model
   */
  readonly fields: tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tokens model
   */ 
  interface tokensFieldRefs {
    readonly id: FieldRef<"tokens", 'Int'>
    readonly tokens: FieldRef<"tokens", 'String'>
    readonly isUser: FieldRef<"tokens", 'Boolean'>
    readonly isAdmin: FieldRef<"tokens", 'Boolean'>
    readonly loginDate: FieldRef<"tokens", 'DateTime'>
    readonly limit: FieldRef<"tokens", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * tokens findUnique
   */
  export type tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where: tokensWhereUniqueInput
  }


  /**
   * tokens findUniqueOrThrow
   */
  export type tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where: tokensWhereUniqueInput
  }


  /**
   * tokens findFirst
   */
  export type tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }


  /**
   * tokens findFirstOrThrow
   */
  export type tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }


  /**
   * tokens findMany
   */
  export type tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }


  /**
   * tokens create
   */
  export type tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * The data needed to create a tokens.
     */
    data: XOR<tokensCreateInput, tokensUncheckedCreateInput>
  }


  /**
   * tokens createMany
   */
  export type tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tokens.
     */
    data: tokensCreateManyInput | tokensCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tokens update
   */
  export type tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * The data needed to update a tokens.
     */
    data: XOR<tokensUpdateInput, tokensUncheckedUpdateInput>
    /**
     * Choose, which tokens to update.
     */
    where: tokensWhereUniqueInput
  }


  /**
   * tokens updateMany
   */
  export type tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tokens.
     */
    data: XOR<tokensUpdateManyMutationInput, tokensUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokensWhereInput
  }


  /**
   * tokens upsert
   */
  export type tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * The filter to search for the tokens to update in case it exists.
     */
    where: tokensWhereUniqueInput
    /**
     * In case the tokens found by the `where` argument doesn't exist, create a new tokens with this data.
     */
    create: XOR<tokensCreateInput, tokensUncheckedCreateInput>
    /**
     * In case the tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokensUpdateInput, tokensUncheckedUpdateInput>
  }


  /**
   * tokens delete
   */
  export type tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Filter which tokens to delete.
     */
    where: tokensWhereUniqueInput
  }


  /**
   * tokens deleteMany
   */
  export type tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to delete
     */
    where?: tokensWhereInput
  }


  /**
   * tokens without action
   */
  export type tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    user: string | null
    pass: string | null
    isAdmin: boolean | null
    isUser: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    user: string | null
    pass: string | null
    isAdmin: boolean | null
    isUser: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    user: number
    pass: number
    isAdmin: number
    isUser: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    user?: true
    pass?: true
    isAdmin?: true
    isUser?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    user?: true
    pass?: true
    isAdmin?: true
    isUser?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    user?: true
    pass?: true
    isAdmin?: true
    isUser?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    user: string
    pass: string
    isAdmin: boolean
    isUser: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    pass?: boolean
    isAdmin?: boolean
    isUser?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    user?: boolean
    pass?: boolean
    isAdmin?: boolean
    isUser?: boolean
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user: string
      pass: string
      isAdmin: boolean
      isUser: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly user: FieldRef<"users", 'String'>
    readonly pass: FieldRef<"users", 'String'>
    readonly isAdmin: FieldRef<"users", 'Boolean'>
    readonly isUser: FieldRef<"users", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
  }



  /**
   * Model oneTimeToken
   */

  export type AggregateOneTimeToken = {
    _count: OneTimeTokenCountAggregateOutputType | null
    _avg: OneTimeTokenAvgAggregateOutputType | null
    _sum: OneTimeTokenSumAggregateOutputType | null
    _min: OneTimeTokenMinAggregateOutputType | null
    _max: OneTimeTokenMaxAggregateOutputType | null
  }

  export type OneTimeTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type OneTimeTokenSumAggregateOutputType = {
    id: number | null
  }

  export type OneTimeTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    limit: Date | null
  }

  export type OneTimeTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    limit: Date | null
  }

  export type OneTimeTokenCountAggregateOutputType = {
    id: number
    token: number
    limit: number
    _all: number
  }


  export type OneTimeTokenAvgAggregateInputType = {
    id?: true
  }

  export type OneTimeTokenSumAggregateInputType = {
    id?: true
  }

  export type OneTimeTokenMinAggregateInputType = {
    id?: true
    token?: true
    limit?: true
  }

  export type OneTimeTokenMaxAggregateInputType = {
    id?: true
    token?: true
    limit?: true
  }

  export type OneTimeTokenCountAggregateInputType = {
    id?: true
    token?: true
    limit?: true
    _all?: true
  }

  export type OneTimeTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which oneTimeToken to aggregate.
     */
    where?: oneTimeTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oneTimeTokens to fetch.
     */
    orderBy?: oneTimeTokenOrderByWithRelationInput | oneTimeTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: oneTimeTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oneTimeTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oneTimeTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned oneTimeTokens
    **/
    _count?: true | OneTimeTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OneTimeTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OneTimeTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OneTimeTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OneTimeTokenMaxAggregateInputType
  }

  export type GetOneTimeTokenAggregateType<T extends OneTimeTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateOneTimeToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOneTimeToken[P]>
      : GetScalarType<T[P], AggregateOneTimeToken[P]>
  }




  export type oneTimeTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: oneTimeTokenWhereInput
    orderBy?: oneTimeTokenOrderByWithAggregationInput | oneTimeTokenOrderByWithAggregationInput[]
    by: OneTimeTokenScalarFieldEnum[] | OneTimeTokenScalarFieldEnum
    having?: oneTimeTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OneTimeTokenCountAggregateInputType | true
    _avg?: OneTimeTokenAvgAggregateInputType
    _sum?: OneTimeTokenSumAggregateInputType
    _min?: OneTimeTokenMinAggregateInputType
    _max?: OneTimeTokenMaxAggregateInputType
  }

  export type OneTimeTokenGroupByOutputType = {
    id: number
    token: string
    limit: Date
    _count: OneTimeTokenCountAggregateOutputType | null
    _avg: OneTimeTokenAvgAggregateOutputType | null
    _sum: OneTimeTokenSumAggregateOutputType | null
    _min: OneTimeTokenMinAggregateOutputType | null
    _max: OneTimeTokenMaxAggregateOutputType | null
  }

  type GetOneTimeTokenGroupByPayload<T extends oneTimeTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OneTimeTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OneTimeTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OneTimeTokenGroupByOutputType[P]>
            : GetScalarType<T[P], OneTimeTokenGroupByOutputType[P]>
        }
      >
    >


  export type oneTimeTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    limit?: boolean
  }, ExtArgs["result"]["oneTimeToken"]>

  export type oneTimeTokenSelectScalar = {
    id?: boolean
    token?: boolean
    limit?: boolean
  }


  export type $oneTimeTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "oneTimeToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      limit: Date
    }, ExtArgs["result"]["oneTimeToken"]>
    composites: {}
  }


  type oneTimeTokenGetPayload<S extends boolean | null | undefined | oneTimeTokenDefaultArgs> = $Result.GetResult<Prisma.$oneTimeTokenPayload, S>

  type oneTimeTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<oneTimeTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OneTimeTokenCountAggregateInputType | true
    }

  export interface oneTimeTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['oneTimeToken'], meta: { name: 'oneTimeToken' } }
    /**
     * Find zero or one OneTimeToken that matches the filter.
     * @param {oneTimeTokenFindUniqueArgs} args - Arguments to find a OneTimeToken
     * @example
     * // Get one OneTimeToken
     * const oneTimeToken = await prisma.oneTimeToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends oneTimeTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, oneTimeTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__oneTimeTokenClient<$Result.GetResult<Prisma.$oneTimeTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OneTimeToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {oneTimeTokenFindUniqueOrThrowArgs} args - Arguments to find a OneTimeToken
     * @example
     * // Get one OneTimeToken
     * const oneTimeToken = await prisma.oneTimeToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends oneTimeTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, oneTimeTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__oneTimeTokenClient<$Result.GetResult<Prisma.$oneTimeTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OneTimeToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oneTimeTokenFindFirstArgs} args - Arguments to find a OneTimeToken
     * @example
     * // Get one OneTimeToken
     * const oneTimeToken = await prisma.oneTimeToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends oneTimeTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, oneTimeTokenFindFirstArgs<ExtArgs>>
    ): Prisma__oneTimeTokenClient<$Result.GetResult<Prisma.$oneTimeTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OneTimeToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oneTimeTokenFindFirstOrThrowArgs} args - Arguments to find a OneTimeToken
     * @example
     * // Get one OneTimeToken
     * const oneTimeToken = await prisma.oneTimeToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends oneTimeTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, oneTimeTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__oneTimeTokenClient<$Result.GetResult<Prisma.$oneTimeTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OneTimeTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oneTimeTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OneTimeTokens
     * const oneTimeTokens = await prisma.oneTimeToken.findMany()
     * 
     * // Get first 10 OneTimeTokens
     * const oneTimeTokens = await prisma.oneTimeToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oneTimeTokenWithIdOnly = await prisma.oneTimeToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends oneTimeTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, oneTimeTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$oneTimeTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OneTimeToken.
     * @param {oneTimeTokenCreateArgs} args - Arguments to create a OneTimeToken.
     * @example
     * // Create one OneTimeToken
     * const OneTimeToken = await prisma.oneTimeToken.create({
     *   data: {
     *     // ... data to create a OneTimeToken
     *   }
     * })
     * 
    **/
    create<T extends oneTimeTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, oneTimeTokenCreateArgs<ExtArgs>>
    ): Prisma__oneTimeTokenClient<$Result.GetResult<Prisma.$oneTimeTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OneTimeTokens.
     *     @param {oneTimeTokenCreateManyArgs} args - Arguments to create many OneTimeTokens.
     *     @example
     *     // Create many OneTimeTokens
     *     const oneTimeToken = await prisma.oneTimeToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends oneTimeTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, oneTimeTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OneTimeToken.
     * @param {oneTimeTokenDeleteArgs} args - Arguments to delete one OneTimeToken.
     * @example
     * // Delete one OneTimeToken
     * const OneTimeToken = await prisma.oneTimeToken.delete({
     *   where: {
     *     // ... filter to delete one OneTimeToken
     *   }
     * })
     * 
    **/
    delete<T extends oneTimeTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, oneTimeTokenDeleteArgs<ExtArgs>>
    ): Prisma__oneTimeTokenClient<$Result.GetResult<Prisma.$oneTimeTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OneTimeToken.
     * @param {oneTimeTokenUpdateArgs} args - Arguments to update one OneTimeToken.
     * @example
     * // Update one OneTimeToken
     * const oneTimeToken = await prisma.oneTimeToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends oneTimeTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, oneTimeTokenUpdateArgs<ExtArgs>>
    ): Prisma__oneTimeTokenClient<$Result.GetResult<Prisma.$oneTimeTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OneTimeTokens.
     * @param {oneTimeTokenDeleteManyArgs} args - Arguments to filter OneTimeTokens to delete.
     * @example
     * // Delete a few OneTimeTokens
     * const { count } = await prisma.oneTimeToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends oneTimeTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, oneTimeTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OneTimeTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oneTimeTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OneTimeTokens
     * const oneTimeToken = await prisma.oneTimeToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends oneTimeTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, oneTimeTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OneTimeToken.
     * @param {oneTimeTokenUpsertArgs} args - Arguments to update or create a OneTimeToken.
     * @example
     * // Update or create a OneTimeToken
     * const oneTimeToken = await prisma.oneTimeToken.upsert({
     *   create: {
     *     // ... data to create a OneTimeToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OneTimeToken we want to update
     *   }
     * })
    **/
    upsert<T extends oneTimeTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, oneTimeTokenUpsertArgs<ExtArgs>>
    ): Prisma__oneTimeTokenClient<$Result.GetResult<Prisma.$oneTimeTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OneTimeTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oneTimeTokenCountArgs} args - Arguments to filter OneTimeTokens to count.
     * @example
     * // Count the number of OneTimeTokens
     * const count = await prisma.oneTimeToken.count({
     *   where: {
     *     // ... the filter for the OneTimeTokens we want to count
     *   }
     * })
    **/
    count<T extends oneTimeTokenCountArgs>(
      args?: Subset<T, oneTimeTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OneTimeTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OneTimeToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneTimeTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OneTimeTokenAggregateArgs>(args: Subset<T, OneTimeTokenAggregateArgs>): Prisma.PrismaPromise<GetOneTimeTokenAggregateType<T>>

    /**
     * Group by OneTimeToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oneTimeTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends oneTimeTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: oneTimeTokenGroupByArgs['orderBy'] }
        : { orderBy?: oneTimeTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, oneTimeTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOneTimeTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the oneTimeToken model
   */
  readonly fields: oneTimeTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for oneTimeToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__oneTimeTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the oneTimeToken model
   */ 
  interface oneTimeTokenFieldRefs {
    readonly id: FieldRef<"oneTimeToken", 'Int'>
    readonly token: FieldRef<"oneTimeToken", 'String'>
    readonly limit: FieldRef<"oneTimeToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * oneTimeToken findUnique
   */
  export type oneTimeTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oneTimeToken
     */
    select?: oneTimeTokenSelect<ExtArgs> | null
    /**
     * Filter, which oneTimeToken to fetch.
     */
    where: oneTimeTokenWhereUniqueInput
  }


  /**
   * oneTimeToken findUniqueOrThrow
   */
  export type oneTimeTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oneTimeToken
     */
    select?: oneTimeTokenSelect<ExtArgs> | null
    /**
     * Filter, which oneTimeToken to fetch.
     */
    where: oneTimeTokenWhereUniqueInput
  }


  /**
   * oneTimeToken findFirst
   */
  export type oneTimeTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oneTimeToken
     */
    select?: oneTimeTokenSelect<ExtArgs> | null
    /**
     * Filter, which oneTimeToken to fetch.
     */
    where?: oneTimeTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oneTimeTokens to fetch.
     */
    orderBy?: oneTimeTokenOrderByWithRelationInput | oneTimeTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for oneTimeTokens.
     */
    cursor?: oneTimeTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oneTimeTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oneTimeTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of oneTimeTokens.
     */
    distinct?: OneTimeTokenScalarFieldEnum | OneTimeTokenScalarFieldEnum[]
  }


  /**
   * oneTimeToken findFirstOrThrow
   */
  export type oneTimeTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oneTimeToken
     */
    select?: oneTimeTokenSelect<ExtArgs> | null
    /**
     * Filter, which oneTimeToken to fetch.
     */
    where?: oneTimeTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oneTimeTokens to fetch.
     */
    orderBy?: oneTimeTokenOrderByWithRelationInput | oneTimeTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for oneTimeTokens.
     */
    cursor?: oneTimeTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oneTimeTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oneTimeTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of oneTimeTokens.
     */
    distinct?: OneTimeTokenScalarFieldEnum | OneTimeTokenScalarFieldEnum[]
  }


  /**
   * oneTimeToken findMany
   */
  export type oneTimeTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oneTimeToken
     */
    select?: oneTimeTokenSelect<ExtArgs> | null
    /**
     * Filter, which oneTimeTokens to fetch.
     */
    where?: oneTimeTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oneTimeTokens to fetch.
     */
    orderBy?: oneTimeTokenOrderByWithRelationInput | oneTimeTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing oneTimeTokens.
     */
    cursor?: oneTimeTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oneTimeTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oneTimeTokens.
     */
    skip?: number
    distinct?: OneTimeTokenScalarFieldEnum | OneTimeTokenScalarFieldEnum[]
  }


  /**
   * oneTimeToken create
   */
  export type oneTimeTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oneTimeToken
     */
    select?: oneTimeTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a oneTimeToken.
     */
    data: XOR<oneTimeTokenCreateInput, oneTimeTokenUncheckedCreateInput>
  }


  /**
   * oneTimeToken createMany
   */
  export type oneTimeTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many oneTimeTokens.
     */
    data: oneTimeTokenCreateManyInput | oneTimeTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * oneTimeToken update
   */
  export type oneTimeTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oneTimeToken
     */
    select?: oneTimeTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a oneTimeToken.
     */
    data: XOR<oneTimeTokenUpdateInput, oneTimeTokenUncheckedUpdateInput>
    /**
     * Choose, which oneTimeToken to update.
     */
    where: oneTimeTokenWhereUniqueInput
  }


  /**
   * oneTimeToken updateMany
   */
  export type oneTimeTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update oneTimeTokens.
     */
    data: XOR<oneTimeTokenUpdateManyMutationInput, oneTimeTokenUncheckedUpdateManyInput>
    /**
     * Filter which oneTimeTokens to update
     */
    where?: oneTimeTokenWhereInput
  }


  /**
   * oneTimeToken upsert
   */
  export type oneTimeTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oneTimeToken
     */
    select?: oneTimeTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the oneTimeToken to update in case it exists.
     */
    where: oneTimeTokenWhereUniqueInput
    /**
     * In case the oneTimeToken found by the `where` argument doesn't exist, create a new oneTimeToken with this data.
     */
    create: XOR<oneTimeTokenCreateInput, oneTimeTokenUncheckedCreateInput>
    /**
     * In case the oneTimeToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<oneTimeTokenUpdateInput, oneTimeTokenUncheckedUpdateInput>
  }


  /**
   * oneTimeToken delete
   */
  export type oneTimeTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oneTimeToken
     */
    select?: oneTimeTokenSelect<ExtArgs> | null
    /**
     * Filter which oneTimeToken to delete.
     */
    where: oneTimeTokenWhereUniqueInput
  }


  /**
   * oneTimeToken deleteMany
   */
  export type oneTimeTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which oneTimeTokens to delete
     */
    where?: oneTimeTokenWhereInput
  }


  /**
   * oneTimeToken without action
   */
  export type oneTimeTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oneTimeToken
     */
    select?: oneTimeTokenSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MainAccountScalarFieldEnum: {
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

  export type MainAccountScalarFieldEnum = (typeof MainAccountScalarFieldEnum)[keyof typeof MainAccountScalarFieldEnum]


  export const HatosaiAccountScalarFieldEnum: {
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

  export type HatosaiAccountScalarFieldEnum = (typeof HatosaiAccountScalarFieldEnum)[keyof typeof HatosaiAccountScalarFieldEnum]


  export const ClubsupportAccountScalarFieldEnum: {
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

  export type ClubsupportAccountScalarFieldEnum = (typeof ClubsupportAccountScalarFieldEnum)[keyof typeof ClubsupportAccountScalarFieldEnum]


  export const AlumniAccountScalarFieldEnum: {
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

  export type AlumniAccountScalarFieldEnum = (typeof AlumniAccountScalarFieldEnum)[keyof typeof AlumniAccountScalarFieldEnum]


  export const AidScalarFieldEnum: {
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

  export type AidScalarFieldEnum = (typeof AidScalarFieldEnum)[keyof typeof AidScalarFieldEnum]


  export const AccessHistoryScalarFieldEnum: {
    id: 'id',
    accessDate: 'accessDate'
  };

  export type AccessHistoryScalarFieldEnum = (typeof AccessHistoryScalarFieldEnum)[keyof typeof AccessHistoryScalarFieldEnum]


  export const ThreadIDScalarFieldEnum: {
    id: 'id',
    hookurl: 'hookurl',
    threadID: 'threadID',
    mode: 'mode'
  };

  export type ThreadIDScalarFieldEnum = (typeof ThreadIDScalarFieldEnum)[keyof typeof ThreadIDScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    id: 'id',
    tokens: 'tokens',
    isUser: 'isUser',
    isAdmin: 'isAdmin',
    loginDate: 'loginDate',
    limit: 'limit'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    user: 'user',
    pass: 'pass',
    isAdmin: 'isAdmin',
    isUser: 'isUser'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const OneTimeTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    limit: 'limit'
  };

  export type OneTimeTokenScalarFieldEnum = (typeof OneTimeTokenScalarFieldEnum)[keyof typeof OneTimeTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type mainAccountWhereInput = {
    AND?: mainAccountWhereInput | mainAccountWhereInput[]
    OR?: mainAccountWhereInput[]
    NOT?: mainAccountWhereInput | mainAccountWhereInput[]
    id?: IntFilter<"mainAccount"> | number
    year?: StringFilter<"mainAccount"> | string
    date?: DateTimeFilter<"mainAccount"> | Date | string
    type?: StringFilter<"mainAccount"> | string
    typeAlphabet?: StringFilter<"mainAccount"> | string
    subtype?: StringFilter<"mainAccount"> | string
    fixture?: StringFilter<"mainAccount"> | string
    income?: IntFilter<"mainAccount"> | number
    outcome?: IntFilter<"mainAccount"> | number
  }

  export type mainAccountOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type mainAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mainAccountWhereInput | mainAccountWhereInput[]
    OR?: mainAccountWhereInput[]
    NOT?: mainAccountWhereInput | mainAccountWhereInput[]
    year?: StringFilter<"mainAccount"> | string
    date?: DateTimeFilter<"mainAccount"> | Date | string
    type?: StringFilter<"mainAccount"> | string
    typeAlphabet?: StringFilter<"mainAccount"> | string
    subtype?: StringFilter<"mainAccount"> | string
    fixture?: StringFilter<"mainAccount"> | string
    income?: IntFilter<"mainAccount"> | number
    outcome?: IntFilter<"mainAccount"> | number
  }, "id">

  export type mainAccountOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
    _count?: mainAccountCountOrderByAggregateInput
    _avg?: mainAccountAvgOrderByAggregateInput
    _max?: mainAccountMaxOrderByAggregateInput
    _min?: mainAccountMinOrderByAggregateInput
    _sum?: mainAccountSumOrderByAggregateInput
  }

  export type mainAccountScalarWhereWithAggregatesInput = {
    AND?: mainAccountScalarWhereWithAggregatesInput | mainAccountScalarWhereWithAggregatesInput[]
    OR?: mainAccountScalarWhereWithAggregatesInput[]
    NOT?: mainAccountScalarWhereWithAggregatesInput | mainAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mainAccount"> | number
    year?: StringWithAggregatesFilter<"mainAccount"> | string
    date?: DateTimeWithAggregatesFilter<"mainAccount"> | Date | string
    type?: StringWithAggregatesFilter<"mainAccount"> | string
    typeAlphabet?: StringWithAggregatesFilter<"mainAccount"> | string
    subtype?: StringWithAggregatesFilter<"mainAccount"> | string
    fixture?: StringWithAggregatesFilter<"mainAccount"> | string
    income?: IntWithAggregatesFilter<"mainAccount"> | number
    outcome?: IntWithAggregatesFilter<"mainAccount"> | number
  }

  export type hatosaiAccountWhereInput = {
    AND?: hatosaiAccountWhereInput | hatosaiAccountWhereInput[]
    OR?: hatosaiAccountWhereInput[]
    NOT?: hatosaiAccountWhereInput | hatosaiAccountWhereInput[]
    id?: IntFilter<"hatosaiAccount"> | number
    year?: StringFilter<"hatosaiAccount"> | string
    date?: DateTimeFilter<"hatosaiAccount"> | Date | string
    type?: StringFilter<"hatosaiAccount"> | string
    typeAlphabet?: StringFilter<"hatosaiAccount"> | string
    subtype?: StringFilter<"hatosaiAccount"> | string
    fixture?: StringFilter<"hatosaiAccount"> | string
    income?: IntFilter<"hatosaiAccount"> | number
    outcome?: IntFilter<"hatosaiAccount"> | number
  }

  export type hatosaiAccountOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type hatosaiAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hatosaiAccountWhereInput | hatosaiAccountWhereInput[]
    OR?: hatosaiAccountWhereInput[]
    NOT?: hatosaiAccountWhereInput | hatosaiAccountWhereInput[]
    year?: StringFilter<"hatosaiAccount"> | string
    date?: DateTimeFilter<"hatosaiAccount"> | Date | string
    type?: StringFilter<"hatosaiAccount"> | string
    typeAlphabet?: StringFilter<"hatosaiAccount"> | string
    subtype?: StringFilter<"hatosaiAccount"> | string
    fixture?: StringFilter<"hatosaiAccount"> | string
    income?: IntFilter<"hatosaiAccount"> | number
    outcome?: IntFilter<"hatosaiAccount"> | number
  }, "id">

  export type hatosaiAccountOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
    _count?: hatosaiAccountCountOrderByAggregateInput
    _avg?: hatosaiAccountAvgOrderByAggregateInput
    _max?: hatosaiAccountMaxOrderByAggregateInput
    _min?: hatosaiAccountMinOrderByAggregateInput
    _sum?: hatosaiAccountSumOrderByAggregateInput
  }

  export type hatosaiAccountScalarWhereWithAggregatesInput = {
    AND?: hatosaiAccountScalarWhereWithAggregatesInput | hatosaiAccountScalarWhereWithAggregatesInput[]
    OR?: hatosaiAccountScalarWhereWithAggregatesInput[]
    NOT?: hatosaiAccountScalarWhereWithAggregatesInput | hatosaiAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hatosaiAccount"> | number
    year?: StringWithAggregatesFilter<"hatosaiAccount"> | string
    date?: DateTimeWithAggregatesFilter<"hatosaiAccount"> | Date | string
    type?: StringWithAggregatesFilter<"hatosaiAccount"> | string
    typeAlphabet?: StringWithAggregatesFilter<"hatosaiAccount"> | string
    subtype?: StringWithAggregatesFilter<"hatosaiAccount"> | string
    fixture?: StringWithAggregatesFilter<"hatosaiAccount"> | string
    income?: IntWithAggregatesFilter<"hatosaiAccount"> | number
    outcome?: IntWithAggregatesFilter<"hatosaiAccount"> | number
  }

  export type clubsupportAccountWhereInput = {
    AND?: clubsupportAccountWhereInput | clubsupportAccountWhereInput[]
    OR?: clubsupportAccountWhereInput[]
    NOT?: clubsupportAccountWhereInput | clubsupportAccountWhereInput[]
    id?: IntFilter<"clubsupportAccount"> | number
    year?: StringFilter<"clubsupportAccount"> | string
    date?: DateTimeFilter<"clubsupportAccount"> | Date | string
    type?: StringFilter<"clubsupportAccount"> | string
    typeAlphabet?: StringFilter<"clubsupportAccount"> | string
    subtype?: StringFilter<"clubsupportAccount"> | string
    fixture?: StringFilter<"clubsupportAccount"> | string
    income?: IntFilter<"clubsupportAccount"> | number
    outcome?: IntFilter<"clubsupportAccount"> | number
  }

  export type clubsupportAccountOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type clubsupportAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: clubsupportAccountWhereInput | clubsupportAccountWhereInput[]
    OR?: clubsupportAccountWhereInput[]
    NOT?: clubsupportAccountWhereInput | clubsupportAccountWhereInput[]
    year?: StringFilter<"clubsupportAccount"> | string
    date?: DateTimeFilter<"clubsupportAccount"> | Date | string
    type?: StringFilter<"clubsupportAccount"> | string
    typeAlphabet?: StringFilter<"clubsupportAccount"> | string
    subtype?: StringFilter<"clubsupportAccount"> | string
    fixture?: StringFilter<"clubsupportAccount"> | string
    income?: IntFilter<"clubsupportAccount"> | number
    outcome?: IntFilter<"clubsupportAccount"> | number
  }, "id">

  export type clubsupportAccountOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
    _count?: clubsupportAccountCountOrderByAggregateInput
    _avg?: clubsupportAccountAvgOrderByAggregateInput
    _max?: clubsupportAccountMaxOrderByAggregateInput
    _min?: clubsupportAccountMinOrderByAggregateInput
    _sum?: clubsupportAccountSumOrderByAggregateInput
  }

  export type clubsupportAccountScalarWhereWithAggregatesInput = {
    AND?: clubsupportAccountScalarWhereWithAggregatesInput | clubsupportAccountScalarWhereWithAggregatesInput[]
    OR?: clubsupportAccountScalarWhereWithAggregatesInput[]
    NOT?: clubsupportAccountScalarWhereWithAggregatesInput | clubsupportAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clubsupportAccount"> | number
    year?: StringWithAggregatesFilter<"clubsupportAccount"> | string
    date?: DateTimeWithAggregatesFilter<"clubsupportAccount"> | Date | string
    type?: StringWithAggregatesFilter<"clubsupportAccount"> | string
    typeAlphabet?: StringWithAggregatesFilter<"clubsupportAccount"> | string
    subtype?: StringWithAggregatesFilter<"clubsupportAccount"> | string
    fixture?: StringWithAggregatesFilter<"clubsupportAccount"> | string
    income?: IntWithAggregatesFilter<"clubsupportAccount"> | number
    outcome?: IntWithAggregatesFilter<"clubsupportAccount"> | number
  }

  export type alumniAccountWhereInput = {
    AND?: alumniAccountWhereInput | alumniAccountWhereInput[]
    OR?: alumniAccountWhereInput[]
    NOT?: alumniAccountWhereInput | alumniAccountWhereInput[]
    id?: IntFilter<"alumniAccount"> | number
    year?: StringFilter<"alumniAccount"> | string
    date?: DateTimeFilter<"alumniAccount"> | Date | string
    type?: StringFilter<"alumniAccount"> | string
    typeAlphabet?: StringFilter<"alumniAccount"> | string
    subtype?: StringFilter<"alumniAccount"> | string
    fixture?: StringFilter<"alumniAccount"> | string
    income?: IntFilter<"alumniAccount"> | number
    outcome?: IntFilter<"alumniAccount"> | number
  }

  export type alumniAccountOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type alumniAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: alumniAccountWhereInput | alumniAccountWhereInput[]
    OR?: alumniAccountWhereInput[]
    NOT?: alumniAccountWhereInput | alumniAccountWhereInput[]
    year?: StringFilter<"alumniAccount"> | string
    date?: DateTimeFilter<"alumniAccount"> | Date | string
    type?: StringFilter<"alumniAccount"> | string
    typeAlphabet?: StringFilter<"alumniAccount"> | string
    subtype?: StringFilter<"alumniAccount"> | string
    fixture?: StringFilter<"alumniAccount"> | string
    income?: IntFilter<"alumniAccount"> | number
    outcome?: IntFilter<"alumniAccount"> | number
  }, "id">

  export type alumniAccountOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
    _count?: alumniAccountCountOrderByAggregateInput
    _avg?: alumniAccountAvgOrderByAggregateInput
    _max?: alumniAccountMaxOrderByAggregateInput
    _min?: alumniAccountMinOrderByAggregateInput
    _sum?: alumniAccountSumOrderByAggregateInput
  }

  export type alumniAccountScalarWhereWithAggregatesInput = {
    AND?: alumniAccountScalarWhereWithAggregatesInput | alumniAccountScalarWhereWithAggregatesInput[]
    OR?: alumniAccountScalarWhereWithAggregatesInput[]
    NOT?: alumniAccountScalarWhereWithAggregatesInput | alumniAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"alumniAccount"> | number
    year?: StringWithAggregatesFilter<"alumniAccount"> | string
    date?: DateTimeWithAggregatesFilter<"alumniAccount"> | Date | string
    type?: StringWithAggregatesFilter<"alumniAccount"> | string
    typeAlphabet?: StringWithAggregatesFilter<"alumniAccount"> | string
    subtype?: StringWithAggregatesFilter<"alumniAccount"> | string
    fixture?: StringWithAggregatesFilter<"alumniAccount"> | string
    income?: IntWithAggregatesFilter<"alumniAccount"> | number
    outcome?: IntWithAggregatesFilter<"alumniAccount"> | number
  }

  export type aidWhereInput = {
    AND?: aidWhereInput | aidWhereInput[]
    OR?: aidWhereInput[]
    NOT?: aidWhereInput | aidWhereInput[]
    id?: IntFilter<"aid"> | number
    year?: StringFilter<"aid"> | string
    date?: DateTimeFilter<"aid"> | Date | string
    type?: StringFilter<"aid"> | string
    typeAlphabet?: StringFilter<"aid"> | string
    subtype?: StringFilter<"aid"> | string
    fixture?: StringFilter<"aid"> | string
    income?: IntFilter<"aid"> | number
    outcome?: IntFilter<"aid"> | number
  }

  export type aidOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type aidWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: aidWhereInput | aidWhereInput[]
    OR?: aidWhereInput[]
    NOT?: aidWhereInput | aidWhereInput[]
    year?: StringFilter<"aid"> | string
    date?: DateTimeFilter<"aid"> | Date | string
    type?: StringFilter<"aid"> | string
    typeAlphabet?: StringFilter<"aid"> | string
    subtype?: StringFilter<"aid"> | string
    fixture?: StringFilter<"aid"> | string
    income?: IntFilter<"aid"> | number
    outcome?: IntFilter<"aid"> | number
  }, "id">

  export type aidOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
    _count?: aidCountOrderByAggregateInput
    _avg?: aidAvgOrderByAggregateInput
    _max?: aidMaxOrderByAggregateInput
    _min?: aidMinOrderByAggregateInput
    _sum?: aidSumOrderByAggregateInput
  }

  export type aidScalarWhereWithAggregatesInput = {
    AND?: aidScalarWhereWithAggregatesInput | aidScalarWhereWithAggregatesInput[]
    OR?: aidScalarWhereWithAggregatesInput[]
    NOT?: aidScalarWhereWithAggregatesInput | aidScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"aid"> | number
    year?: StringWithAggregatesFilter<"aid"> | string
    date?: DateTimeWithAggregatesFilter<"aid"> | Date | string
    type?: StringWithAggregatesFilter<"aid"> | string
    typeAlphabet?: StringWithAggregatesFilter<"aid"> | string
    subtype?: StringWithAggregatesFilter<"aid"> | string
    fixture?: StringWithAggregatesFilter<"aid"> | string
    income?: IntWithAggregatesFilter<"aid"> | number
    outcome?: IntWithAggregatesFilter<"aid"> | number
  }

  export type accessHistoryWhereInput = {
    AND?: accessHistoryWhereInput | accessHistoryWhereInput[]
    OR?: accessHistoryWhereInput[]
    NOT?: accessHistoryWhereInput | accessHistoryWhereInput[]
    id?: IntFilter<"accessHistory"> | number
    accessDate?: DateTimeFilter<"accessHistory"> | Date | string
  }

  export type accessHistoryOrderByWithRelationInput = {
    id?: SortOrder
    accessDate?: SortOrder
  }

  export type accessHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: accessHistoryWhereInput | accessHistoryWhereInput[]
    OR?: accessHistoryWhereInput[]
    NOT?: accessHistoryWhereInput | accessHistoryWhereInput[]
    accessDate?: DateTimeFilter<"accessHistory"> | Date | string
  }, "id">

  export type accessHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    accessDate?: SortOrder
    _count?: accessHistoryCountOrderByAggregateInput
    _avg?: accessHistoryAvgOrderByAggregateInput
    _max?: accessHistoryMaxOrderByAggregateInput
    _min?: accessHistoryMinOrderByAggregateInput
    _sum?: accessHistorySumOrderByAggregateInput
  }

  export type accessHistoryScalarWhereWithAggregatesInput = {
    AND?: accessHistoryScalarWhereWithAggregatesInput | accessHistoryScalarWhereWithAggregatesInput[]
    OR?: accessHistoryScalarWhereWithAggregatesInput[]
    NOT?: accessHistoryScalarWhereWithAggregatesInput | accessHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"accessHistory"> | number
    accessDate?: DateTimeWithAggregatesFilter<"accessHistory"> | Date | string
  }

  export type threadIDWhereInput = {
    AND?: threadIDWhereInput | threadIDWhereInput[]
    OR?: threadIDWhereInput[]
    NOT?: threadIDWhereInput | threadIDWhereInput[]
    id?: IntFilter<"threadID"> | number
    hookurl?: StringFilter<"threadID"> | string
    threadID?: StringFilter<"threadID"> | string
    mode?: StringFilter<"threadID"> | string
  }

  export type threadIDOrderByWithRelationInput = {
    id?: SortOrder
    hookurl?: SortOrder
    threadID?: SortOrder
    mode?: SortOrder
  }

  export type threadIDWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: threadIDWhereInput | threadIDWhereInput[]
    OR?: threadIDWhereInput[]
    NOT?: threadIDWhereInput | threadIDWhereInput[]
    hookurl?: StringFilter<"threadID"> | string
    threadID?: StringFilter<"threadID"> | string
    mode?: StringFilter<"threadID"> | string
  }, "id">

  export type threadIDOrderByWithAggregationInput = {
    id?: SortOrder
    hookurl?: SortOrder
    threadID?: SortOrder
    mode?: SortOrder
    _count?: threadIDCountOrderByAggregateInput
    _avg?: threadIDAvgOrderByAggregateInput
    _max?: threadIDMaxOrderByAggregateInput
    _min?: threadIDMinOrderByAggregateInput
    _sum?: threadIDSumOrderByAggregateInput
  }

  export type threadIDScalarWhereWithAggregatesInput = {
    AND?: threadIDScalarWhereWithAggregatesInput | threadIDScalarWhereWithAggregatesInput[]
    OR?: threadIDScalarWhereWithAggregatesInput[]
    NOT?: threadIDScalarWhereWithAggregatesInput | threadIDScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"threadID"> | number
    hookurl?: StringWithAggregatesFilter<"threadID"> | string
    threadID?: StringWithAggregatesFilter<"threadID"> | string
    mode?: StringWithAggregatesFilter<"threadID"> | string
  }

  export type tokensWhereInput = {
    AND?: tokensWhereInput | tokensWhereInput[]
    OR?: tokensWhereInput[]
    NOT?: tokensWhereInput | tokensWhereInput[]
    id?: IntFilter<"tokens"> | number
    tokens?: StringFilter<"tokens"> | string
    isUser?: BoolFilter<"tokens"> | boolean
    isAdmin?: BoolFilter<"tokens"> | boolean
    loginDate?: DateTimeFilter<"tokens"> | Date | string
    limit?: DateTimeFilter<"tokens"> | Date | string
  }

  export type tokensOrderByWithRelationInput = {
    id?: SortOrder
    tokens?: SortOrder
    isUser?: SortOrder
    isAdmin?: SortOrder
    loginDate?: SortOrder
    limit?: SortOrder
  }

  export type tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tokensWhereInput | tokensWhereInput[]
    OR?: tokensWhereInput[]
    NOT?: tokensWhereInput | tokensWhereInput[]
    tokens?: StringFilter<"tokens"> | string
    isUser?: BoolFilter<"tokens"> | boolean
    isAdmin?: BoolFilter<"tokens"> | boolean
    loginDate?: DateTimeFilter<"tokens"> | Date | string
    limit?: DateTimeFilter<"tokens"> | Date | string
  }, "id">

  export type tokensOrderByWithAggregationInput = {
    id?: SortOrder
    tokens?: SortOrder
    isUser?: SortOrder
    isAdmin?: SortOrder
    loginDate?: SortOrder
    limit?: SortOrder
    _count?: tokensCountOrderByAggregateInput
    _avg?: tokensAvgOrderByAggregateInput
    _max?: tokensMaxOrderByAggregateInput
    _min?: tokensMinOrderByAggregateInput
    _sum?: tokensSumOrderByAggregateInput
  }

  export type tokensScalarWhereWithAggregatesInput = {
    AND?: tokensScalarWhereWithAggregatesInput | tokensScalarWhereWithAggregatesInput[]
    OR?: tokensScalarWhereWithAggregatesInput[]
    NOT?: tokensScalarWhereWithAggregatesInput | tokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tokens"> | number
    tokens?: StringWithAggregatesFilter<"tokens"> | string
    isUser?: BoolWithAggregatesFilter<"tokens"> | boolean
    isAdmin?: BoolWithAggregatesFilter<"tokens"> | boolean
    loginDate?: DateTimeWithAggregatesFilter<"tokens"> | Date | string
    limit?: DateTimeWithAggregatesFilter<"tokens"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    user?: StringFilter<"users"> | string
    pass?: StringFilter<"users"> | string
    isAdmin?: BoolFilter<"users"> | boolean
    isUser?: BoolFilter<"users"> | boolean
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    isAdmin?: SortOrder
    isUser?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user?: StringFilter<"users"> | string
    pass?: StringFilter<"users"> | string
    isAdmin?: BoolFilter<"users"> | boolean
    isUser?: BoolFilter<"users"> | boolean
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    isAdmin?: SortOrder
    isUser?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    user?: StringWithAggregatesFilter<"users"> | string
    pass?: StringWithAggregatesFilter<"users"> | string
    isAdmin?: BoolWithAggregatesFilter<"users"> | boolean
    isUser?: BoolWithAggregatesFilter<"users"> | boolean
  }

  export type oneTimeTokenWhereInput = {
    AND?: oneTimeTokenWhereInput | oneTimeTokenWhereInput[]
    OR?: oneTimeTokenWhereInput[]
    NOT?: oneTimeTokenWhereInput | oneTimeTokenWhereInput[]
    id?: IntFilter<"oneTimeToken"> | number
    token?: StringFilter<"oneTimeToken"> | string
    limit?: DateTimeFilter<"oneTimeToken"> | Date | string
  }

  export type oneTimeTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    limit?: SortOrder
  }

  export type oneTimeTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: oneTimeTokenWhereInput | oneTimeTokenWhereInput[]
    OR?: oneTimeTokenWhereInput[]
    NOT?: oneTimeTokenWhereInput | oneTimeTokenWhereInput[]
    token?: StringFilter<"oneTimeToken"> | string
    limit?: DateTimeFilter<"oneTimeToken"> | Date | string
  }, "id">

  export type oneTimeTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    limit?: SortOrder
    _count?: oneTimeTokenCountOrderByAggregateInput
    _avg?: oneTimeTokenAvgOrderByAggregateInput
    _max?: oneTimeTokenMaxOrderByAggregateInput
    _min?: oneTimeTokenMinOrderByAggregateInput
    _sum?: oneTimeTokenSumOrderByAggregateInput
  }

  export type oneTimeTokenScalarWhereWithAggregatesInput = {
    AND?: oneTimeTokenScalarWhereWithAggregatesInput | oneTimeTokenScalarWhereWithAggregatesInput[]
    OR?: oneTimeTokenScalarWhereWithAggregatesInput[]
    NOT?: oneTimeTokenScalarWhereWithAggregatesInput | oneTimeTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"oneTimeToken"> | number
    token?: StringWithAggregatesFilter<"oneTimeToken"> | string
    limit?: DateTimeWithAggregatesFilter<"oneTimeToken"> | Date | string
  }

  export type mainAccountCreateInput = {
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type mainAccountUncheckedCreateInput = {
    id?: number
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type mainAccountUpdateInput = {
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type mainAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type mainAccountCreateManyInput = {
    id?: number
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type mainAccountUpdateManyMutationInput = {
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type mainAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type hatosaiAccountCreateInput = {
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type hatosaiAccountUncheckedCreateInput = {
    id?: number
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type hatosaiAccountUpdateInput = {
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type hatosaiAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type hatosaiAccountCreateManyInput = {
    id?: number
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type hatosaiAccountUpdateManyMutationInput = {
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type hatosaiAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type clubsupportAccountCreateInput = {
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type clubsupportAccountUncheckedCreateInput = {
    id?: number
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type clubsupportAccountUpdateInput = {
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type clubsupportAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type clubsupportAccountCreateManyInput = {
    id?: number
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type clubsupportAccountUpdateManyMutationInput = {
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type clubsupportAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type alumniAccountCreateInput = {
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type alumniAccountUncheckedCreateInput = {
    id?: number
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type alumniAccountUpdateInput = {
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type alumniAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type alumniAccountCreateManyInput = {
    id?: number
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type alumniAccountUpdateManyMutationInput = {
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type alumniAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type aidCreateInput = {
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type aidUncheckedCreateInput = {
    id?: number
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type aidUpdateInput = {
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type aidUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type aidCreateManyInput = {
    id?: number
    year: string
    date: Date | string
    type: string
    typeAlphabet: string
    subtype: string
    fixture: string
    income: number
    outcome: number
  }

  export type aidUpdateManyMutationInput = {
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type aidUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    typeAlphabet?: StringFieldUpdateOperationsInput | string
    subtype?: StringFieldUpdateOperationsInput | string
    fixture?: StringFieldUpdateOperationsInput | string
    income?: IntFieldUpdateOperationsInput | number
    outcome?: IntFieldUpdateOperationsInput | number
  }

  export type accessHistoryCreateInput = {
    accessDate: Date | string
  }

  export type accessHistoryUncheckedCreateInput = {
    id?: number
    accessDate: Date | string
  }

  export type accessHistoryUpdateInput = {
    accessDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accessHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accessHistoryCreateManyInput = {
    id?: number
    accessDate: Date | string
  }

  export type accessHistoryUpdateManyMutationInput = {
    accessDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accessHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type threadIDCreateInput = {
    hookurl: string
    threadID: string
    mode: string
  }

  export type threadIDUncheckedCreateInput = {
    id?: number
    hookurl: string
    threadID: string
    mode: string
  }

  export type threadIDUpdateInput = {
    hookurl?: StringFieldUpdateOperationsInput | string
    threadID?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type threadIDUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hookurl?: StringFieldUpdateOperationsInput | string
    threadID?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type threadIDCreateManyInput = {
    id?: number
    hookurl: string
    threadID: string
    mode: string
  }

  export type threadIDUpdateManyMutationInput = {
    hookurl?: StringFieldUpdateOperationsInput | string
    threadID?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type threadIDUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hookurl?: StringFieldUpdateOperationsInput | string
    threadID?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type tokensCreateInput = {
    tokens: string
    isUser: boolean
    isAdmin: boolean
    loginDate: Date | string
    limit: Date | string
  }

  export type tokensUncheckedCreateInput = {
    id?: number
    tokens: string
    isUser: boolean
    isAdmin: boolean
    loginDate: Date | string
    limit: Date | string
  }

  export type tokensUpdateInput = {
    tokens?: StringFieldUpdateOperationsInput | string
    isUser?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    loginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    limit?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokens?: StringFieldUpdateOperationsInput | string
    isUser?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    loginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    limit?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensCreateManyInput = {
    id?: number
    tokens: string
    isUser: boolean
    isAdmin: boolean
    loginDate: Date | string
    limit: Date | string
  }

  export type tokensUpdateManyMutationInput = {
    tokens?: StringFieldUpdateOperationsInput | string
    isUser?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    loginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    limit?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokens?: StringFieldUpdateOperationsInput | string
    isUser?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    loginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    limit?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    user: string
    pass: string
    isAdmin: boolean
    isUser: boolean
  }

  export type usersUncheckedCreateInput = {
    id?: number
    user: string
    pass: string
    isAdmin: boolean
    isUser: boolean
  }

  export type usersUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersCreateManyInput = {
    id?: number
    user: string
    pass: string
    isAdmin: boolean
    isUser: boolean
  }

  export type usersUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type oneTimeTokenCreateInput = {
    token: string
    limit: Date | string
  }

  export type oneTimeTokenUncheckedCreateInput = {
    id?: number
    token: string
    limit: Date | string
  }

  export type oneTimeTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    limit?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type oneTimeTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    limit?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type oneTimeTokenCreateManyInput = {
    id?: number
    token: string
    limit: Date | string
  }

  export type oneTimeTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    limit?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type oneTimeTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    limit?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type mainAccountCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type mainAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type mainAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type mainAccountMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type mainAccountSumOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type hatosaiAccountCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type hatosaiAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type hatosaiAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type hatosaiAccountMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type hatosaiAccountSumOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type clubsupportAccountCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type clubsupportAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type clubsupportAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type clubsupportAccountMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type clubsupportAccountSumOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type alumniAccountCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type alumniAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type alumniAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type alumniAccountMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type alumniAccountSumOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type aidCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type aidAvgOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type aidMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type aidMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    date?: SortOrder
    type?: SortOrder
    typeAlphabet?: SortOrder
    subtype?: SortOrder
    fixture?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type aidSumOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    outcome?: SortOrder
  }

  export type accessHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    accessDate?: SortOrder
  }

  export type accessHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type accessHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    accessDate?: SortOrder
  }

  export type accessHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    accessDate?: SortOrder
  }

  export type accessHistorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type threadIDCountOrderByAggregateInput = {
    id?: SortOrder
    hookurl?: SortOrder
    threadID?: SortOrder
    mode?: SortOrder
  }

  export type threadIDAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type threadIDMaxOrderByAggregateInput = {
    id?: SortOrder
    hookurl?: SortOrder
    threadID?: SortOrder
    mode?: SortOrder
  }

  export type threadIDMinOrderByAggregateInput = {
    id?: SortOrder
    hookurl?: SortOrder
    threadID?: SortOrder
    mode?: SortOrder
  }

  export type threadIDSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type tokensCountOrderByAggregateInput = {
    id?: SortOrder
    tokens?: SortOrder
    isUser?: SortOrder
    isAdmin?: SortOrder
    loginDate?: SortOrder
    limit?: SortOrder
  }

  export type tokensAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    tokens?: SortOrder
    isUser?: SortOrder
    isAdmin?: SortOrder
    loginDate?: SortOrder
    limit?: SortOrder
  }

  export type tokensMinOrderByAggregateInput = {
    id?: SortOrder
    tokens?: SortOrder
    isUser?: SortOrder
    isAdmin?: SortOrder
    loginDate?: SortOrder
    limit?: SortOrder
  }

  export type tokensSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    isAdmin?: SortOrder
    isUser?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    isAdmin?: SortOrder
    isUser?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    isAdmin?: SortOrder
    isUser?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type oneTimeTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    limit?: SortOrder
  }

  export type oneTimeTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type oneTimeTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    limit?: SortOrder
  }

  export type oneTimeTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    limit?: SortOrder
  }

  export type oneTimeTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use mainAccountDefaultArgs instead
     */
    export type mainAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mainAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use hatosaiAccountDefaultArgs instead
     */
    export type hatosaiAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = hatosaiAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use clubsupportAccountDefaultArgs instead
     */
    export type clubsupportAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clubsupportAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use alumniAccountDefaultArgs instead
     */
    export type alumniAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = alumniAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use aidDefaultArgs instead
     */
    export type aidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = aidDefaultArgs<ExtArgs>
    /**
     * @deprecated Use accessHistoryDefaultArgs instead
     */
    export type accessHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = accessHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use threadIDDefaultArgs instead
     */
    export type threadIDArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = threadIDDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tokensDefaultArgs instead
     */
    export type tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tokensDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use oneTimeTokenDefaultArgs instead
     */
    export type oneTimeTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = oneTimeTokenDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}