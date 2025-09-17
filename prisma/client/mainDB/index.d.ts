
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
 * Model member
 * 
 */
export type member = $Result.DefaultSelection<Prisma.$memberPayload>
/**
 * Model discord
 * 
 */
export type discord = $Result.DefaultSelection<Prisma.$discordPayload>
/**
 * Model movie
 * 
 */
export type movie = $Result.DefaultSelection<Prisma.$moviePayload>
/**
 * Model document
 * 
 */
export type document = $Result.DefaultSelection<Prisma.$documentPayload>
/**
 * Model loginlog
 * 
 */
export type loginlog = $Result.DefaultSelection<Prisma.$loginlogPayload>
/**
 * Model errorloginlog
 * 
 */
export type errorloginlog = $Result.DefaultSelection<Prisma.$errorloginlogPayload>
/**
 * Model kouendate
 * 
 */
export type kouendate = $Result.DefaultSelection<Prisma.$kouendatePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.member.findMany()
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
   * // Fetch zero or more Members
   * const members = await prisma.member.findMany()
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
   * `prisma.member`: Exposes CRUD operations for the **member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.memberDelegate<ExtArgs>;

  /**
   * `prisma.discord`: Exposes CRUD operations for the **discord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discords
    * const discords = await prisma.discord.findMany()
    * ```
    */
  get discord(): Prisma.discordDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.movieDelegate<ExtArgs>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.documentDelegate<ExtArgs>;

  /**
   * `prisma.loginlog`: Exposes CRUD operations for the **loginlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loginlogs
    * const loginlogs = await prisma.loginlog.findMany()
    * ```
    */
  get loginlog(): Prisma.loginlogDelegate<ExtArgs>;

  /**
   * `prisma.errorloginlog`: Exposes CRUD operations for the **errorloginlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Errorloginlogs
    * const errorloginlogs = await prisma.errorloginlog.findMany()
    * ```
    */
  get errorloginlog(): Prisma.errorloginlogDelegate<ExtArgs>;

  /**
   * `prisma.kouendate`: Exposes CRUD operations for the **kouendate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kouendates
    * const kouendates = await prisma.kouendate.findMany()
    * ```
    */
  get kouendate(): Prisma.kouendateDelegate<ExtArgs>;
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
    member: 'member',
    discord: 'discord',
    movie: 'movie',
    document: 'document',
    loginlog: 'loginlog',
    errorloginlog: 'errorloginlog',
    kouendate: 'kouendate'
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
      modelProps: 'member' | 'discord' | 'movie' | 'document' | 'loginlog' | 'errorloginlog' | 'kouendate'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      member: {
        payload: Prisma.$memberPayload<ExtArgs>
        fields: Prisma.memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findFirst: {
            args: Prisma.memberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findMany: {
            args: Prisma.memberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          create: {
            args: Prisma.memberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          createMany: {
            args: Prisma.memberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.memberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          update: {
            args: Prisma.memberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          deleteMany: {
            args: Prisma.memberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.memberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.memberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.memberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.memberCountArgs<ExtArgs>,
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      discord: {
        payload: Prisma.$discordPayload<ExtArgs>
        fields: Prisma.discordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.discordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.discordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordPayload>
          }
          findFirst: {
            args: Prisma.discordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.discordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordPayload>
          }
          findMany: {
            args: Prisma.discordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordPayload>[]
          }
          create: {
            args: Prisma.discordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordPayload>
          }
          createMany: {
            args: Prisma.discordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.discordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordPayload>
          }
          update: {
            args: Prisma.discordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordPayload>
          }
          deleteMany: {
            args: Prisma.discordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.discordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.discordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordPayload>
          }
          aggregate: {
            args: Prisma.DiscordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiscord>
          }
          groupBy: {
            args: Prisma.discordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DiscordGroupByOutputType>[]
          }
          count: {
            args: Prisma.discordCountArgs<ExtArgs>,
            result: $Utils.Optional<DiscordCountAggregateOutputType> | number
          }
        }
      }
      movie: {
        payload: Prisma.$moviePayload<ExtArgs>
        fields: Prisma.movieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movieFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movieFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          findFirst: {
            args: Prisma.movieFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movieFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          findMany: {
            args: Prisma.movieFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviePayload>[]
          }
          create: {
            args: Prisma.movieCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          createMany: {
            args: Prisma.movieCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.movieDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          update: {
            args: Prisma.movieUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          deleteMany: {
            args: Prisma.movieDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.movieUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.movieUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.movieGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.movieCountArgs<ExtArgs>,
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      document: {
        payload: Prisma.$documentPayload<ExtArgs>
        fields: Prisma.documentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          findFirst: {
            args: Prisma.documentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          findMany: {
            args: Prisma.documentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentPayload>[]
          }
          create: {
            args: Prisma.documentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          createMany: {
            args: Prisma.documentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.documentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          update: {
            args: Prisma.documentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          deleteMany: {
            args: Prisma.documentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.documentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.documentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.documentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentCountArgs<ExtArgs>,
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      loginlog: {
        payload: Prisma.$loginlogPayload<ExtArgs>
        fields: Prisma.loginlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loginlogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loginlogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginlogPayload>
          }
          findFirst: {
            args: Prisma.loginlogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loginlogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginlogPayload>
          }
          findMany: {
            args: Prisma.loginlogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginlogPayload>[]
          }
          create: {
            args: Prisma.loginlogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginlogPayload>
          }
          createMany: {
            args: Prisma.loginlogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.loginlogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginlogPayload>
          }
          update: {
            args: Prisma.loginlogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginlogPayload>
          }
          deleteMany: {
            args: Prisma.loginlogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.loginlogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.loginlogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginlogPayload>
          }
          aggregate: {
            args: Prisma.LoginlogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLoginlog>
          }
          groupBy: {
            args: Prisma.loginlogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LoginlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.loginlogCountArgs<ExtArgs>,
            result: $Utils.Optional<LoginlogCountAggregateOutputType> | number
          }
        }
      }
      errorloginlog: {
        payload: Prisma.$errorloginlogPayload<ExtArgs>
        fields: Prisma.errorloginlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.errorloginlogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$errorloginlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.errorloginlogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$errorloginlogPayload>
          }
          findFirst: {
            args: Prisma.errorloginlogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$errorloginlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.errorloginlogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$errorloginlogPayload>
          }
          findMany: {
            args: Prisma.errorloginlogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$errorloginlogPayload>[]
          }
          create: {
            args: Prisma.errorloginlogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$errorloginlogPayload>
          }
          createMany: {
            args: Prisma.errorloginlogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.errorloginlogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$errorloginlogPayload>
          }
          update: {
            args: Prisma.errorloginlogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$errorloginlogPayload>
          }
          deleteMany: {
            args: Prisma.errorloginlogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.errorloginlogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.errorloginlogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$errorloginlogPayload>
          }
          aggregate: {
            args: Prisma.ErrorloginlogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateErrorloginlog>
          }
          groupBy: {
            args: Prisma.errorloginlogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ErrorloginlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.errorloginlogCountArgs<ExtArgs>,
            result: $Utils.Optional<ErrorloginlogCountAggregateOutputType> | number
          }
        }
      }
      kouendate: {
        payload: Prisma.$kouendatePayload<ExtArgs>
        fields: Prisma.kouendateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kouendateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kouendatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kouendateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kouendatePayload>
          }
          findFirst: {
            args: Prisma.kouendateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kouendatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kouendateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kouendatePayload>
          }
          findMany: {
            args: Prisma.kouendateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kouendatePayload>[]
          }
          create: {
            args: Prisma.kouendateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kouendatePayload>
          }
          createMany: {
            args: Prisma.kouendateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.kouendateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kouendatePayload>
          }
          update: {
            args: Prisma.kouendateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kouendatePayload>
          }
          deleteMany: {
            args: Prisma.kouendateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.kouendateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.kouendateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kouendatePayload>
          }
          aggregate: {
            args: Prisma.KouendateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKouendate>
          }
          groupBy: {
            args: Prisma.kouendateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KouendateGroupByOutputType>[]
          }
          count: {
            args: Prisma.kouendateCountArgs<ExtArgs>,
            result: $Utils.Optional<KouendateCountAggregateOutputType> | number
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
   * Model member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
    generation: number | null
    level: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: number | null
    generation: number | null
    level: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    course: string | null
    generation: number | null
    Icon: string | null
    X_id: string | null
    haritora: string | null
    message: string | null
    isReader: boolean | null
    isSubReader: boolean | null
    isFirstReader: boolean | null
    isDirector: boolean | null
    isMaking: boolean | null
    isWriter: boolean | null
    isActor: boolean | null
    isSoundReader: boolean | null
    isSound: boolean | null
    isLightReader: boolean | null
    isLight: boolean | null
    isPropReader: boolean | null
    isProp: boolean | null
    isClothReader: boolean | null
    isCloth: boolean | null
    isRetired: boolean | null
    level: number | null
  }

  export type MemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    course: string | null
    generation: number | null
    Icon: string | null
    X_id: string | null
    haritora: string | null
    message: string | null
    isReader: boolean | null
    isSubReader: boolean | null
    isFirstReader: boolean | null
    isDirector: boolean | null
    isMaking: boolean | null
    isWriter: boolean | null
    isActor: boolean | null
    isSoundReader: boolean | null
    isSound: boolean | null
    isLightReader: boolean | null
    isLight: boolean | null
    isPropReader: boolean | null
    isProp: boolean | null
    isClothReader: boolean | null
    isCloth: boolean | null
    isRetired: boolean | null
    level: number | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    name: number
    course: number
    generation: number
    Icon: number
    X_id: number
    haritora: number
    message: number
    isReader: number
    isSubReader: number
    isFirstReader: number
    isDirector: number
    isMaking: number
    isWriter: number
    isActor: number
    isSoundReader: number
    isSound: number
    isLightReader: number
    isLight: number
    isPropReader: number
    isProp: number
    isClothReader: number
    isCloth: number
    isRetired: number
    level: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true
    generation?: true
    level?: true
  }

  export type MemberSumAggregateInputType = {
    id?: true
    generation?: true
    level?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    name?: true
    course?: true
    generation?: true
    Icon?: true
    X_id?: true
    haritora?: true
    message?: true
    isReader?: true
    isSubReader?: true
    isFirstReader?: true
    isDirector?: true
    isMaking?: true
    isWriter?: true
    isActor?: true
    isSoundReader?: true
    isSound?: true
    isLightReader?: true
    isLight?: true
    isPropReader?: true
    isProp?: true
    isClothReader?: true
    isCloth?: true
    isRetired?: true
    level?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    name?: true
    course?: true
    generation?: true
    Icon?: true
    X_id?: true
    haritora?: true
    message?: true
    isReader?: true
    isSubReader?: true
    isFirstReader?: true
    isDirector?: true
    isMaking?: true
    isWriter?: true
    isActor?: true
    isSoundReader?: true
    isSound?: true
    isLightReader?: true
    isLight?: true
    isPropReader?: true
    isProp?: true
    isClothReader?: true
    isCloth?: true
    isRetired?: true
    level?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    name?: true
    course?: true
    generation?: true
    Icon?: true
    X_id?: true
    haritora?: true
    message?: true
    isReader?: true
    isSubReader?: true
    isFirstReader?: true
    isDirector?: true
    isMaking?: true
    isWriter?: true
    isActor?: true
    isSoundReader?: true
    isSound?: true
    isLightReader?: true
    isLight?: true
    isPropReader?: true
    isProp?: true
    isClothReader?: true
    isCloth?: true
    isRetired?: true
    level?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member to aggregate.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memberWhereInput
    orderBy?: memberOrderByWithAggregationInput | memberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: number
    name: string
    course: string
    generation: number
    Icon: string | null
    X_id: string | null
    haritora: string | null
    message: string | null
    isReader: boolean
    isSubReader: boolean
    isFirstReader: boolean
    isDirector: boolean
    isMaking: boolean
    isWriter: boolean
    isActor: boolean
    isSoundReader: boolean
    isSound: boolean
    isLightReader: boolean
    isLight: boolean
    isPropReader: boolean
    isProp: boolean
    isClothReader: boolean
    isCloth: boolean
    isRetired: boolean
    level: number
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    course?: boolean
    generation?: boolean
    Icon?: boolean
    X_id?: boolean
    haritora?: boolean
    message?: boolean
    isReader?: boolean
    isSubReader?: boolean
    isFirstReader?: boolean
    isDirector?: boolean
    isMaking?: boolean
    isWriter?: boolean
    isActor?: boolean
    isSoundReader?: boolean
    isSound?: boolean
    isLightReader?: boolean
    isLight?: boolean
    isPropReader?: boolean
    isProp?: boolean
    isClothReader?: boolean
    isCloth?: boolean
    isRetired?: boolean
    level?: boolean
  }, ExtArgs["result"]["member"]>

  export type memberSelectScalar = {
    id?: boolean
    name?: boolean
    course?: boolean
    generation?: boolean
    Icon?: boolean
    X_id?: boolean
    haritora?: boolean
    message?: boolean
    isReader?: boolean
    isSubReader?: boolean
    isFirstReader?: boolean
    isDirector?: boolean
    isMaking?: boolean
    isWriter?: boolean
    isActor?: boolean
    isSoundReader?: boolean
    isSound?: boolean
    isLightReader?: boolean
    isLight?: boolean
    isPropReader?: boolean
    isProp?: boolean
    isClothReader?: boolean
    isCloth?: boolean
    isRetired?: boolean
    level?: boolean
  }


  export type $memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      course: string
      generation: number
      Icon: string | null
      X_id: string | null
      haritora: string | null
      message: string | null
      isReader: boolean
      isSubReader: boolean
      isFirstReader: boolean
      isDirector: boolean
      isMaking: boolean
      isWriter: boolean
      isActor: boolean
      isSoundReader: boolean
      isSound: boolean
      isLightReader: boolean
      isLight: boolean
      isPropReader: boolean
      isProp: boolean
      isClothReader: boolean
      isCloth: boolean
      isRetired: boolean
      level: number
    }, ExtArgs["result"]["member"]>
    composites: {}
  }


  type memberGetPayload<S extends boolean | null | undefined | memberDefaultArgs> = $Result.GetResult<Prisma.$memberPayload, S>

  type memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<memberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member'], meta: { name: 'member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {memberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends memberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, memberFindUniqueArgs<ExtArgs>>
    ): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Member that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {memberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends memberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, memberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends memberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, memberFindFirstArgs<ExtArgs>>
    ): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends memberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, memberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends memberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, memberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Member.
     * @param {memberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
    **/
    create<T extends memberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, memberCreateArgs<ExtArgs>>
    ): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Members.
     *     @param {memberCreateManyArgs} args - Arguments to create many Members.
     *     @example
     *     // Create many Members
     *     const member = await prisma.member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends memberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, memberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {memberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
    **/
    delete<T extends memberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, memberDeleteArgs<ExtArgs>>
    ): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Member.
     * @param {memberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends memberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, memberUpdateArgs<ExtArgs>>
    ): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {memberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends memberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, memberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends memberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, memberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {memberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
    **/
    upsert<T extends memberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, memberUpsertArgs<ExtArgs>>
    ): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends memberCountArgs>(
      args?: Subset<T, memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberGroupByArgs} args - Group by arguments.
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
      T extends memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memberGroupByArgs['orderBy'] }
        : { orderBy?: memberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member model
   */
  readonly fields: memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the member model
   */ 
  interface memberFieldRefs {
    readonly id: FieldRef<"member", 'Int'>
    readonly name: FieldRef<"member", 'String'>
    readonly course: FieldRef<"member", 'String'>
    readonly generation: FieldRef<"member", 'Int'>
    readonly Icon: FieldRef<"member", 'String'>
    readonly X_id: FieldRef<"member", 'String'>
    readonly haritora: FieldRef<"member", 'String'>
    readonly message: FieldRef<"member", 'String'>
    readonly isReader: FieldRef<"member", 'Boolean'>
    readonly isSubReader: FieldRef<"member", 'Boolean'>
    readonly isFirstReader: FieldRef<"member", 'Boolean'>
    readonly isDirector: FieldRef<"member", 'Boolean'>
    readonly isMaking: FieldRef<"member", 'Boolean'>
    readonly isWriter: FieldRef<"member", 'Boolean'>
    readonly isActor: FieldRef<"member", 'Boolean'>
    readonly isSoundReader: FieldRef<"member", 'Boolean'>
    readonly isSound: FieldRef<"member", 'Boolean'>
    readonly isLightReader: FieldRef<"member", 'Boolean'>
    readonly isLight: FieldRef<"member", 'Boolean'>
    readonly isPropReader: FieldRef<"member", 'Boolean'>
    readonly isProp: FieldRef<"member", 'Boolean'>
    readonly isClothReader: FieldRef<"member", 'Boolean'>
    readonly isCloth: FieldRef<"member", 'Boolean'>
    readonly isRetired: FieldRef<"member", 'Boolean'>
    readonly level: FieldRef<"member", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * member findUnique
   */
  export type memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }


  /**
   * member findUniqueOrThrow
   */
  export type memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }


  /**
   * member findFirst
   */
  export type memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * member findFirstOrThrow
   */
  export type memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * member findMany
   */
  export type memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * member create
   */
  export type memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * The data needed to create a member.
     */
    data: XOR<memberCreateInput, memberUncheckedCreateInput>
  }


  /**
   * member createMany
   */
  export type memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * member update
   */
  export type memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * The data needed to update a member.
     */
    data: XOR<memberUpdateInput, memberUncheckedUpdateInput>
    /**
     * Choose, which member to update.
     */
    where: memberWhereUniqueInput
  }


  /**
   * member updateMany
   */
  export type memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update members.
     */
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: memberWhereInput
  }


  /**
   * member upsert
   */
  export type memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * The filter to search for the member to update in case it exists.
     */
    where: memberWhereUniqueInput
    /**
     * In case the member found by the `where` argument doesn't exist, create a new member with this data.
     */
    create: XOR<memberCreateInput, memberUncheckedCreateInput>
    /**
     * In case the member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memberUpdateInput, memberUncheckedUpdateInput>
  }


  /**
   * member delete
   */
  export type memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Filter which member to delete.
     */
    where: memberWhereUniqueInput
  }


  /**
   * member deleteMany
   */
  export type memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to delete
     */
    where?: memberWhereInput
  }


  /**
   * member without action
   */
  export type memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
  }



  /**
   * Model discord
   */

  export type AggregateDiscord = {
    _count: DiscordCountAggregateOutputType | null
    _avg: DiscordAvgAggregateOutputType | null
    _sum: DiscordSumAggregateOutputType | null
    _min: DiscordMinAggregateOutputType | null
    _max: DiscordMaxAggregateOutputType | null
  }

  export type DiscordAvgAggregateOutputType = {
    id: number | null
  }

  export type DiscordSumAggregateOutputType = {
    id: number | null
  }

  export type DiscordMinAggregateOutputType = {
    id: number | null
    name: string | null
    discord_id: string | null
  }

  export type DiscordMaxAggregateOutputType = {
    id: number | null
    name: string | null
    discord_id: string | null
  }

  export type DiscordCountAggregateOutputType = {
    id: number
    name: number
    discord_id: number
    _all: number
  }


  export type DiscordAvgAggregateInputType = {
    id?: true
  }

  export type DiscordSumAggregateInputType = {
    id?: true
  }

  export type DiscordMinAggregateInputType = {
    id?: true
    name?: true
    discord_id?: true
  }

  export type DiscordMaxAggregateInputType = {
    id?: true
    name?: true
    discord_id?: true
  }

  export type DiscordCountAggregateInputType = {
    id?: true
    name?: true
    discord_id?: true
    _all?: true
  }

  export type DiscordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discord to aggregate.
     */
    where?: discordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discords to fetch.
     */
    orderBy?: discordOrderByWithRelationInput | discordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: discordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned discords
    **/
    _count?: true | DiscordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscordMaxAggregateInputType
  }

  export type GetDiscordAggregateType<T extends DiscordAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscord[P]>
      : GetScalarType<T[P], AggregateDiscord[P]>
  }




  export type discordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: discordWhereInput
    orderBy?: discordOrderByWithAggregationInput | discordOrderByWithAggregationInput[]
    by: DiscordScalarFieldEnum[] | DiscordScalarFieldEnum
    having?: discordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscordCountAggregateInputType | true
    _avg?: DiscordAvgAggregateInputType
    _sum?: DiscordSumAggregateInputType
    _min?: DiscordMinAggregateInputType
    _max?: DiscordMaxAggregateInputType
  }

  export type DiscordGroupByOutputType = {
    id: number
    name: string
    discord_id: string
    _count: DiscordCountAggregateOutputType | null
    _avg: DiscordAvgAggregateOutputType | null
    _sum: DiscordSumAggregateOutputType | null
    _min: DiscordMinAggregateOutputType | null
    _max: DiscordMaxAggregateOutputType | null
  }

  type GetDiscordGroupByPayload<T extends discordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscordGroupByOutputType[P]>
            : GetScalarType<T[P], DiscordGroupByOutputType[P]>
        }
      >
    >


  export type discordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    discord_id?: boolean
  }, ExtArgs["result"]["discord"]>

  export type discordSelectScalar = {
    id?: boolean
    name?: boolean
    discord_id?: boolean
  }


  export type $discordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "discord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      discord_id: string
    }, ExtArgs["result"]["discord"]>
    composites: {}
  }


  type discordGetPayload<S extends boolean | null | undefined | discordDefaultArgs> = $Result.GetResult<Prisma.$discordPayload, S>

  type discordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<discordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiscordCountAggregateInputType | true
    }

  export interface discordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['discord'], meta: { name: 'discord' } }
    /**
     * Find zero or one Discord that matches the filter.
     * @param {discordFindUniqueArgs} args - Arguments to find a Discord
     * @example
     * // Get one Discord
     * const discord = await prisma.discord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends discordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, discordFindUniqueArgs<ExtArgs>>
    ): Prisma__discordClient<$Result.GetResult<Prisma.$discordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Discord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {discordFindUniqueOrThrowArgs} args - Arguments to find a Discord
     * @example
     * // Get one Discord
     * const discord = await prisma.discord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends discordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, discordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__discordClient<$Result.GetResult<Prisma.$discordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Discord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordFindFirstArgs} args - Arguments to find a Discord
     * @example
     * // Get one Discord
     * const discord = await prisma.discord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends discordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, discordFindFirstArgs<ExtArgs>>
    ): Prisma__discordClient<$Result.GetResult<Prisma.$discordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Discord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordFindFirstOrThrowArgs} args - Arguments to find a Discord
     * @example
     * // Get one Discord
     * const discord = await prisma.discord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends discordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, discordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__discordClient<$Result.GetResult<Prisma.$discordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Discords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discords
     * const discords = await prisma.discord.findMany()
     * 
     * // Get first 10 Discords
     * const discords = await prisma.discord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discordWithIdOnly = await prisma.discord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends discordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, discordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Discord.
     * @param {discordCreateArgs} args - Arguments to create a Discord.
     * @example
     * // Create one Discord
     * const Discord = await prisma.discord.create({
     *   data: {
     *     // ... data to create a Discord
     *   }
     * })
     * 
    **/
    create<T extends discordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, discordCreateArgs<ExtArgs>>
    ): Prisma__discordClient<$Result.GetResult<Prisma.$discordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Discords.
     *     @param {discordCreateManyArgs} args - Arguments to create many Discords.
     *     @example
     *     // Create many Discords
     *     const discord = await prisma.discord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends discordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, discordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Discord.
     * @param {discordDeleteArgs} args - Arguments to delete one Discord.
     * @example
     * // Delete one Discord
     * const Discord = await prisma.discord.delete({
     *   where: {
     *     // ... filter to delete one Discord
     *   }
     * })
     * 
    **/
    delete<T extends discordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, discordDeleteArgs<ExtArgs>>
    ): Prisma__discordClient<$Result.GetResult<Prisma.$discordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Discord.
     * @param {discordUpdateArgs} args - Arguments to update one Discord.
     * @example
     * // Update one Discord
     * const discord = await prisma.discord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends discordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, discordUpdateArgs<ExtArgs>>
    ): Prisma__discordClient<$Result.GetResult<Prisma.$discordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Discords.
     * @param {discordDeleteManyArgs} args - Arguments to filter Discords to delete.
     * @example
     * // Delete a few Discords
     * const { count } = await prisma.discord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends discordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, discordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discords
     * const discord = await prisma.discord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends discordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, discordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Discord.
     * @param {discordUpsertArgs} args - Arguments to update or create a Discord.
     * @example
     * // Update or create a Discord
     * const discord = await prisma.discord.upsert({
     *   create: {
     *     // ... data to create a Discord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discord we want to update
     *   }
     * })
    **/
    upsert<T extends discordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, discordUpsertArgs<ExtArgs>>
    ): Prisma__discordClient<$Result.GetResult<Prisma.$discordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Discords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordCountArgs} args - Arguments to filter Discords to count.
     * @example
     * // Count the number of Discords
     * const count = await prisma.discord.count({
     *   where: {
     *     // ... the filter for the Discords we want to count
     *   }
     * })
    **/
    count<T extends discordCountArgs>(
      args?: Subset<T, discordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscordAggregateArgs>(args: Subset<T, DiscordAggregateArgs>): Prisma.PrismaPromise<GetDiscordAggregateType<T>>

    /**
     * Group by Discord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordGroupByArgs} args - Group by arguments.
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
      T extends discordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: discordGroupByArgs['orderBy'] }
        : { orderBy?: discordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, discordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the discord model
   */
  readonly fields: discordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for discord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__discordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the discord model
   */ 
  interface discordFieldRefs {
    readonly id: FieldRef<"discord", 'Int'>
    readonly name: FieldRef<"discord", 'String'>
    readonly discord_id: FieldRef<"discord", 'String'>
  }
    

  // Custom InputTypes

  /**
   * discord findUnique
   */
  export type discordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord
     */
    select?: discordSelect<ExtArgs> | null
    /**
     * Filter, which discord to fetch.
     */
    where: discordWhereUniqueInput
  }


  /**
   * discord findUniqueOrThrow
   */
  export type discordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord
     */
    select?: discordSelect<ExtArgs> | null
    /**
     * Filter, which discord to fetch.
     */
    where: discordWhereUniqueInput
  }


  /**
   * discord findFirst
   */
  export type discordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord
     */
    select?: discordSelect<ExtArgs> | null
    /**
     * Filter, which discord to fetch.
     */
    where?: discordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discords to fetch.
     */
    orderBy?: discordOrderByWithRelationInput | discordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discords.
     */
    cursor?: discordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discords.
     */
    distinct?: DiscordScalarFieldEnum | DiscordScalarFieldEnum[]
  }


  /**
   * discord findFirstOrThrow
   */
  export type discordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord
     */
    select?: discordSelect<ExtArgs> | null
    /**
     * Filter, which discord to fetch.
     */
    where?: discordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discords to fetch.
     */
    orderBy?: discordOrderByWithRelationInput | discordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discords.
     */
    cursor?: discordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discords.
     */
    distinct?: DiscordScalarFieldEnum | DiscordScalarFieldEnum[]
  }


  /**
   * discord findMany
   */
  export type discordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord
     */
    select?: discordSelect<ExtArgs> | null
    /**
     * Filter, which discords to fetch.
     */
    where?: discordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discords to fetch.
     */
    orderBy?: discordOrderByWithRelationInput | discordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing discords.
     */
    cursor?: discordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discords.
     */
    skip?: number
    distinct?: DiscordScalarFieldEnum | DiscordScalarFieldEnum[]
  }


  /**
   * discord create
   */
  export type discordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord
     */
    select?: discordSelect<ExtArgs> | null
    /**
     * The data needed to create a discord.
     */
    data: XOR<discordCreateInput, discordUncheckedCreateInput>
  }


  /**
   * discord createMany
   */
  export type discordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many discords.
     */
    data: discordCreateManyInput | discordCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * discord update
   */
  export type discordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord
     */
    select?: discordSelect<ExtArgs> | null
    /**
     * The data needed to update a discord.
     */
    data: XOR<discordUpdateInput, discordUncheckedUpdateInput>
    /**
     * Choose, which discord to update.
     */
    where: discordWhereUniqueInput
  }


  /**
   * discord updateMany
   */
  export type discordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update discords.
     */
    data: XOR<discordUpdateManyMutationInput, discordUncheckedUpdateManyInput>
    /**
     * Filter which discords to update
     */
    where?: discordWhereInput
  }


  /**
   * discord upsert
   */
  export type discordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord
     */
    select?: discordSelect<ExtArgs> | null
    /**
     * The filter to search for the discord to update in case it exists.
     */
    where: discordWhereUniqueInput
    /**
     * In case the discord found by the `where` argument doesn't exist, create a new discord with this data.
     */
    create: XOR<discordCreateInput, discordUncheckedCreateInput>
    /**
     * In case the discord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<discordUpdateInput, discordUncheckedUpdateInput>
  }


  /**
   * discord delete
   */
  export type discordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord
     */
    select?: discordSelect<ExtArgs> | null
    /**
     * Filter which discord to delete.
     */
    where: discordWhereUniqueInput
  }


  /**
   * discord deleteMany
   */
  export type discordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discords to delete
     */
    where?: discordWhereInput
  }


  /**
   * discord without action
   */
  export type discordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord
     */
    select?: discordSelect<ExtArgs> | null
  }



  /**
   * Model movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type MovieSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: number | null
    year: number | null
    name: string | null
    link: string | null
  }

  export type MovieMaxAggregateOutputType = {
    id: number | null
    year: number | null
    name: string | null
    link: string | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    year: number
    name: number
    link: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type MovieSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    year?: true
    name?: true
    link?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    year?: true
    name?: true
    link?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    year?: true
    name?: true
    link?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movie to aggregate.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type movieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieWhereInput
    orderBy?: movieOrderByWithAggregationInput | movieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: movieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: number
    year: number
    name: string
    link: string
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends movieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type movieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    name?: boolean
    link?: boolean
  }, ExtArgs["result"]["movie"]>

  export type movieSelectScalar = {
    id?: boolean
    year?: boolean
    name?: boolean
    link?: boolean
  }


  export type $moviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movie"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: number
      name: string
      link: string
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }


  type movieGetPayload<S extends boolean | null | undefined | movieDefaultArgs> = $Result.GetResult<Prisma.$moviePayload, S>

  type movieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<movieFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface movieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movie'], meta: { name: 'movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {movieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends movieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, movieFindUniqueArgs<ExtArgs>>
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Movie that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {movieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends movieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends movieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindFirstArgs<ExtArgs>>
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends movieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends movieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Movie.
     * @param {movieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
    **/
    create<T extends movieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, movieCreateArgs<ExtArgs>>
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Movies.
     *     @param {movieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends movieCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {movieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
    **/
    delete<T extends movieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, movieDeleteArgs<ExtArgs>>
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Movie.
     * @param {movieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends movieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpdateArgs<ExtArgs>>
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {movieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends movieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends movieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {movieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
    **/
    upsert<T extends movieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpsertArgs<ExtArgs>>
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends movieCountArgs>(
      args?: Subset<T, movieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGroupByArgs} args - Group by arguments.
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
      T extends movieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movieGroupByArgs['orderBy'] }
        : { orderBy?: movieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, movieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movie model
   */
  readonly fields: movieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the movie model
   */ 
  interface movieFieldRefs {
    readonly id: FieldRef<"movie", 'Int'>
    readonly year: FieldRef<"movie", 'Int'>
    readonly name: FieldRef<"movie", 'String'>
    readonly link: FieldRef<"movie", 'String'>
  }
    

  // Custom InputTypes

  /**
   * movie findUnique
   */
  export type movieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput
  }


  /**
   * movie findUniqueOrThrow
   */
  export type movieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput
  }


  /**
   * movie findFirst
   */
  export type movieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * movie findFirstOrThrow
   */
  export type movieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * movie findMany
   */
  export type movieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movies.
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * movie create
   */
  export type movieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * The data needed to create a movie.
     */
    data: XOR<movieCreateInput, movieUncheckedCreateInput>
  }


  /**
   * movie createMany
   */
  export type movieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movies.
     */
    data: movieCreateManyInput | movieCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * movie update
   */
  export type movieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * The data needed to update a movie.
     */
    data: XOR<movieUpdateInput, movieUncheckedUpdateInput>
    /**
     * Choose, which movie to update.
     */
    where: movieWhereUniqueInput
  }


  /**
   * movie updateMany
   */
  export type movieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movies.
     */
    data: XOR<movieUpdateManyMutationInput, movieUncheckedUpdateManyInput>
    /**
     * Filter which movies to update
     */
    where?: movieWhereInput
  }


  /**
   * movie upsert
   */
  export type movieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * The filter to search for the movie to update in case it exists.
     */
    where: movieWhereUniqueInput
    /**
     * In case the movie found by the `where` argument doesn't exist, create a new movie with this data.
     */
    create: XOR<movieCreateInput, movieUncheckedCreateInput>
    /**
     * In case the movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movieUpdateInput, movieUncheckedUpdateInput>
  }


  /**
   * movie delete
   */
  export type movieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Filter which movie to delete.
     */
    where: movieWhereUniqueInput
  }


  /**
   * movie deleteMany
   */
  export type movieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to delete
     */
    where?: movieWhereInput
  }


  /**
   * movie without action
   */
  export type movieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
  }



  /**
   * Model document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    name: string | null
    filename: string | null
    creator: string | null
    tag: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    filename: string | null
    creator: string | null
    tag: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    name: number
    filename: number
    creator: number
    tag: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    name?: true
    filename?: true
    creator?: true
    tag?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    name?: true
    filename?: true
    creator?: true
    tag?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    name?: true
    filename?: true
    creator?: true
    tag?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document to aggregate.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type documentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentWhereInput
    orderBy?: documentOrderByWithAggregationInput | documentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: documentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    name: string
    filename: string
    creator: string
    tag: string
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends documentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type documentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    filename?: boolean
    creator?: boolean
    tag?: boolean
  }, ExtArgs["result"]["document"]>

  export type documentSelectScalar = {
    id?: boolean
    name?: boolean
    filename?: boolean
    creator?: boolean
    tag?: boolean
  }


  export type $documentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "document"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      filename: string
      creator: string
      tag: string
    }, ExtArgs["result"]["document"]>
    composites: {}
  }


  type documentGetPayload<S extends boolean | null | undefined | documentDefaultArgs> = $Result.GetResult<Prisma.$documentPayload, S>

  type documentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<documentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface documentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['document'], meta: { name: 'document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {documentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends documentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, documentFindUniqueArgs<ExtArgs>>
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Document that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {documentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends documentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, documentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends documentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, documentFindFirstArgs<ExtArgs>>
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends documentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, documentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends documentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Document.
     * @param {documentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
    **/
    create<T extends documentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, documentCreateArgs<ExtArgs>>
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Documents.
     *     @param {documentCreateManyArgs} args - Arguments to create many Documents.
     *     @example
     *     // Create many Documents
     *     const document = await prisma.document.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends documentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document.
     * @param {documentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
    **/
    delete<T extends documentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, documentDeleteArgs<ExtArgs>>
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Document.
     * @param {documentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends documentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, documentUpdateArgs<ExtArgs>>
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Documents.
     * @param {documentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends documentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends documentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, documentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {documentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
    **/
    upsert<T extends documentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, documentUpsertArgs<ExtArgs>>
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends documentCountArgs>(
      args?: Subset<T, documentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentGroupByArgs} args - Group by arguments.
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
      T extends documentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentGroupByArgs['orderBy'] }
        : { orderBy?: documentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, documentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the document model
   */
  readonly fields: documentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the document model
   */ 
  interface documentFieldRefs {
    readonly id: FieldRef<"document", 'Int'>
    readonly name: FieldRef<"document", 'String'>
    readonly filename: FieldRef<"document", 'String'>
    readonly creator: FieldRef<"document", 'String'>
    readonly tag: FieldRef<"document", 'String'>
  }
    

  // Custom InputTypes

  /**
   * document findUnique
   */
  export type documentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where: documentWhereUniqueInput
  }


  /**
   * document findUniqueOrThrow
   */
  export type documentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where: documentWhereUniqueInput
  }


  /**
   * document findFirst
   */
  export type documentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }


  /**
   * document findFirstOrThrow
   */
  export type documentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }


  /**
   * document findMany
   */
  export type documentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documents.
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }


  /**
   * document create
   */
  export type documentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * The data needed to create a document.
     */
    data: XOR<documentCreateInput, documentUncheckedCreateInput>
  }


  /**
   * document createMany
   */
  export type documentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documents.
     */
    data: documentCreateManyInput | documentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * document update
   */
  export type documentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * The data needed to update a document.
     */
    data: XOR<documentUpdateInput, documentUncheckedUpdateInput>
    /**
     * Choose, which document to update.
     */
    where: documentWhereUniqueInput
  }


  /**
   * document updateMany
   */
  export type documentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documents.
     */
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentWhereInput
  }


  /**
   * document upsert
   */
  export type documentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * The filter to search for the document to update in case it exists.
     */
    where: documentWhereUniqueInput
    /**
     * In case the document found by the `where` argument doesn't exist, create a new document with this data.
     */
    create: XOR<documentCreateInput, documentUncheckedCreateInput>
    /**
     * In case the document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentUpdateInput, documentUncheckedUpdateInput>
  }


  /**
   * document delete
   */
  export type documentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Filter which document to delete.
     */
    where: documentWhereUniqueInput
  }


  /**
   * document deleteMany
   */
  export type documentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to delete
     */
    where?: documentWhereInput
  }


  /**
   * document without action
   */
  export type documentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
  }



  /**
   * Model loginlog
   */

  export type AggregateLoginlog = {
    _count: LoginlogCountAggregateOutputType | null
    _avg: LoginlogAvgAggregateOutputType | null
    _sum: LoginlogSumAggregateOutputType | null
    _min: LoginlogMinAggregateOutputType | null
    _max: LoginlogMaxAggregateOutputType | null
  }

  export type LoginlogAvgAggregateOutputType = {
    id: number | null
  }

  export type LoginlogSumAggregateOutputType = {
    id: number | null
  }

  export type LoginlogMinAggregateOutputType = {
    id: number | null
    user: string | null
    ip: string | null
    network: string | null
    locate: string | null
    date: string | null
  }

  export type LoginlogMaxAggregateOutputType = {
    id: number | null
    user: string | null
    ip: string | null
    network: string | null
    locate: string | null
    date: string | null
  }

  export type LoginlogCountAggregateOutputType = {
    id: number
    user: number
    ip: number
    network: number
    locate: number
    date: number
    _all: number
  }


  export type LoginlogAvgAggregateInputType = {
    id?: true
  }

  export type LoginlogSumAggregateInputType = {
    id?: true
  }

  export type LoginlogMinAggregateInputType = {
    id?: true
    user?: true
    ip?: true
    network?: true
    locate?: true
    date?: true
  }

  export type LoginlogMaxAggregateInputType = {
    id?: true
    user?: true
    ip?: true
    network?: true
    locate?: true
    date?: true
  }

  export type LoginlogCountAggregateInputType = {
    id?: true
    user?: true
    ip?: true
    network?: true
    locate?: true
    date?: true
    _all?: true
  }

  export type LoginlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loginlog to aggregate.
     */
    where?: loginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loginlogs to fetch.
     */
    orderBy?: loginlogOrderByWithRelationInput | loginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loginlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loginlogs
    **/
    _count?: true | LoginlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginlogMaxAggregateInputType
  }

  export type GetLoginlogAggregateType<T extends LoginlogAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginlog[P]>
      : GetScalarType<T[P], AggregateLoginlog[P]>
  }




  export type loginlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loginlogWhereInput
    orderBy?: loginlogOrderByWithAggregationInput | loginlogOrderByWithAggregationInput[]
    by: LoginlogScalarFieldEnum[] | LoginlogScalarFieldEnum
    having?: loginlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginlogCountAggregateInputType | true
    _avg?: LoginlogAvgAggregateInputType
    _sum?: LoginlogSumAggregateInputType
    _min?: LoginlogMinAggregateInputType
    _max?: LoginlogMaxAggregateInputType
  }

  export type LoginlogGroupByOutputType = {
    id: number
    user: string
    ip: string
    network: string
    locate: string
    date: string
    _count: LoginlogCountAggregateOutputType | null
    _avg: LoginlogAvgAggregateOutputType | null
    _sum: LoginlogSumAggregateOutputType | null
    _min: LoginlogMinAggregateOutputType | null
    _max: LoginlogMaxAggregateOutputType | null
  }

  type GetLoginlogGroupByPayload<T extends loginlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginlogGroupByOutputType[P]>
            : GetScalarType<T[P], LoginlogGroupByOutputType[P]>
        }
      >
    >


  export type loginlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    ip?: boolean
    network?: boolean
    locate?: boolean
    date?: boolean
  }, ExtArgs["result"]["loginlog"]>

  export type loginlogSelectScalar = {
    id?: boolean
    user?: boolean
    ip?: boolean
    network?: boolean
    locate?: boolean
    date?: boolean
  }


  export type $loginlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loginlog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user: string
      ip: string
      network: string
      locate: string
      date: string
    }, ExtArgs["result"]["loginlog"]>
    composites: {}
  }


  type loginlogGetPayload<S extends boolean | null | undefined | loginlogDefaultArgs> = $Result.GetResult<Prisma.$loginlogPayload, S>

  type loginlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<loginlogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoginlogCountAggregateInputType | true
    }

  export interface loginlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loginlog'], meta: { name: 'loginlog' } }
    /**
     * Find zero or one Loginlog that matches the filter.
     * @param {loginlogFindUniqueArgs} args - Arguments to find a Loginlog
     * @example
     * // Get one Loginlog
     * const loginlog = await prisma.loginlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends loginlogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, loginlogFindUniqueArgs<ExtArgs>>
    ): Prisma__loginlogClient<$Result.GetResult<Prisma.$loginlogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Loginlog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {loginlogFindUniqueOrThrowArgs} args - Arguments to find a Loginlog
     * @example
     * // Get one Loginlog
     * const loginlog = await prisma.loginlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends loginlogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loginlogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__loginlogClient<$Result.GetResult<Prisma.$loginlogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Loginlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginlogFindFirstArgs} args - Arguments to find a Loginlog
     * @example
     * // Get one Loginlog
     * const loginlog = await prisma.loginlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends loginlogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, loginlogFindFirstArgs<ExtArgs>>
    ): Prisma__loginlogClient<$Result.GetResult<Prisma.$loginlogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Loginlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginlogFindFirstOrThrowArgs} args - Arguments to find a Loginlog
     * @example
     * // Get one Loginlog
     * const loginlog = await prisma.loginlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends loginlogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loginlogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__loginlogClient<$Result.GetResult<Prisma.$loginlogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Loginlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginlogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loginlogs
     * const loginlogs = await prisma.loginlog.findMany()
     * 
     * // Get first 10 Loginlogs
     * const loginlogs = await prisma.loginlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginlogWithIdOnly = await prisma.loginlog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends loginlogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loginlogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loginlogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Loginlog.
     * @param {loginlogCreateArgs} args - Arguments to create a Loginlog.
     * @example
     * // Create one Loginlog
     * const Loginlog = await prisma.loginlog.create({
     *   data: {
     *     // ... data to create a Loginlog
     *   }
     * })
     * 
    **/
    create<T extends loginlogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, loginlogCreateArgs<ExtArgs>>
    ): Prisma__loginlogClient<$Result.GetResult<Prisma.$loginlogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Loginlogs.
     *     @param {loginlogCreateManyArgs} args - Arguments to create many Loginlogs.
     *     @example
     *     // Create many Loginlogs
     *     const loginlog = await prisma.loginlog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends loginlogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loginlogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Loginlog.
     * @param {loginlogDeleteArgs} args - Arguments to delete one Loginlog.
     * @example
     * // Delete one Loginlog
     * const Loginlog = await prisma.loginlog.delete({
     *   where: {
     *     // ... filter to delete one Loginlog
     *   }
     * })
     * 
    **/
    delete<T extends loginlogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, loginlogDeleteArgs<ExtArgs>>
    ): Prisma__loginlogClient<$Result.GetResult<Prisma.$loginlogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Loginlog.
     * @param {loginlogUpdateArgs} args - Arguments to update one Loginlog.
     * @example
     * // Update one Loginlog
     * const loginlog = await prisma.loginlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends loginlogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, loginlogUpdateArgs<ExtArgs>>
    ): Prisma__loginlogClient<$Result.GetResult<Prisma.$loginlogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Loginlogs.
     * @param {loginlogDeleteManyArgs} args - Arguments to filter Loginlogs to delete.
     * @example
     * // Delete a few Loginlogs
     * const { count } = await prisma.loginlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends loginlogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loginlogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loginlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loginlogs
     * const loginlog = await prisma.loginlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends loginlogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, loginlogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Loginlog.
     * @param {loginlogUpsertArgs} args - Arguments to update or create a Loginlog.
     * @example
     * // Update or create a Loginlog
     * const loginlog = await prisma.loginlog.upsert({
     *   create: {
     *     // ... data to create a Loginlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loginlog we want to update
     *   }
     * })
    **/
    upsert<T extends loginlogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, loginlogUpsertArgs<ExtArgs>>
    ): Prisma__loginlogClient<$Result.GetResult<Prisma.$loginlogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Loginlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginlogCountArgs} args - Arguments to filter Loginlogs to count.
     * @example
     * // Count the number of Loginlogs
     * const count = await prisma.loginlog.count({
     *   where: {
     *     // ... the filter for the Loginlogs we want to count
     *   }
     * })
    **/
    count<T extends loginlogCountArgs>(
      args?: Subset<T, loginlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loginlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoginlogAggregateArgs>(args: Subset<T, LoginlogAggregateArgs>): Prisma.PrismaPromise<GetLoginlogAggregateType<T>>

    /**
     * Group by Loginlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginlogGroupByArgs} args - Group by arguments.
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
      T extends loginlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loginlogGroupByArgs['orderBy'] }
        : { orderBy?: loginlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, loginlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loginlog model
   */
  readonly fields: loginlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loginlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loginlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the loginlog model
   */ 
  interface loginlogFieldRefs {
    readonly id: FieldRef<"loginlog", 'Int'>
    readonly user: FieldRef<"loginlog", 'String'>
    readonly ip: FieldRef<"loginlog", 'String'>
    readonly network: FieldRef<"loginlog", 'String'>
    readonly locate: FieldRef<"loginlog", 'String'>
    readonly date: FieldRef<"loginlog", 'String'>
  }
    

  // Custom InputTypes

  /**
   * loginlog findUnique
   */
  export type loginlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loginlog
     */
    select?: loginlogSelect<ExtArgs> | null
    /**
     * Filter, which loginlog to fetch.
     */
    where: loginlogWhereUniqueInput
  }


  /**
   * loginlog findUniqueOrThrow
   */
  export type loginlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loginlog
     */
    select?: loginlogSelect<ExtArgs> | null
    /**
     * Filter, which loginlog to fetch.
     */
    where: loginlogWhereUniqueInput
  }


  /**
   * loginlog findFirst
   */
  export type loginlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loginlog
     */
    select?: loginlogSelect<ExtArgs> | null
    /**
     * Filter, which loginlog to fetch.
     */
    where?: loginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loginlogs to fetch.
     */
    orderBy?: loginlogOrderByWithRelationInput | loginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loginlogs.
     */
    cursor?: loginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loginlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loginlogs.
     */
    distinct?: LoginlogScalarFieldEnum | LoginlogScalarFieldEnum[]
  }


  /**
   * loginlog findFirstOrThrow
   */
  export type loginlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loginlog
     */
    select?: loginlogSelect<ExtArgs> | null
    /**
     * Filter, which loginlog to fetch.
     */
    where?: loginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loginlogs to fetch.
     */
    orderBy?: loginlogOrderByWithRelationInput | loginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loginlogs.
     */
    cursor?: loginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loginlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loginlogs.
     */
    distinct?: LoginlogScalarFieldEnum | LoginlogScalarFieldEnum[]
  }


  /**
   * loginlog findMany
   */
  export type loginlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loginlog
     */
    select?: loginlogSelect<ExtArgs> | null
    /**
     * Filter, which loginlogs to fetch.
     */
    where?: loginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loginlogs to fetch.
     */
    orderBy?: loginlogOrderByWithRelationInput | loginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loginlogs.
     */
    cursor?: loginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loginlogs.
     */
    skip?: number
    distinct?: LoginlogScalarFieldEnum | LoginlogScalarFieldEnum[]
  }


  /**
   * loginlog create
   */
  export type loginlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loginlog
     */
    select?: loginlogSelect<ExtArgs> | null
    /**
     * The data needed to create a loginlog.
     */
    data: XOR<loginlogCreateInput, loginlogUncheckedCreateInput>
  }


  /**
   * loginlog createMany
   */
  export type loginlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loginlogs.
     */
    data: loginlogCreateManyInput | loginlogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * loginlog update
   */
  export type loginlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loginlog
     */
    select?: loginlogSelect<ExtArgs> | null
    /**
     * The data needed to update a loginlog.
     */
    data: XOR<loginlogUpdateInput, loginlogUncheckedUpdateInput>
    /**
     * Choose, which loginlog to update.
     */
    where: loginlogWhereUniqueInput
  }


  /**
   * loginlog updateMany
   */
  export type loginlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loginlogs.
     */
    data: XOR<loginlogUpdateManyMutationInput, loginlogUncheckedUpdateManyInput>
    /**
     * Filter which loginlogs to update
     */
    where?: loginlogWhereInput
  }


  /**
   * loginlog upsert
   */
  export type loginlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loginlog
     */
    select?: loginlogSelect<ExtArgs> | null
    /**
     * The filter to search for the loginlog to update in case it exists.
     */
    where: loginlogWhereUniqueInput
    /**
     * In case the loginlog found by the `where` argument doesn't exist, create a new loginlog with this data.
     */
    create: XOR<loginlogCreateInput, loginlogUncheckedCreateInput>
    /**
     * In case the loginlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loginlogUpdateInput, loginlogUncheckedUpdateInput>
  }


  /**
   * loginlog delete
   */
  export type loginlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loginlog
     */
    select?: loginlogSelect<ExtArgs> | null
    /**
     * Filter which loginlog to delete.
     */
    where: loginlogWhereUniqueInput
  }


  /**
   * loginlog deleteMany
   */
  export type loginlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loginlogs to delete
     */
    where?: loginlogWhereInput
  }


  /**
   * loginlog without action
   */
  export type loginlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loginlog
     */
    select?: loginlogSelect<ExtArgs> | null
  }



  /**
   * Model errorloginlog
   */

  export type AggregateErrorloginlog = {
    _count: ErrorloginlogCountAggregateOutputType | null
    _avg: ErrorloginlogAvgAggregateOutputType | null
    _sum: ErrorloginlogSumAggregateOutputType | null
    _min: ErrorloginlogMinAggregateOutputType | null
    _max: ErrorloginlogMaxAggregateOutputType | null
  }

  export type ErrorloginlogAvgAggregateOutputType = {
    id: number | null
  }

  export type ErrorloginlogSumAggregateOutputType = {
    id: number | null
  }

  export type ErrorloginlogMinAggregateOutputType = {
    id: number | null
    user: string | null
    ip: string | null
    network: string | null
    locate: string | null
    date: string | null
  }

  export type ErrorloginlogMaxAggregateOutputType = {
    id: number | null
    user: string | null
    ip: string | null
    network: string | null
    locate: string | null
    date: string | null
  }

  export type ErrorloginlogCountAggregateOutputType = {
    id: number
    user: number
    ip: number
    network: number
    locate: number
    date: number
    _all: number
  }


  export type ErrorloginlogAvgAggregateInputType = {
    id?: true
  }

  export type ErrorloginlogSumAggregateInputType = {
    id?: true
  }

  export type ErrorloginlogMinAggregateInputType = {
    id?: true
    user?: true
    ip?: true
    network?: true
    locate?: true
    date?: true
  }

  export type ErrorloginlogMaxAggregateInputType = {
    id?: true
    user?: true
    ip?: true
    network?: true
    locate?: true
    date?: true
  }

  export type ErrorloginlogCountAggregateInputType = {
    id?: true
    user?: true
    ip?: true
    network?: true
    locate?: true
    date?: true
    _all?: true
  }

  export type ErrorloginlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which errorloginlog to aggregate.
     */
    where?: errorloginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of errorloginlogs to fetch.
     */
    orderBy?: errorloginlogOrderByWithRelationInput | errorloginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: errorloginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` errorloginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` errorloginlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned errorloginlogs
    **/
    _count?: true | ErrorloginlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ErrorloginlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ErrorloginlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ErrorloginlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ErrorloginlogMaxAggregateInputType
  }

  export type GetErrorloginlogAggregateType<T extends ErrorloginlogAggregateArgs> = {
        [P in keyof T & keyof AggregateErrorloginlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateErrorloginlog[P]>
      : GetScalarType<T[P], AggregateErrorloginlog[P]>
  }




  export type errorloginlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: errorloginlogWhereInput
    orderBy?: errorloginlogOrderByWithAggregationInput | errorloginlogOrderByWithAggregationInput[]
    by: ErrorloginlogScalarFieldEnum[] | ErrorloginlogScalarFieldEnum
    having?: errorloginlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ErrorloginlogCountAggregateInputType | true
    _avg?: ErrorloginlogAvgAggregateInputType
    _sum?: ErrorloginlogSumAggregateInputType
    _min?: ErrorloginlogMinAggregateInputType
    _max?: ErrorloginlogMaxAggregateInputType
  }

  export type ErrorloginlogGroupByOutputType = {
    id: number
    user: string
    ip: string
    network: string
    locate: string
    date: string
    _count: ErrorloginlogCountAggregateOutputType | null
    _avg: ErrorloginlogAvgAggregateOutputType | null
    _sum: ErrorloginlogSumAggregateOutputType | null
    _min: ErrorloginlogMinAggregateOutputType | null
    _max: ErrorloginlogMaxAggregateOutputType | null
  }

  type GetErrorloginlogGroupByPayload<T extends errorloginlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ErrorloginlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ErrorloginlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ErrorloginlogGroupByOutputType[P]>
            : GetScalarType<T[P], ErrorloginlogGroupByOutputType[P]>
        }
      >
    >


  export type errorloginlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    ip?: boolean
    network?: boolean
    locate?: boolean
    date?: boolean
  }, ExtArgs["result"]["errorloginlog"]>

  export type errorloginlogSelectScalar = {
    id?: boolean
    user?: boolean
    ip?: boolean
    network?: boolean
    locate?: boolean
    date?: boolean
  }


  export type $errorloginlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "errorloginlog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user: string
      ip: string
      network: string
      locate: string
      date: string
    }, ExtArgs["result"]["errorloginlog"]>
    composites: {}
  }


  type errorloginlogGetPayload<S extends boolean | null | undefined | errorloginlogDefaultArgs> = $Result.GetResult<Prisma.$errorloginlogPayload, S>

  type errorloginlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<errorloginlogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ErrorloginlogCountAggregateInputType | true
    }

  export interface errorloginlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['errorloginlog'], meta: { name: 'errorloginlog' } }
    /**
     * Find zero or one Errorloginlog that matches the filter.
     * @param {errorloginlogFindUniqueArgs} args - Arguments to find a Errorloginlog
     * @example
     * // Get one Errorloginlog
     * const errorloginlog = await prisma.errorloginlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends errorloginlogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, errorloginlogFindUniqueArgs<ExtArgs>>
    ): Prisma__errorloginlogClient<$Result.GetResult<Prisma.$errorloginlogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Errorloginlog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {errorloginlogFindUniqueOrThrowArgs} args - Arguments to find a Errorloginlog
     * @example
     * // Get one Errorloginlog
     * const errorloginlog = await prisma.errorloginlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends errorloginlogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, errorloginlogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__errorloginlogClient<$Result.GetResult<Prisma.$errorloginlogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Errorloginlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {errorloginlogFindFirstArgs} args - Arguments to find a Errorloginlog
     * @example
     * // Get one Errorloginlog
     * const errorloginlog = await prisma.errorloginlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends errorloginlogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, errorloginlogFindFirstArgs<ExtArgs>>
    ): Prisma__errorloginlogClient<$Result.GetResult<Prisma.$errorloginlogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Errorloginlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {errorloginlogFindFirstOrThrowArgs} args - Arguments to find a Errorloginlog
     * @example
     * // Get one Errorloginlog
     * const errorloginlog = await prisma.errorloginlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends errorloginlogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, errorloginlogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__errorloginlogClient<$Result.GetResult<Prisma.$errorloginlogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Errorloginlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {errorloginlogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Errorloginlogs
     * const errorloginlogs = await prisma.errorloginlog.findMany()
     * 
     * // Get first 10 Errorloginlogs
     * const errorloginlogs = await prisma.errorloginlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const errorloginlogWithIdOnly = await prisma.errorloginlog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends errorloginlogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, errorloginlogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$errorloginlogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Errorloginlog.
     * @param {errorloginlogCreateArgs} args - Arguments to create a Errorloginlog.
     * @example
     * // Create one Errorloginlog
     * const Errorloginlog = await prisma.errorloginlog.create({
     *   data: {
     *     // ... data to create a Errorloginlog
     *   }
     * })
     * 
    **/
    create<T extends errorloginlogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, errorloginlogCreateArgs<ExtArgs>>
    ): Prisma__errorloginlogClient<$Result.GetResult<Prisma.$errorloginlogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Errorloginlogs.
     *     @param {errorloginlogCreateManyArgs} args - Arguments to create many Errorloginlogs.
     *     @example
     *     // Create many Errorloginlogs
     *     const errorloginlog = await prisma.errorloginlog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends errorloginlogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, errorloginlogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Errorloginlog.
     * @param {errorloginlogDeleteArgs} args - Arguments to delete one Errorloginlog.
     * @example
     * // Delete one Errorloginlog
     * const Errorloginlog = await prisma.errorloginlog.delete({
     *   where: {
     *     // ... filter to delete one Errorloginlog
     *   }
     * })
     * 
    **/
    delete<T extends errorloginlogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, errorloginlogDeleteArgs<ExtArgs>>
    ): Prisma__errorloginlogClient<$Result.GetResult<Prisma.$errorloginlogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Errorloginlog.
     * @param {errorloginlogUpdateArgs} args - Arguments to update one Errorloginlog.
     * @example
     * // Update one Errorloginlog
     * const errorloginlog = await prisma.errorloginlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends errorloginlogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, errorloginlogUpdateArgs<ExtArgs>>
    ): Prisma__errorloginlogClient<$Result.GetResult<Prisma.$errorloginlogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Errorloginlogs.
     * @param {errorloginlogDeleteManyArgs} args - Arguments to filter Errorloginlogs to delete.
     * @example
     * // Delete a few Errorloginlogs
     * const { count } = await prisma.errorloginlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends errorloginlogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, errorloginlogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Errorloginlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {errorloginlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Errorloginlogs
     * const errorloginlog = await prisma.errorloginlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends errorloginlogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, errorloginlogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Errorloginlog.
     * @param {errorloginlogUpsertArgs} args - Arguments to update or create a Errorloginlog.
     * @example
     * // Update or create a Errorloginlog
     * const errorloginlog = await prisma.errorloginlog.upsert({
     *   create: {
     *     // ... data to create a Errorloginlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Errorloginlog we want to update
     *   }
     * })
    **/
    upsert<T extends errorloginlogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, errorloginlogUpsertArgs<ExtArgs>>
    ): Prisma__errorloginlogClient<$Result.GetResult<Prisma.$errorloginlogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Errorloginlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {errorloginlogCountArgs} args - Arguments to filter Errorloginlogs to count.
     * @example
     * // Count the number of Errorloginlogs
     * const count = await prisma.errorloginlog.count({
     *   where: {
     *     // ... the filter for the Errorloginlogs we want to count
     *   }
     * })
    **/
    count<T extends errorloginlogCountArgs>(
      args?: Subset<T, errorloginlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ErrorloginlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Errorloginlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorloginlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ErrorloginlogAggregateArgs>(args: Subset<T, ErrorloginlogAggregateArgs>): Prisma.PrismaPromise<GetErrorloginlogAggregateType<T>>

    /**
     * Group by Errorloginlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {errorloginlogGroupByArgs} args - Group by arguments.
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
      T extends errorloginlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: errorloginlogGroupByArgs['orderBy'] }
        : { orderBy?: errorloginlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, errorloginlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErrorloginlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the errorloginlog model
   */
  readonly fields: errorloginlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for errorloginlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__errorloginlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the errorloginlog model
   */ 
  interface errorloginlogFieldRefs {
    readonly id: FieldRef<"errorloginlog", 'Int'>
    readonly user: FieldRef<"errorloginlog", 'String'>
    readonly ip: FieldRef<"errorloginlog", 'String'>
    readonly network: FieldRef<"errorloginlog", 'String'>
    readonly locate: FieldRef<"errorloginlog", 'String'>
    readonly date: FieldRef<"errorloginlog", 'String'>
  }
    

  // Custom InputTypes

  /**
   * errorloginlog findUnique
   */
  export type errorloginlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the errorloginlog
     */
    select?: errorloginlogSelect<ExtArgs> | null
    /**
     * Filter, which errorloginlog to fetch.
     */
    where: errorloginlogWhereUniqueInput
  }


  /**
   * errorloginlog findUniqueOrThrow
   */
  export type errorloginlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the errorloginlog
     */
    select?: errorloginlogSelect<ExtArgs> | null
    /**
     * Filter, which errorloginlog to fetch.
     */
    where: errorloginlogWhereUniqueInput
  }


  /**
   * errorloginlog findFirst
   */
  export type errorloginlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the errorloginlog
     */
    select?: errorloginlogSelect<ExtArgs> | null
    /**
     * Filter, which errorloginlog to fetch.
     */
    where?: errorloginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of errorloginlogs to fetch.
     */
    orderBy?: errorloginlogOrderByWithRelationInput | errorloginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for errorloginlogs.
     */
    cursor?: errorloginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` errorloginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` errorloginlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of errorloginlogs.
     */
    distinct?: ErrorloginlogScalarFieldEnum | ErrorloginlogScalarFieldEnum[]
  }


  /**
   * errorloginlog findFirstOrThrow
   */
  export type errorloginlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the errorloginlog
     */
    select?: errorloginlogSelect<ExtArgs> | null
    /**
     * Filter, which errorloginlog to fetch.
     */
    where?: errorloginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of errorloginlogs to fetch.
     */
    orderBy?: errorloginlogOrderByWithRelationInput | errorloginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for errorloginlogs.
     */
    cursor?: errorloginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` errorloginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` errorloginlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of errorloginlogs.
     */
    distinct?: ErrorloginlogScalarFieldEnum | ErrorloginlogScalarFieldEnum[]
  }


  /**
   * errorloginlog findMany
   */
  export type errorloginlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the errorloginlog
     */
    select?: errorloginlogSelect<ExtArgs> | null
    /**
     * Filter, which errorloginlogs to fetch.
     */
    where?: errorloginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of errorloginlogs to fetch.
     */
    orderBy?: errorloginlogOrderByWithRelationInput | errorloginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing errorloginlogs.
     */
    cursor?: errorloginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` errorloginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` errorloginlogs.
     */
    skip?: number
    distinct?: ErrorloginlogScalarFieldEnum | ErrorloginlogScalarFieldEnum[]
  }


  /**
   * errorloginlog create
   */
  export type errorloginlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the errorloginlog
     */
    select?: errorloginlogSelect<ExtArgs> | null
    /**
     * The data needed to create a errorloginlog.
     */
    data: XOR<errorloginlogCreateInput, errorloginlogUncheckedCreateInput>
  }


  /**
   * errorloginlog createMany
   */
  export type errorloginlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many errorloginlogs.
     */
    data: errorloginlogCreateManyInput | errorloginlogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * errorloginlog update
   */
  export type errorloginlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the errorloginlog
     */
    select?: errorloginlogSelect<ExtArgs> | null
    /**
     * The data needed to update a errorloginlog.
     */
    data: XOR<errorloginlogUpdateInput, errorloginlogUncheckedUpdateInput>
    /**
     * Choose, which errorloginlog to update.
     */
    where: errorloginlogWhereUniqueInput
  }


  /**
   * errorloginlog updateMany
   */
  export type errorloginlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update errorloginlogs.
     */
    data: XOR<errorloginlogUpdateManyMutationInput, errorloginlogUncheckedUpdateManyInput>
    /**
     * Filter which errorloginlogs to update
     */
    where?: errorloginlogWhereInput
  }


  /**
   * errorloginlog upsert
   */
  export type errorloginlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the errorloginlog
     */
    select?: errorloginlogSelect<ExtArgs> | null
    /**
     * The filter to search for the errorloginlog to update in case it exists.
     */
    where: errorloginlogWhereUniqueInput
    /**
     * In case the errorloginlog found by the `where` argument doesn't exist, create a new errorloginlog with this data.
     */
    create: XOR<errorloginlogCreateInput, errorloginlogUncheckedCreateInput>
    /**
     * In case the errorloginlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<errorloginlogUpdateInput, errorloginlogUncheckedUpdateInput>
  }


  /**
   * errorloginlog delete
   */
  export type errorloginlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the errorloginlog
     */
    select?: errorloginlogSelect<ExtArgs> | null
    /**
     * Filter which errorloginlog to delete.
     */
    where: errorloginlogWhereUniqueInput
  }


  /**
   * errorloginlog deleteMany
   */
  export type errorloginlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which errorloginlogs to delete
     */
    where?: errorloginlogWhereInput
  }


  /**
   * errorloginlog without action
   */
  export type errorloginlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the errorloginlog
     */
    select?: errorloginlogSelect<ExtArgs> | null
  }



  /**
   * Model kouendate
   */

  export type AggregateKouendate = {
    _count: KouendateCountAggregateOutputType | null
    _avg: KouendateAvgAggregateOutputType | null
    _sum: KouendateSumAggregateOutputType | null
    _min: KouendateMinAggregateOutputType | null
    _max: KouendateMaxAggregateOutputType | null
  }

  export type KouendateAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type KouendateSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type KouendateMinAggregateOutputType = {
    id: number | null
    year: number | null
    name: string | null
    date: string | null
    place: string | null
    link: string | null
  }

  export type KouendateMaxAggregateOutputType = {
    id: number | null
    year: number | null
    name: string | null
    date: string | null
    place: string | null
    link: string | null
  }

  export type KouendateCountAggregateOutputType = {
    id: number
    year: number
    name: number
    date: number
    place: number
    link: number
    _all: number
  }


  export type KouendateAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type KouendateSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type KouendateMinAggregateInputType = {
    id?: true
    year?: true
    name?: true
    date?: true
    place?: true
    link?: true
  }

  export type KouendateMaxAggregateInputType = {
    id?: true
    year?: true
    name?: true
    date?: true
    place?: true
    link?: true
  }

  export type KouendateCountAggregateInputType = {
    id?: true
    year?: true
    name?: true
    date?: true
    place?: true
    link?: true
    _all?: true
  }

  export type KouendateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kouendate to aggregate.
     */
    where?: kouendateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kouendates to fetch.
     */
    orderBy?: kouendateOrderByWithRelationInput | kouendateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kouendateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kouendates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kouendates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kouendates
    **/
    _count?: true | KouendateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KouendateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KouendateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KouendateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KouendateMaxAggregateInputType
  }

  export type GetKouendateAggregateType<T extends KouendateAggregateArgs> = {
        [P in keyof T & keyof AggregateKouendate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKouendate[P]>
      : GetScalarType<T[P], AggregateKouendate[P]>
  }




  export type kouendateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kouendateWhereInput
    orderBy?: kouendateOrderByWithAggregationInput | kouendateOrderByWithAggregationInput[]
    by: KouendateScalarFieldEnum[] | KouendateScalarFieldEnum
    having?: kouendateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KouendateCountAggregateInputType | true
    _avg?: KouendateAvgAggregateInputType
    _sum?: KouendateSumAggregateInputType
    _min?: KouendateMinAggregateInputType
    _max?: KouendateMaxAggregateInputType
  }

  export type KouendateGroupByOutputType = {
    id: number
    year: number
    name: string
    date: string
    place: string
    link: string
    _count: KouendateCountAggregateOutputType | null
    _avg: KouendateAvgAggregateOutputType | null
    _sum: KouendateSumAggregateOutputType | null
    _min: KouendateMinAggregateOutputType | null
    _max: KouendateMaxAggregateOutputType | null
  }

  type GetKouendateGroupByPayload<T extends kouendateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KouendateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KouendateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KouendateGroupByOutputType[P]>
            : GetScalarType<T[P], KouendateGroupByOutputType[P]>
        }
      >
    >


  export type kouendateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    name?: boolean
    date?: boolean
    place?: boolean
    link?: boolean
  }, ExtArgs["result"]["kouendate"]>

  export type kouendateSelectScalar = {
    id?: boolean
    year?: boolean
    name?: boolean
    date?: boolean
    place?: boolean
    link?: boolean
  }


  export type $kouendatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kouendate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: number
      name: string
      date: string
      place: string
      link: string
    }, ExtArgs["result"]["kouendate"]>
    composites: {}
  }


  type kouendateGetPayload<S extends boolean | null | undefined | kouendateDefaultArgs> = $Result.GetResult<Prisma.$kouendatePayload, S>

  type kouendateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<kouendateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KouendateCountAggregateInputType | true
    }

  export interface kouendateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kouendate'], meta: { name: 'kouendate' } }
    /**
     * Find zero or one Kouendate that matches the filter.
     * @param {kouendateFindUniqueArgs} args - Arguments to find a Kouendate
     * @example
     * // Get one Kouendate
     * const kouendate = await prisma.kouendate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends kouendateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, kouendateFindUniqueArgs<ExtArgs>>
    ): Prisma__kouendateClient<$Result.GetResult<Prisma.$kouendatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Kouendate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {kouendateFindUniqueOrThrowArgs} args - Arguments to find a Kouendate
     * @example
     * // Get one Kouendate
     * const kouendate = await prisma.kouendate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends kouendateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kouendateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__kouendateClient<$Result.GetResult<Prisma.$kouendatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Kouendate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kouendateFindFirstArgs} args - Arguments to find a Kouendate
     * @example
     * // Get one Kouendate
     * const kouendate = await prisma.kouendate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends kouendateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, kouendateFindFirstArgs<ExtArgs>>
    ): Prisma__kouendateClient<$Result.GetResult<Prisma.$kouendatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Kouendate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kouendateFindFirstOrThrowArgs} args - Arguments to find a Kouendate
     * @example
     * // Get one Kouendate
     * const kouendate = await prisma.kouendate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends kouendateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kouendateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__kouendateClient<$Result.GetResult<Prisma.$kouendatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Kouendates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kouendateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kouendates
     * const kouendates = await prisma.kouendate.findMany()
     * 
     * // Get first 10 Kouendates
     * const kouendates = await prisma.kouendate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kouendateWithIdOnly = await prisma.kouendate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends kouendateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kouendateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kouendatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Kouendate.
     * @param {kouendateCreateArgs} args - Arguments to create a Kouendate.
     * @example
     * // Create one Kouendate
     * const Kouendate = await prisma.kouendate.create({
     *   data: {
     *     // ... data to create a Kouendate
     *   }
     * })
     * 
    **/
    create<T extends kouendateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, kouendateCreateArgs<ExtArgs>>
    ): Prisma__kouendateClient<$Result.GetResult<Prisma.$kouendatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Kouendates.
     *     @param {kouendateCreateManyArgs} args - Arguments to create many Kouendates.
     *     @example
     *     // Create many Kouendates
     *     const kouendate = await prisma.kouendate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends kouendateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kouendateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kouendate.
     * @param {kouendateDeleteArgs} args - Arguments to delete one Kouendate.
     * @example
     * // Delete one Kouendate
     * const Kouendate = await prisma.kouendate.delete({
     *   where: {
     *     // ... filter to delete one Kouendate
     *   }
     * })
     * 
    **/
    delete<T extends kouendateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, kouendateDeleteArgs<ExtArgs>>
    ): Prisma__kouendateClient<$Result.GetResult<Prisma.$kouendatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Kouendate.
     * @param {kouendateUpdateArgs} args - Arguments to update one Kouendate.
     * @example
     * // Update one Kouendate
     * const kouendate = await prisma.kouendate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends kouendateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, kouendateUpdateArgs<ExtArgs>>
    ): Prisma__kouendateClient<$Result.GetResult<Prisma.$kouendatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Kouendates.
     * @param {kouendateDeleteManyArgs} args - Arguments to filter Kouendates to delete.
     * @example
     * // Delete a few Kouendates
     * const { count } = await prisma.kouendate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends kouendateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kouendateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kouendates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kouendateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kouendates
     * const kouendate = await prisma.kouendate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends kouendateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, kouendateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kouendate.
     * @param {kouendateUpsertArgs} args - Arguments to update or create a Kouendate.
     * @example
     * // Update or create a Kouendate
     * const kouendate = await prisma.kouendate.upsert({
     *   create: {
     *     // ... data to create a Kouendate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kouendate we want to update
     *   }
     * })
    **/
    upsert<T extends kouendateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, kouendateUpsertArgs<ExtArgs>>
    ): Prisma__kouendateClient<$Result.GetResult<Prisma.$kouendatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Kouendates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kouendateCountArgs} args - Arguments to filter Kouendates to count.
     * @example
     * // Count the number of Kouendates
     * const count = await prisma.kouendate.count({
     *   where: {
     *     // ... the filter for the Kouendates we want to count
     *   }
     * })
    **/
    count<T extends kouendateCountArgs>(
      args?: Subset<T, kouendateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KouendateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kouendate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KouendateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KouendateAggregateArgs>(args: Subset<T, KouendateAggregateArgs>): Prisma.PrismaPromise<GetKouendateAggregateType<T>>

    /**
     * Group by Kouendate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kouendateGroupByArgs} args - Group by arguments.
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
      T extends kouendateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kouendateGroupByArgs['orderBy'] }
        : { orderBy?: kouendateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kouendateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKouendateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kouendate model
   */
  readonly fields: kouendateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kouendate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kouendateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the kouendate model
   */ 
  interface kouendateFieldRefs {
    readonly id: FieldRef<"kouendate", 'Int'>
    readonly year: FieldRef<"kouendate", 'Int'>
    readonly name: FieldRef<"kouendate", 'String'>
    readonly date: FieldRef<"kouendate", 'String'>
    readonly place: FieldRef<"kouendate", 'String'>
    readonly link: FieldRef<"kouendate", 'String'>
  }
    

  // Custom InputTypes

  /**
   * kouendate findUnique
   */
  export type kouendateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kouendate
     */
    select?: kouendateSelect<ExtArgs> | null
    /**
     * Filter, which kouendate to fetch.
     */
    where: kouendateWhereUniqueInput
  }


  /**
   * kouendate findUniqueOrThrow
   */
  export type kouendateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kouendate
     */
    select?: kouendateSelect<ExtArgs> | null
    /**
     * Filter, which kouendate to fetch.
     */
    where: kouendateWhereUniqueInput
  }


  /**
   * kouendate findFirst
   */
  export type kouendateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kouendate
     */
    select?: kouendateSelect<ExtArgs> | null
    /**
     * Filter, which kouendate to fetch.
     */
    where?: kouendateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kouendates to fetch.
     */
    orderBy?: kouendateOrderByWithRelationInput | kouendateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kouendates.
     */
    cursor?: kouendateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kouendates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kouendates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kouendates.
     */
    distinct?: KouendateScalarFieldEnum | KouendateScalarFieldEnum[]
  }


  /**
   * kouendate findFirstOrThrow
   */
  export type kouendateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kouendate
     */
    select?: kouendateSelect<ExtArgs> | null
    /**
     * Filter, which kouendate to fetch.
     */
    where?: kouendateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kouendates to fetch.
     */
    orderBy?: kouendateOrderByWithRelationInput | kouendateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kouendates.
     */
    cursor?: kouendateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kouendates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kouendates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kouendates.
     */
    distinct?: KouendateScalarFieldEnum | KouendateScalarFieldEnum[]
  }


  /**
   * kouendate findMany
   */
  export type kouendateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kouendate
     */
    select?: kouendateSelect<ExtArgs> | null
    /**
     * Filter, which kouendates to fetch.
     */
    where?: kouendateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kouendates to fetch.
     */
    orderBy?: kouendateOrderByWithRelationInput | kouendateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kouendates.
     */
    cursor?: kouendateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kouendates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kouendates.
     */
    skip?: number
    distinct?: KouendateScalarFieldEnum | KouendateScalarFieldEnum[]
  }


  /**
   * kouendate create
   */
  export type kouendateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kouendate
     */
    select?: kouendateSelect<ExtArgs> | null
    /**
     * The data needed to create a kouendate.
     */
    data: XOR<kouendateCreateInput, kouendateUncheckedCreateInput>
  }


  /**
   * kouendate createMany
   */
  export type kouendateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kouendates.
     */
    data: kouendateCreateManyInput | kouendateCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * kouendate update
   */
  export type kouendateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kouendate
     */
    select?: kouendateSelect<ExtArgs> | null
    /**
     * The data needed to update a kouendate.
     */
    data: XOR<kouendateUpdateInput, kouendateUncheckedUpdateInput>
    /**
     * Choose, which kouendate to update.
     */
    where: kouendateWhereUniqueInput
  }


  /**
   * kouendate updateMany
   */
  export type kouendateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kouendates.
     */
    data: XOR<kouendateUpdateManyMutationInput, kouendateUncheckedUpdateManyInput>
    /**
     * Filter which kouendates to update
     */
    where?: kouendateWhereInput
  }


  /**
   * kouendate upsert
   */
  export type kouendateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kouendate
     */
    select?: kouendateSelect<ExtArgs> | null
    /**
     * The filter to search for the kouendate to update in case it exists.
     */
    where: kouendateWhereUniqueInput
    /**
     * In case the kouendate found by the `where` argument doesn't exist, create a new kouendate with this data.
     */
    create: XOR<kouendateCreateInput, kouendateUncheckedCreateInput>
    /**
     * In case the kouendate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kouendateUpdateInput, kouendateUncheckedUpdateInput>
  }


  /**
   * kouendate delete
   */
  export type kouendateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kouendate
     */
    select?: kouendateSelect<ExtArgs> | null
    /**
     * Filter which kouendate to delete.
     */
    where: kouendateWhereUniqueInput
  }


  /**
   * kouendate deleteMany
   */
  export type kouendateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kouendates to delete
     */
    where?: kouendateWhereInput
  }


  /**
   * kouendate without action
   */
  export type kouendateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kouendate
     */
    select?: kouendateSelect<ExtArgs> | null
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


  export const MemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    course: 'course',
    generation: 'generation',
    Icon: 'Icon',
    X_id: 'X_id',
    haritora: 'haritora',
    message: 'message',
    isReader: 'isReader',
    isSubReader: 'isSubReader',
    isFirstReader: 'isFirstReader',
    isDirector: 'isDirector',
    isMaking: 'isMaking',
    isWriter: 'isWriter',
    isActor: 'isActor',
    isSoundReader: 'isSoundReader',
    isSound: 'isSound',
    isLightReader: 'isLightReader',
    isLight: 'isLight',
    isPropReader: 'isPropReader',
    isProp: 'isProp',
    isClothReader: 'isClothReader',
    isCloth: 'isCloth',
    isRetired: 'isRetired',
    level: 'level'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const DiscordScalarFieldEnum: {
    id: 'id',
    name: 'name',
    discord_id: 'discord_id'
  };

  export type DiscordScalarFieldEnum = (typeof DiscordScalarFieldEnum)[keyof typeof DiscordScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    year: 'year',
    name: 'name',
    link: 'link'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    filename: 'filename',
    creator: 'creator',
    tag: 'tag'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const LoginlogScalarFieldEnum: {
    id: 'id',
    user: 'user',
    ip: 'ip',
    network: 'network',
    locate: 'locate',
    date: 'date'
  };

  export type LoginlogScalarFieldEnum = (typeof LoginlogScalarFieldEnum)[keyof typeof LoginlogScalarFieldEnum]


  export const ErrorloginlogScalarFieldEnum: {
    id: 'id',
    user: 'user',
    ip: 'ip',
    network: 'network',
    locate: 'locate',
    date: 'date'
  };

  export type ErrorloginlogScalarFieldEnum = (typeof ErrorloginlogScalarFieldEnum)[keyof typeof ErrorloginlogScalarFieldEnum]


  export const KouendateScalarFieldEnum: {
    id: 'id',
    year: 'year',
    name: 'name',
    date: 'date',
    place: 'place',
    link: 'link'
  };

  export type KouendateScalarFieldEnum = (typeof KouendateScalarFieldEnum)[keyof typeof KouendateScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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


  export type memberWhereInput = {
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    id?: IntFilter<"member"> | number
    name?: StringFilter<"member"> | string
    course?: StringFilter<"member"> | string
    generation?: IntFilter<"member"> | number
    Icon?: StringNullableFilter<"member"> | string | null
    X_id?: StringNullableFilter<"member"> | string | null
    haritora?: StringNullableFilter<"member"> | string | null
    message?: StringNullableFilter<"member"> | string | null
    isReader?: BoolFilter<"member"> | boolean
    isSubReader?: BoolFilter<"member"> | boolean
    isFirstReader?: BoolFilter<"member"> | boolean
    isDirector?: BoolFilter<"member"> | boolean
    isMaking?: BoolFilter<"member"> | boolean
    isWriter?: BoolFilter<"member"> | boolean
    isActor?: BoolFilter<"member"> | boolean
    isSoundReader?: BoolFilter<"member"> | boolean
    isSound?: BoolFilter<"member"> | boolean
    isLightReader?: BoolFilter<"member"> | boolean
    isLight?: BoolFilter<"member"> | boolean
    isPropReader?: BoolFilter<"member"> | boolean
    isProp?: BoolFilter<"member"> | boolean
    isClothReader?: BoolFilter<"member"> | boolean
    isCloth?: BoolFilter<"member"> | boolean
    isRetired?: BoolFilter<"member"> | boolean
    level?: IntFilter<"member"> | number
  }

  export type memberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    course?: SortOrder
    generation?: SortOrder
    Icon?: SortOrderInput | SortOrder
    X_id?: SortOrderInput | SortOrder
    haritora?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    isReader?: SortOrder
    isSubReader?: SortOrder
    isFirstReader?: SortOrder
    isDirector?: SortOrder
    isMaking?: SortOrder
    isWriter?: SortOrder
    isActor?: SortOrder
    isSoundReader?: SortOrder
    isSound?: SortOrder
    isLightReader?: SortOrder
    isLight?: SortOrder
    isPropReader?: SortOrder
    isProp?: SortOrder
    isClothReader?: SortOrder
    isCloth?: SortOrder
    isRetired?: SortOrder
    level?: SortOrder
  }

  export type memberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    name?: StringFilter<"member"> | string
    course?: StringFilter<"member"> | string
    generation?: IntFilter<"member"> | number
    Icon?: StringNullableFilter<"member"> | string | null
    X_id?: StringNullableFilter<"member"> | string | null
    haritora?: StringNullableFilter<"member"> | string | null
    message?: StringNullableFilter<"member"> | string | null
    isReader?: BoolFilter<"member"> | boolean
    isSubReader?: BoolFilter<"member"> | boolean
    isFirstReader?: BoolFilter<"member"> | boolean
    isDirector?: BoolFilter<"member"> | boolean
    isMaking?: BoolFilter<"member"> | boolean
    isWriter?: BoolFilter<"member"> | boolean
    isActor?: BoolFilter<"member"> | boolean
    isSoundReader?: BoolFilter<"member"> | boolean
    isSound?: BoolFilter<"member"> | boolean
    isLightReader?: BoolFilter<"member"> | boolean
    isLight?: BoolFilter<"member"> | boolean
    isPropReader?: BoolFilter<"member"> | boolean
    isProp?: BoolFilter<"member"> | boolean
    isClothReader?: BoolFilter<"member"> | boolean
    isCloth?: BoolFilter<"member"> | boolean
    isRetired?: BoolFilter<"member"> | boolean
    level?: IntFilter<"member"> | number
  }, "id">

  export type memberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    course?: SortOrder
    generation?: SortOrder
    Icon?: SortOrderInput | SortOrder
    X_id?: SortOrderInput | SortOrder
    haritora?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    isReader?: SortOrder
    isSubReader?: SortOrder
    isFirstReader?: SortOrder
    isDirector?: SortOrder
    isMaking?: SortOrder
    isWriter?: SortOrder
    isActor?: SortOrder
    isSoundReader?: SortOrder
    isSound?: SortOrder
    isLightReader?: SortOrder
    isLight?: SortOrder
    isPropReader?: SortOrder
    isProp?: SortOrder
    isClothReader?: SortOrder
    isCloth?: SortOrder
    isRetired?: SortOrder
    level?: SortOrder
    _count?: memberCountOrderByAggregateInput
    _avg?: memberAvgOrderByAggregateInput
    _max?: memberMaxOrderByAggregateInput
    _min?: memberMinOrderByAggregateInput
    _sum?: memberSumOrderByAggregateInput
  }

  export type memberScalarWhereWithAggregatesInput = {
    AND?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    OR?: memberScalarWhereWithAggregatesInput[]
    NOT?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"member"> | number
    name?: StringWithAggregatesFilter<"member"> | string
    course?: StringWithAggregatesFilter<"member"> | string
    generation?: IntWithAggregatesFilter<"member"> | number
    Icon?: StringNullableWithAggregatesFilter<"member"> | string | null
    X_id?: StringNullableWithAggregatesFilter<"member"> | string | null
    haritora?: StringNullableWithAggregatesFilter<"member"> | string | null
    message?: StringNullableWithAggregatesFilter<"member"> | string | null
    isReader?: BoolWithAggregatesFilter<"member"> | boolean
    isSubReader?: BoolWithAggregatesFilter<"member"> | boolean
    isFirstReader?: BoolWithAggregatesFilter<"member"> | boolean
    isDirector?: BoolWithAggregatesFilter<"member"> | boolean
    isMaking?: BoolWithAggregatesFilter<"member"> | boolean
    isWriter?: BoolWithAggregatesFilter<"member"> | boolean
    isActor?: BoolWithAggregatesFilter<"member"> | boolean
    isSoundReader?: BoolWithAggregatesFilter<"member"> | boolean
    isSound?: BoolWithAggregatesFilter<"member"> | boolean
    isLightReader?: BoolWithAggregatesFilter<"member"> | boolean
    isLight?: BoolWithAggregatesFilter<"member"> | boolean
    isPropReader?: BoolWithAggregatesFilter<"member"> | boolean
    isProp?: BoolWithAggregatesFilter<"member"> | boolean
    isClothReader?: BoolWithAggregatesFilter<"member"> | boolean
    isCloth?: BoolWithAggregatesFilter<"member"> | boolean
    isRetired?: BoolWithAggregatesFilter<"member"> | boolean
    level?: IntWithAggregatesFilter<"member"> | number
  }

  export type discordWhereInput = {
    AND?: discordWhereInput | discordWhereInput[]
    OR?: discordWhereInput[]
    NOT?: discordWhereInput | discordWhereInput[]
    id?: IntFilter<"discord"> | number
    name?: StringFilter<"discord"> | string
    discord_id?: StringFilter<"discord"> | string
  }

  export type discordOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    discord_id?: SortOrder
  }

  export type discordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: discordWhereInput | discordWhereInput[]
    OR?: discordWhereInput[]
    NOT?: discordWhereInput | discordWhereInput[]
    name?: StringFilter<"discord"> | string
    discord_id?: StringFilter<"discord"> | string
  }, "id">

  export type discordOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    discord_id?: SortOrder
    _count?: discordCountOrderByAggregateInput
    _avg?: discordAvgOrderByAggregateInput
    _max?: discordMaxOrderByAggregateInput
    _min?: discordMinOrderByAggregateInput
    _sum?: discordSumOrderByAggregateInput
  }

  export type discordScalarWhereWithAggregatesInput = {
    AND?: discordScalarWhereWithAggregatesInput | discordScalarWhereWithAggregatesInput[]
    OR?: discordScalarWhereWithAggregatesInput[]
    NOT?: discordScalarWhereWithAggregatesInput | discordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"discord"> | number
    name?: StringWithAggregatesFilter<"discord"> | string
    discord_id?: StringWithAggregatesFilter<"discord"> | string
  }

  export type movieWhereInput = {
    AND?: movieWhereInput | movieWhereInput[]
    OR?: movieWhereInput[]
    NOT?: movieWhereInput | movieWhereInput[]
    id?: IntFilter<"movie"> | number
    year?: IntFilter<"movie"> | number
    name?: StringFilter<"movie"> | string
    link?: StringFilter<"movie"> | string
  }

  export type movieOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type movieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: movieWhereInput | movieWhereInput[]
    OR?: movieWhereInput[]
    NOT?: movieWhereInput | movieWhereInput[]
    year?: IntFilter<"movie"> | number
    name?: StringFilter<"movie"> | string
    link?: StringFilter<"movie"> | string
  }, "id">

  export type movieOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    link?: SortOrder
    _count?: movieCountOrderByAggregateInput
    _avg?: movieAvgOrderByAggregateInput
    _max?: movieMaxOrderByAggregateInput
    _min?: movieMinOrderByAggregateInput
    _sum?: movieSumOrderByAggregateInput
  }

  export type movieScalarWhereWithAggregatesInput = {
    AND?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[]
    OR?: movieScalarWhereWithAggregatesInput[]
    NOT?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movie"> | number
    year?: IntWithAggregatesFilter<"movie"> | number
    name?: StringWithAggregatesFilter<"movie"> | string
    link?: StringWithAggregatesFilter<"movie"> | string
  }

  export type documentWhereInput = {
    AND?: documentWhereInput | documentWhereInput[]
    OR?: documentWhereInput[]
    NOT?: documentWhereInput | documentWhereInput[]
    id?: IntFilter<"document"> | number
    name?: StringFilter<"document"> | string
    filename?: StringFilter<"document"> | string
    creator?: StringFilter<"document"> | string
    tag?: StringFilter<"document"> | string
  }

  export type documentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    filename?: SortOrder
    creator?: SortOrder
    tag?: SortOrder
  }

  export type documentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: documentWhereInput | documentWhereInput[]
    OR?: documentWhereInput[]
    NOT?: documentWhereInput | documentWhereInput[]
    name?: StringFilter<"document"> | string
    filename?: StringFilter<"document"> | string
    creator?: StringFilter<"document"> | string
    tag?: StringFilter<"document"> | string
  }, "id">

  export type documentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    filename?: SortOrder
    creator?: SortOrder
    tag?: SortOrder
    _count?: documentCountOrderByAggregateInput
    _avg?: documentAvgOrderByAggregateInput
    _max?: documentMaxOrderByAggregateInput
    _min?: documentMinOrderByAggregateInput
    _sum?: documentSumOrderByAggregateInput
  }

  export type documentScalarWhereWithAggregatesInput = {
    AND?: documentScalarWhereWithAggregatesInput | documentScalarWhereWithAggregatesInput[]
    OR?: documentScalarWhereWithAggregatesInput[]
    NOT?: documentScalarWhereWithAggregatesInput | documentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"document"> | number
    name?: StringWithAggregatesFilter<"document"> | string
    filename?: StringWithAggregatesFilter<"document"> | string
    creator?: StringWithAggregatesFilter<"document"> | string
    tag?: StringWithAggregatesFilter<"document"> | string
  }

  export type loginlogWhereInput = {
    AND?: loginlogWhereInput | loginlogWhereInput[]
    OR?: loginlogWhereInput[]
    NOT?: loginlogWhereInput | loginlogWhereInput[]
    id?: IntFilter<"loginlog"> | number
    user?: StringFilter<"loginlog"> | string
    ip?: StringFilter<"loginlog"> | string
    network?: StringFilter<"loginlog"> | string
    locate?: StringFilter<"loginlog"> | string
    date?: StringFilter<"loginlog"> | string
  }

  export type loginlogOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    network?: SortOrder
    locate?: SortOrder
    date?: SortOrder
  }

  export type loginlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: loginlogWhereInput | loginlogWhereInput[]
    OR?: loginlogWhereInput[]
    NOT?: loginlogWhereInput | loginlogWhereInput[]
    user?: StringFilter<"loginlog"> | string
    ip?: StringFilter<"loginlog"> | string
    network?: StringFilter<"loginlog"> | string
    locate?: StringFilter<"loginlog"> | string
    date?: StringFilter<"loginlog"> | string
  }, "id">

  export type loginlogOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    network?: SortOrder
    locate?: SortOrder
    date?: SortOrder
    _count?: loginlogCountOrderByAggregateInput
    _avg?: loginlogAvgOrderByAggregateInput
    _max?: loginlogMaxOrderByAggregateInput
    _min?: loginlogMinOrderByAggregateInput
    _sum?: loginlogSumOrderByAggregateInput
  }

  export type loginlogScalarWhereWithAggregatesInput = {
    AND?: loginlogScalarWhereWithAggregatesInput | loginlogScalarWhereWithAggregatesInput[]
    OR?: loginlogScalarWhereWithAggregatesInput[]
    NOT?: loginlogScalarWhereWithAggregatesInput | loginlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"loginlog"> | number
    user?: StringWithAggregatesFilter<"loginlog"> | string
    ip?: StringWithAggregatesFilter<"loginlog"> | string
    network?: StringWithAggregatesFilter<"loginlog"> | string
    locate?: StringWithAggregatesFilter<"loginlog"> | string
    date?: StringWithAggregatesFilter<"loginlog"> | string
  }

  export type errorloginlogWhereInput = {
    AND?: errorloginlogWhereInput | errorloginlogWhereInput[]
    OR?: errorloginlogWhereInput[]
    NOT?: errorloginlogWhereInput | errorloginlogWhereInput[]
    id?: IntFilter<"errorloginlog"> | number
    user?: StringFilter<"errorloginlog"> | string
    ip?: StringFilter<"errorloginlog"> | string
    network?: StringFilter<"errorloginlog"> | string
    locate?: StringFilter<"errorloginlog"> | string
    date?: StringFilter<"errorloginlog"> | string
  }

  export type errorloginlogOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    network?: SortOrder
    locate?: SortOrder
    date?: SortOrder
  }

  export type errorloginlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: errorloginlogWhereInput | errorloginlogWhereInput[]
    OR?: errorloginlogWhereInput[]
    NOT?: errorloginlogWhereInput | errorloginlogWhereInput[]
    user?: StringFilter<"errorloginlog"> | string
    ip?: StringFilter<"errorloginlog"> | string
    network?: StringFilter<"errorloginlog"> | string
    locate?: StringFilter<"errorloginlog"> | string
    date?: StringFilter<"errorloginlog"> | string
  }, "id">

  export type errorloginlogOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    network?: SortOrder
    locate?: SortOrder
    date?: SortOrder
    _count?: errorloginlogCountOrderByAggregateInput
    _avg?: errorloginlogAvgOrderByAggregateInput
    _max?: errorloginlogMaxOrderByAggregateInput
    _min?: errorloginlogMinOrderByAggregateInput
    _sum?: errorloginlogSumOrderByAggregateInput
  }

  export type errorloginlogScalarWhereWithAggregatesInput = {
    AND?: errorloginlogScalarWhereWithAggregatesInput | errorloginlogScalarWhereWithAggregatesInput[]
    OR?: errorloginlogScalarWhereWithAggregatesInput[]
    NOT?: errorloginlogScalarWhereWithAggregatesInput | errorloginlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"errorloginlog"> | number
    user?: StringWithAggregatesFilter<"errorloginlog"> | string
    ip?: StringWithAggregatesFilter<"errorloginlog"> | string
    network?: StringWithAggregatesFilter<"errorloginlog"> | string
    locate?: StringWithAggregatesFilter<"errorloginlog"> | string
    date?: StringWithAggregatesFilter<"errorloginlog"> | string
  }

  export type kouendateWhereInput = {
    AND?: kouendateWhereInput | kouendateWhereInput[]
    OR?: kouendateWhereInput[]
    NOT?: kouendateWhereInput | kouendateWhereInput[]
    id?: IntFilter<"kouendate"> | number
    year?: IntFilter<"kouendate"> | number
    name?: StringFilter<"kouendate"> | string
    date?: StringFilter<"kouendate"> | string
    place?: StringFilter<"kouendate"> | string
    link?: StringFilter<"kouendate"> | string
  }

  export type kouendateOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    date?: SortOrder
    place?: SortOrder
    link?: SortOrder
  }

  export type kouendateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: kouendateWhereInput | kouendateWhereInput[]
    OR?: kouendateWhereInput[]
    NOT?: kouendateWhereInput | kouendateWhereInput[]
    year?: IntFilter<"kouendate"> | number
    name?: StringFilter<"kouendate"> | string
    date?: StringFilter<"kouendate"> | string
    place?: StringFilter<"kouendate"> | string
    link?: StringFilter<"kouendate"> | string
  }, "id">

  export type kouendateOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    date?: SortOrder
    place?: SortOrder
    link?: SortOrder
    _count?: kouendateCountOrderByAggregateInput
    _avg?: kouendateAvgOrderByAggregateInput
    _max?: kouendateMaxOrderByAggregateInput
    _min?: kouendateMinOrderByAggregateInput
    _sum?: kouendateSumOrderByAggregateInput
  }

  export type kouendateScalarWhereWithAggregatesInput = {
    AND?: kouendateScalarWhereWithAggregatesInput | kouendateScalarWhereWithAggregatesInput[]
    OR?: kouendateScalarWhereWithAggregatesInput[]
    NOT?: kouendateScalarWhereWithAggregatesInput | kouendateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"kouendate"> | number
    year?: IntWithAggregatesFilter<"kouendate"> | number
    name?: StringWithAggregatesFilter<"kouendate"> | string
    date?: StringWithAggregatesFilter<"kouendate"> | string
    place?: StringWithAggregatesFilter<"kouendate"> | string
    link?: StringWithAggregatesFilter<"kouendate"> | string
  }

  export type memberCreateInput = {
    name: string
    course: string
    generation: number
    Icon?: string | null
    X_id?: string | null
    haritora?: string | null
    message?: string | null
    isReader?: boolean
    isSubReader?: boolean
    isFirstReader?: boolean
    isDirector?: boolean
    isMaking?: boolean
    isWriter?: boolean
    isActor?: boolean
    isSoundReader?: boolean
    isSound?: boolean
    isLightReader?: boolean
    isLight?: boolean
    isPropReader?: boolean
    isProp?: boolean
    isClothReader?: boolean
    isCloth?: boolean
    isRetired?: boolean
    level?: number
  }

  export type memberUncheckedCreateInput = {
    id?: number
    name: string
    course: string
    generation: number
    Icon?: string | null
    X_id?: string | null
    haritora?: string | null
    message?: string | null
    isReader?: boolean
    isSubReader?: boolean
    isFirstReader?: boolean
    isDirector?: boolean
    isMaking?: boolean
    isWriter?: boolean
    isActor?: boolean
    isSoundReader?: boolean
    isSound?: boolean
    isLightReader?: boolean
    isLight?: boolean
    isPropReader?: boolean
    isProp?: boolean
    isClothReader?: boolean
    isCloth?: boolean
    isRetired?: boolean
    level?: number
  }

  export type memberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    Icon?: NullableStringFieldUpdateOperationsInput | string | null
    X_id?: NullableStringFieldUpdateOperationsInput | string | null
    haritora?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isReader?: BoolFieldUpdateOperationsInput | boolean
    isSubReader?: BoolFieldUpdateOperationsInput | boolean
    isFirstReader?: BoolFieldUpdateOperationsInput | boolean
    isDirector?: BoolFieldUpdateOperationsInput | boolean
    isMaking?: BoolFieldUpdateOperationsInput | boolean
    isWriter?: BoolFieldUpdateOperationsInput | boolean
    isActor?: BoolFieldUpdateOperationsInput | boolean
    isSoundReader?: BoolFieldUpdateOperationsInput | boolean
    isSound?: BoolFieldUpdateOperationsInput | boolean
    isLightReader?: BoolFieldUpdateOperationsInput | boolean
    isLight?: BoolFieldUpdateOperationsInput | boolean
    isPropReader?: BoolFieldUpdateOperationsInput | boolean
    isProp?: BoolFieldUpdateOperationsInput | boolean
    isClothReader?: BoolFieldUpdateOperationsInput | boolean
    isCloth?: BoolFieldUpdateOperationsInput | boolean
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
  }

  export type memberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    Icon?: NullableStringFieldUpdateOperationsInput | string | null
    X_id?: NullableStringFieldUpdateOperationsInput | string | null
    haritora?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isReader?: BoolFieldUpdateOperationsInput | boolean
    isSubReader?: BoolFieldUpdateOperationsInput | boolean
    isFirstReader?: BoolFieldUpdateOperationsInput | boolean
    isDirector?: BoolFieldUpdateOperationsInput | boolean
    isMaking?: BoolFieldUpdateOperationsInput | boolean
    isWriter?: BoolFieldUpdateOperationsInput | boolean
    isActor?: BoolFieldUpdateOperationsInput | boolean
    isSoundReader?: BoolFieldUpdateOperationsInput | boolean
    isSound?: BoolFieldUpdateOperationsInput | boolean
    isLightReader?: BoolFieldUpdateOperationsInput | boolean
    isLight?: BoolFieldUpdateOperationsInput | boolean
    isPropReader?: BoolFieldUpdateOperationsInput | boolean
    isProp?: BoolFieldUpdateOperationsInput | boolean
    isClothReader?: BoolFieldUpdateOperationsInput | boolean
    isCloth?: BoolFieldUpdateOperationsInput | boolean
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
  }

  export type memberCreateManyInput = {
    id?: number
    name: string
    course: string
    generation: number
    Icon?: string | null
    X_id?: string | null
    haritora?: string | null
    message?: string | null
    isReader?: boolean
    isSubReader?: boolean
    isFirstReader?: boolean
    isDirector?: boolean
    isMaking?: boolean
    isWriter?: boolean
    isActor?: boolean
    isSoundReader?: boolean
    isSound?: boolean
    isLightReader?: boolean
    isLight?: boolean
    isPropReader?: boolean
    isProp?: boolean
    isClothReader?: boolean
    isCloth?: boolean
    isRetired?: boolean
    level?: number
  }

  export type memberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    Icon?: NullableStringFieldUpdateOperationsInput | string | null
    X_id?: NullableStringFieldUpdateOperationsInput | string | null
    haritora?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isReader?: BoolFieldUpdateOperationsInput | boolean
    isSubReader?: BoolFieldUpdateOperationsInput | boolean
    isFirstReader?: BoolFieldUpdateOperationsInput | boolean
    isDirector?: BoolFieldUpdateOperationsInput | boolean
    isMaking?: BoolFieldUpdateOperationsInput | boolean
    isWriter?: BoolFieldUpdateOperationsInput | boolean
    isActor?: BoolFieldUpdateOperationsInput | boolean
    isSoundReader?: BoolFieldUpdateOperationsInput | boolean
    isSound?: BoolFieldUpdateOperationsInput | boolean
    isLightReader?: BoolFieldUpdateOperationsInput | boolean
    isLight?: BoolFieldUpdateOperationsInput | boolean
    isPropReader?: BoolFieldUpdateOperationsInput | boolean
    isProp?: BoolFieldUpdateOperationsInput | boolean
    isClothReader?: BoolFieldUpdateOperationsInput | boolean
    isCloth?: BoolFieldUpdateOperationsInput | boolean
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
  }

  export type memberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    Icon?: NullableStringFieldUpdateOperationsInput | string | null
    X_id?: NullableStringFieldUpdateOperationsInput | string | null
    haritora?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isReader?: BoolFieldUpdateOperationsInput | boolean
    isSubReader?: BoolFieldUpdateOperationsInput | boolean
    isFirstReader?: BoolFieldUpdateOperationsInput | boolean
    isDirector?: BoolFieldUpdateOperationsInput | boolean
    isMaking?: BoolFieldUpdateOperationsInput | boolean
    isWriter?: BoolFieldUpdateOperationsInput | boolean
    isActor?: BoolFieldUpdateOperationsInput | boolean
    isSoundReader?: BoolFieldUpdateOperationsInput | boolean
    isSound?: BoolFieldUpdateOperationsInput | boolean
    isLightReader?: BoolFieldUpdateOperationsInput | boolean
    isLight?: BoolFieldUpdateOperationsInput | boolean
    isPropReader?: BoolFieldUpdateOperationsInput | boolean
    isProp?: BoolFieldUpdateOperationsInput | boolean
    isClothReader?: BoolFieldUpdateOperationsInput | boolean
    isCloth?: BoolFieldUpdateOperationsInput | boolean
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
  }

  export type discordCreateInput = {
    name: string
    discord_id: string
  }

  export type discordUncheckedCreateInput = {
    id?: number
    name: string
    discord_id: string
  }

  export type discordUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type discordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type discordCreateManyInput = {
    id?: number
    name: string
    discord_id: string
  }

  export type discordUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type discordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type movieCreateInput = {
    year: number
    name?: string
    link?: string
  }

  export type movieUncheckedCreateInput = {
    id?: number
    year: number
    name?: string
    link?: string
  }

  export type movieUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type movieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type movieCreateManyInput = {
    id?: number
    year: number
    name?: string
    link?: string
  }

  export type movieUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type movieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type documentCreateInput = {
    name: string
    filename: string
    creator: string
    tag: string
  }

  export type documentUncheckedCreateInput = {
    id?: number
    name: string
    filename: string
    creator: string
    tag: string
  }

  export type documentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type documentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type documentCreateManyInput = {
    id?: number
    name: string
    filename: string
    creator: string
    tag: string
  }

  export type documentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type documentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type loginlogCreateInput = {
    user: string
    ip: string
    network: string
    locate: string
    date: string
  }

  export type loginlogUncheckedCreateInput = {
    id?: number
    user: string
    ip: string
    network: string
    locate: string
    date: string
  }

  export type loginlogUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    locate?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type loginlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    locate?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type loginlogCreateManyInput = {
    id?: number
    user: string
    ip: string
    network: string
    locate: string
    date: string
  }

  export type loginlogUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    locate?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type loginlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    locate?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type errorloginlogCreateInput = {
    user: string
    ip: string
    network: string
    locate: string
    date: string
  }

  export type errorloginlogUncheckedCreateInput = {
    id?: number
    user: string
    ip: string
    network: string
    locate: string
    date: string
  }

  export type errorloginlogUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    locate?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type errorloginlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    locate?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type errorloginlogCreateManyInput = {
    id?: number
    user: string
    ip: string
    network: string
    locate: string
    date: string
  }

  export type errorloginlogUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    locate?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type errorloginlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    locate?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
  }

  export type kouendateCreateInput = {
    year: number
    name: string
    date: string
    place: string
    link: string
  }

  export type kouendateUncheckedCreateInput = {
    id?: number
    year: number
    name: string
    date: string
    place: string
    link: string
  }

  export type kouendateUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type kouendateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type kouendateCreateManyInput = {
    id?: number
    year: number
    name: string
    date: string
    place: string
    link: string
  }

  export type kouendateUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type kouendateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type memberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    course?: SortOrder
    generation?: SortOrder
    Icon?: SortOrder
    X_id?: SortOrder
    haritora?: SortOrder
    message?: SortOrder
    isReader?: SortOrder
    isSubReader?: SortOrder
    isFirstReader?: SortOrder
    isDirector?: SortOrder
    isMaking?: SortOrder
    isWriter?: SortOrder
    isActor?: SortOrder
    isSoundReader?: SortOrder
    isSound?: SortOrder
    isLightReader?: SortOrder
    isLight?: SortOrder
    isPropReader?: SortOrder
    isProp?: SortOrder
    isClothReader?: SortOrder
    isCloth?: SortOrder
    isRetired?: SortOrder
    level?: SortOrder
  }

  export type memberAvgOrderByAggregateInput = {
    id?: SortOrder
    generation?: SortOrder
    level?: SortOrder
  }

  export type memberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    course?: SortOrder
    generation?: SortOrder
    Icon?: SortOrder
    X_id?: SortOrder
    haritora?: SortOrder
    message?: SortOrder
    isReader?: SortOrder
    isSubReader?: SortOrder
    isFirstReader?: SortOrder
    isDirector?: SortOrder
    isMaking?: SortOrder
    isWriter?: SortOrder
    isActor?: SortOrder
    isSoundReader?: SortOrder
    isSound?: SortOrder
    isLightReader?: SortOrder
    isLight?: SortOrder
    isPropReader?: SortOrder
    isProp?: SortOrder
    isClothReader?: SortOrder
    isCloth?: SortOrder
    isRetired?: SortOrder
    level?: SortOrder
  }

  export type memberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    course?: SortOrder
    generation?: SortOrder
    Icon?: SortOrder
    X_id?: SortOrder
    haritora?: SortOrder
    message?: SortOrder
    isReader?: SortOrder
    isSubReader?: SortOrder
    isFirstReader?: SortOrder
    isDirector?: SortOrder
    isMaking?: SortOrder
    isWriter?: SortOrder
    isActor?: SortOrder
    isSoundReader?: SortOrder
    isSound?: SortOrder
    isLightReader?: SortOrder
    isLight?: SortOrder
    isPropReader?: SortOrder
    isProp?: SortOrder
    isClothReader?: SortOrder
    isCloth?: SortOrder
    isRetired?: SortOrder
    level?: SortOrder
  }

  export type memberSumOrderByAggregateInput = {
    id?: SortOrder
    generation?: SortOrder
    level?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type discordCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discord_id?: SortOrder
  }

  export type discordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type discordMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discord_id?: SortOrder
  }

  export type discordMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discord_id?: SortOrder
  }

  export type discordSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type movieCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type movieAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type movieMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type movieMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    link?: SortOrder
  }

  export type movieSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type documentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filename?: SortOrder
    creator?: SortOrder
    tag?: SortOrder
  }

  export type documentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type documentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filename?: SortOrder
    creator?: SortOrder
    tag?: SortOrder
  }

  export type documentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filename?: SortOrder
    creator?: SortOrder
    tag?: SortOrder
  }

  export type documentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type loginlogCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    network?: SortOrder
    locate?: SortOrder
    date?: SortOrder
  }

  export type loginlogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type loginlogMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    network?: SortOrder
    locate?: SortOrder
    date?: SortOrder
  }

  export type loginlogMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    network?: SortOrder
    locate?: SortOrder
    date?: SortOrder
  }

  export type loginlogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type errorloginlogCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    network?: SortOrder
    locate?: SortOrder
    date?: SortOrder
  }

  export type errorloginlogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type errorloginlogMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    network?: SortOrder
    locate?: SortOrder
    date?: SortOrder
  }

  export type errorloginlogMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    network?: SortOrder
    locate?: SortOrder
    date?: SortOrder
  }

  export type errorloginlogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type kouendateCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    date?: SortOrder
    place?: SortOrder
    link?: SortOrder
  }

  export type kouendateAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type kouendateMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    date?: SortOrder
    place?: SortOrder
    link?: SortOrder
  }

  export type kouendateMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    name?: SortOrder
    date?: SortOrder
    place?: SortOrder
    link?: SortOrder
  }

  export type kouendateSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
     * @deprecated Use memberDefaultArgs instead
     */
    export type memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = memberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use discordDefaultArgs instead
     */
    export type discordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = discordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use movieDefaultArgs instead
     */
    export type movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = movieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use documentDefaultArgs instead
     */
    export type documentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = documentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use loginlogDefaultArgs instead
     */
    export type loginlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = loginlogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use errorloginlogDefaultArgs instead
     */
    export type errorloginlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = errorloginlogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use kouendateDefaultArgs instead
     */
    export type kouendateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = kouendateDefaultArgs<ExtArgs>

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