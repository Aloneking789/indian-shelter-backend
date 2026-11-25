
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model ImportBatch
 * 
 */
export type ImportBatch = $Result.DefaultSelection<Prisma.$ImportBatchPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model ResourceLink
 * 
 */
export type ResourceLink = $Result.DefaultSelection<Prisma.$ResourceLinkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ImportStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  PARTIALLY_COMPLETED: 'PARTIALLY_COMPLETED',
  FAILED: 'FAILED'
};

export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus]


export const LinkCategory: {
  POLICY: 'POLICY',
  PMAY: 'PMAY'
};

export type LinkCategory = (typeof LinkCategory)[keyof typeof LinkCategory]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ImportStatus = $Enums.ImportStatus

export const ImportStatus: typeof $Enums.ImportStatus

export type LinkCategory = $Enums.LinkCategory

export const LinkCategory: typeof $Enums.LinkCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.importBatch`: Exposes CRUD operations for the **ImportBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportBatches
    * const importBatches = await prisma.importBatch.findMany()
    * ```
    */
  get importBatch(): Prisma.ImportBatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resourceLink`: Exposes CRUD operations for the **ResourceLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceLinks
    * const resourceLinks = await prisma.resourceLink.findMany()
    * ```
    */
  get resourceLink(): Prisma.ResourceLinkDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Template: 'Template',
    ImportBatch: 'ImportBatch',
    TeamMember: 'TeamMember',
    ResourceLink: 'ResourceLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "template" | "importBatch" | "teamMember" | "resourceLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      ImportBatch: {
        payload: Prisma.$ImportBatchPayload<ExtArgs>
        fields: Prisma.ImportBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportBatchPayload>
          }
          findFirst: {
            args: Prisma.ImportBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportBatchPayload>
          }
          findMany: {
            args: Prisma.ImportBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportBatchPayload>[]
          }
          create: {
            args: Prisma.ImportBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportBatchPayload>
          }
          createMany: {
            args: Prisma.ImportBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImportBatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportBatchPayload>[]
          }
          delete: {
            args: Prisma.ImportBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportBatchPayload>
          }
          update: {
            args: Prisma.ImportBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportBatchPayload>
          }
          deleteMany: {
            args: Prisma.ImportBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImportBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImportBatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportBatchPayload>[]
          }
          upsert: {
            args: Prisma.ImportBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportBatchPayload>
          }
          aggregate: {
            args: Prisma.ImportBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImportBatch>
          }
          groupBy: {
            args: Prisma.ImportBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportBatchCountArgs<ExtArgs>
            result: $Utils.Optional<ImportBatchCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      ResourceLink: {
        payload: Prisma.$ResourceLinkPayload<ExtArgs>
        fields: Prisma.ResourceLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          findFirst: {
            args: Prisma.ResourceLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          findMany: {
            args: Prisma.ResourceLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>[]
          }
          create: {
            args: Prisma.ResourceLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          createMany: {
            args: Prisma.ResourceLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>[]
          }
          delete: {
            args: Prisma.ResourceLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          update: {
            args: Prisma.ResourceLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          deleteMany: {
            args: Prisma.ResourceLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>[]
          }
          upsert: {
            args: Prisma.ResourceLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceLinkPayload>
          }
          aggregate: {
            args: Prisma.ResourceLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResourceLink>
          }
          groupBy: {
            args: Prisma.ResourceLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceLinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    template?: TemplateOmit
    importBatch?: ImportBatchOmit
    teamMember?: TeamMemberOmit
    resourceLink?: ResourceLinkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdTemplates: number
    updatedTemplates: number
    importBatches: number
    createdTeamMembers: number
    createdResourceLinks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdTemplates?: boolean | UserCountOutputTypeCountCreatedTemplatesArgs
    updatedTemplates?: boolean | UserCountOutputTypeCountUpdatedTemplatesArgs
    importBatches?: boolean | UserCountOutputTypeCountImportBatchesArgs
    createdTeamMembers?: boolean | UserCountOutputTypeCountCreatedTeamMembersArgs
    createdResourceLinks?: boolean | UserCountOutputTypeCountCreatedResourceLinksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImportBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportBatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedResourceLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceLinkWhereInput
  }


  /**
   * Count Type ImportBatchCountOutputType
   */

  export type ImportBatchCountOutputType = {
    templates: number
  }

  export type ImportBatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | ImportBatchCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * ImportBatchCountOutputType without action
   */
  export type ImportBatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatchCountOutputType
     */
    select?: ImportBatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImportBatchCountOutputType without action
   */
  export type ImportBatchCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    employeeId: number
    name: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdTemplates?: boolean | User$createdTemplatesArgs<ExtArgs>
    updatedTemplates?: boolean | User$updatedTemplatesArgs<ExtArgs>
    importBatches?: boolean | User$importBatchesArgs<ExtArgs>
    createdTeamMembers?: boolean | User$createdTeamMembersArgs<ExtArgs>
    createdResourceLinks?: boolean | User$createdResourceLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    employeeId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "name" | "email" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdTemplates?: boolean | User$createdTemplatesArgs<ExtArgs>
    updatedTemplates?: boolean | User$updatedTemplatesArgs<ExtArgs>
    importBatches?: boolean | User$importBatchesArgs<ExtArgs>
    createdTeamMembers?: boolean | User$createdTeamMembersArgs<ExtArgs>
    createdResourceLinks?: boolean | User$createdResourceLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdTemplates: Prisma.$TemplatePayload<ExtArgs>[]
      updatedTemplates: Prisma.$TemplatePayload<ExtArgs>[]
      importBatches: Prisma.$ImportBatchPayload<ExtArgs>[]
      createdTeamMembers: Prisma.$TeamMemberPayload<ExtArgs>[]
      createdResourceLinks: Prisma.$ResourceLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdTemplates<T extends User$createdTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedTemplates<T extends User$updatedTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    importBatches<T extends User$importBatchesArgs<ExtArgs> = {}>(args?: Subset<T, User$importBatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTeamMembers<T extends User$createdTeamMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTeamMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdResourceLinks<T extends User$createdResourceLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$createdResourceLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly employeeId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdTemplates
   */
  export type User$createdTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * User.updatedTemplates
   */
  export type User$updatedTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * User.importBatches
   */
  export type User$importBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
    where?: ImportBatchWhereInput
    orderBy?: ImportBatchOrderByWithRelationInput | ImportBatchOrderByWithRelationInput[]
    cursor?: ImportBatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImportBatchScalarFieldEnum | ImportBatchScalarFieldEnum[]
  }

  /**
   * User.createdTeamMembers
   */
  export type User$createdTeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * User.createdResourceLinks
   */
  export type User$createdResourceLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    where?: ResourceLinkWhereInput
    orderBy?: ResourceLinkOrderByWithRelationInput | ResourceLinkOrderByWithRelationInput[]
    cursor?: ResourceLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceLinkScalarFieldEnum | ResourceLinkScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    dltTemplateId: string | null
    name: string | null
    dueDate: string | null
    content: string | null
    ownerName: string | null
    remarks: string | null
    attachmentLink1: string | null
    attachmentLink2: string | null
    isActive: boolean | null
    createdById: string | null
    updatedById: string | null
    importBatchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    dltTemplateId: string | null
    name: string | null
    dueDate: string | null
    content: string | null
    ownerName: string | null
    remarks: string | null
    attachmentLink1: string | null
    attachmentLink2: string | null
    isActive: boolean | null
    createdById: string | null
    updatedById: string | null
    importBatchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    dltTemplateId: number
    name: number
    dueDate: number
    content: number
    ownerName: number
    remarks: number
    attachmentLink1: number
    attachmentLink2: number
    isActive: number
    createdById: number
    updatedById: number
    importBatchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    dltTemplateId?: true
    name?: true
    dueDate?: true
    content?: true
    ownerName?: true
    remarks?: true
    attachmentLink1?: true
    attachmentLink2?: true
    isActive?: true
    createdById?: true
    updatedById?: true
    importBatchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    dltTemplateId?: true
    name?: true
    dueDate?: true
    content?: true
    ownerName?: true
    remarks?: true
    attachmentLink1?: true
    attachmentLink2?: true
    isActive?: true
    createdById?: true
    updatedById?: true
    importBatchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    dltTemplateId?: true
    name?: true
    dueDate?: true
    content?: true
    ownerName?: true
    remarks?: true
    attachmentLink1?: true
    attachmentLink2?: true
    isActive?: true
    createdById?: true
    updatedById?: true
    importBatchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks: string | null
    attachmentLink1: string | null
    attachmentLink2: string | null
    isActive: boolean
    createdById: string | null
    updatedById: string | null
    importBatchId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dltTemplateId?: boolean
    name?: boolean
    dueDate?: boolean
    content?: boolean
    ownerName?: boolean
    remarks?: boolean
    attachmentLink1?: boolean
    attachmentLink2?: boolean
    isActive?: boolean
    createdById?: boolean
    updatedById?: boolean
    importBatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
    updatedBy?: boolean | Template$updatedByArgs<ExtArgs>
    importBatch?: boolean | Template$importBatchArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dltTemplateId?: boolean
    name?: boolean
    dueDate?: boolean
    content?: boolean
    ownerName?: boolean
    remarks?: boolean
    attachmentLink1?: boolean
    attachmentLink2?: boolean
    isActive?: boolean
    createdById?: boolean
    updatedById?: boolean
    importBatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
    updatedBy?: boolean | Template$updatedByArgs<ExtArgs>
    importBatch?: boolean | Template$importBatchArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dltTemplateId?: boolean
    name?: boolean
    dueDate?: boolean
    content?: boolean
    ownerName?: boolean
    remarks?: boolean
    attachmentLink1?: boolean
    attachmentLink2?: boolean
    isActive?: boolean
    createdById?: boolean
    updatedById?: boolean
    importBatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
    updatedBy?: boolean | Template$updatedByArgs<ExtArgs>
    importBatch?: boolean | Template$importBatchArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    dltTemplateId?: boolean
    name?: boolean
    dueDate?: boolean
    content?: boolean
    ownerName?: boolean
    remarks?: boolean
    attachmentLink1?: boolean
    attachmentLink2?: boolean
    isActive?: boolean
    createdById?: boolean
    updatedById?: boolean
    importBatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dltTemplateId" | "name" | "dueDate" | "content" | "ownerName" | "remarks" | "attachmentLink1" | "attachmentLink2" | "isActive" | "createdById" | "updatedById" | "importBatchId" | "createdAt" | "updatedAt", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
    updatedBy?: boolean | Template$updatedByArgs<ExtArgs>
    importBatch?: boolean | Template$importBatchArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
    updatedBy?: boolean | Template$updatedByArgs<ExtArgs>
    importBatch?: boolean | Template$importBatchArgs<ExtArgs>
  }
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
    updatedBy?: boolean | Template$updatedByArgs<ExtArgs>
    importBatch?: boolean | Template$importBatchArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      updatedBy: Prisma.$UserPayload<ExtArgs> | null
      importBatch: Prisma.$ImportBatchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dltTemplateId: string
      name: string
      dueDate: string
      content: string
      ownerName: string
      remarks: string | null
      attachmentLink1: string | null
      attachmentLink2: string | null
      isActive: boolean
      createdById: string | null
      updatedById: string | null
      importBatchId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Template$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Template$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends Template$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, Template$updatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    importBatch<T extends Template$importBatchArgs<ExtArgs> = {}>(args?: Subset<T, Template$importBatchArgs<ExtArgs>>): Prisma__ImportBatchClient<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly dltTemplateId: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly dueDate: FieldRef<"Template", 'String'>
    readonly content: FieldRef<"Template", 'String'>
    readonly ownerName: FieldRef<"Template", 'String'>
    readonly remarks: FieldRef<"Template", 'String'>
    readonly attachmentLink1: FieldRef<"Template", 'String'>
    readonly attachmentLink2: FieldRef<"Template", 'String'>
    readonly isActive: FieldRef<"Template", 'Boolean'>
    readonly createdById: FieldRef<"Template", 'String'>
    readonly updatedById: FieldRef<"Template", 'String'>
    readonly importBatchId: FieldRef<"Template", 'String'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.createdBy
   */
  export type Template$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Template.updatedBy
   */
  export type Template$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Template.importBatch
   */
  export type Template$importBatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
    where?: ImportBatchWhereInput
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model ImportBatch
   */

  export type AggregateImportBatch = {
    _count: ImportBatchCountAggregateOutputType | null
    _avg: ImportBatchAvgAggregateOutputType | null
    _sum: ImportBatchSumAggregateOutputType | null
    _min: ImportBatchMinAggregateOutputType | null
    _max: ImportBatchMaxAggregateOutputType | null
  }

  export type ImportBatchAvgAggregateOutputType = {
    totalRecords: number | null
    successfulCount: number | null
    skippedCount: number | null
    failedCount: number | null
  }

  export type ImportBatchSumAggregateOutputType = {
    totalRecords: number | null
    successfulCount: number | null
    skippedCount: number | null
    failedCount: number | null
  }

  export type ImportBatchMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileType: string | null
    status: $Enums.ImportStatus | null
    totalRecords: number | null
    successfulCount: number | null
    skippedCount: number | null
    failedCount: number | null
    importedById: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type ImportBatchMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileType: string | null
    status: $Enums.ImportStatus | null
    totalRecords: number | null
    successfulCount: number | null
    skippedCount: number | null
    failedCount: number | null
    importedById: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type ImportBatchCountAggregateOutputType = {
    id: number
    fileName: number
    fileType: number
    status: number
    totalRecords: number
    successfulCount: number
    skippedCount: number
    failedCount: number
    errorReport: number
    importedById: number
    startedAt: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type ImportBatchAvgAggregateInputType = {
    totalRecords?: true
    successfulCount?: true
    skippedCount?: true
    failedCount?: true
  }

  export type ImportBatchSumAggregateInputType = {
    totalRecords?: true
    successfulCount?: true
    skippedCount?: true
    failedCount?: true
  }

  export type ImportBatchMinAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    status?: true
    totalRecords?: true
    successfulCount?: true
    skippedCount?: true
    failedCount?: true
    importedById?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type ImportBatchMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    status?: true
    totalRecords?: true
    successfulCount?: true
    skippedCount?: true
    failedCount?: true
    importedById?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type ImportBatchCountAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    status?: true
    totalRecords?: true
    successfulCount?: true
    skippedCount?: true
    failedCount?: true
    errorReport?: true
    importedById?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ImportBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportBatch to aggregate.
     */
    where?: ImportBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportBatches to fetch.
     */
    orderBy?: ImportBatchOrderByWithRelationInput | ImportBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportBatches
    **/
    _count?: true | ImportBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImportBatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImportBatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportBatchMaxAggregateInputType
  }

  export type GetImportBatchAggregateType<T extends ImportBatchAggregateArgs> = {
        [P in keyof T & keyof AggregateImportBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportBatch[P]>
      : GetScalarType<T[P], AggregateImportBatch[P]>
  }




  export type ImportBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportBatchWhereInput
    orderBy?: ImportBatchOrderByWithAggregationInput | ImportBatchOrderByWithAggregationInput[]
    by: ImportBatchScalarFieldEnum[] | ImportBatchScalarFieldEnum
    having?: ImportBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportBatchCountAggregateInputType | true
    _avg?: ImportBatchAvgAggregateInputType
    _sum?: ImportBatchSumAggregateInputType
    _min?: ImportBatchMinAggregateInputType
    _max?: ImportBatchMaxAggregateInputType
  }

  export type ImportBatchGroupByOutputType = {
    id: string
    fileName: string
    fileType: string
    status: $Enums.ImportStatus
    totalRecords: number
    successfulCount: number
    skippedCount: number
    failedCount: number
    errorReport: JsonValue | null
    importedById: string
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    _count: ImportBatchCountAggregateOutputType | null
    _avg: ImportBatchAvgAggregateOutputType | null
    _sum: ImportBatchSumAggregateOutputType | null
    _min: ImportBatchMinAggregateOutputType | null
    _max: ImportBatchMaxAggregateOutputType | null
  }

  type GetImportBatchGroupByPayload<T extends ImportBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportBatchGroupByOutputType[P]>
            : GetScalarType<T[P], ImportBatchGroupByOutputType[P]>
        }
      >
    >


  export type ImportBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    status?: boolean
    totalRecords?: boolean
    successfulCount?: boolean
    skippedCount?: boolean
    failedCount?: boolean
    errorReport?: boolean
    importedById?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    importedBy?: boolean | UserDefaultArgs<ExtArgs>
    templates?: boolean | ImportBatch$templatesArgs<ExtArgs>
    _count?: boolean | ImportBatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importBatch"]>

  export type ImportBatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    status?: boolean
    totalRecords?: boolean
    successfulCount?: boolean
    skippedCount?: boolean
    failedCount?: boolean
    errorReport?: boolean
    importedById?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    importedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importBatch"]>

  export type ImportBatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    status?: boolean
    totalRecords?: boolean
    successfulCount?: boolean
    skippedCount?: boolean
    failedCount?: boolean
    errorReport?: boolean
    importedById?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    importedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importBatch"]>

  export type ImportBatchSelectScalar = {
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    status?: boolean
    totalRecords?: boolean
    successfulCount?: boolean
    skippedCount?: boolean
    failedCount?: boolean
    errorReport?: boolean
    importedById?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type ImportBatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "fileType" | "status" | "totalRecords" | "successfulCount" | "skippedCount" | "failedCount" | "errorReport" | "importedById" | "startedAt" | "completedAt" | "createdAt", ExtArgs["result"]["importBatch"]>
  export type ImportBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importedBy?: boolean | UserDefaultArgs<ExtArgs>
    templates?: boolean | ImportBatch$templatesArgs<ExtArgs>
    _count?: boolean | ImportBatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImportBatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImportBatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ImportBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportBatch"
    objects: {
      importedBy: Prisma.$UserPayload<ExtArgs>
      templates: Prisma.$TemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      fileType: string
      status: $Enums.ImportStatus
      totalRecords: number
      successfulCount: number
      skippedCount: number
      failedCount: number
      errorReport: Prisma.JsonValue | null
      importedById: string
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["importBatch"]>
    composites: {}
  }

  type ImportBatchGetPayload<S extends boolean | null | undefined | ImportBatchDefaultArgs> = $Result.GetResult<Prisma.$ImportBatchPayload, S>

  type ImportBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImportBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportBatchCountAggregateInputType | true
    }

  export interface ImportBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportBatch'], meta: { name: 'ImportBatch' } }
    /**
     * Find zero or one ImportBatch that matches the filter.
     * @param {ImportBatchFindUniqueArgs} args - Arguments to find a ImportBatch
     * @example
     * // Get one ImportBatch
     * const importBatch = await prisma.importBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImportBatchFindUniqueArgs>(args: SelectSubset<T, ImportBatchFindUniqueArgs<ExtArgs>>): Prisma__ImportBatchClient<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImportBatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImportBatchFindUniqueOrThrowArgs} args - Arguments to find a ImportBatch
     * @example
     * // Get one ImportBatch
     * const importBatch = await prisma.importBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImportBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, ImportBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImportBatchClient<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportBatchFindFirstArgs} args - Arguments to find a ImportBatch
     * @example
     * // Get one ImportBatch
     * const importBatch = await prisma.importBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImportBatchFindFirstArgs>(args?: SelectSubset<T, ImportBatchFindFirstArgs<ExtArgs>>): Prisma__ImportBatchClient<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportBatchFindFirstOrThrowArgs} args - Arguments to find a ImportBatch
     * @example
     * // Get one ImportBatch
     * const importBatch = await prisma.importBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImportBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, ImportBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImportBatchClient<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImportBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportBatches
     * const importBatches = await prisma.importBatch.findMany()
     * 
     * // Get first 10 ImportBatches
     * const importBatches = await prisma.importBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importBatchWithIdOnly = await prisma.importBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImportBatchFindManyArgs>(args?: SelectSubset<T, ImportBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImportBatch.
     * @param {ImportBatchCreateArgs} args - Arguments to create a ImportBatch.
     * @example
     * // Create one ImportBatch
     * const ImportBatch = await prisma.importBatch.create({
     *   data: {
     *     // ... data to create a ImportBatch
     *   }
     * })
     * 
     */
    create<T extends ImportBatchCreateArgs>(args: SelectSubset<T, ImportBatchCreateArgs<ExtArgs>>): Prisma__ImportBatchClient<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImportBatches.
     * @param {ImportBatchCreateManyArgs} args - Arguments to create many ImportBatches.
     * @example
     * // Create many ImportBatches
     * const importBatch = await prisma.importBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImportBatchCreateManyArgs>(args?: SelectSubset<T, ImportBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImportBatches and returns the data saved in the database.
     * @param {ImportBatchCreateManyAndReturnArgs} args - Arguments to create many ImportBatches.
     * @example
     * // Create many ImportBatches
     * const importBatch = await prisma.importBatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImportBatches and only return the `id`
     * const importBatchWithIdOnly = await prisma.importBatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImportBatchCreateManyAndReturnArgs>(args?: SelectSubset<T, ImportBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImportBatch.
     * @param {ImportBatchDeleteArgs} args - Arguments to delete one ImportBatch.
     * @example
     * // Delete one ImportBatch
     * const ImportBatch = await prisma.importBatch.delete({
     *   where: {
     *     // ... filter to delete one ImportBatch
     *   }
     * })
     * 
     */
    delete<T extends ImportBatchDeleteArgs>(args: SelectSubset<T, ImportBatchDeleteArgs<ExtArgs>>): Prisma__ImportBatchClient<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImportBatch.
     * @param {ImportBatchUpdateArgs} args - Arguments to update one ImportBatch.
     * @example
     * // Update one ImportBatch
     * const importBatch = await prisma.importBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImportBatchUpdateArgs>(args: SelectSubset<T, ImportBatchUpdateArgs<ExtArgs>>): Prisma__ImportBatchClient<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImportBatches.
     * @param {ImportBatchDeleteManyArgs} args - Arguments to filter ImportBatches to delete.
     * @example
     * // Delete a few ImportBatches
     * const { count } = await prisma.importBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImportBatchDeleteManyArgs>(args?: SelectSubset<T, ImportBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportBatches
     * const importBatch = await prisma.importBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImportBatchUpdateManyArgs>(args: SelectSubset<T, ImportBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportBatches and returns the data updated in the database.
     * @param {ImportBatchUpdateManyAndReturnArgs} args - Arguments to update many ImportBatches.
     * @example
     * // Update many ImportBatches
     * const importBatch = await prisma.importBatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImportBatches and only return the `id`
     * const importBatchWithIdOnly = await prisma.importBatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImportBatchUpdateManyAndReturnArgs>(args: SelectSubset<T, ImportBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImportBatch.
     * @param {ImportBatchUpsertArgs} args - Arguments to update or create a ImportBatch.
     * @example
     * // Update or create a ImportBatch
     * const importBatch = await prisma.importBatch.upsert({
     *   create: {
     *     // ... data to create a ImportBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportBatch we want to update
     *   }
     * })
     */
    upsert<T extends ImportBatchUpsertArgs>(args: SelectSubset<T, ImportBatchUpsertArgs<ExtArgs>>): Prisma__ImportBatchClient<$Result.GetResult<Prisma.$ImportBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImportBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportBatchCountArgs} args - Arguments to filter ImportBatches to count.
     * @example
     * // Count the number of ImportBatches
     * const count = await prisma.importBatch.count({
     *   where: {
     *     // ... the filter for the ImportBatches we want to count
     *   }
     * })
    **/
    count<T extends ImportBatchCountArgs>(
      args?: Subset<T, ImportBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImportBatchAggregateArgs>(args: Subset<T, ImportBatchAggregateArgs>): Prisma.PrismaPromise<GetImportBatchAggregateType<T>>

    /**
     * Group by ImportBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportBatchGroupByArgs} args - Group by arguments.
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
      T extends ImportBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportBatchGroupByArgs['orderBy'] }
        : { orderBy?: ImportBatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImportBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportBatch model
   */
  readonly fields: ImportBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    importedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    templates<T extends ImportBatch$templatesArgs<ExtArgs> = {}>(args?: Subset<T, ImportBatch$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImportBatch model
   */
  interface ImportBatchFieldRefs {
    readonly id: FieldRef<"ImportBatch", 'String'>
    readonly fileName: FieldRef<"ImportBatch", 'String'>
    readonly fileType: FieldRef<"ImportBatch", 'String'>
    readonly status: FieldRef<"ImportBatch", 'ImportStatus'>
    readonly totalRecords: FieldRef<"ImportBatch", 'Int'>
    readonly successfulCount: FieldRef<"ImportBatch", 'Int'>
    readonly skippedCount: FieldRef<"ImportBatch", 'Int'>
    readonly failedCount: FieldRef<"ImportBatch", 'Int'>
    readonly errorReport: FieldRef<"ImportBatch", 'Json'>
    readonly importedById: FieldRef<"ImportBatch", 'String'>
    readonly startedAt: FieldRef<"ImportBatch", 'DateTime'>
    readonly completedAt: FieldRef<"ImportBatch", 'DateTime'>
    readonly createdAt: FieldRef<"ImportBatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImportBatch findUnique
   */
  export type ImportBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
    /**
     * Filter, which ImportBatch to fetch.
     */
    where: ImportBatchWhereUniqueInput
  }

  /**
   * ImportBatch findUniqueOrThrow
   */
  export type ImportBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
    /**
     * Filter, which ImportBatch to fetch.
     */
    where: ImportBatchWhereUniqueInput
  }

  /**
   * ImportBatch findFirst
   */
  export type ImportBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
    /**
     * Filter, which ImportBatch to fetch.
     */
    where?: ImportBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportBatches to fetch.
     */
    orderBy?: ImportBatchOrderByWithRelationInput | ImportBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportBatches.
     */
    cursor?: ImportBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportBatches.
     */
    distinct?: ImportBatchScalarFieldEnum | ImportBatchScalarFieldEnum[]
  }

  /**
   * ImportBatch findFirstOrThrow
   */
  export type ImportBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
    /**
     * Filter, which ImportBatch to fetch.
     */
    where?: ImportBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportBatches to fetch.
     */
    orderBy?: ImportBatchOrderByWithRelationInput | ImportBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportBatches.
     */
    cursor?: ImportBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportBatches.
     */
    distinct?: ImportBatchScalarFieldEnum | ImportBatchScalarFieldEnum[]
  }

  /**
   * ImportBatch findMany
   */
  export type ImportBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
    /**
     * Filter, which ImportBatches to fetch.
     */
    where?: ImportBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportBatches to fetch.
     */
    orderBy?: ImportBatchOrderByWithRelationInput | ImportBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportBatches.
     */
    cursor?: ImportBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportBatches.
     */
    distinct?: ImportBatchScalarFieldEnum | ImportBatchScalarFieldEnum[]
  }

  /**
   * ImportBatch create
   */
  export type ImportBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a ImportBatch.
     */
    data: XOR<ImportBatchCreateInput, ImportBatchUncheckedCreateInput>
  }

  /**
   * ImportBatch createMany
   */
  export type ImportBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportBatches.
     */
    data: ImportBatchCreateManyInput | ImportBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportBatch createManyAndReturn
   */
  export type ImportBatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * The data used to create many ImportBatches.
     */
    data: ImportBatchCreateManyInput | ImportBatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportBatch update
   */
  export type ImportBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a ImportBatch.
     */
    data: XOR<ImportBatchUpdateInput, ImportBatchUncheckedUpdateInput>
    /**
     * Choose, which ImportBatch to update.
     */
    where: ImportBatchWhereUniqueInput
  }

  /**
   * ImportBatch updateMany
   */
  export type ImportBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportBatches.
     */
    data: XOR<ImportBatchUpdateManyMutationInput, ImportBatchUncheckedUpdateManyInput>
    /**
     * Filter which ImportBatches to update
     */
    where?: ImportBatchWhereInput
    /**
     * Limit how many ImportBatches to update.
     */
    limit?: number
  }

  /**
   * ImportBatch updateManyAndReturn
   */
  export type ImportBatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * The data used to update ImportBatches.
     */
    data: XOR<ImportBatchUpdateManyMutationInput, ImportBatchUncheckedUpdateManyInput>
    /**
     * Filter which ImportBatches to update
     */
    where?: ImportBatchWhereInput
    /**
     * Limit how many ImportBatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportBatch upsert
   */
  export type ImportBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the ImportBatch to update in case it exists.
     */
    where: ImportBatchWhereUniqueInput
    /**
     * In case the ImportBatch found by the `where` argument doesn't exist, create a new ImportBatch with this data.
     */
    create: XOR<ImportBatchCreateInput, ImportBatchUncheckedCreateInput>
    /**
     * In case the ImportBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportBatchUpdateInput, ImportBatchUncheckedUpdateInput>
  }

  /**
   * ImportBatch delete
   */
  export type ImportBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
    /**
     * Filter which ImportBatch to delete.
     */
    where: ImportBatchWhereUniqueInput
  }

  /**
   * ImportBatch deleteMany
   */
  export type ImportBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportBatches to delete
     */
    where?: ImportBatchWhereInput
    /**
     * Limit how many ImportBatches to delete.
     */
    limit?: number
  }

  /**
   * ImportBatch.templates
   */
  export type ImportBatch$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * ImportBatch without action
   */
  export type ImportBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportBatch
     */
    select?: ImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportBatch
     */
    omit?: ImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportBatchInclude<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberAvgAggregateOutputType = {
    order: number | null
  }

  export type TeamMemberSumAggregateOutputType = {
    order: number | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: string | null
    name: string | null
    designation: string | null
    photoUrl: string | null
    bio: string | null
    email: string | null
    phone: string | null
    department: string | null
    order: number | null
    isActive: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: string | null
    name: string | null
    designation: string | null
    photoUrl: string | null
    bio: string | null
    email: string | null
    phone: string | null
    department: string | null
    order: number | null
    isActive: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    name: number
    designation: number
    photoUrl: number
    bio: number
    email: number
    phone: number
    department: number
    order: number
    isActive: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMemberAvgAggregateInputType = {
    order?: true
  }

  export type TeamMemberSumAggregateInputType = {
    order?: true
  }

  export type TeamMemberMinAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    photoUrl?: true
    bio?: true
    email?: true
    phone?: true
    department?: true
    order?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    photoUrl?: true
    bio?: true
    email?: true
    phone?: true
    department?: true
    order?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    photoUrl?: true
    bio?: true
    email?: true
    phone?: true
    department?: true
    order?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _avg?: TeamMemberAvgAggregateInputType
    _sum?: TeamMemberSumAggregateInputType
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: string
    name: string
    designation: string
    photoUrl: string
    bio: string | null
    email: string | null
    phone: string | null
    department: string | null
    order: number
    isActive: boolean
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    designation?: boolean
    photoUrl?: boolean
    bio?: boolean
    email?: boolean
    phone?: boolean
    department?: boolean
    order?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | TeamMember$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    designation?: boolean
    photoUrl?: boolean
    bio?: boolean
    email?: boolean
    phone?: boolean
    department?: boolean
    order?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | TeamMember$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    designation?: boolean
    photoUrl?: boolean
    bio?: boolean
    email?: boolean
    phone?: boolean
    department?: boolean
    order?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | TeamMember$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    name?: boolean
    designation?: boolean
    photoUrl?: boolean
    bio?: boolean
    email?: boolean
    phone?: boolean
    department?: boolean
    order?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "designation" | "photoUrl" | "bio" | "email" | "phone" | "department" | "order" | "isActive" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["teamMember"]>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | TeamMember$createdByArgs<ExtArgs>
  }
  export type TeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | TeamMember$createdByArgs<ExtArgs>
  }
  export type TeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | TeamMember$createdByArgs<ExtArgs>
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      designation: string
      photoUrl: string
      bio: string | null
      email: string | null
      phone: string | null
      department: string | null
      order: number
      isActive: boolean
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
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
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends TeamMember$createdByArgs<ExtArgs> = {}>(args?: Subset<T, TeamMember$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'String'>
    readonly name: FieldRef<"TeamMember", 'String'>
    readonly designation: FieldRef<"TeamMember", 'String'>
    readonly photoUrl: FieldRef<"TeamMember", 'String'>
    readonly bio: FieldRef<"TeamMember", 'String'>
    readonly email: FieldRef<"TeamMember", 'String'>
    readonly phone: FieldRef<"TeamMember", 'String'>
    readonly department: FieldRef<"TeamMember", 'String'>
    readonly order: FieldRef<"TeamMember", 'Int'>
    readonly isActive: FieldRef<"TeamMember", 'Boolean'>
    readonly createdById: FieldRef<"TeamMember", 'String'>
    readonly createdAt: FieldRef<"TeamMember", 'DateTime'>
    readonly updatedAt: FieldRef<"TeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMember.createdBy
   */
  export type TeamMember$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model ResourceLink
   */

  export type AggregateResourceLink = {
    _count: ResourceLinkCountAggregateOutputType | null
    _avg: ResourceLinkAvgAggregateOutputType | null
    _sum: ResourceLinkSumAggregateOutputType | null
    _min: ResourceLinkMinAggregateOutputType | null
    _max: ResourceLinkMaxAggregateOutputType | null
  }

  export type ResourceLinkAvgAggregateOutputType = {
    order: number | null
  }

  export type ResourceLinkSumAggregateOutputType = {
    order: number | null
  }

  export type ResourceLinkMinAggregateOutputType = {
    id: string | null
    category: $Enums.LinkCategory | null
    title: string | null
    url: string | null
    description: string | null
    order: number | null
    isActive: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResourceLinkMaxAggregateOutputType = {
    id: string | null
    category: $Enums.LinkCategory | null
    title: string | null
    url: string | null
    description: string | null
    order: number | null
    isActive: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResourceLinkCountAggregateOutputType = {
    id: number
    category: number
    title: number
    url: number
    description: number
    order: number
    isActive: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResourceLinkAvgAggregateInputType = {
    order?: true
  }

  export type ResourceLinkSumAggregateInputType = {
    order?: true
  }

  export type ResourceLinkMinAggregateInputType = {
    id?: true
    category?: true
    title?: true
    url?: true
    description?: true
    order?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResourceLinkMaxAggregateInputType = {
    id?: true
    category?: true
    title?: true
    url?: true
    description?: true
    order?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResourceLinkCountAggregateInputType = {
    id?: true
    category?: true
    title?: true
    url?: true
    description?: true
    order?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResourceLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceLink to aggregate.
     */
    where?: ResourceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLinks to fetch.
     */
    orderBy?: ResourceLinkOrderByWithRelationInput | ResourceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceLinks
    **/
    _count?: true | ResourceLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceLinkMaxAggregateInputType
  }

  export type GetResourceLinkAggregateType<T extends ResourceLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceLink[P]>
      : GetScalarType<T[P], AggregateResourceLink[P]>
  }




  export type ResourceLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceLinkWhereInput
    orderBy?: ResourceLinkOrderByWithAggregationInput | ResourceLinkOrderByWithAggregationInput[]
    by: ResourceLinkScalarFieldEnum[] | ResourceLinkScalarFieldEnum
    having?: ResourceLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceLinkCountAggregateInputType | true
    _avg?: ResourceLinkAvgAggregateInputType
    _sum?: ResourceLinkSumAggregateInputType
    _min?: ResourceLinkMinAggregateInputType
    _max?: ResourceLinkMaxAggregateInputType
  }

  export type ResourceLinkGroupByOutputType = {
    id: string
    category: $Enums.LinkCategory
    title: string
    url: string
    description: string | null
    order: number
    isActive: boolean
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: ResourceLinkCountAggregateOutputType | null
    _avg: ResourceLinkAvgAggregateOutputType | null
    _sum: ResourceLinkSumAggregateOutputType | null
    _min: ResourceLinkMinAggregateOutputType | null
    _max: ResourceLinkMaxAggregateOutputType | null
  }

  type GetResourceLinkGroupByPayload<T extends ResourceLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceLinkGroupByOutputType[P]>
        }
      >
    >


  export type ResourceLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    title?: boolean
    url?: boolean
    description?: boolean
    order?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | ResourceLink$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["resourceLink"]>

  export type ResourceLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    title?: boolean
    url?: boolean
    description?: boolean
    order?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | ResourceLink$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["resourceLink"]>

  export type ResourceLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    title?: boolean
    url?: boolean
    description?: boolean
    order?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | ResourceLink$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["resourceLink"]>

  export type ResourceLinkSelectScalar = {
    id?: boolean
    category?: boolean
    title?: boolean
    url?: boolean
    description?: boolean
    order?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResourceLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "title" | "url" | "description" | "order" | "isActive" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["resourceLink"]>
  export type ResourceLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | ResourceLink$createdByArgs<ExtArgs>
  }
  export type ResourceLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | ResourceLink$createdByArgs<ExtArgs>
  }
  export type ResourceLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | ResourceLink$createdByArgs<ExtArgs>
  }

  export type $ResourceLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceLink"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: $Enums.LinkCategory
      title: string
      url: string
      description: string | null
      order: number
      isActive: boolean
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resourceLink"]>
    composites: {}
  }

  type ResourceLinkGetPayload<S extends boolean | null | undefined | ResourceLinkDefaultArgs> = $Result.GetResult<Prisma.$ResourceLinkPayload, S>

  type ResourceLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceLinkCountAggregateInputType | true
    }

  export interface ResourceLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceLink'], meta: { name: 'ResourceLink' } }
    /**
     * Find zero or one ResourceLink that matches the filter.
     * @param {ResourceLinkFindUniqueArgs} args - Arguments to find a ResourceLink
     * @example
     * // Get one ResourceLink
     * const resourceLink = await prisma.resourceLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceLinkFindUniqueArgs>(args: SelectSubset<T, ResourceLinkFindUniqueArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResourceLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceLinkFindUniqueOrThrowArgs} args - Arguments to find a ResourceLink
     * @example
     * // Get one ResourceLink
     * const resourceLink = await prisma.resourceLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResourceLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkFindFirstArgs} args - Arguments to find a ResourceLink
     * @example
     * // Get one ResourceLink
     * const resourceLink = await prisma.resourceLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceLinkFindFirstArgs>(args?: SelectSubset<T, ResourceLinkFindFirstArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResourceLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkFindFirstOrThrowArgs} args - Arguments to find a ResourceLink
     * @example
     * // Get one ResourceLink
     * const resourceLink = await prisma.resourceLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResourceLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceLinks
     * const resourceLinks = await prisma.resourceLink.findMany()
     * 
     * // Get first 10 ResourceLinks
     * const resourceLinks = await prisma.resourceLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceLinkWithIdOnly = await prisma.resourceLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceLinkFindManyArgs>(args?: SelectSubset<T, ResourceLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResourceLink.
     * @param {ResourceLinkCreateArgs} args - Arguments to create a ResourceLink.
     * @example
     * // Create one ResourceLink
     * const ResourceLink = await prisma.resourceLink.create({
     *   data: {
     *     // ... data to create a ResourceLink
     *   }
     * })
     * 
     */
    create<T extends ResourceLinkCreateArgs>(args: SelectSubset<T, ResourceLinkCreateArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResourceLinks.
     * @param {ResourceLinkCreateManyArgs} args - Arguments to create many ResourceLinks.
     * @example
     * // Create many ResourceLinks
     * const resourceLink = await prisma.resourceLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceLinkCreateManyArgs>(args?: SelectSubset<T, ResourceLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResourceLinks and returns the data saved in the database.
     * @param {ResourceLinkCreateManyAndReturnArgs} args - Arguments to create many ResourceLinks.
     * @example
     * // Create many ResourceLinks
     * const resourceLink = await prisma.resourceLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResourceLinks and only return the `id`
     * const resourceLinkWithIdOnly = await prisma.resourceLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResourceLink.
     * @param {ResourceLinkDeleteArgs} args - Arguments to delete one ResourceLink.
     * @example
     * // Delete one ResourceLink
     * const ResourceLink = await prisma.resourceLink.delete({
     *   where: {
     *     // ... filter to delete one ResourceLink
     *   }
     * })
     * 
     */
    delete<T extends ResourceLinkDeleteArgs>(args: SelectSubset<T, ResourceLinkDeleteArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResourceLink.
     * @param {ResourceLinkUpdateArgs} args - Arguments to update one ResourceLink.
     * @example
     * // Update one ResourceLink
     * const resourceLink = await prisma.resourceLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceLinkUpdateArgs>(args: SelectSubset<T, ResourceLinkUpdateArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResourceLinks.
     * @param {ResourceLinkDeleteManyArgs} args - Arguments to filter ResourceLinks to delete.
     * @example
     * // Delete a few ResourceLinks
     * const { count } = await prisma.resourceLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceLinkDeleteManyArgs>(args?: SelectSubset<T, ResourceLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceLinks
     * const resourceLink = await prisma.resourceLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceLinkUpdateManyArgs>(args: SelectSubset<T, ResourceLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceLinks and returns the data updated in the database.
     * @param {ResourceLinkUpdateManyAndReturnArgs} args - Arguments to update many ResourceLinks.
     * @example
     * // Update many ResourceLinks
     * const resourceLink = await prisma.resourceLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResourceLinks and only return the `id`
     * const resourceLinkWithIdOnly = await prisma.resourceLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResourceLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResourceLink.
     * @param {ResourceLinkUpsertArgs} args - Arguments to update or create a ResourceLink.
     * @example
     * // Update or create a ResourceLink
     * const resourceLink = await prisma.resourceLink.upsert({
     *   create: {
     *     // ... data to create a ResourceLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceLink we want to update
     *   }
     * })
     */
    upsert<T extends ResourceLinkUpsertArgs>(args: SelectSubset<T, ResourceLinkUpsertArgs<ExtArgs>>): Prisma__ResourceLinkClient<$Result.GetResult<Prisma.$ResourceLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResourceLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkCountArgs} args - Arguments to filter ResourceLinks to count.
     * @example
     * // Count the number of ResourceLinks
     * const count = await prisma.resourceLink.count({
     *   where: {
     *     // ... the filter for the ResourceLinks we want to count
     *   }
     * })
    **/
    count<T extends ResourceLinkCountArgs>(
      args?: Subset<T, ResourceLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceLinkAggregateArgs>(args: Subset<T, ResourceLinkAggregateArgs>): Prisma.PrismaPromise<GetResourceLinkAggregateType<T>>

    /**
     * Group by ResourceLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLinkGroupByArgs} args - Group by arguments.
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
      T extends ResourceLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceLinkGroupByArgs['orderBy'] }
        : { orderBy?: ResourceLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceLink model
   */
  readonly fields: ResourceLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends ResourceLink$createdByArgs<ExtArgs> = {}>(args?: Subset<T, ResourceLink$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResourceLink model
   */
  interface ResourceLinkFieldRefs {
    readonly id: FieldRef<"ResourceLink", 'String'>
    readonly category: FieldRef<"ResourceLink", 'LinkCategory'>
    readonly title: FieldRef<"ResourceLink", 'String'>
    readonly url: FieldRef<"ResourceLink", 'String'>
    readonly description: FieldRef<"ResourceLink", 'String'>
    readonly order: FieldRef<"ResourceLink", 'Int'>
    readonly isActive: FieldRef<"ResourceLink", 'Boolean'>
    readonly createdById: FieldRef<"ResourceLink", 'String'>
    readonly createdAt: FieldRef<"ResourceLink", 'DateTime'>
    readonly updatedAt: FieldRef<"ResourceLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResourceLink findUnique
   */
  export type ResourceLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLink to fetch.
     */
    where: ResourceLinkWhereUniqueInput
  }

  /**
   * ResourceLink findUniqueOrThrow
   */
  export type ResourceLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLink to fetch.
     */
    where: ResourceLinkWhereUniqueInput
  }

  /**
   * ResourceLink findFirst
   */
  export type ResourceLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLink to fetch.
     */
    where?: ResourceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLinks to fetch.
     */
    orderBy?: ResourceLinkOrderByWithRelationInput | ResourceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceLinks.
     */
    cursor?: ResourceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceLinks.
     */
    distinct?: ResourceLinkScalarFieldEnum | ResourceLinkScalarFieldEnum[]
  }

  /**
   * ResourceLink findFirstOrThrow
   */
  export type ResourceLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLink to fetch.
     */
    where?: ResourceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLinks to fetch.
     */
    orderBy?: ResourceLinkOrderByWithRelationInput | ResourceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceLinks.
     */
    cursor?: ResourceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceLinks.
     */
    distinct?: ResourceLinkScalarFieldEnum | ResourceLinkScalarFieldEnum[]
  }

  /**
   * ResourceLink findMany
   */
  export type ResourceLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLinks to fetch.
     */
    where?: ResourceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLinks to fetch.
     */
    orderBy?: ResourceLinkOrderByWithRelationInput | ResourceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceLinks.
     */
    cursor?: ResourceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceLinks.
     */
    distinct?: ResourceLinkScalarFieldEnum | ResourceLinkScalarFieldEnum[]
  }

  /**
   * ResourceLink create
   */
  export type ResourceLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceLink.
     */
    data: XOR<ResourceLinkCreateInput, ResourceLinkUncheckedCreateInput>
  }

  /**
   * ResourceLink createMany
   */
  export type ResourceLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceLinks.
     */
    data: ResourceLinkCreateManyInput | ResourceLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceLink createManyAndReturn
   */
  export type ResourceLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * The data used to create many ResourceLinks.
     */
    data: ResourceLinkCreateManyInput | ResourceLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResourceLink update
   */
  export type ResourceLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceLink.
     */
    data: XOR<ResourceLinkUpdateInput, ResourceLinkUncheckedUpdateInput>
    /**
     * Choose, which ResourceLink to update.
     */
    where: ResourceLinkWhereUniqueInput
  }

  /**
   * ResourceLink updateMany
   */
  export type ResourceLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceLinks.
     */
    data: XOR<ResourceLinkUpdateManyMutationInput, ResourceLinkUncheckedUpdateManyInput>
    /**
     * Filter which ResourceLinks to update
     */
    where?: ResourceLinkWhereInput
    /**
     * Limit how many ResourceLinks to update.
     */
    limit?: number
  }

  /**
   * ResourceLink updateManyAndReturn
   */
  export type ResourceLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * The data used to update ResourceLinks.
     */
    data: XOR<ResourceLinkUpdateManyMutationInput, ResourceLinkUncheckedUpdateManyInput>
    /**
     * Filter which ResourceLinks to update
     */
    where?: ResourceLinkWhereInput
    /**
     * Limit how many ResourceLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResourceLink upsert
   */
  export type ResourceLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceLink to update in case it exists.
     */
    where: ResourceLinkWhereUniqueInput
    /**
     * In case the ResourceLink found by the `where` argument doesn't exist, create a new ResourceLink with this data.
     */
    create: XOR<ResourceLinkCreateInput, ResourceLinkUncheckedCreateInput>
    /**
     * In case the ResourceLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceLinkUpdateInput, ResourceLinkUncheckedUpdateInput>
  }

  /**
   * ResourceLink delete
   */
  export type ResourceLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
    /**
     * Filter which ResourceLink to delete.
     */
    where: ResourceLinkWhereUniqueInput
  }

  /**
   * ResourceLink deleteMany
   */
  export type ResourceLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceLinks to delete
     */
    where?: ResourceLinkWhereInput
    /**
     * Limit how many ResourceLinks to delete.
     */
    limit?: number
  }

  /**
   * ResourceLink.createdBy
   */
  export type ResourceLink$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ResourceLink without action
   */
  export type ResourceLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLink
     */
    select?: ResourceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceLink
     */
    omit?: ResourceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLinkInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    dltTemplateId: 'dltTemplateId',
    name: 'name',
    dueDate: 'dueDate',
    content: 'content',
    ownerName: 'ownerName',
    remarks: 'remarks',
    attachmentLink1: 'attachmentLink1',
    attachmentLink2: 'attachmentLink2',
    isActive: 'isActive',
    createdById: 'createdById',
    updatedById: 'updatedById',
    importBatchId: 'importBatchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const ImportBatchScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileType: 'fileType',
    status: 'status',
    totalRecords: 'totalRecords',
    successfulCount: 'successfulCount',
    skippedCount: 'skippedCount',
    failedCount: 'failedCount',
    errorReport: 'errorReport',
    importedById: 'importedById',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type ImportBatchScalarFieldEnum = (typeof ImportBatchScalarFieldEnum)[keyof typeof ImportBatchScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    designation: 'designation',
    photoUrl: 'photoUrl',
    bio: 'bio',
    email: 'email',
    phone: 'phone',
    department: 'department',
    order: 'order',
    isActive: 'isActive',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const ResourceLinkScalarFieldEnum: {
    id: 'id',
    category: 'category',
    title: 'title',
    url: 'url',
    description: 'description',
    order: 'order',
    isActive: 'isActive',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResourceLinkScalarFieldEnum = (typeof ResourceLinkScalarFieldEnum)[keyof typeof ResourceLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ImportStatus'
   */
  export type EnumImportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImportStatus'>
    


  /**
   * Reference to a field of type 'ImportStatus[]'
   */
  export type ListEnumImportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImportStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'LinkCategory'
   */
  export type EnumLinkCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LinkCategory'>
    


  /**
   * Reference to a field of type 'LinkCategory[]'
   */
  export type ListEnumLinkCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LinkCategory[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    employeeId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdTemplates?: TemplateListRelationFilter
    updatedTemplates?: TemplateListRelationFilter
    importBatches?: ImportBatchListRelationFilter
    createdTeamMembers?: TeamMemberListRelationFilter
    createdResourceLinks?: ResourceLinkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdTemplates?: TemplateOrderByRelationAggregateInput
    updatedTemplates?: TemplateOrderByRelationAggregateInput
    importBatches?: ImportBatchOrderByRelationAggregateInput
    createdTeamMembers?: TeamMemberOrderByRelationAggregateInput
    createdResourceLinks?: ResourceLinkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdTemplates?: TemplateListRelationFilter
    updatedTemplates?: TemplateListRelationFilter
    importBatches?: ImportBatchListRelationFilter
    createdTeamMembers?: TeamMemberListRelationFilter
    createdResourceLinks?: ResourceLinkListRelationFilter
  }, "id" | "employeeId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    employeeId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: UuidFilter<"Template"> | string
    dltTemplateId?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    dueDate?: StringFilter<"Template"> | string
    content?: StringFilter<"Template"> | string
    ownerName?: StringFilter<"Template"> | string
    remarks?: StringNullableFilter<"Template"> | string | null
    attachmentLink1?: StringNullableFilter<"Template"> | string | null
    attachmentLink2?: StringNullableFilter<"Template"> | string | null
    isActive?: BoolFilter<"Template"> | boolean
    createdById?: UuidNullableFilter<"Template"> | string | null
    updatedById?: UuidNullableFilter<"Template"> | string | null
    importBatchId?: UuidNullableFilter<"Template"> | string | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    importBatch?: XOR<ImportBatchNullableScalarRelationFilter, ImportBatchWhereInput> | null
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    dltTemplateId?: SortOrder
    name?: SortOrder
    dueDate?: SortOrder
    content?: SortOrder
    ownerName?: SortOrder
    remarks?: SortOrderInput | SortOrder
    attachmentLink1?: SortOrderInput | SortOrder
    attachmentLink2?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    importBatchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    importBatch?: ImportBatchOrderByWithRelationInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dltTemplateId?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    dueDate?: StringFilter<"Template"> | string
    content?: StringFilter<"Template"> | string
    ownerName?: StringFilter<"Template"> | string
    remarks?: StringNullableFilter<"Template"> | string | null
    attachmentLink1?: StringNullableFilter<"Template"> | string | null
    attachmentLink2?: StringNullableFilter<"Template"> | string | null
    isActive?: BoolFilter<"Template"> | boolean
    createdById?: UuidNullableFilter<"Template"> | string | null
    updatedById?: UuidNullableFilter<"Template"> | string | null
    importBatchId?: UuidNullableFilter<"Template"> | string | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    importBatch?: XOR<ImportBatchNullableScalarRelationFilter, ImportBatchWhereInput> | null
  }, "id" | "dltTemplateId">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    dltTemplateId?: SortOrder
    name?: SortOrder
    dueDate?: SortOrder
    content?: SortOrder
    ownerName?: SortOrder
    remarks?: SortOrderInput | SortOrder
    attachmentLink1?: SortOrderInput | SortOrder
    attachmentLink2?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    importBatchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Template"> | string
    dltTemplateId?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    dueDate?: StringWithAggregatesFilter<"Template"> | string
    content?: StringWithAggregatesFilter<"Template"> | string
    ownerName?: StringWithAggregatesFilter<"Template"> | string
    remarks?: StringNullableWithAggregatesFilter<"Template"> | string | null
    attachmentLink1?: StringNullableWithAggregatesFilter<"Template"> | string | null
    attachmentLink2?: StringNullableWithAggregatesFilter<"Template"> | string | null
    isActive?: BoolWithAggregatesFilter<"Template"> | boolean
    createdById?: UuidNullableWithAggregatesFilter<"Template"> | string | null
    updatedById?: UuidNullableWithAggregatesFilter<"Template"> | string | null
    importBatchId?: UuidNullableWithAggregatesFilter<"Template"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type ImportBatchWhereInput = {
    AND?: ImportBatchWhereInput | ImportBatchWhereInput[]
    OR?: ImportBatchWhereInput[]
    NOT?: ImportBatchWhereInput | ImportBatchWhereInput[]
    id?: UuidFilter<"ImportBatch"> | string
    fileName?: StringFilter<"ImportBatch"> | string
    fileType?: StringFilter<"ImportBatch"> | string
    status?: EnumImportStatusFilter<"ImportBatch"> | $Enums.ImportStatus
    totalRecords?: IntFilter<"ImportBatch"> | number
    successfulCount?: IntFilter<"ImportBatch"> | number
    skippedCount?: IntFilter<"ImportBatch"> | number
    failedCount?: IntFilter<"ImportBatch"> | number
    errorReport?: JsonNullableFilter<"ImportBatch">
    importedById?: UuidFilter<"ImportBatch"> | string
    startedAt?: DateTimeNullableFilter<"ImportBatch"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ImportBatch"> | Date | string | null
    createdAt?: DateTimeFilter<"ImportBatch"> | Date | string
    importedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    templates?: TemplateListRelationFilter
  }

  export type ImportBatchOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    status?: SortOrder
    totalRecords?: SortOrder
    successfulCount?: SortOrder
    skippedCount?: SortOrder
    failedCount?: SortOrder
    errorReport?: SortOrderInput | SortOrder
    importedById?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    importedBy?: UserOrderByWithRelationInput
    templates?: TemplateOrderByRelationAggregateInput
  }

  export type ImportBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImportBatchWhereInput | ImportBatchWhereInput[]
    OR?: ImportBatchWhereInput[]
    NOT?: ImportBatchWhereInput | ImportBatchWhereInput[]
    fileName?: StringFilter<"ImportBatch"> | string
    fileType?: StringFilter<"ImportBatch"> | string
    status?: EnumImportStatusFilter<"ImportBatch"> | $Enums.ImportStatus
    totalRecords?: IntFilter<"ImportBatch"> | number
    successfulCount?: IntFilter<"ImportBatch"> | number
    skippedCount?: IntFilter<"ImportBatch"> | number
    failedCount?: IntFilter<"ImportBatch"> | number
    errorReport?: JsonNullableFilter<"ImportBatch">
    importedById?: UuidFilter<"ImportBatch"> | string
    startedAt?: DateTimeNullableFilter<"ImportBatch"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ImportBatch"> | Date | string | null
    createdAt?: DateTimeFilter<"ImportBatch"> | Date | string
    importedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    templates?: TemplateListRelationFilter
  }, "id">

  export type ImportBatchOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    status?: SortOrder
    totalRecords?: SortOrder
    successfulCount?: SortOrder
    skippedCount?: SortOrder
    failedCount?: SortOrder
    errorReport?: SortOrderInput | SortOrder
    importedById?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ImportBatchCountOrderByAggregateInput
    _avg?: ImportBatchAvgOrderByAggregateInput
    _max?: ImportBatchMaxOrderByAggregateInput
    _min?: ImportBatchMinOrderByAggregateInput
    _sum?: ImportBatchSumOrderByAggregateInput
  }

  export type ImportBatchScalarWhereWithAggregatesInput = {
    AND?: ImportBatchScalarWhereWithAggregatesInput | ImportBatchScalarWhereWithAggregatesInput[]
    OR?: ImportBatchScalarWhereWithAggregatesInput[]
    NOT?: ImportBatchScalarWhereWithAggregatesInput | ImportBatchScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ImportBatch"> | string
    fileName?: StringWithAggregatesFilter<"ImportBatch"> | string
    fileType?: StringWithAggregatesFilter<"ImportBatch"> | string
    status?: EnumImportStatusWithAggregatesFilter<"ImportBatch"> | $Enums.ImportStatus
    totalRecords?: IntWithAggregatesFilter<"ImportBatch"> | number
    successfulCount?: IntWithAggregatesFilter<"ImportBatch"> | number
    skippedCount?: IntWithAggregatesFilter<"ImportBatch"> | number
    failedCount?: IntWithAggregatesFilter<"ImportBatch"> | number
    errorReport?: JsonNullableWithAggregatesFilter<"ImportBatch">
    importedById?: UuidWithAggregatesFilter<"ImportBatch"> | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"ImportBatch"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ImportBatch"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ImportBatch"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: UuidFilter<"TeamMember"> | string
    name?: StringFilter<"TeamMember"> | string
    designation?: StringFilter<"TeamMember"> | string
    photoUrl?: StringFilter<"TeamMember"> | string
    bio?: StringNullableFilter<"TeamMember"> | string | null
    email?: StringNullableFilter<"TeamMember"> | string | null
    phone?: StringNullableFilter<"TeamMember"> | string | null
    department?: StringNullableFilter<"TeamMember"> | string | null
    order?: IntFilter<"TeamMember"> | number
    isActive?: BoolFilter<"TeamMember"> | boolean
    createdById?: UuidNullableFilter<"TeamMember"> | string | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    name?: StringFilter<"TeamMember"> | string
    designation?: StringFilter<"TeamMember"> | string
    photoUrl?: StringFilter<"TeamMember"> | string
    bio?: StringNullableFilter<"TeamMember"> | string | null
    email?: StringNullableFilter<"TeamMember"> | string | null
    phone?: StringNullableFilter<"TeamMember"> | string | null
    department?: StringNullableFilter<"TeamMember"> | string | null
    order?: IntFilter<"TeamMember"> | number
    isActive?: BoolFilter<"TeamMember"> | boolean
    createdById?: UuidNullableFilter<"TeamMember"> | string | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _avg?: TeamMemberAvgOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
    _sum?: TeamMemberSumOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TeamMember"> | string
    name?: StringWithAggregatesFilter<"TeamMember"> | string
    designation?: StringWithAggregatesFilter<"TeamMember"> | string
    photoUrl?: StringWithAggregatesFilter<"TeamMember"> | string
    bio?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    email?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    phone?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    department?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    order?: IntWithAggregatesFilter<"TeamMember"> | number
    isActive?: BoolWithAggregatesFilter<"TeamMember"> | boolean
    createdById?: UuidNullableWithAggregatesFilter<"TeamMember"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
  }

  export type ResourceLinkWhereInput = {
    AND?: ResourceLinkWhereInput | ResourceLinkWhereInput[]
    OR?: ResourceLinkWhereInput[]
    NOT?: ResourceLinkWhereInput | ResourceLinkWhereInput[]
    id?: UuidFilter<"ResourceLink"> | string
    category?: EnumLinkCategoryFilter<"ResourceLink"> | $Enums.LinkCategory
    title?: StringFilter<"ResourceLink"> | string
    url?: StringFilter<"ResourceLink"> | string
    description?: StringNullableFilter<"ResourceLink"> | string | null
    order?: IntFilter<"ResourceLink"> | number
    isActive?: BoolFilter<"ResourceLink"> | boolean
    createdById?: UuidNullableFilter<"ResourceLink"> | string | null
    createdAt?: DateTimeFilter<"ResourceLink"> | Date | string
    updatedAt?: DateTimeFilter<"ResourceLink"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ResourceLinkOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type ResourceLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResourceLinkWhereInput | ResourceLinkWhereInput[]
    OR?: ResourceLinkWhereInput[]
    NOT?: ResourceLinkWhereInput | ResourceLinkWhereInput[]
    category?: EnumLinkCategoryFilter<"ResourceLink"> | $Enums.LinkCategory
    title?: StringFilter<"ResourceLink"> | string
    url?: StringFilter<"ResourceLink"> | string
    description?: StringNullableFilter<"ResourceLink"> | string | null
    order?: IntFilter<"ResourceLink"> | number
    isActive?: BoolFilter<"ResourceLink"> | boolean
    createdById?: UuidNullableFilter<"ResourceLink"> | string | null
    createdAt?: DateTimeFilter<"ResourceLink"> | Date | string
    updatedAt?: DateTimeFilter<"ResourceLink"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ResourceLinkOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResourceLinkCountOrderByAggregateInput
    _avg?: ResourceLinkAvgOrderByAggregateInput
    _max?: ResourceLinkMaxOrderByAggregateInput
    _min?: ResourceLinkMinOrderByAggregateInput
    _sum?: ResourceLinkSumOrderByAggregateInput
  }

  export type ResourceLinkScalarWhereWithAggregatesInput = {
    AND?: ResourceLinkScalarWhereWithAggregatesInput | ResourceLinkScalarWhereWithAggregatesInput[]
    OR?: ResourceLinkScalarWhereWithAggregatesInput[]
    NOT?: ResourceLinkScalarWhereWithAggregatesInput | ResourceLinkScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ResourceLink"> | string
    category?: EnumLinkCategoryWithAggregatesFilter<"ResourceLink"> | $Enums.LinkCategory
    title?: StringWithAggregatesFilter<"ResourceLink"> | string
    url?: StringWithAggregatesFilter<"ResourceLink"> | string
    description?: StringNullableWithAggregatesFilter<"ResourceLink"> | string | null
    order?: IntWithAggregatesFilter<"ResourceLink"> | number
    isActive?: BoolWithAggregatesFilter<"ResourceLink"> | boolean
    createdById?: UuidNullableWithAggregatesFilter<"ResourceLink"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ResourceLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResourceLink"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTemplates?: TemplateCreateNestedManyWithoutCreatedByInput
    updatedTemplates?: TemplateCreateNestedManyWithoutUpdatedByInput
    importBatches?: ImportBatchCreateNestedManyWithoutImportedByInput
    createdTeamMembers?: TeamMemberCreateNestedManyWithoutCreatedByInput
    createdResourceLinks?: ResourceLinkCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTemplates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTemplates?: TemplateUncheckedCreateNestedManyWithoutUpdatedByInput
    importBatches?: ImportBatchUncheckedCreateNestedManyWithoutImportedByInput
    createdTeamMembers?: TeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    createdResourceLinks?: ResourceLinkUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTemplates?: TemplateUpdateManyWithoutCreatedByNestedInput
    updatedTemplates?: TemplateUpdateManyWithoutUpdatedByNestedInput
    importBatches?: ImportBatchUpdateManyWithoutImportedByNestedInput
    createdTeamMembers?: TeamMemberUpdateManyWithoutCreatedByNestedInput
    createdResourceLinks?: ResourceLinkUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTemplates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTemplates?: TemplateUncheckedUpdateManyWithoutUpdatedByNestedInput
    importBatches?: ImportBatchUncheckedUpdateManyWithoutImportedByNestedInput
    createdTeamMembers?: TeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    createdResourceLinks?: ResourceLinkUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedTemplatesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedTemplatesInput
    importBatch?: ImportBatchCreateNestedOneWithoutTemplatesInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    createdById?: string | null
    updatedById?: string | null
    importBatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedTemplatesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedTemplatesNestedInput
    importBatch?: ImportBatchUpdateOneWithoutTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    importBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateManyInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    createdById?: string | null
    updatedById?: string | null
    importBatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    importBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportBatchCreateInput = {
    id?: string
    fileName: string
    fileType: string
    status?: $Enums.ImportStatus
    totalRecords?: number
    successfulCount?: number
    skippedCount?: number
    failedCount?: number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    importedBy: UserCreateNestedOneWithoutImportBatchesInput
    templates?: TemplateCreateNestedManyWithoutImportBatchInput
  }

  export type ImportBatchUncheckedCreateInput = {
    id?: string
    fileName: string
    fileType: string
    status?: $Enums.ImportStatus
    totalRecords?: number
    successfulCount?: number
    skippedCount?: number
    failedCount?: number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    importedById: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    templates?: TemplateUncheckedCreateNestedManyWithoutImportBatchInput
  }

  export type ImportBatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    status?: EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus
    totalRecords?: IntFieldUpdateOperationsInput | number
    successfulCount?: IntFieldUpdateOperationsInput | number
    skippedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importedBy?: UserUpdateOneRequiredWithoutImportBatchesNestedInput
    templates?: TemplateUpdateManyWithoutImportBatchNestedInput
  }

  export type ImportBatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    status?: EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus
    totalRecords?: IntFieldUpdateOperationsInput | number
    successfulCount?: IntFieldUpdateOperationsInput | number
    skippedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    importedById?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUncheckedUpdateManyWithoutImportBatchNestedInput
  }

  export type ImportBatchCreateManyInput = {
    id?: string
    fileName: string
    fileType: string
    status?: $Enums.ImportStatus
    totalRecords?: number
    successfulCount?: number
    skippedCount?: number
    failedCount?: number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    importedById: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ImportBatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    status?: EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus
    totalRecords?: IntFieldUpdateOperationsInput | number
    successfulCount?: IntFieldUpdateOperationsInput | number
    skippedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportBatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    status?: EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus
    totalRecords?: IntFieldUpdateOperationsInput | number
    successfulCount?: IntFieldUpdateOperationsInput | number
    skippedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    importedById?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    id?: string
    name: string
    designation: string
    photoUrl: string
    bio?: string | null
    email?: string | null
    phone?: string | null
    department?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedTeamMembersInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: string
    name: string
    designation: string
    photoUrl: string
    bio?: string | null
    email?: string | null
    phone?: string | null
    department?: string | null
    order?: number
    isActive?: boolean
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedTeamMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyInput = {
    id?: string
    name: string
    designation: string
    photoUrl: string
    bio?: string | null
    email?: string | null
    phone?: string | null
    department?: string | null
    order?: number
    isActive?: boolean
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceLinkCreateInput = {
    id?: string
    category: $Enums.LinkCategory
    title: string
    url: string
    description?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedResourceLinksInput
  }

  export type ResourceLinkUncheckedCreateInput = {
    id?: string
    category: $Enums.LinkCategory
    title: string
    url: string
    description?: string | null
    order?: number
    isActive?: boolean
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumLinkCategoryFieldUpdateOperationsInput | $Enums.LinkCategory
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedResourceLinksNestedInput
  }

  export type ResourceLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumLinkCategoryFieldUpdateOperationsInput | $Enums.LinkCategory
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceLinkCreateManyInput = {
    id?: string
    category: $Enums.LinkCategory
    title: string
    url: string
    description?: string | null
    order?: number
    isActive?: boolean
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumLinkCategoryFieldUpdateOperationsInput | $Enums.LinkCategory
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumLinkCategoryFieldUpdateOperationsInput | $Enums.LinkCategory
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type ImportBatchListRelationFilter = {
    every?: ImportBatchWhereInput
    some?: ImportBatchWhereInput
    none?: ImportBatchWhereInput
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type ResourceLinkListRelationFilter = {
    every?: ResourceLinkWhereInput
    some?: ResourceLinkWhereInput
    none?: ResourceLinkWhereInput
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImportBatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ImportBatchNullableScalarRelationFilter = {
    is?: ImportBatchWhereInput | null
    isNot?: ImportBatchWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    dltTemplateId?: SortOrder
    name?: SortOrder
    dueDate?: SortOrder
    content?: SortOrder
    ownerName?: SortOrder
    remarks?: SortOrder
    attachmentLink1?: SortOrder
    attachmentLink2?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    importBatchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    dltTemplateId?: SortOrder
    name?: SortOrder
    dueDate?: SortOrder
    content?: SortOrder
    ownerName?: SortOrder
    remarks?: SortOrder
    attachmentLink1?: SortOrder
    attachmentLink2?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    importBatchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    dltTemplateId?: SortOrder
    name?: SortOrder
    dueDate?: SortOrder
    content?: SortOrder
    ownerName?: SortOrder
    remarks?: SortOrder
    attachmentLink1?: SortOrder
    attachmentLink2?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    importBatchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumImportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ImportStatus | EnumImportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImportStatus[] | ListEnumImportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImportStatus[] | ListEnumImportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImportStatusFilter<$PrismaModel> | $Enums.ImportStatus
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ImportBatchCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    status?: SortOrder
    totalRecords?: SortOrder
    successfulCount?: SortOrder
    skippedCount?: SortOrder
    failedCount?: SortOrder
    errorReport?: SortOrder
    importedById?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ImportBatchAvgOrderByAggregateInput = {
    totalRecords?: SortOrder
    successfulCount?: SortOrder
    skippedCount?: SortOrder
    failedCount?: SortOrder
  }

  export type ImportBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    status?: SortOrder
    totalRecords?: SortOrder
    successfulCount?: SortOrder
    skippedCount?: SortOrder
    failedCount?: SortOrder
    importedById?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ImportBatchMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    status?: SortOrder
    totalRecords?: SortOrder
    successfulCount?: SortOrder
    skippedCount?: SortOrder
    failedCount?: SortOrder
    importedById?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ImportBatchSumOrderByAggregateInput = {
    totalRecords?: SortOrder
    successfulCount?: SortOrder
    skippedCount?: SortOrder
    failedCount?: SortOrder
  }

  export type EnumImportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImportStatus | EnumImportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImportStatus[] | ListEnumImportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImportStatus[] | ListEnumImportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ImportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImportStatusFilter<$PrismaModel>
    _max?: NestedEnumImportStatusFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumLinkCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkCategory | EnumLinkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LinkCategory[] | ListEnumLinkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkCategory[] | ListEnumLinkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkCategoryFilter<$PrismaModel> | $Enums.LinkCategory
  }

  export type ResourceLinkCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceLinkAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ResourceLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceLinkMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceLinkSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumLinkCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkCategory | EnumLinkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LinkCategory[] | ListEnumLinkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkCategory[] | ListEnumLinkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkCategoryWithAggregatesFilter<$PrismaModel> | $Enums.LinkCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLinkCategoryFilter<$PrismaModel>
    _max?: NestedEnumLinkCategoryFilter<$PrismaModel>
  }

  export type TemplateCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type TemplateCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<TemplateCreateWithoutUpdatedByInput, TemplateUncheckedCreateWithoutUpdatedByInput> | TemplateCreateWithoutUpdatedByInput[] | TemplateUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUpdatedByInput | TemplateCreateOrConnectWithoutUpdatedByInput[]
    createMany?: TemplateCreateManyUpdatedByInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type ImportBatchCreateNestedManyWithoutImportedByInput = {
    create?: XOR<ImportBatchCreateWithoutImportedByInput, ImportBatchUncheckedCreateWithoutImportedByInput> | ImportBatchCreateWithoutImportedByInput[] | ImportBatchUncheckedCreateWithoutImportedByInput[]
    connectOrCreate?: ImportBatchCreateOrConnectWithoutImportedByInput | ImportBatchCreateOrConnectWithoutImportedByInput[]
    createMany?: ImportBatchCreateManyImportedByInputEnvelope
    connect?: ImportBatchWhereUniqueInput | ImportBatchWhereUniqueInput[]
  }

  export type TeamMemberCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TeamMemberCreateWithoutCreatedByInput, TeamMemberUncheckedCreateWithoutCreatedByInput> | TeamMemberCreateWithoutCreatedByInput[] | TeamMemberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutCreatedByInput | TeamMemberCreateOrConnectWithoutCreatedByInput[]
    createMany?: TeamMemberCreateManyCreatedByInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type ResourceLinkCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ResourceLinkCreateWithoutCreatedByInput, ResourceLinkUncheckedCreateWithoutCreatedByInput> | ResourceLinkCreateWithoutCreatedByInput[] | ResourceLinkUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ResourceLinkCreateOrConnectWithoutCreatedByInput | ResourceLinkCreateOrConnectWithoutCreatedByInput[]
    createMany?: ResourceLinkCreateManyCreatedByInputEnvelope
    connect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<TemplateCreateWithoutUpdatedByInput, TemplateUncheckedCreateWithoutUpdatedByInput> | TemplateCreateWithoutUpdatedByInput[] | TemplateUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUpdatedByInput | TemplateCreateOrConnectWithoutUpdatedByInput[]
    createMany?: TemplateCreateManyUpdatedByInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type ImportBatchUncheckedCreateNestedManyWithoutImportedByInput = {
    create?: XOR<ImportBatchCreateWithoutImportedByInput, ImportBatchUncheckedCreateWithoutImportedByInput> | ImportBatchCreateWithoutImportedByInput[] | ImportBatchUncheckedCreateWithoutImportedByInput[]
    connectOrCreate?: ImportBatchCreateOrConnectWithoutImportedByInput | ImportBatchCreateOrConnectWithoutImportedByInput[]
    createMany?: ImportBatchCreateManyImportedByInputEnvelope
    connect?: ImportBatchWhereUniqueInput | ImportBatchWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TeamMemberCreateWithoutCreatedByInput, TeamMemberUncheckedCreateWithoutCreatedByInput> | TeamMemberCreateWithoutCreatedByInput[] | TeamMemberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutCreatedByInput | TeamMemberCreateOrConnectWithoutCreatedByInput[]
    createMany?: TeamMemberCreateManyCreatedByInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type ResourceLinkUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ResourceLinkCreateWithoutCreatedByInput, ResourceLinkUncheckedCreateWithoutCreatedByInput> | ResourceLinkCreateWithoutCreatedByInput[] | ResourceLinkUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ResourceLinkCreateOrConnectWithoutCreatedByInput | ResourceLinkCreateOrConnectWithoutCreatedByInput[]
    createMany?: ResourceLinkCreateManyCreatedByInputEnvelope
    connect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TemplateUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutCreatedByInput | TemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutCreatedByInput | TemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutCreatedByInput | TemplateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type TemplateUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<TemplateCreateWithoutUpdatedByInput, TemplateUncheckedCreateWithoutUpdatedByInput> | TemplateCreateWithoutUpdatedByInput[] | TemplateUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUpdatedByInput | TemplateCreateOrConnectWithoutUpdatedByInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutUpdatedByInput | TemplateUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: TemplateCreateManyUpdatedByInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutUpdatedByInput | TemplateUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutUpdatedByInput | TemplateUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type ImportBatchUpdateManyWithoutImportedByNestedInput = {
    create?: XOR<ImportBatchCreateWithoutImportedByInput, ImportBatchUncheckedCreateWithoutImportedByInput> | ImportBatchCreateWithoutImportedByInput[] | ImportBatchUncheckedCreateWithoutImportedByInput[]
    connectOrCreate?: ImportBatchCreateOrConnectWithoutImportedByInput | ImportBatchCreateOrConnectWithoutImportedByInput[]
    upsert?: ImportBatchUpsertWithWhereUniqueWithoutImportedByInput | ImportBatchUpsertWithWhereUniqueWithoutImportedByInput[]
    createMany?: ImportBatchCreateManyImportedByInputEnvelope
    set?: ImportBatchWhereUniqueInput | ImportBatchWhereUniqueInput[]
    disconnect?: ImportBatchWhereUniqueInput | ImportBatchWhereUniqueInput[]
    delete?: ImportBatchWhereUniqueInput | ImportBatchWhereUniqueInput[]
    connect?: ImportBatchWhereUniqueInput | ImportBatchWhereUniqueInput[]
    update?: ImportBatchUpdateWithWhereUniqueWithoutImportedByInput | ImportBatchUpdateWithWhereUniqueWithoutImportedByInput[]
    updateMany?: ImportBatchUpdateManyWithWhereWithoutImportedByInput | ImportBatchUpdateManyWithWhereWithoutImportedByInput[]
    deleteMany?: ImportBatchScalarWhereInput | ImportBatchScalarWhereInput[]
  }

  export type TeamMemberUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TeamMemberCreateWithoutCreatedByInput, TeamMemberUncheckedCreateWithoutCreatedByInput> | TeamMemberCreateWithoutCreatedByInput[] | TeamMemberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutCreatedByInput | TeamMemberCreateOrConnectWithoutCreatedByInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutCreatedByInput | TeamMemberUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TeamMemberCreateManyCreatedByInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutCreatedByInput | TeamMemberUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutCreatedByInput | TeamMemberUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type ResourceLinkUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ResourceLinkCreateWithoutCreatedByInput, ResourceLinkUncheckedCreateWithoutCreatedByInput> | ResourceLinkCreateWithoutCreatedByInput[] | ResourceLinkUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ResourceLinkCreateOrConnectWithoutCreatedByInput | ResourceLinkCreateOrConnectWithoutCreatedByInput[]
    upsert?: ResourceLinkUpsertWithWhereUniqueWithoutCreatedByInput | ResourceLinkUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ResourceLinkCreateManyCreatedByInputEnvelope
    set?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    disconnect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    delete?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    connect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    update?: ResourceLinkUpdateWithWhereUniqueWithoutCreatedByInput | ResourceLinkUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ResourceLinkUpdateManyWithWhereWithoutCreatedByInput | ResourceLinkUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ResourceLinkScalarWhereInput | ResourceLinkScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutCreatedByInput | TemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutCreatedByInput | TemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutCreatedByInput | TemplateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<TemplateCreateWithoutUpdatedByInput, TemplateUncheckedCreateWithoutUpdatedByInput> | TemplateCreateWithoutUpdatedByInput[] | TemplateUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUpdatedByInput | TemplateCreateOrConnectWithoutUpdatedByInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutUpdatedByInput | TemplateUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: TemplateCreateManyUpdatedByInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutUpdatedByInput | TemplateUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutUpdatedByInput | TemplateUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type ImportBatchUncheckedUpdateManyWithoutImportedByNestedInput = {
    create?: XOR<ImportBatchCreateWithoutImportedByInput, ImportBatchUncheckedCreateWithoutImportedByInput> | ImportBatchCreateWithoutImportedByInput[] | ImportBatchUncheckedCreateWithoutImportedByInput[]
    connectOrCreate?: ImportBatchCreateOrConnectWithoutImportedByInput | ImportBatchCreateOrConnectWithoutImportedByInput[]
    upsert?: ImportBatchUpsertWithWhereUniqueWithoutImportedByInput | ImportBatchUpsertWithWhereUniqueWithoutImportedByInput[]
    createMany?: ImportBatchCreateManyImportedByInputEnvelope
    set?: ImportBatchWhereUniqueInput | ImportBatchWhereUniqueInput[]
    disconnect?: ImportBatchWhereUniqueInput | ImportBatchWhereUniqueInput[]
    delete?: ImportBatchWhereUniqueInput | ImportBatchWhereUniqueInput[]
    connect?: ImportBatchWhereUniqueInput | ImportBatchWhereUniqueInput[]
    update?: ImportBatchUpdateWithWhereUniqueWithoutImportedByInput | ImportBatchUpdateWithWhereUniqueWithoutImportedByInput[]
    updateMany?: ImportBatchUpdateManyWithWhereWithoutImportedByInput | ImportBatchUpdateManyWithWhereWithoutImportedByInput[]
    deleteMany?: ImportBatchScalarWhereInput | ImportBatchScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TeamMemberCreateWithoutCreatedByInput, TeamMemberUncheckedCreateWithoutCreatedByInput> | TeamMemberCreateWithoutCreatedByInput[] | TeamMemberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutCreatedByInput | TeamMemberCreateOrConnectWithoutCreatedByInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutCreatedByInput | TeamMemberUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TeamMemberCreateManyCreatedByInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutCreatedByInput | TeamMemberUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutCreatedByInput | TeamMemberUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type ResourceLinkUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ResourceLinkCreateWithoutCreatedByInput, ResourceLinkUncheckedCreateWithoutCreatedByInput> | ResourceLinkCreateWithoutCreatedByInput[] | ResourceLinkUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ResourceLinkCreateOrConnectWithoutCreatedByInput | ResourceLinkCreateOrConnectWithoutCreatedByInput[]
    upsert?: ResourceLinkUpsertWithWhereUniqueWithoutCreatedByInput | ResourceLinkUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ResourceLinkCreateManyCreatedByInputEnvelope
    set?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    disconnect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    delete?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    connect?: ResourceLinkWhereUniqueInput | ResourceLinkWhereUniqueInput[]
    update?: ResourceLinkUpdateWithWhereUniqueWithoutCreatedByInput | ResourceLinkUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ResourceLinkUpdateManyWithWhereWithoutCreatedByInput | ResourceLinkUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ResourceLinkScalarWhereInput | ResourceLinkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedTemplatesInput = {
    create?: XOR<UserCreateWithoutCreatedTemplatesInput, UserUncheckedCreateWithoutCreatedTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedTemplatesInput = {
    create?: XOR<UserCreateWithoutUpdatedTemplatesInput, UserUncheckedCreateWithoutUpdatedTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type ImportBatchCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<ImportBatchCreateWithoutTemplatesInput, ImportBatchUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: ImportBatchCreateOrConnectWithoutTemplatesInput
    connect?: ImportBatchWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneWithoutCreatedTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTemplatesInput, UserUncheckedCreateWithoutCreatedTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTemplatesInput
    upsert?: UserUpsertWithoutCreatedTemplatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTemplatesInput, UserUpdateWithoutCreatedTemplatesInput>, UserUncheckedUpdateWithoutCreatedTemplatesInput>
  }

  export type UserUpdateOneWithoutUpdatedTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedTemplatesInput, UserUncheckedCreateWithoutUpdatedTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedTemplatesInput
    upsert?: UserUpsertWithoutUpdatedTemplatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedTemplatesInput, UserUpdateWithoutUpdatedTemplatesInput>, UserUncheckedUpdateWithoutUpdatedTemplatesInput>
  }

  export type ImportBatchUpdateOneWithoutTemplatesNestedInput = {
    create?: XOR<ImportBatchCreateWithoutTemplatesInput, ImportBatchUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: ImportBatchCreateOrConnectWithoutTemplatesInput
    upsert?: ImportBatchUpsertWithoutTemplatesInput
    disconnect?: ImportBatchWhereInput | boolean
    delete?: ImportBatchWhereInput | boolean
    connect?: ImportBatchWhereUniqueInput
    update?: XOR<XOR<ImportBatchUpdateToOneWithWhereWithoutTemplatesInput, ImportBatchUpdateWithoutTemplatesInput>, ImportBatchUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserCreateNestedOneWithoutImportBatchesInput = {
    create?: XOR<UserCreateWithoutImportBatchesInput, UserUncheckedCreateWithoutImportBatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImportBatchesInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateCreateNestedManyWithoutImportBatchInput = {
    create?: XOR<TemplateCreateWithoutImportBatchInput, TemplateUncheckedCreateWithoutImportBatchInput> | TemplateCreateWithoutImportBatchInput[] | TemplateUncheckedCreateWithoutImportBatchInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutImportBatchInput | TemplateCreateOrConnectWithoutImportBatchInput[]
    createMany?: TemplateCreateManyImportBatchInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutImportBatchInput = {
    create?: XOR<TemplateCreateWithoutImportBatchInput, TemplateUncheckedCreateWithoutImportBatchInput> | TemplateCreateWithoutImportBatchInput[] | TemplateUncheckedCreateWithoutImportBatchInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutImportBatchInput | TemplateCreateOrConnectWithoutImportBatchInput[]
    createMany?: TemplateCreateManyImportBatchInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type EnumImportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ImportStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutImportBatchesNestedInput = {
    create?: XOR<UserCreateWithoutImportBatchesInput, UserUncheckedCreateWithoutImportBatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImportBatchesInput
    upsert?: UserUpsertWithoutImportBatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImportBatchesInput, UserUpdateWithoutImportBatchesInput>, UserUncheckedUpdateWithoutImportBatchesInput>
  }

  export type TemplateUpdateManyWithoutImportBatchNestedInput = {
    create?: XOR<TemplateCreateWithoutImportBatchInput, TemplateUncheckedCreateWithoutImportBatchInput> | TemplateCreateWithoutImportBatchInput[] | TemplateUncheckedCreateWithoutImportBatchInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutImportBatchInput | TemplateCreateOrConnectWithoutImportBatchInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutImportBatchInput | TemplateUpsertWithWhereUniqueWithoutImportBatchInput[]
    createMany?: TemplateCreateManyImportBatchInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutImportBatchInput | TemplateUpdateWithWhereUniqueWithoutImportBatchInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutImportBatchInput | TemplateUpdateManyWithWhereWithoutImportBatchInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutImportBatchNestedInput = {
    create?: XOR<TemplateCreateWithoutImportBatchInput, TemplateUncheckedCreateWithoutImportBatchInput> | TemplateCreateWithoutImportBatchInput[] | TemplateUncheckedCreateWithoutImportBatchInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutImportBatchInput | TemplateCreateOrConnectWithoutImportBatchInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutImportBatchInput | TemplateUpsertWithWhereUniqueWithoutImportBatchInput[]
    createMany?: TemplateCreateManyImportBatchInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutImportBatchInput | TemplateUpdateWithWhereUniqueWithoutImportBatchInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutImportBatchInput | TemplateUpdateManyWithWhereWithoutImportBatchInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedTeamMembersInput = {
    create?: XOR<UserCreateWithoutCreatedTeamMembersInput, UserUncheckedCreateWithoutCreatedTeamMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTeamMembersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutCreatedTeamMembersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTeamMembersInput, UserUncheckedCreateWithoutCreatedTeamMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTeamMembersInput
    upsert?: UserUpsertWithoutCreatedTeamMembersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTeamMembersInput, UserUpdateWithoutCreatedTeamMembersInput>, UserUncheckedUpdateWithoutCreatedTeamMembersInput>
  }

  export type UserCreateNestedOneWithoutCreatedResourceLinksInput = {
    create?: XOR<UserCreateWithoutCreatedResourceLinksInput, UserUncheckedCreateWithoutCreatedResourceLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedResourceLinksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLinkCategoryFieldUpdateOperationsInput = {
    set?: $Enums.LinkCategory
  }

  export type UserUpdateOneWithoutCreatedResourceLinksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedResourceLinksInput, UserUncheckedCreateWithoutCreatedResourceLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedResourceLinksInput
    upsert?: UserUpsertWithoutCreatedResourceLinksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedResourceLinksInput, UserUpdateWithoutCreatedResourceLinksInput>, UserUncheckedUpdateWithoutCreatedResourceLinksInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumImportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ImportStatus | EnumImportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImportStatus[] | ListEnumImportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImportStatus[] | ListEnumImportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImportStatusFilter<$PrismaModel> | $Enums.ImportStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumImportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImportStatus | EnumImportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImportStatus[] | ListEnumImportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImportStatus[] | ListEnumImportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ImportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImportStatusFilter<$PrismaModel>
    _max?: NestedEnumImportStatusFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLinkCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkCategory | EnumLinkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LinkCategory[] | ListEnumLinkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkCategory[] | ListEnumLinkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkCategoryFilter<$PrismaModel> | $Enums.LinkCategory
  }

  export type NestedEnumLinkCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkCategory | EnumLinkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LinkCategory[] | ListEnumLinkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkCategory[] | ListEnumLinkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkCategoryWithAggregatesFilter<$PrismaModel> | $Enums.LinkCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLinkCategoryFilter<$PrismaModel>
    _max?: NestedEnumLinkCategoryFilter<$PrismaModel>
  }

  export type TemplateCreateWithoutCreatedByInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: UserCreateNestedOneWithoutUpdatedTemplatesInput
    importBatch?: ImportBatchCreateNestedOneWithoutTemplatesInput
  }

  export type TemplateUncheckedCreateWithoutCreatedByInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    updatedById?: string | null
    importBatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateOrConnectWithoutCreatedByInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type TemplateCreateManyCreatedByInputEnvelope = {
    data: TemplateCreateManyCreatedByInput | TemplateCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutUpdatedByInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedTemplatesInput
    importBatch?: ImportBatchCreateNestedOneWithoutTemplatesInput
  }

  export type TemplateUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    createdById?: string | null
    importBatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateOrConnectWithoutUpdatedByInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutUpdatedByInput, TemplateUncheckedCreateWithoutUpdatedByInput>
  }

  export type TemplateCreateManyUpdatedByInputEnvelope = {
    data: TemplateCreateManyUpdatedByInput | TemplateCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type ImportBatchCreateWithoutImportedByInput = {
    id?: string
    fileName: string
    fileType: string
    status?: $Enums.ImportStatus
    totalRecords?: number
    successfulCount?: number
    skippedCount?: number
    failedCount?: number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    templates?: TemplateCreateNestedManyWithoutImportBatchInput
  }

  export type ImportBatchUncheckedCreateWithoutImportedByInput = {
    id?: string
    fileName: string
    fileType: string
    status?: $Enums.ImportStatus
    totalRecords?: number
    successfulCount?: number
    skippedCount?: number
    failedCount?: number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    templates?: TemplateUncheckedCreateNestedManyWithoutImportBatchInput
  }

  export type ImportBatchCreateOrConnectWithoutImportedByInput = {
    where: ImportBatchWhereUniqueInput
    create: XOR<ImportBatchCreateWithoutImportedByInput, ImportBatchUncheckedCreateWithoutImportedByInput>
  }

  export type ImportBatchCreateManyImportedByInputEnvelope = {
    data: ImportBatchCreateManyImportedByInput | ImportBatchCreateManyImportedByInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberCreateWithoutCreatedByInput = {
    id?: string
    name: string
    designation: string
    photoUrl: string
    bio?: string | null
    email?: string | null
    phone?: string | null
    department?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    designation: string
    photoUrl: string
    bio?: string | null
    email?: string | null
    phone?: string | null
    department?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberCreateOrConnectWithoutCreatedByInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutCreatedByInput, TeamMemberUncheckedCreateWithoutCreatedByInput>
  }

  export type TeamMemberCreateManyCreatedByInputEnvelope = {
    data: TeamMemberCreateManyCreatedByInput | TeamMemberCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ResourceLinkCreateWithoutCreatedByInput = {
    id?: string
    category: $Enums.LinkCategory
    title: string
    url: string
    description?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceLinkUncheckedCreateWithoutCreatedByInput = {
    id?: string
    category: $Enums.LinkCategory
    title: string
    url: string
    description?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceLinkCreateOrConnectWithoutCreatedByInput = {
    where: ResourceLinkWhereUniqueInput
    create: XOR<ResourceLinkCreateWithoutCreatedByInput, ResourceLinkUncheckedCreateWithoutCreatedByInput>
  }

  export type ResourceLinkCreateManyCreatedByInputEnvelope = {
    data: ResourceLinkCreateManyCreatedByInput | ResourceLinkCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TemplateUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutCreatedByInput, TemplateUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutCreatedByInput, TemplateUncheckedUpdateWithoutCreatedByInput>
  }

  export type TemplateUpdateManyWithWhereWithoutCreatedByInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    id?: UuidFilter<"Template"> | string
    dltTemplateId?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    dueDate?: StringFilter<"Template"> | string
    content?: StringFilter<"Template"> | string
    ownerName?: StringFilter<"Template"> | string
    remarks?: StringNullableFilter<"Template"> | string | null
    attachmentLink1?: StringNullableFilter<"Template"> | string | null
    attachmentLink2?: StringNullableFilter<"Template"> | string | null
    isActive?: BoolFilter<"Template"> | boolean
    createdById?: UuidNullableFilter<"Template"> | string | null
    updatedById?: UuidNullableFilter<"Template"> | string | null
    importBatchId?: UuidNullableFilter<"Template"> | string | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
  }

  export type TemplateUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutUpdatedByInput, TemplateUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<TemplateCreateWithoutUpdatedByInput, TemplateUncheckedCreateWithoutUpdatedByInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutUpdatedByInput, TemplateUncheckedUpdateWithoutUpdatedByInput>
  }

  export type TemplateUpdateManyWithWhereWithoutUpdatedByInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type ImportBatchUpsertWithWhereUniqueWithoutImportedByInput = {
    where: ImportBatchWhereUniqueInput
    update: XOR<ImportBatchUpdateWithoutImportedByInput, ImportBatchUncheckedUpdateWithoutImportedByInput>
    create: XOR<ImportBatchCreateWithoutImportedByInput, ImportBatchUncheckedCreateWithoutImportedByInput>
  }

  export type ImportBatchUpdateWithWhereUniqueWithoutImportedByInput = {
    where: ImportBatchWhereUniqueInput
    data: XOR<ImportBatchUpdateWithoutImportedByInput, ImportBatchUncheckedUpdateWithoutImportedByInput>
  }

  export type ImportBatchUpdateManyWithWhereWithoutImportedByInput = {
    where: ImportBatchScalarWhereInput
    data: XOR<ImportBatchUpdateManyMutationInput, ImportBatchUncheckedUpdateManyWithoutImportedByInput>
  }

  export type ImportBatchScalarWhereInput = {
    AND?: ImportBatchScalarWhereInput | ImportBatchScalarWhereInput[]
    OR?: ImportBatchScalarWhereInput[]
    NOT?: ImportBatchScalarWhereInput | ImportBatchScalarWhereInput[]
    id?: UuidFilter<"ImportBatch"> | string
    fileName?: StringFilter<"ImportBatch"> | string
    fileType?: StringFilter<"ImportBatch"> | string
    status?: EnumImportStatusFilter<"ImportBatch"> | $Enums.ImportStatus
    totalRecords?: IntFilter<"ImportBatch"> | number
    successfulCount?: IntFilter<"ImportBatch"> | number
    skippedCount?: IntFilter<"ImportBatch"> | number
    failedCount?: IntFilter<"ImportBatch"> | number
    errorReport?: JsonNullableFilter<"ImportBatch">
    importedById?: UuidFilter<"ImportBatch"> | string
    startedAt?: DateTimeNullableFilter<"ImportBatch"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ImportBatch"> | Date | string | null
    createdAt?: DateTimeFilter<"ImportBatch"> | Date | string
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutCreatedByInput, TeamMemberUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TeamMemberCreateWithoutCreatedByInput, TeamMemberUncheckedCreateWithoutCreatedByInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutCreatedByInput, TeamMemberUncheckedUpdateWithoutCreatedByInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutCreatedByInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: UuidFilter<"TeamMember"> | string
    name?: StringFilter<"TeamMember"> | string
    designation?: StringFilter<"TeamMember"> | string
    photoUrl?: StringFilter<"TeamMember"> | string
    bio?: StringNullableFilter<"TeamMember"> | string | null
    email?: StringNullableFilter<"TeamMember"> | string | null
    phone?: StringNullableFilter<"TeamMember"> | string | null
    department?: StringNullableFilter<"TeamMember"> | string | null
    order?: IntFilter<"TeamMember"> | number
    isActive?: BoolFilter<"TeamMember"> | boolean
    createdById?: UuidNullableFilter<"TeamMember"> | string | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
  }

  export type ResourceLinkUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ResourceLinkWhereUniqueInput
    update: XOR<ResourceLinkUpdateWithoutCreatedByInput, ResourceLinkUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ResourceLinkCreateWithoutCreatedByInput, ResourceLinkUncheckedCreateWithoutCreatedByInput>
  }

  export type ResourceLinkUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ResourceLinkWhereUniqueInput
    data: XOR<ResourceLinkUpdateWithoutCreatedByInput, ResourceLinkUncheckedUpdateWithoutCreatedByInput>
  }

  export type ResourceLinkUpdateManyWithWhereWithoutCreatedByInput = {
    where: ResourceLinkScalarWhereInput
    data: XOR<ResourceLinkUpdateManyMutationInput, ResourceLinkUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ResourceLinkScalarWhereInput = {
    AND?: ResourceLinkScalarWhereInput | ResourceLinkScalarWhereInput[]
    OR?: ResourceLinkScalarWhereInput[]
    NOT?: ResourceLinkScalarWhereInput | ResourceLinkScalarWhereInput[]
    id?: UuidFilter<"ResourceLink"> | string
    category?: EnumLinkCategoryFilter<"ResourceLink"> | $Enums.LinkCategory
    title?: StringFilter<"ResourceLink"> | string
    url?: StringFilter<"ResourceLink"> | string
    description?: StringNullableFilter<"ResourceLink"> | string | null
    order?: IntFilter<"ResourceLink"> | number
    isActive?: BoolFilter<"ResourceLink"> | boolean
    createdById?: UuidNullableFilter<"ResourceLink"> | string | null
    createdAt?: DateTimeFilter<"ResourceLink"> | Date | string
    updatedAt?: DateTimeFilter<"ResourceLink"> | Date | string
  }

  export type UserCreateWithoutCreatedTemplatesInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedTemplates?: TemplateCreateNestedManyWithoutUpdatedByInput
    importBatches?: ImportBatchCreateNestedManyWithoutImportedByInput
    createdTeamMembers?: TeamMemberCreateNestedManyWithoutCreatedByInput
    createdResourceLinks?: ResourceLinkCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedTemplatesInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedTemplates?: TemplateUncheckedCreateNestedManyWithoutUpdatedByInput
    importBatches?: ImportBatchUncheckedCreateNestedManyWithoutImportedByInput
    createdTeamMembers?: TeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    createdResourceLinks?: ResourceLinkUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTemplatesInput, UserUncheckedCreateWithoutCreatedTemplatesInput>
  }

  export type UserCreateWithoutUpdatedTemplatesInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTemplates?: TemplateCreateNestedManyWithoutCreatedByInput
    importBatches?: ImportBatchCreateNestedManyWithoutImportedByInput
    createdTeamMembers?: TeamMemberCreateNestedManyWithoutCreatedByInput
    createdResourceLinks?: ResourceLinkCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutUpdatedTemplatesInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTemplates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
    importBatches?: ImportBatchUncheckedCreateNestedManyWithoutImportedByInput
    createdTeamMembers?: TeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    createdResourceLinks?: ResourceLinkUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutUpdatedTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedTemplatesInput, UserUncheckedCreateWithoutUpdatedTemplatesInput>
  }

  export type ImportBatchCreateWithoutTemplatesInput = {
    id?: string
    fileName: string
    fileType: string
    status?: $Enums.ImportStatus
    totalRecords?: number
    successfulCount?: number
    skippedCount?: number
    failedCount?: number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    importedBy: UserCreateNestedOneWithoutImportBatchesInput
  }

  export type ImportBatchUncheckedCreateWithoutTemplatesInput = {
    id?: string
    fileName: string
    fileType: string
    status?: $Enums.ImportStatus
    totalRecords?: number
    successfulCount?: number
    skippedCount?: number
    failedCount?: number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    importedById: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ImportBatchCreateOrConnectWithoutTemplatesInput = {
    where: ImportBatchWhereUniqueInput
    create: XOR<ImportBatchCreateWithoutTemplatesInput, ImportBatchUncheckedCreateWithoutTemplatesInput>
  }

  export type UserUpsertWithoutCreatedTemplatesInput = {
    update: XOR<UserUpdateWithoutCreatedTemplatesInput, UserUncheckedUpdateWithoutCreatedTemplatesInput>
    create: XOR<UserCreateWithoutCreatedTemplatesInput, UserUncheckedCreateWithoutCreatedTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTemplatesInput, UserUncheckedUpdateWithoutCreatedTemplatesInput>
  }

  export type UserUpdateWithoutCreatedTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTemplates?: TemplateUpdateManyWithoutUpdatedByNestedInput
    importBatches?: ImportBatchUpdateManyWithoutImportedByNestedInput
    createdTeamMembers?: TeamMemberUpdateManyWithoutCreatedByNestedInput
    createdResourceLinks?: ResourceLinkUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTemplates?: TemplateUncheckedUpdateManyWithoutUpdatedByNestedInput
    importBatches?: ImportBatchUncheckedUpdateManyWithoutImportedByNestedInput
    createdTeamMembers?: TeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    createdResourceLinks?: ResourceLinkUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithoutUpdatedTemplatesInput = {
    update: XOR<UserUpdateWithoutUpdatedTemplatesInput, UserUncheckedUpdateWithoutUpdatedTemplatesInput>
    create: XOR<UserCreateWithoutUpdatedTemplatesInput, UserUncheckedCreateWithoutUpdatedTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedTemplatesInput, UserUncheckedUpdateWithoutUpdatedTemplatesInput>
  }

  export type UserUpdateWithoutUpdatedTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTemplates?: TemplateUpdateManyWithoutCreatedByNestedInput
    importBatches?: ImportBatchUpdateManyWithoutImportedByNestedInput
    createdTeamMembers?: TeamMemberUpdateManyWithoutCreatedByNestedInput
    createdResourceLinks?: ResourceLinkUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTemplates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    importBatches?: ImportBatchUncheckedUpdateManyWithoutImportedByNestedInput
    createdTeamMembers?: TeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    createdResourceLinks?: ResourceLinkUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ImportBatchUpsertWithoutTemplatesInput = {
    update: XOR<ImportBatchUpdateWithoutTemplatesInput, ImportBatchUncheckedUpdateWithoutTemplatesInput>
    create: XOR<ImportBatchCreateWithoutTemplatesInput, ImportBatchUncheckedCreateWithoutTemplatesInput>
    where?: ImportBatchWhereInput
  }

  export type ImportBatchUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: ImportBatchWhereInput
    data: XOR<ImportBatchUpdateWithoutTemplatesInput, ImportBatchUncheckedUpdateWithoutTemplatesInput>
  }

  export type ImportBatchUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    status?: EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus
    totalRecords?: IntFieldUpdateOperationsInput | number
    successfulCount?: IntFieldUpdateOperationsInput | number
    skippedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importedBy?: UserUpdateOneRequiredWithoutImportBatchesNestedInput
  }

  export type ImportBatchUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    status?: EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus
    totalRecords?: IntFieldUpdateOperationsInput | number
    successfulCount?: IntFieldUpdateOperationsInput | number
    skippedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    importedById?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutImportBatchesInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTemplates?: TemplateCreateNestedManyWithoutCreatedByInput
    updatedTemplates?: TemplateCreateNestedManyWithoutUpdatedByInput
    createdTeamMembers?: TeamMemberCreateNestedManyWithoutCreatedByInput
    createdResourceLinks?: ResourceLinkCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutImportBatchesInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTemplates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTemplates?: TemplateUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeamMembers?: TeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    createdResourceLinks?: ResourceLinkUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutImportBatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImportBatchesInput, UserUncheckedCreateWithoutImportBatchesInput>
  }

  export type TemplateCreateWithoutImportBatchInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedTemplatesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedTemplatesInput
  }

  export type TemplateUncheckedCreateWithoutImportBatchInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    createdById?: string | null
    updatedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateOrConnectWithoutImportBatchInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutImportBatchInput, TemplateUncheckedCreateWithoutImportBatchInput>
  }

  export type TemplateCreateManyImportBatchInputEnvelope = {
    data: TemplateCreateManyImportBatchInput | TemplateCreateManyImportBatchInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutImportBatchesInput = {
    update: XOR<UserUpdateWithoutImportBatchesInput, UserUncheckedUpdateWithoutImportBatchesInput>
    create: XOR<UserCreateWithoutImportBatchesInput, UserUncheckedCreateWithoutImportBatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImportBatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImportBatchesInput, UserUncheckedUpdateWithoutImportBatchesInput>
  }

  export type UserUpdateWithoutImportBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTemplates?: TemplateUpdateManyWithoutCreatedByNestedInput
    updatedTemplates?: TemplateUpdateManyWithoutUpdatedByNestedInput
    createdTeamMembers?: TeamMemberUpdateManyWithoutCreatedByNestedInput
    createdResourceLinks?: ResourceLinkUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutImportBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTemplates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTemplates?: TemplateUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeamMembers?: TeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    createdResourceLinks?: ResourceLinkUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TemplateUpsertWithWhereUniqueWithoutImportBatchInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutImportBatchInput, TemplateUncheckedUpdateWithoutImportBatchInput>
    create: XOR<TemplateCreateWithoutImportBatchInput, TemplateUncheckedCreateWithoutImportBatchInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutImportBatchInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutImportBatchInput, TemplateUncheckedUpdateWithoutImportBatchInput>
  }

  export type TemplateUpdateManyWithWhereWithoutImportBatchInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutImportBatchInput>
  }

  export type UserCreateWithoutCreatedTeamMembersInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTemplates?: TemplateCreateNestedManyWithoutCreatedByInput
    updatedTemplates?: TemplateCreateNestedManyWithoutUpdatedByInput
    importBatches?: ImportBatchCreateNestedManyWithoutImportedByInput
    createdResourceLinks?: ResourceLinkCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedTeamMembersInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTemplates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTemplates?: TemplateUncheckedCreateNestedManyWithoutUpdatedByInput
    importBatches?: ImportBatchUncheckedCreateNestedManyWithoutImportedByInput
    createdResourceLinks?: ResourceLinkUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedTeamMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTeamMembersInput, UserUncheckedCreateWithoutCreatedTeamMembersInput>
  }

  export type UserUpsertWithoutCreatedTeamMembersInput = {
    update: XOR<UserUpdateWithoutCreatedTeamMembersInput, UserUncheckedUpdateWithoutCreatedTeamMembersInput>
    create: XOR<UserCreateWithoutCreatedTeamMembersInput, UserUncheckedCreateWithoutCreatedTeamMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTeamMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTeamMembersInput, UserUncheckedUpdateWithoutCreatedTeamMembersInput>
  }

  export type UserUpdateWithoutCreatedTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTemplates?: TemplateUpdateManyWithoutCreatedByNestedInput
    updatedTemplates?: TemplateUpdateManyWithoutUpdatedByNestedInput
    importBatches?: ImportBatchUpdateManyWithoutImportedByNestedInput
    createdResourceLinks?: ResourceLinkUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTemplates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTemplates?: TemplateUncheckedUpdateManyWithoutUpdatedByNestedInput
    importBatches?: ImportBatchUncheckedUpdateManyWithoutImportedByNestedInput
    createdResourceLinks?: ResourceLinkUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutCreatedResourceLinksInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTemplates?: TemplateCreateNestedManyWithoutCreatedByInput
    updatedTemplates?: TemplateCreateNestedManyWithoutUpdatedByInput
    importBatches?: ImportBatchCreateNestedManyWithoutImportedByInput
    createdTeamMembers?: TeamMemberCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedResourceLinksInput = {
    id?: string
    employeeId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTemplates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTemplates?: TemplateUncheckedCreateNestedManyWithoutUpdatedByInput
    importBatches?: ImportBatchUncheckedCreateNestedManyWithoutImportedByInput
    createdTeamMembers?: TeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedResourceLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedResourceLinksInput, UserUncheckedCreateWithoutCreatedResourceLinksInput>
  }

  export type UserUpsertWithoutCreatedResourceLinksInput = {
    update: XOR<UserUpdateWithoutCreatedResourceLinksInput, UserUncheckedUpdateWithoutCreatedResourceLinksInput>
    create: XOR<UserCreateWithoutCreatedResourceLinksInput, UserUncheckedCreateWithoutCreatedResourceLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedResourceLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedResourceLinksInput, UserUncheckedUpdateWithoutCreatedResourceLinksInput>
  }

  export type UserUpdateWithoutCreatedResourceLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTemplates?: TemplateUpdateManyWithoutCreatedByNestedInput
    updatedTemplates?: TemplateUpdateManyWithoutUpdatedByNestedInput
    importBatches?: ImportBatchUpdateManyWithoutImportedByNestedInput
    createdTeamMembers?: TeamMemberUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedResourceLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTemplates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTemplates?: TemplateUncheckedUpdateManyWithoutUpdatedByNestedInput
    importBatches?: ImportBatchUncheckedUpdateManyWithoutImportedByNestedInput
    createdTeamMembers?: TeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TemplateCreateManyCreatedByInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    updatedById?: string | null
    importBatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateManyUpdatedByInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    createdById?: string | null
    importBatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImportBatchCreateManyImportedByInput = {
    id?: string
    fileName: string
    fileType: string
    status?: $Enums.ImportStatus
    totalRecords?: number
    successfulCount?: number
    skippedCount?: number
    failedCount?: number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TeamMemberCreateManyCreatedByInput = {
    id?: string
    name: string
    designation: string
    photoUrl: string
    bio?: string | null
    email?: string | null
    phone?: string | null
    department?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceLinkCreateManyCreatedByInput = {
    id?: string
    category: $Enums.LinkCategory
    title: string
    url: string
    description?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: UserUpdateOneWithoutUpdatedTemplatesNestedInput
    importBatch?: ImportBatchUpdateOneWithoutTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    importBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    importBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedTemplatesNestedInput
    importBatch?: ImportBatchUpdateOneWithoutTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    importBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    importBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportBatchUpdateWithoutImportedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    status?: EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus
    totalRecords?: IntFieldUpdateOperationsInput | number
    successfulCount?: IntFieldUpdateOperationsInput | number
    skippedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUpdateManyWithoutImportBatchNestedInput
  }

  export type ImportBatchUncheckedUpdateWithoutImportedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    status?: EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus
    totalRecords?: IntFieldUpdateOperationsInput | number
    successfulCount?: IntFieldUpdateOperationsInput | number
    skippedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUncheckedUpdateManyWithoutImportBatchNestedInput
  }

  export type ImportBatchUncheckedUpdateManyWithoutImportedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    status?: EnumImportStatusFieldUpdateOperationsInput | $Enums.ImportStatus
    totalRecords?: IntFieldUpdateOperationsInput | number
    successfulCount?: IntFieldUpdateOperationsInput | number
    skippedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    errorReport?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceLinkUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumLinkCategoryFieldUpdateOperationsInput | $Enums.LinkCategory
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceLinkUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumLinkCategoryFieldUpdateOperationsInput | $Enums.LinkCategory
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceLinkUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumLinkCategoryFieldUpdateOperationsInput | $Enums.LinkCategory
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateManyImportBatchInput = {
    id?: string
    dltTemplateId: string
    name: string
    dueDate: string
    content: string
    ownerName: string
    remarks?: string | null
    attachmentLink1?: string | null
    attachmentLink2?: string | null
    isActive?: boolean
    createdById?: string | null
    updatedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateWithoutImportBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedTemplatesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateWithoutImportBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyWithoutImportBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    dltTemplateId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink1?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentLink2?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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