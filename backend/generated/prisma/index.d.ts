
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
 * Model Proveedor
 * 
 */
export type Proveedor = $Result.DefaultSelection<Prisma.$ProveedorPayload>
/**
 * Model Medicamento
 * 
 */
export type Medicamento = $Result.DefaultSelection<Prisma.$MedicamentoPayload>
/**
 * Model Devolucion
 * 
 */
export type Devolucion = $Result.DefaultSelection<Prisma.$DevolucionPayload>
/**
 * Model Inventario
 * 
 */
export type Inventario = $Result.DefaultSelection<Prisma.$InventarioPayload>
/**
 * Model Receta
 * 
 */
export type Receta = $Result.DefaultSelection<Prisma.$RecetaPayload>
/**
 * Model RecetaMedicamento
 * 
 */
export type RecetaMedicamento = $Result.DefaultSelection<Prisma.$RecetaMedicamentoPayload>
/**
 * Model Venta
 * 
 */
export type Venta = $Result.DefaultSelection<Prisma.$VentaPayload>
/**
 * Model VentaMedicamento
 * 
 */
export type VentaMedicamento = $Result.DefaultSelection<Prisma.$VentaMedicamentoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FormaFarmaceutica: {
  comprimido: 'comprimido',
  solucion: 'solucion'
};

export type FormaFarmaceutica = (typeof FormaFarmaceutica)[keyof typeof FormaFarmaceutica]


export const Presentacion: {
  caja5: 'caja5',
  caja10: 'caja10',
  solucion50: 'solucion50',
  solucion80: 'solucion80'
};

export type Presentacion = (typeof Presentacion)[keyof typeof Presentacion]


export const Estado: {
  pendiente: 'pendiente',
  recibido: 'recibido'
};

export type Estado = (typeof Estado)[keyof typeof Estado]


export const FormaPago: {
  efectivo: 'efectivo',
  tarjeta: 'tarjeta'
};

export type FormaPago = (typeof FormaPago)[keyof typeof FormaPago]


export const Perfil: {
  farmaceutico: 'farmaceutico',
  administrativo: 'administrativo'
};

export type Perfil = (typeof Perfil)[keyof typeof Perfil]

}

export type FormaFarmaceutica = $Enums.FormaFarmaceutica

export const FormaFarmaceutica: typeof $Enums.FormaFarmaceutica

export type Presentacion = $Enums.Presentacion

export const Presentacion: typeof $Enums.Presentacion

export type Estado = $Enums.Estado

export const Estado: typeof $Enums.Estado

export type FormaPago = $Enums.FormaPago

export const FormaPago: typeof $Enums.FormaPago

export type Perfil = $Enums.Perfil

export const Perfil: typeof $Enums.Perfil

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Proveedors
 * const proveedors = await prisma.proveedor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Proveedors
   * const proveedors = await prisma.proveedor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.proveedor`: Exposes CRUD operations for the **Proveedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proveedors
    * const proveedors = await prisma.proveedor.findMany()
    * ```
    */
  get proveedor(): Prisma.ProveedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicamento`: Exposes CRUD operations for the **Medicamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicamentos
    * const medicamentos = await prisma.medicamento.findMany()
    * ```
    */
  get medicamento(): Prisma.MedicamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devolucion`: Exposes CRUD operations for the **Devolucion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devolucions
    * const devolucions = await prisma.devolucion.findMany()
    * ```
    */
  get devolucion(): Prisma.DevolucionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventario`: Exposes CRUD operations for the **Inventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventarios
    * const inventarios = await prisma.inventario.findMany()
    * ```
    */
  get inventario(): Prisma.InventarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receta`: Exposes CRUD operations for the **Receta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recetas
    * const recetas = await prisma.receta.findMany()
    * ```
    */
  get receta(): Prisma.RecetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recetaMedicamento`: Exposes CRUD operations for the **RecetaMedicamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecetaMedicamentos
    * const recetaMedicamentos = await prisma.recetaMedicamento.findMany()
    * ```
    */
  get recetaMedicamento(): Prisma.RecetaMedicamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venta`: Exposes CRUD operations for the **Venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.venta.findMany()
    * ```
    */
  get venta(): Prisma.VentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ventaMedicamento`: Exposes CRUD operations for the **VentaMedicamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VentaMedicamentos
    * const ventaMedicamentos = await prisma.ventaMedicamento.findMany()
    * ```
    */
  get ventaMedicamento(): Prisma.VentaMedicamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Proveedor: 'Proveedor',
    Medicamento: 'Medicamento',
    Devolucion: 'Devolucion',
    Inventario: 'Inventario',
    Receta: 'Receta',
    RecetaMedicamento: 'RecetaMedicamento',
    Venta: 'Venta',
    VentaMedicamento: 'VentaMedicamento',
    Usuario: 'Usuario',
    Cliente: 'Cliente'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "proveedor" | "medicamento" | "devolucion" | "inventario" | "receta" | "recetaMedicamento" | "venta" | "ventaMedicamento" | "usuario" | "cliente"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Proveedor: {
        payload: Prisma.$ProveedorPayload<ExtArgs>
        fields: Prisma.ProveedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProveedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProveedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findFirst: {
            args: Prisma.ProveedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProveedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findMany: {
            args: Prisma.ProveedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          create: {
            args: Prisma.ProveedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          createMany: {
            args: Prisma.ProveedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProveedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          update: {
            args: Prisma.ProveedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          deleteMany: {
            args: Prisma.ProveedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProveedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProveedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          aggregate: {
            args: Prisma.ProveedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProveedor>
          }
          groupBy: {
            args: Prisma.ProveedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProveedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProveedorCountArgs<ExtArgs>
            result: $Utils.Optional<ProveedorCountAggregateOutputType> | number
          }
        }
      }
      Medicamento: {
        payload: Prisma.$MedicamentoPayload<ExtArgs>
        fields: Prisma.MedicamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          findFirst: {
            args: Prisma.MedicamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          findMany: {
            args: Prisma.MedicamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>[]
          }
          create: {
            args: Prisma.MedicamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          createMany: {
            args: Prisma.MedicamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedicamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          update: {
            args: Prisma.MedicamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          deleteMany: {
            args: Prisma.MedicamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          aggregate: {
            args: Prisma.MedicamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicamento>
          }
          groupBy: {
            args: Prisma.MedicamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicamentoCountArgs<ExtArgs>
            result: $Utils.Optional<MedicamentoCountAggregateOutputType> | number
          }
        }
      }
      Devolucion: {
        payload: Prisma.$DevolucionPayload<ExtArgs>
        fields: Prisma.DevolucionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevolucionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevolucionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          findFirst: {
            args: Prisma.DevolucionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevolucionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          findMany: {
            args: Prisma.DevolucionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>[]
          }
          create: {
            args: Prisma.DevolucionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          createMany: {
            args: Prisma.DevolucionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DevolucionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          update: {
            args: Prisma.DevolucionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          deleteMany: {
            args: Prisma.DevolucionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevolucionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DevolucionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          aggregate: {
            args: Prisma.DevolucionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevolucion>
          }
          groupBy: {
            args: Prisma.DevolucionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevolucionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevolucionCountArgs<ExtArgs>
            result: $Utils.Optional<DevolucionCountAggregateOutputType> | number
          }
        }
      }
      Inventario: {
        payload: Prisma.$InventarioPayload<ExtArgs>
        fields: Prisma.InventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findFirst: {
            args: Prisma.InventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findMany: {
            args: Prisma.InventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>[]
          }
          create: {
            args: Prisma.InventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          createMany: {
            args: Prisma.InventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          update: {
            args: Prisma.InventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          deleteMany: {
            args: Prisma.InventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          aggregate: {
            args: Prisma.InventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventario>
          }
          groupBy: {
            args: Prisma.InventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventarioCountArgs<ExtArgs>
            result: $Utils.Optional<InventarioCountAggregateOutputType> | number
          }
        }
      }
      Receta: {
        payload: Prisma.$RecetaPayload<ExtArgs>
        fields: Prisma.RecetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          findFirst: {
            args: Prisma.RecetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          findMany: {
            args: Prisma.RecetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>[]
          }
          create: {
            args: Prisma.RecetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          createMany: {
            args: Prisma.RecetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RecetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          update: {
            args: Prisma.RecetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          deleteMany: {
            args: Prisma.RecetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          aggregate: {
            args: Prisma.RecetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceta>
          }
          groupBy: {
            args: Prisma.RecetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecetaCountArgs<ExtArgs>
            result: $Utils.Optional<RecetaCountAggregateOutputType> | number
          }
        }
      }
      RecetaMedicamento: {
        payload: Prisma.$RecetaMedicamentoPayload<ExtArgs>
        fields: Prisma.RecetaMedicamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecetaMedicamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaMedicamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecetaMedicamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaMedicamentoPayload>
          }
          findFirst: {
            args: Prisma.RecetaMedicamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaMedicamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecetaMedicamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaMedicamentoPayload>
          }
          findMany: {
            args: Prisma.RecetaMedicamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaMedicamentoPayload>[]
          }
          create: {
            args: Prisma.RecetaMedicamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaMedicamentoPayload>
          }
          createMany: {
            args: Prisma.RecetaMedicamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RecetaMedicamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaMedicamentoPayload>
          }
          update: {
            args: Prisma.RecetaMedicamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaMedicamentoPayload>
          }
          deleteMany: {
            args: Prisma.RecetaMedicamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecetaMedicamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecetaMedicamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaMedicamentoPayload>
          }
          aggregate: {
            args: Prisma.RecetaMedicamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecetaMedicamento>
          }
          groupBy: {
            args: Prisma.RecetaMedicamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecetaMedicamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecetaMedicamentoCountArgs<ExtArgs>
            result: $Utils.Optional<RecetaMedicamentoCountAggregateOutputType> | number
          }
        }
      }
      Venta: {
        payload: Prisma.$VentaPayload<ExtArgs>
        fields: Prisma.VentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findFirst: {
            args: Prisma.VentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findMany: {
            args: Prisma.VentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          create: {
            args: Prisma.VentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          createMany: {
            args: Prisma.VentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          update: {
            args: Prisma.VentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          deleteMany: {
            args: Prisma.VentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          aggregate: {
            args: Prisma.VentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta>
          }
          groupBy: {
            args: Prisma.VentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaCountArgs<ExtArgs>
            result: $Utils.Optional<VentaCountAggregateOutputType> | number
          }
        }
      }
      VentaMedicamento: {
        payload: Prisma.$VentaMedicamentoPayload<ExtArgs>
        fields: Prisma.VentaMedicamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaMedicamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaMedicamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaMedicamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaMedicamentoPayload>
          }
          findFirst: {
            args: Prisma.VentaMedicamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaMedicamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaMedicamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaMedicamentoPayload>
          }
          findMany: {
            args: Prisma.VentaMedicamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaMedicamentoPayload>[]
          }
          create: {
            args: Prisma.VentaMedicamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaMedicamentoPayload>
          }
          createMany: {
            args: Prisma.VentaMedicamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VentaMedicamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaMedicamentoPayload>
          }
          update: {
            args: Prisma.VentaMedicamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaMedicamentoPayload>
          }
          deleteMany: {
            args: Prisma.VentaMedicamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaMedicamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VentaMedicamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaMedicamentoPayload>
          }
          aggregate: {
            args: Prisma.VentaMedicamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVentaMedicamento>
          }
          groupBy: {
            args: Prisma.VentaMedicamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaMedicamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaMedicamentoCountArgs<ExtArgs>
            result: $Utils.Optional<VentaMedicamentoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    proveedor?: ProveedorOmit
    medicamento?: MedicamentoOmit
    devolucion?: DevolucionOmit
    inventario?: InventarioOmit
    receta?: RecetaOmit
    recetaMedicamento?: RecetaMedicamentoOmit
    venta?: VentaOmit
    ventaMedicamento?: VentaMedicamentoOmit
    usuario?: UsuarioOmit
    cliente?: ClienteOmit
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
   * Count Type ProveedorCountOutputType
   */

  export type ProveedorCountOutputType = {
    medicamentos: number
  }

  export type ProveedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicamentos?: boolean | ProveedorCountOutputTypeCountMedicamentosArgs
  }

  // Custom InputTypes
  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProveedorCountOutputType
     */
    select?: ProveedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeCountMedicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicamentoWhereInput
  }


  /**
   * Count Type MedicamentoCountOutputType
   */

  export type MedicamentoCountOutputType = {
    devoluciones: number
    inventarios: number
    recetasMedicamentos: number
    ventaMedicamentos: number
  }

  export type MedicamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devoluciones?: boolean | MedicamentoCountOutputTypeCountDevolucionesArgs
    inventarios?: boolean | MedicamentoCountOutputTypeCountInventariosArgs
    recetasMedicamentos?: boolean | MedicamentoCountOutputTypeCountRecetasMedicamentosArgs
    ventaMedicamentos?: boolean | MedicamentoCountOutputTypeCountVentaMedicamentosArgs
  }

  // Custom InputTypes
  /**
   * MedicamentoCountOutputType without action
   */
  export type MedicamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicamentoCountOutputType
     */
    select?: MedicamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicamentoCountOutputType without action
   */
  export type MedicamentoCountOutputTypeCountDevolucionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevolucionWhereInput
  }

  /**
   * MedicamentoCountOutputType without action
   */
  export type MedicamentoCountOutputTypeCountInventariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarioWhereInput
  }

  /**
   * MedicamentoCountOutputType without action
   */
  export type MedicamentoCountOutputTypeCountRecetasMedicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetaMedicamentoWhereInput
  }

  /**
   * MedicamentoCountOutputType without action
   */
  export type MedicamentoCountOutputTypeCountVentaMedicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaMedicamentoWhereInput
  }


  /**
   * Count Type RecetaCountOutputType
   */

  export type RecetaCountOutputType = {
    recetaMedicamentos: number
  }

  export type RecetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetaMedicamentos?: boolean | RecetaCountOutputTypeCountRecetaMedicamentosArgs
  }

  // Custom InputTypes
  /**
   * RecetaCountOutputType without action
   */
  export type RecetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaCountOutputType
     */
    select?: RecetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecetaCountOutputType without action
   */
  export type RecetaCountOutputTypeCountRecetaMedicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetaMedicamentoWhereInput
  }


  /**
   * Count Type VentaCountOutputType
   */

  export type VentaCountOutputType = {
    ventaMedicamentos: number
  }

  export type VentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventaMedicamentos?: boolean | VentaCountOutputTypeCountVentaMedicamentosArgs
  }

  // Custom InputTypes
  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaCountOutputType
     */
    select?: VentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeCountVentaMedicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaMedicamentoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    ventas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | UsuarioCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    ventas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | ClienteCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Proveedor
   */

  export type AggregateProveedor = {
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  export type ProveedorAvgAggregateOutputType = {
    id: number | null
    telefono: number | null
  }

  export type ProveedorSumAggregateOutputType = {
    id: number | null
    telefono: number | null
  }

  export type ProveedorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    telefono: number | null
  }

  export type ProveedorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    telefono: number | null
  }

  export type ProveedorCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    telefono: number
    _all: number
  }


  export type ProveedorAvgAggregateInputType = {
    id?: true
    telefono?: true
  }

  export type ProveedorSumAggregateInputType = {
    id?: true
    telefono?: true
  }

  export type ProveedorMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
  }

  export type ProveedorMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
  }

  export type ProveedorCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
    _all?: true
  }

  export type ProveedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedor to aggregate.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proveedors
    **/
    _count?: true | ProveedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProveedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProveedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProveedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProveedorMaxAggregateInputType
  }

  export type GetProveedorAggregateType<T extends ProveedorAggregateArgs> = {
        [P in keyof T & keyof AggregateProveedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProveedor[P]>
      : GetScalarType<T[P], AggregateProveedor[P]>
  }




  export type ProveedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProveedorWhereInput
    orderBy?: ProveedorOrderByWithAggregationInput | ProveedorOrderByWithAggregationInput[]
    by: ProveedorScalarFieldEnum[] | ProveedorScalarFieldEnum
    having?: ProveedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProveedorCountAggregateInputType | true
    _avg?: ProveedorAvgAggregateInputType
    _sum?: ProveedorSumAggregateInputType
    _min?: ProveedorMinAggregateInputType
    _max?: ProveedorMaxAggregateInputType
  }

  export type ProveedorGroupByOutputType = {
    id: number
    nombre: string
    direccion: string
    telefono: number
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  type GetProveedorGroupByPayload<T extends ProveedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProveedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProveedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
            : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
        }
      >
    >


  export type ProveedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    medicamentos?: boolean | Proveedor$medicamentosArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proveedor"]>



  export type ProveedorSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
  }

  export type ProveedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "telefono", ExtArgs["result"]["proveedor"]>
  export type ProveedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicamentos?: boolean | Proveedor$medicamentosArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProveedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proveedor"
    objects: {
      medicamentos: Prisma.$MedicamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      direccion: string
      telefono: number
    }, ExtArgs["result"]["proveedor"]>
    composites: {}
  }

  type ProveedorGetPayload<S extends boolean | null | undefined | ProveedorDefaultArgs> = $Result.GetResult<Prisma.$ProveedorPayload, S>

  type ProveedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProveedorCountAggregateInputType | true
    }

  export interface ProveedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proveedor'], meta: { name: 'Proveedor' } }
    /**
     * Find zero or one Proveedor that matches the filter.
     * @param {ProveedorFindUniqueArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProveedorFindUniqueArgs>(args: SelectSubset<T, ProveedorFindUniqueArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proveedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProveedorFindUniqueOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProveedorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProveedorFindFirstArgs>(args?: SelectSubset<T, ProveedorFindFirstArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProveedorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proveedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proveedors
     * const proveedors = await prisma.proveedor.findMany()
     * 
     * // Get first 10 Proveedors
     * const proveedors = await prisma.proveedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proveedorWithIdOnly = await prisma.proveedor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProveedorFindManyArgs>(args?: SelectSubset<T, ProveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proveedor.
     * @param {ProveedorCreateArgs} args - Arguments to create a Proveedor.
     * @example
     * // Create one Proveedor
     * const Proveedor = await prisma.proveedor.create({
     *   data: {
     *     // ... data to create a Proveedor
     *   }
     * })
     * 
     */
    create<T extends ProveedorCreateArgs>(args: SelectSubset<T, ProveedorCreateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proveedors.
     * @param {ProveedorCreateManyArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProveedorCreateManyArgs>(args?: SelectSubset<T, ProveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Proveedor.
     * @param {ProveedorDeleteArgs} args - Arguments to delete one Proveedor.
     * @example
     * // Delete one Proveedor
     * const Proveedor = await prisma.proveedor.delete({
     *   where: {
     *     // ... filter to delete one Proveedor
     *   }
     * })
     * 
     */
    delete<T extends ProveedorDeleteArgs>(args: SelectSubset<T, ProveedorDeleteArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proveedor.
     * @param {ProveedorUpdateArgs} args - Arguments to update one Proveedor.
     * @example
     * // Update one Proveedor
     * const proveedor = await prisma.proveedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProveedorUpdateArgs>(args: SelectSubset<T, ProveedorUpdateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proveedors.
     * @param {ProveedorDeleteManyArgs} args - Arguments to filter Proveedors to delete.
     * @example
     * // Delete a few Proveedors
     * const { count } = await prisma.proveedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProveedorDeleteManyArgs>(args?: SelectSubset<T, ProveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProveedorUpdateManyArgs>(args: SelectSubset<T, ProveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proveedor.
     * @param {ProveedorUpsertArgs} args - Arguments to update or create a Proveedor.
     * @example
     * // Update or create a Proveedor
     * const proveedor = await prisma.proveedor.upsert({
     *   create: {
     *     // ... data to create a Proveedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proveedor we want to update
     *   }
     * })
     */
    upsert<T extends ProveedorUpsertArgs>(args: SelectSubset<T, ProveedorUpsertArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorCountArgs} args - Arguments to filter Proveedors to count.
     * @example
     * // Count the number of Proveedors
     * const count = await prisma.proveedor.count({
     *   where: {
     *     // ... the filter for the Proveedors we want to count
     *   }
     * })
    **/
    count<T extends ProveedorCountArgs>(
      args?: Subset<T, ProveedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProveedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProveedorAggregateArgs>(args: Subset<T, ProveedorAggregateArgs>): Prisma.PrismaPromise<GetProveedorAggregateType<T>>

    /**
     * Group by Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorGroupByArgs} args - Group by arguments.
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
      T extends ProveedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProveedorGroupByArgs['orderBy'] }
        : { orderBy?: ProveedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proveedor model
   */
  readonly fields: ProveedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proveedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProveedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicamentos<T extends Proveedor$medicamentosArgs<ExtArgs> = {}>(args?: Subset<T, Proveedor$medicamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Proveedor model
   */
  interface ProveedorFieldRefs {
    readonly id: FieldRef<"Proveedor", 'Int'>
    readonly nombre: FieldRef<"Proveedor", 'String'>
    readonly direccion: FieldRef<"Proveedor", 'String'>
    readonly telefono: FieldRef<"Proveedor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Proveedor findUnique
   */
  export type ProveedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findUniqueOrThrow
   */
  export type ProveedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findFirst
   */
  export type ProveedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findFirstOrThrow
   */
  export type ProveedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findMany
   */
  export type ProveedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedors to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor create
   */
  export type ProveedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Proveedor.
     */
    data: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
  }

  /**
   * Proveedor createMany
   */
  export type ProveedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proveedors.
     */
    data: ProveedorCreateManyInput | ProveedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proveedor update
   */
  export type ProveedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Proveedor.
     */
    data: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
    /**
     * Choose, which Proveedor to update.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor updateMany
   */
  export type ProveedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proveedors.
     */
    data: XOR<ProveedorUpdateManyMutationInput, ProveedorUncheckedUpdateManyInput>
    /**
     * Filter which Proveedors to update
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to update.
     */
    limit?: number
  }

  /**
   * Proveedor upsert
   */
  export type ProveedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Proveedor to update in case it exists.
     */
    where: ProveedorWhereUniqueInput
    /**
     * In case the Proveedor found by the `where` argument doesn't exist, create a new Proveedor with this data.
     */
    create: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
    /**
     * In case the Proveedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
  }

  /**
   * Proveedor delete
   */
  export type ProveedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter which Proveedor to delete.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor deleteMany
   */
  export type ProveedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedors to delete
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to delete.
     */
    limit?: number
  }

  /**
   * Proveedor.medicamentos
   */
  export type Proveedor$medicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    where?: MedicamentoWhereInput
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    cursor?: MedicamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }

  /**
   * Proveedor without action
   */
  export type ProveedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
  }


  /**
   * Model Medicamento
   */

  export type AggregateMedicamento = {
    _count: MedicamentoCountAggregateOutputType | null
    _avg: MedicamentoAvgAggregateOutputType | null
    _sum: MedicamentoSumAggregateOutputType | null
    _min: MedicamentoMinAggregateOutputType | null
    _max: MedicamentoMaxAggregateOutputType | null
  }

  export type MedicamentoAvgAggregateOutputType = {
    id: number | null
    proveedorId: number | null
    stock: number | null
  }

  export type MedicamentoSumAggregateOutputType = {
    id: number | null
    proveedorId: number | null
    stock: number | null
  }

  export type MedicamentoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    principioActivo: string | null
    laboratorio: string | null
    proveedorId: number | null
    fechaVencimiento: Date | null
    formaFarmaceutica: $Enums.FormaFarmaceutica | null
    presentacion: $Enums.Presentacion | null
    lote: string | null
    stock: number | null
  }

  export type MedicamentoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    principioActivo: string | null
    laboratorio: string | null
    proveedorId: number | null
    fechaVencimiento: Date | null
    formaFarmaceutica: $Enums.FormaFarmaceutica | null
    presentacion: $Enums.Presentacion | null
    lote: string | null
    stock: number | null
  }

  export type MedicamentoCountAggregateOutputType = {
    id: number
    nombre: number
    principioActivo: number
    laboratorio: number
    proveedorId: number
    fechaVencimiento: number
    formaFarmaceutica: number
    presentacion: number
    lote: number
    stock: number
    _all: number
  }


  export type MedicamentoAvgAggregateInputType = {
    id?: true
    proveedorId?: true
    stock?: true
  }

  export type MedicamentoSumAggregateInputType = {
    id?: true
    proveedorId?: true
    stock?: true
  }

  export type MedicamentoMinAggregateInputType = {
    id?: true
    nombre?: true
    principioActivo?: true
    laboratorio?: true
    proveedorId?: true
    fechaVencimiento?: true
    formaFarmaceutica?: true
    presentacion?: true
    lote?: true
    stock?: true
  }

  export type MedicamentoMaxAggregateInputType = {
    id?: true
    nombre?: true
    principioActivo?: true
    laboratorio?: true
    proveedorId?: true
    fechaVencimiento?: true
    formaFarmaceutica?: true
    presentacion?: true
    lote?: true
    stock?: true
  }

  export type MedicamentoCountAggregateInputType = {
    id?: true
    nombre?: true
    principioActivo?: true
    laboratorio?: true
    proveedorId?: true
    fechaVencimiento?: true
    formaFarmaceutica?: true
    presentacion?: true
    lote?: true
    stock?: true
    _all?: true
  }

  export type MedicamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicamento to aggregate.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicamentos
    **/
    _count?: true | MedicamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicamentoMaxAggregateInputType
  }

  export type GetMedicamentoAggregateType<T extends MedicamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicamento[P]>
      : GetScalarType<T[P], AggregateMedicamento[P]>
  }




  export type MedicamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicamentoWhereInput
    orderBy?: MedicamentoOrderByWithAggregationInput | MedicamentoOrderByWithAggregationInput[]
    by: MedicamentoScalarFieldEnum[] | MedicamentoScalarFieldEnum
    having?: MedicamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicamentoCountAggregateInputType | true
    _avg?: MedicamentoAvgAggregateInputType
    _sum?: MedicamentoSumAggregateInputType
    _min?: MedicamentoMinAggregateInputType
    _max?: MedicamentoMaxAggregateInputType
  }

  export type MedicamentoGroupByOutputType = {
    id: number
    nombre: string
    principioActivo: string
    laboratorio: string
    proveedorId: number
    fechaVencimiento: Date
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    _count: MedicamentoCountAggregateOutputType | null
    _avg: MedicamentoAvgAggregateOutputType | null
    _sum: MedicamentoSumAggregateOutputType | null
    _min: MedicamentoMinAggregateOutputType | null
    _max: MedicamentoMaxAggregateOutputType | null
  }

  type GetMedicamentoGroupByPayload<T extends MedicamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicamentoGroupByOutputType[P]>
            : GetScalarType<T[P], MedicamentoGroupByOutputType[P]>
        }
      >
    >


  export type MedicamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    principioActivo?: boolean
    laboratorio?: boolean
    proveedorId?: boolean
    fechaVencimiento?: boolean
    formaFarmaceutica?: boolean
    presentacion?: boolean
    lote?: boolean
    stock?: boolean
    devoluciones?: boolean | Medicamento$devolucionesArgs<ExtArgs>
    inventarios?: boolean | Medicamento$inventariosArgs<ExtArgs>
    proveedor?: boolean | ProveedorDefaultArgs<ExtArgs>
    recetasMedicamentos?: boolean | Medicamento$recetasMedicamentosArgs<ExtArgs>
    ventaMedicamentos?: boolean | Medicamento$ventaMedicamentosArgs<ExtArgs>
    _count?: boolean | MedicamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicamento"]>



  export type MedicamentoSelectScalar = {
    id?: boolean
    nombre?: boolean
    principioActivo?: boolean
    laboratorio?: boolean
    proveedorId?: boolean
    fechaVencimiento?: boolean
    formaFarmaceutica?: boolean
    presentacion?: boolean
    lote?: boolean
    stock?: boolean
  }

  export type MedicamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "principioActivo" | "laboratorio" | "proveedorId" | "fechaVencimiento" | "formaFarmaceutica" | "presentacion" | "lote" | "stock", ExtArgs["result"]["medicamento"]>
  export type MedicamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devoluciones?: boolean | Medicamento$devolucionesArgs<ExtArgs>
    inventarios?: boolean | Medicamento$inventariosArgs<ExtArgs>
    proveedor?: boolean | ProveedorDefaultArgs<ExtArgs>
    recetasMedicamentos?: boolean | Medicamento$recetasMedicamentosArgs<ExtArgs>
    ventaMedicamentos?: boolean | Medicamento$ventaMedicamentosArgs<ExtArgs>
    _count?: boolean | MedicamentoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MedicamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicamento"
    objects: {
      devoluciones: Prisma.$DevolucionPayload<ExtArgs>[]
      inventarios: Prisma.$InventarioPayload<ExtArgs>[]
      proveedor: Prisma.$ProveedorPayload<ExtArgs>
      recetasMedicamentos: Prisma.$RecetaMedicamentoPayload<ExtArgs>[]
      ventaMedicamentos: Prisma.$VentaMedicamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      principioActivo: string
      laboratorio: string
      proveedorId: number
      fechaVencimiento: Date
      formaFarmaceutica: $Enums.FormaFarmaceutica
      presentacion: $Enums.Presentacion
      lote: string
      stock: number
    }, ExtArgs["result"]["medicamento"]>
    composites: {}
  }

  type MedicamentoGetPayload<S extends boolean | null | undefined | MedicamentoDefaultArgs> = $Result.GetResult<Prisma.$MedicamentoPayload, S>

  type MedicamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicamentoCountAggregateInputType | true
    }

  export interface MedicamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicamento'], meta: { name: 'Medicamento' } }
    /**
     * Find zero or one Medicamento that matches the filter.
     * @param {MedicamentoFindUniqueArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicamentoFindUniqueArgs>(args: SelectSubset<T, MedicamentoFindUniqueArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicamentoFindUniqueOrThrowArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindFirstArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicamentoFindFirstArgs>(args?: SelectSubset<T, MedicamentoFindFirstArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindFirstOrThrowArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicamentos
     * const medicamentos = await prisma.medicamento.findMany()
     * 
     * // Get first 10 Medicamentos
     * const medicamentos = await prisma.medicamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicamentoWithIdOnly = await prisma.medicamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicamentoFindManyArgs>(args?: SelectSubset<T, MedicamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicamento.
     * @param {MedicamentoCreateArgs} args - Arguments to create a Medicamento.
     * @example
     * // Create one Medicamento
     * const Medicamento = await prisma.medicamento.create({
     *   data: {
     *     // ... data to create a Medicamento
     *   }
     * })
     * 
     */
    create<T extends MedicamentoCreateArgs>(args: SelectSubset<T, MedicamentoCreateArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicamentos.
     * @param {MedicamentoCreateManyArgs} args - Arguments to create many Medicamentos.
     * @example
     * // Create many Medicamentos
     * const medicamento = await prisma.medicamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicamentoCreateManyArgs>(args?: SelectSubset<T, MedicamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medicamento.
     * @param {MedicamentoDeleteArgs} args - Arguments to delete one Medicamento.
     * @example
     * // Delete one Medicamento
     * const Medicamento = await prisma.medicamento.delete({
     *   where: {
     *     // ... filter to delete one Medicamento
     *   }
     * })
     * 
     */
    delete<T extends MedicamentoDeleteArgs>(args: SelectSubset<T, MedicamentoDeleteArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicamento.
     * @param {MedicamentoUpdateArgs} args - Arguments to update one Medicamento.
     * @example
     * // Update one Medicamento
     * const medicamento = await prisma.medicamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicamentoUpdateArgs>(args: SelectSubset<T, MedicamentoUpdateArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicamentos.
     * @param {MedicamentoDeleteManyArgs} args - Arguments to filter Medicamentos to delete.
     * @example
     * // Delete a few Medicamentos
     * const { count } = await prisma.medicamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicamentoDeleteManyArgs>(args?: SelectSubset<T, MedicamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicamentos
     * const medicamento = await prisma.medicamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicamentoUpdateManyArgs>(args: SelectSubset<T, MedicamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medicamento.
     * @param {MedicamentoUpsertArgs} args - Arguments to update or create a Medicamento.
     * @example
     * // Update or create a Medicamento
     * const medicamento = await prisma.medicamento.upsert({
     *   create: {
     *     // ... data to create a Medicamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicamento we want to update
     *   }
     * })
     */
    upsert<T extends MedicamentoUpsertArgs>(args: SelectSubset<T, MedicamentoUpsertArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoCountArgs} args - Arguments to filter Medicamentos to count.
     * @example
     * // Count the number of Medicamentos
     * const count = await prisma.medicamento.count({
     *   where: {
     *     // ... the filter for the Medicamentos we want to count
     *   }
     * })
    **/
    count<T extends MedicamentoCountArgs>(
      args?: Subset<T, MedicamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicamentoAggregateArgs>(args: Subset<T, MedicamentoAggregateArgs>): Prisma.PrismaPromise<GetMedicamentoAggregateType<T>>

    /**
     * Group by Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoGroupByArgs} args - Group by arguments.
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
      T extends MedicamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicamentoGroupByArgs['orderBy'] }
        : { orderBy?: MedicamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicamento model
   */
  readonly fields: MedicamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devoluciones<T extends Medicamento$devolucionesArgs<ExtArgs> = {}>(args?: Subset<T, Medicamento$devolucionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventarios<T extends Medicamento$inventariosArgs<ExtArgs> = {}>(args?: Subset<T, Medicamento$inventariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proveedor<T extends ProveedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProveedorDefaultArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recetasMedicamentos<T extends Medicamento$recetasMedicamentosArgs<ExtArgs> = {}>(args?: Subset<T, Medicamento$recetasMedicamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaMedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ventaMedicamentos<T extends Medicamento$ventaMedicamentosArgs<ExtArgs> = {}>(args?: Subset<T, Medicamento$ventaMedicamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaMedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medicamento model
   */
  interface MedicamentoFieldRefs {
    readonly id: FieldRef<"Medicamento", 'Int'>
    readonly nombre: FieldRef<"Medicamento", 'String'>
    readonly principioActivo: FieldRef<"Medicamento", 'String'>
    readonly laboratorio: FieldRef<"Medicamento", 'String'>
    readonly proveedorId: FieldRef<"Medicamento", 'Int'>
    readonly fechaVencimiento: FieldRef<"Medicamento", 'DateTime'>
    readonly formaFarmaceutica: FieldRef<"Medicamento", 'FormaFarmaceutica'>
    readonly presentacion: FieldRef<"Medicamento", 'Presentacion'>
    readonly lote: FieldRef<"Medicamento", 'String'>
    readonly stock: FieldRef<"Medicamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Medicamento findUnique
   */
  export type MedicamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento findUniqueOrThrow
   */
  export type MedicamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento findFirst
   */
  export type MedicamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicamentos.
     */
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }

  /**
   * Medicamento findFirstOrThrow
   */
  export type MedicamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicamentos.
     */
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }

  /**
   * Medicamento findMany
   */
  export type MedicamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamentos to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }

  /**
   * Medicamento create
   */
  export type MedicamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicamento.
     */
    data: XOR<MedicamentoCreateInput, MedicamentoUncheckedCreateInput>
  }

  /**
   * Medicamento createMany
   */
  export type MedicamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicamentos.
     */
    data: MedicamentoCreateManyInput | MedicamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicamento update
   */
  export type MedicamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicamento.
     */
    data: XOR<MedicamentoUpdateInput, MedicamentoUncheckedUpdateInput>
    /**
     * Choose, which Medicamento to update.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento updateMany
   */
  export type MedicamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicamentos.
     */
    data: XOR<MedicamentoUpdateManyMutationInput, MedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which Medicamentos to update
     */
    where?: MedicamentoWhereInput
    /**
     * Limit how many Medicamentos to update.
     */
    limit?: number
  }

  /**
   * Medicamento upsert
   */
  export type MedicamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicamento to update in case it exists.
     */
    where: MedicamentoWhereUniqueInput
    /**
     * In case the Medicamento found by the `where` argument doesn't exist, create a new Medicamento with this data.
     */
    create: XOR<MedicamentoCreateInput, MedicamentoUncheckedCreateInput>
    /**
     * In case the Medicamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicamentoUpdateInput, MedicamentoUncheckedUpdateInput>
  }

  /**
   * Medicamento delete
   */
  export type MedicamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter which Medicamento to delete.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento deleteMany
   */
  export type MedicamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicamentos to delete
     */
    where?: MedicamentoWhereInput
    /**
     * Limit how many Medicamentos to delete.
     */
    limit?: number
  }

  /**
   * Medicamento.devoluciones
   */
  export type Medicamento$devolucionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    where?: DevolucionWhereInput
    orderBy?: DevolucionOrderByWithRelationInput | DevolucionOrderByWithRelationInput[]
    cursor?: DevolucionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DevolucionScalarFieldEnum | DevolucionScalarFieldEnum[]
  }

  /**
   * Medicamento.inventarios
   */
  export type Medicamento$inventariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    where?: InventarioWhereInput
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    cursor?: InventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Medicamento.recetasMedicamentos
   */
  export type Medicamento$recetasMedicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
    where?: RecetaMedicamentoWhereInput
    orderBy?: RecetaMedicamentoOrderByWithRelationInput | RecetaMedicamentoOrderByWithRelationInput[]
    cursor?: RecetaMedicamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecetaMedicamentoScalarFieldEnum | RecetaMedicamentoScalarFieldEnum[]
  }

  /**
   * Medicamento.ventaMedicamentos
   */
  export type Medicamento$ventaMedicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
    where?: VentaMedicamentoWhereInput
    orderBy?: VentaMedicamentoOrderByWithRelationInput | VentaMedicamentoOrderByWithRelationInput[]
    cursor?: VentaMedicamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaMedicamentoScalarFieldEnum | VentaMedicamentoScalarFieldEnum[]
  }

  /**
   * Medicamento without action
   */
  export type MedicamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
  }


  /**
   * Model Devolucion
   */

  export type AggregateDevolucion = {
    _count: DevolucionCountAggregateOutputType | null
    _avg: DevolucionAvgAggregateOutputType | null
    _sum: DevolucionSumAggregateOutputType | null
    _min: DevolucionMinAggregateOutputType | null
    _max: DevolucionMaxAggregateOutputType | null
  }

  export type DevolucionAvgAggregateOutputType = {
    id: number | null
    medicamentoId: number | null
    cantidad: number | null
  }

  export type DevolucionSumAggregateOutputType = {
    id: number | null
    medicamentoId: number | null
    cantidad: number | null
  }

  export type DevolucionMinAggregateOutputType = {
    id: number | null
    medicamentoId: number | null
    fecha: Date | null
    cantidad: number | null
    motivo: string | null
  }

  export type DevolucionMaxAggregateOutputType = {
    id: number | null
    medicamentoId: number | null
    fecha: Date | null
    cantidad: number | null
    motivo: string | null
  }

  export type DevolucionCountAggregateOutputType = {
    id: number
    medicamentoId: number
    fecha: number
    cantidad: number
    motivo: number
    _all: number
  }


  export type DevolucionAvgAggregateInputType = {
    id?: true
    medicamentoId?: true
    cantidad?: true
  }

  export type DevolucionSumAggregateInputType = {
    id?: true
    medicamentoId?: true
    cantidad?: true
  }

  export type DevolucionMinAggregateInputType = {
    id?: true
    medicamentoId?: true
    fecha?: true
    cantidad?: true
    motivo?: true
  }

  export type DevolucionMaxAggregateInputType = {
    id?: true
    medicamentoId?: true
    fecha?: true
    cantidad?: true
    motivo?: true
  }

  export type DevolucionCountAggregateInputType = {
    id?: true
    medicamentoId?: true
    fecha?: true
    cantidad?: true
    motivo?: true
    _all?: true
  }

  export type DevolucionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devolucion to aggregate.
     */
    where?: DevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucions to fetch.
     */
    orderBy?: DevolucionOrderByWithRelationInput | DevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devolucions
    **/
    _count?: true | DevolucionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevolucionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevolucionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevolucionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevolucionMaxAggregateInputType
  }

  export type GetDevolucionAggregateType<T extends DevolucionAggregateArgs> = {
        [P in keyof T & keyof AggregateDevolucion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevolucion[P]>
      : GetScalarType<T[P], AggregateDevolucion[P]>
  }




  export type DevolucionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevolucionWhereInput
    orderBy?: DevolucionOrderByWithAggregationInput | DevolucionOrderByWithAggregationInput[]
    by: DevolucionScalarFieldEnum[] | DevolucionScalarFieldEnum
    having?: DevolucionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevolucionCountAggregateInputType | true
    _avg?: DevolucionAvgAggregateInputType
    _sum?: DevolucionSumAggregateInputType
    _min?: DevolucionMinAggregateInputType
    _max?: DevolucionMaxAggregateInputType
  }

  export type DevolucionGroupByOutputType = {
    id: number
    medicamentoId: number
    fecha: Date
    cantidad: number
    motivo: string
    _count: DevolucionCountAggregateOutputType | null
    _avg: DevolucionAvgAggregateOutputType | null
    _sum: DevolucionSumAggregateOutputType | null
    _min: DevolucionMinAggregateOutputType | null
    _max: DevolucionMaxAggregateOutputType | null
  }

  type GetDevolucionGroupByPayload<T extends DevolucionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevolucionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevolucionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevolucionGroupByOutputType[P]>
            : GetScalarType<T[P], DevolucionGroupByOutputType[P]>
        }
      >
    >


  export type DevolucionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicamentoId?: boolean
    fecha?: boolean
    cantidad?: boolean
    motivo?: boolean
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devolucion"]>



  export type DevolucionSelectScalar = {
    id?: boolean
    medicamentoId?: boolean
    fecha?: boolean
    cantidad?: boolean
    motivo?: boolean
  }

  export type DevolucionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicamentoId" | "fecha" | "cantidad" | "motivo", ExtArgs["result"]["devolucion"]>
  export type DevolucionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }

  export type $DevolucionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Devolucion"
    objects: {
      medicamento: Prisma.$MedicamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medicamentoId: number
      fecha: Date
      cantidad: number
      motivo: string
    }, ExtArgs["result"]["devolucion"]>
    composites: {}
  }

  type DevolucionGetPayload<S extends boolean | null | undefined | DevolucionDefaultArgs> = $Result.GetResult<Prisma.$DevolucionPayload, S>

  type DevolucionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevolucionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevolucionCountAggregateInputType | true
    }

  export interface DevolucionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Devolucion'], meta: { name: 'Devolucion' } }
    /**
     * Find zero or one Devolucion that matches the filter.
     * @param {DevolucionFindUniqueArgs} args - Arguments to find a Devolucion
     * @example
     * // Get one Devolucion
     * const devolucion = await prisma.devolucion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevolucionFindUniqueArgs>(args: SelectSubset<T, DevolucionFindUniqueArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devolucion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevolucionFindUniqueOrThrowArgs} args - Arguments to find a Devolucion
     * @example
     * // Get one Devolucion
     * const devolucion = await prisma.devolucion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevolucionFindUniqueOrThrowArgs>(args: SelectSubset<T, DevolucionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devolucion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionFindFirstArgs} args - Arguments to find a Devolucion
     * @example
     * // Get one Devolucion
     * const devolucion = await prisma.devolucion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevolucionFindFirstArgs>(args?: SelectSubset<T, DevolucionFindFirstArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devolucion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionFindFirstOrThrowArgs} args - Arguments to find a Devolucion
     * @example
     * // Get one Devolucion
     * const devolucion = await prisma.devolucion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevolucionFindFirstOrThrowArgs>(args?: SelectSubset<T, DevolucionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devolucions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devolucions
     * const devolucions = await prisma.devolucion.findMany()
     * 
     * // Get first 10 Devolucions
     * const devolucions = await prisma.devolucion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devolucionWithIdOnly = await prisma.devolucion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevolucionFindManyArgs>(args?: SelectSubset<T, DevolucionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devolucion.
     * @param {DevolucionCreateArgs} args - Arguments to create a Devolucion.
     * @example
     * // Create one Devolucion
     * const Devolucion = await prisma.devolucion.create({
     *   data: {
     *     // ... data to create a Devolucion
     *   }
     * })
     * 
     */
    create<T extends DevolucionCreateArgs>(args: SelectSubset<T, DevolucionCreateArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devolucions.
     * @param {DevolucionCreateManyArgs} args - Arguments to create many Devolucions.
     * @example
     * // Create many Devolucions
     * const devolucion = await prisma.devolucion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevolucionCreateManyArgs>(args?: SelectSubset<T, DevolucionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Devolucion.
     * @param {DevolucionDeleteArgs} args - Arguments to delete one Devolucion.
     * @example
     * // Delete one Devolucion
     * const Devolucion = await prisma.devolucion.delete({
     *   where: {
     *     // ... filter to delete one Devolucion
     *   }
     * })
     * 
     */
    delete<T extends DevolucionDeleteArgs>(args: SelectSubset<T, DevolucionDeleteArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devolucion.
     * @param {DevolucionUpdateArgs} args - Arguments to update one Devolucion.
     * @example
     * // Update one Devolucion
     * const devolucion = await prisma.devolucion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevolucionUpdateArgs>(args: SelectSubset<T, DevolucionUpdateArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devolucions.
     * @param {DevolucionDeleteManyArgs} args - Arguments to filter Devolucions to delete.
     * @example
     * // Delete a few Devolucions
     * const { count } = await prisma.devolucion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevolucionDeleteManyArgs>(args?: SelectSubset<T, DevolucionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devolucions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devolucions
     * const devolucion = await prisma.devolucion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevolucionUpdateManyArgs>(args: SelectSubset<T, DevolucionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Devolucion.
     * @param {DevolucionUpsertArgs} args - Arguments to update or create a Devolucion.
     * @example
     * // Update or create a Devolucion
     * const devolucion = await prisma.devolucion.upsert({
     *   create: {
     *     // ... data to create a Devolucion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devolucion we want to update
     *   }
     * })
     */
    upsert<T extends DevolucionUpsertArgs>(args: SelectSubset<T, DevolucionUpsertArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devolucions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionCountArgs} args - Arguments to filter Devolucions to count.
     * @example
     * // Count the number of Devolucions
     * const count = await prisma.devolucion.count({
     *   where: {
     *     // ... the filter for the Devolucions we want to count
     *   }
     * })
    **/
    count<T extends DevolucionCountArgs>(
      args?: Subset<T, DevolucionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevolucionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devolucion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevolucionAggregateArgs>(args: Subset<T, DevolucionAggregateArgs>): Prisma.PrismaPromise<GetDevolucionAggregateType<T>>

    /**
     * Group by Devolucion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionGroupByArgs} args - Group by arguments.
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
      T extends DevolucionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevolucionGroupByArgs['orderBy'] }
        : { orderBy?: DevolucionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DevolucionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevolucionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Devolucion model
   */
  readonly fields: DevolucionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Devolucion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevolucionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicamento<T extends MedicamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicamentoDefaultArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Devolucion model
   */
  interface DevolucionFieldRefs {
    readonly id: FieldRef<"Devolucion", 'Int'>
    readonly medicamentoId: FieldRef<"Devolucion", 'Int'>
    readonly fecha: FieldRef<"Devolucion", 'DateTime'>
    readonly cantidad: FieldRef<"Devolucion", 'Int'>
    readonly motivo: FieldRef<"Devolucion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Devolucion findUnique
   */
  export type DevolucionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter, which Devolucion to fetch.
     */
    where: DevolucionWhereUniqueInput
  }

  /**
   * Devolucion findUniqueOrThrow
   */
  export type DevolucionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter, which Devolucion to fetch.
     */
    where: DevolucionWhereUniqueInput
  }

  /**
   * Devolucion findFirst
   */
  export type DevolucionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter, which Devolucion to fetch.
     */
    where?: DevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucions to fetch.
     */
    orderBy?: DevolucionOrderByWithRelationInput | DevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devolucions.
     */
    cursor?: DevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devolucions.
     */
    distinct?: DevolucionScalarFieldEnum | DevolucionScalarFieldEnum[]
  }

  /**
   * Devolucion findFirstOrThrow
   */
  export type DevolucionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter, which Devolucion to fetch.
     */
    where?: DevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucions to fetch.
     */
    orderBy?: DevolucionOrderByWithRelationInput | DevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devolucions.
     */
    cursor?: DevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devolucions.
     */
    distinct?: DevolucionScalarFieldEnum | DevolucionScalarFieldEnum[]
  }

  /**
   * Devolucion findMany
   */
  export type DevolucionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter, which Devolucions to fetch.
     */
    where?: DevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucions to fetch.
     */
    orderBy?: DevolucionOrderByWithRelationInput | DevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devolucions.
     */
    cursor?: DevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucions.
     */
    skip?: number
    distinct?: DevolucionScalarFieldEnum | DevolucionScalarFieldEnum[]
  }

  /**
   * Devolucion create
   */
  export type DevolucionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * The data needed to create a Devolucion.
     */
    data: XOR<DevolucionCreateInput, DevolucionUncheckedCreateInput>
  }

  /**
   * Devolucion createMany
   */
  export type DevolucionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devolucions.
     */
    data: DevolucionCreateManyInput | DevolucionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Devolucion update
   */
  export type DevolucionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * The data needed to update a Devolucion.
     */
    data: XOR<DevolucionUpdateInput, DevolucionUncheckedUpdateInput>
    /**
     * Choose, which Devolucion to update.
     */
    where: DevolucionWhereUniqueInput
  }

  /**
   * Devolucion updateMany
   */
  export type DevolucionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devolucions.
     */
    data: XOR<DevolucionUpdateManyMutationInput, DevolucionUncheckedUpdateManyInput>
    /**
     * Filter which Devolucions to update
     */
    where?: DevolucionWhereInput
    /**
     * Limit how many Devolucions to update.
     */
    limit?: number
  }

  /**
   * Devolucion upsert
   */
  export type DevolucionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * The filter to search for the Devolucion to update in case it exists.
     */
    where: DevolucionWhereUniqueInput
    /**
     * In case the Devolucion found by the `where` argument doesn't exist, create a new Devolucion with this data.
     */
    create: XOR<DevolucionCreateInput, DevolucionUncheckedCreateInput>
    /**
     * In case the Devolucion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevolucionUpdateInput, DevolucionUncheckedUpdateInput>
  }

  /**
   * Devolucion delete
   */
  export type DevolucionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter which Devolucion to delete.
     */
    where: DevolucionWhereUniqueInput
  }

  /**
   * Devolucion deleteMany
   */
  export type DevolucionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devolucions to delete
     */
    where?: DevolucionWhereInput
    /**
     * Limit how many Devolucions to delete.
     */
    limit?: number
  }

  /**
   * Devolucion without action
   */
  export type DevolucionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
  }


  /**
   * Model Inventario
   */

  export type AggregateInventario = {
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  export type InventarioAvgAggregateOutputType = {
    id: number | null
    medicamentoId: number | null
    cantidad: number | null
  }

  export type InventarioSumAggregateOutputType = {
    id: number | null
    medicamentoId: number | null
    cantidad: number | null
  }

  export type InventarioMinAggregateOutputType = {
    id: number | null
    medicamentoId: number | null
    fecha: Date | null
    cantidad: number | null
  }

  export type InventarioMaxAggregateOutputType = {
    id: number | null
    medicamentoId: number | null
    fecha: Date | null
    cantidad: number | null
  }

  export type InventarioCountAggregateOutputType = {
    id: number
    medicamentoId: number
    fecha: number
    cantidad: number
    _all: number
  }


  export type InventarioAvgAggregateInputType = {
    id?: true
    medicamentoId?: true
    cantidad?: true
  }

  export type InventarioSumAggregateInputType = {
    id?: true
    medicamentoId?: true
    cantidad?: true
  }

  export type InventarioMinAggregateInputType = {
    id?: true
    medicamentoId?: true
    fecha?: true
    cantidad?: true
  }

  export type InventarioMaxAggregateInputType = {
    id?: true
    medicamentoId?: true
    fecha?: true
    cantidad?: true
  }

  export type InventarioCountAggregateInputType = {
    id?: true
    medicamentoId?: true
    fecha?: true
    cantidad?: true
    _all?: true
  }

  export type InventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventario to aggregate.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventarios
    **/
    _count?: true | InventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventarioMaxAggregateInputType
  }

  export type GetInventarioAggregateType<T extends InventarioAggregateArgs> = {
        [P in keyof T & keyof AggregateInventario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventario[P]>
      : GetScalarType<T[P], AggregateInventario[P]>
  }




  export type InventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarioWhereInput
    orderBy?: InventarioOrderByWithAggregationInput | InventarioOrderByWithAggregationInput[]
    by: InventarioScalarFieldEnum[] | InventarioScalarFieldEnum
    having?: InventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventarioCountAggregateInputType | true
    _avg?: InventarioAvgAggregateInputType
    _sum?: InventarioSumAggregateInputType
    _min?: InventarioMinAggregateInputType
    _max?: InventarioMaxAggregateInputType
  }

  export type InventarioGroupByOutputType = {
    id: number
    medicamentoId: number
    fecha: Date
    cantidad: number
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  type GetInventarioGroupByPayload<T extends InventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventarioGroupByOutputType[P]>
            : GetScalarType<T[P], InventarioGroupByOutputType[P]>
        }
      >
    >


  export type InventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicamentoId?: boolean
    fecha?: boolean
    cantidad?: boolean
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario"]>



  export type InventarioSelectScalar = {
    id?: boolean
    medicamentoId?: boolean
    fecha?: boolean
    cantidad?: boolean
  }

  export type InventarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicamentoId" | "fecha" | "cantidad", ExtArgs["result"]["inventario"]>
  export type InventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }

  export type $InventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventario"
    objects: {
      medicamento: Prisma.$MedicamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medicamentoId: number
      fecha: Date
      cantidad: number
    }, ExtArgs["result"]["inventario"]>
    composites: {}
  }

  type InventarioGetPayload<S extends boolean | null | undefined | InventarioDefaultArgs> = $Result.GetResult<Prisma.$InventarioPayload, S>

  type InventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventarioCountAggregateInputType | true
    }

  export interface InventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventario'], meta: { name: 'Inventario' } }
    /**
     * Find zero or one Inventario that matches the filter.
     * @param {InventarioFindUniqueArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventarioFindUniqueArgs>(args: SelectSubset<T, InventarioFindUniqueArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventarioFindUniqueOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, InventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventarioFindFirstArgs>(args?: SelectSubset<T, InventarioFindFirstArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, InventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventarios
     * const inventarios = await prisma.inventario.findMany()
     * 
     * // Get first 10 Inventarios
     * const inventarios = await prisma.inventario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventarioWithIdOnly = await prisma.inventario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventarioFindManyArgs>(args?: SelectSubset<T, InventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventario.
     * @param {InventarioCreateArgs} args - Arguments to create a Inventario.
     * @example
     * // Create one Inventario
     * const Inventario = await prisma.inventario.create({
     *   data: {
     *     // ... data to create a Inventario
     *   }
     * })
     * 
     */
    create<T extends InventarioCreateArgs>(args: SelectSubset<T, InventarioCreateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventarios.
     * @param {InventarioCreateManyArgs} args - Arguments to create many Inventarios.
     * @example
     * // Create many Inventarios
     * const inventario = await prisma.inventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventarioCreateManyArgs>(args?: SelectSubset<T, InventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventario.
     * @param {InventarioDeleteArgs} args - Arguments to delete one Inventario.
     * @example
     * // Delete one Inventario
     * const Inventario = await prisma.inventario.delete({
     *   where: {
     *     // ... filter to delete one Inventario
     *   }
     * })
     * 
     */
    delete<T extends InventarioDeleteArgs>(args: SelectSubset<T, InventarioDeleteArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventario.
     * @param {InventarioUpdateArgs} args - Arguments to update one Inventario.
     * @example
     * // Update one Inventario
     * const inventario = await prisma.inventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventarioUpdateArgs>(args: SelectSubset<T, InventarioUpdateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventarios.
     * @param {InventarioDeleteManyArgs} args - Arguments to filter Inventarios to delete.
     * @example
     * // Delete a few Inventarios
     * const { count } = await prisma.inventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventarioDeleteManyArgs>(args?: SelectSubset<T, InventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventarios
     * const inventario = await prisma.inventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventarioUpdateManyArgs>(args: SelectSubset<T, InventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventario.
     * @param {InventarioUpsertArgs} args - Arguments to update or create a Inventario.
     * @example
     * // Update or create a Inventario
     * const inventario = await prisma.inventario.upsert({
     *   create: {
     *     // ... data to create a Inventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventario we want to update
     *   }
     * })
     */
    upsert<T extends InventarioUpsertArgs>(args: SelectSubset<T, InventarioUpsertArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioCountArgs} args - Arguments to filter Inventarios to count.
     * @example
     * // Count the number of Inventarios
     * const count = await prisma.inventario.count({
     *   where: {
     *     // ... the filter for the Inventarios we want to count
     *   }
     * })
    **/
    count<T extends InventarioCountArgs>(
      args?: Subset<T, InventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventarioAggregateArgs>(args: Subset<T, InventarioAggregateArgs>): Prisma.PrismaPromise<GetInventarioAggregateType<T>>

    /**
     * Group by Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioGroupByArgs} args - Group by arguments.
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
      T extends InventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventarioGroupByArgs['orderBy'] }
        : { orderBy?: InventarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventario model
   */
  readonly fields: InventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicamento<T extends MedicamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicamentoDefaultArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inventario model
   */
  interface InventarioFieldRefs {
    readonly id: FieldRef<"Inventario", 'Int'>
    readonly medicamentoId: FieldRef<"Inventario", 'Int'>
    readonly fecha: FieldRef<"Inventario", 'DateTime'>
    readonly cantidad: FieldRef<"Inventario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inventario findUnique
   */
  export type InventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findUniqueOrThrow
   */
  export type InventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findFirst
   */
  export type InventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findFirstOrThrow
   */
  export type InventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findMany
   */
  export type InventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventarios to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario create
   */
  export type InventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventario.
     */
    data: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
  }

  /**
   * Inventario createMany
   */
  export type InventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventarios.
     */
    data: InventarioCreateManyInput | InventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventario update
   */
  export type InventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventario.
     */
    data: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
    /**
     * Choose, which Inventario to update.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario updateMany
   */
  export type InventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventarios.
     */
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyInput>
    /**
     * Filter which Inventarios to update
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to update.
     */
    limit?: number
  }

  /**
   * Inventario upsert
   */
  export type InventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventario to update in case it exists.
     */
    where: InventarioWhereUniqueInput
    /**
     * In case the Inventario found by the `where` argument doesn't exist, create a new Inventario with this data.
     */
    create: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
    /**
     * In case the Inventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
  }

  /**
   * Inventario delete
   */
  export type InventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter which Inventario to delete.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario deleteMany
   */
  export type InventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventarios to delete
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to delete.
     */
    limit?: number
  }

  /**
   * Inventario without action
   */
  export type InventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
  }


  /**
   * Model Receta
   */

  export type AggregateReceta = {
    _count: RecetaCountAggregateOutputType | null
    _avg: RecetaAvgAggregateOutputType | null
    _sum: RecetaSumAggregateOutputType | null
    _min: RecetaMinAggregateOutputType | null
    _max: RecetaMaxAggregateOutputType | null
  }

  export type RecetaAvgAggregateOutputType = {
    id: number | null
  }

  export type RecetaSumAggregateOutputType = {
    id: number | null
  }

  export type RecetaMinAggregateOutputType = {
    id: number | null
    pacienteNombre: string | null
    medicoNombre: string | null
    fecha: Date | null
  }

  export type RecetaMaxAggregateOutputType = {
    id: number | null
    pacienteNombre: string | null
    medicoNombre: string | null
    fecha: Date | null
  }

  export type RecetaCountAggregateOutputType = {
    id: number
    pacienteNombre: number
    medicoNombre: number
    fecha: number
    _all: number
  }


  export type RecetaAvgAggregateInputType = {
    id?: true
  }

  export type RecetaSumAggregateInputType = {
    id?: true
  }

  export type RecetaMinAggregateInputType = {
    id?: true
    pacienteNombre?: true
    medicoNombre?: true
    fecha?: true
  }

  export type RecetaMaxAggregateInputType = {
    id?: true
    pacienteNombre?: true
    medicoNombre?: true
    fecha?: true
  }

  export type RecetaCountAggregateInputType = {
    id?: true
    pacienteNombre?: true
    medicoNombre?: true
    fecha?: true
    _all?: true
  }

  export type RecetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receta to aggregate.
     */
    where?: RecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetaOrderByWithRelationInput | RecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recetas
    **/
    _count?: true | RecetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecetaMaxAggregateInputType
  }

  export type GetRecetaAggregateType<T extends RecetaAggregateArgs> = {
        [P in keyof T & keyof AggregateReceta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceta[P]>
      : GetScalarType<T[P], AggregateReceta[P]>
  }




  export type RecetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetaWhereInput
    orderBy?: RecetaOrderByWithAggregationInput | RecetaOrderByWithAggregationInput[]
    by: RecetaScalarFieldEnum[] | RecetaScalarFieldEnum
    having?: RecetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecetaCountAggregateInputType | true
    _avg?: RecetaAvgAggregateInputType
    _sum?: RecetaSumAggregateInputType
    _min?: RecetaMinAggregateInputType
    _max?: RecetaMaxAggregateInputType
  }

  export type RecetaGroupByOutputType = {
    id: number
    pacienteNombre: string
    medicoNombre: string
    fecha: Date
    _count: RecetaCountAggregateOutputType | null
    _avg: RecetaAvgAggregateOutputType | null
    _sum: RecetaSumAggregateOutputType | null
    _min: RecetaMinAggregateOutputType | null
    _max: RecetaMaxAggregateOutputType | null
  }

  type GetRecetaGroupByPayload<T extends RecetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecetaGroupByOutputType[P]>
            : GetScalarType<T[P], RecetaGroupByOutputType[P]>
        }
      >
    >


  export type RecetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteNombre?: boolean
    medicoNombre?: boolean
    fecha?: boolean
    recetaMedicamentos?: boolean | Receta$recetaMedicamentosArgs<ExtArgs>
    _count?: boolean | RecetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receta"]>



  export type RecetaSelectScalar = {
    id?: boolean
    pacienteNombre?: boolean
    medicoNombre?: boolean
    fecha?: boolean
  }

  export type RecetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteNombre" | "medicoNombre" | "fecha", ExtArgs["result"]["receta"]>
  export type RecetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetaMedicamentos?: boolean | Receta$recetaMedicamentosArgs<ExtArgs>
    _count?: boolean | RecetaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RecetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receta"
    objects: {
      recetaMedicamentos: Prisma.$RecetaMedicamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pacienteNombre: string
      medicoNombre: string
      fecha: Date
    }, ExtArgs["result"]["receta"]>
    composites: {}
  }

  type RecetaGetPayload<S extends boolean | null | undefined | RecetaDefaultArgs> = $Result.GetResult<Prisma.$RecetaPayload, S>

  type RecetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecetaCountAggregateInputType | true
    }

  export interface RecetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receta'], meta: { name: 'Receta' } }
    /**
     * Find zero or one Receta that matches the filter.
     * @param {RecetaFindUniqueArgs} args - Arguments to find a Receta
     * @example
     * // Get one Receta
     * const receta = await prisma.receta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecetaFindUniqueArgs>(args: SelectSubset<T, RecetaFindUniqueArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecetaFindUniqueOrThrowArgs} args - Arguments to find a Receta
     * @example
     * // Get one Receta
     * const receta = await prisma.receta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecetaFindUniqueOrThrowArgs>(args: SelectSubset<T, RecetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaFindFirstArgs} args - Arguments to find a Receta
     * @example
     * // Get one Receta
     * const receta = await prisma.receta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecetaFindFirstArgs>(args?: SelectSubset<T, RecetaFindFirstArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaFindFirstOrThrowArgs} args - Arguments to find a Receta
     * @example
     * // Get one Receta
     * const receta = await prisma.receta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecetaFindFirstOrThrowArgs>(args?: SelectSubset<T, RecetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recetas
     * const recetas = await prisma.receta.findMany()
     * 
     * // Get first 10 Recetas
     * const recetas = await prisma.receta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recetaWithIdOnly = await prisma.receta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecetaFindManyArgs>(args?: SelectSubset<T, RecetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receta.
     * @param {RecetaCreateArgs} args - Arguments to create a Receta.
     * @example
     * // Create one Receta
     * const Receta = await prisma.receta.create({
     *   data: {
     *     // ... data to create a Receta
     *   }
     * })
     * 
     */
    create<T extends RecetaCreateArgs>(args: SelectSubset<T, RecetaCreateArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recetas.
     * @param {RecetaCreateManyArgs} args - Arguments to create many Recetas.
     * @example
     * // Create many Recetas
     * const receta = await prisma.receta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecetaCreateManyArgs>(args?: SelectSubset<T, RecetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Receta.
     * @param {RecetaDeleteArgs} args - Arguments to delete one Receta.
     * @example
     * // Delete one Receta
     * const Receta = await prisma.receta.delete({
     *   where: {
     *     // ... filter to delete one Receta
     *   }
     * })
     * 
     */
    delete<T extends RecetaDeleteArgs>(args: SelectSubset<T, RecetaDeleteArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receta.
     * @param {RecetaUpdateArgs} args - Arguments to update one Receta.
     * @example
     * // Update one Receta
     * const receta = await prisma.receta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecetaUpdateArgs>(args: SelectSubset<T, RecetaUpdateArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recetas.
     * @param {RecetaDeleteManyArgs} args - Arguments to filter Recetas to delete.
     * @example
     * // Delete a few Recetas
     * const { count } = await prisma.receta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecetaDeleteManyArgs>(args?: SelectSubset<T, RecetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recetas
     * const receta = await prisma.receta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecetaUpdateManyArgs>(args: SelectSubset<T, RecetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Receta.
     * @param {RecetaUpsertArgs} args - Arguments to update or create a Receta.
     * @example
     * // Update or create a Receta
     * const receta = await prisma.receta.upsert({
     *   create: {
     *     // ... data to create a Receta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receta we want to update
     *   }
     * })
     */
    upsert<T extends RecetaUpsertArgs>(args: SelectSubset<T, RecetaUpsertArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaCountArgs} args - Arguments to filter Recetas to count.
     * @example
     * // Count the number of Recetas
     * const count = await prisma.receta.count({
     *   where: {
     *     // ... the filter for the Recetas we want to count
     *   }
     * })
    **/
    count<T extends RecetaCountArgs>(
      args?: Subset<T, RecetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecetaAggregateArgs>(args: Subset<T, RecetaAggregateArgs>): Prisma.PrismaPromise<GetRecetaAggregateType<T>>

    /**
     * Group by Receta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaGroupByArgs} args - Group by arguments.
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
      T extends RecetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecetaGroupByArgs['orderBy'] }
        : { orderBy?: RecetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receta model
   */
  readonly fields: RecetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recetaMedicamentos<T extends Receta$recetaMedicamentosArgs<ExtArgs> = {}>(args?: Subset<T, Receta$recetaMedicamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaMedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Receta model
   */
  interface RecetaFieldRefs {
    readonly id: FieldRef<"Receta", 'Int'>
    readonly pacienteNombre: FieldRef<"Receta", 'String'>
    readonly medicoNombre: FieldRef<"Receta", 'String'>
    readonly fecha: FieldRef<"Receta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Receta findUnique
   */
  export type RecetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter, which Receta to fetch.
     */
    where: RecetaWhereUniqueInput
  }

  /**
   * Receta findUniqueOrThrow
   */
  export type RecetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter, which Receta to fetch.
     */
    where: RecetaWhereUniqueInput
  }

  /**
   * Receta findFirst
   */
  export type RecetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter, which Receta to fetch.
     */
    where?: RecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetaOrderByWithRelationInput | RecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recetas.
     */
    cursor?: RecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recetas.
     */
    distinct?: RecetaScalarFieldEnum | RecetaScalarFieldEnum[]
  }

  /**
   * Receta findFirstOrThrow
   */
  export type RecetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter, which Receta to fetch.
     */
    where?: RecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetaOrderByWithRelationInput | RecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recetas.
     */
    cursor?: RecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recetas.
     */
    distinct?: RecetaScalarFieldEnum | RecetaScalarFieldEnum[]
  }

  /**
   * Receta findMany
   */
  export type RecetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter, which Recetas to fetch.
     */
    where?: RecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetaOrderByWithRelationInput | RecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recetas.
     */
    cursor?: RecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    distinct?: RecetaScalarFieldEnum | RecetaScalarFieldEnum[]
  }

  /**
   * Receta create
   */
  export type RecetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Receta.
     */
    data: XOR<RecetaCreateInput, RecetaUncheckedCreateInput>
  }

  /**
   * Receta createMany
   */
  export type RecetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recetas.
     */
    data: RecetaCreateManyInput | RecetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receta update
   */
  export type RecetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Receta.
     */
    data: XOR<RecetaUpdateInput, RecetaUncheckedUpdateInput>
    /**
     * Choose, which Receta to update.
     */
    where: RecetaWhereUniqueInput
  }

  /**
   * Receta updateMany
   */
  export type RecetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recetas.
     */
    data: XOR<RecetaUpdateManyMutationInput, RecetaUncheckedUpdateManyInput>
    /**
     * Filter which Recetas to update
     */
    where?: RecetaWhereInput
    /**
     * Limit how many Recetas to update.
     */
    limit?: number
  }

  /**
   * Receta upsert
   */
  export type RecetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Receta to update in case it exists.
     */
    where: RecetaWhereUniqueInput
    /**
     * In case the Receta found by the `where` argument doesn't exist, create a new Receta with this data.
     */
    create: XOR<RecetaCreateInput, RecetaUncheckedCreateInput>
    /**
     * In case the Receta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecetaUpdateInput, RecetaUncheckedUpdateInput>
  }

  /**
   * Receta delete
   */
  export type RecetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter which Receta to delete.
     */
    where: RecetaWhereUniqueInput
  }

  /**
   * Receta deleteMany
   */
  export type RecetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recetas to delete
     */
    where?: RecetaWhereInput
    /**
     * Limit how many Recetas to delete.
     */
    limit?: number
  }

  /**
   * Receta.recetaMedicamentos
   */
  export type Receta$recetaMedicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
    where?: RecetaMedicamentoWhereInput
    orderBy?: RecetaMedicamentoOrderByWithRelationInput | RecetaMedicamentoOrderByWithRelationInput[]
    cursor?: RecetaMedicamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecetaMedicamentoScalarFieldEnum | RecetaMedicamentoScalarFieldEnum[]
  }

  /**
   * Receta without action
   */
  export type RecetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
  }


  /**
   * Model RecetaMedicamento
   */

  export type AggregateRecetaMedicamento = {
    _count: RecetaMedicamentoCountAggregateOutputType | null
    _avg: RecetaMedicamentoAvgAggregateOutputType | null
    _sum: RecetaMedicamentoSumAggregateOutputType | null
    _min: RecetaMedicamentoMinAggregateOutputType | null
    _max: RecetaMedicamentoMaxAggregateOutputType | null
  }

  export type RecetaMedicamentoAvgAggregateOutputType = {
    id: number | null
    recetaId: number | null
    medicamentoId: number | null
    cantidad: number | null
  }

  export type RecetaMedicamentoSumAggregateOutputType = {
    id: number | null
    recetaId: number | null
    medicamentoId: number | null
    cantidad: number | null
  }

  export type RecetaMedicamentoMinAggregateOutputType = {
    id: number | null
    recetaId: number | null
    medicamentoId: number | null
    cantidad: number | null
    estado: $Enums.Estado | null
  }

  export type RecetaMedicamentoMaxAggregateOutputType = {
    id: number | null
    recetaId: number | null
    medicamentoId: number | null
    cantidad: number | null
    estado: $Enums.Estado | null
  }

  export type RecetaMedicamentoCountAggregateOutputType = {
    id: number
    recetaId: number
    medicamentoId: number
    cantidad: number
    estado: number
    _all: number
  }


  export type RecetaMedicamentoAvgAggregateInputType = {
    id?: true
    recetaId?: true
    medicamentoId?: true
    cantidad?: true
  }

  export type RecetaMedicamentoSumAggregateInputType = {
    id?: true
    recetaId?: true
    medicamentoId?: true
    cantidad?: true
  }

  export type RecetaMedicamentoMinAggregateInputType = {
    id?: true
    recetaId?: true
    medicamentoId?: true
    cantidad?: true
    estado?: true
  }

  export type RecetaMedicamentoMaxAggregateInputType = {
    id?: true
    recetaId?: true
    medicamentoId?: true
    cantidad?: true
    estado?: true
  }

  export type RecetaMedicamentoCountAggregateInputType = {
    id?: true
    recetaId?: true
    medicamentoId?: true
    cantidad?: true
    estado?: true
    _all?: true
  }

  export type RecetaMedicamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecetaMedicamento to aggregate.
     */
    where?: RecetaMedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaMedicamentos to fetch.
     */
    orderBy?: RecetaMedicamentoOrderByWithRelationInput | RecetaMedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecetaMedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaMedicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaMedicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecetaMedicamentos
    **/
    _count?: true | RecetaMedicamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecetaMedicamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecetaMedicamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecetaMedicamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecetaMedicamentoMaxAggregateInputType
  }

  export type GetRecetaMedicamentoAggregateType<T extends RecetaMedicamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateRecetaMedicamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecetaMedicamento[P]>
      : GetScalarType<T[P], AggregateRecetaMedicamento[P]>
  }




  export type RecetaMedicamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetaMedicamentoWhereInput
    orderBy?: RecetaMedicamentoOrderByWithAggregationInput | RecetaMedicamentoOrderByWithAggregationInput[]
    by: RecetaMedicamentoScalarFieldEnum[] | RecetaMedicamentoScalarFieldEnum
    having?: RecetaMedicamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecetaMedicamentoCountAggregateInputType | true
    _avg?: RecetaMedicamentoAvgAggregateInputType
    _sum?: RecetaMedicamentoSumAggregateInputType
    _min?: RecetaMedicamentoMinAggregateInputType
    _max?: RecetaMedicamentoMaxAggregateInputType
  }

  export type RecetaMedicamentoGroupByOutputType = {
    id: number
    recetaId: number
    medicamentoId: number
    cantidad: number
    estado: $Enums.Estado
    _count: RecetaMedicamentoCountAggregateOutputType | null
    _avg: RecetaMedicamentoAvgAggregateOutputType | null
    _sum: RecetaMedicamentoSumAggregateOutputType | null
    _min: RecetaMedicamentoMinAggregateOutputType | null
    _max: RecetaMedicamentoMaxAggregateOutputType | null
  }

  type GetRecetaMedicamentoGroupByPayload<T extends RecetaMedicamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecetaMedicamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecetaMedicamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecetaMedicamentoGroupByOutputType[P]>
            : GetScalarType<T[P], RecetaMedicamentoGroupByOutputType[P]>
        }
      >
    >


  export type RecetaMedicamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recetaId?: boolean
    medicamentoId?: boolean
    cantidad?: boolean
    estado?: boolean
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
    receta?: boolean | RecetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recetaMedicamento"]>



  export type RecetaMedicamentoSelectScalar = {
    id?: boolean
    recetaId?: boolean
    medicamentoId?: boolean
    cantidad?: boolean
    estado?: boolean
  }

  export type RecetaMedicamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recetaId" | "medicamentoId" | "cantidad" | "estado", ExtArgs["result"]["recetaMedicamento"]>
  export type RecetaMedicamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
    receta?: boolean | RecetaDefaultArgs<ExtArgs>
  }

  export type $RecetaMedicamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecetaMedicamento"
    objects: {
      medicamento: Prisma.$MedicamentoPayload<ExtArgs>
      receta: Prisma.$RecetaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recetaId: number
      medicamentoId: number
      cantidad: number
      estado: $Enums.Estado
    }, ExtArgs["result"]["recetaMedicamento"]>
    composites: {}
  }

  type RecetaMedicamentoGetPayload<S extends boolean | null | undefined | RecetaMedicamentoDefaultArgs> = $Result.GetResult<Prisma.$RecetaMedicamentoPayload, S>

  type RecetaMedicamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecetaMedicamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecetaMedicamentoCountAggregateInputType | true
    }

  export interface RecetaMedicamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecetaMedicamento'], meta: { name: 'RecetaMedicamento' } }
    /**
     * Find zero or one RecetaMedicamento that matches the filter.
     * @param {RecetaMedicamentoFindUniqueArgs} args - Arguments to find a RecetaMedicamento
     * @example
     * // Get one RecetaMedicamento
     * const recetaMedicamento = await prisma.recetaMedicamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecetaMedicamentoFindUniqueArgs>(args: SelectSubset<T, RecetaMedicamentoFindUniqueArgs<ExtArgs>>): Prisma__RecetaMedicamentoClient<$Result.GetResult<Prisma.$RecetaMedicamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecetaMedicamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecetaMedicamentoFindUniqueOrThrowArgs} args - Arguments to find a RecetaMedicamento
     * @example
     * // Get one RecetaMedicamento
     * const recetaMedicamento = await prisma.recetaMedicamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecetaMedicamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, RecetaMedicamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecetaMedicamentoClient<$Result.GetResult<Prisma.$RecetaMedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecetaMedicamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaMedicamentoFindFirstArgs} args - Arguments to find a RecetaMedicamento
     * @example
     * // Get one RecetaMedicamento
     * const recetaMedicamento = await prisma.recetaMedicamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecetaMedicamentoFindFirstArgs>(args?: SelectSubset<T, RecetaMedicamentoFindFirstArgs<ExtArgs>>): Prisma__RecetaMedicamentoClient<$Result.GetResult<Prisma.$RecetaMedicamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecetaMedicamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaMedicamentoFindFirstOrThrowArgs} args - Arguments to find a RecetaMedicamento
     * @example
     * // Get one RecetaMedicamento
     * const recetaMedicamento = await prisma.recetaMedicamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecetaMedicamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, RecetaMedicamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecetaMedicamentoClient<$Result.GetResult<Prisma.$RecetaMedicamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecetaMedicamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaMedicamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecetaMedicamentos
     * const recetaMedicamentos = await prisma.recetaMedicamento.findMany()
     * 
     * // Get first 10 RecetaMedicamentos
     * const recetaMedicamentos = await prisma.recetaMedicamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recetaMedicamentoWithIdOnly = await prisma.recetaMedicamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecetaMedicamentoFindManyArgs>(args?: SelectSubset<T, RecetaMedicamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaMedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecetaMedicamento.
     * @param {RecetaMedicamentoCreateArgs} args - Arguments to create a RecetaMedicamento.
     * @example
     * // Create one RecetaMedicamento
     * const RecetaMedicamento = await prisma.recetaMedicamento.create({
     *   data: {
     *     // ... data to create a RecetaMedicamento
     *   }
     * })
     * 
     */
    create<T extends RecetaMedicamentoCreateArgs>(args: SelectSubset<T, RecetaMedicamentoCreateArgs<ExtArgs>>): Prisma__RecetaMedicamentoClient<$Result.GetResult<Prisma.$RecetaMedicamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecetaMedicamentos.
     * @param {RecetaMedicamentoCreateManyArgs} args - Arguments to create many RecetaMedicamentos.
     * @example
     * // Create many RecetaMedicamentos
     * const recetaMedicamento = await prisma.recetaMedicamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecetaMedicamentoCreateManyArgs>(args?: SelectSubset<T, RecetaMedicamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RecetaMedicamento.
     * @param {RecetaMedicamentoDeleteArgs} args - Arguments to delete one RecetaMedicamento.
     * @example
     * // Delete one RecetaMedicamento
     * const RecetaMedicamento = await prisma.recetaMedicamento.delete({
     *   where: {
     *     // ... filter to delete one RecetaMedicamento
     *   }
     * })
     * 
     */
    delete<T extends RecetaMedicamentoDeleteArgs>(args: SelectSubset<T, RecetaMedicamentoDeleteArgs<ExtArgs>>): Prisma__RecetaMedicamentoClient<$Result.GetResult<Prisma.$RecetaMedicamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecetaMedicamento.
     * @param {RecetaMedicamentoUpdateArgs} args - Arguments to update one RecetaMedicamento.
     * @example
     * // Update one RecetaMedicamento
     * const recetaMedicamento = await prisma.recetaMedicamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecetaMedicamentoUpdateArgs>(args: SelectSubset<T, RecetaMedicamentoUpdateArgs<ExtArgs>>): Prisma__RecetaMedicamentoClient<$Result.GetResult<Prisma.$RecetaMedicamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecetaMedicamentos.
     * @param {RecetaMedicamentoDeleteManyArgs} args - Arguments to filter RecetaMedicamentos to delete.
     * @example
     * // Delete a few RecetaMedicamentos
     * const { count } = await prisma.recetaMedicamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecetaMedicamentoDeleteManyArgs>(args?: SelectSubset<T, RecetaMedicamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecetaMedicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaMedicamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecetaMedicamentos
     * const recetaMedicamento = await prisma.recetaMedicamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecetaMedicamentoUpdateManyArgs>(args: SelectSubset<T, RecetaMedicamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RecetaMedicamento.
     * @param {RecetaMedicamentoUpsertArgs} args - Arguments to update or create a RecetaMedicamento.
     * @example
     * // Update or create a RecetaMedicamento
     * const recetaMedicamento = await prisma.recetaMedicamento.upsert({
     *   create: {
     *     // ... data to create a RecetaMedicamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecetaMedicamento we want to update
     *   }
     * })
     */
    upsert<T extends RecetaMedicamentoUpsertArgs>(args: SelectSubset<T, RecetaMedicamentoUpsertArgs<ExtArgs>>): Prisma__RecetaMedicamentoClient<$Result.GetResult<Prisma.$RecetaMedicamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecetaMedicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaMedicamentoCountArgs} args - Arguments to filter RecetaMedicamentos to count.
     * @example
     * // Count the number of RecetaMedicamentos
     * const count = await prisma.recetaMedicamento.count({
     *   where: {
     *     // ... the filter for the RecetaMedicamentos we want to count
     *   }
     * })
    **/
    count<T extends RecetaMedicamentoCountArgs>(
      args?: Subset<T, RecetaMedicamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecetaMedicamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecetaMedicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaMedicamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecetaMedicamentoAggregateArgs>(args: Subset<T, RecetaMedicamentoAggregateArgs>): Prisma.PrismaPromise<GetRecetaMedicamentoAggregateType<T>>

    /**
     * Group by RecetaMedicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaMedicamentoGroupByArgs} args - Group by arguments.
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
      T extends RecetaMedicamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecetaMedicamentoGroupByArgs['orderBy'] }
        : { orderBy?: RecetaMedicamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecetaMedicamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecetaMedicamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecetaMedicamento model
   */
  readonly fields: RecetaMedicamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecetaMedicamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecetaMedicamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicamento<T extends MedicamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicamentoDefaultArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receta<T extends RecetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecetaDefaultArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecetaMedicamento model
   */
  interface RecetaMedicamentoFieldRefs {
    readonly id: FieldRef<"RecetaMedicamento", 'Int'>
    readonly recetaId: FieldRef<"RecetaMedicamento", 'Int'>
    readonly medicamentoId: FieldRef<"RecetaMedicamento", 'Int'>
    readonly cantidad: FieldRef<"RecetaMedicamento", 'Int'>
    readonly estado: FieldRef<"RecetaMedicamento", 'Estado'>
  }
    

  // Custom InputTypes
  /**
   * RecetaMedicamento findUnique
   */
  export type RecetaMedicamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which RecetaMedicamento to fetch.
     */
    where: RecetaMedicamentoWhereUniqueInput
  }

  /**
   * RecetaMedicamento findUniqueOrThrow
   */
  export type RecetaMedicamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which RecetaMedicamento to fetch.
     */
    where: RecetaMedicamentoWhereUniqueInput
  }

  /**
   * RecetaMedicamento findFirst
   */
  export type RecetaMedicamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which RecetaMedicamento to fetch.
     */
    where?: RecetaMedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaMedicamentos to fetch.
     */
    orderBy?: RecetaMedicamentoOrderByWithRelationInput | RecetaMedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecetaMedicamentos.
     */
    cursor?: RecetaMedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaMedicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaMedicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecetaMedicamentos.
     */
    distinct?: RecetaMedicamentoScalarFieldEnum | RecetaMedicamentoScalarFieldEnum[]
  }

  /**
   * RecetaMedicamento findFirstOrThrow
   */
  export type RecetaMedicamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which RecetaMedicamento to fetch.
     */
    where?: RecetaMedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaMedicamentos to fetch.
     */
    orderBy?: RecetaMedicamentoOrderByWithRelationInput | RecetaMedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecetaMedicamentos.
     */
    cursor?: RecetaMedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaMedicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaMedicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecetaMedicamentos.
     */
    distinct?: RecetaMedicamentoScalarFieldEnum | RecetaMedicamentoScalarFieldEnum[]
  }

  /**
   * RecetaMedicamento findMany
   */
  export type RecetaMedicamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which RecetaMedicamentos to fetch.
     */
    where?: RecetaMedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaMedicamentos to fetch.
     */
    orderBy?: RecetaMedicamentoOrderByWithRelationInput | RecetaMedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecetaMedicamentos.
     */
    cursor?: RecetaMedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaMedicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaMedicamentos.
     */
    skip?: number
    distinct?: RecetaMedicamentoScalarFieldEnum | RecetaMedicamentoScalarFieldEnum[]
  }

  /**
   * RecetaMedicamento create
   */
  export type RecetaMedicamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a RecetaMedicamento.
     */
    data: XOR<RecetaMedicamentoCreateInput, RecetaMedicamentoUncheckedCreateInput>
  }

  /**
   * RecetaMedicamento createMany
   */
  export type RecetaMedicamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecetaMedicamentos.
     */
    data: RecetaMedicamentoCreateManyInput | RecetaMedicamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecetaMedicamento update
   */
  export type RecetaMedicamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a RecetaMedicamento.
     */
    data: XOR<RecetaMedicamentoUpdateInput, RecetaMedicamentoUncheckedUpdateInput>
    /**
     * Choose, which RecetaMedicamento to update.
     */
    where: RecetaMedicamentoWhereUniqueInput
  }

  /**
   * RecetaMedicamento updateMany
   */
  export type RecetaMedicamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecetaMedicamentos.
     */
    data: XOR<RecetaMedicamentoUpdateManyMutationInput, RecetaMedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which RecetaMedicamentos to update
     */
    where?: RecetaMedicamentoWhereInput
    /**
     * Limit how many RecetaMedicamentos to update.
     */
    limit?: number
  }

  /**
   * RecetaMedicamento upsert
   */
  export type RecetaMedicamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the RecetaMedicamento to update in case it exists.
     */
    where: RecetaMedicamentoWhereUniqueInput
    /**
     * In case the RecetaMedicamento found by the `where` argument doesn't exist, create a new RecetaMedicamento with this data.
     */
    create: XOR<RecetaMedicamentoCreateInput, RecetaMedicamentoUncheckedCreateInput>
    /**
     * In case the RecetaMedicamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecetaMedicamentoUpdateInput, RecetaMedicamentoUncheckedUpdateInput>
  }

  /**
   * RecetaMedicamento delete
   */
  export type RecetaMedicamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter which RecetaMedicamento to delete.
     */
    where: RecetaMedicamentoWhereUniqueInput
  }

  /**
   * RecetaMedicamento deleteMany
   */
  export type RecetaMedicamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecetaMedicamentos to delete
     */
    where?: RecetaMedicamentoWhereInput
    /**
     * Limit how many RecetaMedicamentos to delete.
     */
    limit?: number
  }

  /**
   * RecetaMedicamento without action
   */
  export type RecetaMedicamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaMedicamento
     */
    select?: RecetaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaMedicamento
     */
    omit?: RecetaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaMedicamentoInclude<ExtArgs> | null
  }


  /**
   * Model Venta
   */

  export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  export type VentaAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    usuarioId: number | null
    total: Decimal | null
  }

  export type VentaSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    usuarioId: number | null
    total: Decimal | null
  }

  export type VentaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    clienteId: number | null
    usuarioId: number | null
    total: Decimal | null
    formaPago: $Enums.FormaPago | null
  }

  export type VentaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    clienteId: number | null
    usuarioId: number | null
    total: Decimal | null
    formaPago: $Enums.FormaPago | null
  }

  export type VentaCountAggregateOutputType = {
    id: number
    fecha: number
    clienteId: number
    usuarioId: number
    total: number
    formaPago: number
    _all: number
  }


  export type VentaAvgAggregateInputType = {
    id?: true
    clienteId?: true
    usuarioId?: true
    total?: true
  }

  export type VentaSumAggregateInputType = {
    id?: true
    clienteId?: true
    usuarioId?: true
    total?: true
  }

  export type VentaMinAggregateInputType = {
    id?: true
    fecha?: true
    clienteId?: true
    usuarioId?: true
    total?: true
    formaPago?: true
  }

  export type VentaMaxAggregateInputType = {
    id?: true
    fecha?: true
    clienteId?: true
    usuarioId?: true
    total?: true
    formaPago?: true
  }

  export type VentaCountAggregateInputType = {
    id?: true
    fecha?: true
    clienteId?: true
    usuarioId?: true
    total?: true
    formaPago?: true
    _all?: true
  }

  export type VentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venta to aggregate.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMaxAggregateInputType
  }

  export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta[P]>
      : GetScalarType<T[P], AggregateVenta[P]>
  }




  export type VentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithAggregationInput | VentaOrderByWithAggregationInput[]
    by: VentaScalarFieldEnum[] | VentaScalarFieldEnum
    having?: VentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaCountAggregateInputType | true
    _avg?: VentaAvgAggregateInputType
    _sum?: VentaSumAggregateInputType
    _min?: VentaMinAggregateInputType
    _max?: VentaMaxAggregateInputType
  }

  export type VentaGroupByOutputType = {
    id: number
    fecha: Date
    clienteId: number
    usuarioId: number
    total: Decimal
    formaPago: $Enums.FormaPago
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaGroupByOutputType[P]>
            : GetScalarType<T[P], VentaGroupByOutputType[P]>
        }
      >
    >


  export type VentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    clienteId?: boolean
    usuarioId?: boolean
    total?: boolean
    formaPago?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ventaMedicamentos?: boolean | Venta$ventaMedicamentosArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>



  export type VentaSelectScalar = {
    id?: boolean
    fecha?: boolean
    clienteId?: boolean
    usuarioId?: boolean
    total?: boolean
    formaPago?: boolean
  }

  export type VentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "clienteId" | "usuarioId" | "total" | "formaPago", ExtArgs["result"]["venta"]>
  export type VentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ventaMedicamentos?: boolean | Venta$ventaMedicamentosArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venta"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      ventaMedicamentos: Prisma.$VentaMedicamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      clienteId: number
      usuarioId: number
      total: Prisma.Decimal
      formaPago: $Enums.FormaPago
    }, ExtArgs["result"]["venta"]>
    composites: {}
  }

  type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = $Result.GetResult<Prisma.$VentaPayload, S>

  type VentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaCountAggregateInputType | true
    }

  export interface VentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venta'], meta: { name: 'Venta' } }
    /**
     * Find zero or one Venta that matches the filter.
     * @param {VentaFindUniqueArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaFindUniqueArgs>(args: SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaFindUniqueOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaFindFirstArgs>(args?: SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.venta.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.venta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaWithIdOnly = await prisma.venta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaFindManyArgs>(args?: SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venta.
     * @param {VentaCreateArgs} args - Arguments to create a Venta.
     * @example
     * // Create one Venta
     * const Venta = await prisma.venta.create({
     *   data: {
     *     // ... data to create a Venta
     *   }
     * })
     * 
     */
    create<T extends VentaCreateArgs>(args: SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {VentaCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaCreateManyArgs>(args?: SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Venta.
     * @param {VentaDeleteArgs} args - Arguments to delete one Venta.
     * @example
     * // Delete one Venta
     * const Venta = await prisma.venta.delete({
     *   where: {
     *     // ... filter to delete one Venta
     *   }
     * })
     * 
     */
    delete<T extends VentaDeleteArgs>(args: SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venta.
     * @param {VentaUpdateArgs} args - Arguments to update one Venta.
     * @example
     * // Update one Venta
     * const venta = await prisma.venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaUpdateArgs>(args: SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {VentaDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDeleteManyArgs>(args?: SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaUpdateManyArgs>(args: SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Venta.
     * @param {VentaUpsertArgs} args - Arguments to update or create a Venta.
     * @example
     * // Update or create a Venta
     * const venta = await prisma.venta.upsert({
     *   create: {
     *     // ... data to create a Venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta we want to update
     *   }
     * })
     */
    upsert<T extends VentaUpsertArgs>(args: SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.venta.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentaCountArgs>(
      args?: Subset<T, VentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentaAggregateArgs>(args: Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>

    /**
     * Group by Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaGroupByArgs} args - Group by arguments.
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
      T extends VentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaGroupByArgs['orderBy'] }
        : { orderBy?: VentaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venta model
   */
  readonly fields: VentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ventaMedicamentos<T extends Venta$ventaMedicamentosArgs<ExtArgs> = {}>(args?: Subset<T, Venta$ventaMedicamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaMedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Venta model
   */
  interface VentaFieldRefs {
    readonly id: FieldRef<"Venta", 'Int'>
    readonly fecha: FieldRef<"Venta", 'DateTime'>
    readonly clienteId: FieldRef<"Venta", 'Int'>
    readonly usuarioId: FieldRef<"Venta", 'Int'>
    readonly total: FieldRef<"Venta", 'Decimal'>
    readonly formaPago: FieldRef<"Venta", 'FormaPago'>
  }
    

  // Custom InputTypes
  /**
   * Venta findUnique
   */
  export type VentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findUniqueOrThrow
   */
  export type VentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findFirst
   */
  export type VentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findFirstOrThrow
   */
  export type VentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findMany
   */
  export type VentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta create
   */
  export type VentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venta.
     */
    data: XOR<VentaCreateInput, VentaUncheckedCreateInput>
  }

  /**
   * Venta createMany
   */
  export type VentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta update
   */
  export type VentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venta.
     */
    data: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
    /**
     * Choose, which Venta to update.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta updateMany
   */
  export type VentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta upsert
   */
  export type VentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venta to update in case it exists.
     */
    where: VentaWhereUniqueInput
    /**
     * In case the Venta found by the `where` argument doesn't exist, create a new Venta with this data.
     */
    create: XOR<VentaCreateInput, VentaUncheckedCreateInput>
    /**
     * In case the Venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
  }

  /**
   * Venta delete
   */
  export type VentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter which Venta to delete.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta deleteMany
   */
  export type VentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to delete.
     */
    limit?: number
  }

  /**
   * Venta.ventaMedicamentos
   */
  export type Venta$ventaMedicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
    where?: VentaMedicamentoWhereInput
    orderBy?: VentaMedicamentoOrderByWithRelationInput | VentaMedicamentoOrderByWithRelationInput[]
    cursor?: VentaMedicamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaMedicamentoScalarFieldEnum | VentaMedicamentoScalarFieldEnum[]
  }

  /**
   * Venta without action
   */
  export type VentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
  }


  /**
   * Model VentaMedicamento
   */

  export type AggregateVentaMedicamento = {
    _count: VentaMedicamentoCountAggregateOutputType | null
    _avg: VentaMedicamentoAvgAggregateOutputType | null
    _sum: VentaMedicamentoSumAggregateOutputType | null
    _min: VentaMedicamentoMinAggregateOutputType | null
    _max: VentaMedicamentoMaxAggregateOutputType | null
  }

  export type VentaMedicamentoAvgAggregateOutputType = {
    id: number | null
    ventaId: number | null
    medicamentoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type VentaMedicamentoSumAggregateOutputType = {
    id: number | null
    ventaId: number | null
    medicamentoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type VentaMedicamentoMinAggregateOutputType = {
    id: number | null
    ventaId: number | null
    medicamentoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type VentaMedicamentoMaxAggregateOutputType = {
    id: number | null
    ventaId: number | null
    medicamentoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type VentaMedicamentoCountAggregateOutputType = {
    id: number
    ventaId: number
    medicamentoId: number
    cantidad: number
    precioUnitario: number
    _all: number
  }


  export type VentaMedicamentoAvgAggregateInputType = {
    id?: true
    ventaId?: true
    medicamentoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type VentaMedicamentoSumAggregateInputType = {
    id?: true
    ventaId?: true
    medicamentoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type VentaMedicamentoMinAggregateInputType = {
    id?: true
    ventaId?: true
    medicamentoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type VentaMedicamentoMaxAggregateInputType = {
    id?: true
    ventaId?: true
    medicamentoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type VentaMedicamentoCountAggregateInputType = {
    id?: true
    ventaId?: true
    medicamentoId?: true
    cantidad?: true
    precioUnitario?: true
    _all?: true
  }

  export type VentaMedicamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VentaMedicamento to aggregate.
     */
    where?: VentaMedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaMedicamentos to fetch.
     */
    orderBy?: VentaMedicamentoOrderByWithRelationInput | VentaMedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaMedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaMedicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaMedicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VentaMedicamentos
    **/
    _count?: true | VentaMedicamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaMedicamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaMedicamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMedicamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMedicamentoMaxAggregateInputType
  }

  export type GetVentaMedicamentoAggregateType<T extends VentaMedicamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateVentaMedicamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVentaMedicamento[P]>
      : GetScalarType<T[P], AggregateVentaMedicamento[P]>
  }




  export type VentaMedicamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaMedicamentoWhereInput
    orderBy?: VentaMedicamentoOrderByWithAggregationInput | VentaMedicamentoOrderByWithAggregationInput[]
    by: VentaMedicamentoScalarFieldEnum[] | VentaMedicamentoScalarFieldEnum
    having?: VentaMedicamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaMedicamentoCountAggregateInputType | true
    _avg?: VentaMedicamentoAvgAggregateInputType
    _sum?: VentaMedicamentoSumAggregateInputType
    _min?: VentaMedicamentoMinAggregateInputType
    _max?: VentaMedicamentoMaxAggregateInputType
  }

  export type VentaMedicamentoGroupByOutputType = {
    id: number
    ventaId: number
    medicamentoId: number
    cantidad: number
    precioUnitario: Decimal
    _count: VentaMedicamentoCountAggregateOutputType | null
    _avg: VentaMedicamentoAvgAggregateOutputType | null
    _sum: VentaMedicamentoSumAggregateOutputType | null
    _min: VentaMedicamentoMinAggregateOutputType | null
    _max: VentaMedicamentoMaxAggregateOutputType | null
  }

  type GetVentaMedicamentoGroupByPayload<T extends VentaMedicamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaMedicamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaMedicamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaMedicamentoGroupByOutputType[P]>
            : GetScalarType<T[P], VentaMedicamentoGroupByOutputType[P]>
        }
      >
    >


  export type VentaMedicamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    medicamentoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
    venta?: boolean | VentaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ventaMedicamento"]>



  export type VentaMedicamentoSelectScalar = {
    id?: boolean
    ventaId?: boolean
    medicamentoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
  }

  export type VentaMedicamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ventaId" | "medicamentoId" | "cantidad" | "precioUnitario", ExtArgs["result"]["ventaMedicamento"]>
  export type VentaMedicamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
    venta?: boolean | VentaDefaultArgs<ExtArgs>
  }

  export type $VentaMedicamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VentaMedicamento"
    objects: {
      medicamento: Prisma.$MedicamentoPayload<ExtArgs>
      venta: Prisma.$VentaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ventaId: number
      medicamentoId: number
      cantidad: number
      precioUnitario: Prisma.Decimal
    }, ExtArgs["result"]["ventaMedicamento"]>
    composites: {}
  }

  type VentaMedicamentoGetPayload<S extends boolean | null | undefined | VentaMedicamentoDefaultArgs> = $Result.GetResult<Prisma.$VentaMedicamentoPayload, S>

  type VentaMedicamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaMedicamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaMedicamentoCountAggregateInputType | true
    }

  export interface VentaMedicamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VentaMedicamento'], meta: { name: 'VentaMedicamento' } }
    /**
     * Find zero or one VentaMedicamento that matches the filter.
     * @param {VentaMedicamentoFindUniqueArgs} args - Arguments to find a VentaMedicamento
     * @example
     * // Get one VentaMedicamento
     * const ventaMedicamento = await prisma.ventaMedicamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaMedicamentoFindUniqueArgs>(args: SelectSubset<T, VentaMedicamentoFindUniqueArgs<ExtArgs>>): Prisma__VentaMedicamentoClient<$Result.GetResult<Prisma.$VentaMedicamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VentaMedicamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaMedicamentoFindUniqueOrThrowArgs} args - Arguments to find a VentaMedicamento
     * @example
     * // Get one VentaMedicamento
     * const ventaMedicamento = await prisma.ventaMedicamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaMedicamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaMedicamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaMedicamentoClient<$Result.GetResult<Prisma.$VentaMedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VentaMedicamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaMedicamentoFindFirstArgs} args - Arguments to find a VentaMedicamento
     * @example
     * // Get one VentaMedicamento
     * const ventaMedicamento = await prisma.ventaMedicamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaMedicamentoFindFirstArgs>(args?: SelectSubset<T, VentaMedicamentoFindFirstArgs<ExtArgs>>): Prisma__VentaMedicamentoClient<$Result.GetResult<Prisma.$VentaMedicamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VentaMedicamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaMedicamentoFindFirstOrThrowArgs} args - Arguments to find a VentaMedicamento
     * @example
     * // Get one VentaMedicamento
     * const ventaMedicamento = await prisma.ventaMedicamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaMedicamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaMedicamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaMedicamentoClient<$Result.GetResult<Prisma.$VentaMedicamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VentaMedicamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaMedicamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VentaMedicamentos
     * const ventaMedicamentos = await prisma.ventaMedicamento.findMany()
     * 
     * // Get first 10 VentaMedicamentos
     * const ventaMedicamentos = await prisma.ventaMedicamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaMedicamentoWithIdOnly = await prisma.ventaMedicamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaMedicamentoFindManyArgs>(args?: SelectSubset<T, VentaMedicamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaMedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VentaMedicamento.
     * @param {VentaMedicamentoCreateArgs} args - Arguments to create a VentaMedicamento.
     * @example
     * // Create one VentaMedicamento
     * const VentaMedicamento = await prisma.ventaMedicamento.create({
     *   data: {
     *     // ... data to create a VentaMedicamento
     *   }
     * })
     * 
     */
    create<T extends VentaMedicamentoCreateArgs>(args: SelectSubset<T, VentaMedicamentoCreateArgs<ExtArgs>>): Prisma__VentaMedicamentoClient<$Result.GetResult<Prisma.$VentaMedicamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VentaMedicamentos.
     * @param {VentaMedicamentoCreateManyArgs} args - Arguments to create many VentaMedicamentos.
     * @example
     * // Create many VentaMedicamentos
     * const ventaMedicamento = await prisma.ventaMedicamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaMedicamentoCreateManyArgs>(args?: SelectSubset<T, VentaMedicamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VentaMedicamento.
     * @param {VentaMedicamentoDeleteArgs} args - Arguments to delete one VentaMedicamento.
     * @example
     * // Delete one VentaMedicamento
     * const VentaMedicamento = await prisma.ventaMedicamento.delete({
     *   where: {
     *     // ... filter to delete one VentaMedicamento
     *   }
     * })
     * 
     */
    delete<T extends VentaMedicamentoDeleteArgs>(args: SelectSubset<T, VentaMedicamentoDeleteArgs<ExtArgs>>): Prisma__VentaMedicamentoClient<$Result.GetResult<Prisma.$VentaMedicamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VentaMedicamento.
     * @param {VentaMedicamentoUpdateArgs} args - Arguments to update one VentaMedicamento.
     * @example
     * // Update one VentaMedicamento
     * const ventaMedicamento = await prisma.ventaMedicamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaMedicamentoUpdateArgs>(args: SelectSubset<T, VentaMedicamentoUpdateArgs<ExtArgs>>): Prisma__VentaMedicamentoClient<$Result.GetResult<Prisma.$VentaMedicamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VentaMedicamentos.
     * @param {VentaMedicamentoDeleteManyArgs} args - Arguments to filter VentaMedicamentos to delete.
     * @example
     * // Delete a few VentaMedicamentos
     * const { count } = await prisma.ventaMedicamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaMedicamentoDeleteManyArgs>(args?: SelectSubset<T, VentaMedicamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VentaMedicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaMedicamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VentaMedicamentos
     * const ventaMedicamento = await prisma.ventaMedicamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaMedicamentoUpdateManyArgs>(args: SelectSubset<T, VentaMedicamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VentaMedicamento.
     * @param {VentaMedicamentoUpsertArgs} args - Arguments to update or create a VentaMedicamento.
     * @example
     * // Update or create a VentaMedicamento
     * const ventaMedicamento = await prisma.ventaMedicamento.upsert({
     *   create: {
     *     // ... data to create a VentaMedicamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VentaMedicamento we want to update
     *   }
     * })
     */
    upsert<T extends VentaMedicamentoUpsertArgs>(args: SelectSubset<T, VentaMedicamentoUpsertArgs<ExtArgs>>): Prisma__VentaMedicamentoClient<$Result.GetResult<Prisma.$VentaMedicamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VentaMedicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaMedicamentoCountArgs} args - Arguments to filter VentaMedicamentos to count.
     * @example
     * // Count the number of VentaMedicamentos
     * const count = await prisma.ventaMedicamento.count({
     *   where: {
     *     // ... the filter for the VentaMedicamentos we want to count
     *   }
     * })
    **/
    count<T extends VentaMedicamentoCountArgs>(
      args?: Subset<T, VentaMedicamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaMedicamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VentaMedicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaMedicamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentaMedicamentoAggregateArgs>(args: Subset<T, VentaMedicamentoAggregateArgs>): Prisma.PrismaPromise<GetVentaMedicamentoAggregateType<T>>

    /**
     * Group by VentaMedicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaMedicamentoGroupByArgs} args - Group by arguments.
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
      T extends VentaMedicamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaMedicamentoGroupByArgs['orderBy'] }
        : { orderBy?: VentaMedicamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VentaMedicamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaMedicamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VentaMedicamento model
   */
  readonly fields: VentaMedicamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VentaMedicamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaMedicamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicamento<T extends MedicamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicamentoDefaultArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venta<T extends VentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VentaDefaultArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VentaMedicamento model
   */
  interface VentaMedicamentoFieldRefs {
    readonly id: FieldRef<"VentaMedicamento", 'Int'>
    readonly ventaId: FieldRef<"VentaMedicamento", 'Int'>
    readonly medicamentoId: FieldRef<"VentaMedicamento", 'Int'>
    readonly cantidad: FieldRef<"VentaMedicamento", 'Int'>
    readonly precioUnitario: FieldRef<"VentaMedicamento", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * VentaMedicamento findUnique
   */
  export type VentaMedicamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which VentaMedicamento to fetch.
     */
    where: VentaMedicamentoWhereUniqueInput
  }

  /**
   * VentaMedicamento findUniqueOrThrow
   */
  export type VentaMedicamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which VentaMedicamento to fetch.
     */
    where: VentaMedicamentoWhereUniqueInput
  }

  /**
   * VentaMedicamento findFirst
   */
  export type VentaMedicamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which VentaMedicamento to fetch.
     */
    where?: VentaMedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaMedicamentos to fetch.
     */
    orderBy?: VentaMedicamentoOrderByWithRelationInput | VentaMedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VentaMedicamentos.
     */
    cursor?: VentaMedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaMedicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaMedicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VentaMedicamentos.
     */
    distinct?: VentaMedicamentoScalarFieldEnum | VentaMedicamentoScalarFieldEnum[]
  }

  /**
   * VentaMedicamento findFirstOrThrow
   */
  export type VentaMedicamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which VentaMedicamento to fetch.
     */
    where?: VentaMedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaMedicamentos to fetch.
     */
    orderBy?: VentaMedicamentoOrderByWithRelationInput | VentaMedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VentaMedicamentos.
     */
    cursor?: VentaMedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaMedicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaMedicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VentaMedicamentos.
     */
    distinct?: VentaMedicamentoScalarFieldEnum | VentaMedicamentoScalarFieldEnum[]
  }

  /**
   * VentaMedicamento findMany
   */
  export type VentaMedicamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which VentaMedicamentos to fetch.
     */
    where?: VentaMedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaMedicamentos to fetch.
     */
    orderBy?: VentaMedicamentoOrderByWithRelationInput | VentaMedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VentaMedicamentos.
     */
    cursor?: VentaMedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaMedicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaMedicamentos.
     */
    skip?: number
    distinct?: VentaMedicamentoScalarFieldEnum | VentaMedicamentoScalarFieldEnum[]
  }

  /**
   * VentaMedicamento create
   */
  export type VentaMedicamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a VentaMedicamento.
     */
    data: XOR<VentaMedicamentoCreateInput, VentaMedicamentoUncheckedCreateInput>
  }

  /**
   * VentaMedicamento createMany
   */
  export type VentaMedicamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VentaMedicamentos.
     */
    data: VentaMedicamentoCreateManyInput | VentaMedicamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VentaMedicamento update
   */
  export type VentaMedicamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a VentaMedicamento.
     */
    data: XOR<VentaMedicamentoUpdateInput, VentaMedicamentoUncheckedUpdateInput>
    /**
     * Choose, which VentaMedicamento to update.
     */
    where: VentaMedicamentoWhereUniqueInput
  }

  /**
   * VentaMedicamento updateMany
   */
  export type VentaMedicamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VentaMedicamentos.
     */
    data: XOR<VentaMedicamentoUpdateManyMutationInput, VentaMedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which VentaMedicamentos to update
     */
    where?: VentaMedicamentoWhereInput
    /**
     * Limit how many VentaMedicamentos to update.
     */
    limit?: number
  }

  /**
   * VentaMedicamento upsert
   */
  export type VentaMedicamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the VentaMedicamento to update in case it exists.
     */
    where: VentaMedicamentoWhereUniqueInput
    /**
     * In case the VentaMedicamento found by the `where` argument doesn't exist, create a new VentaMedicamento with this data.
     */
    create: XOR<VentaMedicamentoCreateInput, VentaMedicamentoUncheckedCreateInput>
    /**
     * In case the VentaMedicamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaMedicamentoUpdateInput, VentaMedicamentoUncheckedUpdateInput>
  }

  /**
   * VentaMedicamento delete
   */
  export type VentaMedicamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
    /**
     * Filter which VentaMedicamento to delete.
     */
    where: VentaMedicamentoWhereUniqueInput
  }

  /**
   * VentaMedicamento deleteMany
   */
  export type VentaMedicamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VentaMedicamentos to delete
     */
    where?: VentaMedicamentoWhereInput
    /**
     * Limit how many VentaMedicamentos to delete.
     */
    limit?: number
  }

  /**
   * VentaMedicamento without action
   */
  export type VentaMedicamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaMedicamento
     */
    select?: VentaMedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaMedicamento
     */
    omit?: VentaMedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaMedicamentoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    clave: string | null
    perfil: $Enums.Perfil | null
    activo: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    clave: string | null
    perfil: $Enums.Perfil | null
    activo: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    clave: number
    perfil: number
    activo: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    clave?: true
    perfil?: true
    activo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    clave?: true
    perfil?: true
    activo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    clave?: true
    perfil?: true
    activo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    clave: string
    perfil: $Enums.Perfil
    activo: boolean
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    clave?: boolean
    perfil?: boolean
    activo?: boolean
    ventas?: boolean | Usuario$ventasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    clave?: boolean
    perfil?: boolean
    activo?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "clave" | "perfil" | "activo", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | Usuario$ventasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      ventas: Prisma.$VentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      clave: string
      perfil: $Enums.Perfil
      activo: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ventas<T extends Usuario$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly clave: FieldRef<"Usuario", 'String'>
    readonly perfil: FieldRef<"Usuario", 'Perfil'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.ventas
   */
  export type Usuario$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    email: string | null
    nombre: string | null
    suscripto: boolean | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    email: string | null
    nombre: string | null
    suscripto: boolean | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    email: number
    nombre: number
    suscripto: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    suscripto?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    suscripto?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    suscripto?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    email: string
    nombre: string
    suscripto: boolean
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nombre?: boolean
    suscripto?: boolean
    ventas?: boolean | Cliente$ventasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    email?: boolean
    nombre?: boolean
    suscripto?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nombre" | "suscripto", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | Cliente$ventasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      ventas: Prisma.$VentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      nombre: string
      suscripto: boolean
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ventas<T extends Cliente$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly suscripto: FieldRef<"Cliente", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.ventas
   */
  export type Cliente$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
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


  export const ProveedorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    telefono: 'telefono'
  };

  export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum]


  export const MedicamentoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    principioActivo: 'principioActivo',
    laboratorio: 'laboratorio',
    proveedorId: 'proveedorId',
    fechaVencimiento: 'fechaVencimiento',
    formaFarmaceutica: 'formaFarmaceutica',
    presentacion: 'presentacion',
    lote: 'lote',
    stock: 'stock'
  };

  export type MedicamentoScalarFieldEnum = (typeof MedicamentoScalarFieldEnum)[keyof typeof MedicamentoScalarFieldEnum]


  export const DevolucionScalarFieldEnum: {
    id: 'id',
    medicamentoId: 'medicamentoId',
    fecha: 'fecha',
    cantidad: 'cantidad',
    motivo: 'motivo'
  };

  export type DevolucionScalarFieldEnum = (typeof DevolucionScalarFieldEnum)[keyof typeof DevolucionScalarFieldEnum]


  export const InventarioScalarFieldEnum: {
    id: 'id',
    medicamentoId: 'medicamentoId',
    fecha: 'fecha',
    cantidad: 'cantidad'
  };

  export type InventarioScalarFieldEnum = (typeof InventarioScalarFieldEnum)[keyof typeof InventarioScalarFieldEnum]


  export const RecetaScalarFieldEnum: {
    id: 'id',
    pacienteNombre: 'pacienteNombre',
    medicoNombre: 'medicoNombre',
    fecha: 'fecha'
  };

  export type RecetaScalarFieldEnum = (typeof RecetaScalarFieldEnum)[keyof typeof RecetaScalarFieldEnum]


  export const RecetaMedicamentoScalarFieldEnum: {
    id: 'id',
    recetaId: 'recetaId',
    medicamentoId: 'medicamentoId',
    cantidad: 'cantidad',
    estado: 'estado'
  };

  export type RecetaMedicamentoScalarFieldEnum = (typeof RecetaMedicamentoScalarFieldEnum)[keyof typeof RecetaMedicamentoScalarFieldEnum]


  export const VentaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    clienteId: 'clienteId',
    usuarioId: 'usuarioId',
    total: 'total',
    formaPago: 'formaPago'
  };

  export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum]


  export const VentaMedicamentoScalarFieldEnum: {
    id: 'id',
    ventaId: 'ventaId',
    medicamentoId: 'medicamentoId',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario'
  };

  export type VentaMedicamentoScalarFieldEnum = (typeof VentaMedicamentoScalarFieldEnum)[keyof typeof VentaMedicamentoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    clave: 'clave',
    perfil: 'perfil',
    activo: 'activo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nombre: 'nombre',
    suscripto: 'suscripto'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ProveedorOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    direccion: 'direccion'
  };

  export type ProveedorOrderByRelevanceFieldEnum = (typeof ProveedorOrderByRelevanceFieldEnum)[keyof typeof ProveedorOrderByRelevanceFieldEnum]


  export const MedicamentoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    principioActivo: 'principioActivo',
    laboratorio: 'laboratorio',
    lote: 'lote'
  };

  export type MedicamentoOrderByRelevanceFieldEnum = (typeof MedicamentoOrderByRelevanceFieldEnum)[keyof typeof MedicamentoOrderByRelevanceFieldEnum]


  export const DevolucionOrderByRelevanceFieldEnum: {
    motivo: 'motivo'
  };

  export type DevolucionOrderByRelevanceFieldEnum = (typeof DevolucionOrderByRelevanceFieldEnum)[keyof typeof DevolucionOrderByRelevanceFieldEnum]


  export const RecetaOrderByRelevanceFieldEnum: {
    pacienteNombre: 'pacienteNombre',
    medicoNombre: 'medicoNombre'
  };

  export type RecetaOrderByRelevanceFieldEnum = (typeof RecetaOrderByRelevanceFieldEnum)[keyof typeof RecetaOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    email: 'email',
    clave: 'clave'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const ClienteOrderByRelevanceFieldEnum: {
    email: 'email',
    nombre: 'nombre'
  };

  export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'FormaFarmaceutica'
   */
  export type EnumFormaFarmaceuticaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaFarmaceutica'>
    


  /**
   * Reference to a field of type 'Presentacion'
   */
  export type EnumPresentacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Presentacion'>
    


  /**
   * Reference to a field of type 'Estado'
   */
  export type EnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'FormaPago'
   */
  export type EnumFormaPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaPago'>
    


  /**
   * Reference to a field of type 'Perfil'
   */
  export type EnumPerfilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Perfil'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProveedorWhereInput = {
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    id?: IntFilter<"Proveedor"> | number
    nombre?: StringFilter<"Proveedor"> | string
    direccion?: StringFilter<"Proveedor"> | string
    telefono?: IntFilter<"Proveedor"> | number
    medicamentos?: MedicamentoListRelationFilter
  }

  export type ProveedorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    medicamentos?: MedicamentoOrderByRelationAggregateInput
    _relevance?: ProveedorOrderByRelevanceInput
  }

  export type ProveedorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    nombre?: StringFilter<"Proveedor"> | string
    direccion?: StringFilter<"Proveedor"> | string
    telefono?: IntFilter<"Proveedor"> | number
    medicamentos?: MedicamentoListRelationFilter
  }, "id">

  export type ProveedorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    _count?: ProveedorCountOrderByAggregateInput
    _avg?: ProveedorAvgOrderByAggregateInput
    _max?: ProveedorMaxOrderByAggregateInput
    _min?: ProveedorMinOrderByAggregateInput
    _sum?: ProveedorSumOrderByAggregateInput
  }

  export type ProveedorScalarWhereWithAggregatesInput = {
    AND?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    OR?: ProveedorScalarWhereWithAggregatesInput[]
    NOT?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Proveedor"> | number
    nombre?: StringWithAggregatesFilter<"Proveedor"> | string
    direccion?: StringWithAggregatesFilter<"Proveedor"> | string
    telefono?: IntWithAggregatesFilter<"Proveedor"> | number
  }

  export type MedicamentoWhereInput = {
    AND?: MedicamentoWhereInput | MedicamentoWhereInput[]
    OR?: MedicamentoWhereInput[]
    NOT?: MedicamentoWhereInput | MedicamentoWhereInput[]
    id?: IntFilter<"Medicamento"> | number
    nombre?: StringFilter<"Medicamento"> | string
    principioActivo?: StringFilter<"Medicamento"> | string
    laboratorio?: StringFilter<"Medicamento"> | string
    proveedorId?: IntFilter<"Medicamento"> | number
    fechaVencimiento?: DateTimeFilter<"Medicamento"> | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFilter<"Medicamento"> | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFilter<"Medicamento"> | $Enums.Presentacion
    lote?: StringFilter<"Medicamento"> | string
    stock?: IntFilter<"Medicamento"> | number
    devoluciones?: DevolucionListRelationFilter
    inventarios?: InventarioListRelationFilter
    proveedor?: XOR<ProveedorScalarRelationFilter, ProveedorWhereInput>
    recetasMedicamentos?: RecetaMedicamentoListRelationFilter
    ventaMedicamentos?: VentaMedicamentoListRelationFilter
  }

  export type MedicamentoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    principioActivo?: SortOrder
    laboratorio?: SortOrder
    proveedorId?: SortOrder
    fechaVencimiento?: SortOrder
    formaFarmaceutica?: SortOrder
    presentacion?: SortOrder
    lote?: SortOrder
    stock?: SortOrder
    devoluciones?: DevolucionOrderByRelationAggregateInput
    inventarios?: InventarioOrderByRelationAggregateInput
    proveedor?: ProveedorOrderByWithRelationInput
    recetasMedicamentos?: RecetaMedicamentoOrderByRelationAggregateInput
    ventaMedicamentos?: VentaMedicamentoOrderByRelationAggregateInput
    _relevance?: MedicamentoOrderByRelevanceInput
  }

  export type MedicamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicamentoWhereInput | MedicamentoWhereInput[]
    OR?: MedicamentoWhereInput[]
    NOT?: MedicamentoWhereInput | MedicamentoWhereInput[]
    nombre?: StringFilter<"Medicamento"> | string
    principioActivo?: StringFilter<"Medicamento"> | string
    laboratorio?: StringFilter<"Medicamento"> | string
    proveedorId?: IntFilter<"Medicamento"> | number
    fechaVencimiento?: DateTimeFilter<"Medicamento"> | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFilter<"Medicamento"> | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFilter<"Medicamento"> | $Enums.Presentacion
    lote?: StringFilter<"Medicamento"> | string
    stock?: IntFilter<"Medicamento"> | number
    devoluciones?: DevolucionListRelationFilter
    inventarios?: InventarioListRelationFilter
    proveedor?: XOR<ProveedorScalarRelationFilter, ProveedorWhereInput>
    recetasMedicamentos?: RecetaMedicamentoListRelationFilter
    ventaMedicamentos?: VentaMedicamentoListRelationFilter
  }, "id">

  export type MedicamentoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    principioActivo?: SortOrder
    laboratorio?: SortOrder
    proveedorId?: SortOrder
    fechaVencimiento?: SortOrder
    formaFarmaceutica?: SortOrder
    presentacion?: SortOrder
    lote?: SortOrder
    stock?: SortOrder
    _count?: MedicamentoCountOrderByAggregateInput
    _avg?: MedicamentoAvgOrderByAggregateInput
    _max?: MedicamentoMaxOrderByAggregateInput
    _min?: MedicamentoMinOrderByAggregateInput
    _sum?: MedicamentoSumOrderByAggregateInput
  }

  export type MedicamentoScalarWhereWithAggregatesInput = {
    AND?: MedicamentoScalarWhereWithAggregatesInput | MedicamentoScalarWhereWithAggregatesInput[]
    OR?: MedicamentoScalarWhereWithAggregatesInput[]
    NOT?: MedicamentoScalarWhereWithAggregatesInput | MedicamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medicamento"> | number
    nombre?: StringWithAggregatesFilter<"Medicamento"> | string
    principioActivo?: StringWithAggregatesFilter<"Medicamento"> | string
    laboratorio?: StringWithAggregatesFilter<"Medicamento"> | string
    proveedorId?: IntWithAggregatesFilter<"Medicamento"> | number
    fechaVencimiento?: DateTimeWithAggregatesFilter<"Medicamento"> | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaWithAggregatesFilter<"Medicamento"> | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionWithAggregatesFilter<"Medicamento"> | $Enums.Presentacion
    lote?: StringWithAggregatesFilter<"Medicamento"> | string
    stock?: IntWithAggregatesFilter<"Medicamento"> | number
  }

  export type DevolucionWhereInput = {
    AND?: DevolucionWhereInput | DevolucionWhereInput[]
    OR?: DevolucionWhereInput[]
    NOT?: DevolucionWhereInput | DevolucionWhereInput[]
    id?: IntFilter<"Devolucion"> | number
    medicamentoId?: IntFilter<"Devolucion"> | number
    fecha?: DateTimeFilter<"Devolucion"> | Date | string
    cantidad?: IntFilter<"Devolucion"> | number
    motivo?: StringFilter<"Devolucion"> | string
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
  }

  export type DevolucionOrderByWithRelationInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    medicamento?: MedicamentoOrderByWithRelationInput
    _relevance?: DevolucionOrderByRelevanceInput
  }

  export type DevolucionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DevolucionWhereInput | DevolucionWhereInput[]
    OR?: DevolucionWhereInput[]
    NOT?: DevolucionWhereInput | DevolucionWhereInput[]
    medicamentoId?: IntFilter<"Devolucion"> | number
    fecha?: DateTimeFilter<"Devolucion"> | Date | string
    cantidad?: IntFilter<"Devolucion"> | number
    motivo?: StringFilter<"Devolucion"> | string
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
  }, "id">

  export type DevolucionOrderByWithAggregationInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    _count?: DevolucionCountOrderByAggregateInput
    _avg?: DevolucionAvgOrderByAggregateInput
    _max?: DevolucionMaxOrderByAggregateInput
    _min?: DevolucionMinOrderByAggregateInput
    _sum?: DevolucionSumOrderByAggregateInput
  }

  export type DevolucionScalarWhereWithAggregatesInput = {
    AND?: DevolucionScalarWhereWithAggregatesInput | DevolucionScalarWhereWithAggregatesInput[]
    OR?: DevolucionScalarWhereWithAggregatesInput[]
    NOT?: DevolucionScalarWhereWithAggregatesInput | DevolucionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Devolucion"> | number
    medicamentoId?: IntWithAggregatesFilter<"Devolucion"> | number
    fecha?: DateTimeWithAggregatesFilter<"Devolucion"> | Date | string
    cantidad?: IntWithAggregatesFilter<"Devolucion"> | number
    motivo?: StringWithAggregatesFilter<"Devolucion"> | string
  }

  export type InventarioWhereInput = {
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    id?: IntFilter<"Inventario"> | number
    medicamentoId?: IntFilter<"Inventario"> | number
    fecha?: DateTimeFilter<"Inventario"> | Date | string
    cantidad?: IntFilter<"Inventario"> | number
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
  }

  export type InventarioOrderByWithRelationInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    medicamento?: MedicamentoOrderByWithRelationInput
  }

  export type InventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    medicamentoId?: IntFilter<"Inventario"> | number
    fecha?: DateTimeFilter<"Inventario"> | Date | string
    cantidad?: IntFilter<"Inventario"> | number
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
  }, "id">

  export type InventarioOrderByWithAggregationInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    _count?: InventarioCountOrderByAggregateInput
    _avg?: InventarioAvgOrderByAggregateInput
    _max?: InventarioMaxOrderByAggregateInput
    _min?: InventarioMinOrderByAggregateInput
    _sum?: InventarioSumOrderByAggregateInput
  }

  export type InventarioScalarWhereWithAggregatesInput = {
    AND?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    OR?: InventarioScalarWhereWithAggregatesInput[]
    NOT?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inventario"> | number
    medicamentoId?: IntWithAggregatesFilter<"Inventario"> | number
    fecha?: DateTimeWithAggregatesFilter<"Inventario"> | Date | string
    cantidad?: IntWithAggregatesFilter<"Inventario"> | number
  }

  export type RecetaWhereInput = {
    AND?: RecetaWhereInput | RecetaWhereInput[]
    OR?: RecetaWhereInput[]
    NOT?: RecetaWhereInput | RecetaWhereInput[]
    id?: IntFilter<"Receta"> | number
    pacienteNombre?: StringFilter<"Receta"> | string
    medicoNombre?: StringFilter<"Receta"> | string
    fecha?: DateTimeFilter<"Receta"> | Date | string
    recetaMedicamentos?: RecetaMedicamentoListRelationFilter
  }

  export type RecetaOrderByWithRelationInput = {
    id?: SortOrder
    pacienteNombre?: SortOrder
    medicoNombre?: SortOrder
    fecha?: SortOrder
    recetaMedicamentos?: RecetaMedicamentoOrderByRelationAggregateInput
    _relevance?: RecetaOrderByRelevanceInput
  }

  export type RecetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecetaWhereInput | RecetaWhereInput[]
    OR?: RecetaWhereInput[]
    NOT?: RecetaWhereInput | RecetaWhereInput[]
    pacienteNombre?: StringFilter<"Receta"> | string
    medicoNombre?: StringFilter<"Receta"> | string
    fecha?: DateTimeFilter<"Receta"> | Date | string
    recetaMedicamentos?: RecetaMedicamentoListRelationFilter
  }, "id">

  export type RecetaOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteNombre?: SortOrder
    medicoNombre?: SortOrder
    fecha?: SortOrder
    _count?: RecetaCountOrderByAggregateInput
    _avg?: RecetaAvgOrderByAggregateInput
    _max?: RecetaMaxOrderByAggregateInput
    _min?: RecetaMinOrderByAggregateInput
    _sum?: RecetaSumOrderByAggregateInput
  }

  export type RecetaScalarWhereWithAggregatesInput = {
    AND?: RecetaScalarWhereWithAggregatesInput | RecetaScalarWhereWithAggregatesInput[]
    OR?: RecetaScalarWhereWithAggregatesInput[]
    NOT?: RecetaScalarWhereWithAggregatesInput | RecetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Receta"> | number
    pacienteNombre?: StringWithAggregatesFilter<"Receta"> | string
    medicoNombre?: StringWithAggregatesFilter<"Receta"> | string
    fecha?: DateTimeWithAggregatesFilter<"Receta"> | Date | string
  }

  export type RecetaMedicamentoWhereInput = {
    AND?: RecetaMedicamentoWhereInput | RecetaMedicamentoWhereInput[]
    OR?: RecetaMedicamentoWhereInput[]
    NOT?: RecetaMedicamentoWhereInput | RecetaMedicamentoWhereInput[]
    id?: IntFilter<"RecetaMedicamento"> | number
    recetaId?: IntFilter<"RecetaMedicamento"> | number
    medicamentoId?: IntFilter<"RecetaMedicamento"> | number
    cantidad?: IntFilter<"RecetaMedicamento"> | number
    estado?: EnumEstadoFilter<"RecetaMedicamento"> | $Enums.Estado
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
    receta?: XOR<RecetaScalarRelationFilter, RecetaWhereInput>
  }

  export type RecetaMedicamentoOrderByWithRelationInput = {
    id?: SortOrder
    recetaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
    medicamento?: MedicamentoOrderByWithRelationInput
    receta?: RecetaOrderByWithRelationInput
  }

  export type RecetaMedicamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecetaMedicamentoWhereInput | RecetaMedicamentoWhereInput[]
    OR?: RecetaMedicamentoWhereInput[]
    NOT?: RecetaMedicamentoWhereInput | RecetaMedicamentoWhereInput[]
    recetaId?: IntFilter<"RecetaMedicamento"> | number
    medicamentoId?: IntFilter<"RecetaMedicamento"> | number
    cantidad?: IntFilter<"RecetaMedicamento"> | number
    estado?: EnumEstadoFilter<"RecetaMedicamento"> | $Enums.Estado
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
    receta?: XOR<RecetaScalarRelationFilter, RecetaWhereInput>
  }, "id">

  export type RecetaMedicamentoOrderByWithAggregationInput = {
    id?: SortOrder
    recetaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
    _count?: RecetaMedicamentoCountOrderByAggregateInput
    _avg?: RecetaMedicamentoAvgOrderByAggregateInput
    _max?: RecetaMedicamentoMaxOrderByAggregateInput
    _min?: RecetaMedicamentoMinOrderByAggregateInput
    _sum?: RecetaMedicamentoSumOrderByAggregateInput
  }

  export type RecetaMedicamentoScalarWhereWithAggregatesInput = {
    AND?: RecetaMedicamentoScalarWhereWithAggregatesInput | RecetaMedicamentoScalarWhereWithAggregatesInput[]
    OR?: RecetaMedicamentoScalarWhereWithAggregatesInput[]
    NOT?: RecetaMedicamentoScalarWhereWithAggregatesInput | RecetaMedicamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecetaMedicamento"> | number
    recetaId?: IntWithAggregatesFilter<"RecetaMedicamento"> | number
    medicamentoId?: IntWithAggregatesFilter<"RecetaMedicamento"> | number
    cantidad?: IntWithAggregatesFilter<"RecetaMedicamento"> | number
    estado?: EnumEstadoWithAggregatesFilter<"RecetaMedicamento"> | $Enums.Estado
  }

  export type VentaWhereInput = {
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id?: IntFilter<"Venta"> | number
    fecha?: DateTimeFilter<"Venta"> | Date | string
    clienteId?: IntFilter<"Venta"> | number
    usuarioId?: IntFilter<"Venta"> | number
    total?: DecimalFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFilter<"Venta"> | $Enums.FormaPago
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ventaMedicamentos?: VentaMedicamentoListRelationFilter
  }

  export type VentaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
    formaPago?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    ventaMedicamentos?: VentaMedicamentoOrderByRelationAggregateInput
  }

  export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    fecha?: DateTimeFilter<"Venta"> | Date | string
    clienteId?: IntFilter<"Venta"> | number
    usuarioId?: IntFilter<"Venta"> | number
    total?: DecimalFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFilter<"Venta"> | $Enums.FormaPago
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ventaMedicamentos?: VentaMedicamentoListRelationFilter
  }, "id">

  export type VentaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
    formaPago?: SortOrder
    _count?: VentaCountOrderByAggregateInput
    _avg?: VentaAvgOrderByAggregateInput
    _max?: VentaMaxOrderByAggregateInput
    _min?: VentaMinOrderByAggregateInput
    _sum?: VentaSumOrderByAggregateInput
  }

  export type VentaScalarWhereWithAggregatesInput = {
    AND?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    OR?: VentaScalarWhereWithAggregatesInput[]
    NOT?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venta"> | number
    fecha?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
    clienteId?: IntWithAggregatesFilter<"Venta"> | number
    usuarioId?: IntWithAggregatesFilter<"Venta"> | number
    total?: DecimalWithAggregatesFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoWithAggregatesFilter<"Venta"> | $Enums.FormaPago
  }

  export type VentaMedicamentoWhereInput = {
    AND?: VentaMedicamentoWhereInput | VentaMedicamentoWhereInput[]
    OR?: VentaMedicamentoWhereInput[]
    NOT?: VentaMedicamentoWhereInput | VentaMedicamentoWhereInput[]
    id?: IntFilter<"VentaMedicamento"> | number
    ventaId?: IntFilter<"VentaMedicamento"> | number
    medicamentoId?: IntFilter<"VentaMedicamento"> | number
    cantidad?: IntFilter<"VentaMedicamento"> | number
    precioUnitario?: DecimalFilter<"VentaMedicamento"> | Decimal | DecimalJsLike | number | string
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
  }

  export type VentaMedicamentoOrderByWithRelationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    medicamento?: MedicamentoOrderByWithRelationInput
    venta?: VentaOrderByWithRelationInput
  }

  export type VentaMedicamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VentaMedicamentoWhereInput | VentaMedicamentoWhereInput[]
    OR?: VentaMedicamentoWhereInput[]
    NOT?: VentaMedicamentoWhereInput | VentaMedicamentoWhereInput[]
    ventaId?: IntFilter<"VentaMedicamento"> | number
    medicamentoId?: IntFilter<"VentaMedicamento"> | number
    cantidad?: IntFilter<"VentaMedicamento"> | number
    precioUnitario?: DecimalFilter<"VentaMedicamento"> | Decimal | DecimalJsLike | number | string
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
  }, "id">

  export type VentaMedicamentoOrderByWithAggregationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    _count?: VentaMedicamentoCountOrderByAggregateInput
    _avg?: VentaMedicamentoAvgOrderByAggregateInput
    _max?: VentaMedicamentoMaxOrderByAggregateInput
    _min?: VentaMedicamentoMinOrderByAggregateInput
    _sum?: VentaMedicamentoSumOrderByAggregateInput
  }

  export type VentaMedicamentoScalarWhereWithAggregatesInput = {
    AND?: VentaMedicamentoScalarWhereWithAggregatesInput | VentaMedicamentoScalarWhereWithAggregatesInput[]
    OR?: VentaMedicamentoScalarWhereWithAggregatesInput[]
    NOT?: VentaMedicamentoScalarWhereWithAggregatesInput | VentaMedicamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VentaMedicamento"> | number
    ventaId?: IntWithAggregatesFilter<"VentaMedicamento"> | number
    medicamentoId?: IntWithAggregatesFilter<"VentaMedicamento"> | number
    cantidad?: IntWithAggregatesFilter<"VentaMedicamento"> | number
    precioUnitario?: DecimalWithAggregatesFilter<"VentaMedicamento"> | Decimal | DecimalJsLike | number | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    clave?: StringFilter<"Usuario"> | string
    perfil?: EnumPerfilFilter<"Usuario"> | $Enums.Perfil
    activo?: BoolFilter<"Usuario"> | boolean
    ventas?: VentaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    clave?: SortOrder
    perfil?: SortOrder
    activo?: SortOrder
    ventas?: VentaOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    clave?: StringFilter<"Usuario"> | string
    perfil?: EnumPerfilFilter<"Usuario"> | $Enums.Perfil
    activo?: BoolFilter<"Usuario"> | boolean
    ventas?: VentaListRelationFilter
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    clave?: SortOrder
    perfil?: SortOrder
    activo?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    clave?: StringWithAggregatesFilter<"Usuario"> | string
    perfil?: EnumPerfilWithAggregatesFilter<"Usuario"> | $Enums.Perfil
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    email?: StringFilter<"Cliente"> | string
    nombre?: StringFilter<"Cliente"> | string
    suscripto?: BoolFilter<"Cliente"> | boolean
    ventas?: VentaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    suscripto?: SortOrder
    ventas?: VentaOrderByRelationAggregateInput
    _relevance?: ClienteOrderByRelevanceInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    email?: StringFilter<"Cliente"> | string
    nombre?: StringFilter<"Cliente"> | string
    suscripto?: BoolFilter<"Cliente"> | boolean
    ventas?: VentaListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    suscripto?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    email?: StringWithAggregatesFilter<"Cliente"> | string
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    suscripto?: BoolWithAggregatesFilter<"Cliente"> | boolean
  }

  export type ProveedorCreateInput = {
    nombre: string
    direccion: string
    telefono: number
    medicamentos?: MedicamentoCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorUncheckedCreateInput = {
    id?: number
    nombre: string
    direccion: string
    telefono: number
    medicamentos?: MedicamentoUncheckedCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: IntFieldUpdateOperationsInput | number
    medicamentos?: MedicamentoUpdateManyWithoutProveedorNestedInput
  }

  export type ProveedorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: IntFieldUpdateOperationsInput | number
    medicamentos?: MedicamentoUncheckedUpdateManyWithoutProveedorNestedInput
  }

  export type ProveedorCreateManyInput = {
    id?: number
    nombre: string
    direccion: string
    telefono: number
  }

  export type ProveedorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: IntFieldUpdateOperationsInput | number
  }

  export type ProveedorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: IntFieldUpdateOperationsInput | number
  }

  export type MedicamentoCreateInput = {
    nombre: string
    principioActivo: string
    laboratorio: string
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    devoluciones?: DevolucionCreateNestedManyWithoutMedicamentoInput
    inventarios?: InventarioCreateNestedManyWithoutMedicamentoInput
    proveedor: ProveedorCreateNestedOneWithoutMedicamentosInput
    recetasMedicamentos?: RecetaMedicamentoCreateNestedManyWithoutMedicamentoInput
    ventaMedicamentos?: VentaMedicamentoCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoUncheckedCreateInput = {
    id?: number
    nombre: string
    principioActivo: string
    laboratorio: string
    proveedorId: number
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    devoluciones?: DevolucionUncheckedCreateNestedManyWithoutMedicamentoInput
    inventarios?: InventarioUncheckedCreateNestedManyWithoutMedicamentoInput
    recetasMedicamentos?: RecetaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput
    ventaMedicamentos?: VentaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    devoluciones?: DevolucionUpdateManyWithoutMedicamentoNestedInput
    inventarios?: InventarioUpdateManyWithoutMedicamentoNestedInput
    proveedor?: ProveedorUpdateOneRequiredWithoutMedicamentosNestedInput
    recetasMedicamentos?: RecetaMedicamentoUpdateManyWithoutMedicamentoNestedInput
    ventaMedicamentos?: VentaMedicamentoUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    proveedorId?: IntFieldUpdateOperationsInput | number
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    devoluciones?: DevolucionUncheckedUpdateManyWithoutMedicamentoNestedInput
    inventarios?: InventarioUncheckedUpdateManyWithoutMedicamentoNestedInput
    recetasMedicamentos?: RecetaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput
    ventaMedicamentos?: VentaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoCreateManyInput = {
    id?: number
    nombre: string
    principioActivo: string
    laboratorio: string
    proveedorId: number
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
  }

  export type MedicamentoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type MedicamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    proveedorId?: IntFieldUpdateOperationsInput | number
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type DevolucionCreateInput = {
    fecha: Date | string
    cantidad: number
    motivo: string
    medicamento: MedicamentoCreateNestedOneWithoutDevolucionesInput
  }

  export type DevolucionUncheckedCreateInput = {
    id?: number
    medicamentoId: number
    fecha: Date | string
    cantidad: number
    motivo: string
  }

  export type DevolucionUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    medicamento?: MedicamentoUpdateOneRequiredWithoutDevolucionesNestedInput
  }

  export type DevolucionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
  }

  export type DevolucionCreateManyInput = {
    id?: number
    medicamentoId: number
    fecha: Date | string
    cantidad: number
    motivo: string
  }

  export type DevolucionUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
  }

  export type DevolucionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
  }

  export type InventarioCreateInput = {
    fecha: Date | string
    cantidad: number
    medicamento: MedicamentoCreateNestedOneWithoutInventariosInput
  }

  export type InventarioUncheckedCreateInput = {
    id?: number
    medicamentoId: number
    fecha: Date | string
    cantidad: number
  }

  export type InventarioUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medicamento?: MedicamentoUpdateOneRequiredWithoutInventariosNestedInput
  }

  export type InventarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type InventarioCreateManyInput = {
    id?: number
    medicamentoId: number
    fecha: Date | string
    cantidad: number
  }

  export type InventarioUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type InventarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type RecetaCreateInput = {
    pacienteNombre: string
    medicoNombre: string
    fecha: Date | string
    recetaMedicamentos?: RecetaMedicamentoCreateNestedManyWithoutRecetaInput
  }

  export type RecetaUncheckedCreateInput = {
    id?: number
    pacienteNombre: string
    medicoNombre: string
    fecha: Date | string
    recetaMedicamentos?: RecetaMedicamentoUncheckedCreateNestedManyWithoutRecetaInput
  }

  export type RecetaUpdateInput = {
    pacienteNombre?: StringFieldUpdateOperationsInput | string
    medicoNombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    recetaMedicamentos?: RecetaMedicamentoUpdateManyWithoutRecetaNestedInput
  }

  export type RecetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteNombre?: StringFieldUpdateOperationsInput | string
    medicoNombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    recetaMedicamentos?: RecetaMedicamentoUncheckedUpdateManyWithoutRecetaNestedInput
  }

  export type RecetaCreateManyInput = {
    id?: number
    pacienteNombre: string
    medicoNombre: string
    fecha: Date | string
  }

  export type RecetaUpdateManyMutationInput = {
    pacienteNombre?: StringFieldUpdateOperationsInput | string
    medicoNombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteNombre?: StringFieldUpdateOperationsInput | string
    medicoNombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaMedicamentoCreateInput = {
    cantidad: number
    estado?: $Enums.Estado
    medicamento: MedicamentoCreateNestedOneWithoutRecetasMedicamentosInput
    receta: RecetaCreateNestedOneWithoutRecetaMedicamentosInput
  }

  export type RecetaMedicamentoUncheckedCreateInput = {
    id?: number
    recetaId: number
    medicamentoId: number
    cantidad: number
    estado?: $Enums.Estado
  }

  export type RecetaMedicamentoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    medicamento?: MedicamentoUpdateOneRequiredWithoutRecetasMedicamentosNestedInput
    receta?: RecetaUpdateOneRequiredWithoutRecetaMedicamentosNestedInput
  }

  export type RecetaMedicamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recetaId?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type RecetaMedicamentoCreateManyInput = {
    id?: number
    recetaId: number
    medicamentoId: number
    cantidad: number
    estado?: $Enums.Estado
  }

  export type RecetaMedicamentoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type RecetaMedicamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recetaId?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type VentaCreateInput = {
    fecha: Date | string
    total: Decimal | DecimalJsLike | number | string
    formaPago: $Enums.FormaPago
    cliente: ClienteCreateNestedOneWithoutVentasInput
    usuario: UsuarioCreateNestedOneWithoutVentasInput
    ventaMedicamentos?: VentaMedicamentoCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    clienteId: number
    usuarioId: number
    total: Decimal | DecimalJsLike | number | string
    formaPago: $Enums.FormaPago
    ventaMedicamentos?: VentaMedicamentoUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
    ventaMedicamentos?: VentaMedicamentoUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
    ventaMedicamentos?: VentaMedicamentoUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaCreateManyInput = {
    id?: number
    fecha: Date | string
    clienteId: number
    usuarioId: number
    total: Decimal | DecimalJsLike | number | string
    formaPago: $Enums.FormaPago
  }

  export type VentaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
  }

  export type VentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
  }

  export type VentaMedicamentoCreateInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    medicamento: MedicamentoCreateNestedOneWithoutVentaMedicamentosInput
    venta: VentaCreateNestedOneWithoutVentaMedicamentosInput
  }

  export type VentaMedicamentoUncheckedCreateInput = {
    id?: number
    ventaId: number
    medicamentoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type VentaMedicamentoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    medicamento?: MedicamentoUpdateOneRequiredWithoutVentaMedicamentosNestedInput
    venta?: VentaUpdateOneRequiredWithoutVentaMedicamentosNestedInput
  }

  export type VentaMedicamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaMedicamentoCreateManyInput = {
    id?: number
    ventaId: number
    medicamentoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type VentaMedicamentoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaMedicamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    clave: string
    perfil: $Enums.Perfil
    activo: boolean
    ventas?: VentaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    clave: string
    perfil: $Enums.Perfil
    activo: boolean
    ventas?: VentaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    activo?: BoolFieldUpdateOperationsInput | boolean
    ventas?: VentaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    activo?: BoolFieldUpdateOperationsInput | boolean
    ventas?: VentaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    clave: string
    perfil: $Enums.Perfil
    activo: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClienteCreateInput = {
    email: string
    nombre: string
    suscripto: boolean
    ventas?: VentaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    email: string
    nombre: string
    suscripto: boolean
    ventas?: VentaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    suscripto?: BoolFieldUpdateOperationsInput | boolean
    ventas?: VentaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    suscripto?: BoolFieldUpdateOperationsInput | boolean
    ventas?: VentaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    email: string
    nombre: string
    suscripto: boolean
  }

  export type ClienteUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    suscripto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    suscripto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MedicamentoListRelationFilter = {
    every?: MedicamentoWhereInput
    some?: MedicamentoWhereInput
    none?: MedicamentoWhereInput
  }

  export type MedicamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProveedorOrderByRelevanceInput = {
    fields: ProveedorOrderByRelevanceFieldEnum | ProveedorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProveedorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
  }

  export type ProveedorAvgOrderByAggregateInput = {
    id?: SortOrder
    telefono?: SortOrder
  }

  export type ProveedorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
  }

  export type ProveedorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
  }

  export type ProveedorSumOrderByAggregateInput = {
    id?: SortOrder
    telefono?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumFormaFarmaceuticaFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaFarmaceutica | EnumFormaFarmaceuticaFieldRefInput<$PrismaModel>
    in?: $Enums.FormaFarmaceutica[]
    notIn?: $Enums.FormaFarmaceutica[]
    not?: NestedEnumFormaFarmaceuticaFilter<$PrismaModel> | $Enums.FormaFarmaceutica
  }

  export type EnumPresentacionFilter<$PrismaModel = never> = {
    equals?: $Enums.Presentacion | EnumPresentacionFieldRefInput<$PrismaModel>
    in?: $Enums.Presentacion[]
    notIn?: $Enums.Presentacion[]
    not?: NestedEnumPresentacionFilter<$PrismaModel> | $Enums.Presentacion
  }

  export type DevolucionListRelationFilter = {
    every?: DevolucionWhereInput
    some?: DevolucionWhereInput
    none?: DevolucionWhereInput
  }

  export type InventarioListRelationFilter = {
    every?: InventarioWhereInput
    some?: InventarioWhereInput
    none?: InventarioWhereInput
  }

  export type ProveedorScalarRelationFilter = {
    is?: ProveedorWhereInput
    isNot?: ProveedorWhereInput
  }

  export type RecetaMedicamentoListRelationFilter = {
    every?: RecetaMedicamentoWhereInput
    some?: RecetaMedicamentoWhereInput
    none?: RecetaMedicamentoWhereInput
  }

  export type VentaMedicamentoListRelationFilter = {
    every?: VentaMedicamentoWhereInput
    some?: VentaMedicamentoWhereInput
    none?: VentaMedicamentoWhereInput
  }

  export type DevolucionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecetaMedicamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VentaMedicamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicamentoOrderByRelevanceInput = {
    fields: MedicamentoOrderByRelevanceFieldEnum | MedicamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MedicamentoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    principioActivo?: SortOrder
    laboratorio?: SortOrder
    proveedorId?: SortOrder
    fechaVencimiento?: SortOrder
    formaFarmaceutica?: SortOrder
    presentacion?: SortOrder
    lote?: SortOrder
    stock?: SortOrder
  }

  export type MedicamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    proveedorId?: SortOrder
    stock?: SortOrder
  }

  export type MedicamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    principioActivo?: SortOrder
    laboratorio?: SortOrder
    proveedorId?: SortOrder
    fechaVencimiento?: SortOrder
    formaFarmaceutica?: SortOrder
    presentacion?: SortOrder
    lote?: SortOrder
    stock?: SortOrder
  }

  export type MedicamentoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    principioActivo?: SortOrder
    laboratorio?: SortOrder
    proveedorId?: SortOrder
    fechaVencimiento?: SortOrder
    formaFarmaceutica?: SortOrder
    presentacion?: SortOrder
    lote?: SortOrder
    stock?: SortOrder
  }

  export type MedicamentoSumOrderByAggregateInput = {
    id?: SortOrder
    proveedorId?: SortOrder
    stock?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumFormaFarmaceuticaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaFarmaceutica | EnumFormaFarmaceuticaFieldRefInput<$PrismaModel>
    in?: $Enums.FormaFarmaceutica[]
    notIn?: $Enums.FormaFarmaceutica[]
    not?: NestedEnumFormaFarmaceuticaWithAggregatesFilter<$PrismaModel> | $Enums.FormaFarmaceutica
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaFarmaceuticaFilter<$PrismaModel>
    _max?: NestedEnumFormaFarmaceuticaFilter<$PrismaModel>
  }

  export type EnumPresentacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Presentacion | EnumPresentacionFieldRefInput<$PrismaModel>
    in?: $Enums.Presentacion[]
    notIn?: $Enums.Presentacion[]
    not?: NestedEnumPresentacionWithAggregatesFilter<$PrismaModel> | $Enums.Presentacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresentacionFilter<$PrismaModel>
    _max?: NestedEnumPresentacionFilter<$PrismaModel>
  }

  export type MedicamentoScalarRelationFilter = {
    is?: MedicamentoWhereInput
    isNot?: MedicamentoWhereInput
  }

  export type DevolucionOrderByRelevanceInput = {
    fields: DevolucionOrderByRelevanceFieldEnum | DevolucionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DevolucionCountOrderByAggregateInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
  }

  export type DevolucionAvgOrderByAggregateInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
  }

  export type DevolucionMaxOrderByAggregateInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
  }

  export type DevolucionMinOrderByAggregateInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
  }

  export type DevolucionSumOrderByAggregateInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
  }

  export type InventarioCountOrderByAggregateInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
  }

  export type InventarioAvgOrderByAggregateInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
  }

  export type InventarioMaxOrderByAggregateInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
  }

  export type InventarioMinOrderByAggregateInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
  }

  export type InventarioSumOrderByAggregateInput = {
    id?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
  }

  export type RecetaOrderByRelevanceInput = {
    fields: RecetaOrderByRelevanceFieldEnum | RecetaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RecetaCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteNombre?: SortOrder
    medicoNombre?: SortOrder
    fecha?: SortOrder
  }

  export type RecetaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecetaMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteNombre?: SortOrder
    medicoNombre?: SortOrder
    fecha?: SortOrder
  }

  export type RecetaMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteNombre?: SortOrder
    medicoNombre?: SortOrder
    fecha?: SortOrder
  }

  export type RecetaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type RecetaScalarRelationFilter = {
    is?: RecetaWhereInput
    isNot?: RecetaWhereInput
  }

  export type RecetaMedicamentoCountOrderByAggregateInput = {
    id?: SortOrder
    recetaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
  }

  export type RecetaMedicamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    recetaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
  }

  export type RecetaMedicamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    recetaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
  }

  export type RecetaMedicamentoMinOrderByAggregateInput = {
    id?: SortOrder
    recetaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
  }

  export type RecetaMedicamentoSumOrderByAggregateInput = {
    id?: SortOrder
    recetaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
  }

  export type EnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumFormaPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPago | EnumFormaPagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPago[]
    notIn?: $Enums.FormaPago[]
    not?: NestedEnumFormaPagoFilter<$PrismaModel> | $Enums.FormaPago
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type VentaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
    formaPago?: SortOrder
  }

  export type VentaAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
  }

  export type VentaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
    formaPago?: SortOrder
  }

  export type VentaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
    formaPago?: SortOrder
  }

  export type VentaSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumFormaPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPago | EnumFormaPagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPago[]
    notIn?: $Enums.FormaPago[]
    not?: NestedEnumFormaPagoWithAggregatesFilter<$PrismaModel> | $Enums.FormaPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaPagoFilter<$PrismaModel>
    _max?: NestedEnumFormaPagoFilter<$PrismaModel>
  }

  export type VentaScalarRelationFilter = {
    is?: VentaWhereInput
    isNot?: VentaWhereInput
  }

  export type VentaMedicamentoCountOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type VentaMedicamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type VentaMedicamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type VentaMedicamentoMinOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type VentaMedicamentoSumOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    medicamentoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type EnumPerfilFilter<$PrismaModel = never> = {
    equals?: $Enums.Perfil | EnumPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.Perfil[]
    notIn?: $Enums.Perfil[]
    not?: NestedEnumPerfilFilter<$PrismaModel> | $Enums.Perfil
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VentaListRelationFilter = {
    every?: VentaWhereInput
    some?: VentaWhereInput
    none?: VentaWhereInput
  }

  export type VentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    clave?: SortOrder
    perfil?: SortOrder
    activo?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    clave?: SortOrder
    perfil?: SortOrder
    activo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    clave?: SortOrder
    perfil?: SortOrder
    activo?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPerfilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Perfil | EnumPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.Perfil[]
    notIn?: $Enums.Perfil[]
    not?: NestedEnumPerfilWithAggregatesFilter<$PrismaModel> | $Enums.Perfil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPerfilFilter<$PrismaModel>
    _max?: NestedEnumPerfilFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ClienteOrderByRelevanceInput = {
    fields: ClienteOrderByRelevanceFieldEnum | ClienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    suscripto?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    suscripto?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    suscripto?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MedicamentoCreateNestedManyWithoutProveedorInput = {
    create?: XOR<MedicamentoCreateWithoutProveedorInput, MedicamentoUncheckedCreateWithoutProveedorInput> | MedicamentoCreateWithoutProveedorInput[] | MedicamentoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutProveedorInput | MedicamentoCreateOrConnectWithoutProveedorInput[]
    createMany?: MedicamentoCreateManyProveedorInputEnvelope
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
  }

  export type MedicamentoUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: XOR<MedicamentoCreateWithoutProveedorInput, MedicamentoUncheckedCreateWithoutProveedorInput> | MedicamentoCreateWithoutProveedorInput[] | MedicamentoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutProveedorInput | MedicamentoCreateOrConnectWithoutProveedorInput[]
    createMany?: MedicamentoCreateManyProveedorInputEnvelope
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
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

  export type MedicamentoUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<MedicamentoCreateWithoutProveedorInput, MedicamentoUncheckedCreateWithoutProveedorInput> | MedicamentoCreateWithoutProveedorInput[] | MedicamentoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutProveedorInput | MedicamentoCreateOrConnectWithoutProveedorInput[]
    upsert?: MedicamentoUpsertWithWhereUniqueWithoutProveedorInput | MedicamentoUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: MedicamentoCreateManyProveedorInputEnvelope
    set?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    disconnect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    delete?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    update?: MedicamentoUpdateWithWhereUniqueWithoutProveedorInput | MedicamentoUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: MedicamentoUpdateManyWithWhereWithoutProveedorInput | MedicamentoUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
  }

  export type MedicamentoUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<MedicamentoCreateWithoutProveedorInput, MedicamentoUncheckedCreateWithoutProveedorInput> | MedicamentoCreateWithoutProveedorInput[] | MedicamentoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutProveedorInput | MedicamentoCreateOrConnectWithoutProveedorInput[]
    upsert?: MedicamentoUpsertWithWhereUniqueWithoutProveedorInput | MedicamentoUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: MedicamentoCreateManyProveedorInputEnvelope
    set?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    disconnect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    delete?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    update?: MedicamentoUpdateWithWhereUniqueWithoutProveedorInput | MedicamentoUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: MedicamentoUpdateManyWithWhereWithoutProveedorInput | MedicamentoUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
  }

  export type DevolucionCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<DevolucionCreateWithoutMedicamentoInput, DevolucionUncheckedCreateWithoutMedicamentoInput> | DevolucionCreateWithoutMedicamentoInput[] | DevolucionUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: DevolucionCreateOrConnectWithoutMedicamentoInput | DevolucionCreateOrConnectWithoutMedicamentoInput[]
    createMany?: DevolucionCreateManyMedicamentoInputEnvelope
    connect?: DevolucionWhereUniqueInput | DevolucionWhereUniqueInput[]
  }

  export type InventarioCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<InventarioCreateWithoutMedicamentoInput, InventarioUncheckedCreateWithoutMedicamentoInput> | InventarioCreateWithoutMedicamentoInput[] | InventarioUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutMedicamentoInput | InventarioCreateOrConnectWithoutMedicamentoInput[]
    createMany?: InventarioCreateManyMedicamentoInputEnvelope
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
  }

  export type ProveedorCreateNestedOneWithoutMedicamentosInput = {
    create?: XOR<ProveedorCreateWithoutMedicamentosInput, ProveedorUncheckedCreateWithoutMedicamentosInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutMedicamentosInput
    connect?: ProveedorWhereUniqueInput
  }

  export type RecetaMedicamentoCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<RecetaMedicamentoCreateWithoutMedicamentoInput, RecetaMedicamentoUncheckedCreateWithoutMedicamentoInput> | RecetaMedicamentoCreateWithoutMedicamentoInput[] | RecetaMedicamentoUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: RecetaMedicamentoCreateOrConnectWithoutMedicamentoInput | RecetaMedicamentoCreateOrConnectWithoutMedicamentoInput[]
    createMany?: RecetaMedicamentoCreateManyMedicamentoInputEnvelope
    connect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
  }

  export type VentaMedicamentoCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<VentaMedicamentoCreateWithoutMedicamentoInput, VentaMedicamentoUncheckedCreateWithoutMedicamentoInput> | VentaMedicamentoCreateWithoutMedicamentoInput[] | VentaMedicamentoUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: VentaMedicamentoCreateOrConnectWithoutMedicamentoInput | VentaMedicamentoCreateOrConnectWithoutMedicamentoInput[]
    createMany?: VentaMedicamentoCreateManyMedicamentoInputEnvelope
    connect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
  }

  export type DevolucionUncheckedCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<DevolucionCreateWithoutMedicamentoInput, DevolucionUncheckedCreateWithoutMedicamentoInput> | DevolucionCreateWithoutMedicamentoInput[] | DevolucionUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: DevolucionCreateOrConnectWithoutMedicamentoInput | DevolucionCreateOrConnectWithoutMedicamentoInput[]
    createMany?: DevolucionCreateManyMedicamentoInputEnvelope
    connect?: DevolucionWhereUniqueInput | DevolucionWhereUniqueInput[]
  }

  export type InventarioUncheckedCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<InventarioCreateWithoutMedicamentoInput, InventarioUncheckedCreateWithoutMedicamentoInput> | InventarioCreateWithoutMedicamentoInput[] | InventarioUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutMedicamentoInput | InventarioCreateOrConnectWithoutMedicamentoInput[]
    createMany?: InventarioCreateManyMedicamentoInputEnvelope
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
  }

  export type RecetaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<RecetaMedicamentoCreateWithoutMedicamentoInput, RecetaMedicamentoUncheckedCreateWithoutMedicamentoInput> | RecetaMedicamentoCreateWithoutMedicamentoInput[] | RecetaMedicamentoUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: RecetaMedicamentoCreateOrConnectWithoutMedicamentoInput | RecetaMedicamentoCreateOrConnectWithoutMedicamentoInput[]
    createMany?: RecetaMedicamentoCreateManyMedicamentoInputEnvelope
    connect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
  }

  export type VentaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<VentaMedicamentoCreateWithoutMedicamentoInput, VentaMedicamentoUncheckedCreateWithoutMedicamentoInput> | VentaMedicamentoCreateWithoutMedicamentoInput[] | VentaMedicamentoUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: VentaMedicamentoCreateOrConnectWithoutMedicamentoInput | VentaMedicamentoCreateOrConnectWithoutMedicamentoInput[]
    createMany?: VentaMedicamentoCreateManyMedicamentoInputEnvelope
    connect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumFormaFarmaceuticaFieldUpdateOperationsInput = {
    set?: $Enums.FormaFarmaceutica
  }

  export type EnumPresentacionFieldUpdateOperationsInput = {
    set?: $Enums.Presentacion
  }

  export type DevolucionUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<DevolucionCreateWithoutMedicamentoInput, DevolucionUncheckedCreateWithoutMedicamentoInput> | DevolucionCreateWithoutMedicamentoInput[] | DevolucionUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: DevolucionCreateOrConnectWithoutMedicamentoInput | DevolucionCreateOrConnectWithoutMedicamentoInput[]
    upsert?: DevolucionUpsertWithWhereUniqueWithoutMedicamentoInput | DevolucionUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: DevolucionCreateManyMedicamentoInputEnvelope
    set?: DevolucionWhereUniqueInput | DevolucionWhereUniqueInput[]
    disconnect?: DevolucionWhereUniqueInput | DevolucionWhereUniqueInput[]
    delete?: DevolucionWhereUniqueInput | DevolucionWhereUniqueInput[]
    connect?: DevolucionWhereUniqueInput | DevolucionWhereUniqueInput[]
    update?: DevolucionUpdateWithWhereUniqueWithoutMedicamentoInput | DevolucionUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: DevolucionUpdateManyWithWhereWithoutMedicamentoInput | DevolucionUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: DevolucionScalarWhereInput | DevolucionScalarWhereInput[]
  }

  export type InventarioUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<InventarioCreateWithoutMedicamentoInput, InventarioUncheckedCreateWithoutMedicamentoInput> | InventarioCreateWithoutMedicamentoInput[] | InventarioUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutMedicamentoInput | InventarioCreateOrConnectWithoutMedicamentoInput[]
    upsert?: InventarioUpsertWithWhereUniqueWithoutMedicamentoInput | InventarioUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: InventarioCreateManyMedicamentoInputEnvelope
    set?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    disconnect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    delete?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    update?: InventarioUpdateWithWhereUniqueWithoutMedicamentoInput | InventarioUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: InventarioUpdateManyWithWhereWithoutMedicamentoInput | InventarioUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
  }

  export type ProveedorUpdateOneRequiredWithoutMedicamentosNestedInput = {
    create?: XOR<ProveedorCreateWithoutMedicamentosInput, ProveedorUncheckedCreateWithoutMedicamentosInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutMedicamentosInput
    upsert?: ProveedorUpsertWithoutMedicamentosInput
    connect?: ProveedorWhereUniqueInput
    update?: XOR<XOR<ProveedorUpdateToOneWithWhereWithoutMedicamentosInput, ProveedorUpdateWithoutMedicamentosInput>, ProveedorUncheckedUpdateWithoutMedicamentosInput>
  }

  export type RecetaMedicamentoUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<RecetaMedicamentoCreateWithoutMedicamentoInput, RecetaMedicamentoUncheckedCreateWithoutMedicamentoInput> | RecetaMedicamentoCreateWithoutMedicamentoInput[] | RecetaMedicamentoUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: RecetaMedicamentoCreateOrConnectWithoutMedicamentoInput | RecetaMedicamentoCreateOrConnectWithoutMedicamentoInput[]
    upsert?: RecetaMedicamentoUpsertWithWhereUniqueWithoutMedicamentoInput | RecetaMedicamentoUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: RecetaMedicamentoCreateManyMedicamentoInputEnvelope
    set?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    disconnect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    delete?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    connect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    update?: RecetaMedicamentoUpdateWithWhereUniqueWithoutMedicamentoInput | RecetaMedicamentoUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: RecetaMedicamentoUpdateManyWithWhereWithoutMedicamentoInput | RecetaMedicamentoUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: RecetaMedicamentoScalarWhereInput | RecetaMedicamentoScalarWhereInput[]
  }

  export type VentaMedicamentoUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<VentaMedicamentoCreateWithoutMedicamentoInput, VentaMedicamentoUncheckedCreateWithoutMedicamentoInput> | VentaMedicamentoCreateWithoutMedicamentoInput[] | VentaMedicamentoUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: VentaMedicamentoCreateOrConnectWithoutMedicamentoInput | VentaMedicamentoCreateOrConnectWithoutMedicamentoInput[]
    upsert?: VentaMedicamentoUpsertWithWhereUniqueWithoutMedicamentoInput | VentaMedicamentoUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: VentaMedicamentoCreateManyMedicamentoInputEnvelope
    set?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    disconnect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    delete?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    connect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    update?: VentaMedicamentoUpdateWithWhereUniqueWithoutMedicamentoInput | VentaMedicamentoUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: VentaMedicamentoUpdateManyWithWhereWithoutMedicamentoInput | VentaMedicamentoUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: VentaMedicamentoScalarWhereInput | VentaMedicamentoScalarWhereInput[]
  }

  export type DevolucionUncheckedUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<DevolucionCreateWithoutMedicamentoInput, DevolucionUncheckedCreateWithoutMedicamentoInput> | DevolucionCreateWithoutMedicamentoInput[] | DevolucionUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: DevolucionCreateOrConnectWithoutMedicamentoInput | DevolucionCreateOrConnectWithoutMedicamentoInput[]
    upsert?: DevolucionUpsertWithWhereUniqueWithoutMedicamentoInput | DevolucionUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: DevolucionCreateManyMedicamentoInputEnvelope
    set?: DevolucionWhereUniqueInput | DevolucionWhereUniqueInput[]
    disconnect?: DevolucionWhereUniqueInput | DevolucionWhereUniqueInput[]
    delete?: DevolucionWhereUniqueInput | DevolucionWhereUniqueInput[]
    connect?: DevolucionWhereUniqueInput | DevolucionWhereUniqueInput[]
    update?: DevolucionUpdateWithWhereUniqueWithoutMedicamentoInput | DevolucionUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: DevolucionUpdateManyWithWhereWithoutMedicamentoInput | DevolucionUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: DevolucionScalarWhereInput | DevolucionScalarWhereInput[]
  }

  export type InventarioUncheckedUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<InventarioCreateWithoutMedicamentoInput, InventarioUncheckedCreateWithoutMedicamentoInput> | InventarioCreateWithoutMedicamentoInput[] | InventarioUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutMedicamentoInput | InventarioCreateOrConnectWithoutMedicamentoInput[]
    upsert?: InventarioUpsertWithWhereUniqueWithoutMedicamentoInput | InventarioUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: InventarioCreateManyMedicamentoInputEnvelope
    set?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    disconnect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    delete?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    update?: InventarioUpdateWithWhereUniqueWithoutMedicamentoInput | InventarioUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: InventarioUpdateManyWithWhereWithoutMedicamentoInput | InventarioUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
  }

  export type RecetaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<RecetaMedicamentoCreateWithoutMedicamentoInput, RecetaMedicamentoUncheckedCreateWithoutMedicamentoInput> | RecetaMedicamentoCreateWithoutMedicamentoInput[] | RecetaMedicamentoUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: RecetaMedicamentoCreateOrConnectWithoutMedicamentoInput | RecetaMedicamentoCreateOrConnectWithoutMedicamentoInput[]
    upsert?: RecetaMedicamentoUpsertWithWhereUniqueWithoutMedicamentoInput | RecetaMedicamentoUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: RecetaMedicamentoCreateManyMedicamentoInputEnvelope
    set?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    disconnect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    delete?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    connect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    update?: RecetaMedicamentoUpdateWithWhereUniqueWithoutMedicamentoInput | RecetaMedicamentoUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: RecetaMedicamentoUpdateManyWithWhereWithoutMedicamentoInput | RecetaMedicamentoUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: RecetaMedicamentoScalarWhereInput | RecetaMedicamentoScalarWhereInput[]
  }

  export type VentaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<VentaMedicamentoCreateWithoutMedicamentoInput, VentaMedicamentoUncheckedCreateWithoutMedicamentoInput> | VentaMedicamentoCreateWithoutMedicamentoInput[] | VentaMedicamentoUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: VentaMedicamentoCreateOrConnectWithoutMedicamentoInput | VentaMedicamentoCreateOrConnectWithoutMedicamentoInput[]
    upsert?: VentaMedicamentoUpsertWithWhereUniqueWithoutMedicamentoInput | VentaMedicamentoUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: VentaMedicamentoCreateManyMedicamentoInputEnvelope
    set?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    disconnect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    delete?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    connect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    update?: VentaMedicamentoUpdateWithWhereUniqueWithoutMedicamentoInput | VentaMedicamentoUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: VentaMedicamentoUpdateManyWithWhereWithoutMedicamentoInput | VentaMedicamentoUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: VentaMedicamentoScalarWhereInput | VentaMedicamentoScalarWhereInput[]
  }

  export type MedicamentoCreateNestedOneWithoutDevolucionesInput = {
    create?: XOR<MedicamentoCreateWithoutDevolucionesInput, MedicamentoUncheckedCreateWithoutDevolucionesInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutDevolucionesInput
    connect?: MedicamentoWhereUniqueInput
  }

  export type MedicamentoUpdateOneRequiredWithoutDevolucionesNestedInput = {
    create?: XOR<MedicamentoCreateWithoutDevolucionesInput, MedicamentoUncheckedCreateWithoutDevolucionesInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutDevolucionesInput
    upsert?: MedicamentoUpsertWithoutDevolucionesInput
    connect?: MedicamentoWhereUniqueInput
    update?: XOR<XOR<MedicamentoUpdateToOneWithWhereWithoutDevolucionesInput, MedicamentoUpdateWithoutDevolucionesInput>, MedicamentoUncheckedUpdateWithoutDevolucionesInput>
  }

  export type MedicamentoCreateNestedOneWithoutInventariosInput = {
    create?: XOR<MedicamentoCreateWithoutInventariosInput, MedicamentoUncheckedCreateWithoutInventariosInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutInventariosInput
    connect?: MedicamentoWhereUniqueInput
  }

  export type MedicamentoUpdateOneRequiredWithoutInventariosNestedInput = {
    create?: XOR<MedicamentoCreateWithoutInventariosInput, MedicamentoUncheckedCreateWithoutInventariosInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutInventariosInput
    upsert?: MedicamentoUpsertWithoutInventariosInput
    connect?: MedicamentoWhereUniqueInput
    update?: XOR<XOR<MedicamentoUpdateToOneWithWhereWithoutInventariosInput, MedicamentoUpdateWithoutInventariosInput>, MedicamentoUncheckedUpdateWithoutInventariosInput>
  }

  export type RecetaMedicamentoCreateNestedManyWithoutRecetaInput = {
    create?: XOR<RecetaMedicamentoCreateWithoutRecetaInput, RecetaMedicamentoUncheckedCreateWithoutRecetaInput> | RecetaMedicamentoCreateWithoutRecetaInput[] | RecetaMedicamentoUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: RecetaMedicamentoCreateOrConnectWithoutRecetaInput | RecetaMedicamentoCreateOrConnectWithoutRecetaInput[]
    createMany?: RecetaMedicamentoCreateManyRecetaInputEnvelope
    connect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
  }

  export type RecetaMedicamentoUncheckedCreateNestedManyWithoutRecetaInput = {
    create?: XOR<RecetaMedicamentoCreateWithoutRecetaInput, RecetaMedicamentoUncheckedCreateWithoutRecetaInput> | RecetaMedicamentoCreateWithoutRecetaInput[] | RecetaMedicamentoUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: RecetaMedicamentoCreateOrConnectWithoutRecetaInput | RecetaMedicamentoCreateOrConnectWithoutRecetaInput[]
    createMany?: RecetaMedicamentoCreateManyRecetaInputEnvelope
    connect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
  }

  export type RecetaMedicamentoUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<RecetaMedicamentoCreateWithoutRecetaInput, RecetaMedicamentoUncheckedCreateWithoutRecetaInput> | RecetaMedicamentoCreateWithoutRecetaInput[] | RecetaMedicamentoUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: RecetaMedicamentoCreateOrConnectWithoutRecetaInput | RecetaMedicamentoCreateOrConnectWithoutRecetaInput[]
    upsert?: RecetaMedicamentoUpsertWithWhereUniqueWithoutRecetaInput | RecetaMedicamentoUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: RecetaMedicamentoCreateManyRecetaInputEnvelope
    set?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    disconnect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    delete?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    connect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    update?: RecetaMedicamentoUpdateWithWhereUniqueWithoutRecetaInput | RecetaMedicamentoUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: RecetaMedicamentoUpdateManyWithWhereWithoutRecetaInput | RecetaMedicamentoUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: RecetaMedicamentoScalarWhereInput | RecetaMedicamentoScalarWhereInput[]
  }

  export type RecetaMedicamentoUncheckedUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<RecetaMedicamentoCreateWithoutRecetaInput, RecetaMedicamentoUncheckedCreateWithoutRecetaInput> | RecetaMedicamentoCreateWithoutRecetaInput[] | RecetaMedicamentoUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: RecetaMedicamentoCreateOrConnectWithoutRecetaInput | RecetaMedicamentoCreateOrConnectWithoutRecetaInput[]
    upsert?: RecetaMedicamentoUpsertWithWhereUniqueWithoutRecetaInput | RecetaMedicamentoUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: RecetaMedicamentoCreateManyRecetaInputEnvelope
    set?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    disconnect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    delete?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    connect?: RecetaMedicamentoWhereUniqueInput | RecetaMedicamentoWhereUniqueInput[]
    update?: RecetaMedicamentoUpdateWithWhereUniqueWithoutRecetaInput | RecetaMedicamentoUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: RecetaMedicamentoUpdateManyWithWhereWithoutRecetaInput | RecetaMedicamentoUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: RecetaMedicamentoScalarWhereInput | RecetaMedicamentoScalarWhereInput[]
  }

  export type MedicamentoCreateNestedOneWithoutRecetasMedicamentosInput = {
    create?: XOR<MedicamentoCreateWithoutRecetasMedicamentosInput, MedicamentoUncheckedCreateWithoutRecetasMedicamentosInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutRecetasMedicamentosInput
    connect?: MedicamentoWhereUniqueInput
  }

  export type RecetaCreateNestedOneWithoutRecetaMedicamentosInput = {
    create?: XOR<RecetaCreateWithoutRecetaMedicamentosInput, RecetaUncheckedCreateWithoutRecetaMedicamentosInput>
    connectOrCreate?: RecetaCreateOrConnectWithoutRecetaMedicamentosInput
    connect?: RecetaWhereUniqueInput
  }

  export type EnumEstadoFieldUpdateOperationsInput = {
    set?: $Enums.Estado
  }

  export type MedicamentoUpdateOneRequiredWithoutRecetasMedicamentosNestedInput = {
    create?: XOR<MedicamentoCreateWithoutRecetasMedicamentosInput, MedicamentoUncheckedCreateWithoutRecetasMedicamentosInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutRecetasMedicamentosInput
    upsert?: MedicamentoUpsertWithoutRecetasMedicamentosInput
    connect?: MedicamentoWhereUniqueInput
    update?: XOR<XOR<MedicamentoUpdateToOneWithWhereWithoutRecetasMedicamentosInput, MedicamentoUpdateWithoutRecetasMedicamentosInput>, MedicamentoUncheckedUpdateWithoutRecetasMedicamentosInput>
  }

  export type RecetaUpdateOneRequiredWithoutRecetaMedicamentosNestedInput = {
    create?: XOR<RecetaCreateWithoutRecetaMedicamentosInput, RecetaUncheckedCreateWithoutRecetaMedicamentosInput>
    connectOrCreate?: RecetaCreateOrConnectWithoutRecetaMedicamentosInput
    upsert?: RecetaUpsertWithoutRecetaMedicamentosInput
    connect?: RecetaWhereUniqueInput
    update?: XOR<XOR<RecetaUpdateToOneWithWhereWithoutRecetaMedicamentosInput, RecetaUpdateWithoutRecetaMedicamentosInput>, RecetaUncheckedUpdateWithoutRecetaMedicamentosInput>
  }

  export type ClienteCreateNestedOneWithoutVentasInput = {
    create?: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVentasInput
    connect?: ClienteWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutVentasInput = {
    create?: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVentasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VentaMedicamentoCreateNestedManyWithoutVentaInput = {
    create?: XOR<VentaMedicamentoCreateWithoutVentaInput, VentaMedicamentoUncheckedCreateWithoutVentaInput> | VentaMedicamentoCreateWithoutVentaInput[] | VentaMedicamentoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaMedicamentoCreateOrConnectWithoutVentaInput | VentaMedicamentoCreateOrConnectWithoutVentaInput[]
    createMany?: VentaMedicamentoCreateManyVentaInputEnvelope
    connect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
  }

  export type VentaMedicamentoUncheckedCreateNestedManyWithoutVentaInput = {
    create?: XOR<VentaMedicamentoCreateWithoutVentaInput, VentaMedicamentoUncheckedCreateWithoutVentaInput> | VentaMedicamentoCreateWithoutVentaInput[] | VentaMedicamentoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaMedicamentoCreateOrConnectWithoutVentaInput | VentaMedicamentoCreateOrConnectWithoutVentaInput[]
    createMany?: VentaMedicamentoCreateManyVentaInputEnvelope
    connect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumFormaPagoFieldUpdateOperationsInput = {
    set?: $Enums.FormaPago
  }

  export type ClienteUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVentasInput
    upsert?: ClienteUpsertWithoutVentasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutVentasInput, ClienteUpdateWithoutVentasInput>, ClienteUncheckedUpdateWithoutVentasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVentasInput
    upsert?: UsuarioUpsertWithoutVentasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVentasInput, UsuarioUpdateWithoutVentasInput>, UsuarioUncheckedUpdateWithoutVentasInput>
  }

  export type VentaMedicamentoUpdateManyWithoutVentaNestedInput = {
    create?: XOR<VentaMedicamentoCreateWithoutVentaInput, VentaMedicamentoUncheckedCreateWithoutVentaInput> | VentaMedicamentoCreateWithoutVentaInput[] | VentaMedicamentoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaMedicamentoCreateOrConnectWithoutVentaInput | VentaMedicamentoCreateOrConnectWithoutVentaInput[]
    upsert?: VentaMedicamentoUpsertWithWhereUniqueWithoutVentaInput | VentaMedicamentoUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: VentaMedicamentoCreateManyVentaInputEnvelope
    set?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    disconnect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    delete?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    connect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    update?: VentaMedicamentoUpdateWithWhereUniqueWithoutVentaInput | VentaMedicamentoUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: VentaMedicamentoUpdateManyWithWhereWithoutVentaInput | VentaMedicamentoUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: VentaMedicamentoScalarWhereInput | VentaMedicamentoScalarWhereInput[]
  }

  export type VentaMedicamentoUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: XOR<VentaMedicamentoCreateWithoutVentaInput, VentaMedicamentoUncheckedCreateWithoutVentaInput> | VentaMedicamentoCreateWithoutVentaInput[] | VentaMedicamentoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaMedicamentoCreateOrConnectWithoutVentaInput | VentaMedicamentoCreateOrConnectWithoutVentaInput[]
    upsert?: VentaMedicamentoUpsertWithWhereUniqueWithoutVentaInput | VentaMedicamentoUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: VentaMedicamentoCreateManyVentaInputEnvelope
    set?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    disconnect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    delete?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    connect?: VentaMedicamentoWhereUniqueInput | VentaMedicamentoWhereUniqueInput[]
    update?: VentaMedicamentoUpdateWithWhereUniqueWithoutVentaInput | VentaMedicamentoUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: VentaMedicamentoUpdateManyWithWhereWithoutVentaInput | VentaMedicamentoUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: VentaMedicamentoScalarWhereInput | VentaMedicamentoScalarWhereInput[]
  }

  export type MedicamentoCreateNestedOneWithoutVentaMedicamentosInput = {
    create?: XOR<MedicamentoCreateWithoutVentaMedicamentosInput, MedicamentoUncheckedCreateWithoutVentaMedicamentosInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutVentaMedicamentosInput
    connect?: MedicamentoWhereUniqueInput
  }

  export type VentaCreateNestedOneWithoutVentaMedicamentosInput = {
    create?: XOR<VentaCreateWithoutVentaMedicamentosInput, VentaUncheckedCreateWithoutVentaMedicamentosInput>
    connectOrCreate?: VentaCreateOrConnectWithoutVentaMedicamentosInput
    connect?: VentaWhereUniqueInput
  }

  export type MedicamentoUpdateOneRequiredWithoutVentaMedicamentosNestedInput = {
    create?: XOR<MedicamentoCreateWithoutVentaMedicamentosInput, MedicamentoUncheckedCreateWithoutVentaMedicamentosInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutVentaMedicamentosInput
    upsert?: MedicamentoUpsertWithoutVentaMedicamentosInput
    connect?: MedicamentoWhereUniqueInput
    update?: XOR<XOR<MedicamentoUpdateToOneWithWhereWithoutVentaMedicamentosInput, MedicamentoUpdateWithoutVentaMedicamentosInput>, MedicamentoUncheckedUpdateWithoutVentaMedicamentosInput>
  }

  export type VentaUpdateOneRequiredWithoutVentaMedicamentosNestedInput = {
    create?: XOR<VentaCreateWithoutVentaMedicamentosInput, VentaUncheckedCreateWithoutVentaMedicamentosInput>
    connectOrCreate?: VentaCreateOrConnectWithoutVentaMedicamentosInput
    upsert?: VentaUpsertWithoutVentaMedicamentosInput
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutVentaMedicamentosInput, VentaUpdateWithoutVentaMedicamentosInput>, VentaUncheckedUpdateWithoutVentaMedicamentosInput>
  }

  export type VentaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type EnumPerfilFieldUpdateOperationsInput = {
    set?: $Enums.Perfil
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VentaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutUsuarioInput | VentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutUsuarioInput | VentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutUsuarioInput | VentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type VentaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutUsuarioInput | VentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutUsuarioInput | VentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutUsuarioInput | VentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type VentaCreateNestedManyWithoutClienteInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type VentaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutClienteInput | VentaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutClienteInput | VentaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutClienteInput | VentaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type VentaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutClienteInput | VentaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutClienteInput | VentaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutClienteInput | VentaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumFormaFarmaceuticaFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaFarmaceutica | EnumFormaFarmaceuticaFieldRefInput<$PrismaModel>
    in?: $Enums.FormaFarmaceutica[]
    notIn?: $Enums.FormaFarmaceutica[]
    not?: NestedEnumFormaFarmaceuticaFilter<$PrismaModel> | $Enums.FormaFarmaceutica
  }

  export type NestedEnumPresentacionFilter<$PrismaModel = never> = {
    equals?: $Enums.Presentacion | EnumPresentacionFieldRefInput<$PrismaModel>
    in?: $Enums.Presentacion[]
    notIn?: $Enums.Presentacion[]
    not?: NestedEnumPresentacionFilter<$PrismaModel> | $Enums.Presentacion
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFormaFarmaceuticaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaFarmaceutica | EnumFormaFarmaceuticaFieldRefInput<$PrismaModel>
    in?: $Enums.FormaFarmaceutica[]
    notIn?: $Enums.FormaFarmaceutica[]
    not?: NestedEnumFormaFarmaceuticaWithAggregatesFilter<$PrismaModel> | $Enums.FormaFarmaceutica
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaFarmaceuticaFilter<$PrismaModel>
    _max?: NestedEnumFormaFarmaceuticaFilter<$PrismaModel>
  }

  export type NestedEnumPresentacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Presentacion | EnumPresentacionFieldRefInput<$PrismaModel>
    in?: $Enums.Presentacion[]
    notIn?: $Enums.Presentacion[]
    not?: NestedEnumPresentacionWithAggregatesFilter<$PrismaModel> | $Enums.Presentacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresentacionFilter<$PrismaModel>
    _max?: NestedEnumPresentacionFilter<$PrismaModel>
  }

  export type NestedEnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type NestedEnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumFormaPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPago | EnumFormaPagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPago[]
    notIn?: $Enums.FormaPago[]
    not?: NestedEnumFormaPagoFilter<$PrismaModel> | $Enums.FormaPago
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumFormaPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPago | EnumFormaPagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPago[]
    notIn?: $Enums.FormaPago[]
    not?: NestedEnumFormaPagoWithAggregatesFilter<$PrismaModel> | $Enums.FormaPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaPagoFilter<$PrismaModel>
    _max?: NestedEnumFormaPagoFilter<$PrismaModel>
  }

  export type NestedEnumPerfilFilter<$PrismaModel = never> = {
    equals?: $Enums.Perfil | EnumPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.Perfil[]
    notIn?: $Enums.Perfil[]
    not?: NestedEnumPerfilFilter<$PrismaModel> | $Enums.Perfil
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPerfilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Perfil | EnumPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.Perfil[]
    notIn?: $Enums.Perfil[]
    not?: NestedEnumPerfilWithAggregatesFilter<$PrismaModel> | $Enums.Perfil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPerfilFilter<$PrismaModel>
    _max?: NestedEnumPerfilFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MedicamentoCreateWithoutProveedorInput = {
    nombre: string
    principioActivo: string
    laboratorio: string
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    devoluciones?: DevolucionCreateNestedManyWithoutMedicamentoInput
    inventarios?: InventarioCreateNestedManyWithoutMedicamentoInput
    recetasMedicamentos?: RecetaMedicamentoCreateNestedManyWithoutMedicamentoInput
    ventaMedicamentos?: VentaMedicamentoCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoUncheckedCreateWithoutProveedorInput = {
    id?: number
    nombre: string
    principioActivo: string
    laboratorio: string
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    devoluciones?: DevolucionUncheckedCreateNestedManyWithoutMedicamentoInput
    inventarios?: InventarioUncheckedCreateNestedManyWithoutMedicamentoInput
    recetasMedicamentos?: RecetaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput
    ventaMedicamentos?: VentaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoCreateOrConnectWithoutProveedorInput = {
    where: MedicamentoWhereUniqueInput
    create: XOR<MedicamentoCreateWithoutProveedorInput, MedicamentoUncheckedCreateWithoutProveedorInput>
  }

  export type MedicamentoCreateManyProveedorInputEnvelope = {
    data: MedicamentoCreateManyProveedorInput | MedicamentoCreateManyProveedorInput[]
    skipDuplicates?: boolean
  }

  export type MedicamentoUpsertWithWhereUniqueWithoutProveedorInput = {
    where: MedicamentoWhereUniqueInput
    update: XOR<MedicamentoUpdateWithoutProveedorInput, MedicamentoUncheckedUpdateWithoutProveedorInput>
    create: XOR<MedicamentoCreateWithoutProveedorInput, MedicamentoUncheckedCreateWithoutProveedorInput>
  }

  export type MedicamentoUpdateWithWhereUniqueWithoutProveedorInput = {
    where: MedicamentoWhereUniqueInput
    data: XOR<MedicamentoUpdateWithoutProveedorInput, MedicamentoUncheckedUpdateWithoutProveedorInput>
  }

  export type MedicamentoUpdateManyWithWhereWithoutProveedorInput = {
    where: MedicamentoScalarWhereInput
    data: XOR<MedicamentoUpdateManyMutationInput, MedicamentoUncheckedUpdateManyWithoutProveedorInput>
  }

  export type MedicamentoScalarWhereInput = {
    AND?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
    OR?: MedicamentoScalarWhereInput[]
    NOT?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
    id?: IntFilter<"Medicamento"> | number
    nombre?: StringFilter<"Medicamento"> | string
    principioActivo?: StringFilter<"Medicamento"> | string
    laboratorio?: StringFilter<"Medicamento"> | string
    proveedorId?: IntFilter<"Medicamento"> | number
    fechaVencimiento?: DateTimeFilter<"Medicamento"> | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFilter<"Medicamento"> | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFilter<"Medicamento"> | $Enums.Presentacion
    lote?: StringFilter<"Medicamento"> | string
    stock?: IntFilter<"Medicamento"> | number
  }

  export type DevolucionCreateWithoutMedicamentoInput = {
    fecha: Date | string
    cantidad: number
    motivo: string
  }

  export type DevolucionUncheckedCreateWithoutMedicamentoInput = {
    id?: number
    fecha: Date | string
    cantidad: number
    motivo: string
  }

  export type DevolucionCreateOrConnectWithoutMedicamentoInput = {
    where: DevolucionWhereUniqueInput
    create: XOR<DevolucionCreateWithoutMedicamentoInput, DevolucionUncheckedCreateWithoutMedicamentoInput>
  }

  export type DevolucionCreateManyMedicamentoInputEnvelope = {
    data: DevolucionCreateManyMedicamentoInput | DevolucionCreateManyMedicamentoInput[]
    skipDuplicates?: boolean
  }

  export type InventarioCreateWithoutMedicamentoInput = {
    fecha: Date | string
    cantidad: number
  }

  export type InventarioUncheckedCreateWithoutMedicamentoInput = {
    id?: number
    fecha: Date | string
    cantidad: number
  }

  export type InventarioCreateOrConnectWithoutMedicamentoInput = {
    where: InventarioWhereUniqueInput
    create: XOR<InventarioCreateWithoutMedicamentoInput, InventarioUncheckedCreateWithoutMedicamentoInput>
  }

  export type InventarioCreateManyMedicamentoInputEnvelope = {
    data: InventarioCreateManyMedicamentoInput | InventarioCreateManyMedicamentoInput[]
    skipDuplicates?: boolean
  }

  export type ProveedorCreateWithoutMedicamentosInput = {
    nombre: string
    direccion: string
    telefono: number
  }

  export type ProveedorUncheckedCreateWithoutMedicamentosInput = {
    id?: number
    nombre: string
    direccion: string
    telefono: number
  }

  export type ProveedorCreateOrConnectWithoutMedicamentosInput = {
    where: ProveedorWhereUniqueInput
    create: XOR<ProveedorCreateWithoutMedicamentosInput, ProveedorUncheckedCreateWithoutMedicamentosInput>
  }

  export type RecetaMedicamentoCreateWithoutMedicamentoInput = {
    cantidad: number
    estado?: $Enums.Estado
    receta: RecetaCreateNestedOneWithoutRecetaMedicamentosInput
  }

  export type RecetaMedicamentoUncheckedCreateWithoutMedicamentoInput = {
    id?: number
    recetaId: number
    cantidad: number
    estado?: $Enums.Estado
  }

  export type RecetaMedicamentoCreateOrConnectWithoutMedicamentoInput = {
    where: RecetaMedicamentoWhereUniqueInput
    create: XOR<RecetaMedicamentoCreateWithoutMedicamentoInput, RecetaMedicamentoUncheckedCreateWithoutMedicamentoInput>
  }

  export type RecetaMedicamentoCreateManyMedicamentoInputEnvelope = {
    data: RecetaMedicamentoCreateManyMedicamentoInput | RecetaMedicamentoCreateManyMedicamentoInput[]
    skipDuplicates?: boolean
  }

  export type VentaMedicamentoCreateWithoutMedicamentoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    venta: VentaCreateNestedOneWithoutVentaMedicamentosInput
  }

  export type VentaMedicamentoUncheckedCreateWithoutMedicamentoInput = {
    id?: number
    ventaId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type VentaMedicamentoCreateOrConnectWithoutMedicamentoInput = {
    where: VentaMedicamentoWhereUniqueInput
    create: XOR<VentaMedicamentoCreateWithoutMedicamentoInput, VentaMedicamentoUncheckedCreateWithoutMedicamentoInput>
  }

  export type VentaMedicamentoCreateManyMedicamentoInputEnvelope = {
    data: VentaMedicamentoCreateManyMedicamentoInput | VentaMedicamentoCreateManyMedicamentoInput[]
    skipDuplicates?: boolean
  }

  export type DevolucionUpsertWithWhereUniqueWithoutMedicamentoInput = {
    where: DevolucionWhereUniqueInput
    update: XOR<DevolucionUpdateWithoutMedicamentoInput, DevolucionUncheckedUpdateWithoutMedicamentoInput>
    create: XOR<DevolucionCreateWithoutMedicamentoInput, DevolucionUncheckedCreateWithoutMedicamentoInput>
  }

  export type DevolucionUpdateWithWhereUniqueWithoutMedicamentoInput = {
    where: DevolucionWhereUniqueInput
    data: XOR<DevolucionUpdateWithoutMedicamentoInput, DevolucionUncheckedUpdateWithoutMedicamentoInput>
  }

  export type DevolucionUpdateManyWithWhereWithoutMedicamentoInput = {
    where: DevolucionScalarWhereInput
    data: XOR<DevolucionUpdateManyMutationInput, DevolucionUncheckedUpdateManyWithoutMedicamentoInput>
  }

  export type DevolucionScalarWhereInput = {
    AND?: DevolucionScalarWhereInput | DevolucionScalarWhereInput[]
    OR?: DevolucionScalarWhereInput[]
    NOT?: DevolucionScalarWhereInput | DevolucionScalarWhereInput[]
    id?: IntFilter<"Devolucion"> | number
    medicamentoId?: IntFilter<"Devolucion"> | number
    fecha?: DateTimeFilter<"Devolucion"> | Date | string
    cantidad?: IntFilter<"Devolucion"> | number
    motivo?: StringFilter<"Devolucion"> | string
  }

  export type InventarioUpsertWithWhereUniqueWithoutMedicamentoInput = {
    where: InventarioWhereUniqueInput
    update: XOR<InventarioUpdateWithoutMedicamentoInput, InventarioUncheckedUpdateWithoutMedicamentoInput>
    create: XOR<InventarioCreateWithoutMedicamentoInput, InventarioUncheckedCreateWithoutMedicamentoInput>
  }

  export type InventarioUpdateWithWhereUniqueWithoutMedicamentoInput = {
    where: InventarioWhereUniqueInput
    data: XOR<InventarioUpdateWithoutMedicamentoInput, InventarioUncheckedUpdateWithoutMedicamentoInput>
  }

  export type InventarioUpdateManyWithWhereWithoutMedicamentoInput = {
    where: InventarioScalarWhereInput
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyWithoutMedicamentoInput>
  }

  export type InventarioScalarWhereInput = {
    AND?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
    OR?: InventarioScalarWhereInput[]
    NOT?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
    id?: IntFilter<"Inventario"> | number
    medicamentoId?: IntFilter<"Inventario"> | number
    fecha?: DateTimeFilter<"Inventario"> | Date | string
    cantidad?: IntFilter<"Inventario"> | number
  }

  export type ProveedorUpsertWithoutMedicamentosInput = {
    update: XOR<ProveedorUpdateWithoutMedicamentosInput, ProveedorUncheckedUpdateWithoutMedicamentosInput>
    create: XOR<ProveedorCreateWithoutMedicamentosInput, ProveedorUncheckedCreateWithoutMedicamentosInput>
    where?: ProveedorWhereInput
  }

  export type ProveedorUpdateToOneWithWhereWithoutMedicamentosInput = {
    where?: ProveedorWhereInput
    data: XOR<ProveedorUpdateWithoutMedicamentosInput, ProveedorUncheckedUpdateWithoutMedicamentosInput>
  }

  export type ProveedorUpdateWithoutMedicamentosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: IntFieldUpdateOperationsInput | number
  }

  export type ProveedorUncheckedUpdateWithoutMedicamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: IntFieldUpdateOperationsInput | number
  }

  export type RecetaMedicamentoUpsertWithWhereUniqueWithoutMedicamentoInput = {
    where: RecetaMedicamentoWhereUniqueInput
    update: XOR<RecetaMedicamentoUpdateWithoutMedicamentoInput, RecetaMedicamentoUncheckedUpdateWithoutMedicamentoInput>
    create: XOR<RecetaMedicamentoCreateWithoutMedicamentoInput, RecetaMedicamentoUncheckedCreateWithoutMedicamentoInput>
  }

  export type RecetaMedicamentoUpdateWithWhereUniqueWithoutMedicamentoInput = {
    where: RecetaMedicamentoWhereUniqueInput
    data: XOR<RecetaMedicamentoUpdateWithoutMedicamentoInput, RecetaMedicamentoUncheckedUpdateWithoutMedicamentoInput>
  }

  export type RecetaMedicamentoUpdateManyWithWhereWithoutMedicamentoInput = {
    where: RecetaMedicamentoScalarWhereInput
    data: XOR<RecetaMedicamentoUpdateManyMutationInput, RecetaMedicamentoUncheckedUpdateManyWithoutMedicamentoInput>
  }

  export type RecetaMedicamentoScalarWhereInput = {
    AND?: RecetaMedicamentoScalarWhereInput | RecetaMedicamentoScalarWhereInput[]
    OR?: RecetaMedicamentoScalarWhereInput[]
    NOT?: RecetaMedicamentoScalarWhereInput | RecetaMedicamentoScalarWhereInput[]
    id?: IntFilter<"RecetaMedicamento"> | number
    recetaId?: IntFilter<"RecetaMedicamento"> | number
    medicamentoId?: IntFilter<"RecetaMedicamento"> | number
    cantidad?: IntFilter<"RecetaMedicamento"> | number
    estado?: EnumEstadoFilter<"RecetaMedicamento"> | $Enums.Estado
  }

  export type VentaMedicamentoUpsertWithWhereUniqueWithoutMedicamentoInput = {
    where: VentaMedicamentoWhereUniqueInput
    update: XOR<VentaMedicamentoUpdateWithoutMedicamentoInput, VentaMedicamentoUncheckedUpdateWithoutMedicamentoInput>
    create: XOR<VentaMedicamentoCreateWithoutMedicamentoInput, VentaMedicamentoUncheckedCreateWithoutMedicamentoInput>
  }

  export type VentaMedicamentoUpdateWithWhereUniqueWithoutMedicamentoInput = {
    where: VentaMedicamentoWhereUniqueInput
    data: XOR<VentaMedicamentoUpdateWithoutMedicamentoInput, VentaMedicamentoUncheckedUpdateWithoutMedicamentoInput>
  }

  export type VentaMedicamentoUpdateManyWithWhereWithoutMedicamentoInput = {
    where: VentaMedicamentoScalarWhereInput
    data: XOR<VentaMedicamentoUpdateManyMutationInput, VentaMedicamentoUncheckedUpdateManyWithoutMedicamentoInput>
  }

  export type VentaMedicamentoScalarWhereInput = {
    AND?: VentaMedicamentoScalarWhereInput | VentaMedicamentoScalarWhereInput[]
    OR?: VentaMedicamentoScalarWhereInput[]
    NOT?: VentaMedicamentoScalarWhereInput | VentaMedicamentoScalarWhereInput[]
    id?: IntFilter<"VentaMedicamento"> | number
    ventaId?: IntFilter<"VentaMedicamento"> | number
    medicamentoId?: IntFilter<"VentaMedicamento"> | number
    cantidad?: IntFilter<"VentaMedicamento"> | number
    precioUnitario?: DecimalFilter<"VentaMedicamento"> | Decimal | DecimalJsLike | number | string
  }

  export type MedicamentoCreateWithoutDevolucionesInput = {
    nombre: string
    principioActivo: string
    laboratorio: string
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    inventarios?: InventarioCreateNestedManyWithoutMedicamentoInput
    proveedor: ProveedorCreateNestedOneWithoutMedicamentosInput
    recetasMedicamentos?: RecetaMedicamentoCreateNestedManyWithoutMedicamentoInput
    ventaMedicamentos?: VentaMedicamentoCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoUncheckedCreateWithoutDevolucionesInput = {
    id?: number
    nombre: string
    principioActivo: string
    laboratorio: string
    proveedorId: number
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    inventarios?: InventarioUncheckedCreateNestedManyWithoutMedicamentoInput
    recetasMedicamentos?: RecetaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput
    ventaMedicamentos?: VentaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoCreateOrConnectWithoutDevolucionesInput = {
    where: MedicamentoWhereUniqueInput
    create: XOR<MedicamentoCreateWithoutDevolucionesInput, MedicamentoUncheckedCreateWithoutDevolucionesInput>
  }

  export type MedicamentoUpsertWithoutDevolucionesInput = {
    update: XOR<MedicamentoUpdateWithoutDevolucionesInput, MedicamentoUncheckedUpdateWithoutDevolucionesInput>
    create: XOR<MedicamentoCreateWithoutDevolucionesInput, MedicamentoUncheckedCreateWithoutDevolucionesInput>
    where?: MedicamentoWhereInput
  }

  export type MedicamentoUpdateToOneWithWhereWithoutDevolucionesInput = {
    where?: MedicamentoWhereInput
    data: XOR<MedicamentoUpdateWithoutDevolucionesInput, MedicamentoUncheckedUpdateWithoutDevolucionesInput>
  }

  export type MedicamentoUpdateWithoutDevolucionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    inventarios?: InventarioUpdateManyWithoutMedicamentoNestedInput
    proveedor?: ProveedorUpdateOneRequiredWithoutMedicamentosNestedInput
    recetasMedicamentos?: RecetaMedicamentoUpdateManyWithoutMedicamentoNestedInput
    ventaMedicamentos?: VentaMedicamentoUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoUncheckedUpdateWithoutDevolucionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    proveedorId?: IntFieldUpdateOperationsInput | number
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    inventarios?: InventarioUncheckedUpdateManyWithoutMedicamentoNestedInput
    recetasMedicamentos?: RecetaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput
    ventaMedicamentos?: VentaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoCreateWithoutInventariosInput = {
    nombre: string
    principioActivo: string
    laboratorio: string
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    devoluciones?: DevolucionCreateNestedManyWithoutMedicamentoInput
    proveedor: ProveedorCreateNestedOneWithoutMedicamentosInput
    recetasMedicamentos?: RecetaMedicamentoCreateNestedManyWithoutMedicamentoInput
    ventaMedicamentos?: VentaMedicamentoCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoUncheckedCreateWithoutInventariosInput = {
    id?: number
    nombre: string
    principioActivo: string
    laboratorio: string
    proveedorId: number
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    devoluciones?: DevolucionUncheckedCreateNestedManyWithoutMedicamentoInput
    recetasMedicamentos?: RecetaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput
    ventaMedicamentos?: VentaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoCreateOrConnectWithoutInventariosInput = {
    where: MedicamentoWhereUniqueInput
    create: XOR<MedicamentoCreateWithoutInventariosInput, MedicamentoUncheckedCreateWithoutInventariosInput>
  }

  export type MedicamentoUpsertWithoutInventariosInput = {
    update: XOR<MedicamentoUpdateWithoutInventariosInput, MedicamentoUncheckedUpdateWithoutInventariosInput>
    create: XOR<MedicamentoCreateWithoutInventariosInput, MedicamentoUncheckedCreateWithoutInventariosInput>
    where?: MedicamentoWhereInput
  }

  export type MedicamentoUpdateToOneWithWhereWithoutInventariosInput = {
    where?: MedicamentoWhereInput
    data: XOR<MedicamentoUpdateWithoutInventariosInput, MedicamentoUncheckedUpdateWithoutInventariosInput>
  }

  export type MedicamentoUpdateWithoutInventariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    devoluciones?: DevolucionUpdateManyWithoutMedicamentoNestedInput
    proveedor?: ProveedorUpdateOneRequiredWithoutMedicamentosNestedInput
    recetasMedicamentos?: RecetaMedicamentoUpdateManyWithoutMedicamentoNestedInput
    ventaMedicamentos?: VentaMedicamentoUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoUncheckedUpdateWithoutInventariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    proveedorId?: IntFieldUpdateOperationsInput | number
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    devoluciones?: DevolucionUncheckedUpdateManyWithoutMedicamentoNestedInput
    recetasMedicamentos?: RecetaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput
    ventaMedicamentos?: VentaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput
  }

  export type RecetaMedicamentoCreateWithoutRecetaInput = {
    cantidad: number
    estado?: $Enums.Estado
    medicamento: MedicamentoCreateNestedOneWithoutRecetasMedicamentosInput
  }

  export type RecetaMedicamentoUncheckedCreateWithoutRecetaInput = {
    id?: number
    medicamentoId: number
    cantidad: number
    estado?: $Enums.Estado
  }

  export type RecetaMedicamentoCreateOrConnectWithoutRecetaInput = {
    where: RecetaMedicamentoWhereUniqueInput
    create: XOR<RecetaMedicamentoCreateWithoutRecetaInput, RecetaMedicamentoUncheckedCreateWithoutRecetaInput>
  }

  export type RecetaMedicamentoCreateManyRecetaInputEnvelope = {
    data: RecetaMedicamentoCreateManyRecetaInput | RecetaMedicamentoCreateManyRecetaInput[]
    skipDuplicates?: boolean
  }

  export type RecetaMedicamentoUpsertWithWhereUniqueWithoutRecetaInput = {
    where: RecetaMedicamentoWhereUniqueInput
    update: XOR<RecetaMedicamentoUpdateWithoutRecetaInput, RecetaMedicamentoUncheckedUpdateWithoutRecetaInput>
    create: XOR<RecetaMedicamentoCreateWithoutRecetaInput, RecetaMedicamentoUncheckedCreateWithoutRecetaInput>
  }

  export type RecetaMedicamentoUpdateWithWhereUniqueWithoutRecetaInput = {
    where: RecetaMedicamentoWhereUniqueInput
    data: XOR<RecetaMedicamentoUpdateWithoutRecetaInput, RecetaMedicamentoUncheckedUpdateWithoutRecetaInput>
  }

  export type RecetaMedicamentoUpdateManyWithWhereWithoutRecetaInput = {
    where: RecetaMedicamentoScalarWhereInput
    data: XOR<RecetaMedicamentoUpdateManyMutationInput, RecetaMedicamentoUncheckedUpdateManyWithoutRecetaInput>
  }

  export type MedicamentoCreateWithoutRecetasMedicamentosInput = {
    nombre: string
    principioActivo: string
    laboratorio: string
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    devoluciones?: DevolucionCreateNestedManyWithoutMedicamentoInput
    inventarios?: InventarioCreateNestedManyWithoutMedicamentoInput
    proveedor: ProveedorCreateNestedOneWithoutMedicamentosInput
    ventaMedicamentos?: VentaMedicamentoCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoUncheckedCreateWithoutRecetasMedicamentosInput = {
    id?: number
    nombre: string
    principioActivo: string
    laboratorio: string
    proveedorId: number
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    devoluciones?: DevolucionUncheckedCreateNestedManyWithoutMedicamentoInput
    inventarios?: InventarioUncheckedCreateNestedManyWithoutMedicamentoInput
    ventaMedicamentos?: VentaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoCreateOrConnectWithoutRecetasMedicamentosInput = {
    where: MedicamentoWhereUniqueInput
    create: XOR<MedicamentoCreateWithoutRecetasMedicamentosInput, MedicamentoUncheckedCreateWithoutRecetasMedicamentosInput>
  }

  export type RecetaCreateWithoutRecetaMedicamentosInput = {
    pacienteNombre: string
    medicoNombre: string
    fecha: Date | string
  }

  export type RecetaUncheckedCreateWithoutRecetaMedicamentosInput = {
    id?: number
    pacienteNombre: string
    medicoNombre: string
    fecha: Date | string
  }

  export type RecetaCreateOrConnectWithoutRecetaMedicamentosInput = {
    where: RecetaWhereUniqueInput
    create: XOR<RecetaCreateWithoutRecetaMedicamentosInput, RecetaUncheckedCreateWithoutRecetaMedicamentosInput>
  }

  export type MedicamentoUpsertWithoutRecetasMedicamentosInput = {
    update: XOR<MedicamentoUpdateWithoutRecetasMedicamentosInput, MedicamentoUncheckedUpdateWithoutRecetasMedicamentosInput>
    create: XOR<MedicamentoCreateWithoutRecetasMedicamentosInput, MedicamentoUncheckedCreateWithoutRecetasMedicamentosInput>
    where?: MedicamentoWhereInput
  }

  export type MedicamentoUpdateToOneWithWhereWithoutRecetasMedicamentosInput = {
    where?: MedicamentoWhereInput
    data: XOR<MedicamentoUpdateWithoutRecetasMedicamentosInput, MedicamentoUncheckedUpdateWithoutRecetasMedicamentosInput>
  }

  export type MedicamentoUpdateWithoutRecetasMedicamentosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    devoluciones?: DevolucionUpdateManyWithoutMedicamentoNestedInput
    inventarios?: InventarioUpdateManyWithoutMedicamentoNestedInput
    proveedor?: ProveedorUpdateOneRequiredWithoutMedicamentosNestedInput
    ventaMedicamentos?: VentaMedicamentoUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoUncheckedUpdateWithoutRecetasMedicamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    proveedorId?: IntFieldUpdateOperationsInput | number
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    devoluciones?: DevolucionUncheckedUpdateManyWithoutMedicamentoNestedInput
    inventarios?: InventarioUncheckedUpdateManyWithoutMedicamentoNestedInput
    ventaMedicamentos?: VentaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput
  }

  export type RecetaUpsertWithoutRecetaMedicamentosInput = {
    update: XOR<RecetaUpdateWithoutRecetaMedicamentosInput, RecetaUncheckedUpdateWithoutRecetaMedicamentosInput>
    create: XOR<RecetaCreateWithoutRecetaMedicamentosInput, RecetaUncheckedCreateWithoutRecetaMedicamentosInput>
    where?: RecetaWhereInput
  }

  export type RecetaUpdateToOneWithWhereWithoutRecetaMedicamentosInput = {
    where?: RecetaWhereInput
    data: XOR<RecetaUpdateWithoutRecetaMedicamentosInput, RecetaUncheckedUpdateWithoutRecetaMedicamentosInput>
  }

  export type RecetaUpdateWithoutRecetaMedicamentosInput = {
    pacienteNombre?: StringFieldUpdateOperationsInput | string
    medicoNombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaUncheckedUpdateWithoutRecetaMedicamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteNombre?: StringFieldUpdateOperationsInput | string
    medicoNombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateWithoutVentasInput = {
    email: string
    nombre: string
    suscripto: boolean
  }

  export type ClienteUncheckedCreateWithoutVentasInput = {
    id?: number
    email: string
    nombre: string
    suscripto: boolean
  }

  export type ClienteCreateOrConnectWithoutVentasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
  }

  export type UsuarioCreateWithoutVentasInput = {
    nombre: string
    email: string
    clave: string
    perfil: $Enums.Perfil
    activo: boolean
  }

  export type UsuarioUncheckedCreateWithoutVentasInput = {
    id?: number
    nombre: string
    email: string
    clave: string
    perfil: $Enums.Perfil
    activo: boolean
  }

  export type UsuarioCreateOrConnectWithoutVentasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
  }

  export type VentaMedicamentoCreateWithoutVentaInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    medicamento: MedicamentoCreateNestedOneWithoutVentaMedicamentosInput
  }

  export type VentaMedicamentoUncheckedCreateWithoutVentaInput = {
    id?: number
    medicamentoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type VentaMedicamentoCreateOrConnectWithoutVentaInput = {
    where: VentaMedicamentoWhereUniqueInput
    create: XOR<VentaMedicamentoCreateWithoutVentaInput, VentaMedicamentoUncheckedCreateWithoutVentaInput>
  }

  export type VentaMedicamentoCreateManyVentaInputEnvelope = {
    data: VentaMedicamentoCreateManyVentaInput | VentaMedicamentoCreateManyVentaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutVentasInput = {
    update: XOR<ClienteUpdateWithoutVentasInput, ClienteUncheckedUpdateWithoutVentasInput>
    create: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutVentasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutVentasInput, ClienteUncheckedUpdateWithoutVentasInput>
  }

  export type ClienteUpdateWithoutVentasInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    suscripto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClienteUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    suscripto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUpsertWithoutVentasInput = {
    update: XOR<UsuarioUpdateWithoutVentasInput, UsuarioUncheckedUpdateWithoutVentasInput>
    create: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVentasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVentasInput, UsuarioUncheckedUpdateWithoutVentasInput>
  }

  export type UsuarioUpdateWithoutVentasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VentaMedicamentoUpsertWithWhereUniqueWithoutVentaInput = {
    where: VentaMedicamentoWhereUniqueInput
    update: XOR<VentaMedicamentoUpdateWithoutVentaInput, VentaMedicamentoUncheckedUpdateWithoutVentaInput>
    create: XOR<VentaMedicamentoCreateWithoutVentaInput, VentaMedicamentoUncheckedCreateWithoutVentaInput>
  }

  export type VentaMedicamentoUpdateWithWhereUniqueWithoutVentaInput = {
    where: VentaMedicamentoWhereUniqueInput
    data: XOR<VentaMedicamentoUpdateWithoutVentaInput, VentaMedicamentoUncheckedUpdateWithoutVentaInput>
  }

  export type VentaMedicamentoUpdateManyWithWhereWithoutVentaInput = {
    where: VentaMedicamentoScalarWhereInput
    data: XOR<VentaMedicamentoUpdateManyMutationInput, VentaMedicamentoUncheckedUpdateManyWithoutVentaInput>
  }

  export type MedicamentoCreateWithoutVentaMedicamentosInput = {
    nombre: string
    principioActivo: string
    laboratorio: string
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    devoluciones?: DevolucionCreateNestedManyWithoutMedicamentoInput
    inventarios?: InventarioCreateNestedManyWithoutMedicamentoInput
    proveedor: ProveedorCreateNestedOneWithoutMedicamentosInput
    recetasMedicamentos?: RecetaMedicamentoCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoUncheckedCreateWithoutVentaMedicamentosInput = {
    id?: number
    nombre: string
    principioActivo: string
    laboratorio: string
    proveedorId: number
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
    devoluciones?: DevolucionUncheckedCreateNestedManyWithoutMedicamentoInput
    inventarios?: InventarioUncheckedCreateNestedManyWithoutMedicamentoInput
    recetasMedicamentos?: RecetaMedicamentoUncheckedCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoCreateOrConnectWithoutVentaMedicamentosInput = {
    where: MedicamentoWhereUniqueInput
    create: XOR<MedicamentoCreateWithoutVentaMedicamentosInput, MedicamentoUncheckedCreateWithoutVentaMedicamentosInput>
  }

  export type VentaCreateWithoutVentaMedicamentosInput = {
    fecha: Date | string
    total: Decimal | DecimalJsLike | number | string
    formaPago: $Enums.FormaPago
    cliente: ClienteCreateNestedOneWithoutVentasInput
    usuario: UsuarioCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateWithoutVentaMedicamentosInput = {
    id?: number
    fecha: Date | string
    clienteId: number
    usuarioId: number
    total: Decimal | DecimalJsLike | number | string
    formaPago: $Enums.FormaPago
  }

  export type VentaCreateOrConnectWithoutVentaMedicamentosInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutVentaMedicamentosInput, VentaUncheckedCreateWithoutVentaMedicamentosInput>
  }

  export type MedicamentoUpsertWithoutVentaMedicamentosInput = {
    update: XOR<MedicamentoUpdateWithoutVentaMedicamentosInput, MedicamentoUncheckedUpdateWithoutVentaMedicamentosInput>
    create: XOR<MedicamentoCreateWithoutVentaMedicamentosInput, MedicamentoUncheckedCreateWithoutVentaMedicamentosInput>
    where?: MedicamentoWhereInput
  }

  export type MedicamentoUpdateToOneWithWhereWithoutVentaMedicamentosInput = {
    where?: MedicamentoWhereInput
    data: XOR<MedicamentoUpdateWithoutVentaMedicamentosInput, MedicamentoUncheckedUpdateWithoutVentaMedicamentosInput>
  }

  export type MedicamentoUpdateWithoutVentaMedicamentosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    devoluciones?: DevolucionUpdateManyWithoutMedicamentoNestedInput
    inventarios?: InventarioUpdateManyWithoutMedicamentoNestedInput
    proveedor?: ProveedorUpdateOneRequiredWithoutMedicamentosNestedInput
    recetasMedicamentos?: RecetaMedicamentoUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoUncheckedUpdateWithoutVentaMedicamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    proveedorId?: IntFieldUpdateOperationsInput | number
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    devoluciones?: DevolucionUncheckedUpdateManyWithoutMedicamentoNestedInput
    inventarios?: InventarioUncheckedUpdateManyWithoutMedicamentoNestedInput
    recetasMedicamentos?: RecetaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput
  }

  export type VentaUpsertWithoutVentaMedicamentosInput = {
    update: XOR<VentaUpdateWithoutVentaMedicamentosInput, VentaUncheckedUpdateWithoutVentaMedicamentosInput>
    create: XOR<VentaCreateWithoutVentaMedicamentosInput, VentaUncheckedCreateWithoutVentaMedicamentosInput>
    where?: VentaWhereInput
  }

  export type VentaUpdateToOneWithWhereWithoutVentaMedicamentosInput = {
    where?: VentaWhereInput
    data: XOR<VentaUpdateWithoutVentaMedicamentosInput, VentaUncheckedUpdateWithoutVentaMedicamentosInput>
  }

  export type VentaUpdateWithoutVentaMedicamentosInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateWithoutVentaMedicamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
  }

  export type VentaCreateWithoutUsuarioInput = {
    fecha: Date | string
    total: Decimal | DecimalJsLike | number | string
    formaPago: $Enums.FormaPago
    cliente: ClienteCreateNestedOneWithoutVentasInput
    ventaMedicamentos?: VentaMedicamentoCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fecha: Date | string
    clienteId: number
    total: Decimal | DecimalJsLike | number | string
    formaPago: $Enums.FormaPago
    ventaMedicamentos?: VentaMedicamentoUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput>
  }

  export type VentaCreateManyUsuarioInputEnvelope = {
    data: VentaCreateManyUsuarioInput | VentaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type VentaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutUsuarioInput, VentaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutUsuarioInput, VentaUncheckedUpdateWithoutUsuarioInput>
  }

  export type VentaUpdateManyWithWhereWithoutUsuarioInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type VentaScalarWhereInput = {
    AND?: VentaScalarWhereInput | VentaScalarWhereInput[]
    OR?: VentaScalarWhereInput[]
    NOT?: VentaScalarWhereInput | VentaScalarWhereInput[]
    id?: IntFilter<"Venta"> | number
    fecha?: DateTimeFilter<"Venta"> | Date | string
    clienteId?: IntFilter<"Venta"> | number
    usuarioId?: IntFilter<"Venta"> | number
    total?: DecimalFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFilter<"Venta"> | $Enums.FormaPago
  }

  export type VentaCreateWithoutClienteInput = {
    fecha: Date | string
    total: Decimal | DecimalJsLike | number | string
    formaPago: $Enums.FormaPago
    usuario: UsuarioCreateNestedOneWithoutVentasInput
    ventaMedicamentos?: VentaMedicamentoCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutClienteInput = {
    id?: number
    fecha: Date | string
    usuarioId: number
    total: Decimal | DecimalJsLike | number | string
    formaPago: $Enums.FormaPago
    ventaMedicamentos?: VentaMedicamentoUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutClienteInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput>
  }

  export type VentaCreateManyClienteInputEnvelope = {
    data: VentaCreateManyClienteInput | VentaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type VentaUpsertWithWhereUniqueWithoutClienteInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutClienteInput, VentaUncheckedUpdateWithoutClienteInput>
    create: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutClienteInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutClienteInput, VentaUncheckedUpdateWithoutClienteInput>
  }

  export type VentaUpdateManyWithWhereWithoutClienteInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutClienteInput>
  }

  export type MedicamentoCreateManyProveedorInput = {
    id?: number
    nombre: string
    principioActivo: string
    laboratorio: string
    fechaVencimiento: Date | string
    formaFarmaceutica: $Enums.FormaFarmaceutica
    presentacion: $Enums.Presentacion
    lote: string
    stock: number
  }

  export type MedicamentoUpdateWithoutProveedorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    devoluciones?: DevolucionUpdateManyWithoutMedicamentoNestedInput
    inventarios?: InventarioUpdateManyWithoutMedicamentoNestedInput
    recetasMedicamentos?: RecetaMedicamentoUpdateManyWithoutMedicamentoNestedInput
    ventaMedicamentos?: VentaMedicamentoUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoUncheckedUpdateWithoutProveedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    devoluciones?: DevolucionUncheckedUpdateManyWithoutMedicamentoNestedInput
    inventarios?: InventarioUncheckedUpdateManyWithoutMedicamentoNestedInput
    recetasMedicamentos?: RecetaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput
    ventaMedicamentos?: VentaMedicamentoUncheckedUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoUncheckedUpdateManyWithoutProveedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    principioActivo?: StringFieldUpdateOperationsInput | string
    laboratorio?: StringFieldUpdateOperationsInput | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    formaFarmaceutica?: EnumFormaFarmaceuticaFieldUpdateOperationsInput | $Enums.FormaFarmaceutica
    presentacion?: EnumPresentacionFieldUpdateOperationsInput | $Enums.Presentacion
    lote?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type DevolucionCreateManyMedicamentoInput = {
    id?: number
    fecha: Date | string
    cantidad: number
    motivo: string
  }

  export type InventarioCreateManyMedicamentoInput = {
    id?: number
    fecha: Date | string
    cantidad: number
  }

  export type RecetaMedicamentoCreateManyMedicamentoInput = {
    id?: number
    recetaId: number
    cantidad: number
    estado?: $Enums.Estado
  }

  export type VentaMedicamentoCreateManyMedicamentoInput = {
    id?: number
    ventaId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type DevolucionUpdateWithoutMedicamentoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
  }

  export type DevolucionUncheckedUpdateWithoutMedicamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
  }

  export type DevolucionUncheckedUpdateManyWithoutMedicamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
  }

  export type InventarioUpdateWithoutMedicamentoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type InventarioUncheckedUpdateWithoutMedicamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type InventarioUncheckedUpdateManyWithoutMedicamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type RecetaMedicamentoUpdateWithoutMedicamentoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    receta?: RecetaUpdateOneRequiredWithoutRecetaMedicamentosNestedInput
  }

  export type RecetaMedicamentoUncheckedUpdateWithoutMedicamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    recetaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type RecetaMedicamentoUncheckedUpdateManyWithoutMedicamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    recetaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type VentaMedicamentoUpdateWithoutMedicamentoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venta?: VentaUpdateOneRequiredWithoutVentaMedicamentosNestedInput
  }

  export type VentaMedicamentoUncheckedUpdateWithoutMedicamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaMedicamentoUncheckedUpdateManyWithoutMedicamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecetaMedicamentoCreateManyRecetaInput = {
    id?: number
    medicamentoId: number
    cantidad: number
    estado?: $Enums.Estado
  }

  export type RecetaMedicamentoUpdateWithoutRecetaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    medicamento?: MedicamentoUpdateOneRequiredWithoutRecetasMedicamentosNestedInput
  }

  export type RecetaMedicamentoUncheckedUpdateWithoutRecetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type RecetaMedicamentoUncheckedUpdateManyWithoutRecetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type VentaMedicamentoCreateManyVentaInput = {
    id?: number
    medicamentoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type VentaMedicamentoUpdateWithoutVentaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    medicamento?: MedicamentoUpdateOneRequiredWithoutVentaMedicamentosNestedInput
  }

  export type VentaMedicamentoUncheckedUpdateWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaMedicamentoUncheckedUpdateManyWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicamentoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaCreateManyUsuarioInput = {
    id?: number
    fecha: Date | string
    clienteId: number
    total: Decimal | DecimalJsLike | number | string
    formaPago: $Enums.FormaPago
  }

  export type VentaUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    ventaMedicamentos?: VentaMedicamentoUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
    ventaMedicamentos?: VentaMedicamentoUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
  }

  export type VentaCreateManyClienteInput = {
    id?: number
    fecha: Date | string
    usuarioId: number
    total: Decimal | DecimalJsLike | number | string
    formaPago: $Enums.FormaPago
  }

  export type VentaUpdateWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
    usuario?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
    ventaMedicamentos?: VentaMedicamentoUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
    ventaMedicamentos?: VentaMedicamentoUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPago?: EnumFormaPagoFieldUpdateOperationsInput | $Enums.FormaPago
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