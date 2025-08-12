
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model DATABASECHANGELOGLOCK
 * 
 */
export type DATABASECHANGELOGLOCK = {
  ID: number
  LOCKED: boolean
  LOCKGRANTED: Date | null
  LOCKEDBY: string | null
}

/**
 * Model ai_agent
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_agent = {
  id: string
  user_id: bigint | null
  agent_code: string | null
  agent_name: string | null
  asr_model_id: string | null
  vad_model_id: string | null
  llm_model_id: string | null
  vllm_model_id: string | null
  tts_model_id: string | null
  tts_voice_id: string | null
  mem_model_id: string | null
  intent_model_id: string | null
  system_prompt: string | null
  summary_memory: string | null
  chat_history_conf: number
  lang_code: string | null
  language: string | null
  sort: number | null
  creator: bigint | null
  created_at: Date | null
  updater: bigint | null
  updated_at: Date | null
}

/**
 * Model ai_agent_chat_audio
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_agent_chat_audio = {
  id: string
  audio: Buffer | null
}

/**
 * Model ai_agent_chat_history
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_agent_chat_history = {
  id: bigint
  mac_address: string | null
  agent_id: string | null
  session_id: string | null
  chat_type: number | null
  content: string | null
  audio_id: string | null
  created_at: Date
  updated_at: Date
}

/**
 * Model ai_agent_plugin_mapping
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_agent_plugin_mapping = {
  id: bigint
  agent_id: string
  plugin_id: string
  param_info: Prisma.JsonValue
}

/**
 * Model ai_agent_template
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_agent_template = {
  id: string
  agent_code: string | null
  agent_name: string | null
  asr_model_id: string | null
  vad_model_id: string | null
  llm_model_id: string | null
  vllm_model_id: string | null
  tts_model_id: string | null
  tts_voice_id: string | null
  mem_model_id: string | null
  intent_model_id: string | null
  system_prompt: string | null
  summary_memory: string | null
  chat_history_conf: number
  lang_code: string | null
  language: string | null
  sort: number | null
  creator: bigint | null
  created_at: Date | null
  updater: bigint | null
  updated_at: Date | null
}

/**
 * Model ai_agent_voice_print
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_agent_voice_print = {
  id: string
  agent_id: string
  source_name: string
  introduce: string | null
  create_date: Date | null
  creator: bigint | null
  update_date: Date | null
  updater: bigint | null
  audio_id: string
}

/**
 * Model ai_device
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_device = {
  id: string
  user_id: bigint | null
  mac_address: string | null
  last_connected_at: Date | null
  auto_update: number | null
  board: string | null
  alias: string | null
  agent_id: string | null
  app_version: string | null
  sort: number | null
  creator: bigint | null
  create_date: Date | null
  updater: bigint | null
  update_date: Date | null
}

/**
 * Model ai_model_config
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_model_config = {
  id: string
  model_type: string | null
  model_code: string | null
  model_name: string | null
  is_default: boolean | null
  is_enabled: boolean | null
  config_json: Prisma.JsonValue | null
  doc_link: string | null
  remark: string | null
  sort: number | null
  creator: bigint | null
  create_date: Date | null
  updater: bigint | null
  update_date: Date | null
}

/**
 * Model ai_model_provider
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_model_provider = {
  id: string
  model_type: string | null
  provider_code: string | null
  name: string | null
  fields: Prisma.JsonValue | null
  sort: number | null
  creator: bigint | null
  create_date: Date | null
  updater: bigint | null
  update_date: Date | null
}

/**
 * Model ai_ota
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_ota = {
  id: string
  firmware_name: string | null
  type: string | null
  version: string | null
  size: bigint | null
  remark: string | null
  firmware_path: string | null
  sort: number | null
  updater: bigint | null
  update_date: Date | null
  creator: bigint | null
  create_date: Date | null
}

/**
 * Model ai_tts_voice
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_tts_voice = {
  id: string
  tts_model_id: string | null
  name: string | null
  tts_voice: string | null
  languages: string | null
  voice_demo: string | null
  remark: string | null
  reference_audio: string | null
  reference_text: string | null
  sort: number | null
  creator: bigint | null
  create_date: Date | null
  updater: bigint | null
  update_date: Date | null
}

/**
 * Model ai_voiceprint
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ai_voiceprint = {
  id: string
  name: string | null
  user_id: bigint | null
  agent_id: string | null
  agent_code: string | null
  agent_name: string | null
  description: string | null
  embedding: string | null
  memory: string | null
  sort: number | null
  creator: bigint | null
  created_at: Date | null
  updater: bigint | null
  updated_at: Date | null
}

/**
 * Model sys_dict_data
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sys_dict_data = {
  id: bigint
  dict_type_id: bigint
  dict_label: string
  dict_value: string | null
  remark: string | null
  sort: number | null
  creator: bigint | null
  create_date: Date | null
  updater: bigint | null
  update_date: Date | null
}

/**
 * Model sys_dict_type
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sys_dict_type = {
  id: bigint
  dict_type: string
  dict_name: string
  remark: string | null
  sort: number | null
  creator: bigint | null
  create_date: Date | null
  updater: bigint | null
  update_date: Date | null
}

/**
 * Model sys_params
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sys_params = {
  id: bigint
  param_code: string | null
  param_value: string | null
  value_type: string | null
  param_type: number | null
  remark: string | null
  creator: bigint | null
  create_date: Date | null
  updater: bigint | null
  update_date: Date | null
}

/**
 * Model sys_user
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sys_user = {
  id: bigint
  username: string
  password: string | null
  super_admin: number | null
  status: number | null
  create_date: Date | null
  updater: bigint | null
  creator: bigint | null
  update_date: Date | null
}

/**
 * Model sys_user_token
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sys_user_token = {
  id: bigint
  user_id: bigint
  token: string
  expire_date: Date | null
  update_date: Date | null
  create_date: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DATABASECHANGELOGLOCKS
 * const dATABASECHANGELOGLOCKS = await prisma.dATABASECHANGELOGLOCK.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DATABASECHANGELOGLOCKS
   * const dATABASECHANGELOGLOCKS = await prisma.dATABASECHANGELOGLOCK.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.dATABASECHANGELOGLOCK`: Exposes CRUD operations for the **DATABASECHANGELOGLOCK** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DATABASECHANGELOGLOCKS
    * const dATABASECHANGELOGLOCKS = await prisma.dATABASECHANGELOGLOCK.findMany()
    * ```
    */
  get dATABASECHANGELOGLOCK(): Prisma.DATABASECHANGELOGLOCKDelegate<GlobalReject>;

  /**
   * `prisma.ai_agent`: Exposes CRUD operations for the **ai_agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_agents
    * const ai_agents = await prisma.ai_agent.findMany()
    * ```
    */
  get ai_agent(): Prisma.ai_agentDelegate<GlobalReject>;

  /**
   * `prisma.ai_agent_chat_audio`: Exposes CRUD operations for the **ai_agent_chat_audio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_agent_chat_audios
    * const ai_agent_chat_audios = await prisma.ai_agent_chat_audio.findMany()
    * ```
    */
  get ai_agent_chat_audio(): Prisma.ai_agent_chat_audioDelegate<GlobalReject>;

  /**
   * `prisma.ai_agent_chat_history`: Exposes CRUD operations for the **ai_agent_chat_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_agent_chat_histories
    * const ai_agent_chat_histories = await prisma.ai_agent_chat_history.findMany()
    * ```
    */
  get ai_agent_chat_history(): Prisma.ai_agent_chat_historyDelegate<GlobalReject>;

  /**
   * `prisma.ai_agent_plugin_mapping`: Exposes CRUD operations for the **ai_agent_plugin_mapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_agent_plugin_mappings
    * const ai_agent_plugin_mappings = await prisma.ai_agent_plugin_mapping.findMany()
    * ```
    */
  get ai_agent_plugin_mapping(): Prisma.ai_agent_plugin_mappingDelegate<GlobalReject>;

  /**
   * `prisma.ai_agent_template`: Exposes CRUD operations for the **ai_agent_template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_agent_templates
    * const ai_agent_templates = await prisma.ai_agent_template.findMany()
    * ```
    */
  get ai_agent_template(): Prisma.ai_agent_templateDelegate<GlobalReject>;

  /**
   * `prisma.ai_agent_voice_print`: Exposes CRUD operations for the **ai_agent_voice_print** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_agent_voice_prints
    * const ai_agent_voice_prints = await prisma.ai_agent_voice_print.findMany()
    * ```
    */
  get ai_agent_voice_print(): Prisma.ai_agent_voice_printDelegate<GlobalReject>;

  /**
   * `prisma.ai_device`: Exposes CRUD operations for the **ai_device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_devices
    * const ai_devices = await prisma.ai_device.findMany()
    * ```
    */
  get ai_device(): Prisma.ai_deviceDelegate<GlobalReject>;

  /**
   * `prisma.ai_model_config`: Exposes CRUD operations for the **ai_model_config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_model_configs
    * const ai_model_configs = await prisma.ai_model_config.findMany()
    * ```
    */
  get ai_model_config(): Prisma.ai_model_configDelegate<GlobalReject>;

  /**
   * `prisma.ai_model_provider`: Exposes CRUD operations for the **ai_model_provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_model_providers
    * const ai_model_providers = await prisma.ai_model_provider.findMany()
    * ```
    */
  get ai_model_provider(): Prisma.ai_model_providerDelegate<GlobalReject>;

  /**
   * `prisma.ai_ota`: Exposes CRUD operations for the **ai_ota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_otas
    * const ai_otas = await prisma.ai_ota.findMany()
    * ```
    */
  get ai_ota(): Prisma.ai_otaDelegate<GlobalReject>;

  /**
   * `prisma.ai_tts_voice`: Exposes CRUD operations for the **ai_tts_voice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_tts_voices
    * const ai_tts_voices = await prisma.ai_tts_voice.findMany()
    * ```
    */
  get ai_tts_voice(): Prisma.ai_tts_voiceDelegate<GlobalReject>;

  /**
   * `prisma.ai_voiceprint`: Exposes CRUD operations for the **ai_voiceprint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_voiceprints
    * const ai_voiceprints = await prisma.ai_voiceprint.findMany()
    * ```
    */
  get ai_voiceprint(): Prisma.ai_voiceprintDelegate<GlobalReject>;

  /**
   * `prisma.sys_dict_data`: Exposes CRUD operations for the **sys_dict_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_dict_data
    * const sys_dict_data = await prisma.sys_dict_data.findMany()
    * ```
    */
  get sys_dict_data(): Prisma.sys_dict_dataDelegate<GlobalReject>;

  /**
   * `prisma.sys_dict_type`: Exposes CRUD operations for the **sys_dict_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_dict_types
    * const sys_dict_types = await prisma.sys_dict_type.findMany()
    * ```
    */
  get sys_dict_type(): Prisma.sys_dict_typeDelegate<GlobalReject>;

  /**
   * `prisma.sys_params`: Exposes CRUD operations for the **sys_params** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_params
    * const sys_params = await prisma.sys_params.findMany()
    * ```
    */
  get sys_params(): Prisma.sys_paramsDelegate<GlobalReject>;

  /**
   * `prisma.sys_user`: Exposes CRUD operations for the **sys_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_users
    * const sys_users = await prisma.sys_user.findMany()
    * ```
    */
  get sys_user(): Prisma.sys_userDelegate<GlobalReject>;

  /**
   * `prisma.sys_user_token`: Exposes CRUD operations for the **sys_user_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_user_tokens
    * const sys_user_tokens = await prisma.sys_user_token.findMany()
    * ```
    */
  get sys_user_token(): Prisma.sys_user_tokenDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    DATABASECHANGELOGLOCK: 'DATABASECHANGELOGLOCK',
    ai_agent: 'ai_agent',
    ai_agent_chat_audio: 'ai_agent_chat_audio',
    ai_agent_chat_history: 'ai_agent_chat_history',
    ai_agent_plugin_mapping: 'ai_agent_plugin_mapping',
    ai_agent_template: 'ai_agent_template',
    ai_agent_voice_print: 'ai_agent_voice_print',
    ai_device: 'ai_device',
    ai_model_config: 'ai_model_config',
    ai_model_provider: 'ai_model_provider',
    ai_ota: 'ai_ota',
    ai_tts_voice: 'ai_tts_voice',
    ai_voiceprint: 'ai_voiceprint',
    sys_dict_data: 'sys_dict_data',
    sys_dict_type: 'sys_dict_type',
    sys_params: 'sys_params',
    sys_user: 'sys_user',
    sys_user_token: 'sys_user_token'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

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
   * Model DATABASECHANGELOGLOCK
   */


  export type AggregateDATABASECHANGELOGLOCK = {
    _count: DATABASECHANGELOGLOCKCountAggregateOutputType | null
    _avg: DATABASECHANGELOGLOCKAvgAggregateOutputType | null
    _sum: DATABASECHANGELOGLOCKSumAggregateOutputType | null
    _min: DATABASECHANGELOGLOCKMinAggregateOutputType | null
    _max: DATABASECHANGELOGLOCKMaxAggregateOutputType | null
  }

  export type DATABASECHANGELOGLOCKAvgAggregateOutputType = {
    ID: number | null
  }

  export type DATABASECHANGELOGLOCKSumAggregateOutputType = {
    ID: number | null
  }

  export type DATABASECHANGELOGLOCKMinAggregateOutputType = {
    ID: number | null
    LOCKED: boolean | null
    LOCKGRANTED: Date | null
    LOCKEDBY: string | null
  }

  export type DATABASECHANGELOGLOCKMaxAggregateOutputType = {
    ID: number | null
    LOCKED: boolean | null
    LOCKGRANTED: Date | null
    LOCKEDBY: string | null
  }

  export type DATABASECHANGELOGLOCKCountAggregateOutputType = {
    ID: number
    LOCKED: number
    LOCKGRANTED: number
    LOCKEDBY: number
    _all: number
  }


  export type DATABASECHANGELOGLOCKAvgAggregateInputType = {
    ID?: true
  }

  export type DATABASECHANGELOGLOCKSumAggregateInputType = {
    ID?: true
  }

  export type DATABASECHANGELOGLOCKMinAggregateInputType = {
    ID?: true
    LOCKED?: true
    LOCKGRANTED?: true
    LOCKEDBY?: true
  }

  export type DATABASECHANGELOGLOCKMaxAggregateInputType = {
    ID?: true
    LOCKED?: true
    LOCKGRANTED?: true
    LOCKEDBY?: true
  }

  export type DATABASECHANGELOGLOCKCountAggregateInputType = {
    ID?: true
    LOCKED?: true
    LOCKGRANTED?: true
    LOCKEDBY?: true
    _all?: true
  }

  export type DATABASECHANGELOGLOCKAggregateArgs = {
    /**
     * Filter which DATABASECHANGELOGLOCK to aggregate.
     * 
    **/
    where?: DATABASECHANGELOGLOCKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DATABASECHANGELOGLOCKS to fetch.
     * 
    **/
    orderBy?: Enumerable<DATABASECHANGELOGLOCKOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DATABASECHANGELOGLOCKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DATABASECHANGELOGLOCKS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DATABASECHANGELOGLOCKS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DATABASECHANGELOGLOCKS
    **/
    _count?: true | DATABASECHANGELOGLOCKCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DATABASECHANGELOGLOCKAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DATABASECHANGELOGLOCKSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DATABASECHANGELOGLOCKMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DATABASECHANGELOGLOCKMaxAggregateInputType
  }

  export type GetDATABASECHANGELOGLOCKAggregateType<T extends DATABASECHANGELOGLOCKAggregateArgs> = {
        [P in keyof T & keyof AggregateDATABASECHANGELOGLOCK]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDATABASECHANGELOGLOCK[P]>
      : GetScalarType<T[P], AggregateDATABASECHANGELOGLOCK[P]>
  }




  export type DATABASECHANGELOGLOCKGroupByArgs = {
    where?: DATABASECHANGELOGLOCKWhereInput
    orderBy?: Enumerable<DATABASECHANGELOGLOCKOrderByWithAggregationInput>
    by: Array<DATABASECHANGELOGLOCKScalarFieldEnum>
    having?: DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DATABASECHANGELOGLOCKCountAggregateInputType | true
    _avg?: DATABASECHANGELOGLOCKAvgAggregateInputType
    _sum?: DATABASECHANGELOGLOCKSumAggregateInputType
    _min?: DATABASECHANGELOGLOCKMinAggregateInputType
    _max?: DATABASECHANGELOGLOCKMaxAggregateInputType
  }


  export type DATABASECHANGELOGLOCKGroupByOutputType = {
    ID: number
    LOCKED: boolean
    LOCKGRANTED: Date | null
    LOCKEDBY: string | null
    _count: DATABASECHANGELOGLOCKCountAggregateOutputType | null
    _avg: DATABASECHANGELOGLOCKAvgAggregateOutputType | null
    _sum: DATABASECHANGELOGLOCKSumAggregateOutputType | null
    _min: DATABASECHANGELOGLOCKMinAggregateOutputType | null
    _max: DATABASECHANGELOGLOCKMaxAggregateOutputType | null
  }

  type GetDATABASECHANGELOGLOCKGroupByPayload<T extends DATABASECHANGELOGLOCKGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DATABASECHANGELOGLOCKGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DATABASECHANGELOGLOCKGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DATABASECHANGELOGLOCKGroupByOutputType[P]>
            : GetScalarType<T[P], DATABASECHANGELOGLOCKGroupByOutputType[P]>
        }
      >
    >


  export type DATABASECHANGELOGLOCKSelect = {
    ID?: boolean
    LOCKED?: boolean
    LOCKGRANTED?: boolean
    LOCKEDBY?: boolean
  }

  export type DATABASECHANGELOGLOCKGetPayload<
    S extends boolean | null | undefined | DATABASECHANGELOGLOCKArgs,
    U = keyof S
      > = S extends true
        ? DATABASECHANGELOGLOCK
    : S extends undefined
    ? never
    : S extends DATABASECHANGELOGLOCKArgs | DATABASECHANGELOGLOCKFindManyArgs
    ?'include' extends U
    ? DATABASECHANGELOGLOCK 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DATABASECHANGELOGLOCK ? DATABASECHANGELOGLOCK[P] : never
  } 
    : DATABASECHANGELOGLOCK
  : DATABASECHANGELOGLOCK


  type DATABASECHANGELOGLOCKCountArgs = Merge<
    Omit<DATABASECHANGELOGLOCKFindManyArgs, 'select' | 'include'> & {
      select?: DATABASECHANGELOGLOCKCountAggregateInputType | true
    }
  >

  export interface DATABASECHANGELOGLOCKDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one DATABASECHANGELOGLOCK that matches the filter.
     * @param {DATABASECHANGELOGLOCKFindUniqueArgs} args - Arguments to find a DATABASECHANGELOGLOCK
     * @example
     * // Get one DATABASECHANGELOGLOCK
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DATABASECHANGELOGLOCKFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DATABASECHANGELOGLOCK'> extends True ? CheckSelect<T, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCK>, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCKGetPayload<T>>> : CheckSelect<T, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCK | null >, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCKGetPayload<T> | null >>

    /**
     * Find the first DATABASECHANGELOGLOCK that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKFindFirstArgs} args - Arguments to find a DATABASECHANGELOGLOCK
     * @example
     * // Get one DATABASECHANGELOGLOCK
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DATABASECHANGELOGLOCKFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DATABASECHANGELOGLOCKFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DATABASECHANGELOGLOCK'> extends True ? CheckSelect<T, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCK>, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCKGetPayload<T>>> : CheckSelect<T, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCK | null >, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCKGetPayload<T> | null >>

    /**
     * Find zero or more DATABASECHANGELOGLOCKS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DATABASECHANGELOGLOCKS
     * const dATABASECHANGELOGLOCKS = await prisma.dATABASECHANGELOGLOCK.findMany()
     * 
     * // Get first 10 DATABASECHANGELOGLOCKS
     * const dATABASECHANGELOGLOCKS = await prisma.dATABASECHANGELOGLOCK.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dATABASECHANGELOGLOCKWithIDOnly = await prisma.dATABASECHANGELOGLOCK.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DATABASECHANGELOGLOCKFindManyArgs>(
      args?: SelectSubset<T, DATABASECHANGELOGLOCKFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<DATABASECHANGELOGLOCK>>, PrismaPromise<Array<DATABASECHANGELOGLOCKGetPayload<T>>>>

    /**
     * Create a DATABASECHANGELOGLOCK.
     * @param {DATABASECHANGELOGLOCKCreateArgs} args - Arguments to create a DATABASECHANGELOGLOCK.
     * @example
     * // Create one DATABASECHANGELOGLOCK
     * const DATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.create({
     *   data: {
     *     // ... data to create a DATABASECHANGELOGLOCK
     *   }
     * })
     * 
    **/
    create<T extends DATABASECHANGELOGLOCKCreateArgs>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKCreateArgs>
    ): CheckSelect<T, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCK>, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCKGetPayload<T>>>

    /**
     * Create many DATABASECHANGELOGLOCKS.
     *     @param {DATABASECHANGELOGLOCKCreateManyArgs} args - Arguments to create many DATABASECHANGELOGLOCKS.
     *     @example
     *     // Create many DATABASECHANGELOGLOCKS
     *     const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DATABASECHANGELOGLOCKCreateManyArgs>(
      args?: SelectSubset<T, DATABASECHANGELOGLOCKCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DATABASECHANGELOGLOCK.
     * @param {DATABASECHANGELOGLOCKDeleteArgs} args - Arguments to delete one DATABASECHANGELOGLOCK.
     * @example
     * // Delete one DATABASECHANGELOGLOCK
     * const DATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.delete({
     *   where: {
     *     // ... filter to delete one DATABASECHANGELOGLOCK
     *   }
     * })
     * 
    **/
    delete<T extends DATABASECHANGELOGLOCKDeleteArgs>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKDeleteArgs>
    ): CheckSelect<T, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCK>, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCKGetPayload<T>>>

    /**
     * Update one DATABASECHANGELOGLOCK.
     * @param {DATABASECHANGELOGLOCKUpdateArgs} args - Arguments to update one DATABASECHANGELOGLOCK.
     * @example
     * // Update one DATABASECHANGELOGLOCK
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DATABASECHANGELOGLOCKUpdateArgs>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKUpdateArgs>
    ): CheckSelect<T, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCK>, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCKGetPayload<T>>>

    /**
     * Delete zero or more DATABASECHANGELOGLOCKS.
     * @param {DATABASECHANGELOGLOCKDeleteManyArgs} args - Arguments to filter DATABASECHANGELOGLOCKS to delete.
     * @example
     * // Delete a few DATABASECHANGELOGLOCKS
     * const { count } = await prisma.dATABASECHANGELOGLOCK.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DATABASECHANGELOGLOCKDeleteManyArgs>(
      args?: SelectSubset<T, DATABASECHANGELOGLOCKDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DATABASECHANGELOGLOCKS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DATABASECHANGELOGLOCKS
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DATABASECHANGELOGLOCKUpdateManyArgs>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DATABASECHANGELOGLOCK.
     * @param {DATABASECHANGELOGLOCKUpsertArgs} args - Arguments to update or create a DATABASECHANGELOGLOCK.
     * @example
     * // Update or create a DATABASECHANGELOGLOCK
     * const dATABASECHANGELOGLOCK = await prisma.dATABASECHANGELOGLOCK.upsert({
     *   create: {
     *     // ... data to create a DATABASECHANGELOGLOCK
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DATABASECHANGELOGLOCK we want to update
     *   }
     * })
    **/
    upsert<T extends DATABASECHANGELOGLOCKUpsertArgs>(
      args: SelectSubset<T, DATABASECHANGELOGLOCKUpsertArgs>
    ): CheckSelect<T, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCK>, Prisma__DATABASECHANGELOGLOCKClient<DATABASECHANGELOGLOCKGetPayload<T>>>

    /**
     * Count the number of DATABASECHANGELOGLOCKS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKCountArgs} args - Arguments to filter DATABASECHANGELOGLOCKS to count.
     * @example
     * // Count the number of DATABASECHANGELOGLOCKS
     * const count = await prisma.dATABASECHANGELOGLOCK.count({
     *   where: {
     *     // ... the filter for the DATABASECHANGELOGLOCKS we want to count
     *   }
     * })
    **/
    count<T extends DATABASECHANGELOGLOCKCountArgs>(
      args?: Subset<T, DATABASECHANGELOGLOCKCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DATABASECHANGELOGLOCKCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DATABASECHANGELOGLOCK.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DATABASECHANGELOGLOCKAggregateArgs>(args: Subset<T, DATABASECHANGELOGLOCKAggregateArgs>): PrismaPromise<GetDATABASECHANGELOGLOCKAggregateType<T>>

    /**
     * Group by DATABASECHANGELOGLOCK.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DATABASECHANGELOGLOCKGroupByArgs} args - Group by arguments.
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
      T extends DATABASECHANGELOGLOCKGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DATABASECHANGELOGLOCKGroupByArgs['orderBy'] }
        : { orderBy?: DATABASECHANGELOGLOCKGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DATABASECHANGELOGLOCKGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDATABASECHANGELOGLOCKGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for DATABASECHANGELOGLOCK.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DATABASECHANGELOGLOCKClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * DATABASECHANGELOGLOCK findUnique
   */
  export type DATABASECHANGELOGLOCKFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     * 
    **/
    select?: DATABASECHANGELOGLOCKSelect | null
    /**
     * Throw an Error if a DATABASECHANGELOGLOCK can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DATABASECHANGELOGLOCK to fetch.
     * 
    **/
    where: DATABASECHANGELOGLOCKWhereUniqueInput
  }


  /**
   * DATABASECHANGELOGLOCK findFirst
   */
  export type DATABASECHANGELOGLOCKFindFirstArgs = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     * 
    **/
    select?: DATABASECHANGELOGLOCKSelect | null
    /**
     * Throw an Error if a DATABASECHANGELOGLOCK can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DATABASECHANGELOGLOCK to fetch.
     * 
    **/
    where?: DATABASECHANGELOGLOCKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DATABASECHANGELOGLOCKS to fetch.
     * 
    **/
    orderBy?: Enumerable<DATABASECHANGELOGLOCKOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DATABASECHANGELOGLOCKS.
     * 
    **/
    cursor?: DATABASECHANGELOGLOCKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DATABASECHANGELOGLOCKS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DATABASECHANGELOGLOCKS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DATABASECHANGELOGLOCKS.
     * 
    **/
    distinct?: Enumerable<DATABASECHANGELOGLOCKScalarFieldEnum>
  }


  /**
   * DATABASECHANGELOGLOCK findMany
   */
  export type DATABASECHANGELOGLOCKFindManyArgs = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     * 
    **/
    select?: DATABASECHANGELOGLOCKSelect | null
    /**
     * Filter, which DATABASECHANGELOGLOCKS to fetch.
     * 
    **/
    where?: DATABASECHANGELOGLOCKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DATABASECHANGELOGLOCKS to fetch.
     * 
    **/
    orderBy?: Enumerable<DATABASECHANGELOGLOCKOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DATABASECHANGELOGLOCKS.
     * 
    **/
    cursor?: DATABASECHANGELOGLOCKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DATABASECHANGELOGLOCKS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DATABASECHANGELOGLOCKS.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DATABASECHANGELOGLOCKScalarFieldEnum>
  }


  /**
   * DATABASECHANGELOGLOCK create
   */
  export type DATABASECHANGELOGLOCKCreateArgs = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     * 
    **/
    select?: DATABASECHANGELOGLOCKSelect | null
    /**
     * The data needed to create a DATABASECHANGELOGLOCK.
     * 
    **/
    data: XOR<DATABASECHANGELOGLOCKCreateInput, DATABASECHANGELOGLOCKUncheckedCreateInput>
  }


  /**
   * DATABASECHANGELOGLOCK createMany
   */
  export type DATABASECHANGELOGLOCKCreateManyArgs = {
    /**
     * The data used to create many DATABASECHANGELOGLOCKS.
     * 
    **/
    data: Enumerable<DATABASECHANGELOGLOCKCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DATABASECHANGELOGLOCK update
   */
  export type DATABASECHANGELOGLOCKUpdateArgs = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     * 
    **/
    select?: DATABASECHANGELOGLOCKSelect | null
    /**
     * The data needed to update a DATABASECHANGELOGLOCK.
     * 
    **/
    data: XOR<DATABASECHANGELOGLOCKUpdateInput, DATABASECHANGELOGLOCKUncheckedUpdateInput>
    /**
     * Choose, which DATABASECHANGELOGLOCK to update.
     * 
    **/
    where: DATABASECHANGELOGLOCKWhereUniqueInput
  }


  /**
   * DATABASECHANGELOGLOCK updateMany
   */
  export type DATABASECHANGELOGLOCKUpdateManyArgs = {
    /**
     * The data used to update DATABASECHANGELOGLOCKS.
     * 
    **/
    data: XOR<DATABASECHANGELOGLOCKUpdateManyMutationInput, DATABASECHANGELOGLOCKUncheckedUpdateManyInput>
    /**
     * Filter which DATABASECHANGELOGLOCKS to update
     * 
    **/
    where?: DATABASECHANGELOGLOCKWhereInput
  }


  /**
   * DATABASECHANGELOGLOCK upsert
   */
  export type DATABASECHANGELOGLOCKUpsertArgs = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     * 
    **/
    select?: DATABASECHANGELOGLOCKSelect | null
    /**
     * The filter to search for the DATABASECHANGELOGLOCK to update in case it exists.
     * 
    **/
    where: DATABASECHANGELOGLOCKWhereUniqueInput
    /**
     * In case the DATABASECHANGELOGLOCK found by the `where` argument doesn't exist, create a new DATABASECHANGELOGLOCK with this data.
     * 
    **/
    create: XOR<DATABASECHANGELOGLOCKCreateInput, DATABASECHANGELOGLOCKUncheckedCreateInput>
    /**
     * In case the DATABASECHANGELOGLOCK was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DATABASECHANGELOGLOCKUpdateInput, DATABASECHANGELOGLOCKUncheckedUpdateInput>
  }


  /**
   * DATABASECHANGELOGLOCK delete
   */
  export type DATABASECHANGELOGLOCKDeleteArgs = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     * 
    **/
    select?: DATABASECHANGELOGLOCKSelect | null
    /**
     * Filter which DATABASECHANGELOGLOCK to delete.
     * 
    **/
    where: DATABASECHANGELOGLOCKWhereUniqueInput
  }


  /**
   * DATABASECHANGELOGLOCK deleteMany
   */
  export type DATABASECHANGELOGLOCKDeleteManyArgs = {
    /**
     * Filter which DATABASECHANGELOGLOCKS to delete
     * 
    **/
    where?: DATABASECHANGELOGLOCKWhereInput
  }


  /**
   * DATABASECHANGELOGLOCK without action
   */
  export type DATABASECHANGELOGLOCKArgs = {
    /**
     * Select specific fields to fetch from the DATABASECHANGELOGLOCK
     * 
    **/
    select?: DATABASECHANGELOGLOCKSelect | null
  }



  /**
   * Model ai_agent
   */


  export type AggregateAi_agent = {
    _count: Ai_agentCountAggregateOutputType | null
    _avg: Ai_agentAvgAggregateOutputType | null
    _sum: Ai_agentSumAggregateOutputType | null
    _min: Ai_agentMinAggregateOutputType | null
    _max: Ai_agentMaxAggregateOutputType | null
  }

  export type Ai_agentAvgAggregateOutputType = {
    user_id: number | null
    chat_history_conf: number | null
    sort: number | null
    creator: number | null
    updater: number | null
  }

  export type Ai_agentSumAggregateOutputType = {
    user_id: bigint | null
    chat_history_conf: number | null
    sort: number | null
    creator: bigint | null
    updater: bigint | null
  }

  export type Ai_agentMinAggregateOutputType = {
    id: string | null
    user_id: bigint | null
    agent_code: string | null
    agent_name: string | null
    asr_model_id: string | null
    vad_model_id: string | null
    llm_model_id: string | null
    vllm_model_id: string | null
    tts_model_id: string | null
    tts_voice_id: string | null
    mem_model_id: string | null
    intent_model_id: string | null
    system_prompt: string | null
    summary_memory: string | null
    chat_history_conf: number | null
    lang_code: string | null
    language: string | null
    sort: number | null
    creator: bigint | null
    created_at: Date | null
    updater: bigint | null
    updated_at: Date | null
  }

  export type Ai_agentMaxAggregateOutputType = {
    id: string | null
    user_id: bigint | null
    agent_code: string | null
    agent_name: string | null
    asr_model_id: string | null
    vad_model_id: string | null
    llm_model_id: string | null
    vllm_model_id: string | null
    tts_model_id: string | null
    tts_voice_id: string | null
    mem_model_id: string | null
    intent_model_id: string | null
    system_prompt: string | null
    summary_memory: string | null
    chat_history_conf: number | null
    lang_code: string | null
    language: string | null
    sort: number | null
    creator: bigint | null
    created_at: Date | null
    updater: bigint | null
    updated_at: Date | null
  }

  export type Ai_agentCountAggregateOutputType = {
    id: number
    user_id: number
    agent_code: number
    agent_name: number
    asr_model_id: number
    vad_model_id: number
    llm_model_id: number
    vllm_model_id: number
    tts_model_id: number
    tts_voice_id: number
    mem_model_id: number
    intent_model_id: number
    system_prompt: number
    summary_memory: number
    chat_history_conf: number
    lang_code: number
    language: number
    sort: number
    creator: number
    created_at: number
    updater: number
    updated_at: number
    _all: number
  }


  export type Ai_agentAvgAggregateInputType = {
    user_id?: true
    chat_history_conf?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_agentSumAggregateInputType = {
    user_id?: true
    chat_history_conf?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_agentMinAggregateInputType = {
    id?: true
    user_id?: true
    agent_code?: true
    agent_name?: true
    asr_model_id?: true
    vad_model_id?: true
    llm_model_id?: true
    vllm_model_id?: true
    tts_model_id?: true
    tts_voice_id?: true
    mem_model_id?: true
    intent_model_id?: true
    system_prompt?: true
    summary_memory?: true
    chat_history_conf?: true
    lang_code?: true
    language?: true
    sort?: true
    creator?: true
    created_at?: true
    updater?: true
    updated_at?: true
  }

  export type Ai_agentMaxAggregateInputType = {
    id?: true
    user_id?: true
    agent_code?: true
    agent_name?: true
    asr_model_id?: true
    vad_model_id?: true
    llm_model_id?: true
    vllm_model_id?: true
    tts_model_id?: true
    tts_voice_id?: true
    mem_model_id?: true
    intent_model_id?: true
    system_prompt?: true
    summary_memory?: true
    chat_history_conf?: true
    lang_code?: true
    language?: true
    sort?: true
    creator?: true
    created_at?: true
    updater?: true
    updated_at?: true
  }

  export type Ai_agentCountAggregateInputType = {
    id?: true
    user_id?: true
    agent_code?: true
    agent_name?: true
    asr_model_id?: true
    vad_model_id?: true
    llm_model_id?: true
    vllm_model_id?: true
    tts_model_id?: true
    tts_voice_id?: true
    mem_model_id?: true
    intent_model_id?: true
    system_prompt?: true
    summary_memory?: true
    chat_history_conf?: true
    lang_code?: true
    language?: true
    sort?: true
    creator?: true
    created_at?: true
    updater?: true
    updated_at?: true
    _all?: true
  }

  export type Ai_agentAggregateArgs = {
    /**
     * Filter which ai_agent to aggregate.
     * 
    **/
    where?: ai_agentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agents to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_agentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_agents
    **/
    _count?: true | Ai_agentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_agentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_agentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_agentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_agentMaxAggregateInputType
  }

  export type GetAi_agentAggregateType<T extends Ai_agentAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_agent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_agent[P]>
      : GetScalarType<T[P], AggregateAi_agent[P]>
  }




  export type Ai_agentGroupByArgs = {
    where?: ai_agentWhereInput
    orderBy?: Enumerable<ai_agentOrderByWithAggregationInput>
    by: Array<Ai_agentScalarFieldEnum>
    having?: ai_agentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_agentCountAggregateInputType | true
    _avg?: Ai_agentAvgAggregateInputType
    _sum?: Ai_agentSumAggregateInputType
    _min?: Ai_agentMinAggregateInputType
    _max?: Ai_agentMaxAggregateInputType
  }


  export type Ai_agentGroupByOutputType = {
    id: string
    user_id: bigint | null
    agent_code: string | null
    agent_name: string | null
    asr_model_id: string | null
    vad_model_id: string | null
    llm_model_id: string | null
    vllm_model_id: string | null
    tts_model_id: string | null
    tts_voice_id: string | null
    mem_model_id: string | null
    intent_model_id: string | null
    system_prompt: string | null
    summary_memory: string | null
    chat_history_conf: number
    lang_code: string | null
    language: string | null
    sort: number | null
    creator: bigint | null
    created_at: Date | null
    updater: bigint | null
    updated_at: Date | null
    _count: Ai_agentCountAggregateOutputType | null
    _avg: Ai_agentAvgAggregateOutputType | null
    _sum: Ai_agentSumAggregateOutputType | null
    _min: Ai_agentMinAggregateOutputType | null
    _max: Ai_agentMaxAggregateOutputType | null
  }

  type GetAi_agentGroupByPayload<T extends Ai_agentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_agentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_agentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_agentGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_agentGroupByOutputType[P]>
        }
      >
    >


  export type ai_agentSelect = {
    id?: boolean
    user_id?: boolean
    agent_code?: boolean
    agent_name?: boolean
    asr_model_id?: boolean
    vad_model_id?: boolean
    llm_model_id?: boolean
    vllm_model_id?: boolean
    tts_model_id?: boolean
    tts_voice_id?: boolean
    mem_model_id?: boolean
    intent_model_id?: boolean
    system_prompt?: boolean
    summary_memory?: boolean
    chat_history_conf?: boolean
    lang_code?: boolean
    language?: boolean
    sort?: boolean
    creator?: boolean
    created_at?: boolean
    updater?: boolean
    updated_at?: boolean
  }

  export type ai_agentGetPayload<
    S extends boolean | null | undefined | ai_agentArgs,
    U = keyof S
      > = S extends true
        ? ai_agent
    : S extends undefined
    ? never
    : S extends ai_agentArgs | ai_agentFindManyArgs
    ?'include' extends U
    ? ai_agent 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_agent ? ai_agent[P] : never
  } 
    : ai_agent
  : ai_agent


  type ai_agentCountArgs = Merge<
    Omit<ai_agentFindManyArgs, 'select' | 'include'> & {
      select?: Ai_agentCountAggregateInputType | true
    }
  >

  export interface ai_agentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_agent that matches the filter.
     * @param {ai_agentFindUniqueArgs} args - Arguments to find a Ai_agent
     * @example
     * // Get one Ai_agent
     * const ai_agent = await prisma.ai_agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_agentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_agentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_agent'> extends True ? CheckSelect<T, Prisma__ai_agentClient<ai_agent>, Prisma__ai_agentClient<ai_agentGetPayload<T>>> : CheckSelect<T, Prisma__ai_agentClient<ai_agent | null >, Prisma__ai_agentClient<ai_agentGetPayload<T> | null >>

    /**
     * Find the first Ai_agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agentFindFirstArgs} args - Arguments to find a Ai_agent
     * @example
     * // Get one Ai_agent
     * const ai_agent = await prisma.ai_agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_agentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_agentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_agent'> extends True ? CheckSelect<T, Prisma__ai_agentClient<ai_agent>, Prisma__ai_agentClient<ai_agentGetPayload<T>>> : CheckSelect<T, Prisma__ai_agentClient<ai_agent | null >, Prisma__ai_agentClient<ai_agentGetPayload<T> | null >>

    /**
     * Find zero or more Ai_agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_agents
     * const ai_agents = await prisma.ai_agent.findMany()
     * 
     * // Get first 10 Ai_agents
     * const ai_agents = await prisma.ai_agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_agentWithIdOnly = await prisma.ai_agent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_agentFindManyArgs>(
      args?: SelectSubset<T, ai_agentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_agent>>, PrismaPromise<Array<ai_agentGetPayload<T>>>>

    /**
     * Create a Ai_agent.
     * @param {ai_agentCreateArgs} args - Arguments to create a Ai_agent.
     * @example
     * // Create one Ai_agent
     * const Ai_agent = await prisma.ai_agent.create({
     *   data: {
     *     // ... data to create a Ai_agent
     *   }
     * })
     * 
    **/
    create<T extends ai_agentCreateArgs>(
      args: SelectSubset<T, ai_agentCreateArgs>
    ): CheckSelect<T, Prisma__ai_agentClient<ai_agent>, Prisma__ai_agentClient<ai_agentGetPayload<T>>>

    /**
     * Create many Ai_agents.
     *     @param {ai_agentCreateManyArgs} args - Arguments to create many Ai_agents.
     *     @example
     *     // Create many Ai_agents
     *     const ai_agent = await prisma.ai_agent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_agentCreateManyArgs>(
      args?: SelectSubset<T, ai_agentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_agent.
     * @param {ai_agentDeleteArgs} args - Arguments to delete one Ai_agent.
     * @example
     * // Delete one Ai_agent
     * const Ai_agent = await prisma.ai_agent.delete({
     *   where: {
     *     // ... filter to delete one Ai_agent
     *   }
     * })
     * 
    **/
    delete<T extends ai_agentDeleteArgs>(
      args: SelectSubset<T, ai_agentDeleteArgs>
    ): CheckSelect<T, Prisma__ai_agentClient<ai_agent>, Prisma__ai_agentClient<ai_agentGetPayload<T>>>

    /**
     * Update one Ai_agent.
     * @param {ai_agentUpdateArgs} args - Arguments to update one Ai_agent.
     * @example
     * // Update one Ai_agent
     * const ai_agent = await prisma.ai_agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_agentUpdateArgs>(
      args: SelectSubset<T, ai_agentUpdateArgs>
    ): CheckSelect<T, Prisma__ai_agentClient<ai_agent>, Prisma__ai_agentClient<ai_agentGetPayload<T>>>

    /**
     * Delete zero or more Ai_agents.
     * @param {ai_agentDeleteManyArgs} args - Arguments to filter Ai_agents to delete.
     * @example
     * // Delete a few Ai_agents
     * const { count } = await prisma.ai_agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_agentDeleteManyArgs>(
      args?: SelectSubset<T, ai_agentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_agents
     * const ai_agent = await prisma.ai_agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_agentUpdateManyArgs>(
      args: SelectSubset<T, ai_agentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_agent.
     * @param {ai_agentUpsertArgs} args - Arguments to update or create a Ai_agent.
     * @example
     * // Update or create a Ai_agent
     * const ai_agent = await prisma.ai_agent.upsert({
     *   create: {
     *     // ... data to create a Ai_agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_agent we want to update
     *   }
     * })
    **/
    upsert<T extends ai_agentUpsertArgs>(
      args: SelectSubset<T, ai_agentUpsertArgs>
    ): CheckSelect<T, Prisma__ai_agentClient<ai_agent>, Prisma__ai_agentClient<ai_agentGetPayload<T>>>

    /**
     * Count the number of Ai_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agentCountArgs} args - Arguments to filter Ai_agents to count.
     * @example
     * // Count the number of Ai_agents
     * const count = await prisma.ai_agent.count({
     *   where: {
     *     // ... the filter for the Ai_agents we want to count
     *   }
     * })
    **/
    count<T extends ai_agentCountArgs>(
      args?: Subset<T, ai_agentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_agentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_agentAggregateArgs>(args: Subset<T, Ai_agentAggregateArgs>): PrismaPromise<GetAi_agentAggregateType<T>>

    /**
     * Group by Ai_agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agentGroupByArgs} args - Group by arguments.
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
      T extends Ai_agentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_agentGroupByArgs['orderBy'] }
        : { orderBy?: Ai_agentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_agentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_agentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_agentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_agent findUnique
   */
  export type ai_agentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_agent
     * 
    **/
    select?: ai_agentSelect | null
    /**
     * Throw an Error if a ai_agent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent to fetch.
     * 
    **/
    where: ai_agentWhereUniqueInput
  }


  /**
   * ai_agent findFirst
   */
  export type ai_agentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_agent
     * 
    **/
    select?: ai_agentSelect | null
    /**
     * Throw an Error if a ai_agent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent to fetch.
     * 
    **/
    where?: ai_agentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agents to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_agents.
     * 
    **/
    cursor?: ai_agentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_agents.
     * 
    **/
    distinct?: Enumerable<Ai_agentScalarFieldEnum>
  }


  /**
   * ai_agent findMany
   */
  export type ai_agentFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_agent
     * 
    **/
    select?: ai_agentSelect | null
    /**
     * Filter, which ai_agents to fetch.
     * 
    **/
    where?: ai_agentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agents to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_agents.
     * 
    **/
    cursor?: ai_agentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_agentScalarFieldEnum>
  }


  /**
   * ai_agent create
   */
  export type ai_agentCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent
     * 
    **/
    select?: ai_agentSelect | null
    /**
     * The data needed to create a ai_agent.
     * 
    **/
    data: XOR<ai_agentCreateInput, ai_agentUncheckedCreateInput>
  }


  /**
   * ai_agent createMany
   */
  export type ai_agentCreateManyArgs = {
    /**
     * The data used to create many ai_agents.
     * 
    **/
    data: Enumerable<ai_agentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_agent update
   */
  export type ai_agentUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent
     * 
    **/
    select?: ai_agentSelect | null
    /**
     * The data needed to update a ai_agent.
     * 
    **/
    data: XOR<ai_agentUpdateInput, ai_agentUncheckedUpdateInput>
    /**
     * Choose, which ai_agent to update.
     * 
    **/
    where: ai_agentWhereUniqueInput
  }


  /**
   * ai_agent updateMany
   */
  export type ai_agentUpdateManyArgs = {
    /**
     * The data used to update ai_agents.
     * 
    **/
    data: XOR<ai_agentUpdateManyMutationInput, ai_agentUncheckedUpdateManyInput>
    /**
     * Filter which ai_agents to update
     * 
    **/
    where?: ai_agentWhereInput
  }


  /**
   * ai_agent upsert
   */
  export type ai_agentUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_agent
     * 
    **/
    select?: ai_agentSelect | null
    /**
     * The filter to search for the ai_agent to update in case it exists.
     * 
    **/
    where: ai_agentWhereUniqueInput
    /**
     * In case the ai_agent found by the `where` argument doesn't exist, create a new ai_agent with this data.
     * 
    **/
    create: XOR<ai_agentCreateInput, ai_agentUncheckedCreateInput>
    /**
     * In case the ai_agent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_agentUpdateInput, ai_agentUncheckedUpdateInput>
  }


  /**
   * ai_agent delete
   */
  export type ai_agentDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_agent
     * 
    **/
    select?: ai_agentSelect | null
    /**
     * Filter which ai_agent to delete.
     * 
    **/
    where: ai_agentWhereUniqueInput
  }


  /**
   * ai_agent deleteMany
   */
  export type ai_agentDeleteManyArgs = {
    /**
     * Filter which ai_agents to delete
     * 
    **/
    where?: ai_agentWhereInput
  }


  /**
   * ai_agent without action
   */
  export type ai_agentArgs = {
    /**
     * Select specific fields to fetch from the ai_agent
     * 
    **/
    select?: ai_agentSelect | null
  }



  /**
   * Model ai_agent_chat_audio
   */


  export type AggregateAi_agent_chat_audio = {
    _count: Ai_agent_chat_audioCountAggregateOutputType | null
    _min: Ai_agent_chat_audioMinAggregateOutputType | null
    _max: Ai_agent_chat_audioMaxAggregateOutputType | null
  }

  export type Ai_agent_chat_audioMinAggregateOutputType = {
    id: string | null
    audio: Buffer | null
  }

  export type Ai_agent_chat_audioMaxAggregateOutputType = {
    id: string | null
    audio: Buffer | null
  }

  export type Ai_agent_chat_audioCountAggregateOutputType = {
    id: number
    audio: number
    _all: number
  }


  export type Ai_agent_chat_audioMinAggregateInputType = {
    id?: true
    audio?: true
  }

  export type Ai_agent_chat_audioMaxAggregateInputType = {
    id?: true
    audio?: true
  }

  export type Ai_agent_chat_audioCountAggregateInputType = {
    id?: true
    audio?: true
    _all?: true
  }

  export type Ai_agent_chat_audioAggregateArgs = {
    /**
     * Filter which ai_agent_chat_audio to aggregate.
     * 
    **/
    where?: ai_agent_chat_audioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_chat_audios to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_chat_audioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_agent_chat_audioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_chat_audios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_chat_audios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_agent_chat_audios
    **/
    _count?: true | Ai_agent_chat_audioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_agent_chat_audioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_agent_chat_audioMaxAggregateInputType
  }

  export type GetAi_agent_chat_audioAggregateType<T extends Ai_agent_chat_audioAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_agent_chat_audio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_agent_chat_audio[P]>
      : GetScalarType<T[P], AggregateAi_agent_chat_audio[P]>
  }




  export type Ai_agent_chat_audioGroupByArgs = {
    where?: ai_agent_chat_audioWhereInput
    orderBy?: Enumerable<ai_agent_chat_audioOrderByWithAggregationInput>
    by: Array<Ai_agent_chat_audioScalarFieldEnum>
    having?: ai_agent_chat_audioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_agent_chat_audioCountAggregateInputType | true
    _min?: Ai_agent_chat_audioMinAggregateInputType
    _max?: Ai_agent_chat_audioMaxAggregateInputType
  }


  export type Ai_agent_chat_audioGroupByOutputType = {
    id: string
    audio: Buffer | null
    _count: Ai_agent_chat_audioCountAggregateOutputType | null
    _min: Ai_agent_chat_audioMinAggregateOutputType | null
    _max: Ai_agent_chat_audioMaxAggregateOutputType | null
  }

  type GetAi_agent_chat_audioGroupByPayload<T extends Ai_agent_chat_audioGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_agent_chat_audioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_agent_chat_audioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_agent_chat_audioGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_agent_chat_audioGroupByOutputType[P]>
        }
      >
    >


  export type ai_agent_chat_audioSelect = {
    id?: boolean
    audio?: boolean
  }

  export type ai_agent_chat_audioGetPayload<
    S extends boolean | null | undefined | ai_agent_chat_audioArgs,
    U = keyof S
      > = S extends true
        ? ai_agent_chat_audio
    : S extends undefined
    ? never
    : S extends ai_agent_chat_audioArgs | ai_agent_chat_audioFindManyArgs
    ?'include' extends U
    ? ai_agent_chat_audio 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_agent_chat_audio ? ai_agent_chat_audio[P] : never
  } 
    : ai_agent_chat_audio
  : ai_agent_chat_audio


  type ai_agent_chat_audioCountArgs = Merge<
    Omit<ai_agent_chat_audioFindManyArgs, 'select' | 'include'> & {
      select?: Ai_agent_chat_audioCountAggregateInputType | true
    }
  >

  export interface ai_agent_chat_audioDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_agent_chat_audio that matches the filter.
     * @param {ai_agent_chat_audioFindUniqueArgs} args - Arguments to find a Ai_agent_chat_audio
     * @example
     * // Get one Ai_agent_chat_audio
     * const ai_agent_chat_audio = await prisma.ai_agent_chat_audio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_agent_chat_audioFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_agent_chat_audioFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_agent_chat_audio'> extends True ? CheckSelect<T, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audio>, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audioGetPayload<T>>> : CheckSelect<T, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audio | null >, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audioGetPayload<T> | null >>

    /**
     * Find the first Ai_agent_chat_audio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_chat_audioFindFirstArgs} args - Arguments to find a Ai_agent_chat_audio
     * @example
     * // Get one Ai_agent_chat_audio
     * const ai_agent_chat_audio = await prisma.ai_agent_chat_audio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_agent_chat_audioFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_agent_chat_audioFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_agent_chat_audio'> extends True ? CheckSelect<T, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audio>, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audioGetPayload<T>>> : CheckSelect<T, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audio | null >, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audioGetPayload<T> | null >>

    /**
     * Find zero or more Ai_agent_chat_audios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_chat_audioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_agent_chat_audios
     * const ai_agent_chat_audios = await prisma.ai_agent_chat_audio.findMany()
     * 
     * // Get first 10 Ai_agent_chat_audios
     * const ai_agent_chat_audios = await prisma.ai_agent_chat_audio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_agent_chat_audioWithIdOnly = await prisma.ai_agent_chat_audio.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_agent_chat_audioFindManyArgs>(
      args?: SelectSubset<T, ai_agent_chat_audioFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_agent_chat_audio>>, PrismaPromise<Array<ai_agent_chat_audioGetPayload<T>>>>

    /**
     * Create a Ai_agent_chat_audio.
     * @param {ai_agent_chat_audioCreateArgs} args - Arguments to create a Ai_agent_chat_audio.
     * @example
     * // Create one Ai_agent_chat_audio
     * const Ai_agent_chat_audio = await prisma.ai_agent_chat_audio.create({
     *   data: {
     *     // ... data to create a Ai_agent_chat_audio
     *   }
     * })
     * 
    **/
    create<T extends ai_agent_chat_audioCreateArgs>(
      args: SelectSubset<T, ai_agent_chat_audioCreateArgs>
    ): CheckSelect<T, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audio>, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audioGetPayload<T>>>

    /**
     * Create many Ai_agent_chat_audios.
     *     @param {ai_agent_chat_audioCreateManyArgs} args - Arguments to create many Ai_agent_chat_audios.
     *     @example
     *     // Create many Ai_agent_chat_audios
     *     const ai_agent_chat_audio = await prisma.ai_agent_chat_audio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_agent_chat_audioCreateManyArgs>(
      args?: SelectSubset<T, ai_agent_chat_audioCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_agent_chat_audio.
     * @param {ai_agent_chat_audioDeleteArgs} args - Arguments to delete one Ai_agent_chat_audio.
     * @example
     * // Delete one Ai_agent_chat_audio
     * const Ai_agent_chat_audio = await prisma.ai_agent_chat_audio.delete({
     *   where: {
     *     // ... filter to delete one Ai_agent_chat_audio
     *   }
     * })
     * 
    **/
    delete<T extends ai_agent_chat_audioDeleteArgs>(
      args: SelectSubset<T, ai_agent_chat_audioDeleteArgs>
    ): CheckSelect<T, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audio>, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audioGetPayload<T>>>

    /**
     * Update one Ai_agent_chat_audio.
     * @param {ai_agent_chat_audioUpdateArgs} args - Arguments to update one Ai_agent_chat_audio.
     * @example
     * // Update one Ai_agent_chat_audio
     * const ai_agent_chat_audio = await prisma.ai_agent_chat_audio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_agent_chat_audioUpdateArgs>(
      args: SelectSubset<T, ai_agent_chat_audioUpdateArgs>
    ): CheckSelect<T, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audio>, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audioGetPayload<T>>>

    /**
     * Delete zero or more Ai_agent_chat_audios.
     * @param {ai_agent_chat_audioDeleteManyArgs} args - Arguments to filter Ai_agent_chat_audios to delete.
     * @example
     * // Delete a few Ai_agent_chat_audios
     * const { count } = await prisma.ai_agent_chat_audio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_agent_chat_audioDeleteManyArgs>(
      args?: SelectSubset<T, ai_agent_chat_audioDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_agent_chat_audios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_chat_audioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_agent_chat_audios
     * const ai_agent_chat_audio = await prisma.ai_agent_chat_audio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_agent_chat_audioUpdateManyArgs>(
      args: SelectSubset<T, ai_agent_chat_audioUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_agent_chat_audio.
     * @param {ai_agent_chat_audioUpsertArgs} args - Arguments to update or create a Ai_agent_chat_audio.
     * @example
     * // Update or create a Ai_agent_chat_audio
     * const ai_agent_chat_audio = await prisma.ai_agent_chat_audio.upsert({
     *   create: {
     *     // ... data to create a Ai_agent_chat_audio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_agent_chat_audio we want to update
     *   }
     * })
    **/
    upsert<T extends ai_agent_chat_audioUpsertArgs>(
      args: SelectSubset<T, ai_agent_chat_audioUpsertArgs>
    ): CheckSelect<T, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audio>, Prisma__ai_agent_chat_audioClient<ai_agent_chat_audioGetPayload<T>>>

    /**
     * Count the number of Ai_agent_chat_audios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_chat_audioCountArgs} args - Arguments to filter Ai_agent_chat_audios to count.
     * @example
     * // Count the number of Ai_agent_chat_audios
     * const count = await prisma.ai_agent_chat_audio.count({
     *   where: {
     *     // ... the filter for the Ai_agent_chat_audios we want to count
     *   }
     * })
    **/
    count<T extends ai_agent_chat_audioCountArgs>(
      args?: Subset<T, ai_agent_chat_audioCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_agent_chat_audioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_agent_chat_audio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agent_chat_audioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_agent_chat_audioAggregateArgs>(args: Subset<T, Ai_agent_chat_audioAggregateArgs>): PrismaPromise<GetAi_agent_chat_audioAggregateType<T>>

    /**
     * Group by Ai_agent_chat_audio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agent_chat_audioGroupByArgs} args - Group by arguments.
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
      T extends Ai_agent_chat_audioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_agent_chat_audioGroupByArgs['orderBy'] }
        : { orderBy?: Ai_agent_chat_audioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_agent_chat_audioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_agent_chat_audioGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_agent_chat_audio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_agent_chat_audioClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_agent_chat_audio findUnique
   */
  export type ai_agent_chat_audioFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_audio
     * 
    **/
    select?: ai_agent_chat_audioSelect | null
    /**
     * Throw an Error if a ai_agent_chat_audio can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent_chat_audio to fetch.
     * 
    **/
    where: ai_agent_chat_audioWhereUniqueInput
  }


  /**
   * ai_agent_chat_audio findFirst
   */
  export type ai_agent_chat_audioFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_audio
     * 
    **/
    select?: ai_agent_chat_audioSelect | null
    /**
     * Throw an Error if a ai_agent_chat_audio can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent_chat_audio to fetch.
     * 
    **/
    where?: ai_agent_chat_audioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_chat_audios to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_chat_audioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_agent_chat_audios.
     * 
    **/
    cursor?: ai_agent_chat_audioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_chat_audios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_chat_audios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_agent_chat_audios.
     * 
    **/
    distinct?: Enumerable<Ai_agent_chat_audioScalarFieldEnum>
  }


  /**
   * ai_agent_chat_audio findMany
   */
  export type ai_agent_chat_audioFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_audio
     * 
    **/
    select?: ai_agent_chat_audioSelect | null
    /**
     * Filter, which ai_agent_chat_audios to fetch.
     * 
    **/
    where?: ai_agent_chat_audioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_chat_audios to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_chat_audioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_agent_chat_audios.
     * 
    **/
    cursor?: ai_agent_chat_audioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_chat_audios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_chat_audios.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_agent_chat_audioScalarFieldEnum>
  }


  /**
   * ai_agent_chat_audio create
   */
  export type ai_agent_chat_audioCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_audio
     * 
    **/
    select?: ai_agent_chat_audioSelect | null
    /**
     * The data needed to create a ai_agent_chat_audio.
     * 
    **/
    data: XOR<ai_agent_chat_audioCreateInput, ai_agent_chat_audioUncheckedCreateInput>
  }


  /**
   * ai_agent_chat_audio createMany
   */
  export type ai_agent_chat_audioCreateManyArgs = {
    /**
     * The data used to create many ai_agent_chat_audios.
     * 
    **/
    data: Enumerable<ai_agent_chat_audioCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_agent_chat_audio update
   */
  export type ai_agent_chat_audioUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_audio
     * 
    **/
    select?: ai_agent_chat_audioSelect | null
    /**
     * The data needed to update a ai_agent_chat_audio.
     * 
    **/
    data: XOR<ai_agent_chat_audioUpdateInput, ai_agent_chat_audioUncheckedUpdateInput>
    /**
     * Choose, which ai_agent_chat_audio to update.
     * 
    **/
    where: ai_agent_chat_audioWhereUniqueInput
  }


  /**
   * ai_agent_chat_audio updateMany
   */
  export type ai_agent_chat_audioUpdateManyArgs = {
    /**
     * The data used to update ai_agent_chat_audios.
     * 
    **/
    data: XOR<ai_agent_chat_audioUpdateManyMutationInput, ai_agent_chat_audioUncheckedUpdateManyInput>
    /**
     * Filter which ai_agent_chat_audios to update
     * 
    **/
    where?: ai_agent_chat_audioWhereInput
  }


  /**
   * ai_agent_chat_audio upsert
   */
  export type ai_agent_chat_audioUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_audio
     * 
    **/
    select?: ai_agent_chat_audioSelect | null
    /**
     * The filter to search for the ai_agent_chat_audio to update in case it exists.
     * 
    **/
    where: ai_agent_chat_audioWhereUniqueInput
    /**
     * In case the ai_agent_chat_audio found by the `where` argument doesn't exist, create a new ai_agent_chat_audio with this data.
     * 
    **/
    create: XOR<ai_agent_chat_audioCreateInput, ai_agent_chat_audioUncheckedCreateInput>
    /**
     * In case the ai_agent_chat_audio was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_agent_chat_audioUpdateInput, ai_agent_chat_audioUncheckedUpdateInput>
  }


  /**
   * ai_agent_chat_audio delete
   */
  export type ai_agent_chat_audioDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_audio
     * 
    **/
    select?: ai_agent_chat_audioSelect | null
    /**
     * Filter which ai_agent_chat_audio to delete.
     * 
    **/
    where: ai_agent_chat_audioWhereUniqueInput
  }


  /**
   * ai_agent_chat_audio deleteMany
   */
  export type ai_agent_chat_audioDeleteManyArgs = {
    /**
     * Filter which ai_agent_chat_audios to delete
     * 
    **/
    where?: ai_agent_chat_audioWhereInput
  }


  /**
   * ai_agent_chat_audio without action
   */
  export type ai_agent_chat_audioArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_audio
     * 
    **/
    select?: ai_agent_chat_audioSelect | null
  }



  /**
   * Model ai_agent_chat_history
   */


  export type AggregateAi_agent_chat_history = {
    _count: Ai_agent_chat_historyCountAggregateOutputType | null
    _avg: Ai_agent_chat_historyAvgAggregateOutputType | null
    _sum: Ai_agent_chat_historySumAggregateOutputType | null
    _min: Ai_agent_chat_historyMinAggregateOutputType | null
    _max: Ai_agent_chat_historyMaxAggregateOutputType | null
  }

  export type Ai_agent_chat_historyAvgAggregateOutputType = {
    id: number | null
    chat_type: number | null
  }

  export type Ai_agent_chat_historySumAggregateOutputType = {
    id: bigint | null
    chat_type: number | null
  }

  export type Ai_agent_chat_historyMinAggregateOutputType = {
    id: bigint | null
    mac_address: string | null
    agent_id: string | null
    session_id: string | null
    chat_type: number | null
    content: string | null
    audio_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ai_agent_chat_historyMaxAggregateOutputType = {
    id: bigint | null
    mac_address: string | null
    agent_id: string | null
    session_id: string | null
    chat_type: number | null
    content: string | null
    audio_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ai_agent_chat_historyCountAggregateOutputType = {
    id: number
    mac_address: number
    agent_id: number
    session_id: number
    chat_type: number
    content: number
    audio_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Ai_agent_chat_historyAvgAggregateInputType = {
    id?: true
    chat_type?: true
  }

  export type Ai_agent_chat_historySumAggregateInputType = {
    id?: true
    chat_type?: true
  }

  export type Ai_agent_chat_historyMinAggregateInputType = {
    id?: true
    mac_address?: true
    agent_id?: true
    session_id?: true
    chat_type?: true
    content?: true
    audio_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Ai_agent_chat_historyMaxAggregateInputType = {
    id?: true
    mac_address?: true
    agent_id?: true
    session_id?: true
    chat_type?: true
    content?: true
    audio_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Ai_agent_chat_historyCountAggregateInputType = {
    id?: true
    mac_address?: true
    agent_id?: true
    session_id?: true
    chat_type?: true
    content?: true
    audio_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Ai_agent_chat_historyAggregateArgs = {
    /**
     * Filter which ai_agent_chat_history to aggregate.
     * 
    **/
    where?: ai_agent_chat_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_chat_histories to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_chat_historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_agent_chat_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_chat_histories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_chat_histories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_agent_chat_histories
    **/
    _count?: true | Ai_agent_chat_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_agent_chat_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_agent_chat_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_agent_chat_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_agent_chat_historyMaxAggregateInputType
  }

  export type GetAi_agent_chat_historyAggregateType<T extends Ai_agent_chat_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_agent_chat_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_agent_chat_history[P]>
      : GetScalarType<T[P], AggregateAi_agent_chat_history[P]>
  }




  export type Ai_agent_chat_historyGroupByArgs = {
    where?: ai_agent_chat_historyWhereInput
    orderBy?: Enumerable<ai_agent_chat_historyOrderByWithAggregationInput>
    by: Array<Ai_agent_chat_historyScalarFieldEnum>
    having?: ai_agent_chat_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_agent_chat_historyCountAggregateInputType | true
    _avg?: Ai_agent_chat_historyAvgAggregateInputType
    _sum?: Ai_agent_chat_historySumAggregateInputType
    _min?: Ai_agent_chat_historyMinAggregateInputType
    _max?: Ai_agent_chat_historyMaxAggregateInputType
  }


  export type Ai_agent_chat_historyGroupByOutputType = {
    id: bigint
    mac_address: string | null
    agent_id: string | null
    session_id: string | null
    chat_type: number | null
    content: string | null
    audio_id: string | null
    created_at: Date
    updated_at: Date
    _count: Ai_agent_chat_historyCountAggregateOutputType | null
    _avg: Ai_agent_chat_historyAvgAggregateOutputType | null
    _sum: Ai_agent_chat_historySumAggregateOutputType | null
    _min: Ai_agent_chat_historyMinAggregateOutputType | null
    _max: Ai_agent_chat_historyMaxAggregateOutputType | null
  }

  type GetAi_agent_chat_historyGroupByPayload<T extends Ai_agent_chat_historyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_agent_chat_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_agent_chat_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_agent_chat_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_agent_chat_historyGroupByOutputType[P]>
        }
      >
    >


  export type ai_agent_chat_historySelect = {
    id?: boolean
    mac_address?: boolean
    agent_id?: boolean
    session_id?: boolean
    chat_type?: boolean
    content?: boolean
    audio_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ai_agent_chat_historyGetPayload<
    S extends boolean | null | undefined | ai_agent_chat_historyArgs,
    U = keyof S
      > = S extends true
        ? ai_agent_chat_history
    : S extends undefined
    ? never
    : S extends ai_agent_chat_historyArgs | ai_agent_chat_historyFindManyArgs
    ?'include' extends U
    ? ai_agent_chat_history 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_agent_chat_history ? ai_agent_chat_history[P] : never
  } 
    : ai_agent_chat_history
  : ai_agent_chat_history


  type ai_agent_chat_historyCountArgs = Merge<
    Omit<ai_agent_chat_historyFindManyArgs, 'select' | 'include'> & {
      select?: Ai_agent_chat_historyCountAggregateInputType | true
    }
  >

  export interface ai_agent_chat_historyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_agent_chat_history that matches the filter.
     * @param {ai_agent_chat_historyFindUniqueArgs} args - Arguments to find a Ai_agent_chat_history
     * @example
     * // Get one Ai_agent_chat_history
     * const ai_agent_chat_history = await prisma.ai_agent_chat_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_agent_chat_historyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_agent_chat_historyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_agent_chat_history'> extends True ? CheckSelect<T, Prisma__ai_agent_chat_historyClient<ai_agent_chat_history>, Prisma__ai_agent_chat_historyClient<ai_agent_chat_historyGetPayload<T>>> : CheckSelect<T, Prisma__ai_agent_chat_historyClient<ai_agent_chat_history | null >, Prisma__ai_agent_chat_historyClient<ai_agent_chat_historyGetPayload<T> | null >>

    /**
     * Find the first Ai_agent_chat_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_chat_historyFindFirstArgs} args - Arguments to find a Ai_agent_chat_history
     * @example
     * // Get one Ai_agent_chat_history
     * const ai_agent_chat_history = await prisma.ai_agent_chat_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_agent_chat_historyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_agent_chat_historyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_agent_chat_history'> extends True ? CheckSelect<T, Prisma__ai_agent_chat_historyClient<ai_agent_chat_history>, Prisma__ai_agent_chat_historyClient<ai_agent_chat_historyGetPayload<T>>> : CheckSelect<T, Prisma__ai_agent_chat_historyClient<ai_agent_chat_history | null >, Prisma__ai_agent_chat_historyClient<ai_agent_chat_historyGetPayload<T> | null >>

    /**
     * Find zero or more Ai_agent_chat_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_chat_historyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_agent_chat_histories
     * const ai_agent_chat_histories = await prisma.ai_agent_chat_history.findMany()
     * 
     * // Get first 10 Ai_agent_chat_histories
     * const ai_agent_chat_histories = await prisma.ai_agent_chat_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_agent_chat_historyWithIdOnly = await prisma.ai_agent_chat_history.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_agent_chat_historyFindManyArgs>(
      args?: SelectSubset<T, ai_agent_chat_historyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_agent_chat_history>>, PrismaPromise<Array<ai_agent_chat_historyGetPayload<T>>>>

    /**
     * Create a Ai_agent_chat_history.
     * @param {ai_agent_chat_historyCreateArgs} args - Arguments to create a Ai_agent_chat_history.
     * @example
     * // Create one Ai_agent_chat_history
     * const Ai_agent_chat_history = await prisma.ai_agent_chat_history.create({
     *   data: {
     *     // ... data to create a Ai_agent_chat_history
     *   }
     * })
     * 
    **/
    create<T extends ai_agent_chat_historyCreateArgs>(
      args: SelectSubset<T, ai_agent_chat_historyCreateArgs>
    ): CheckSelect<T, Prisma__ai_agent_chat_historyClient<ai_agent_chat_history>, Prisma__ai_agent_chat_historyClient<ai_agent_chat_historyGetPayload<T>>>

    /**
     * Create many Ai_agent_chat_histories.
     *     @param {ai_agent_chat_historyCreateManyArgs} args - Arguments to create many Ai_agent_chat_histories.
     *     @example
     *     // Create many Ai_agent_chat_histories
     *     const ai_agent_chat_history = await prisma.ai_agent_chat_history.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_agent_chat_historyCreateManyArgs>(
      args?: SelectSubset<T, ai_agent_chat_historyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_agent_chat_history.
     * @param {ai_agent_chat_historyDeleteArgs} args - Arguments to delete one Ai_agent_chat_history.
     * @example
     * // Delete one Ai_agent_chat_history
     * const Ai_agent_chat_history = await prisma.ai_agent_chat_history.delete({
     *   where: {
     *     // ... filter to delete one Ai_agent_chat_history
     *   }
     * })
     * 
    **/
    delete<T extends ai_agent_chat_historyDeleteArgs>(
      args: SelectSubset<T, ai_agent_chat_historyDeleteArgs>
    ): CheckSelect<T, Prisma__ai_agent_chat_historyClient<ai_agent_chat_history>, Prisma__ai_agent_chat_historyClient<ai_agent_chat_historyGetPayload<T>>>

    /**
     * Update one Ai_agent_chat_history.
     * @param {ai_agent_chat_historyUpdateArgs} args - Arguments to update one Ai_agent_chat_history.
     * @example
     * // Update one Ai_agent_chat_history
     * const ai_agent_chat_history = await prisma.ai_agent_chat_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_agent_chat_historyUpdateArgs>(
      args: SelectSubset<T, ai_agent_chat_historyUpdateArgs>
    ): CheckSelect<T, Prisma__ai_agent_chat_historyClient<ai_agent_chat_history>, Prisma__ai_agent_chat_historyClient<ai_agent_chat_historyGetPayload<T>>>

    /**
     * Delete zero or more Ai_agent_chat_histories.
     * @param {ai_agent_chat_historyDeleteManyArgs} args - Arguments to filter Ai_agent_chat_histories to delete.
     * @example
     * // Delete a few Ai_agent_chat_histories
     * const { count } = await prisma.ai_agent_chat_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_agent_chat_historyDeleteManyArgs>(
      args?: SelectSubset<T, ai_agent_chat_historyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_agent_chat_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_chat_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_agent_chat_histories
     * const ai_agent_chat_history = await prisma.ai_agent_chat_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_agent_chat_historyUpdateManyArgs>(
      args: SelectSubset<T, ai_agent_chat_historyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_agent_chat_history.
     * @param {ai_agent_chat_historyUpsertArgs} args - Arguments to update or create a Ai_agent_chat_history.
     * @example
     * // Update or create a Ai_agent_chat_history
     * const ai_agent_chat_history = await prisma.ai_agent_chat_history.upsert({
     *   create: {
     *     // ... data to create a Ai_agent_chat_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_agent_chat_history we want to update
     *   }
     * })
    **/
    upsert<T extends ai_agent_chat_historyUpsertArgs>(
      args: SelectSubset<T, ai_agent_chat_historyUpsertArgs>
    ): CheckSelect<T, Prisma__ai_agent_chat_historyClient<ai_agent_chat_history>, Prisma__ai_agent_chat_historyClient<ai_agent_chat_historyGetPayload<T>>>

    /**
     * Count the number of Ai_agent_chat_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_chat_historyCountArgs} args - Arguments to filter Ai_agent_chat_histories to count.
     * @example
     * // Count the number of Ai_agent_chat_histories
     * const count = await prisma.ai_agent_chat_history.count({
     *   where: {
     *     // ... the filter for the Ai_agent_chat_histories we want to count
     *   }
     * })
    **/
    count<T extends ai_agent_chat_historyCountArgs>(
      args?: Subset<T, ai_agent_chat_historyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_agent_chat_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_agent_chat_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agent_chat_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_agent_chat_historyAggregateArgs>(args: Subset<T, Ai_agent_chat_historyAggregateArgs>): PrismaPromise<GetAi_agent_chat_historyAggregateType<T>>

    /**
     * Group by Ai_agent_chat_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agent_chat_historyGroupByArgs} args - Group by arguments.
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
      T extends Ai_agent_chat_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_agent_chat_historyGroupByArgs['orderBy'] }
        : { orderBy?: Ai_agent_chat_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_agent_chat_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_agent_chat_historyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_agent_chat_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_agent_chat_historyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_agent_chat_history findUnique
   */
  export type ai_agent_chat_historyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_history
     * 
    **/
    select?: ai_agent_chat_historySelect | null
    /**
     * Throw an Error if a ai_agent_chat_history can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent_chat_history to fetch.
     * 
    **/
    where: ai_agent_chat_historyWhereUniqueInput
  }


  /**
   * ai_agent_chat_history findFirst
   */
  export type ai_agent_chat_historyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_history
     * 
    **/
    select?: ai_agent_chat_historySelect | null
    /**
     * Throw an Error if a ai_agent_chat_history can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent_chat_history to fetch.
     * 
    **/
    where?: ai_agent_chat_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_chat_histories to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_chat_historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_agent_chat_histories.
     * 
    **/
    cursor?: ai_agent_chat_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_chat_histories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_chat_histories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_agent_chat_histories.
     * 
    **/
    distinct?: Enumerable<Ai_agent_chat_historyScalarFieldEnum>
  }


  /**
   * ai_agent_chat_history findMany
   */
  export type ai_agent_chat_historyFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_history
     * 
    **/
    select?: ai_agent_chat_historySelect | null
    /**
     * Filter, which ai_agent_chat_histories to fetch.
     * 
    **/
    where?: ai_agent_chat_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_chat_histories to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_chat_historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_agent_chat_histories.
     * 
    **/
    cursor?: ai_agent_chat_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_chat_histories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_chat_histories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_agent_chat_historyScalarFieldEnum>
  }


  /**
   * ai_agent_chat_history create
   */
  export type ai_agent_chat_historyCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_history
     * 
    **/
    select?: ai_agent_chat_historySelect | null
    /**
     * The data needed to create a ai_agent_chat_history.
     * 
    **/
    data: XOR<ai_agent_chat_historyCreateInput, ai_agent_chat_historyUncheckedCreateInput>
  }


  /**
   * ai_agent_chat_history createMany
   */
  export type ai_agent_chat_historyCreateManyArgs = {
    /**
     * The data used to create many ai_agent_chat_histories.
     * 
    **/
    data: Enumerable<ai_agent_chat_historyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_agent_chat_history update
   */
  export type ai_agent_chat_historyUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_history
     * 
    **/
    select?: ai_agent_chat_historySelect | null
    /**
     * The data needed to update a ai_agent_chat_history.
     * 
    **/
    data: XOR<ai_agent_chat_historyUpdateInput, ai_agent_chat_historyUncheckedUpdateInput>
    /**
     * Choose, which ai_agent_chat_history to update.
     * 
    **/
    where: ai_agent_chat_historyWhereUniqueInput
  }


  /**
   * ai_agent_chat_history updateMany
   */
  export type ai_agent_chat_historyUpdateManyArgs = {
    /**
     * The data used to update ai_agent_chat_histories.
     * 
    **/
    data: XOR<ai_agent_chat_historyUpdateManyMutationInput, ai_agent_chat_historyUncheckedUpdateManyInput>
    /**
     * Filter which ai_agent_chat_histories to update
     * 
    **/
    where?: ai_agent_chat_historyWhereInput
  }


  /**
   * ai_agent_chat_history upsert
   */
  export type ai_agent_chat_historyUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_history
     * 
    **/
    select?: ai_agent_chat_historySelect | null
    /**
     * The filter to search for the ai_agent_chat_history to update in case it exists.
     * 
    **/
    where: ai_agent_chat_historyWhereUniqueInput
    /**
     * In case the ai_agent_chat_history found by the `where` argument doesn't exist, create a new ai_agent_chat_history with this data.
     * 
    **/
    create: XOR<ai_agent_chat_historyCreateInput, ai_agent_chat_historyUncheckedCreateInput>
    /**
     * In case the ai_agent_chat_history was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_agent_chat_historyUpdateInput, ai_agent_chat_historyUncheckedUpdateInput>
  }


  /**
   * ai_agent_chat_history delete
   */
  export type ai_agent_chat_historyDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_history
     * 
    **/
    select?: ai_agent_chat_historySelect | null
    /**
     * Filter which ai_agent_chat_history to delete.
     * 
    **/
    where: ai_agent_chat_historyWhereUniqueInput
  }


  /**
   * ai_agent_chat_history deleteMany
   */
  export type ai_agent_chat_historyDeleteManyArgs = {
    /**
     * Filter which ai_agent_chat_histories to delete
     * 
    **/
    where?: ai_agent_chat_historyWhereInput
  }


  /**
   * ai_agent_chat_history without action
   */
  export type ai_agent_chat_historyArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_chat_history
     * 
    **/
    select?: ai_agent_chat_historySelect | null
  }



  /**
   * Model ai_agent_plugin_mapping
   */


  export type AggregateAi_agent_plugin_mapping = {
    _count: Ai_agent_plugin_mappingCountAggregateOutputType | null
    _avg: Ai_agent_plugin_mappingAvgAggregateOutputType | null
    _sum: Ai_agent_plugin_mappingSumAggregateOutputType | null
    _min: Ai_agent_plugin_mappingMinAggregateOutputType | null
    _max: Ai_agent_plugin_mappingMaxAggregateOutputType | null
  }

  export type Ai_agent_plugin_mappingAvgAggregateOutputType = {
    id: number | null
  }

  export type Ai_agent_plugin_mappingSumAggregateOutputType = {
    id: bigint | null
  }

  export type Ai_agent_plugin_mappingMinAggregateOutputType = {
    id: bigint | null
    agent_id: string | null
    plugin_id: string | null
  }

  export type Ai_agent_plugin_mappingMaxAggregateOutputType = {
    id: bigint | null
    agent_id: string | null
    plugin_id: string | null
  }

  export type Ai_agent_plugin_mappingCountAggregateOutputType = {
    id: number
    agent_id: number
    plugin_id: number
    param_info: number
    _all: number
  }


  export type Ai_agent_plugin_mappingAvgAggregateInputType = {
    id?: true
  }

  export type Ai_agent_plugin_mappingSumAggregateInputType = {
    id?: true
  }

  export type Ai_agent_plugin_mappingMinAggregateInputType = {
    id?: true
    agent_id?: true
    plugin_id?: true
  }

  export type Ai_agent_plugin_mappingMaxAggregateInputType = {
    id?: true
    agent_id?: true
    plugin_id?: true
  }

  export type Ai_agent_plugin_mappingCountAggregateInputType = {
    id?: true
    agent_id?: true
    plugin_id?: true
    param_info?: true
    _all?: true
  }

  export type Ai_agent_plugin_mappingAggregateArgs = {
    /**
     * Filter which ai_agent_plugin_mapping to aggregate.
     * 
    **/
    where?: ai_agent_plugin_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_plugin_mappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_plugin_mappingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_agent_plugin_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_plugin_mappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_plugin_mappings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_agent_plugin_mappings
    **/
    _count?: true | Ai_agent_plugin_mappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_agent_plugin_mappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_agent_plugin_mappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_agent_plugin_mappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_agent_plugin_mappingMaxAggregateInputType
  }

  export type GetAi_agent_plugin_mappingAggregateType<T extends Ai_agent_plugin_mappingAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_agent_plugin_mapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_agent_plugin_mapping[P]>
      : GetScalarType<T[P], AggregateAi_agent_plugin_mapping[P]>
  }




  export type Ai_agent_plugin_mappingGroupByArgs = {
    where?: ai_agent_plugin_mappingWhereInput
    orderBy?: Enumerable<ai_agent_plugin_mappingOrderByWithAggregationInput>
    by: Array<Ai_agent_plugin_mappingScalarFieldEnum>
    having?: ai_agent_plugin_mappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_agent_plugin_mappingCountAggregateInputType | true
    _avg?: Ai_agent_plugin_mappingAvgAggregateInputType
    _sum?: Ai_agent_plugin_mappingSumAggregateInputType
    _min?: Ai_agent_plugin_mappingMinAggregateInputType
    _max?: Ai_agent_plugin_mappingMaxAggregateInputType
  }


  export type Ai_agent_plugin_mappingGroupByOutputType = {
    id: bigint
    agent_id: string
    plugin_id: string
    param_info: JsonValue
    _count: Ai_agent_plugin_mappingCountAggregateOutputType | null
    _avg: Ai_agent_plugin_mappingAvgAggregateOutputType | null
    _sum: Ai_agent_plugin_mappingSumAggregateOutputType | null
    _min: Ai_agent_plugin_mappingMinAggregateOutputType | null
    _max: Ai_agent_plugin_mappingMaxAggregateOutputType | null
  }

  type GetAi_agent_plugin_mappingGroupByPayload<T extends Ai_agent_plugin_mappingGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_agent_plugin_mappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_agent_plugin_mappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_agent_plugin_mappingGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_agent_plugin_mappingGroupByOutputType[P]>
        }
      >
    >


  export type ai_agent_plugin_mappingSelect = {
    id?: boolean
    agent_id?: boolean
    plugin_id?: boolean
    param_info?: boolean
  }

  export type ai_agent_plugin_mappingGetPayload<
    S extends boolean | null | undefined | ai_agent_plugin_mappingArgs,
    U = keyof S
      > = S extends true
        ? ai_agent_plugin_mapping
    : S extends undefined
    ? never
    : S extends ai_agent_plugin_mappingArgs | ai_agent_plugin_mappingFindManyArgs
    ?'include' extends U
    ? ai_agent_plugin_mapping 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_agent_plugin_mapping ? ai_agent_plugin_mapping[P] : never
  } 
    : ai_agent_plugin_mapping
  : ai_agent_plugin_mapping


  type ai_agent_plugin_mappingCountArgs = Merge<
    Omit<ai_agent_plugin_mappingFindManyArgs, 'select' | 'include'> & {
      select?: Ai_agent_plugin_mappingCountAggregateInputType | true
    }
  >

  export interface ai_agent_plugin_mappingDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_agent_plugin_mapping that matches the filter.
     * @param {ai_agent_plugin_mappingFindUniqueArgs} args - Arguments to find a Ai_agent_plugin_mapping
     * @example
     * // Get one Ai_agent_plugin_mapping
     * const ai_agent_plugin_mapping = await prisma.ai_agent_plugin_mapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_agent_plugin_mappingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_agent_plugin_mappingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_agent_plugin_mapping'> extends True ? CheckSelect<T, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mapping>, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mappingGetPayload<T>>> : CheckSelect<T, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mapping | null >, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mappingGetPayload<T> | null >>

    /**
     * Find the first Ai_agent_plugin_mapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_plugin_mappingFindFirstArgs} args - Arguments to find a Ai_agent_plugin_mapping
     * @example
     * // Get one Ai_agent_plugin_mapping
     * const ai_agent_plugin_mapping = await prisma.ai_agent_plugin_mapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_agent_plugin_mappingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_agent_plugin_mappingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_agent_plugin_mapping'> extends True ? CheckSelect<T, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mapping>, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mappingGetPayload<T>>> : CheckSelect<T, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mapping | null >, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mappingGetPayload<T> | null >>

    /**
     * Find zero or more Ai_agent_plugin_mappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_plugin_mappingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_agent_plugin_mappings
     * const ai_agent_plugin_mappings = await prisma.ai_agent_plugin_mapping.findMany()
     * 
     * // Get first 10 Ai_agent_plugin_mappings
     * const ai_agent_plugin_mappings = await prisma.ai_agent_plugin_mapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_agent_plugin_mappingWithIdOnly = await prisma.ai_agent_plugin_mapping.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_agent_plugin_mappingFindManyArgs>(
      args?: SelectSubset<T, ai_agent_plugin_mappingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_agent_plugin_mapping>>, PrismaPromise<Array<ai_agent_plugin_mappingGetPayload<T>>>>

    /**
     * Create a Ai_agent_plugin_mapping.
     * @param {ai_agent_plugin_mappingCreateArgs} args - Arguments to create a Ai_agent_plugin_mapping.
     * @example
     * // Create one Ai_agent_plugin_mapping
     * const Ai_agent_plugin_mapping = await prisma.ai_agent_plugin_mapping.create({
     *   data: {
     *     // ... data to create a Ai_agent_plugin_mapping
     *   }
     * })
     * 
    **/
    create<T extends ai_agent_plugin_mappingCreateArgs>(
      args: SelectSubset<T, ai_agent_plugin_mappingCreateArgs>
    ): CheckSelect<T, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mapping>, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mappingGetPayload<T>>>

    /**
     * Create many Ai_agent_plugin_mappings.
     *     @param {ai_agent_plugin_mappingCreateManyArgs} args - Arguments to create many Ai_agent_plugin_mappings.
     *     @example
     *     // Create many Ai_agent_plugin_mappings
     *     const ai_agent_plugin_mapping = await prisma.ai_agent_plugin_mapping.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_agent_plugin_mappingCreateManyArgs>(
      args?: SelectSubset<T, ai_agent_plugin_mappingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_agent_plugin_mapping.
     * @param {ai_agent_plugin_mappingDeleteArgs} args - Arguments to delete one Ai_agent_plugin_mapping.
     * @example
     * // Delete one Ai_agent_plugin_mapping
     * const Ai_agent_plugin_mapping = await prisma.ai_agent_plugin_mapping.delete({
     *   where: {
     *     // ... filter to delete one Ai_agent_plugin_mapping
     *   }
     * })
     * 
    **/
    delete<T extends ai_agent_plugin_mappingDeleteArgs>(
      args: SelectSubset<T, ai_agent_plugin_mappingDeleteArgs>
    ): CheckSelect<T, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mapping>, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mappingGetPayload<T>>>

    /**
     * Update one Ai_agent_plugin_mapping.
     * @param {ai_agent_plugin_mappingUpdateArgs} args - Arguments to update one Ai_agent_plugin_mapping.
     * @example
     * // Update one Ai_agent_plugin_mapping
     * const ai_agent_plugin_mapping = await prisma.ai_agent_plugin_mapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_agent_plugin_mappingUpdateArgs>(
      args: SelectSubset<T, ai_agent_plugin_mappingUpdateArgs>
    ): CheckSelect<T, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mapping>, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mappingGetPayload<T>>>

    /**
     * Delete zero or more Ai_agent_plugin_mappings.
     * @param {ai_agent_plugin_mappingDeleteManyArgs} args - Arguments to filter Ai_agent_plugin_mappings to delete.
     * @example
     * // Delete a few Ai_agent_plugin_mappings
     * const { count } = await prisma.ai_agent_plugin_mapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_agent_plugin_mappingDeleteManyArgs>(
      args?: SelectSubset<T, ai_agent_plugin_mappingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_agent_plugin_mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_plugin_mappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_agent_plugin_mappings
     * const ai_agent_plugin_mapping = await prisma.ai_agent_plugin_mapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_agent_plugin_mappingUpdateManyArgs>(
      args: SelectSubset<T, ai_agent_plugin_mappingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_agent_plugin_mapping.
     * @param {ai_agent_plugin_mappingUpsertArgs} args - Arguments to update or create a Ai_agent_plugin_mapping.
     * @example
     * // Update or create a Ai_agent_plugin_mapping
     * const ai_agent_plugin_mapping = await prisma.ai_agent_plugin_mapping.upsert({
     *   create: {
     *     // ... data to create a Ai_agent_plugin_mapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_agent_plugin_mapping we want to update
     *   }
     * })
    **/
    upsert<T extends ai_agent_plugin_mappingUpsertArgs>(
      args: SelectSubset<T, ai_agent_plugin_mappingUpsertArgs>
    ): CheckSelect<T, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mapping>, Prisma__ai_agent_plugin_mappingClient<ai_agent_plugin_mappingGetPayload<T>>>

    /**
     * Count the number of Ai_agent_plugin_mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_plugin_mappingCountArgs} args - Arguments to filter Ai_agent_plugin_mappings to count.
     * @example
     * // Count the number of Ai_agent_plugin_mappings
     * const count = await prisma.ai_agent_plugin_mapping.count({
     *   where: {
     *     // ... the filter for the Ai_agent_plugin_mappings we want to count
     *   }
     * })
    **/
    count<T extends ai_agent_plugin_mappingCountArgs>(
      args?: Subset<T, ai_agent_plugin_mappingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_agent_plugin_mappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_agent_plugin_mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agent_plugin_mappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_agent_plugin_mappingAggregateArgs>(args: Subset<T, Ai_agent_plugin_mappingAggregateArgs>): PrismaPromise<GetAi_agent_plugin_mappingAggregateType<T>>

    /**
     * Group by Ai_agent_plugin_mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agent_plugin_mappingGroupByArgs} args - Group by arguments.
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
      T extends Ai_agent_plugin_mappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_agent_plugin_mappingGroupByArgs['orderBy'] }
        : { orderBy?: Ai_agent_plugin_mappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_agent_plugin_mappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_agent_plugin_mappingGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_agent_plugin_mapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_agent_plugin_mappingClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_agent_plugin_mapping findUnique
   */
  export type ai_agent_plugin_mappingFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_plugin_mapping
     * 
    **/
    select?: ai_agent_plugin_mappingSelect | null
    /**
     * Throw an Error if a ai_agent_plugin_mapping can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent_plugin_mapping to fetch.
     * 
    **/
    where: ai_agent_plugin_mappingWhereUniqueInput
  }


  /**
   * ai_agent_plugin_mapping findFirst
   */
  export type ai_agent_plugin_mappingFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_plugin_mapping
     * 
    **/
    select?: ai_agent_plugin_mappingSelect | null
    /**
     * Throw an Error if a ai_agent_plugin_mapping can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent_plugin_mapping to fetch.
     * 
    **/
    where?: ai_agent_plugin_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_plugin_mappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_plugin_mappingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_agent_plugin_mappings.
     * 
    **/
    cursor?: ai_agent_plugin_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_plugin_mappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_plugin_mappings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_agent_plugin_mappings.
     * 
    **/
    distinct?: Enumerable<Ai_agent_plugin_mappingScalarFieldEnum>
  }


  /**
   * ai_agent_plugin_mapping findMany
   */
  export type ai_agent_plugin_mappingFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_plugin_mapping
     * 
    **/
    select?: ai_agent_plugin_mappingSelect | null
    /**
     * Filter, which ai_agent_plugin_mappings to fetch.
     * 
    **/
    where?: ai_agent_plugin_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_plugin_mappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_plugin_mappingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_agent_plugin_mappings.
     * 
    **/
    cursor?: ai_agent_plugin_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_plugin_mappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_plugin_mappings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_agent_plugin_mappingScalarFieldEnum>
  }


  /**
   * ai_agent_plugin_mapping create
   */
  export type ai_agent_plugin_mappingCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_plugin_mapping
     * 
    **/
    select?: ai_agent_plugin_mappingSelect | null
    /**
     * The data needed to create a ai_agent_plugin_mapping.
     * 
    **/
    data: XOR<ai_agent_plugin_mappingCreateInput, ai_agent_plugin_mappingUncheckedCreateInput>
  }


  /**
   * ai_agent_plugin_mapping createMany
   */
  export type ai_agent_plugin_mappingCreateManyArgs = {
    /**
     * The data used to create many ai_agent_plugin_mappings.
     * 
    **/
    data: Enumerable<ai_agent_plugin_mappingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_agent_plugin_mapping update
   */
  export type ai_agent_plugin_mappingUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_plugin_mapping
     * 
    **/
    select?: ai_agent_plugin_mappingSelect | null
    /**
     * The data needed to update a ai_agent_plugin_mapping.
     * 
    **/
    data: XOR<ai_agent_plugin_mappingUpdateInput, ai_agent_plugin_mappingUncheckedUpdateInput>
    /**
     * Choose, which ai_agent_plugin_mapping to update.
     * 
    **/
    where: ai_agent_plugin_mappingWhereUniqueInput
  }


  /**
   * ai_agent_plugin_mapping updateMany
   */
  export type ai_agent_plugin_mappingUpdateManyArgs = {
    /**
     * The data used to update ai_agent_plugin_mappings.
     * 
    **/
    data: XOR<ai_agent_plugin_mappingUpdateManyMutationInput, ai_agent_plugin_mappingUncheckedUpdateManyInput>
    /**
     * Filter which ai_agent_plugin_mappings to update
     * 
    **/
    where?: ai_agent_plugin_mappingWhereInput
  }


  /**
   * ai_agent_plugin_mapping upsert
   */
  export type ai_agent_plugin_mappingUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_plugin_mapping
     * 
    **/
    select?: ai_agent_plugin_mappingSelect | null
    /**
     * The filter to search for the ai_agent_plugin_mapping to update in case it exists.
     * 
    **/
    where: ai_agent_plugin_mappingWhereUniqueInput
    /**
     * In case the ai_agent_plugin_mapping found by the `where` argument doesn't exist, create a new ai_agent_plugin_mapping with this data.
     * 
    **/
    create: XOR<ai_agent_plugin_mappingCreateInput, ai_agent_plugin_mappingUncheckedCreateInput>
    /**
     * In case the ai_agent_plugin_mapping was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_agent_plugin_mappingUpdateInput, ai_agent_plugin_mappingUncheckedUpdateInput>
  }


  /**
   * ai_agent_plugin_mapping delete
   */
  export type ai_agent_plugin_mappingDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_plugin_mapping
     * 
    **/
    select?: ai_agent_plugin_mappingSelect | null
    /**
     * Filter which ai_agent_plugin_mapping to delete.
     * 
    **/
    where: ai_agent_plugin_mappingWhereUniqueInput
  }


  /**
   * ai_agent_plugin_mapping deleteMany
   */
  export type ai_agent_plugin_mappingDeleteManyArgs = {
    /**
     * Filter which ai_agent_plugin_mappings to delete
     * 
    **/
    where?: ai_agent_plugin_mappingWhereInput
  }


  /**
   * ai_agent_plugin_mapping without action
   */
  export type ai_agent_plugin_mappingArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_plugin_mapping
     * 
    **/
    select?: ai_agent_plugin_mappingSelect | null
  }



  /**
   * Model ai_agent_template
   */


  export type AggregateAi_agent_template = {
    _count: Ai_agent_templateCountAggregateOutputType | null
    _avg: Ai_agent_templateAvgAggregateOutputType | null
    _sum: Ai_agent_templateSumAggregateOutputType | null
    _min: Ai_agent_templateMinAggregateOutputType | null
    _max: Ai_agent_templateMaxAggregateOutputType | null
  }

  export type Ai_agent_templateAvgAggregateOutputType = {
    chat_history_conf: number | null
    sort: number | null
    creator: number | null
    updater: number | null
  }

  export type Ai_agent_templateSumAggregateOutputType = {
    chat_history_conf: number | null
    sort: number | null
    creator: bigint | null
    updater: bigint | null
  }

  export type Ai_agent_templateMinAggregateOutputType = {
    id: string | null
    agent_code: string | null
    agent_name: string | null
    asr_model_id: string | null
    vad_model_id: string | null
    llm_model_id: string | null
    vllm_model_id: string | null
    tts_model_id: string | null
    tts_voice_id: string | null
    mem_model_id: string | null
    intent_model_id: string | null
    system_prompt: string | null
    summary_memory: string | null
    chat_history_conf: number | null
    lang_code: string | null
    language: string | null
    sort: number | null
    creator: bigint | null
    created_at: Date | null
    updater: bigint | null
    updated_at: Date | null
  }

  export type Ai_agent_templateMaxAggregateOutputType = {
    id: string | null
    agent_code: string | null
    agent_name: string | null
    asr_model_id: string | null
    vad_model_id: string | null
    llm_model_id: string | null
    vllm_model_id: string | null
    tts_model_id: string | null
    tts_voice_id: string | null
    mem_model_id: string | null
    intent_model_id: string | null
    system_prompt: string | null
    summary_memory: string | null
    chat_history_conf: number | null
    lang_code: string | null
    language: string | null
    sort: number | null
    creator: bigint | null
    created_at: Date | null
    updater: bigint | null
    updated_at: Date | null
  }

  export type Ai_agent_templateCountAggregateOutputType = {
    id: number
    agent_code: number
    agent_name: number
    asr_model_id: number
    vad_model_id: number
    llm_model_id: number
    vllm_model_id: number
    tts_model_id: number
    tts_voice_id: number
    mem_model_id: number
    intent_model_id: number
    system_prompt: number
    summary_memory: number
    chat_history_conf: number
    lang_code: number
    language: number
    sort: number
    creator: number
    created_at: number
    updater: number
    updated_at: number
    _all: number
  }


  export type Ai_agent_templateAvgAggregateInputType = {
    chat_history_conf?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_agent_templateSumAggregateInputType = {
    chat_history_conf?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_agent_templateMinAggregateInputType = {
    id?: true
    agent_code?: true
    agent_name?: true
    asr_model_id?: true
    vad_model_id?: true
    llm_model_id?: true
    vllm_model_id?: true
    tts_model_id?: true
    tts_voice_id?: true
    mem_model_id?: true
    intent_model_id?: true
    system_prompt?: true
    summary_memory?: true
    chat_history_conf?: true
    lang_code?: true
    language?: true
    sort?: true
    creator?: true
    created_at?: true
    updater?: true
    updated_at?: true
  }

  export type Ai_agent_templateMaxAggregateInputType = {
    id?: true
    agent_code?: true
    agent_name?: true
    asr_model_id?: true
    vad_model_id?: true
    llm_model_id?: true
    vllm_model_id?: true
    tts_model_id?: true
    tts_voice_id?: true
    mem_model_id?: true
    intent_model_id?: true
    system_prompt?: true
    summary_memory?: true
    chat_history_conf?: true
    lang_code?: true
    language?: true
    sort?: true
    creator?: true
    created_at?: true
    updater?: true
    updated_at?: true
  }

  export type Ai_agent_templateCountAggregateInputType = {
    id?: true
    agent_code?: true
    agent_name?: true
    asr_model_id?: true
    vad_model_id?: true
    llm_model_id?: true
    vllm_model_id?: true
    tts_model_id?: true
    tts_voice_id?: true
    mem_model_id?: true
    intent_model_id?: true
    system_prompt?: true
    summary_memory?: true
    chat_history_conf?: true
    lang_code?: true
    language?: true
    sort?: true
    creator?: true
    created_at?: true
    updater?: true
    updated_at?: true
    _all?: true
  }

  export type Ai_agent_templateAggregateArgs = {
    /**
     * Filter which ai_agent_template to aggregate.
     * 
    **/
    where?: ai_agent_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_templates to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_templateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_agent_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_templates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_templates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_agent_templates
    **/
    _count?: true | Ai_agent_templateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_agent_templateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_agent_templateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_agent_templateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_agent_templateMaxAggregateInputType
  }

  export type GetAi_agent_templateAggregateType<T extends Ai_agent_templateAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_agent_template]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_agent_template[P]>
      : GetScalarType<T[P], AggregateAi_agent_template[P]>
  }




  export type Ai_agent_templateGroupByArgs = {
    where?: ai_agent_templateWhereInput
    orderBy?: Enumerable<ai_agent_templateOrderByWithAggregationInput>
    by: Array<Ai_agent_templateScalarFieldEnum>
    having?: ai_agent_templateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_agent_templateCountAggregateInputType | true
    _avg?: Ai_agent_templateAvgAggregateInputType
    _sum?: Ai_agent_templateSumAggregateInputType
    _min?: Ai_agent_templateMinAggregateInputType
    _max?: Ai_agent_templateMaxAggregateInputType
  }


  export type Ai_agent_templateGroupByOutputType = {
    id: string
    agent_code: string | null
    agent_name: string | null
    asr_model_id: string | null
    vad_model_id: string | null
    llm_model_id: string | null
    vllm_model_id: string | null
    tts_model_id: string | null
    tts_voice_id: string | null
    mem_model_id: string | null
    intent_model_id: string | null
    system_prompt: string | null
    summary_memory: string | null
    chat_history_conf: number
    lang_code: string | null
    language: string | null
    sort: number | null
    creator: bigint | null
    created_at: Date | null
    updater: bigint | null
    updated_at: Date | null
    _count: Ai_agent_templateCountAggregateOutputType | null
    _avg: Ai_agent_templateAvgAggregateOutputType | null
    _sum: Ai_agent_templateSumAggregateOutputType | null
    _min: Ai_agent_templateMinAggregateOutputType | null
    _max: Ai_agent_templateMaxAggregateOutputType | null
  }

  type GetAi_agent_templateGroupByPayload<T extends Ai_agent_templateGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_agent_templateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_agent_templateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_agent_templateGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_agent_templateGroupByOutputType[P]>
        }
      >
    >


  export type ai_agent_templateSelect = {
    id?: boolean
    agent_code?: boolean
    agent_name?: boolean
    asr_model_id?: boolean
    vad_model_id?: boolean
    llm_model_id?: boolean
    vllm_model_id?: boolean
    tts_model_id?: boolean
    tts_voice_id?: boolean
    mem_model_id?: boolean
    intent_model_id?: boolean
    system_prompt?: boolean
    summary_memory?: boolean
    chat_history_conf?: boolean
    lang_code?: boolean
    language?: boolean
    sort?: boolean
    creator?: boolean
    created_at?: boolean
    updater?: boolean
    updated_at?: boolean
  }

  export type ai_agent_templateGetPayload<
    S extends boolean | null | undefined | ai_agent_templateArgs,
    U = keyof S
      > = S extends true
        ? ai_agent_template
    : S extends undefined
    ? never
    : S extends ai_agent_templateArgs | ai_agent_templateFindManyArgs
    ?'include' extends U
    ? ai_agent_template 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_agent_template ? ai_agent_template[P] : never
  } 
    : ai_agent_template
  : ai_agent_template


  type ai_agent_templateCountArgs = Merge<
    Omit<ai_agent_templateFindManyArgs, 'select' | 'include'> & {
      select?: Ai_agent_templateCountAggregateInputType | true
    }
  >

  export interface ai_agent_templateDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_agent_template that matches the filter.
     * @param {ai_agent_templateFindUniqueArgs} args - Arguments to find a Ai_agent_template
     * @example
     * // Get one Ai_agent_template
     * const ai_agent_template = await prisma.ai_agent_template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_agent_templateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_agent_templateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_agent_template'> extends True ? CheckSelect<T, Prisma__ai_agent_templateClient<ai_agent_template>, Prisma__ai_agent_templateClient<ai_agent_templateGetPayload<T>>> : CheckSelect<T, Prisma__ai_agent_templateClient<ai_agent_template | null >, Prisma__ai_agent_templateClient<ai_agent_templateGetPayload<T> | null >>

    /**
     * Find the first Ai_agent_template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_templateFindFirstArgs} args - Arguments to find a Ai_agent_template
     * @example
     * // Get one Ai_agent_template
     * const ai_agent_template = await prisma.ai_agent_template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_agent_templateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_agent_templateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_agent_template'> extends True ? CheckSelect<T, Prisma__ai_agent_templateClient<ai_agent_template>, Prisma__ai_agent_templateClient<ai_agent_templateGetPayload<T>>> : CheckSelect<T, Prisma__ai_agent_templateClient<ai_agent_template | null >, Prisma__ai_agent_templateClient<ai_agent_templateGetPayload<T> | null >>

    /**
     * Find zero or more Ai_agent_templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_templateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_agent_templates
     * const ai_agent_templates = await prisma.ai_agent_template.findMany()
     * 
     * // Get first 10 Ai_agent_templates
     * const ai_agent_templates = await prisma.ai_agent_template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_agent_templateWithIdOnly = await prisma.ai_agent_template.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_agent_templateFindManyArgs>(
      args?: SelectSubset<T, ai_agent_templateFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_agent_template>>, PrismaPromise<Array<ai_agent_templateGetPayload<T>>>>

    /**
     * Create a Ai_agent_template.
     * @param {ai_agent_templateCreateArgs} args - Arguments to create a Ai_agent_template.
     * @example
     * // Create one Ai_agent_template
     * const Ai_agent_template = await prisma.ai_agent_template.create({
     *   data: {
     *     // ... data to create a Ai_agent_template
     *   }
     * })
     * 
    **/
    create<T extends ai_agent_templateCreateArgs>(
      args: SelectSubset<T, ai_agent_templateCreateArgs>
    ): CheckSelect<T, Prisma__ai_agent_templateClient<ai_agent_template>, Prisma__ai_agent_templateClient<ai_agent_templateGetPayload<T>>>

    /**
     * Create many Ai_agent_templates.
     *     @param {ai_agent_templateCreateManyArgs} args - Arguments to create many Ai_agent_templates.
     *     @example
     *     // Create many Ai_agent_templates
     *     const ai_agent_template = await prisma.ai_agent_template.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_agent_templateCreateManyArgs>(
      args?: SelectSubset<T, ai_agent_templateCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_agent_template.
     * @param {ai_agent_templateDeleteArgs} args - Arguments to delete one Ai_agent_template.
     * @example
     * // Delete one Ai_agent_template
     * const Ai_agent_template = await prisma.ai_agent_template.delete({
     *   where: {
     *     // ... filter to delete one Ai_agent_template
     *   }
     * })
     * 
    **/
    delete<T extends ai_agent_templateDeleteArgs>(
      args: SelectSubset<T, ai_agent_templateDeleteArgs>
    ): CheckSelect<T, Prisma__ai_agent_templateClient<ai_agent_template>, Prisma__ai_agent_templateClient<ai_agent_templateGetPayload<T>>>

    /**
     * Update one Ai_agent_template.
     * @param {ai_agent_templateUpdateArgs} args - Arguments to update one Ai_agent_template.
     * @example
     * // Update one Ai_agent_template
     * const ai_agent_template = await prisma.ai_agent_template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_agent_templateUpdateArgs>(
      args: SelectSubset<T, ai_agent_templateUpdateArgs>
    ): CheckSelect<T, Prisma__ai_agent_templateClient<ai_agent_template>, Prisma__ai_agent_templateClient<ai_agent_templateGetPayload<T>>>

    /**
     * Delete zero or more Ai_agent_templates.
     * @param {ai_agent_templateDeleteManyArgs} args - Arguments to filter Ai_agent_templates to delete.
     * @example
     * // Delete a few Ai_agent_templates
     * const { count } = await prisma.ai_agent_template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_agent_templateDeleteManyArgs>(
      args?: SelectSubset<T, ai_agent_templateDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_agent_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_templateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_agent_templates
     * const ai_agent_template = await prisma.ai_agent_template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_agent_templateUpdateManyArgs>(
      args: SelectSubset<T, ai_agent_templateUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_agent_template.
     * @param {ai_agent_templateUpsertArgs} args - Arguments to update or create a Ai_agent_template.
     * @example
     * // Update or create a Ai_agent_template
     * const ai_agent_template = await prisma.ai_agent_template.upsert({
     *   create: {
     *     // ... data to create a Ai_agent_template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_agent_template we want to update
     *   }
     * })
    **/
    upsert<T extends ai_agent_templateUpsertArgs>(
      args: SelectSubset<T, ai_agent_templateUpsertArgs>
    ): CheckSelect<T, Prisma__ai_agent_templateClient<ai_agent_template>, Prisma__ai_agent_templateClient<ai_agent_templateGetPayload<T>>>

    /**
     * Count the number of Ai_agent_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_templateCountArgs} args - Arguments to filter Ai_agent_templates to count.
     * @example
     * // Count the number of Ai_agent_templates
     * const count = await prisma.ai_agent_template.count({
     *   where: {
     *     // ... the filter for the Ai_agent_templates we want to count
     *   }
     * })
    **/
    count<T extends ai_agent_templateCountArgs>(
      args?: Subset<T, ai_agent_templateCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_agent_templateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_agent_template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agent_templateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_agent_templateAggregateArgs>(args: Subset<T, Ai_agent_templateAggregateArgs>): PrismaPromise<GetAi_agent_templateAggregateType<T>>

    /**
     * Group by Ai_agent_template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agent_templateGroupByArgs} args - Group by arguments.
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
      T extends Ai_agent_templateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_agent_templateGroupByArgs['orderBy'] }
        : { orderBy?: Ai_agent_templateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_agent_templateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_agent_templateGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_agent_template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_agent_templateClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_agent_template findUnique
   */
  export type ai_agent_templateFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_template
     * 
    **/
    select?: ai_agent_templateSelect | null
    /**
     * Throw an Error if a ai_agent_template can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent_template to fetch.
     * 
    **/
    where: ai_agent_templateWhereUniqueInput
  }


  /**
   * ai_agent_template findFirst
   */
  export type ai_agent_templateFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_template
     * 
    **/
    select?: ai_agent_templateSelect | null
    /**
     * Throw an Error if a ai_agent_template can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent_template to fetch.
     * 
    **/
    where?: ai_agent_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_templates to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_templateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_agent_templates.
     * 
    **/
    cursor?: ai_agent_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_templates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_templates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_agent_templates.
     * 
    **/
    distinct?: Enumerable<Ai_agent_templateScalarFieldEnum>
  }


  /**
   * ai_agent_template findMany
   */
  export type ai_agent_templateFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_template
     * 
    **/
    select?: ai_agent_templateSelect | null
    /**
     * Filter, which ai_agent_templates to fetch.
     * 
    **/
    where?: ai_agent_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_templates to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_templateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_agent_templates.
     * 
    **/
    cursor?: ai_agent_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_templates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_templates.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_agent_templateScalarFieldEnum>
  }


  /**
   * ai_agent_template create
   */
  export type ai_agent_templateCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_template
     * 
    **/
    select?: ai_agent_templateSelect | null
    /**
     * The data needed to create a ai_agent_template.
     * 
    **/
    data: XOR<ai_agent_templateCreateInput, ai_agent_templateUncheckedCreateInput>
  }


  /**
   * ai_agent_template createMany
   */
  export type ai_agent_templateCreateManyArgs = {
    /**
     * The data used to create many ai_agent_templates.
     * 
    **/
    data: Enumerable<ai_agent_templateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_agent_template update
   */
  export type ai_agent_templateUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_template
     * 
    **/
    select?: ai_agent_templateSelect | null
    /**
     * The data needed to update a ai_agent_template.
     * 
    **/
    data: XOR<ai_agent_templateUpdateInput, ai_agent_templateUncheckedUpdateInput>
    /**
     * Choose, which ai_agent_template to update.
     * 
    **/
    where: ai_agent_templateWhereUniqueInput
  }


  /**
   * ai_agent_template updateMany
   */
  export type ai_agent_templateUpdateManyArgs = {
    /**
     * The data used to update ai_agent_templates.
     * 
    **/
    data: XOR<ai_agent_templateUpdateManyMutationInput, ai_agent_templateUncheckedUpdateManyInput>
    /**
     * Filter which ai_agent_templates to update
     * 
    **/
    where?: ai_agent_templateWhereInput
  }


  /**
   * ai_agent_template upsert
   */
  export type ai_agent_templateUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_template
     * 
    **/
    select?: ai_agent_templateSelect | null
    /**
     * The filter to search for the ai_agent_template to update in case it exists.
     * 
    **/
    where: ai_agent_templateWhereUniqueInput
    /**
     * In case the ai_agent_template found by the `where` argument doesn't exist, create a new ai_agent_template with this data.
     * 
    **/
    create: XOR<ai_agent_templateCreateInput, ai_agent_templateUncheckedCreateInput>
    /**
     * In case the ai_agent_template was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_agent_templateUpdateInput, ai_agent_templateUncheckedUpdateInput>
  }


  /**
   * ai_agent_template delete
   */
  export type ai_agent_templateDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_template
     * 
    **/
    select?: ai_agent_templateSelect | null
    /**
     * Filter which ai_agent_template to delete.
     * 
    **/
    where: ai_agent_templateWhereUniqueInput
  }


  /**
   * ai_agent_template deleteMany
   */
  export type ai_agent_templateDeleteManyArgs = {
    /**
     * Filter which ai_agent_templates to delete
     * 
    **/
    where?: ai_agent_templateWhereInput
  }


  /**
   * ai_agent_template without action
   */
  export type ai_agent_templateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_template
     * 
    **/
    select?: ai_agent_templateSelect | null
  }



  /**
   * Model ai_agent_voice_print
   */


  export type AggregateAi_agent_voice_print = {
    _count: Ai_agent_voice_printCountAggregateOutputType | null
    _avg: Ai_agent_voice_printAvgAggregateOutputType | null
    _sum: Ai_agent_voice_printSumAggregateOutputType | null
    _min: Ai_agent_voice_printMinAggregateOutputType | null
    _max: Ai_agent_voice_printMaxAggregateOutputType | null
  }

  export type Ai_agent_voice_printAvgAggregateOutputType = {
    creator: number | null
    updater: number | null
  }

  export type Ai_agent_voice_printSumAggregateOutputType = {
    creator: bigint | null
    updater: bigint | null
  }

  export type Ai_agent_voice_printMinAggregateOutputType = {
    id: string | null
    agent_id: string | null
    source_name: string | null
    introduce: string | null
    create_date: Date | null
    creator: bigint | null
    update_date: Date | null
    updater: bigint | null
    audio_id: string | null
  }

  export type Ai_agent_voice_printMaxAggregateOutputType = {
    id: string | null
    agent_id: string | null
    source_name: string | null
    introduce: string | null
    create_date: Date | null
    creator: bigint | null
    update_date: Date | null
    updater: bigint | null
    audio_id: string | null
  }

  export type Ai_agent_voice_printCountAggregateOutputType = {
    id: number
    agent_id: number
    source_name: number
    introduce: number
    create_date: number
    creator: number
    update_date: number
    updater: number
    audio_id: number
    _all: number
  }


  export type Ai_agent_voice_printAvgAggregateInputType = {
    creator?: true
    updater?: true
  }

  export type Ai_agent_voice_printSumAggregateInputType = {
    creator?: true
    updater?: true
  }

  export type Ai_agent_voice_printMinAggregateInputType = {
    id?: true
    agent_id?: true
    source_name?: true
    introduce?: true
    create_date?: true
    creator?: true
    update_date?: true
    updater?: true
    audio_id?: true
  }

  export type Ai_agent_voice_printMaxAggregateInputType = {
    id?: true
    agent_id?: true
    source_name?: true
    introduce?: true
    create_date?: true
    creator?: true
    update_date?: true
    updater?: true
    audio_id?: true
  }

  export type Ai_agent_voice_printCountAggregateInputType = {
    id?: true
    agent_id?: true
    source_name?: true
    introduce?: true
    create_date?: true
    creator?: true
    update_date?: true
    updater?: true
    audio_id?: true
    _all?: true
  }

  export type Ai_agent_voice_printAggregateArgs = {
    /**
     * Filter which ai_agent_voice_print to aggregate.
     * 
    **/
    where?: ai_agent_voice_printWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_voice_prints to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_voice_printOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_agent_voice_printWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_voice_prints from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_voice_prints.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_agent_voice_prints
    **/
    _count?: true | Ai_agent_voice_printCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_agent_voice_printAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_agent_voice_printSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_agent_voice_printMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_agent_voice_printMaxAggregateInputType
  }

  export type GetAi_agent_voice_printAggregateType<T extends Ai_agent_voice_printAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_agent_voice_print]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_agent_voice_print[P]>
      : GetScalarType<T[P], AggregateAi_agent_voice_print[P]>
  }




  export type Ai_agent_voice_printGroupByArgs = {
    where?: ai_agent_voice_printWhereInput
    orderBy?: Enumerable<ai_agent_voice_printOrderByWithAggregationInput>
    by: Array<Ai_agent_voice_printScalarFieldEnum>
    having?: ai_agent_voice_printScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_agent_voice_printCountAggregateInputType | true
    _avg?: Ai_agent_voice_printAvgAggregateInputType
    _sum?: Ai_agent_voice_printSumAggregateInputType
    _min?: Ai_agent_voice_printMinAggregateInputType
    _max?: Ai_agent_voice_printMaxAggregateInputType
  }


  export type Ai_agent_voice_printGroupByOutputType = {
    id: string
    agent_id: string
    source_name: string
    introduce: string | null
    create_date: Date | null
    creator: bigint | null
    update_date: Date | null
    updater: bigint | null
    audio_id: string
    _count: Ai_agent_voice_printCountAggregateOutputType | null
    _avg: Ai_agent_voice_printAvgAggregateOutputType | null
    _sum: Ai_agent_voice_printSumAggregateOutputType | null
    _min: Ai_agent_voice_printMinAggregateOutputType | null
    _max: Ai_agent_voice_printMaxAggregateOutputType | null
  }

  type GetAi_agent_voice_printGroupByPayload<T extends Ai_agent_voice_printGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_agent_voice_printGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_agent_voice_printGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_agent_voice_printGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_agent_voice_printGroupByOutputType[P]>
        }
      >
    >


  export type ai_agent_voice_printSelect = {
    id?: boolean
    agent_id?: boolean
    source_name?: boolean
    introduce?: boolean
    create_date?: boolean
    creator?: boolean
    update_date?: boolean
    updater?: boolean
    audio_id?: boolean
  }

  export type ai_agent_voice_printGetPayload<
    S extends boolean | null | undefined | ai_agent_voice_printArgs,
    U = keyof S
      > = S extends true
        ? ai_agent_voice_print
    : S extends undefined
    ? never
    : S extends ai_agent_voice_printArgs | ai_agent_voice_printFindManyArgs
    ?'include' extends U
    ? ai_agent_voice_print 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_agent_voice_print ? ai_agent_voice_print[P] : never
  } 
    : ai_agent_voice_print
  : ai_agent_voice_print


  type ai_agent_voice_printCountArgs = Merge<
    Omit<ai_agent_voice_printFindManyArgs, 'select' | 'include'> & {
      select?: Ai_agent_voice_printCountAggregateInputType | true
    }
  >

  export interface ai_agent_voice_printDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_agent_voice_print that matches the filter.
     * @param {ai_agent_voice_printFindUniqueArgs} args - Arguments to find a Ai_agent_voice_print
     * @example
     * // Get one Ai_agent_voice_print
     * const ai_agent_voice_print = await prisma.ai_agent_voice_print.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_agent_voice_printFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_agent_voice_printFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_agent_voice_print'> extends True ? CheckSelect<T, Prisma__ai_agent_voice_printClient<ai_agent_voice_print>, Prisma__ai_agent_voice_printClient<ai_agent_voice_printGetPayload<T>>> : CheckSelect<T, Prisma__ai_agent_voice_printClient<ai_agent_voice_print | null >, Prisma__ai_agent_voice_printClient<ai_agent_voice_printGetPayload<T> | null >>

    /**
     * Find the first Ai_agent_voice_print that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_voice_printFindFirstArgs} args - Arguments to find a Ai_agent_voice_print
     * @example
     * // Get one Ai_agent_voice_print
     * const ai_agent_voice_print = await prisma.ai_agent_voice_print.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_agent_voice_printFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_agent_voice_printFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_agent_voice_print'> extends True ? CheckSelect<T, Prisma__ai_agent_voice_printClient<ai_agent_voice_print>, Prisma__ai_agent_voice_printClient<ai_agent_voice_printGetPayload<T>>> : CheckSelect<T, Prisma__ai_agent_voice_printClient<ai_agent_voice_print | null >, Prisma__ai_agent_voice_printClient<ai_agent_voice_printGetPayload<T> | null >>

    /**
     * Find zero or more Ai_agent_voice_prints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_voice_printFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_agent_voice_prints
     * const ai_agent_voice_prints = await prisma.ai_agent_voice_print.findMany()
     * 
     * // Get first 10 Ai_agent_voice_prints
     * const ai_agent_voice_prints = await prisma.ai_agent_voice_print.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_agent_voice_printWithIdOnly = await prisma.ai_agent_voice_print.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_agent_voice_printFindManyArgs>(
      args?: SelectSubset<T, ai_agent_voice_printFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_agent_voice_print>>, PrismaPromise<Array<ai_agent_voice_printGetPayload<T>>>>

    /**
     * Create a Ai_agent_voice_print.
     * @param {ai_agent_voice_printCreateArgs} args - Arguments to create a Ai_agent_voice_print.
     * @example
     * // Create one Ai_agent_voice_print
     * const Ai_agent_voice_print = await prisma.ai_agent_voice_print.create({
     *   data: {
     *     // ... data to create a Ai_agent_voice_print
     *   }
     * })
     * 
    **/
    create<T extends ai_agent_voice_printCreateArgs>(
      args: SelectSubset<T, ai_agent_voice_printCreateArgs>
    ): CheckSelect<T, Prisma__ai_agent_voice_printClient<ai_agent_voice_print>, Prisma__ai_agent_voice_printClient<ai_agent_voice_printGetPayload<T>>>

    /**
     * Create many Ai_agent_voice_prints.
     *     @param {ai_agent_voice_printCreateManyArgs} args - Arguments to create many Ai_agent_voice_prints.
     *     @example
     *     // Create many Ai_agent_voice_prints
     *     const ai_agent_voice_print = await prisma.ai_agent_voice_print.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_agent_voice_printCreateManyArgs>(
      args?: SelectSubset<T, ai_agent_voice_printCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_agent_voice_print.
     * @param {ai_agent_voice_printDeleteArgs} args - Arguments to delete one Ai_agent_voice_print.
     * @example
     * // Delete one Ai_agent_voice_print
     * const Ai_agent_voice_print = await prisma.ai_agent_voice_print.delete({
     *   where: {
     *     // ... filter to delete one Ai_agent_voice_print
     *   }
     * })
     * 
    **/
    delete<T extends ai_agent_voice_printDeleteArgs>(
      args: SelectSubset<T, ai_agent_voice_printDeleteArgs>
    ): CheckSelect<T, Prisma__ai_agent_voice_printClient<ai_agent_voice_print>, Prisma__ai_agent_voice_printClient<ai_agent_voice_printGetPayload<T>>>

    /**
     * Update one Ai_agent_voice_print.
     * @param {ai_agent_voice_printUpdateArgs} args - Arguments to update one Ai_agent_voice_print.
     * @example
     * // Update one Ai_agent_voice_print
     * const ai_agent_voice_print = await prisma.ai_agent_voice_print.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_agent_voice_printUpdateArgs>(
      args: SelectSubset<T, ai_agent_voice_printUpdateArgs>
    ): CheckSelect<T, Prisma__ai_agent_voice_printClient<ai_agent_voice_print>, Prisma__ai_agent_voice_printClient<ai_agent_voice_printGetPayload<T>>>

    /**
     * Delete zero or more Ai_agent_voice_prints.
     * @param {ai_agent_voice_printDeleteManyArgs} args - Arguments to filter Ai_agent_voice_prints to delete.
     * @example
     * // Delete a few Ai_agent_voice_prints
     * const { count } = await prisma.ai_agent_voice_print.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_agent_voice_printDeleteManyArgs>(
      args?: SelectSubset<T, ai_agent_voice_printDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_agent_voice_prints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_voice_printUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_agent_voice_prints
     * const ai_agent_voice_print = await prisma.ai_agent_voice_print.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_agent_voice_printUpdateManyArgs>(
      args: SelectSubset<T, ai_agent_voice_printUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_agent_voice_print.
     * @param {ai_agent_voice_printUpsertArgs} args - Arguments to update or create a Ai_agent_voice_print.
     * @example
     * // Update or create a Ai_agent_voice_print
     * const ai_agent_voice_print = await prisma.ai_agent_voice_print.upsert({
     *   create: {
     *     // ... data to create a Ai_agent_voice_print
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_agent_voice_print we want to update
     *   }
     * })
    **/
    upsert<T extends ai_agent_voice_printUpsertArgs>(
      args: SelectSubset<T, ai_agent_voice_printUpsertArgs>
    ): CheckSelect<T, Prisma__ai_agent_voice_printClient<ai_agent_voice_print>, Prisma__ai_agent_voice_printClient<ai_agent_voice_printGetPayload<T>>>

    /**
     * Count the number of Ai_agent_voice_prints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_agent_voice_printCountArgs} args - Arguments to filter Ai_agent_voice_prints to count.
     * @example
     * // Count the number of Ai_agent_voice_prints
     * const count = await prisma.ai_agent_voice_print.count({
     *   where: {
     *     // ... the filter for the Ai_agent_voice_prints we want to count
     *   }
     * })
    **/
    count<T extends ai_agent_voice_printCountArgs>(
      args?: Subset<T, ai_agent_voice_printCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_agent_voice_printCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_agent_voice_print.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agent_voice_printAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_agent_voice_printAggregateArgs>(args: Subset<T, Ai_agent_voice_printAggregateArgs>): PrismaPromise<GetAi_agent_voice_printAggregateType<T>>

    /**
     * Group by Ai_agent_voice_print.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_agent_voice_printGroupByArgs} args - Group by arguments.
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
      T extends Ai_agent_voice_printGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_agent_voice_printGroupByArgs['orderBy'] }
        : { orderBy?: Ai_agent_voice_printGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_agent_voice_printGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_agent_voice_printGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_agent_voice_print.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_agent_voice_printClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_agent_voice_print findUnique
   */
  export type ai_agent_voice_printFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_voice_print
     * 
    **/
    select?: ai_agent_voice_printSelect | null
    /**
     * Throw an Error if a ai_agent_voice_print can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent_voice_print to fetch.
     * 
    **/
    where: ai_agent_voice_printWhereUniqueInput
  }


  /**
   * ai_agent_voice_print findFirst
   */
  export type ai_agent_voice_printFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_voice_print
     * 
    **/
    select?: ai_agent_voice_printSelect | null
    /**
     * Throw an Error if a ai_agent_voice_print can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_agent_voice_print to fetch.
     * 
    **/
    where?: ai_agent_voice_printWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_voice_prints to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_voice_printOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_agent_voice_prints.
     * 
    **/
    cursor?: ai_agent_voice_printWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_voice_prints from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_voice_prints.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_agent_voice_prints.
     * 
    **/
    distinct?: Enumerable<Ai_agent_voice_printScalarFieldEnum>
  }


  /**
   * ai_agent_voice_print findMany
   */
  export type ai_agent_voice_printFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_voice_print
     * 
    **/
    select?: ai_agent_voice_printSelect | null
    /**
     * Filter, which ai_agent_voice_prints to fetch.
     * 
    **/
    where?: ai_agent_voice_printWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_agent_voice_prints to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_agent_voice_printOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_agent_voice_prints.
     * 
    **/
    cursor?: ai_agent_voice_printWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_agent_voice_prints from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_agent_voice_prints.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_agent_voice_printScalarFieldEnum>
  }


  /**
   * ai_agent_voice_print create
   */
  export type ai_agent_voice_printCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_voice_print
     * 
    **/
    select?: ai_agent_voice_printSelect | null
    /**
     * The data needed to create a ai_agent_voice_print.
     * 
    **/
    data: XOR<ai_agent_voice_printCreateInput, ai_agent_voice_printUncheckedCreateInput>
  }


  /**
   * ai_agent_voice_print createMany
   */
  export type ai_agent_voice_printCreateManyArgs = {
    /**
     * The data used to create many ai_agent_voice_prints.
     * 
    **/
    data: Enumerable<ai_agent_voice_printCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_agent_voice_print update
   */
  export type ai_agent_voice_printUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_voice_print
     * 
    **/
    select?: ai_agent_voice_printSelect | null
    /**
     * The data needed to update a ai_agent_voice_print.
     * 
    **/
    data: XOR<ai_agent_voice_printUpdateInput, ai_agent_voice_printUncheckedUpdateInput>
    /**
     * Choose, which ai_agent_voice_print to update.
     * 
    **/
    where: ai_agent_voice_printWhereUniqueInput
  }


  /**
   * ai_agent_voice_print updateMany
   */
  export type ai_agent_voice_printUpdateManyArgs = {
    /**
     * The data used to update ai_agent_voice_prints.
     * 
    **/
    data: XOR<ai_agent_voice_printUpdateManyMutationInput, ai_agent_voice_printUncheckedUpdateManyInput>
    /**
     * Filter which ai_agent_voice_prints to update
     * 
    **/
    where?: ai_agent_voice_printWhereInput
  }


  /**
   * ai_agent_voice_print upsert
   */
  export type ai_agent_voice_printUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_voice_print
     * 
    **/
    select?: ai_agent_voice_printSelect | null
    /**
     * The filter to search for the ai_agent_voice_print to update in case it exists.
     * 
    **/
    where: ai_agent_voice_printWhereUniqueInput
    /**
     * In case the ai_agent_voice_print found by the `where` argument doesn't exist, create a new ai_agent_voice_print with this data.
     * 
    **/
    create: XOR<ai_agent_voice_printCreateInput, ai_agent_voice_printUncheckedCreateInput>
    /**
     * In case the ai_agent_voice_print was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_agent_voice_printUpdateInput, ai_agent_voice_printUncheckedUpdateInput>
  }


  /**
   * ai_agent_voice_print delete
   */
  export type ai_agent_voice_printDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_voice_print
     * 
    **/
    select?: ai_agent_voice_printSelect | null
    /**
     * Filter which ai_agent_voice_print to delete.
     * 
    **/
    where: ai_agent_voice_printWhereUniqueInput
  }


  /**
   * ai_agent_voice_print deleteMany
   */
  export type ai_agent_voice_printDeleteManyArgs = {
    /**
     * Filter which ai_agent_voice_prints to delete
     * 
    **/
    where?: ai_agent_voice_printWhereInput
  }


  /**
   * ai_agent_voice_print without action
   */
  export type ai_agent_voice_printArgs = {
    /**
     * Select specific fields to fetch from the ai_agent_voice_print
     * 
    **/
    select?: ai_agent_voice_printSelect | null
  }



  /**
   * Model ai_device
   */


  export type AggregateAi_device = {
    _count: Ai_deviceCountAggregateOutputType | null
    _avg: Ai_deviceAvgAggregateOutputType | null
    _sum: Ai_deviceSumAggregateOutputType | null
    _min: Ai_deviceMinAggregateOutputType | null
    _max: Ai_deviceMaxAggregateOutputType | null
  }

  export type Ai_deviceAvgAggregateOutputType = {
    user_id: number | null
    auto_update: number | null
    sort: number | null
    creator: number | null
    updater: number | null
  }

  export type Ai_deviceSumAggregateOutputType = {
    user_id: bigint | null
    auto_update: number | null
    sort: number | null
    creator: bigint | null
    updater: bigint | null
  }

  export type Ai_deviceMinAggregateOutputType = {
    id: string | null
    user_id: bigint | null
    mac_address: string | null
    last_connected_at: Date | null
    auto_update: number | null
    board: string | null
    alias: string | null
    agent_id: string | null
    app_version: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Ai_deviceMaxAggregateOutputType = {
    id: string | null
    user_id: bigint | null
    mac_address: string | null
    last_connected_at: Date | null
    auto_update: number | null
    board: string | null
    alias: string | null
    agent_id: string | null
    app_version: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Ai_deviceCountAggregateOutputType = {
    id: number
    user_id: number
    mac_address: number
    last_connected_at: number
    auto_update: number
    board: number
    alias: number
    agent_id: number
    app_version: number
    sort: number
    creator: number
    create_date: number
    updater: number
    update_date: number
    _all: number
  }


  export type Ai_deviceAvgAggregateInputType = {
    user_id?: true
    auto_update?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_deviceSumAggregateInputType = {
    user_id?: true
    auto_update?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_deviceMinAggregateInputType = {
    id?: true
    user_id?: true
    mac_address?: true
    last_connected_at?: true
    auto_update?: true
    board?: true
    alias?: true
    agent_id?: true
    app_version?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Ai_deviceMaxAggregateInputType = {
    id?: true
    user_id?: true
    mac_address?: true
    last_connected_at?: true
    auto_update?: true
    board?: true
    alias?: true
    agent_id?: true
    app_version?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Ai_deviceCountAggregateInputType = {
    id?: true
    user_id?: true
    mac_address?: true
    last_connected_at?: true
    auto_update?: true
    board?: true
    alias?: true
    agent_id?: true
    app_version?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
    _all?: true
  }

  export type Ai_deviceAggregateArgs = {
    /**
     * Filter which ai_device to aggregate.
     * 
    **/
    where?: ai_deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_devices to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_deviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_devices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_devices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_devices
    **/
    _count?: true | Ai_deviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_deviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_deviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_deviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_deviceMaxAggregateInputType
  }

  export type GetAi_deviceAggregateType<T extends Ai_deviceAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_device]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_device[P]>
      : GetScalarType<T[P], AggregateAi_device[P]>
  }




  export type Ai_deviceGroupByArgs = {
    where?: ai_deviceWhereInput
    orderBy?: Enumerable<ai_deviceOrderByWithAggregationInput>
    by: Array<Ai_deviceScalarFieldEnum>
    having?: ai_deviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_deviceCountAggregateInputType | true
    _avg?: Ai_deviceAvgAggregateInputType
    _sum?: Ai_deviceSumAggregateInputType
    _min?: Ai_deviceMinAggregateInputType
    _max?: Ai_deviceMaxAggregateInputType
  }


  export type Ai_deviceGroupByOutputType = {
    id: string
    user_id: bigint | null
    mac_address: string | null
    last_connected_at: Date | null
    auto_update: number | null
    board: string | null
    alias: string | null
    agent_id: string | null
    app_version: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
    _count: Ai_deviceCountAggregateOutputType | null
    _avg: Ai_deviceAvgAggregateOutputType | null
    _sum: Ai_deviceSumAggregateOutputType | null
    _min: Ai_deviceMinAggregateOutputType | null
    _max: Ai_deviceMaxAggregateOutputType | null
  }

  type GetAi_deviceGroupByPayload<T extends Ai_deviceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_deviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_deviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_deviceGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_deviceGroupByOutputType[P]>
        }
      >
    >


  export type ai_deviceSelect = {
    id?: boolean
    user_id?: boolean
    mac_address?: boolean
    last_connected_at?: boolean
    auto_update?: boolean
    board?: boolean
    alias?: boolean
    agent_id?: boolean
    app_version?: boolean
    sort?: boolean
    creator?: boolean
    create_date?: boolean
    updater?: boolean
    update_date?: boolean
  }

  export type ai_deviceGetPayload<
    S extends boolean | null | undefined | ai_deviceArgs,
    U = keyof S
      > = S extends true
        ? ai_device
    : S extends undefined
    ? never
    : S extends ai_deviceArgs | ai_deviceFindManyArgs
    ?'include' extends U
    ? ai_device 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_device ? ai_device[P] : never
  } 
    : ai_device
  : ai_device


  type ai_deviceCountArgs = Merge<
    Omit<ai_deviceFindManyArgs, 'select' | 'include'> & {
      select?: Ai_deviceCountAggregateInputType | true
    }
  >

  export interface ai_deviceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_device that matches the filter.
     * @param {ai_deviceFindUniqueArgs} args - Arguments to find a Ai_device
     * @example
     * // Get one Ai_device
     * const ai_device = await prisma.ai_device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_deviceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_deviceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_device'> extends True ? CheckSelect<T, Prisma__ai_deviceClient<ai_device>, Prisma__ai_deviceClient<ai_deviceGetPayload<T>>> : CheckSelect<T, Prisma__ai_deviceClient<ai_device | null >, Prisma__ai_deviceClient<ai_deviceGetPayload<T> | null >>

    /**
     * Find the first Ai_device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_deviceFindFirstArgs} args - Arguments to find a Ai_device
     * @example
     * // Get one Ai_device
     * const ai_device = await prisma.ai_device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_deviceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_deviceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_device'> extends True ? CheckSelect<T, Prisma__ai_deviceClient<ai_device>, Prisma__ai_deviceClient<ai_deviceGetPayload<T>>> : CheckSelect<T, Prisma__ai_deviceClient<ai_device | null >, Prisma__ai_deviceClient<ai_deviceGetPayload<T> | null >>

    /**
     * Find zero or more Ai_devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_deviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_devices
     * const ai_devices = await prisma.ai_device.findMany()
     * 
     * // Get first 10 Ai_devices
     * const ai_devices = await prisma.ai_device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_deviceWithIdOnly = await prisma.ai_device.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_deviceFindManyArgs>(
      args?: SelectSubset<T, ai_deviceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_device>>, PrismaPromise<Array<ai_deviceGetPayload<T>>>>

    /**
     * Create a Ai_device.
     * @param {ai_deviceCreateArgs} args - Arguments to create a Ai_device.
     * @example
     * // Create one Ai_device
     * const Ai_device = await prisma.ai_device.create({
     *   data: {
     *     // ... data to create a Ai_device
     *   }
     * })
     * 
    **/
    create<T extends ai_deviceCreateArgs>(
      args: SelectSubset<T, ai_deviceCreateArgs>
    ): CheckSelect<T, Prisma__ai_deviceClient<ai_device>, Prisma__ai_deviceClient<ai_deviceGetPayload<T>>>

    /**
     * Create many Ai_devices.
     *     @param {ai_deviceCreateManyArgs} args - Arguments to create many Ai_devices.
     *     @example
     *     // Create many Ai_devices
     *     const ai_device = await prisma.ai_device.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_deviceCreateManyArgs>(
      args?: SelectSubset<T, ai_deviceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_device.
     * @param {ai_deviceDeleteArgs} args - Arguments to delete one Ai_device.
     * @example
     * // Delete one Ai_device
     * const Ai_device = await prisma.ai_device.delete({
     *   where: {
     *     // ... filter to delete one Ai_device
     *   }
     * })
     * 
    **/
    delete<T extends ai_deviceDeleteArgs>(
      args: SelectSubset<T, ai_deviceDeleteArgs>
    ): CheckSelect<T, Prisma__ai_deviceClient<ai_device>, Prisma__ai_deviceClient<ai_deviceGetPayload<T>>>

    /**
     * Update one Ai_device.
     * @param {ai_deviceUpdateArgs} args - Arguments to update one Ai_device.
     * @example
     * // Update one Ai_device
     * const ai_device = await prisma.ai_device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_deviceUpdateArgs>(
      args: SelectSubset<T, ai_deviceUpdateArgs>
    ): CheckSelect<T, Prisma__ai_deviceClient<ai_device>, Prisma__ai_deviceClient<ai_deviceGetPayload<T>>>

    /**
     * Delete zero or more Ai_devices.
     * @param {ai_deviceDeleteManyArgs} args - Arguments to filter Ai_devices to delete.
     * @example
     * // Delete a few Ai_devices
     * const { count } = await prisma.ai_device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_deviceDeleteManyArgs>(
      args?: SelectSubset<T, ai_deviceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_deviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_devices
     * const ai_device = await prisma.ai_device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_deviceUpdateManyArgs>(
      args: SelectSubset<T, ai_deviceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_device.
     * @param {ai_deviceUpsertArgs} args - Arguments to update or create a Ai_device.
     * @example
     * // Update or create a Ai_device
     * const ai_device = await prisma.ai_device.upsert({
     *   create: {
     *     // ... data to create a Ai_device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_device we want to update
     *   }
     * })
    **/
    upsert<T extends ai_deviceUpsertArgs>(
      args: SelectSubset<T, ai_deviceUpsertArgs>
    ): CheckSelect<T, Prisma__ai_deviceClient<ai_device>, Prisma__ai_deviceClient<ai_deviceGetPayload<T>>>

    /**
     * Count the number of Ai_devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_deviceCountArgs} args - Arguments to filter Ai_devices to count.
     * @example
     * // Count the number of Ai_devices
     * const count = await prisma.ai_device.count({
     *   where: {
     *     // ... the filter for the Ai_devices we want to count
     *   }
     * })
    **/
    count<T extends ai_deviceCountArgs>(
      args?: Subset<T, ai_deviceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_deviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_deviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_deviceAggregateArgs>(args: Subset<T, Ai_deviceAggregateArgs>): PrismaPromise<GetAi_deviceAggregateType<T>>

    /**
     * Group by Ai_device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_deviceGroupByArgs} args - Group by arguments.
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
      T extends Ai_deviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_deviceGroupByArgs['orderBy'] }
        : { orderBy?: Ai_deviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_deviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_deviceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_deviceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_device findUnique
   */
  export type ai_deviceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_device
     * 
    **/
    select?: ai_deviceSelect | null
    /**
     * Throw an Error if a ai_device can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_device to fetch.
     * 
    **/
    where: ai_deviceWhereUniqueInput
  }


  /**
   * ai_device findFirst
   */
  export type ai_deviceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_device
     * 
    **/
    select?: ai_deviceSelect | null
    /**
     * Throw an Error if a ai_device can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_device to fetch.
     * 
    **/
    where?: ai_deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_devices to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_deviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_devices.
     * 
    **/
    cursor?: ai_deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_devices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_devices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_devices.
     * 
    **/
    distinct?: Enumerable<Ai_deviceScalarFieldEnum>
  }


  /**
   * ai_device findMany
   */
  export type ai_deviceFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_device
     * 
    **/
    select?: ai_deviceSelect | null
    /**
     * Filter, which ai_devices to fetch.
     * 
    **/
    where?: ai_deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_devices to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_deviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_devices.
     * 
    **/
    cursor?: ai_deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_devices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_devices.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_deviceScalarFieldEnum>
  }


  /**
   * ai_device create
   */
  export type ai_deviceCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_device
     * 
    **/
    select?: ai_deviceSelect | null
    /**
     * The data needed to create a ai_device.
     * 
    **/
    data: XOR<ai_deviceCreateInput, ai_deviceUncheckedCreateInput>
  }


  /**
   * ai_device createMany
   */
  export type ai_deviceCreateManyArgs = {
    /**
     * The data used to create many ai_devices.
     * 
    **/
    data: Enumerable<ai_deviceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_device update
   */
  export type ai_deviceUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_device
     * 
    **/
    select?: ai_deviceSelect | null
    /**
     * The data needed to update a ai_device.
     * 
    **/
    data: XOR<ai_deviceUpdateInput, ai_deviceUncheckedUpdateInput>
    /**
     * Choose, which ai_device to update.
     * 
    **/
    where: ai_deviceWhereUniqueInput
  }


  /**
   * ai_device updateMany
   */
  export type ai_deviceUpdateManyArgs = {
    /**
     * The data used to update ai_devices.
     * 
    **/
    data: XOR<ai_deviceUpdateManyMutationInput, ai_deviceUncheckedUpdateManyInput>
    /**
     * Filter which ai_devices to update
     * 
    **/
    where?: ai_deviceWhereInput
  }


  /**
   * ai_device upsert
   */
  export type ai_deviceUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_device
     * 
    **/
    select?: ai_deviceSelect | null
    /**
     * The filter to search for the ai_device to update in case it exists.
     * 
    **/
    where: ai_deviceWhereUniqueInput
    /**
     * In case the ai_device found by the `where` argument doesn't exist, create a new ai_device with this data.
     * 
    **/
    create: XOR<ai_deviceCreateInput, ai_deviceUncheckedCreateInput>
    /**
     * In case the ai_device was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_deviceUpdateInput, ai_deviceUncheckedUpdateInput>
  }


  /**
   * ai_device delete
   */
  export type ai_deviceDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_device
     * 
    **/
    select?: ai_deviceSelect | null
    /**
     * Filter which ai_device to delete.
     * 
    **/
    where: ai_deviceWhereUniqueInput
  }


  /**
   * ai_device deleteMany
   */
  export type ai_deviceDeleteManyArgs = {
    /**
     * Filter which ai_devices to delete
     * 
    **/
    where?: ai_deviceWhereInput
  }


  /**
   * ai_device without action
   */
  export type ai_deviceArgs = {
    /**
     * Select specific fields to fetch from the ai_device
     * 
    **/
    select?: ai_deviceSelect | null
  }



  /**
   * Model ai_model_config
   */


  export type AggregateAi_model_config = {
    _count: Ai_model_configCountAggregateOutputType | null
    _avg: Ai_model_configAvgAggregateOutputType | null
    _sum: Ai_model_configSumAggregateOutputType | null
    _min: Ai_model_configMinAggregateOutputType | null
    _max: Ai_model_configMaxAggregateOutputType | null
  }

  export type Ai_model_configAvgAggregateOutputType = {
    sort: number | null
    creator: number | null
    updater: number | null
  }

  export type Ai_model_configSumAggregateOutputType = {
    sort: number | null
    creator: bigint | null
    updater: bigint | null
  }

  export type Ai_model_configMinAggregateOutputType = {
    id: string | null
    model_type: string | null
    model_code: string | null
    model_name: string | null
    is_default: boolean | null
    is_enabled: boolean | null
    doc_link: string | null
    remark: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Ai_model_configMaxAggregateOutputType = {
    id: string | null
    model_type: string | null
    model_code: string | null
    model_name: string | null
    is_default: boolean | null
    is_enabled: boolean | null
    doc_link: string | null
    remark: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Ai_model_configCountAggregateOutputType = {
    id: number
    model_type: number
    model_code: number
    model_name: number
    is_default: number
    is_enabled: number
    config_json: number
    doc_link: number
    remark: number
    sort: number
    creator: number
    create_date: number
    updater: number
    update_date: number
    _all: number
  }


  export type Ai_model_configAvgAggregateInputType = {
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_model_configSumAggregateInputType = {
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_model_configMinAggregateInputType = {
    id?: true
    model_type?: true
    model_code?: true
    model_name?: true
    is_default?: true
    is_enabled?: true
    doc_link?: true
    remark?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Ai_model_configMaxAggregateInputType = {
    id?: true
    model_type?: true
    model_code?: true
    model_name?: true
    is_default?: true
    is_enabled?: true
    doc_link?: true
    remark?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Ai_model_configCountAggregateInputType = {
    id?: true
    model_type?: true
    model_code?: true
    model_name?: true
    is_default?: true
    is_enabled?: true
    config_json?: true
    doc_link?: true
    remark?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
    _all?: true
  }

  export type Ai_model_configAggregateArgs = {
    /**
     * Filter which ai_model_config to aggregate.
     * 
    **/
    where?: ai_model_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_model_configs to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_model_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_model_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_model_configs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_model_configs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_model_configs
    **/
    _count?: true | Ai_model_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_model_configAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_model_configSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_model_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_model_configMaxAggregateInputType
  }

  export type GetAi_model_configAggregateType<T extends Ai_model_configAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_model_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_model_config[P]>
      : GetScalarType<T[P], AggregateAi_model_config[P]>
  }




  export type Ai_model_configGroupByArgs = {
    where?: ai_model_configWhereInput
    orderBy?: Enumerable<ai_model_configOrderByWithAggregationInput>
    by: Array<Ai_model_configScalarFieldEnum>
    having?: ai_model_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_model_configCountAggregateInputType | true
    _avg?: Ai_model_configAvgAggregateInputType
    _sum?: Ai_model_configSumAggregateInputType
    _min?: Ai_model_configMinAggregateInputType
    _max?: Ai_model_configMaxAggregateInputType
  }


  export type Ai_model_configGroupByOutputType = {
    id: string
    model_type: string | null
    model_code: string | null
    model_name: string | null
    is_default: boolean | null
    is_enabled: boolean | null
    config_json: JsonValue | null
    doc_link: string | null
    remark: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
    _count: Ai_model_configCountAggregateOutputType | null
    _avg: Ai_model_configAvgAggregateOutputType | null
    _sum: Ai_model_configSumAggregateOutputType | null
    _min: Ai_model_configMinAggregateOutputType | null
    _max: Ai_model_configMaxAggregateOutputType | null
  }

  type GetAi_model_configGroupByPayload<T extends Ai_model_configGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_model_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_model_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_model_configGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_model_configGroupByOutputType[P]>
        }
      >
    >


  export type ai_model_configSelect = {
    id?: boolean
    model_type?: boolean
    model_code?: boolean
    model_name?: boolean
    is_default?: boolean
    is_enabled?: boolean
    config_json?: boolean
    doc_link?: boolean
    remark?: boolean
    sort?: boolean
    creator?: boolean
    create_date?: boolean
    updater?: boolean
    update_date?: boolean
  }

  export type ai_model_configGetPayload<
    S extends boolean | null | undefined | ai_model_configArgs,
    U = keyof S
      > = S extends true
        ? ai_model_config
    : S extends undefined
    ? never
    : S extends ai_model_configArgs | ai_model_configFindManyArgs
    ?'include' extends U
    ? ai_model_config 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_model_config ? ai_model_config[P] : never
  } 
    : ai_model_config
  : ai_model_config


  type ai_model_configCountArgs = Merge<
    Omit<ai_model_configFindManyArgs, 'select' | 'include'> & {
      select?: Ai_model_configCountAggregateInputType | true
    }
  >

  export interface ai_model_configDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_model_config that matches the filter.
     * @param {ai_model_configFindUniqueArgs} args - Arguments to find a Ai_model_config
     * @example
     * // Get one Ai_model_config
     * const ai_model_config = await prisma.ai_model_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_model_configFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_model_configFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_model_config'> extends True ? CheckSelect<T, Prisma__ai_model_configClient<ai_model_config>, Prisma__ai_model_configClient<ai_model_configGetPayload<T>>> : CheckSelect<T, Prisma__ai_model_configClient<ai_model_config | null >, Prisma__ai_model_configClient<ai_model_configGetPayload<T> | null >>

    /**
     * Find the first Ai_model_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_model_configFindFirstArgs} args - Arguments to find a Ai_model_config
     * @example
     * // Get one Ai_model_config
     * const ai_model_config = await prisma.ai_model_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_model_configFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_model_configFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_model_config'> extends True ? CheckSelect<T, Prisma__ai_model_configClient<ai_model_config>, Prisma__ai_model_configClient<ai_model_configGetPayload<T>>> : CheckSelect<T, Prisma__ai_model_configClient<ai_model_config | null >, Prisma__ai_model_configClient<ai_model_configGetPayload<T> | null >>

    /**
     * Find zero or more Ai_model_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_model_configFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_model_configs
     * const ai_model_configs = await prisma.ai_model_config.findMany()
     * 
     * // Get first 10 Ai_model_configs
     * const ai_model_configs = await prisma.ai_model_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_model_configWithIdOnly = await prisma.ai_model_config.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_model_configFindManyArgs>(
      args?: SelectSubset<T, ai_model_configFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_model_config>>, PrismaPromise<Array<ai_model_configGetPayload<T>>>>

    /**
     * Create a Ai_model_config.
     * @param {ai_model_configCreateArgs} args - Arguments to create a Ai_model_config.
     * @example
     * // Create one Ai_model_config
     * const Ai_model_config = await prisma.ai_model_config.create({
     *   data: {
     *     // ... data to create a Ai_model_config
     *   }
     * })
     * 
    **/
    create<T extends ai_model_configCreateArgs>(
      args: SelectSubset<T, ai_model_configCreateArgs>
    ): CheckSelect<T, Prisma__ai_model_configClient<ai_model_config>, Prisma__ai_model_configClient<ai_model_configGetPayload<T>>>

    /**
     * Create many Ai_model_configs.
     *     @param {ai_model_configCreateManyArgs} args - Arguments to create many Ai_model_configs.
     *     @example
     *     // Create many Ai_model_configs
     *     const ai_model_config = await prisma.ai_model_config.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_model_configCreateManyArgs>(
      args?: SelectSubset<T, ai_model_configCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_model_config.
     * @param {ai_model_configDeleteArgs} args - Arguments to delete one Ai_model_config.
     * @example
     * // Delete one Ai_model_config
     * const Ai_model_config = await prisma.ai_model_config.delete({
     *   where: {
     *     // ... filter to delete one Ai_model_config
     *   }
     * })
     * 
    **/
    delete<T extends ai_model_configDeleteArgs>(
      args: SelectSubset<T, ai_model_configDeleteArgs>
    ): CheckSelect<T, Prisma__ai_model_configClient<ai_model_config>, Prisma__ai_model_configClient<ai_model_configGetPayload<T>>>

    /**
     * Update one Ai_model_config.
     * @param {ai_model_configUpdateArgs} args - Arguments to update one Ai_model_config.
     * @example
     * // Update one Ai_model_config
     * const ai_model_config = await prisma.ai_model_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_model_configUpdateArgs>(
      args: SelectSubset<T, ai_model_configUpdateArgs>
    ): CheckSelect<T, Prisma__ai_model_configClient<ai_model_config>, Prisma__ai_model_configClient<ai_model_configGetPayload<T>>>

    /**
     * Delete zero or more Ai_model_configs.
     * @param {ai_model_configDeleteManyArgs} args - Arguments to filter Ai_model_configs to delete.
     * @example
     * // Delete a few Ai_model_configs
     * const { count } = await prisma.ai_model_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_model_configDeleteManyArgs>(
      args?: SelectSubset<T, ai_model_configDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_model_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_model_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_model_configs
     * const ai_model_config = await prisma.ai_model_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_model_configUpdateManyArgs>(
      args: SelectSubset<T, ai_model_configUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_model_config.
     * @param {ai_model_configUpsertArgs} args - Arguments to update or create a Ai_model_config.
     * @example
     * // Update or create a Ai_model_config
     * const ai_model_config = await prisma.ai_model_config.upsert({
     *   create: {
     *     // ... data to create a Ai_model_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_model_config we want to update
     *   }
     * })
    **/
    upsert<T extends ai_model_configUpsertArgs>(
      args: SelectSubset<T, ai_model_configUpsertArgs>
    ): CheckSelect<T, Prisma__ai_model_configClient<ai_model_config>, Prisma__ai_model_configClient<ai_model_configGetPayload<T>>>

    /**
     * Count the number of Ai_model_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_model_configCountArgs} args - Arguments to filter Ai_model_configs to count.
     * @example
     * // Count the number of Ai_model_configs
     * const count = await prisma.ai_model_config.count({
     *   where: {
     *     // ... the filter for the Ai_model_configs we want to count
     *   }
     * })
    **/
    count<T extends ai_model_configCountArgs>(
      args?: Subset<T, ai_model_configCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_model_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_model_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_model_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_model_configAggregateArgs>(args: Subset<T, Ai_model_configAggregateArgs>): PrismaPromise<GetAi_model_configAggregateType<T>>

    /**
     * Group by Ai_model_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_model_configGroupByArgs} args - Group by arguments.
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
      T extends Ai_model_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_model_configGroupByArgs['orderBy'] }
        : { orderBy?: Ai_model_configGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_model_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_model_configGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_model_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_model_configClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_model_config findUnique
   */
  export type ai_model_configFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_model_config
     * 
    **/
    select?: ai_model_configSelect | null
    /**
     * Throw an Error if a ai_model_config can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_model_config to fetch.
     * 
    **/
    where: ai_model_configWhereUniqueInput
  }


  /**
   * ai_model_config findFirst
   */
  export type ai_model_configFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_model_config
     * 
    **/
    select?: ai_model_configSelect | null
    /**
     * Throw an Error if a ai_model_config can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_model_config to fetch.
     * 
    **/
    where?: ai_model_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_model_configs to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_model_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_model_configs.
     * 
    **/
    cursor?: ai_model_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_model_configs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_model_configs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_model_configs.
     * 
    **/
    distinct?: Enumerable<Ai_model_configScalarFieldEnum>
  }


  /**
   * ai_model_config findMany
   */
  export type ai_model_configFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_model_config
     * 
    **/
    select?: ai_model_configSelect | null
    /**
     * Filter, which ai_model_configs to fetch.
     * 
    **/
    where?: ai_model_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_model_configs to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_model_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_model_configs.
     * 
    **/
    cursor?: ai_model_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_model_configs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_model_configs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_model_configScalarFieldEnum>
  }


  /**
   * ai_model_config create
   */
  export type ai_model_configCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_model_config
     * 
    **/
    select?: ai_model_configSelect | null
    /**
     * The data needed to create a ai_model_config.
     * 
    **/
    data: XOR<ai_model_configCreateInput, ai_model_configUncheckedCreateInput>
  }


  /**
   * ai_model_config createMany
   */
  export type ai_model_configCreateManyArgs = {
    /**
     * The data used to create many ai_model_configs.
     * 
    **/
    data: Enumerable<ai_model_configCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_model_config update
   */
  export type ai_model_configUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_model_config
     * 
    **/
    select?: ai_model_configSelect | null
    /**
     * The data needed to update a ai_model_config.
     * 
    **/
    data: XOR<ai_model_configUpdateInput, ai_model_configUncheckedUpdateInput>
    /**
     * Choose, which ai_model_config to update.
     * 
    **/
    where: ai_model_configWhereUniqueInput
  }


  /**
   * ai_model_config updateMany
   */
  export type ai_model_configUpdateManyArgs = {
    /**
     * The data used to update ai_model_configs.
     * 
    **/
    data: XOR<ai_model_configUpdateManyMutationInput, ai_model_configUncheckedUpdateManyInput>
    /**
     * Filter which ai_model_configs to update
     * 
    **/
    where?: ai_model_configWhereInput
  }


  /**
   * ai_model_config upsert
   */
  export type ai_model_configUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_model_config
     * 
    **/
    select?: ai_model_configSelect | null
    /**
     * The filter to search for the ai_model_config to update in case it exists.
     * 
    **/
    where: ai_model_configWhereUniqueInput
    /**
     * In case the ai_model_config found by the `where` argument doesn't exist, create a new ai_model_config with this data.
     * 
    **/
    create: XOR<ai_model_configCreateInput, ai_model_configUncheckedCreateInput>
    /**
     * In case the ai_model_config was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_model_configUpdateInput, ai_model_configUncheckedUpdateInput>
  }


  /**
   * ai_model_config delete
   */
  export type ai_model_configDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_model_config
     * 
    **/
    select?: ai_model_configSelect | null
    /**
     * Filter which ai_model_config to delete.
     * 
    **/
    where: ai_model_configWhereUniqueInput
  }


  /**
   * ai_model_config deleteMany
   */
  export type ai_model_configDeleteManyArgs = {
    /**
     * Filter which ai_model_configs to delete
     * 
    **/
    where?: ai_model_configWhereInput
  }


  /**
   * ai_model_config without action
   */
  export type ai_model_configArgs = {
    /**
     * Select specific fields to fetch from the ai_model_config
     * 
    **/
    select?: ai_model_configSelect | null
  }



  /**
   * Model ai_model_provider
   */


  export type AggregateAi_model_provider = {
    _count: Ai_model_providerCountAggregateOutputType | null
    _avg: Ai_model_providerAvgAggregateOutputType | null
    _sum: Ai_model_providerSumAggregateOutputType | null
    _min: Ai_model_providerMinAggregateOutputType | null
    _max: Ai_model_providerMaxAggregateOutputType | null
  }

  export type Ai_model_providerAvgAggregateOutputType = {
    sort: number | null
    creator: number | null
    updater: number | null
  }

  export type Ai_model_providerSumAggregateOutputType = {
    sort: number | null
    creator: bigint | null
    updater: bigint | null
  }

  export type Ai_model_providerMinAggregateOutputType = {
    id: string | null
    model_type: string | null
    provider_code: string | null
    name: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Ai_model_providerMaxAggregateOutputType = {
    id: string | null
    model_type: string | null
    provider_code: string | null
    name: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Ai_model_providerCountAggregateOutputType = {
    id: number
    model_type: number
    provider_code: number
    name: number
    fields: number
    sort: number
    creator: number
    create_date: number
    updater: number
    update_date: number
    _all: number
  }


  export type Ai_model_providerAvgAggregateInputType = {
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_model_providerSumAggregateInputType = {
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_model_providerMinAggregateInputType = {
    id?: true
    model_type?: true
    provider_code?: true
    name?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Ai_model_providerMaxAggregateInputType = {
    id?: true
    model_type?: true
    provider_code?: true
    name?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Ai_model_providerCountAggregateInputType = {
    id?: true
    model_type?: true
    provider_code?: true
    name?: true
    fields?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
    _all?: true
  }

  export type Ai_model_providerAggregateArgs = {
    /**
     * Filter which ai_model_provider to aggregate.
     * 
    **/
    where?: ai_model_providerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_model_providers to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_model_providerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_model_providerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_model_providers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_model_providers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_model_providers
    **/
    _count?: true | Ai_model_providerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_model_providerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_model_providerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_model_providerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_model_providerMaxAggregateInputType
  }

  export type GetAi_model_providerAggregateType<T extends Ai_model_providerAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_model_provider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_model_provider[P]>
      : GetScalarType<T[P], AggregateAi_model_provider[P]>
  }




  export type Ai_model_providerGroupByArgs = {
    where?: ai_model_providerWhereInput
    orderBy?: Enumerable<ai_model_providerOrderByWithAggregationInput>
    by: Array<Ai_model_providerScalarFieldEnum>
    having?: ai_model_providerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_model_providerCountAggregateInputType | true
    _avg?: Ai_model_providerAvgAggregateInputType
    _sum?: Ai_model_providerSumAggregateInputType
    _min?: Ai_model_providerMinAggregateInputType
    _max?: Ai_model_providerMaxAggregateInputType
  }


  export type Ai_model_providerGroupByOutputType = {
    id: string
    model_type: string | null
    provider_code: string | null
    name: string | null
    fields: JsonValue | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
    _count: Ai_model_providerCountAggregateOutputType | null
    _avg: Ai_model_providerAvgAggregateOutputType | null
    _sum: Ai_model_providerSumAggregateOutputType | null
    _min: Ai_model_providerMinAggregateOutputType | null
    _max: Ai_model_providerMaxAggregateOutputType | null
  }

  type GetAi_model_providerGroupByPayload<T extends Ai_model_providerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_model_providerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_model_providerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_model_providerGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_model_providerGroupByOutputType[P]>
        }
      >
    >


  export type ai_model_providerSelect = {
    id?: boolean
    model_type?: boolean
    provider_code?: boolean
    name?: boolean
    fields?: boolean
    sort?: boolean
    creator?: boolean
    create_date?: boolean
    updater?: boolean
    update_date?: boolean
  }

  export type ai_model_providerGetPayload<
    S extends boolean | null | undefined | ai_model_providerArgs,
    U = keyof S
      > = S extends true
        ? ai_model_provider
    : S extends undefined
    ? never
    : S extends ai_model_providerArgs | ai_model_providerFindManyArgs
    ?'include' extends U
    ? ai_model_provider 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_model_provider ? ai_model_provider[P] : never
  } 
    : ai_model_provider
  : ai_model_provider


  type ai_model_providerCountArgs = Merge<
    Omit<ai_model_providerFindManyArgs, 'select' | 'include'> & {
      select?: Ai_model_providerCountAggregateInputType | true
    }
  >

  export interface ai_model_providerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_model_provider that matches the filter.
     * @param {ai_model_providerFindUniqueArgs} args - Arguments to find a Ai_model_provider
     * @example
     * // Get one Ai_model_provider
     * const ai_model_provider = await prisma.ai_model_provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_model_providerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_model_providerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_model_provider'> extends True ? CheckSelect<T, Prisma__ai_model_providerClient<ai_model_provider>, Prisma__ai_model_providerClient<ai_model_providerGetPayload<T>>> : CheckSelect<T, Prisma__ai_model_providerClient<ai_model_provider | null >, Prisma__ai_model_providerClient<ai_model_providerGetPayload<T> | null >>

    /**
     * Find the first Ai_model_provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_model_providerFindFirstArgs} args - Arguments to find a Ai_model_provider
     * @example
     * // Get one Ai_model_provider
     * const ai_model_provider = await prisma.ai_model_provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_model_providerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_model_providerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_model_provider'> extends True ? CheckSelect<T, Prisma__ai_model_providerClient<ai_model_provider>, Prisma__ai_model_providerClient<ai_model_providerGetPayload<T>>> : CheckSelect<T, Prisma__ai_model_providerClient<ai_model_provider | null >, Prisma__ai_model_providerClient<ai_model_providerGetPayload<T> | null >>

    /**
     * Find zero or more Ai_model_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_model_providerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_model_providers
     * const ai_model_providers = await prisma.ai_model_provider.findMany()
     * 
     * // Get first 10 Ai_model_providers
     * const ai_model_providers = await prisma.ai_model_provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_model_providerWithIdOnly = await prisma.ai_model_provider.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_model_providerFindManyArgs>(
      args?: SelectSubset<T, ai_model_providerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_model_provider>>, PrismaPromise<Array<ai_model_providerGetPayload<T>>>>

    /**
     * Create a Ai_model_provider.
     * @param {ai_model_providerCreateArgs} args - Arguments to create a Ai_model_provider.
     * @example
     * // Create one Ai_model_provider
     * const Ai_model_provider = await prisma.ai_model_provider.create({
     *   data: {
     *     // ... data to create a Ai_model_provider
     *   }
     * })
     * 
    **/
    create<T extends ai_model_providerCreateArgs>(
      args: SelectSubset<T, ai_model_providerCreateArgs>
    ): CheckSelect<T, Prisma__ai_model_providerClient<ai_model_provider>, Prisma__ai_model_providerClient<ai_model_providerGetPayload<T>>>

    /**
     * Create many Ai_model_providers.
     *     @param {ai_model_providerCreateManyArgs} args - Arguments to create many Ai_model_providers.
     *     @example
     *     // Create many Ai_model_providers
     *     const ai_model_provider = await prisma.ai_model_provider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_model_providerCreateManyArgs>(
      args?: SelectSubset<T, ai_model_providerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_model_provider.
     * @param {ai_model_providerDeleteArgs} args - Arguments to delete one Ai_model_provider.
     * @example
     * // Delete one Ai_model_provider
     * const Ai_model_provider = await prisma.ai_model_provider.delete({
     *   where: {
     *     // ... filter to delete one Ai_model_provider
     *   }
     * })
     * 
    **/
    delete<T extends ai_model_providerDeleteArgs>(
      args: SelectSubset<T, ai_model_providerDeleteArgs>
    ): CheckSelect<T, Prisma__ai_model_providerClient<ai_model_provider>, Prisma__ai_model_providerClient<ai_model_providerGetPayload<T>>>

    /**
     * Update one Ai_model_provider.
     * @param {ai_model_providerUpdateArgs} args - Arguments to update one Ai_model_provider.
     * @example
     * // Update one Ai_model_provider
     * const ai_model_provider = await prisma.ai_model_provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_model_providerUpdateArgs>(
      args: SelectSubset<T, ai_model_providerUpdateArgs>
    ): CheckSelect<T, Prisma__ai_model_providerClient<ai_model_provider>, Prisma__ai_model_providerClient<ai_model_providerGetPayload<T>>>

    /**
     * Delete zero or more Ai_model_providers.
     * @param {ai_model_providerDeleteManyArgs} args - Arguments to filter Ai_model_providers to delete.
     * @example
     * // Delete a few Ai_model_providers
     * const { count } = await prisma.ai_model_provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_model_providerDeleteManyArgs>(
      args?: SelectSubset<T, ai_model_providerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_model_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_model_providerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_model_providers
     * const ai_model_provider = await prisma.ai_model_provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_model_providerUpdateManyArgs>(
      args: SelectSubset<T, ai_model_providerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_model_provider.
     * @param {ai_model_providerUpsertArgs} args - Arguments to update or create a Ai_model_provider.
     * @example
     * // Update or create a Ai_model_provider
     * const ai_model_provider = await prisma.ai_model_provider.upsert({
     *   create: {
     *     // ... data to create a Ai_model_provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_model_provider we want to update
     *   }
     * })
    **/
    upsert<T extends ai_model_providerUpsertArgs>(
      args: SelectSubset<T, ai_model_providerUpsertArgs>
    ): CheckSelect<T, Prisma__ai_model_providerClient<ai_model_provider>, Prisma__ai_model_providerClient<ai_model_providerGetPayload<T>>>

    /**
     * Count the number of Ai_model_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_model_providerCountArgs} args - Arguments to filter Ai_model_providers to count.
     * @example
     * // Count the number of Ai_model_providers
     * const count = await prisma.ai_model_provider.count({
     *   where: {
     *     // ... the filter for the Ai_model_providers we want to count
     *   }
     * })
    **/
    count<T extends ai_model_providerCountArgs>(
      args?: Subset<T, ai_model_providerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_model_providerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_model_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_model_providerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_model_providerAggregateArgs>(args: Subset<T, Ai_model_providerAggregateArgs>): PrismaPromise<GetAi_model_providerAggregateType<T>>

    /**
     * Group by Ai_model_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_model_providerGroupByArgs} args - Group by arguments.
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
      T extends Ai_model_providerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_model_providerGroupByArgs['orderBy'] }
        : { orderBy?: Ai_model_providerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_model_providerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_model_providerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_model_provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_model_providerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_model_provider findUnique
   */
  export type ai_model_providerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_model_provider
     * 
    **/
    select?: ai_model_providerSelect | null
    /**
     * Throw an Error if a ai_model_provider can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_model_provider to fetch.
     * 
    **/
    where: ai_model_providerWhereUniqueInput
  }


  /**
   * ai_model_provider findFirst
   */
  export type ai_model_providerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_model_provider
     * 
    **/
    select?: ai_model_providerSelect | null
    /**
     * Throw an Error if a ai_model_provider can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_model_provider to fetch.
     * 
    **/
    where?: ai_model_providerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_model_providers to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_model_providerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_model_providers.
     * 
    **/
    cursor?: ai_model_providerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_model_providers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_model_providers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_model_providers.
     * 
    **/
    distinct?: Enumerable<Ai_model_providerScalarFieldEnum>
  }


  /**
   * ai_model_provider findMany
   */
  export type ai_model_providerFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_model_provider
     * 
    **/
    select?: ai_model_providerSelect | null
    /**
     * Filter, which ai_model_providers to fetch.
     * 
    **/
    where?: ai_model_providerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_model_providers to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_model_providerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_model_providers.
     * 
    **/
    cursor?: ai_model_providerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_model_providers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_model_providers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_model_providerScalarFieldEnum>
  }


  /**
   * ai_model_provider create
   */
  export type ai_model_providerCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_model_provider
     * 
    **/
    select?: ai_model_providerSelect | null
    /**
     * The data needed to create a ai_model_provider.
     * 
    **/
    data: XOR<ai_model_providerCreateInput, ai_model_providerUncheckedCreateInput>
  }


  /**
   * ai_model_provider createMany
   */
  export type ai_model_providerCreateManyArgs = {
    /**
     * The data used to create many ai_model_providers.
     * 
    **/
    data: Enumerable<ai_model_providerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_model_provider update
   */
  export type ai_model_providerUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_model_provider
     * 
    **/
    select?: ai_model_providerSelect | null
    /**
     * The data needed to update a ai_model_provider.
     * 
    **/
    data: XOR<ai_model_providerUpdateInput, ai_model_providerUncheckedUpdateInput>
    /**
     * Choose, which ai_model_provider to update.
     * 
    **/
    where: ai_model_providerWhereUniqueInput
  }


  /**
   * ai_model_provider updateMany
   */
  export type ai_model_providerUpdateManyArgs = {
    /**
     * The data used to update ai_model_providers.
     * 
    **/
    data: XOR<ai_model_providerUpdateManyMutationInput, ai_model_providerUncheckedUpdateManyInput>
    /**
     * Filter which ai_model_providers to update
     * 
    **/
    where?: ai_model_providerWhereInput
  }


  /**
   * ai_model_provider upsert
   */
  export type ai_model_providerUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_model_provider
     * 
    **/
    select?: ai_model_providerSelect | null
    /**
     * The filter to search for the ai_model_provider to update in case it exists.
     * 
    **/
    where: ai_model_providerWhereUniqueInput
    /**
     * In case the ai_model_provider found by the `where` argument doesn't exist, create a new ai_model_provider with this data.
     * 
    **/
    create: XOR<ai_model_providerCreateInput, ai_model_providerUncheckedCreateInput>
    /**
     * In case the ai_model_provider was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_model_providerUpdateInput, ai_model_providerUncheckedUpdateInput>
  }


  /**
   * ai_model_provider delete
   */
  export type ai_model_providerDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_model_provider
     * 
    **/
    select?: ai_model_providerSelect | null
    /**
     * Filter which ai_model_provider to delete.
     * 
    **/
    where: ai_model_providerWhereUniqueInput
  }


  /**
   * ai_model_provider deleteMany
   */
  export type ai_model_providerDeleteManyArgs = {
    /**
     * Filter which ai_model_providers to delete
     * 
    **/
    where?: ai_model_providerWhereInput
  }


  /**
   * ai_model_provider without action
   */
  export type ai_model_providerArgs = {
    /**
     * Select specific fields to fetch from the ai_model_provider
     * 
    **/
    select?: ai_model_providerSelect | null
  }



  /**
   * Model ai_ota
   */


  export type AggregateAi_ota = {
    _count: Ai_otaCountAggregateOutputType | null
    _avg: Ai_otaAvgAggregateOutputType | null
    _sum: Ai_otaSumAggregateOutputType | null
    _min: Ai_otaMinAggregateOutputType | null
    _max: Ai_otaMaxAggregateOutputType | null
  }

  export type Ai_otaAvgAggregateOutputType = {
    size: number | null
    sort: number | null
    updater: number | null
    creator: number | null
  }

  export type Ai_otaSumAggregateOutputType = {
    size: bigint | null
    sort: number | null
    updater: bigint | null
    creator: bigint | null
  }

  export type Ai_otaMinAggregateOutputType = {
    id: string | null
    firmware_name: string | null
    type: string | null
    version: string | null
    size: bigint | null
    remark: string | null
    firmware_path: string | null
    sort: number | null
    updater: bigint | null
    update_date: Date | null
    creator: bigint | null
    create_date: Date | null
  }

  export type Ai_otaMaxAggregateOutputType = {
    id: string | null
    firmware_name: string | null
    type: string | null
    version: string | null
    size: bigint | null
    remark: string | null
    firmware_path: string | null
    sort: number | null
    updater: bigint | null
    update_date: Date | null
    creator: bigint | null
    create_date: Date | null
  }

  export type Ai_otaCountAggregateOutputType = {
    id: number
    firmware_name: number
    type: number
    version: number
    size: number
    remark: number
    firmware_path: number
    sort: number
    updater: number
    update_date: number
    creator: number
    create_date: number
    _all: number
  }


  export type Ai_otaAvgAggregateInputType = {
    size?: true
    sort?: true
    updater?: true
    creator?: true
  }

  export type Ai_otaSumAggregateInputType = {
    size?: true
    sort?: true
    updater?: true
    creator?: true
  }

  export type Ai_otaMinAggregateInputType = {
    id?: true
    firmware_name?: true
    type?: true
    version?: true
    size?: true
    remark?: true
    firmware_path?: true
    sort?: true
    updater?: true
    update_date?: true
    creator?: true
    create_date?: true
  }

  export type Ai_otaMaxAggregateInputType = {
    id?: true
    firmware_name?: true
    type?: true
    version?: true
    size?: true
    remark?: true
    firmware_path?: true
    sort?: true
    updater?: true
    update_date?: true
    creator?: true
    create_date?: true
  }

  export type Ai_otaCountAggregateInputType = {
    id?: true
    firmware_name?: true
    type?: true
    version?: true
    size?: true
    remark?: true
    firmware_path?: true
    sort?: true
    updater?: true
    update_date?: true
    creator?: true
    create_date?: true
    _all?: true
  }

  export type Ai_otaAggregateArgs = {
    /**
     * Filter which ai_ota to aggregate.
     * 
    **/
    where?: ai_otaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_otas to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_otaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_otaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_otas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_otas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_otas
    **/
    _count?: true | Ai_otaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_otaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_otaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_otaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_otaMaxAggregateInputType
  }

  export type GetAi_otaAggregateType<T extends Ai_otaAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_ota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_ota[P]>
      : GetScalarType<T[P], AggregateAi_ota[P]>
  }




  export type Ai_otaGroupByArgs = {
    where?: ai_otaWhereInput
    orderBy?: Enumerable<ai_otaOrderByWithAggregationInput>
    by: Array<Ai_otaScalarFieldEnum>
    having?: ai_otaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_otaCountAggregateInputType | true
    _avg?: Ai_otaAvgAggregateInputType
    _sum?: Ai_otaSumAggregateInputType
    _min?: Ai_otaMinAggregateInputType
    _max?: Ai_otaMaxAggregateInputType
  }


  export type Ai_otaGroupByOutputType = {
    id: string
    firmware_name: string | null
    type: string | null
    version: string | null
    size: bigint | null
    remark: string | null
    firmware_path: string | null
    sort: number | null
    updater: bigint | null
    update_date: Date | null
    creator: bigint | null
    create_date: Date | null
    _count: Ai_otaCountAggregateOutputType | null
    _avg: Ai_otaAvgAggregateOutputType | null
    _sum: Ai_otaSumAggregateOutputType | null
    _min: Ai_otaMinAggregateOutputType | null
    _max: Ai_otaMaxAggregateOutputType | null
  }

  type GetAi_otaGroupByPayload<T extends Ai_otaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_otaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_otaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_otaGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_otaGroupByOutputType[P]>
        }
      >
    >


  export type ai_otaSelect = {
    id?: boolean
    firmware_name?: boolean
    type?: boolean
    version?: boolean
    size?: boolean
    remark?: boolean
    firmware_path?: boolean
    sort?: boolean
    updater?: boolean
    update_date?: boolean
    creator?: boolean
    create_date?: boolean
  }

  export type ai_otaGetPayload<
    S extends boolean | null | undefined | ai_otaArgs,
    U = keyof S
      > = S extends true
        ? ai_ota
    : S extends undefined
    ? never
    : S extends ai_otaArgs | ai_otaFindManyArgs
    ?'include' extends U
    ? ai_ota 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_ota ? ai_ota[P] : never
  } 
    : ai_ota
  : ai_ota


  type ai_otaCountArgs = Merge<
    Omit<ai_otaFindManyArgs, 'select' | 'include'> & {
      select?: Ai_otaCountAggregateInputType | true
    }
  >

  export interface ai_otaDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_ota that matches the filter.
     * @param {ai_otaFindUniqueArgs} args - Arguments to find a Ai_ota
     * @example
     * // Get one Ai_ota
     * const ai_ota = await prisma.ai_ota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_otaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_otaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_ota'> extends True ? CheckSelect<T, Prisma__ai_otaClient<ai_ota>, Prisma__ai_otaClient<ai_otaGetPayload<T>>> : CheckSelect<T, Prisma__ai_otaClient<ai_ota | null >, Prisma__ai_otaClient<ai_otaGetPayload<T> | null >>

    /**
     * Find the first Ai_ota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_otaFindFirstArgs} args - Arguments to find a Ai_ota
     * @example
     * // Get one Ai_ota
     * const ai_ota = await prisma.ai_ota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_otaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_otaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_ota'> extends True ? CheckSelect<T, Prisma__ai_otaClient<ai_ota>, Prisma__ai_otaClient<ai_otaGetPayload<T>>> : CheckSelect<T, Prisma__ai_otaClient<ai_ota | null >, Prisma__ai_otaClient<ai_otaGetPayload<T> | null >>

    /**
     * Find zero or more Ai_otas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_otaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_otas
     * const ai_otas = await prisma.ai_ota.findMany()
     * 
     * // Get first 10 Ai_otas
     * const ai_otas = await prisma.ai_ota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_otaWithIdOnly = await prisma.ai_ota.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_otaFindManyArgs>(
      args?: SelectSubset<T, ai_otaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_ota>>, PrismaPromise<Array<ai_otaGetPayload<T>>>>

    /**
     * Create a Ai_ota.
     * @param {ai_otaCreateArgs} args - Arguments to create a Ai_ota.
     * @example
     * // Create one Ai_ota
     * const Ai_ota = await prisma.ai_ota.create({
     *   data: {
     *     // ... data to create a Ai_ota
     *   }
     * })
     * 
    **/
    create<T extends ai_otaCreateArgs>(
      args: SelectSubset<T, ai_otaCreateArgs>
    ): CheckSelect<T, Prisma__ai_otaClient<ai_ota>, Prisma__ai_otaClient<ai_otaGetPayload<T>>>

    /**
     * Create many Ai_otas.
     *     @param {ai_otaCreateManyArgs} args - Arguments to create many Ai_otas.
     *     @example
     *     // Create many Ai_otas
     *     const ai_ota = await prisma.ai_ota.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_otaCreateManyArgs>(
      args?: SelectSubset<T, ai_otaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_ota.
     * @param {ai_otaDeleteArgs} args - Arguments to delete one Ai_ota.
     * @example
     * // Delete one Ai_ota
     * const Ai_ota = await prisma.ai_ota.delete({
     *   where: {
     *     // ... filter to delete one Ai_ota
     *   }
     * })
     * 
    **/
    delete<T extends ai_otaDeleteArgs>(
      args: SelectSubset<T, ai_otaDeleteArgs>
    ): CheckSelect<T, Prisma__ai_otaClient<ai_ota>, Prisma__ai_otaClient<ai_otaGetPayload<T>>>

    /**
     * Update one Ai_ota.
     * @param {ai_otaUpdateArgs} args - Arguments to update one Ai_ota.
     * @example
     * // Update one Ai_ota
     * const ai_ota = await prisma.ai_ota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_otaUpdateArgs>(
      args: SelectSubset<T, ai_otaUpdateArgs>
    ): CheckSelect<T, Prisma__ai_otaClient<ai_ota>, Prisma__ai_otaClient<ai_otaGetPayload<T>>>

    /**
     * Delete zero or more Ai_otas.
     * @param {ai_otaDeleteManyArgs} args - Arguments to filter Ai_otas to delete.
     * @example
     * // Delete a few Ai_otas
     * const { count } = await prisma.ai_ota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_otaDeleteManyArgs>(
      args?: SelectSubset<T, ai_otaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_otas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_otaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_otas
     * const ai_ota = await prisma.ai_ota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_otaUpdateManyArgs>(
      args: SelectSubset<T, ai_otaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_ota.
     * @param {ai_otaUpsertArgs} args - Arguments to update or create a Ai_ota.
     * @example
     * // Update or create a Ai_ota
     * const ai_ota = await prisma.ai_ota.upsert({
     *   create: {
     *     // ... data to create a Ai_ota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_ota we want to update
     *   }
     * })
    **/
    upsert<T extends ai_otaUpsertArgs>(
      args: SelectSubset<T, ai_otaUpsertArgs>
    ): CheckSelect<T, Prisma__ai_otaClient<ai_ota>, Prisma__ai_otaClient<ai_otaGetPayload<T>>>

    /**
     * Count the number of Ai_otas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_otaCountArgs} args - Arguments to filter Ai_otas to count.
     * @example
     * // Count the number of Ai_otas
     * const count = await prisma.ai_ota.count({
     *   where: {
     *     // ... the filter for the Ai_otas we want to count
     *   }
     * })
    **/
    count<T extends ai_otaCountArgs>(
      args?: Subset<T, ai_otaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_otaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_ota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_otaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_otaAggregateArgs>(args: Subset<T, Ai_otaAggregateArgs>): PrismaPromise<GetAi_otaAggregateType<T>>

    /**
     * Group by Ai_ota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_otaGroupByArgs} args - Group by arguments.
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
      T extends Ai_otaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_otaGroupByArgs['orderBy'] }
        : { orderBy?: Ai_otaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_otaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_otaGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_ota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_otaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_ota findUnique
   */
  export type ai_otaFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_ota
     * 
    **/
    select?: ai_otaSelect | null
    /**
     * Throw an Error if a ai_ota can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_ota to fetch.
     * 
    **/
    where: ai_otaWhereUniqueInput
  }


  /**
   * ai_ota findFirst
   */
  export type ai_otaFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_ota
     * 
    **/
    select?: ai_otaSelect | null
    /**
     * Throw an Error if a ai_ota can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_ota to fetch.
     * 
    **/
    where?: ai_otaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_otas to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_otaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_otas.
     * 
    **/
    cursor?: ai_otaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_otas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_otas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_otas.
     * 
    **/
    distinct?: Enumerable<Ai_otaScalarFieldEnum>
  }


  /**
   * ai_ota findMany
   */
  export type ai_otaFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_ota
     * 
    **/
    select?: ai_otaSelect | null
    /**
     * Filter, which ai_otas to fetch.
     * 
    **/
    where?: ai_otaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_otas to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_otaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_otas.
     * 
    **/
    cursor?: ai_otaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_otas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_otas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_otaScalarFieldEnum>
  }


  /**
   * ai_ota create
   */
  export type ai_otaCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_ota
     * 
    **/
    select?: ai_otaSelect | null
    /**
     * The data needed to create a ai_ota.
     * 
    **/
    data: XOR<ai_otaCreateInput, ai_otaUncheckedCreateInput>
  }


  /**
   * ai_ota createMany
   */
  export type ai_otaCreateManyArgs = {
    /**
     * The data used to create many ai_otas.
     * 
    **/
    data: Enumerable<ai_otaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_ota update
   */
  export type ai_otaUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_ota
     * 
    **/
    select?: ai_otaSelect | null
    /**
     * The data needed to update a ai_ota.
     * 
    **/
    data: XOR<ai_otaUpdateInput, ai_otaUncheckedUpdateInput>
    /**
     * Choose, which ai_ota to update.
     * 
    **/
    where: ai_otaWhereUniqueInput
  }


  /**
   * ai_ota updateMany
   */
  export type ai_otaUpdateManyArgs = {
    /**
     * The data used to update ai_otas.
     * 
    **/
    data: XOR<ai_otaUpdateManyMutationInput, ai_otaUncheckedUpdateManyInput>
    /**
     * Filter which ai_otas to update
     * 
    **/
    where?: ai_otaWhereInput
  }


  /**
   * ai_ota upsert
   */
  export type ai_otaUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_ota
     * 
    **/
    select?: ai_otaSelect | null
    /**
     * The filter to search for the ai_ota to update in case it exists.
     * 
    **/
    where: ai_otaWhereUniqueInput
    /**
     * In case the ai_ota found by the `where` argument doesn't exist, create a new ai_ota with this data.
     * 
    **/
    create: XOR<ai_otaCreateInput, ai_otaUncheckedCreateInput>
    /**
     * In case the ai_ota was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_otaUpdateInput, ai_otaUncheckedUpdateInput>
  }


  /**
   * ai_ota delete
   */
  export type ai_otaDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_ota
     * 
    **/
    select?: ai_otaSelect | null
    /**
     * Filter which ai_ota to delete.
     * 
    **/
    where: ai_otaWhereUniqueInput
  }


  /**
   * ai_ota deleteMany
   */
  export type ai_otaDeleteManyArgs = {
    /**
     * Filter which ai_otas to delete
     * 
    **/
    where?: ai_otaWhereInput
  }


  /**
   * ai_ota without action
   */
  export type ai_otaArgs = {
    /**
     * Select specific fields to fetch from the ai_ota
     * 
    **/
    select?: ai_otaSelect | null
  }



  /**
   * Model ai_tts_voice
   */


  export type AggregateAi_tts_voice = {
    _count: Ai_tts_voiceCountAggregateOutputType | null
    _avg: Ai_tts_voiceAvgAggregateOutputType | null
    _sum: Ai_tts_voiceSumAggregateOutputType | null
    _min: Ai_tts_voiceMinAggregateOutputType | null
    _max: Ai_tts_voiceMaxAggregateOutputType | null
  }

  export type Ai_tts_voiceAvgAggregateOutputType = {
    sort: number | null
    creator: number | null
    updater: number | null
  }

  export type Ai_tts_voiceSumAggregateOutputType = {
    sort: number | null
    creator: bigint | null
    updater: bigint | null
  }

  export type Ai_tts_voiceMinAggregateOutputType = {
    id: string | null
    tts_model_id: string | null
    name: string | null
    tts_voice: string | null
    languages: string | null
    voice_demo: string | null
    remark: string | null
    reference_audio: string | null
    reference_text: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Ai_tts_voiceMaxAggregateOutputType = {
    id: string | null
    tts_model_id: string | null
    name: string | null
    tts_voice: string | null
    languages: string | null
    voice_demo: string | null
    remark: string | null
    reference_audio: string | null
    reference_text: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Ai_tts_voiceCountAggregateOutputType = {
    id: number
    tts_model_id: number
    name: number
    tts_voice: number
    languages: number
    voice_demo: number
    remark: number
    reference_audio: number
    reference_text: number
    sort: number
    creator: number
    create_date: number
    updater: number
    update_date: number
    _all: number
  }


  export type Ai_tts_voiceAvgAggregateInputType = {
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_tts_voiceSumAggregateInputType = {
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_tts_voiceMinAggregateInputType = {
    id?: true
    tts_model_id?: true
    name?: true
    tts_voice?: true
    languages?: true
    voice_demo?: true
    remark?: true
    reference_audio?: true
    reference_text?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Ai_tts_voiceMaxAggregateInputType = {
    id?: true
    tts_model_id?: true
    name?: true
    tts_voice?: true
    languages?: true
    voice_demo?: true
    remark?: true
    reference_audio?: true
    reference_text?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Ai_tts_voiceCountAggregateInputType = {
    id?: true
    tts_model_id?: true
    name?: true
    tts_voice?: true
    languages?: true
    voice_demo?: true
    remark?: true
    reference_audio?: true
    reference_text?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
    _all?: true
  }

  export type Ai_tts_voiceAggregateArgs = {
    /**
     * Filter which ai_tts_voice to aggregate.
     * 
    **/
    where?: ai_tts_voiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_tts_voices to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_tts_voiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_tts_voiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_tts_voices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_tts_voices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_tts_voices
    **/
    _count?: true | Ai_tts_voiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_tts_voiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_tts_voiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_tts_voiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_tts_voiceMaxAggregateInputType
  }

  export type GetAi_tts_voiceAggregateType<T extends Ai_tts_voiceAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_tts_voice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_tts_voice[P]>
      : GetScalarType<T[P], AggregateAi_tts_voice[P]>
  }




  export type Ai_tts_voiceGroupByArgs = {
    where?: ai_tts_voiceWhereInput
    orderBy?: Enumerable<ai_tts_voiceOrderByWithAggregationInput>
    by: Array<Ai_tts_voiceScalarFieldEnum>
    having?: ai_tts_voiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_tts_voiceCountAggregateInputType | true
    _avg?: Ai_tts_voiceAvgAggregateInputType
    _sum?: Ai_tts_voiceSumAggregateInputType
    _min?: Ai_tts_voiceMinAggregateInputType
    _max?: Ai_tts_voiceMaxAggregateInputType
  }


  export type Ai_tts_voiceGroupByOutputType = {
    id: string
    tts_model_id: string | null
    name: string | null
    tts_voice: string | null
    languages: string | null
    voice_demo: string | null
    remark: string | null
    reference_audio: string | null
    reference_text: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
    _count: Ai_tts_voiceCountAggregateOutputType | null
    _avg: Ai_tts_voiceAvgAggregateOutputType | null
    _sum: Ai_tts_voiceSumAggregateOutputType | null
    _min: Ai_tts_voiceMinAggregateOutputType | null
    _max: Ai_tts_voiceMaxAggregateOutputType | null
  }

  type GetAi_tts_voiceGroupByPayload<T extends Ai_tts_voiceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_tts_voiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_tts_voiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_tts_voiceGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_tts_voiceGroupByOutputType[P]>
        }
      >
    >


  export type ai_tts_voiceSelect = {
    id?: boolean
    tts_model_id?: boolean
    name?: boolean
    tts_voice?: boolean
    languages?: boolean
    voice_demo?: boolean
    remark?: boolean
    reference_audio?: boolean
    reference_text?: boolean
    sort?: boolean
    creator?: boolean
    create_date?: boolean
    updater?: boolean
    update_date?: boolean
  }

  export type ai_tts_voiceGetPayload<
    S extends boolean | null | undefined | ai_tts_voiceArgs,
    U = keyof S
      > = S extends true
        ? ai_tts_voice
    : S extends undefined
    ? never
    : S extends ai_tts_voiceArgs | ai_tts_voiceFindManyArgs
    ?'include' extends U
    ? ai_tts_voice 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_tts_voice ? ai_tts_voice[P] : never
  } 
    : ai_tts_voice
  : ai_tts_voice


  type ai_tts_voiceCountArgs = Merge<
    Omit<ai_tts_voiceFindManyArgs, 'select' | 'include'> & {
      select?: Ai_tts_voiceCountAggregateInputType | true
    }
  >

  export interface ai_tts_voiceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_tts_voice that matches the filter.
     * @param {ai_tts_voiceFindUniqueArgs} args - Arguments to find a Ai_tts_voice
     * @example
     * // Get one Ai_tts_voice
     * const ai_tts_voice = await prisma.ai_tts_voice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_tts_voiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_tts_voiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_tts_voice'> extends True ? CheckSelect<T, Prisma__ai_tts_voiceClient<ai_tts_voice>, Prisma__ai_tts_voiceClient<ai_tts_voiceGetPayload<T>>> : CheckSelect<T, Prisma__ai_tts_voiceClient<ai_tts_voice | null >, Prisma__ai_tts_voiceClient<ai_tts_voiceGetPayload<T> | null >>

    /**
     * Find the first Ai_tts_voice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_tts_voiceFindFirstArgs} args - Arguments to find a Ai_tts_voice
     * @example
     * // Get one Ai_tts_voice
     * const ai_tts_voice = await prisma.ai_tts_voice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_tts_voiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_tts_voiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_tts_voice'> extends True ? CheckSelect<T, Prisma__ai_tts_voiceClient<ai_tts_voice>, Prisma__ai_tts_voiceClient<ai_tts_voiceGetPayload<T>>> : CheckSelect<T, Prisma__ai_tts_voiceClient<ai_tts_voice | null >, Prisma__ai_tts_voiceClient<ai_tts_voiceGetPayload<T> | null >>

    /**
     * Find zero or more Ai_tts_voices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_tts_voiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_tts_voices
     * const ai_tts_voices = await prisma.ai_tts_voice.findMany()
     * 
     * // Get first 10 Ai_tts_voices
     * const ai_tts_voices = await prisma.ai_tts_voice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_tts_voiceWithIdOnly = await prisma.ai_tts_voice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_tts_voiceFindManyArgs>(
      args?: SelectSubset<T, ai_tts_voiceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_tts_voice>>, PrismaPromise<Array<ai_tts_voiceGetPayload<T>>>>

    /**
     * Create a Ai_tts_voice.
     * @param {ai_tts_voiceCreateArgs} args - Arguments to create a Ai_tts_voice.
     * @example
     * // Create one Ai_tts_voice
     * const Ai_tts_voice = await prisma.ai_tts_voice.create({
     *   data: {
     *     // ... data to create a Ai_tts_voice
     *   }
     * })
     * 
    **/
    create<T extends ai_tts_voiceCreateArgs>(
      args: SelectSubset<T, ai_tts_voiceCreateArgs>
    ): CheckSelect<T, Prisma__ai_tts_voiceClient<ai_tts_voice>, Prisma__ai_tts_voiceClient<ai_tts_voiceGetPayload<T>>>

    /**
     * Create many Ai_tts_voices.
     *     @param {ai_tts_voiceCreateManyArgs} args - Arguments to create many Ai_tts_voices.
     *     @example
     *     // Create many Ai_tts_voices
     *     const ai_tts_voice = await prisma.ai_tts_voice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_tts_voiceCreateManyArgs>(
      args?: SelectSubset<T, ai_tts_voiceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_tts_voice.
     * @param {ai_tts_voiceDeleteArgs} args - Arguments to delete one Ai_tts_voice.
     * @example
     * // Delete one Ai_tts_voice
     * const Ai_tts_voice = await prisma.ai_tts_voice.delete({
     *   where: {
     *     // ... filter to delete one Ai_tts_voice
     *   }
     * })
     * 
    **/
    delete<T extends ai_tts_voiceDeleteArgs>(
      args: SelectSubset<T, ai_tts_voiceDeleteArgs>
    ): CheckSelect<T, Prisma__ai_tts_voiceClient<ai_tts_voice>, Prisma__ai_tts_voiceClient<ai_tts_voiceGetPayload<T>>>

    /**
     * Update one Ai_tts_voice.
     * @param {ai_tts_voiceUpdateArgs} args - Arguments to update one Ai_tts_voice.
     * @example
     * // Update one Ai_tts_voice
     * const ai_tts_voice = await prisma.ai_tts_voice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_tts_voiceUpdateArgs>(
      args: SelectSubset<T, ai_tts_voiceUpdateArgs>
    ): CheckSelect<T, Prisma__ai_tts_voiceClient<ai_tts_voice>, Prisma__ai_tts_voiceClient<ai_tts_voiceGetPayload<T>>>

    /**
     * Delete zero or more Ai_tts_voices.
     * @param {ai_tts_voiceDeleteManyArgs} args - Arguments to filter Ai_tts_voices to delete.
     * @example
     * // Delete a few Ai_tts_voices
     * const { count } = await prisma.ai_tts_voice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_tts_voiceDeleteManyArgs>(
      args?: SelectSubset<T, ai_tts_voiceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_tts_voices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_tts_voiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_tts_voices
     * const ai_tts_voice = await prisma.ai_tts_voice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_tts_voiceUpdateManyArgs>(
      args: SelectSubset<T, ai_tts_voiceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_tts_voice.
     * @param {ai_tts_voiceUpsertArgs} args - Arguments to update or create a Ai_tts_voice.
     * @example
     * // Update or create a Ai_tts_voice
     * const ai_tts_voice = await prisma.ai_tts_voice.upsert({
     *   create: {
     *     // ... data to create a Ai_tts_voice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_tts_voice we want to update
     *   }
     * })
    **/
    upsert<T extends ai_tts_voiceUpsertArgs>(
      args: SelectSubset<T, ai_tts_voiceUpsertArgs>
    ): CheckSelect<T, Prisma__ai_tts_voiceClient<ai_tts_voice>, Prisma__ai_tts_voiceClient<ai_tts_voiceGetPayload<T>>>

    /**
     * Count the number of Ai_tts_voices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_tts_voiceCountArgs} args - Arguments to filter Ai_tts_voices to count.
     * @example
     * // Count the number of Ai_tts_voices
     * const count = await prisma.ai_tts_voice.count({
     *   where: {
     *     // ... the filter for the Ai_tts_voices we want to count
     *   }
     * })
    **/
    count<T extends ai_tts_voiceCountArgs>(
      args?: Subset<T, ai_tts_voiceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_tts_voiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_tts_voice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_tts_voiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_tts_voiceAggregateArgs>(args: Subset<T, Ai_tts_voiceAggregateArgs>): PrismaPromise<GetAi_tts_voiceAggregateType<T>>

    /**
     * Group by Ai_tts_voice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_tts_voiceGroupByArgs} args - Group by arguments.
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
      T extends Ai_tts_voiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_tts_voiceGroupByArgs['orderBy'] }
        : { orderBy?: Ai_tts_voiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_tts_voiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_tts_voiceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_tts_voice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_tts_voiceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_tts_voice findUnique
   */
  export type ai_tts_voiceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_tts_voice
     * 
    **/
    select?: ai_tts_voiceSelect | null
    /**
     * Throw an Error if a ai_tts_voice can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_tts_voice to fetch.
     * 
    **/
    where: ai_tts_voiceWhereUniqueInput
  }


  /**
   * ai_tts_voice findFirst
   */
  export type ai_tts_voiceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_tts_voice
     * 
    **/
    select?: ai_tts_voiceSelect | null
    /**
     * Throw an Error if a ai_tts_voice can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_tts_voice to fetch.
     * 
    **/
    where?: ai_tts_voiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_tts_voices to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_tts_voiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_tts_voices.
     * 
    **/
    cursor?: ai_tts_voiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_tts_voices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_tts_voices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_tts_voices.
     * 
    **/
    distinct?: Enumerable<Ai_tts_voiceScalarFieldEnum>
  }


  /**
   * ai_tts_voice findMany
   */
  export type ai_tts_voiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_tts_voice
     * 
    **/
    select?: ai_tts_voiceSelect | null
    /**
     * Filter, which ai_tts_voices to fetch.
     * 
    **/
    where?: ai_tts_voiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_tts_voices to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_tts_voiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_tts_voices.
     * 
    **/
    cursor?: ai_tts_voiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_tts_voices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_tts_voices.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_tts_voiceScalarFieldEnum>
  }


  /**
   * ai_tts_voice create
   */
  export type ai_tts_voiceCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_tts_voice
     * 
    **/
    select?: ai_tts_voiceSelect | null
    /**
     * The data needed to create a ai_tts_voice.
     * 
    **/
    data: XOR<ai_tts_voiceCreateInput, ai_tts_voiceUncheckedCreateInput>
  }


  /**
   * ai_tts_voice createMany
   */
  export type ai_tts_voiceCreateManyArgs = {
    /**
     * The data used to create many ai_tts_voices.
     * 
    **/
    data: Enumerable<ai_tts_voiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_tts_voice update
   */
  export type ai_tts_voiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_tts_voice
     * 
    **/
    select?: ai_tts_voiceSelect | null
    /**
     * The data needed to update a ai_tts_voice.
     * 
    **/
    data: XOR<ai_tts_voiceUpdateInput, ai_tts_voiceUncheckedUpdateInput>
    /**
     * Choose, which ai_tts_voice to update.
     * 
    **/
    where: ai_tts_voiceWhereUniqueInput
  }


  /**
   * ai_tts_voice updateMany
   */
  export type ai_tts_voiceUpdateManyArgs = {
    /**
     * The data used to update ai_tts_voices.
     * 
    **/
    data: XOR<ai_tts_voiceUpdateManyMutationInput, ai_tts_voiceUncheckedUpdateManyInput>
    /**
     * Filter which ai_tts_voices to update
     * 
    **/
    where?: ai_tts_voiceWhereInput
  }


  /**
   * ai_tts_voice upsert
   */
  export type ai_tts_voiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_tts_voice
     * 
    **/
    select?: ai_tts_voiceSelect | null
    /**
     * The filter to search for the ai_tts_voice to update in case it exists.
     * 
    **/
    where: ai_tts_voiceWhereUniqueInput
    /**
     * In case the ai_tts_voice found by the `where` argument doesn't exist, create a new ai_tts_voice with this data.
     * 
    **/
    create: XOR<ai_tts_voiceCreateInput, ai_tts_voiceUncheckedCreateInput>
    /**
     * In case the ai_tts_voice was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_tts_voiceUpdateInput, ai_tts_voiceUncheckedUpdateInput>
  }


  /**
   * ai_tts_voice delete
   */
  export type ai_tts_voiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_tts_voice
     * 
    **/
    select?: ai_tts_voiceSelect | null
    /**
     * Filter which ai_tts_voice to delete.
     * 
    **/
    where: ai_tts_voiceWhereUniqueInput
  }


  /**
   * ai_tts_voice deleteMany
   */
  export type ai_tts_voiceDeleteManyArgs = {
    /**
     * Filter which ai_tts_voices to delete
     * 
    **/
    where?: ai_tts_voiceWhereInput
  }


  /**
   * ai_tts_voice without action
   */
  export type ai_tts_voiceArgs = {
    /**
     * Select specific fields to fetch from the ai_tts_voice
     * 
    **/
    select?: ai_tts_voiceSelect | null
  }



  /**
   * Model ai_voiceprint
   */


  export type AggregateAi_voiceprint = {
    _count: Ai_voiceprintCountAggregateOutputType | null
    _avg: Ai_voiceprintAvgAggregateOutputType | null
    _sum: Ai_voiceprintSumAggregateOutputType | null
    _min: Ai_voiceprintMinAggregateOutputType | null
    _max: Ai_voiceprintMaxAggregateOutputType | null
  }

  export type Ai_voiceprintAvgAggregateOutputType = {
    user_id: number | null
    sort: number | null
    creator: number | null
    updater: number | null
  }

  export type Ai_voiceprintSumAggregateOutputType = {
    user_id: bigint | null
    sort: number | null
    creator: bigint | null
    updater: bigint | null
  }

  export type Ai_voiceprintMinAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: bigint | null
    agent_id: string | null
    agent_code: string | null
    agent_name: string | null
    description: string | null
    embedding: string | null
    memory: string | null
    sort: number | null
    creator: bigint | null
    created_at: Date | null
    updater: bigint | null
    updated_at: Date | null
  }

  export type Ai_voiceprintMaxAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: bigint | null
    agent_id: string | null
    agent_code: string | null
    agent_name: string | null
    description: string | null
    embedding: string | null
    memory: string | null
    sort: number | null
    creator: bigint | null
    created_at: Date | null
    updater: bigint | null
    updated_at: Date | null
  }

  export type Ai_voiceprintCountAggregateOutputType = {
    id: number
    name: number
    user_id: number
    agent_id: number
    agent_code: number
    agent_name: number
    description: number
    embedding: number
    memory: number
    sort: number
    creator: number
    created_at: number
    updater: number
    updated_at: number
    _all: number
  }


  export type Ai_voiceprintAvgAggregateInputType = {
    user_id?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_voiceprintSumAggregateInputType = {
    user_id?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Ai_voiceprintMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    agent_id?: true
    agent_code?: true
    agent_name?: true
    description?: true
    embedding?: true
    memory?: true
    sort?: true
    creator?: true
    created_at?: true
    updater?: true
    updated_at?: true
  }

  export type Ai_voiceprintMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    agent_id?: true
    agent_code?: true
    agent_name?: true
    description?: true
    embedding?: true
    memory?: true
    sort?: true
    creator?: true
    created_at?: true
    updater?: true
    updated_at?: true
  }

  export type Ai_voiceprintCountAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    agent_id?: true
    agent_code?: true
    agent_name?: true
    description?: true
    embedding?: true
    memory?: true
    sort?: true
    creator?: true
    created_at?: true
    updater?: true
    updated_at?: true
    _all?: true
  }

  export type Ai_voiceprintAggregateArgs = {
    /**
     * Filter which ai_voiceprint to aggregate.
     * 
    **/
    where?: ai_voiceprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_voiceprints to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_voiceprintOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ai_voiceprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_voiceprints from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_voiceprints.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_voiceprints
    **/
    _count?: true | Ai_voiceprintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_voiceprintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_voiceprintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_voiceprintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_voiceprintMaxAggregateInputType
  }

  export type GetAi_voiceprintAggregateType<T extends Ai_voiceprintAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_voiceprint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_voiceprint[P]>
      : GetScalarType<T[P], AggregateAi_voiceprint[P]>
  }




  export type Ai_voiceprintGroupByArgs = {
    where?: ai_voiceprintWhereInput
    orderBy?: Enumerable<ai_voiceprintOrderByWithAggregationInput>
    by: Array<Ai_voiceprintScalarFieldEnum>
    having?: ai_voiceprintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_voiceprintCountAggregateInputType | true
    _avg?: Ai_voiceprintAvgAggregateInputType
    _sum?: Ai_voiceprintSumAggregateInputType
    _min?: Ai_voiceprintMinAggregateInputType
    _max?: Ai_voiceprintMaxAggregateInputType
  }


  export type Ai_voiceprintGroupByOutputType = {
    id: string
    name: string | null
    user_id: bigint | null
    agent_id: string | null
    agent_code: string | null
    agent_name: string | null
    description: string | null
    embedding: string | null
    memory: string | null
    sort: number | null
    creator: bigint | null
    created_at: Date | null
    updater: bigint | null
    updated_at: Date | null
    _count: Ai_voiceprintCountAggregateOutputType | null
    _avg: Ai_voiceprintAvgAggregateOutputType | null
    _sum: Ai_voiceprintSumAggregateOutputType | null
    _min: Ai_voiceprintMinAggregateOutputType | null
    _max: Ai_voiceprintMaxAggregateOutputType | null
  }

  type GetAi_voiceprintGroupByPayload<T extends Ai_voiceprintGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ai_voiceprintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_voiceprintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_voiceprintGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_voiceprintGroupByOutputType[P]>
        }
      >
    >


  export type ai_voiceprintSelect = {
    id?: boolean
    name?: boolean
    user_id?: boolean
    agent_id?: boolean
    agent_code?: boolean
    agent_name?: boolean
    description?: boolean
    embedding?: boolean
    memory?: boolean
    sort?: boolean
    creator?: boolean
    created_at?: boolean
    updater?: boolean
    updated_at?: boolean
  }

  export type ai_voiceprintGetPayload<
    S extends boolean | null | undefined | ai_voiceprintArgs,
    U = keyof S
      > = S extends true
        ? ai_voiceprint
    : S extends undefined
    ? never
    : S extends ai_voiceprintArgs | ai_voiceprintFindManyArgs
    ?'include' extends U
    ? ai_voiceprint 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ai_voiceprint ? ai_voiceprint[P] : never
  } 
    : ai_voiceprint
  : ai_voiceprint


  type ai_voiceprintCountArgs = Merge<
    Omit<ai_voiceprintFindManyArgs, 'select' | 'include'> & {
      select?: Ai_voiceprintCountAggregateInputType | true
    }
  >

  export interface ai_voiceprintDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ai_voiceprint that matches the filter.
     * @param {ai_voiceprintFindUniqueArgs} args - Arguments to find a Ai_voiceprint
     * @example
     * // Get one Ai_voiceprint
     * const ai_voiceprint = await prisma.ai_voiceprint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ai_voiceprintFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ai_voiceprintFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ai_voiceprint'> extends True ? CheckSelect<T, Prisma__ai_voiceprintClient<ai_voiceprint>, Prisma__ai_voiceprintClient<ai_voiceprintGetPayload<T>>> : CheckSelect<T, Prisma__ai_voiceprintClient<ai_voiceprint | null >, Prisma__ai_voiceprintClient<ai_voiceprintGetPayload<T> | null >>

    /**
     * Find the first Ai_voiceprint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_voiceprintFindFirstArgs} args - Arguments to find a Ai_voiceprint
     * @example
     * // Get one Ai_voiceprint
     * const ai_voiceprint = await prisma.ai_voiceprint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ai_voiceprintFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ai_voiceprintFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ai_voiceprint'> extends True ? CheckSelect<T, Prisma__ai_voiceprintClient<ai_voiceprint>, Prisma__ai_voiceprintClient<ai_voiceprintGetPayload<T>>> : CheckSelect<T, Prisma__ai_voiceprintClient<ai_voiceprint | null >, Prisma__ai_voiceprintClient<ai_voiceprintGetPayload<T> | null >>

    /**
     * Find zero or more Ai_voiceprints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_voiceprintFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_voiceprints
     * const ai_voiceprints = await prisma.ai_voiceprint.findMany()
     * 
     * // Get first 10 Ai_voiceprints
     * const ai_voiceprints = await prisma.ai_voiceprint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_voiceprintWithIdOnly = await prisma.ai_voiceprint.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ai_voiceprintFindManyArgs>(
      args?: SelectSubset<T, ai_voiceprintFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ai_voiceprint>>, PrismaPromise<Array<ai_voiceprintGetPayload<T>>>>

    /**
     * Create a Ai_voiceprint.
     * @param {ai_voiceprintCreateArgs} args - Arguments to create a Ai_voiceprint.
     * @example
     * // Create one Ai_voiceprint
     * const Ai_voiceprint = await prisma.ai_voiceprint.create({
     *   data: {
     *     // ... data to create a Ai_voiceprint
     *   }
     * })
     * 
    **/
    create<T extends ai_voiceprintCreateArgs>(
      args: SelectSubset<T, ai_voiceprintCreateArgs>
    ): CheckSelect<T, Prisma__ai_voiceprintClient<ai_voiceprint>, Prisma__ai_voiceprintClient<ai_voiceprintGetPayload<T>>>

    /**
     * Create many Ai_voiceprints.
     *     @param {ai_voiceprintCreateManyArgs} args - Arguments to create many Ai_voiceprints.
     *     @example
     *     // Create many Ai_voiceprints
     *     const ai_voiceprint = await prisma.ai_voiceprint.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ai_voiceprintCreateManyArgs>(
      args?: SelectSubset<T, ai_voiceprintCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_voiceprint.
     * @param {ai_voiceprintDeleteArgs} args - Arguments to delete one Ai_voiceprint.
     * @example
     * // Delete one Ai_voiceprint
     * const Ai_voiceprint = await prisma.ai_voiceprint.delete({
     *   where: {
     *     // ... filter to delete one Ai_voiceprint
     *   }
     * })
     * 
    **/
    delete<T extends ai_voiceprintDeleteArgs>(
      args: SelectSubset<T, ai_voiceprintDeleteArgs>
    ): CheckSelect<T, Prisma__ai_voiceprintClient<ai_voiceprint>, Prisma__ai_voiceprintClient<ai_voiceprintGetPayload<T>>>

    /**
     * Update one Ai_voiceprint.
     * @param {ai_voiceprintUpdateArgs} args - Arguments to update one Ai_voiceprint.
     * @example
     * // Update one Ai_voiceprint
     * const ai_voiceprint = await prisma.ai_voiceprint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ai_voiceprintUpdateArgs>(
      args: SelectSubset<T, ai_voiceprintUpdateArgs>
    ): CheckSelect<T, Prisma__ai_voiceprintClient<ai_voiceprint>, Prisma__ai_voiceprintClient<ai_voiceprintGetPayload<T>>>

    /**
     * Delete zero or more Ai_voiceprints.
     * @param {ai_voiceprintDeleteManyArgs} args - Arguments to filter Ai_voiceprints to delete.
     * @example
     * // Delete a few Ai_voiceprints
     * const { count } = await prisma.ai_voiceprint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ai_voiceprintDeleteManyArgs>(
      args?: SelectSubset<T, ai_voiceprintDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_voiceprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_voiceprintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_voiceprints
     * const ai_voiceprint = await prisma.ai_voiceprint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ai_voiceprintUpdateManyArgs>(
      args: SelectSubset<T, ai_voiceprintUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_voiceprint.
     * @param {ai_voiceprintUpsertArgs} args - Arguments to update or create a Ai_voiceprint.
     * @example
     * // Update or create a Ai_voiceprint
     * const ai_voiceprint = await prisma.ai_voiceprint.upsert({
     *   create: {
     *     // ... data to create a Ai_voiceprint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_voiceprint we want to update
     *   }
     * })
    **/
    upsert<T extends ai_voiceprintUpsertArgs>(
      args: SelectSubset<T, ai_voiceprintUpsertArgs>
    ): CheckSelect<T, Prisma__ai_voiceprintClient<ai_voiceprint>, Prisma__ai_voiceprintClient<ai_voiceprintGetPayload<T>>>

    /**
     * Count the number of Ai_voiceprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_voiceprintCountArgs} args - Arguments to filter Ai_voiceprints to count.
     * @example
     * // Count the number of Ai_voiceprints
     * const count = await prisma.ai_voiceprint.count({
     *   where: {
     *     // ... the filter for the Ai_voiceprints we want to count
     *   }
     * })
    **/
    count<T extends ai_voiceprintCountArgs>(
      args?: Subset<T, ai_voiceprintCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_voiceprintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_voiceprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_voiceprintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_voiceprintAggregateArgs>(args: Subset<T, Ai_voiceprintAggregateArgs>): PrismaPromise<GetAi_voiceprintAggregateType<T>>

    /**
     * Group by Ai_voiceprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_voiceprintGroupByArgs} args - Group by arguments.
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
      T extends Ai_voiceprintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_voiceprintGroupByArgs['orderBy'] }
        : { orderBy?: Ai_voiceprintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ai_voiceprintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_voiceprintGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_voiceprint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ai_voiceprintClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ai_voiceprint findUnique
   */
  export type ai_voiceprintFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ai_voiceprint
     * 
    **/
    select?: ai_voiceprintSelect | null
    /**
     * Throw an Error if a ai_voiceprint can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_voiceprint to fetch.
     * 
    **/
    where: ai_voiceprintWhereUniqueInput
  }


  /**
   * ai_voiceprint findFirst
   */
  export type ai_voiceprintFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ai_voiceprint
     * 
    **/
    select?: ai_voiceprintSelect | null
    /**
     * Throw an Error if a ai_voiceprint can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ai_voiceprint to fetch.
     * 
    **/
    where?: ai_voiceprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_voiceprints to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_voiceprintOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_voiceprints.
     * 
    **/
    cursor?: ai_voiceprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_voiceprints from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_voiceprints.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_voiceprints.
     * 
    **/
    distinct?: Enumerable<Ai_voiceprintScalarFieldEnum>
  }


  /**
   * ai_voiceprint findMany
   */
  export type ai_voiceprintFindManyArgs = {
    /**
     * Select specific fields to fetch from the ai_voiceprint
     * 
    **/
    select?: ai_voiceprintSelect | null
    /**
     * Filter, which ai_voiceprints to fetch.
     * 
    **/
    where?: ai_voiceprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_voiceprints to fetch.
     * 
    **/
    orderBy?: Enumerable<ai_voiceprintOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_voiceprints.
     * 
    **/
    cursor?: ai_voiceprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_voiceprints from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_voiceprints.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ai_voiceprintScalarFieldEnum>
  }


  /**
   * ai_voiceprint create
   */
  export type ai_voiceprintCreateArgs = {
    /**
     * Select specific fields to fetch from the ai_voiceprint
     * 
    **/
    select?: ai_voiceprintSelect | null
    /**
     * The data needed to create a ai_voiceprint.
     * 
    **/
    data: XOR<ai_voiceprintCreateInput, ai_voiceprintUncheckedCreateInput>
  }


  /**
   * ai_voiceprint createMany
   */
  export type ai_voiceprintCreateManyArgs = {
    /**
     * The data used to create many ai_voiceprints.
     * 
    **/
    data: Enumerable<ai_voiceprintCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ai_voiceprint update
   */
  export type ai_voiceprintUpdateArgs = {
    /**
     * Select specific fields to fetch from the ai_voiceprint
     * 
    **/
    select?: ai_voiceprintSelect | null
    /**
     * The data needed to update a ai_voiceprint.
     * 
    **/
    data: XOR<ai_voiceprintUpdateInput, ai_voiceprintUncheckedUpdateInput>
    /**
     * Choose, which ai_voiceprint to update.
     * 
    **/
    where: ai_voiceprintWhereUniqueInput
  }


  /**
   * ai_voiceprint updateMany
   */
  export type ai_voiceprintUpdateManyArgs = {
    /**
     * The data used to update ai_voiceprints.
     * 
    **/
    data: XOR<ai_voiceprintUpdateManyMutationInput, ai_voiceprintUncheckedUpdateManyInput>
    /**
     * Filter which ai_voiceprints to update
     * 
    **/
    where?: ai_voiceprintWhereInput
  }


  /**
   * ai_voiceprint upsert
   */
  export type ai_voiceprintUpsertArgs = {
    /**
     * Select specific fields to fetch from the ai_voiceprint
     * 
    **/
    select?: ai_voiceprintSelect | null
    /**
     * The filter to search for the ai_voiceprint to update in case it exists.
     * 
    **/
    where: ai_voiceprintWhereUniqueInput
    /**
     * In case the ai_voiceprint found by the `where` argument doesn't exist, create a new ai_voiceprint with this data.
     * 
    **/
    create: XOR<ai_voiceprintCreateInput, ai_voiceprintUncheckedCreateInput>
    /**
     * In case the ai_voiceprint was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ai_voiceprintUpdateInput, ai_voiceprintUncheckedUpdateInput>
  }


  /**
   * ai_voiceprint delete
   */
  export type ai_voiceprintDeleteArgs = {
    /**
     * Select specific fields to fetch from the ai_voiceprint
     * 
    **/
    select?: ai_voiceprintSelect | null
    /**
     * Filter which ai_voiceprint to delete.
     * 
    **/
    where: ai_voiceprintWhereUniqueInput
  }


  /**
   * ai_voiceprint deleteMany
   */
  export type ai_voiceprintDeleteManyArgs = {
    /**
     * Filter which ai_voiceprints to delete
     * 
    **/
    where?: ai_voiceprintWhereInput
  }


  /**
   * ai_voiceprint without action
   */
  export type ai_voiceprintArgs = {
    /**
     * Select specific fields to fetch from the ai_voiceprint
     * 
    **/
    select?: ai_voiceprintSelect | null
  }



  /**
   * Model sys_dict_data
   */


  export type AggregateSys_dict_data = {
    _count: Sys_dict_dataCountAggregateOutputType | null
    _avg: Sys_dict_dataAvgAggregateOutputType | null
    _sum: Sys_dict_dataSumAggregateOutputType | null
    _min: Sys_dict_dataMinAggregateOutputType | null
    _max: Sys_dict_dataMaxAggregateOutputType | null
  }

  export type Sys_dict_dataAvgAggregateOutputType = {
    id: number | null
    dict_type_id: number | null
    sort: number | null
    creator: number | null
    updater: number | null
  }

  export type Sys_dict_dataSumAggregateOutputType = {
    id: bigint | null
    dict_type_id: bigint | null
    sort: number | null
    creator: bigint | null
    updater: bigint | null
  }

  export type Sys_dict_dataMinAggregateOutputType = {
    id: bigint | null
    dict_type_id: bigint | null
    dict_label: string | null
    dict_value: string | null
    remark: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Sys_dict_dataMaxAggregateOutputType = {
    id: bigint | null
    dict_type_id: bigint | null
    dict_label: string | null
    dict_value: string | null
    remark: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Sys_dict_dataCountAggregateOutputType = {
    id: number
    dict_type_id: number
    dict_label: number
    dict_value: number
    remark: number
    sort: number
    creator: number
    create_date: number
    updater: number
    update_date: number
    _all: number
  }


  export type Sys_dict_dataAvgAggregateInputType = {
    id?: true
    dict_type_id?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Sys_dict_dataSumAggregateInputType = {
    id?: true
    dict_type_id?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Sys_dict_dataMinAggregateInputType = {
    id?: true
    dict_type_id?: true
    dict_label?: true
    dict_value?: true
    remark?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Sys_dict_dataMaxAggregateInputType = {
    id?: true
    dict_type_id?: true
    dict_label?: true
    dict_value?: true
    remark?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Sys_dict_dataCountAggregateInputType = {
    id?: true
    dict_type_id?: true
    dict_label?: true
    dict_value?: true
    remark?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
    _all?: true
  }

  export type Sys_dict_dataAggregateArgs = {
    /**
     * Filter which sys_dict_data to aggregate.
     * 
    **/
    where?: sys_dict_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dict_data to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_dict_dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: sys_dict_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dict_data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dict_data.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_dict_data
    **/
    _count?: true | Sys_dict_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_dict_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_dict_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_dict_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_dict_dataMaxAggregateInputType
  }

  export type GetSys_dict_dataAggregateType<T extends Sys_dict_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_dict_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_dict_data[P]>
      : GetScalarType<T[P], AggregateSys_dict_data[P]>
  }




  export type Sys_dict_dataGroupByArgs = {
    where?: sys_dict_dataWhereInput
    orderBy?: Enumerable<sys_dict_dataOrderByWithAggregationInput>
    by: Array<Sys_dict_dataScalarFieldEnum>
    having?: sys_dict_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_dict_dataCountAggregateInputType | true
    _avg?: Sys_dict_dataAvgAggregateInputType
    _sum?: Sys_dict_dataSumAggregateInputType
    _min?: Sys_dict_dataMinAggregateInputType
    _max?: Sys_dict_dataMaxAggregateInputType
  }


  export type Sys_dict_dataGroupByOutputType = {
    id: bigint
    dict_type_id: bigint
    dict_label: string
    dict_value: string | null
    remark: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
    _count: Sys_dict_dataCountAggregateOutputType | null
    _avg: Sys_dict_dataAvgAggregateOutputType | null
    _sum: Sys_dict_dataSumAggregateOutputType | null
    _min: Sys_dict_dataMinAggregateOutputType | null
    _max: Sys_dict_dataMaxAggregateOutputType | null
  }

  type GetSys_dict_dataGroupByPayload<T extends Sys_dict_dataGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Sys_dict_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_dict_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_dict_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_dict_dataGroupByOutputType[P]>
        }
      >
    >


  export type sys_dict_dataSelect = {
    id?: boolean
    dict_type_id?: boolean
    dict_label?: boolean
    dict_value?: boolean
    remark?: boolean
    sort?: boolean
    creator?: boolean
    create_date?: boolean
    updater?: boolean
    update_date?: boolean
  }

  export type sys_dict_dataGetPayload<
    S extends boolean | null | undefined | sys_dict_dataArgs,
    U = keyof S
      > = S extends true
        ? sys_dict_data
    : S extends undefined
    ? never
    : S extends sys_dict_dataArgs | sys_dict_dataFindManyArgs
    ?'include' extends U
    ? sys_dict_data 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof sys_dict_data ? sys_dict_data[P] : never
  } 
    : sys_dict_data
  : sys_dict_data


  type sys_dict_dataCountArgs = Merge<
    Omit<sys_dict_dataFindManyArgs, 'select' | 'include'> & {
      select?: Sys_dict_dataCountAggregateInputType | true
    }
  >

  export interface sys_dict_dataDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Sys_dict_data that matches the filter.
     * @param {sys_dict_dataFindUniqueArgs} args - Arguments to find a Sys_dict_data
     * @example
     * // Get one Sys_dict_data
     * const sys_dict_data = await prisma.sys_dict_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sys_dict_dataFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, sys_dict_dataFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'sys_dict_data'> extends True ? CheckSelect<T, Prisma__sys_dict_dataClient<sys_dict_data>, Prisma__sys_dict_dataClient<sys_dict_dataGetPayload<T>>> : CheckSelect<T, Prisma__sys_dict_dataClient<sys_dict_data | null >, Prisma__sys_dict_dataClient<sys_dict_dataGetPayload<T> | null >>

    /**
     * Find the first Sys_dict_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_dataFindFirstArgs} args - Arguments to find a Sys_dict_data
     * @example
     * // Get one Sys_dict_data
     * const sys_dict_data = await prisma.sys_dict_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sys_dict_dataFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, sys_dict_dataFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'sys_dict_data'> extends True ? CheckSelect<T, Prisma__sys_dict_dataClient<sys_dict_data>, Prisma__sys_dict_dataClient<sys_dict_dataGetPayload<T>>> : CheckSelect<T, Prisma__sys_dict_dataClient<sys_dict_data | null >, Prisma__sys_dict_dataClient<sys_dict_dataGetPayload<T> | null >>

    /**
     * Find zero or more Sys_dict_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_dataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_dict_data
     * const sys_dict_data = await prisma.sys_dict_data.findMany()
     * 
     * // Get first 10 Sys_dict_data
     * const sys_dict_data = await prisma.sys_dict_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_dict_dataWithIdOnly = await prisma.sys_dict_data.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sys_dict_dataFindManyArgs>(
      args?: SelectSubset<T, sys_dict_dataFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<sys_dict_data>>, PrismaPromise<Array<sys_dict_dataGetPayload<T>>>>

    /**
     * Create a Sys_dict_data.
     * @param {sys_dict_dataCreateArgs} args - Arguments to create a Sys_dict_data.
     * @example
     * // Create one Sys_dict_data
     * const Sys_dict_data = await prisma.sys_dict_data.create({
     *   data: {
     *     // ... data to create a Sys_dict_data
     *   }
     * })
     * 
    **/
    create<T extends sys_dict_dataCreateArgs>(
      args: SelectSubset<T, sys_dict_dataCreateArgs>
    ): CheckSelect<T, Prisma__sys_dict_dataClient<sys_dict_data>, Prisma__sys_dict_dataClient<sys_dict_dataGetPayload<T>>>

    /**
     * Create many Sys_dict_data.
     *     @param {sys_dict_dataCreateManyArgs} args - Arguments to create many Sys_dict_data.
     *     @example
     *     // Create many Sys_dict_data
     *     const sys_dict_data = await prisma.sys_dict_data.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sys_dict_dataCreateManyArgs>(
      args?: SelectSubset<T, sys_dict_dataCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_dict_data.
     * @param {sys_dict_dataDeleteArgs} args - Arguments to delete one Sys_dict_data.
     * @example
     * // Delete one Sys_dict_data
     * const Sys_dict_data = await prisma.sys_dict_data.delete({
     *   where: {
     *     // ... filter to delete one Sys_dict_data
     *   }
     * })
     * 
    **/
    delete<T extends sys_dict_dataDeleteArgs>(
      args: SelectSubset<T, sys_dict_dataDeleteArgs>
    ): CheckSelect<T, Prisma__sys_dict_dataClient<sys_dict_data>, Prisma__sys_dict_dataClient<sys_dict_dataGetPayload<T>>>

    /**
     * Update one Sys_dict_data.
     * @param {sys_dict_dataUpdateArgs} args - Arguments to update one Sys_dict_data.
     * @example
     * // Update one Sys_dict_data
     * const sys_dict_data = await prisma.sys_dict_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sys_dict_dataUpdateArgs>(
      args: SelectSubset<T, sys_dict_dataUpdateArgs>
    ): CheckSelect<T, Prisma__sys_dict_dataClient<sys_dict_data>, Prisma__sys_dict_dataClient<sys_dict_dataGetPayload<T>>>

    /**
     * Delete zero or more Sys_dict_data.
     * @param {sys_dict_dataDeleteManyArgs} args - Arguments to filter Sys_dict_data to delete.
     * @example
     * // Delete a few Sys_dict_data
     * const { count } = await prisma.sys_dict_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sys_dict_dataDeleteManyArgs>(
      args?: SelectSubset<T, sys_dict_dataDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_dict_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_dict_data
     * const sys_dict_data = await prisma.sys_dict_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sys_dict_dataUpdateManyArgs>(
      args: SelectSubset<T, sys_dict_dataUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_dict_data.
     * @param {sys_dict_dataUpsertArgs} args - Arguments to update or create a Sys_dict_data.
     * @example
     * // Update or create a Sys_dict_data
     * const sys_dict_data = await prisma.sys_dict_data.upsert({
     *   create: {
     *     // ... data to create a Sys_dict_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_dict_data we want to update
     *   }
     * })
    **/
    upsert<T extends sys_dict_dataUpsertArgs>(
      args: SelectSubset<T, sys_dict_dataUpsertArgs>
    ): CheckSelect<T, Prisma__sys_dict_dataClient<sys_dict_data>, Prisma__sys_dict_dataClient<sys_dict_dataGetPayload<T>>>

    /**
     * Count the number of Sys_dict_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_dataCountArgs} args - Arguments to filter Sys_dict_data to count.
     * @example
     * // Count the number of Sys_dict_data
     * const count = await prisma.sys_dict_data.count({
     *   where: {
     *     // ... the filter for the Sys_dict_data we want to count
     *   }
     * })
    **/
    count<T extends sys_dict_dataCountArgs>(
      args?: Subset<T, sys_dict_dataCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_dict_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_dict_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_dict_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sys_dict_dataAggregateArgs>(args: Subset<T, Sys_dict_dataAggregateArgs>): PrismaPromise<GetSys_dict_dataAggregateType<T>>

    /**
     * Group by Sys_dict_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_dict_dataGroupByArgs} args - Group by arguments.
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
      T extends Sys_dict_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sys_dict_dataGroupByArgs['orderBy'] }
        : { orderBy?: Sys_dict_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Sys_dict_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_dict_dataGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_dict_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__sys_dict_dataClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * sys_dict_data findUnique
   */
  export type sys_dict_dataFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_data
     * 
    **/
    select?: sys_dict_dataSelect | null
    /**
     * Throw an Error if a sys_dict_data can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which sys_dict_data to fetch.
     * 
    **/
    where: sys_dict_dataWhereUniqueInput
  }


  /**
   * sys_dict_data findFirst
   */
  export type sys_dict_dataFindFirstArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_data
     * 
    **/
    select?: sys_dict_dataSelect | null
    /**
     * Throw an Error if a sys_dict_data can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which sys_dict_data to fetch.
     * 
    **/
    where?: sys_dict_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dict_data to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_dict_dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_dict_data.
     * 
    **/
    cursor?: sys_dict_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dict_data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dict_data.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_dict_data.
     * 
    **/
    distinct?: Enumerable<Sys_dict_dataScalarFieldEnum>
  }


  /**
   * sys_dict_data findMany
   */
  export type sys_dict_dataFindManyArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_data
     * 
    **/
    select?: sys_dict_dataSelect | null
    /**
     * Filter, which sys_dict_data to fetch.
     * 
    **/
    where?: sys_dict_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dict_data to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_dict_dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_dict_data.
     * 
    **/
    cursor?: sys_dict_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dict_data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dict_data.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Sys_dict_dataScalarFieldEnum>
  }


  /**
   * sys_dict_data create
   */
  export type sys_dict_dataCreateArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_data
     * 
    **/
    select?: sys_dict_dataSelect | null
    /**
     * The data needed to create a sys_dict_data.
     * 
    **/
    data: XOR<sys_dict_dataCreateInput, sys_dict_dataUncheckedCreateInput>
  }


  /**
   * sys_dict_data createMany
   */
  export type sys_dict_dataCreateManyArgs = {
    /**
     * The data used to create many sys_dict_data.
     * 
    **/
    data: Enumerable<sys_dict_dataCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * sys_dict_data update
   */
  export type sys_dict_dataUpdateArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_data
     * 
    **/
    select?: sys_dict_dataSelect | null
    /**
     * The data needed to update a sys_dict_data.
     * 
    **/
    data: XOR<sys_dict_dataUpdateInput, sys_dict_dataUncheckedUpdateInput>
    /**
     * Choose, which sys_dict_data to update.
     * 
    **/
    where: sys_dict_dataWhereUniqueInput
  }


  /**
   * sys_dict_data updateMany
   */
  export type sys_dict_dataUpdateManyArgs = {
    /**
     * The data used to update sys_dict_data.
     * 
    **/
    data: XOR<sys_dict_dataUpdateManyMutationInput, sys_dict_dataUncheckedUpdateManyInput>
    /**
     * Filter which sys_dict_data to update
     * 
    **/
    where?: sys_dict_dataWhereInput
  }


  /**
   * sys_dict_data upsert
   */
  export type sys_dict_dataUpsertArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_data
     * 
    **/
    select?: sys_dict_dataSelect | null
    /**
     * The filter to search for the sys_dict_data to update in case it exists.
     * 
    **/
    where: sys_dict_dataWhereUniqueInput
    /**
     * In case the sys_dict_data found by the `where` argument doesn't exist, create a new sys_dict_data with this data.
     * 
    **/
    create: XOR<sys_dict_dataCreateInput, sys_dict_dataUncheckedCreateInput>
    /**
     * In case the sys_dict_data was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<sys_dict_dataUpdateInput, sys_dict_dataUncheckedUpdateInput>
  }


  /**
   * sys_dict_data delete
   */
  export type sys_dict_dataDeleteArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_data
     * 
    **/
    select?: sys_dict_dataSelect | null
    /**
     * Filter which sys_dict_data to delete.
     * 
    **/
    where: sys_dict_dataWhereUniqueInput
  }


  /**
   * sys_dict_data deleteMany
   */
  export type sys_dict_dataDeleteManyArgs = {
    /**
     * Filter which sys_dict_data to delete
     * 
    **/
    where?: sys_dict_dataWhereInput
  }


  /**
   * sys_dict_data without action
   */
  export type sys_dict_dataArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_data
     * 
    **/
    select?: sys_dict_dataSelect | null
  }



  /**
   * Model sys_dict_type
   */


  export type AggregateSys_dict_type = {
    _count: Sys_dict_typeCountAggregateOutputType | null
    _avg: Sys_dict_typeAvgAggregateOutputType | null
    _sum: Sys_dict_typeSumAggregateOutputType | null
    _min: Sys_dict_typeMinAggregateOutputType | null
    _max: Sys_dict_typeMaxAggregateOutputType | null
  }

  export type Sys_dict_typeAvgAggregateOutputType = {
    id: number | null
    sort: number | null
    creator: number | null
    updater: number | null
  }

  export type Sys_dict_typeSumAggregateOutputType = {
    id: bigint | null
    sort: number | null
    creator: bigint | null
    updater: bigint | null
  }

  export type Sys_dict_typeMinAggregateOutputType = {
    id: bigint | null
    dict_type: string | null
    dict_name: string | null
    remark: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Sys_dict_typeMaxAggregateOutputType = {
    id: bigint | null
    dict_type: string | null
    dict_name: string | null
    remark: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Sys_dict_typeCountAggregateOutputType = {
    id: number
    dict_type: number
    dict_name: number
    remark: number
    sort: number
    creator: number
    create_date: number
    updater: number
    update_date: number
    _all: number
  }


  export type Sys_dict_typeAvgAggregateInputType = {
    id?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Sys_dict_typeSumAggregateInputType = {
    id?: true
    sort?: true
    creator?: true
    updater?: true
  }

  export type Sys_dict_typeMinAggregateInputType = {
    id?: true
    dict_type?: true
    dict_name?: true
    remark?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Sys_dict_typeMaxAggregateInputType = {
    id?: true
    dict_type?: true
    dict_name?: true
    remark?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Sys_dict_typeCountAggregateInputType = {
    id?: true
    dict_type?: true
    dict_name?: true
    remark?: true
    sort?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
    _all?: true
  }

  export type Sys_dict_typeAggregateArgs = {
    /**
     * Filter which sys_dict_type to aggregate.
     * 
    **/
    where?: sys_dict_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dict_types to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_dict_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: sys_dict_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dict_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dict_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_dict_types
    **/
    _count?: true | Sys_dict_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_dict_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_dict_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_dict_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_dict_typeMaxAggregateInputType
  }

  export type GetSys_dict_typeAggregateType<T extends Sys_dict_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_dict_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_dict_type[P]>
      : GetScalarType<T[P], AggregateSys_dict_type[P]>
  }




  export type Sys_dict_typeGroupByArgs = {
    where?: sys_dict_typeWhereInput
    orderBy?: Enumerable<sys_dict_typeOrderByWithAggregationInput>
    by: Array<Sys_dict_typeScalarFieldEnum>
    having?: sys_dict_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_dict_typeCountAggregateInputType | true
    _avg?: Sys_dict_typeAvgAggregateInputType
    _sum?: Sys_dict_typeSumAggregateInputType
    _min?: Sys_dict_typeMinAggregateInputType
    _max?: Sys_dict_typeMaxAggregateInputType
  }


  export type Sys_dict_typeGroupByOutputType = {
    id: bigint
    dict_type: string
    dict_name: string
    remark: string | null
    sort: number | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
    _count: Sys_dict_typeCountAggregateOutputType | null
    _avg: Sys_dict_typeAvgAggregateOutputType | null
    _sum: Sys_dict_typeSumAggregateOutputType | null
    _min: Sys_dict_typeMinAggregateOutputType | null
    _max: Sys_dict_typeMaxAggregateOutputType | null
  }

  type GetSys_dict_typeGroupByPayload<T extends Sys_dict_typeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Sys_dict_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_dict_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_dict_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_dict_typeGroupByOutputType[P]>
        }
      >
    >


  export type sys_dict_typeSelect = {
    id?: boolean
    dict_type?: boolean
    dict_name?: boolean
    remark?: boolean
    sort?: boolean
    creator?: boolean
    create_date?: boolean
    updater?: boolean
    update_date?: boolean
  }

  export type sys_dict_typeGetPayload<
    S extends boolean | null | undefined | sys_dict_typeArgs,
    U = keyof S
      > = S extends true
        ? sys_dict_type
    : S extends undefined
    ? never
    : S extends sys_dict_typeArgs | sys_dict_typeFindManyArgs
    ?'include' extends U
    ? sys_dict_type 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof sys_dict_type ? sys_dict_type[P] : never
  } 
    : sys_dict_type
  : sys_dict_type


  type sys_dict_typeCountArgs = Merge<
    Omit<sys_dict_typeFindManyArgs, 'select' | 'include'> & {
      select?: Sys_dict_typeCountAggregateInputType | true
    }
  >

  export interface sys_dict_typeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Sys_dict_type that matches the filter.
     * @param {sys_dict_typeFindUniqueArgs} args - Arguments to find a Sys_dict_type
     * @example
     * // Get one Sys_dict_type
     * const sys_dict_type = await prisma.sys_dict_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sys_dict_typeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, sys_dict_typeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'sys_dict_type'> extends True ? CheckSelect<T, Prisma__sys_dict_typeClient<sys_dict_type>, Prisma__sys_dict_typeClient<sys_dict_typeGetPayload<T>>> : CheckSelect<T, Prisma__sys_dict_typeClient<sys_dict_type | null >, Prisma__sys_dict_typeClient<sys_dict_typeGetPayload<T> | null >>

    /**
     * Find the first Sys_dict_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_typeFindFirstArgs} args - Arguments to find a Sys_dict_type
     * @example
     * // Get one Sys_dict_type
     * const sys_dict_type = await prisma.sys_dict_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sys_dict_typeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, sys_dict_typeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'sys_dict_type'> extends True ? CheckSelect<T, Prisma__sys_dict_typeClient<sys_dict_type>, Prisma__sys_dict_typeClient<sys_dict_typeGetPayload<T>>> : CheckSelect<T, Prisma__sys_dict_typeClient<sys_dict_type | null >, Prisma__sys_dict_typeClient<sys_dict_typeGetPayload<T> | null >>

    /**
     * Find zero or more Sys_dict_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_typeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_dict_types
     * const sys_dict_types = await prisma.sys_dict_type.findMany()
     * 
     * // Get first 10 Sys_dict_types
     * const sys_dict_types = await prisma.sys_dict_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_dict_typeWithIdOnly = await prisma.sys_dict_type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sys_dict_typeFindManyArgs>(
      args?: SelectSubset<T, sys_dict_typeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<sys_dict_type>>, PrismaPromise<Array<sys_dict_typeGetPayload<T>>>>

    /**
     * Create a Sys_dict_type.
     * @param {sys_dict_typeCreateArgs} args - Arguments to create a Sys_dict_type.
     * @example
     * // Create one Sys_dict_type
     * const Sys_dict_type = await prisma.sys_dict_type.create({
     *   data: {
     *     // ... data to create a Sys_dict_type
     *   }
     * })
     * 
    **/
    create<T extends sys_dict_typeCreateArgs>(
      args: SelectSubset<T, sys_dict_typeCreateArgs>
    ): CheckSelect<T, Prisma__sys_dict_typeClient<sys_dict_type>, Prisma__sys_dict_typeClient<sys_dict_typeGetPayload<T>>>

    /**
     * Create many Sys_dict_types.
     *     @param {sys_dict_typeCreateManyArgs} args - Arguments to create many Sys_dict_types.
     *     @example
     *     // Create many Sys_dict_types
     *     const sys_dict_type = await prisma.sys_dict_type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sys_dict_typeCreateManyArgs>(
      args?: SelectSubset<T, sys_dict_typeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_dict_type.
     * @param {sys_dict_typeDeleteArgs} args - Arguments to delete one Sys_dict_type.
     * @example
     * // Delete one Sys_dict_type
     * const Sys_dict_type = await prisma.sys_dict_type.delete({
     *   where: {
     *     // ... filter to delete one Sys_dict_type
     *   }
     * })
     * 
    **/
    delete<T extends sys_dict_typeDeleteArgs>(
      args: SelectSubset<T, sys_dict_typeDeleteArgs>
    ): CheckSelect<T, Prisma__sys_dict_typeClient<sys_dict_type>, Prisma__sys_dict_typeClient<sys_dict_typeGetPayload<T>>>

    /**
     * Update one Sys_dict_type.
     * @param {sys_dict_typeUpdateArgs} args - Arguments to update one Sys_dict_type.
     * @example
     * // Update one Sys_dict_type
     * const sys_dict_type = await prisma.sys_dict_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sys_dict_typeUpdateArgs>(
      args: SelectSubset<T, sys_dict_typeUpdateArgs>
    ): CheckSelect<T, Prisma__sys_dict_typeClient<sys_dict_type>, Prisma__sys_dict_typeClient<sys_dict_typeGetPayload<T>>>

    /**
     * Delete zero or more Sys_dict_types.
     * @param {sys_dict_typeDeleteManyArgs} args - Arguments to filter Sys_dict_types to delete.
     * @example
     * // Delete a few Sys_dict_types
     * const { count } = await prisma.sys_dict_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sys_dict_typeDeleteManyArgs>(
      args?: SelectSubset<T, sys_dict_typeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_dict_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_dict_types
     * const sys_dict_type = await prisma.sys_dict_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sys_dict_typeUpdateManyArgs>(
      args: SelectSubset<T, sys_dict_typeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_dict_type.
     * @param {sys_dict_typeUpsertArgs} args - Arguments to update or create a Sys_dict_type.
     * @example
     * // Update or create a Sys_dict_type
     * const sys_dict_type = await prisma.sys_dict_type.upsert({
     *   create: {
     *     // ... data to create a Sys_dict_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_dict_type we want to update
     *   }
     * })
    **/
    upsert<T extends sys_dict_typeUpsertArgs>(
      args: SelectSubset<T, sys_dict_typeUpsertArgs>
    ): CheckSelect<T, Prisma__sys_dict_typeClient<sys_dict_type>, Prisma__sys_dict_typeClient<sys_dict_typeGetPayload<T>>>

    /**
     * Count the number of Sys_dict_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_typeCountArgs} args - Arguments to filter Sys_dict_types to count.
     * @example
     * // Count the number of Sys_dict_types
     * const count = await prisma.sys_dict_type.count({
     *   where: {
     *     // ... the filter for the Sys_dict_types we want to count
     *   }
     * })
    **/
    count<T extends sys_dict_typeCountArgs>(
      args?: Subset<T, sys_dict_typeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_dict_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_dict_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_dict_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sys_dict_typeAggregateArgs>(args: Subset<T, Sys_dict_typeAggregateArgs>): PrismaPromise<GetSys_dict_typeAggregateType<T>>

    /**
     * Group by Sys_dict_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_dict_typeGroupByArgs} args - Group by arguments.
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
      T extends Sys_dict_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sys_dict_typeGroupByArgs['orderBy'] }
        : { orderBy?: Sys_dict_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Sys_dict_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_dict_typeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_dict_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__sys_dict_typeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * sys_dict_type findUnique
   */
  export type sys_dict_typeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_type
     * 
    **/
    select?: sys_dict_typeSelect | null
    /**
     * Throw an Error if a sys_dict_type can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which sys_dict_type to fetch.
     * 
    **/
    where: sys_dict_typeWhereUniqueInput
  }


  /**
   * sys_dict_type findFirst
   */
  export type sys_dict_typeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_type
     * 
    **/
    select?: sys_dict_typeSelect | null
    /**
     * Throw an Error if a sys_dict_type can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which sys_dict_type to fetch.
     * 
    **/
    where?: sys_dict_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dict_types to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_dict_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_dict_types.
     * 
    **/
    cursor?: sys_dict_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dict_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dict_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_dict_types.
     * 
    **/
    distinct?: Enumerable<Sys_dict_typeScalarFieldEnum>
  }


  /**
   * sys_dict_type findMany
   */
  export type sys_dict_typeFindManyArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_type
     * 
    **/
    select?: sys_dict_typeSelect | null
    /**
     * Filter, which sys_dict_types to fetch.
     * 
    **/
    where?: sys_dict_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dict_types to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_dict_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_dict_types.
     * 
    **/
    cursor?: sys_dict_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dict_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dict_types.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Sys_dict_typeScalarFieldEnum>
  }


  /**
   * sys_dict_type create
   */
  export type sys_dict_typeCreateArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_type
     * 
    **/
    select?: sys_dict_typeSelect | null
    /**
     * The data needed to create a sys_dict_type.
     * 
    **/
    data: XOR<sys_dict_typeCreateInput, sys_dict_typeUncheckedCreateInput>
  }


  /**
   * sys_dict_type createMany
   */
  export type sys_dict_typeCreateManyArgs = {
    /**
     * The data used to create many sys_dict_types.
     * 
    **/
    data: Enumerable<sys_dict_typeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * sys_dict_type update
   */
  export type sys_dict_typeUpdateArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_type
     * 
    **/
    select?: sys_dict_typeSelect | null
    /**
     * The data needed to update a sys_dict_type.
     * 
    **/
    data: XOR<sys_dict_typeUpdateInput, sys_dict_typeUncheckedUpdateInput>
    /**
     * Choose, which sys_dict_type to update.
     * 
    **/
    where: sys_dict_typeWhereUniqueInput
  }


  /**
   * sys_dict_type updateMany
   */
  export type sys_dict_typeUpdateManyArgs = {
    /**
     * The data used to update sys_dict_types.
     * 
    **/
    data: XOR<sys_dict_typeUpdateManyMutationInput, sys_dict_typeUncheckedUpdateManyInput>
    /**
     * Filter which sys_dict_types to update
     * 
    **/
    where?: sys_dict_typeWhereInput
  }


  /**
   * sys_dict_type upsert
   */
  export type sys_dict_typeUpsertArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_type
     * 
    **/
    select?: sys_dict_typeSelect | null
    /**
     * The filter to search for the sys_dict_type to update in case it exists.
     * 
    **/
    where: sys_dict_typeWhereUniqueInput
    /**
     * In case the sys_dict_type found by the `where` argument doesn't exist, create a new sys_dict_type with this data.
     * 
    **/
    create: XOR<sys_dict_typeCreateInput, sys_dict_typeUncheckedCreateInput>
    /**
     * In case the sys_dict_type was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<sys_dict_typeUpdateInput, sys_dict_typeUncheckedUpdateInput>
  }


  /**
   * sys_dict_type delete
   */
  export type sys_dict_typeDeleteArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_type
     * 
    **/
    select?: sys_dict_typeSelect | null
    /**
     * Filter which sys_dict_type to delete.
     * 
    **/
    where: sys_dict_typeWhereUniqueInput
  }


  /**
   * sys_dict_type deleteMany
   */
  export type sys_dict_typeDeleteManyArgs = {
    /**
     * Filter which sys_dict_types to delete
     * 
    **/
    where?: sys_dict_typeWhereInput
  }


  /**
   * sys_dict_type without action
   */
  export type sys_dict_typeArgs = {
    /**
     * Select specific fields to fetch from the sys_dict_type
     * 
    **/
    select?: sys_dict_typeSelect | null
  }



  /**
   * Model sys_params
   */


  export type AggregateSys_params = {
    _count: Sys_paramsCountAggregateOutputType | null
    _avg: Sys_paramsAvgAggregateOutputType | null
    _sum: Sys_paramsSumAggregateOutputType | null
    _min: Sys_paramsMinAggregateOutputType | null
    _max: Sys_paramsMaxAggregateOutputType | null
  }

  export type Sys_paramsAvgAggregateOutputType = {
    id: number | null
    param_type: number | null
    creator: number | null
    updater: number | null
  }

  export type Sys_paramsSumAggregateOutputType = {
    id: bigint | null
    param_type: number | null
    creator: bigint | null
    updater: bigint | null
  }

  export type Sys_paramsMinAggregateOutputType = {
    id: bigint | null
    param_code: string | null
    param_value: string | null
    value_type: string | null
    param_type: number | null
    remark: string | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Sys_paramsMaxAggregateOutputType = {
    id: bigint | null
    param_code: string | null
    param_value: string | null
    value_type: string | null
    param_type: number | null
    remark: string | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
  }

  export type Sys_paramsCountAggregateOutputType = {
    id: number
    param_code: number
    param_value: number
    value_type: number
    param_type: number
    remark: number
    creator: number
    create_date: number
    updater: number
    update_date: number
    _all: number
  }


  export type Sys_paramsAvgAggregateInputType = {
    id?: true
    param_type?: true
    creator?: true
    updater?: true
  }

  export type Sys_paramsSumAggregateInputType = {
    id?: true
    param_type?: true
    creator?: true
    updater?: true
  }

  export type Sys_paramsMinAggregateInputType = {
    id?: true
    param_code?: true
    param_value?: true
    value_type?: true
    param_type?: true
    remark?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Sys_paramsMaxAggregateInputType = {
    id?: true
    param_code?: true
    param_value?: true
    value_type?: true
    param_type?: true
    remark?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
  }

  export type Sys_paramsCountAggregateInputType = {
    id?: true
    param_code?: true
    param_value?: true
    value_type?: true
    param_type?: true
    remark?: true
    creator?: true
    create_date?: true
    updater?: true
    update_date?: true
    _all?: true
  }

  export type Sys_paramsAggregateArgs = {
    /**
     * Filter which sys_params to aggregate.
     * 
    **/
    where?: sys_paramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_params to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_paramsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: sys_paramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_params from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_params.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_params
    **/
    _count?: true | Sys_paramsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_paramsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_paramsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_paramsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_paramsMaxAggregateInputType
  }

  export type GetSys_paramsAggregateType<T extends Sys_paramsAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_params]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_params[P]>
      : GetScalarType<T[P], AggregateSys_params[P]>
  }




  export type Sys_paramsGroupByArgs = {
    where?: sys_paramsWhereInput
    orderBy?: Enumerable<sys_paramsOrderByWithAggregationInput>
    by: Array<Sys_paramsScalarFieldEnum>
    having?: sys_paramsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_paramsCountAggregateInputType | true
    _avg?: Sys_paramsAvgAggregateInputType
    _sum?: Sys_paramsSumAggregateInputType
    _min?: Sys_paramsMinAggregateInputType
    _max?: Sys_paramsMaxAggregateInputType
  }


  export type Sys_paramsGroupByOutputType = {
    id: bigint
    param_code: string | null
    param_value: string | null
    value_type: string | null
    param_type: number | null
    remark: string | null
    creator: bigint | null
    create_date: Date | null
    updater: bigint | null
    update_date: Date | null
    _count: Sys_paramsCountAggregateOutputType | null
    _avg: Sys_paramsAvgAggregateOutputType | null
    _sum: Sys_paramsSumAggregateOutputType | null
    _min: Sys_paramsMinAggregateOutputType | null
    _max: Sys_paramsMaxAggregateOutputType | null
  }

  type GetSys_paramsGroupByPayload<T extends Sys_paramsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Sys_paramsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_paramsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_paramsGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_paramsGroupByOutputType[P]>
        }
      >
    >


  export type sys_paramsSelect = {
    id?: boolean
    param_code?: boolean
    param_value?: boolean
    value_type?: boolean
    param_type?: boolean
    remark?: boolean
    creator?: boolean
    create_date?: boolean
    updater?: boolean
    update_date?: boolean
  }

  export type sys_paramsGetPayload<
    S extends boolean | null | undefined | sys_paramsArgs,
    U = keyof S
      > = S extends true
        ? sys_params
    : S extends undefined
    ? never
    : S extends sys_paramsArgs | sys_paramsFindManyArgs
    ?'include' extends U
    ? sys_params 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof sys_params ? sys_params[P] : never
  } 
    : sys_params
  : sys_params


  type sys_paramsCountArgs = Merge<
    Omit<sys_paramsFindManyArgs, 'select' | 'include'> & {
      select?: Sys_paramsCountAggregateInputType | true
    }
  >

  export interface sys_paramsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Sys_params that matches the filter.
     * @param {sys_paramsFindUniqueArgs} args - Arguments to find a Sys_params
     * @example
     * // Get one Sys_params
     * const sys_params = await prisma.sys_params.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sys_paramsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, sys_paramsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'sys_params'> extends True ? CheckSelect<T, Prisma__sys_paramsClient<sys_params>, Prisma__sys_paramsClient<sys_paramsGetPayload<T>>> : CheckSelect<T, Prisma__sys_paramsClient<sys_params | null >, Prisma__sys_paramsClient<sys_paramsGetPayload<T> | null >>

    /**
     * Find the first Sys_params that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_paramsFindFirstArgs} args - Arguments to find a Sys_params
     * @example
     * // Get one Sys_params
     * const sys_params = await prisma.sys_params.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sys_paramsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, sys_paramsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'sys_params'> extends True ? CheckSelect<T, Prisma__sys_paramsClient<sys_params>, Prisma__sys_paramsClient<sys_paramsGetPayload<T>>> : CheckSelect<T, Prisma__sys_paramsClient<sys_params | null >, Prisma__sys_paramsClient<sys_paramsGetPayload<T> | null >>

    /**
     * Find zero or more Sys_params that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_paramsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_params
     * const sys_params = await prisma.sys_params.findMany()
     * 
     * // Get first 10 Sys_params
     * const sys_params = await prisma.sys_params.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_paramsWithIdOnly = await prisma.sys_params.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sys_paramsFindManyArgs>(
      args?: SelectSubset<T, sys_paramsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<sys_params>>, PrismaPromise<Array<sys_paramsGetPayload<T>>>>

    /**
     * Create a Sys_params.
     * @param {sys_paramsCreateArgs} args - Arguments to create a Sys_params.
     * @example
     * // Create one Sys_params
     * const Sys_params = await prisma.sys_params.create({
     *   data: {
     *     // ... data to create a Sys_params
     *   }
     * })
     * 
    **/
    create<T extends sys_paramsCreateArgs>(
      args: SelectSubset<T, sys_paramsCreateArgs>
    ): CheckSelect<T, Prisma__sys_paramsClient<sys_params>, Prisma__sys_paramsClient<sys_paramsGetPayload<T>>>

    /**
     * Create many Sys_params.
     *     @param {sys_paramsCreateManyArgs} args - Arguments to create many Sys_params.
     *     @example
     *     // Create many Sys_params
     *     const sys_params = await prisma.sys_params.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sys_paramsCreateManyArgs>(
      args?: SelectSubset<T, sys_paramsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_params.
     * @param {sys_paramsDeleteArgs} args - Arguments to delete one Sys_params.
     * @example
     * // Delete one Sys_params
     * const Sys_params = await prisma.sys_params.delete({
     *   where: {
     *     // ... filter to delete one Sys_params
     *   }
     * })
     * 
    **/
    delete<T extends sys_paramsDeleteArgs>(
      args: SelectSubset<T, sys_paramsDeleteArgs>
    ): CheckSelect<T, Prisma__sys_paramsClient<sys_params>, Prisma__sys_paramsClient<sys_paramsGetPayload<T>>>

    /**
     * Update one Sys_params.
     * @param {sys_paramsUpdateArgs} args - Arguments to update one Sys_params.
     * @example
     * // Update one Sys_params
     * const sys_params = await prisma.sys_params.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sys_paramsUpdateArgs>(
      args: SelectSubset<T, sys_paramsUpdateArgs>
    ): CheckSelect<T, Prisma__sys_paramsClient<sys_params>, Prisma__sys_paramsClient<sys_paramsGetPayload<T>>>

    /**
     * Delete zero or more Sys_params.
     * @param {sys_paramsDeleteManyArgs} args - Arguments to filter Sys_params to delete.
     * @example
     * // Delete a few Sys_params
     * const { count } = await prisma.sys_params.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sys_paramsDeleteManyArgs>(
      args?: SelectSubset<T, sys_paramsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_params.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_paramsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_params
     * const sys_params = await prisma.sys_params.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sys_paramsUpdateManyArgs>(
      args: SelectSubset<T, sys_paramsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_params.
     * @param {sys_paramsUpsertArgs} args - Arguments to update or create a Sys_params.
     * @example
     * // Update or create a Sys_params
     * const sys_params = await prisma.sys_params.upsert({
     *   create: {
     *     // ... data to create a Sys_params
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_params we want to update
     *   }
     * })
    **/
    upsert<T extends sys_paramsUpsertArgs>(
      args: SelectSubset<T, sys_paramsUpsertArgs>
    ): CheckSelect<T, Prisma__sys_paramsClient<sys_params>, Prisma__sys_paramsClient<sys_paramsGetPayload<T>>>

    /**
     * Count the number of Sys_params.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_paramsCountArgs} args - Arguments to filter Sys_params to count.
     * @example
     * // Count the number of Sys_params
     * const count = await prisma.sys_params.count({
     *   where: {
     *     // ... the filter for the Sys_params we want to count
     *   }
     * })
    **/
    count<T extends sys_paramsCountArgs>(
      args?: Subset<T, sys_paramsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_paramsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_params.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_paramsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sys_paramsAggregateArgs>(args: Subset<T, Sys_paramsAggregateArgs>): PrismaPromise<GetSys_paramsAggregateType<T>>

    /**
     * Group by Sys_params.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_paramsGroupByArgs} args - Group by arguments.
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
      T extends Sys_paramsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sys_paramsGroupByArgs['orderBy'] }
        : { orderBy?: Sys_paramsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Sys_paramsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_paramsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_params.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__sys_paramsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * sys_params findUnique
   */
  export type sys_paramsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the sys_params
     * 
    **/
    select?: sys_paramsSelect | null
    /**
     * Throw an Error if a sys_params can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which sys_params to fetch.
     * 
    **/
    where: sys_paramsWhereUniqueInput
  }


  /**
   * sys_params findFirst
   */
  export type sys_paramsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the sys_params
     * 
    **/
    select?: sys_paramsSelect | null
    /**
     * Throw an Error if a sys_params can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which sys_params to fetch.
     * 
    **/
    where?: sys_paramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_params to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_paramsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_params.
     * 
    **/
    cursor?: sys_paramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_params from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_params.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_params.
     * 
    **/
    distinct?: Enumerable<Sys_paramsScalarFieldEnum>
  }


  /**
   * sys_params findMany
   */
  export type sys_paramsFindManyArgs = {
    /**
     * Select specific fields to fetch from the sys_params
     * 
    **/
    select?: sys_paramsSelect | null
    /**
     * Filter, which sys_params to fetch.
     * 
    **/
    where?: sys_paramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_params to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_paramsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_params.
     * 
    **/
    cursor?: sys_paramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_params from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_params.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Sys_paramsScalarFieldEnum>
  }


  /**
   * sys_params create
   */
  export type sys_paramsCreateArgs = {
    /**
     * Select specific fields to fetch from the sys_params
     * 
    **/
    select?: sys_paramsSelect | null
    /**
     * The data needed to create a sys_params.
     * 
    **/
    data: XOR<sys_paramsCreateInput, sys_paramsUncheckedCreateInput>
  }


  /**
   * sys_params createMany
   */
  export type sys_paramsCreateManyArgs = {
    /**
     * The data used to create many sys_params.
     * 
    **/
    data: Enumerable<sys_paramsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * sys_params update
   */
  export type sys_paramsUpdateArgs = {
    /**
     * Select specific fields to fetch from the sys_params
     * 
    **/
    select?: sys_paramsSelect | null
    /**
     * The data needed to update a sys_params.
     * 
    **/
    data: XOR<sys_paramsUpdateInput, sys_paramsUncheckedUpdateInput>
    /**
     * Choose, which sys_params to update.
     * 
    **/
    where: sys_paramsWhereUniqueInput
  }


  /**
   * sys_params updateMany
   */
  export type sys_paramsUpdateManyArgs = {
    /**
     * The data used to update sys_params.
     * 
    **/
    data: XOR<sys_paramsUpdateManyMutationInput, sys_paramsUncheckedUpdateManyInput>
    /**
     * Filter which sys_params to update
     * 
    **/
    where?: sys_paramsWhereInput
  }


  /**
   * sys_params upsert
   */
  export type sys_paramsUpsertArgs = {
    /**
     * Select specific fields to fetch from the sys_params
     * 
    **/
    select?: sys_paramsSelect | null
    /**
     * The filter to search for the sys_params to update in case it exists.
     * 
    **/
    where: sys_paramsWhereUniqueInput
    /**
     * In case the sys_params found by the `where` argument doesn't exist, create a new sys_params with this data.
     * 
    **/
    create: XOR<sys_paramsCreateInput, sys_paramsUncheckedCreateInput>
    /**
     * In case the sys_params was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<sys_paramsUpdateInput, sys_paramsUncheckedUpdateInput>
  }


  /**
   * sys_params delete
   */
  export type sys_paramsDeleteArgs = {
    /**
     * Select specific fields to fetch from the sys_params
     * 
    **/
    select?: sys_paramsSelect | null
    /**
     * Filter which sys_params to delete.
     * 
    **/
    where: sys_paramsWhereUniqueInput
  }


  /**
   * sys_params deleteMany
   */
  export type sys_paramsDeleteManyArgs = {
    /**
     * Filter which sys_params to delete
     * 
    **/
    where?: sys_paramsWhereInput
  }


  /**
   * sys_params without action
   */
  export type sys_paramsArgs = {
    /**
     * Select specific fields to fetch from the sys_params
     * 
    **/
    select?: sys_paramsSelect | null
  }



  /**
   * Model sys_user
   */


  export type AggregateSys_user = {
    _count: Sys_userCountAggregateOutputType | null
    _avg: Sys_userAvgAggregateOutputType | null
    _sum: Sys_userSumAggregateOutputType | null
    _min: Sys_userMinAggregateOutputType | null
    _max: Sys_userMaxAggregateOutputType | null
  }

  export type Sys_userAvgAggregateOutputType = {
    id: number | null
    super_admin: number | null
    status: number | null
    updater: number | null
    creator: number | null
  }

  export type Sys_userSumAggregateOutputType = {
    id: bigint | null
    super_admin: number | null
    status: number | null
    updater: bigint | null
    creator: bigint | null
  }

  export type Sys_userMinAggregateOutputType = {
    id: bigint | null
    username: string | null
    password: string | null
    super_admin: number | null
    status: number | null
    create_date: Date | null
    updater: bigint | null
    creator: bigint | null
    update_date: Date | null
  }

  export type Sys_userMaxAggregateOutputType = {
    id: bigint | null
    username: string | null
    password: string | null
    super_admin: number | null
    status: number | null
    create_date: Date | null
    updater: bigint | null
    creator: bigint | null
    update_date: Date | null
  }

  export type Sys_userCountAggregateOutputType = {
    id: number
    username: number
    password: number
    super_admin: number
    status: number
    create_date: number
    updater: number
    creator: number
    update_date: number
    _all: number
  }


  export type Sys_userAvgAggregateInputType = {
    id?: true
    super_admin?: true
    status?: true
    updater?: true
    creator?: true
  }

  export type Sys_userSumAggregateInputType = {
    id?: true
    super_admin?: true
    status?: true
    updater?: true
    creator?: true
  }

  export type Sys_userMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    super_admin?: true
    status?: true
    create_date?: true
    updater?: true
    creator?: true
    update_date?: true
  }

  export type Sys_userMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    super_admin?: true
    status?: true
    create_date?: true
    updater?: true
    creator?: true
    update_date?: true
  }

  export type Sys_userCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    super_admin?: true
    status?: true
    create_date?: true
    updater?: true
    creator?: true
    update_date?: true
    _all?: true
  }

  export type Sys_userAggregateArgs = {
    /**
     * Filter which sys_user to aggregate.
     * 
    **/
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_users
    **/
    _count?: true | Sys_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_userMaxAggregateInputType
  }

  export type GetSys_userAggregateType<T extends Sys_userAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_user[P]>
      : GetScalarType<T[P], AggregateSys_user[P]>
  }




  export type Sys_userGroupByArgs = {
    where?: sys_userWhereInput
    orderBy?: Enumerable<sys_userOrderByWithAggregationInput>
    by: Array<Sys_userScalarFieldEnum>
    having?: sys_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_userCountAggregateInputType | true
    _avg?: Sys_userAvgAggregateInputType
    _sum?: Sys_userSumAggregateInputType
    _min?: Sys_userMinAggregateInputType
    _max?: Sys_userMaxAggregateInputType
  }


  export type Sys_userGroupByOutputType = {
    id: bigint
    username: string
    password: string | null
    super_admin: number | null
    status: number | null
    create_date: Date | null
    updater: bigint | null
    creator: bigint | null
    update_date: Date | null
    _count: Sys_userCountAggregateOutputType | null
    _avg: Sys_userAvgAggregateOutputType | null
    _sum: Sys_userSumAggregateOutputType | null
    _min: Sys_userMinAggregateOutputType | null
    _max: Sys_userMaxAggregateOutputType | null
  }

  type GetSys_userGroupByPayload<T extends Sys_userGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Sys_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_userGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_userGroupByOutputType[P]>
        }
      >
    >


  export type sys_userSelect = {
    id?: boolean
    username?: boolean
    password?: boolean
    super_admin?: boolean
    status?: boolean
    create_date?: boolean
    updater?: boolean
    creator?: boolean
    update_date?: boolean
  }

  export type sys_userGetPayload<
    S extends boolean | null | undefined | sys_userArgs,
    U = keyof S
      > = S extends true
        ? sys_user
    : S extends undefined
    ? never
    : S extends sys_userArgs | sys_userFindManyArgs
    ?'include' extends U
    ? sys_user 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof sys_user ? sys_user[P] : never
  } 
    : sys_user
  : sys_user


  type sys_userCountArgs = Merge<
    Omit<sys_userFindManyArgs, 'select' | 'include'> & {
      select?: Sys_userCountAggregateInputType | true
    }
  >

  export interface sys_userDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Sys_user that matches the filter.
     * @param {sys_userFindUniqueArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sys_userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, sys_userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'sys_user'> extends True ? CheckSelect<T, Prisma__sys_userClient<sys_user>, Prisma__sys_userClient<sys_userGetPayload<T>>> : CheckSelect<T, Prisma__sys_userClient<sys_user | null >, Prisma__sys_userClient<sys_userGetPayload<T> | null >>

    /**
     * Find the first Sys_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userFindFirstArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sys_userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, sys_userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'sys_user'> extends True ? CheckSelect<T, Prisma__sys_userClient<sys_user>, Prisma__sys_userClient<sys_userGetPayload<T>>> : CheckSelect<T, Prisma__sys_userClient<sys_user | null >, Prisma__sys_userClient<sys_userGetPayload<T> | null >>

    /**
     * Find zero or more Sys_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_users
     * const sys_users = await prisma.sys_user.findMany()
     * 
     * // Get first 10 Sys_users
     * const sys_users = await prisma.sys_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_userWithIdOnly = await prisma.sys_user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sys_userFindManyArgs>(
      args?: SelectSubset<T, sys_userFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<sys_user>>, PrismaPromise<Array<sys_userGetPayload<T>>>>

    /**
     * Create a Sys_user.
     * @param {sys_userCreateArgs} args - Arguments to create a Sys_user.
     * @example
     * // Create one Sys_user
     * const Sys_user = await prisma.sys_user.create({
     *   data: {
     *     // ... data to create a Sys_user
     *   }
     * })
     * 
    **/
    create<T extends sys_userCreateArgs>(
      args: SelectSubset<T, sys_userCreateArgs>
    ): CheckSelect<T, Prisma__sys_userClient<sys_user>, Prisma__sys_userClient<sys_userGetPayload<T>>>

    /**
     * Create many Sys_users.
     *     @param {sys_userCreateManyArgs} args - Arguments to create many Sys_users.
     *     @example
     *     // Create many Sys_users
     *     const sys_user = await prisma.sys_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sys_userCreateManyArgs>(
      args?: SelectSubset<T, sys_userCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_user.
     * @param {sys_userDeleteArgs} args - Arguments to delete one Sys_user.
     * @example
     * // Delete one Sys_user
     * const Sys_user = await prisma.sys_user.delete({
     *   where: {
     *     // ... filter to delete one Sys_user
     *   }
     * })
     * 
    **/
    delete<T extends sys_userDeleteArgs>(
      args: SelectSubset<T, sys_userDeleteArgs>
    ): CheckSelect<T, Prisma__sys_userClient<sys_user>, Prisma__sys_userClient<sys_userGetPayload<T>>>

    /**
     * Update one Sys_user.
     * @param {sys_userUpdateArgs} args - Arguments to update one Sys_user.
     * @example
     * // Update one Sys_user
     * const sys_user = await prisma.sys_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sys_userUpdateArgs>(
      args: SelectSubset<T, sys_userUpdateArgs>
    ): CheckSelect<T, Prisma__sys_userClient<sys_user>, Prisma__sys_userClient<sys_userGetPayload<T>>>

    /**
     * Delete zero or more Sys_users.
     * @param {sys_userDeleteManyArgs} args - Arguments to filter Sys_users to delete.
     * @example
     * // Delete a few Sys_users
     * const { count } = await prisma.sys_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sys_userDeleteManyArgs>(
      args?: SelectSubset<T, sys_userDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_users
     * const sys_user = await prisma.sys_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sys_userUpdateManyArgs>(
      args: SelectSubset<T, sys_userUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_user.
     * @param {sys_userUpsertArgs} args - Arguments to update or create a Sys_user.
     * @example
     * // Update or create a Sys_user
     * const sys_user = await prisma.sys_user.upsert({
     *   create: {
     *     // ... data to create a Sys_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_user we want to update
     *   }
     * })
    **/
    upsert<T extends sys_userUpsertArgs>(
      args: SelectSubset<T, sys_userUpsertArgs>
    ): CheckSelect<T, Prisma__sys_userClient<sys_user>, Prisma__sys_userClient<sys_userGetPayload<T>>>

    /**
     * Count the number of Sys_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userCountArgs} args - Arguments to filter Sys_users to count.
     * @example
     * // Count the number of Sys_users
     * const count = await prisma.sys_user.count({
     *   where: {
     *     // ... the filter for the Sys_users we want to count
     *   }
     * })
    **/
    count<T extends sys_userCountArgs>(
      args?: Subset<T, sys_userCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sys_userAggregateArgs>(args: Subset<T, Sys_userAggregateArgs>): PrismaPromise<GetSys_userAggregateType<T>>

    /**
     * Group by Sys_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_userGroupByArgs} args - Group by arguments.
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
      T extends Sys_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sys_userGroupByArgs['orderBy'] }
        : { orderBy?: Sys_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Sys_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_userGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__sys_userClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * sys_user findUnique
   */
  export type sys_userFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the sys_user
     * 
    **/
    select?: sys_userSelect | null
    /**
     * Throw an Error if a sys_user can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which sys_user to fetch.
     * 
    **/
    where: sys_userWhereUniqueInput
  }


  /**
   * sys_user findFirst
   */
  export type sys_userFindFirstArgs = {
    /**
     * Select specific fields to fetch from the sys_user
     * 
    **/
    select?: sys_userSelect | null
    /**
     * Throw an Error if a sys_user can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which sys_user to fetch.
     * 
    **/
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_users.
     * 
    **/
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_users.
     * 
    **/
    distinct?: Enumerable<Sys_userScalarFieldEnum>
  }


  /**
   * sys_user findMany
   */
  export type sys_userFindManyArgs = {
    /**
     * Select specific fields to fetch from the sys_user
     * 
    **/
    select?: sys_userSelect | null
    /**
     * Filter, which sys_users to fetch.
     * 
    **/
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_users.
     * 
    **/
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Sys_userScalarFieldEnum>
  }


  /**
   * sys_user create
   */
  export type sys_userCreateArgs = {
    /**
     * Select specific fields to fetch from the sys_user
     * 
    **/
    select?: sys_userSelect | null
    /**
     * The data needed to create a sys_user.
     * 
    **/
    data: XOR<sys_userCreateInput, sys_userUncheckedCreateInput>
  }


  /**
   * sys_user createMany
   */
  export type sys_userCreateManyArgs = {
    /**
     * The data used to create many sys_users.
     * 
    **/
    data: Enumerable<sys_userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * sys_user update
   */
  export type sys_userUpdateArgs = {
    /**
     * Select specific fields to fetch from the sys_user
     * 
    **/
    select?: sys_userSelect | null
    /**
     * The data needed to update a sys_user.
     * 
    **/
    data: XOR<sys_userUpdateInput, sys_userUncheckedUpdateInput>
    /**
     * Choose, which sys_user to update.
     * 
    **/
    where: sys_userWhereUniqueInput
  }


  /**
   * sys_user updateMany
   */
  export type sys_userUpdateManyArgs = {
    /**
     * The data used to update sys_users.
     * 
    **/
    data: XOR<sys_userUpdateManyMutationInput, sys_userUncheckedUpdateManyInput>
    /**
     * Filter which sys_users to update
     * 
    **/
    where?: sys_userWhereInput
  }


  /**
   * sys_user upsert
   */
  export type sys_userUpsertArgs = {
    /**
     * Select specific fields to fetch from the sys_user
     * 
    **/
    select?: sys_userSelect | null
    /**
     * The filter to search for the sys_user to update in case it exists.
     * 
    **/
    where: sys_userWhereUniqueInput
    /**
     * In case the sys_user found by the `where` argument doesn't exist, create a new sys_user with this data.
     * 
    **/
    create: XOR<sys_userCreateInput, sys_userUncheckedCreateInput>
    /**
     * In case the sys_user was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<sys_userUpdateInput, sys_userUncheckedUpdateInput>
  }


  /**
   * sys_user delete
   */
  export type sys_userDeleteArgs = {
    /**
     * Select specific fields to fetch from the sys_user
     * 
    **/
    select?: sys_userSelect | null
    /**
     * Filter which sys_user to delete.
     * 
    **/
    where: sys_userWhereUniqueInput
  }


  /**
   * sys_user deleteMany
   */
  export type sys_userDeleteManyArgs = {
    /**
     * Filter which sys_users to delete
     * 
    **/
    where?: sys_userWhereInput
  }


  /**
   * sys_user without action
   */
  export type sys_userArgs = {
    /**
     * Select specific fields to fetch from the sys_user
     * 
    **/
    select?: sys_userSelect | null
  }



  /**
   * Model sys_user_token
   */


  export type AggregateSys_user_token = {
    _count: Sys_user_tokenCountAggregateOutputType | null
    _avg: Sys_user_tokenAvgAggregateOutputType | null
    _sum: Sys_user_tokenSumAggregateOutputType | null
    _min: Sys_user_tokenMinAggregateOutputType | null
    _max: Sys_user_tokenMaxAggregateOutputType | null
  }

  export type Sys_user_tokenAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Sys_user_tokenSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type Sys_user_tokenMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    token: string | null
    expire_date: Date | null
    update_date: Date | null
    create_date: Date | null
  }

  export type Sys_user_tokenMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    token: string | null
    expire_date: Date | null
    update_date: Date | null
    create_date: Date | null
  }

  export type Sys_user_tokenCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    expire_date: number
    update_date: number
    create_date: number
    _all: number
  }


  export type Sys_user_tokenAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Sys_user_tokenSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Sys_user_tokenMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expire_date?: true
    update_date?: true
    create_date?: true
  }

  export type Sys_user_tokenMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expire_date?: true
    update_date?: true
    create_date?: true
  }

  export type Sys_user_tokenCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expire_date?: true
    update_date?: true
    create_date?: true
    _all?: true
  }

  export type Sys_user_tokenAggregateArgs = {
    /**
     * Filter which sys_user_token to aggregate.
     * 
    **/
    where?: sys_user_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_user_tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_user_tokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: sys_user_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_user_tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_user_tokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_user_tokens
    **/
    _count?: true | Sys_user_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_user_tokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_user_tokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_user_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_user_tokenMaxAggregateInputType
  }

  export type GetSys_user_tokenAggregateType<T extends Sys_user_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_user_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_user_token[P]>
      : GetScalarType<T[P], AggregateSys_user_token[P]>
  }




  export type Sys_user_tokenGroupByArgs = {
    where?: sys_user_tokenWhereInput
    orderBy?: Enumerable<sys_user_tokenOrderByWithAggregationInput>
    by: Array<Sys_user_tokenScalarFieldEnum>
    having?: sys_user_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_user_tokenCountAggregateInputType | true
    _avg?: Sys_user_tokenAvgAggregateInputType
    _sum?: Sys_user_tokenSumAggregateInputType
    _min?: Sys_user_tokenMinAggregateInputType
    _max?: Sys_user_tokenMaxAggregateInputType
  }


  export type Sys_user_tokenGroupByOutputType = {
    id: bigint
    user_id: bigint
    token: string
    expire_date: Date | null
    update_date: Date | null
    create_date: Date | null
    _count: Sys_user_tokenCountAggregateOutputType | null
    _avg: Sys_user_tokenAvgAggregateOutputType | null
    _sum: Sys_user_tokenSumAggregateOutputType | null
    _min: Sys_user_tokenMinAggregateOutputType | null
    _max: Sys_user_tokenMaxAggregateOutputType | null
  }

  type GetSys_user_tokenGroupByPayload<T extends Sys_user_tokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Sys_user_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_user_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_user_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_user_tokenGroupByOutputType[P]>
        }
      >
    >


  export type sys_user_tokenSelect = {
    id?: boolean
    user_id?: boolean
    token?: boolean
    expire_date?: boolean
    update_date?: boolean
    create_date?: boolean
  }

  export type sys_user_tokenGetPayload<
    S extends boolean | null | undefined | sys_user_tokenArgs,
    U = keyof S
      > = S extends true
        ? sys_user_token
    : S extends undefined
    ? never
    : S extends sys_user_tokenArgs | sys_user_tokenFindManyArgs
    ?'include' extends U
    ? sys_user_token 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof sys_user_token ? sys_user_token[P] : never
  } 
    : sys_user_token
  : sys_user_token


  type sys_user_tokenCountArgs = Merge<
    Omit<sys_user_tokenFindManyArgs, 'select' | 'include'> & {
      select?: Sys_user_tokenCountAggregateInputType | true
    }
  >

  export interface sys_user_tokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Sys_user_token that matches the filter.
     * @param {sys_user_tokenFindUniqueArgs} args - Arguments to find a Sys_user_token
     * @example
     * // Get one Sys_user_token
     * const sys_user_token = await prisma.sys_user_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sys_user_tokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, sys_user_tokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'sys_user_token'> extends True ? CheckSelect<T, Prisma__sys_user_tokenClient<sys_user_token>, Prisma__sys_user_tokenClient<sys_user_tokenGetPayload<T>>> : CheckSelect<T, Prisma__sys_user_tokenClient<sys_user_token | null >, Prisma__sys_user_tokenClient<sys_user_tokenGetPayload<T> | null >>

    /**
     * Find the first Sys_user_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_tokenFindFirstArgs} args - Arguments to find a Sys_user_token
     * @example
     * // Get one Sys_user_token
     * const sys_user_token = await prisma.sys_user_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sys_user_tokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, sys_user_tokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'sys_user_token'> extends True ? CheckSelect<T, Prisma__sys_user_tokenClient<sys_user_token>, Prisma__sys_user_tokenClient<sys_user_tokenGetPayload<T>>> : CheckSelect<T, Prisma__sys_user_tokenClient<sys_user_token | null >, Prisma__sys_user_tokenClient<sys_user_tokenGetPayload<T> | null >>

    /**
     * Find zero or more Sys_user_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_tokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_user_tokens
     * const sys_user_tokens = await prisma.sys_user_token.findMany()
     * 
     * // Get first 10 Sys_user_tokens
     * const sys_user_tokens = await prisma.sys_user_token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_user_tokenWithIdOnly = await prisma.sys_user_token.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sys_user_tokenFindManyArgs>(
      args?: SelectSubset<T, sys_user_tokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<sys_user_token>>, PrismaPromise<Array<sys_user_tokenGetPayload<T>>>>

    /**
     * Create a Sys_user_token.
     * @param {sys_user_tokenCreateArgs} args - Arguments to create a Sys_user_token.
     * @example
     * // Create one Sys_user_token
     * const Sys_user_token = await prisma.sys_user_token.create({
     *   data: {
     *     // ... data to create a Sys_user_token
     *   }
     * })
     * 
    **/
    create<T extends sys_user_tokenCreateArgs>(
      args: SelectSubset<T, sys_user_tokenCreateArgs>
    ): CheckSelect<T, Prisma__sys_user_tokenClient<sys_user_token>, Prisma__sys_user_tokenClient<sys_user_tokenGetPayload<T>>>

    /**
     * Create many Sys_user_tokens.
     *     @param {sys_user_tokenCreateManyArgs} args - Arguments to create many Sys_user_tokens.
     *     @example
     *     // Create many Sys_user_tokens
     *     const sys_user_token = await prisma.sys_user_token.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sys_user_tokenCreateManyArgs>(
      args?: SelectSubset<T, sys_user_tokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_user_token.
     * @param {sys_user_tokenDeleteArgs} args - Arguments to delete one Sys_user_token.
     * @example
     * // Delete one Sys_user_token
     * const Sys_user_token = await prisma.sys_user_token.delete({
     *   where: {
     *     // ... filter to delete one Sys_user_token
     *   }
     * })
     * 
    **/
    delete<T extends sys_user_tokenDeleteArgs>(
      args: SelectSubset<T, sys_user_tokenDeleteArgs>
    ): CheckSelect<T, Prisma__sys_user_tokenClient<sys_user_token>, Prisma__sys_user_tokenClient<sys_user_tokenGetPayload<T>>>

    /**
     * Update one Sys_user_token.
     * @param {sys_user_tokenUpdateArgs} args - Arguments to update one Sys_user_token.
     * @example
     * // Update one Sys_user_token
     * const sys_user_token = await prisma.sys_user_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sys_user_tokenUpdateArgs>(
      args: SelectSubset<T, sys_user_tokenUpdateArgs>
    ): CheckSelect<T, Prisma__sys_user_tokenClient<sys_user_token>, Prisma__sys_user_tokenClient<sys_user_tokenGetPayload<T>>>

    /**
     * Delete zero or more Sys_user_tokens.
     * @param {sys_user_tokenDeleteManyArgs} args - Arguments to filter Sys_user_tokens to delete.
     * @example
     * // Delete a few Sys_user_tokens
     * const { count } = await prisma.sys_user_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sys_user_tokenDeleteManyArgs>(
      args?: SelectSubset<T, sys_user_tokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_user_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_user_tokens
     * const sys_user_token = await prisma.sys_user_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sys_user_tokenUpdateManyArgs>(
      args: SelectSubset<T, sys_user_tokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_user_token.
     * @param {sys_user_tokenUpsertArgs} args - Arguments to update or create a Sys_user_token.
     * @example
     * // Update or create a Sys_user_token
     * const sys_user_token = await prisma.sys_user_token.upsert({
     *   create: {
     *     // ... data to create a Sys_user_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_user_token we want to update
     *   }
     * })
    **/
    upsert<T extends sys_user_tokenUpsertArgs>(
      args: SelectSubset<T, sys_user_tokenUpsertArgs>
    ): CheckSelect<T, Prisma__sys_user_tokenClient<sys_user_token>, Prisma__sys_user_tokenClient<sys_user_tokenGetPayload<T>>>

    /**
     * Count the number of Sys_user_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_user_tokenCountArgs} args - Arguments to filter Sys_user_tokens to count.
     * @example
     * // Count the number of Sys_user_tokens
     * const count = await prisma.sys_user_token.count({
     *   where: {
     *     // ... the filter for the Sys_user_tokens we want to count
     *   }
     * })
    **/
    count<T extends sys_user_tokenCountArgs>(
      args?: Subset<T, sys_user_tokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_user_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_user_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_user_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sys_user_tokenAggregateArgs>(args: Subset<T, Sys_user_tokenAggregateArgs>): PrismaPromise<GetSys_user_tokenAggregateType<T>>

    /**
     * Group by Sys_user_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_user_tokenGroupByArgs} args - Group by arguments.
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
      T extends Sys_user_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sys_user_tokenGroupByArgs['orderBy'] }
        : { orderBy?: Sys_user_tokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Sys_user_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_user_tokenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_user_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__sys_user_tokenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * sys_user_token findUnique
   */
  export type sys_user_tokenFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the sys_user_token
     * 
    **/
    select?: sys_user_tokenSelect | null
    /**
     * Throw an Error if a sys_user_token can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which sys_user_token to fetch.
     * 
    **/
    where: sys_user_tokenWhereUniqueInput
  }


  /**
   * sys_user_token findFirst
   */
  export type sys_user_tokenFindFirstArgs = {
    /**
     * Select specific fields to fetch from the sys_user_token
     * 
    **/
    select?: sys_user_tokenSelect | null
    /**
     * Throw an Error if a sys_user_token can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which sys_user_token to fetch.
     * 
    **/
    where?: sys_user_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_user_tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_user_tokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_user_tokens.
     * 
    **/
    cursor?: sys_user_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_user_tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_user_tokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_user_tokens.
     * 
    **/
    distinct?: Enumerable<Sys_user_tokenScalarFieldEnum>
  }


  /**
   * sys_user_token findMany
   */
  export type sys_user_tokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the sys_user_token
     * 
    **/
    select?: sys_user_tokenSelect | null
    /**
     * Filter, which sys_user_tokens to fetch.
     * 
    **/
    where?: sys_user_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_user_tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<sys_user_tokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_user_tokens.
     * 
    **/
    cursor?: sys_user_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_user_tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_user_tokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Sys_user_tokenScalarFieldEnum>
  }


  /**
   * sys_user_token create
   */
  export type sys_user_tokenCreateArgs = {
    /**
     * Select specific fields to fetch from the sys_user_token
     * 
    **/
    select?: sys_user_tokenSelect | null
    /**
     * The data needed to create a sys_user_token.
     * 
    **/
    data: XOR<sys_user_tokenCreateInput, sys_user_tokenUncheckedCreateInput>
  }


  /**
   * sys_user_token createMany
   */
  export type sys_user_tokenCreateManyArgs = {
    /**
     * The data used to create many sys_user_tokens.
     * 
    **/
    data: Enumerable<sys_user_tokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * sys_user_token update
   */
  export type sys_user_tokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the sys_user_token
     * 
    **/
    select?: sys_user_tokenSelect | null
    /**
     * The data needed to update a sys_user_token.
     * 
    **/
    data: XOR<sys_user_tokenUpdateInput, sys_user_tokenUncheckedUpdateInput>
    /**
     * Choose, which sys_user_token to update.
     * 
    **/
    where: sys_user_tokenWhereUniqueInput
  }


  /**
   * sys_user_token updateMany
   */
  export type sys_user_tokenUpdateManyArgs = {
    /**
     * The data used to update sys_user_tokens.
     * 
    **/
    data: XOR<sys_user_tokenUpdateManyMutationInput, sys_user_tokenUncheckedUpdateManyInput>
    /**
     * Filter which sys_user_tokens to update
     * 
    **/
    where?: sys_user_tokenWhereInput
  }


  /**
   * sys_user_token upsert
   */
  export type sys_user_tokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the sys_user_token
     * 
    **/
    select?: sys_user_tokenSelect | null
    /**
     * The filter to search for the sys_user_token to update in case it exists.
     * 
    **/
    where: sys_user_tokenWhereUniqueInput
    /**
     * In case the sys_user_token found by the `where` argument doesn't exist, create a new sys_user_token with this data.
     * 
    **/
    create: XOR<sys_user_tokenCreateInput, sys_user_tokenUncheckedCreateInput>
    /**
     * In case the sys_user_token was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<sys_user_tokenUpdateInput, sys_user_tokenUncheckedUpdateInput>
  }


  /**
   * sys_user_token delete
   */
  export type sys_user_tokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the sys_user_token
     * 
    **/
    select?: sys_user_tokenSelect | null
    /**
     * Filter which sys_user_token to delete.
     * 
    **/
    where: sys_user_tokenWhereUniqueInput
  }


  /**
   * sys_user_token deleteMany
   */
  export type sys_user_tokenDeleteManyArgs = {
    /**
     * Filter which sys_user_tokens to delete
     * 
    **/
    where?: sys_user_tokenWhereInput
  }


  /**
   * sys_user_token without action
   */
  export type sys_user_tokenArgs = {
    /**
     * Select specific fields to fetch from the sys_user_token
     * 
    **/
    select?: sys_user_tokenSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DATABASECHANGELOGLOCKScalarFieldEnum: {
    ID: 'ID',
    LOCKED: 'LOCKED',
    LOCKGRANTED: 'LOCKGRANTED',
    LOCKEDBY: 'LOCKEDBY'
  };

  export type DATABASECHANGELOGLOCKScalarFieldEnum = (typeof DATABASECHANGELOGLOCKScalarFieldEnum)[keyof typeof DATABASECHANGELOGLOCKScalarFieldEnum]


  export const Ai_agentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    agent_code: 'agent_code',
    agent_name: 'agent_name',
    asr_model_id: 'asr_model_id',
    vad_model_id: 'vad_model_id',
    llm_model_id: 'llm_model_id',
    vllm_model_id: 'vllm_model_id',
    tts_model_id: 'tts_model_id',
    tts_voice_id: 'tts_voice_id',
    mem_model_id: 'mem_model_id',
    intent_model_id: 'intent_model_id',
    system_prompt: 'system_prompt',
    summary_memory: 'summary_memory',
    chat_history_conf: 'chat_history_conf',
    lang_code: 'lang_code',
    language: 'language',
    sort: 'sort',
    creator: 'creator',
    created_at: 'created_at',
    updater: 'updater',
    updated_at: 'updated_at'
  };

  export type Ai_agentScalarFieldEnum = (typeof Ai_agentScalarFieldEnum)[keyof typeof Ai_agentScalarFieldEnum]


  export const Ai_agent_chat_audioScalarFieldEnum: {
    id: 'id',
    audio: 'audio'
  };

  export type Ai_agent_chat_audioScalarFieldEnum = (typeof Ai_agent_chat_audioScalarFieldEnum)[keyof typeof Ai_agent_chat_audioScalarFieldEnum]


  export const Ai_agent_chat_historyScalarFieldEnum: {
    id: 'id',
    mac_address: 'mac_address',
    agent_id: 'agent_id',
    session_id: 'session_id',
    chat_type: 'chat_type',
    content: 'content',
    audio_id: 'audio_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Ai_agent_chat_historyScalarFieldEnum = (typeof Ai_agent_chat_historyScalarFieldEnum)[keyof typeof Ai_agent_chat_historyScalarFieldEnum]


  export const Ai_agent_plugin_mappingScalarFieldEnum: {
    id: 'id',
    agent_id: 'agent_id',
    plugin_id: 'plugin_id',
    param_info: 'param_info'
  };

  export type Ai_agent_plugin_mappingScalarFieldEnum = (typeof Ai_agent_plugin_mappingScalarFieldEnum)[keyof typeof Ai_agent_plugin_mappingScalarFieldEnum]


  export const Ai_agent_templateScalarFieldEnum: {
    id: 'id',
    agent_code: 'agent_code',
    agent_name: 'agent_name',
    asr_model_id: 'asr_model_id',
    vad_model_id: 'vad_model_id',
    llm_model_id: 'llm_model_id',
    vllm_model_id: 'vllm_model_id',
    tts_model_id: 'tts_model_id',
    tts_voice_id: 'tts_voice_id',
    mem_model_id: 'mem_model_id',
    intent_model_id: 'intent_model_id',
    system_prompt: 'system_prompt',
    summary_memory: 'summary_memory',
    chat_history_conf: 'chat_history_conf',
    lang_code: 'lang_code',
    language: 'language',
    sort: 'sort',
    creator: 'creator',
    created_at: 'created_at',
    updater: 'updater',
    updated_at: 'updated_at'
  };

  export type Ai_agent_templateScalarFieldEnum = (typeof Ai_agent_templateScalarFieldEnum)[keyof typeof Ai_agent_templateScalarFieldEnum]


  export const Ai_agent_voice_printScalarFieldEnum: {
    id: 'id',
    agent_id: 'agent_id',
    source_name: 'source_name',
    introduce: 'introduce',
    create_date: 'create_date',
    creator: 'creator',
    update_date: 'update_date',
    updater: 'updater',
    audio_id: 'audio_id'
  };

  export type Ai_agent_voice_printScalarFieldEnum = (typeof Ai_agent_voice_printScalarFieldEnum)[keyof typeof Ai_agent_voice_printScalarFieldEnum]


  export const Ai_deviceScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    mac_address: 'mac_address',
    last_connected_at: 'last_connected_at',
    auto_update: 'auto_update',
    board: 'board',
    alias: 'alias',
    agent_id: 'agent_id',
    app_version: 'app_version',
    sort: 'sort',
    creator: 'creator',
    create_date: 'create_date',
    updater: 'updater',
    update_date: 'update_date'
  };

  export type Ai_deviceScalarFieldEnum = (typeof Ai_deviceScalarFieldEnum)[keyof typeof Ai_deviceScalarFieldEnum]


  export const Ai_model_configScalarFieldEnum: {
    id: 'id',
    model_type: 'model_type',
    model_code: 'model_code',
    model_name: 'model_name',
    is_default: 'is_default',
    is_enabled: 'is_enabled',
    config_json: 'config_json',
    doc_link: 'doc_link',
    remark: 'remark',
    sort: 'sort',
    creator: 'creator',
    create_date: 'create_date',
    updater: 'updater',
    update_date: 'update_date'
  };

  export type Ai_model_configScalarFieldEnum = (typeof Ai_model_configScalarFieldEnum)[keyof typeof Ai_model_configScalarFieldEnum]


  export const Ai_model_providerScalarFieldEnum: {
    id: 'id',
    model_type: 'model_type',
    provider_code: 'provider_code',
    name: 'name',
    fields: 'fields',
    sort: 'sort',
    creator: 'creator',
    create_date: 'create_date',
    updater: 'updater',
    update_date: 'update_date'
  };

  export type Ai_model_providerScalarFieldEnum = (typeof Ai_model_providerScalarFieldEnum)[keyof typeof Ai_model_providerScalarFieldEnum]


  export const Ai_otaScalarFieldEnum: {
    id: 'id',
    firmware_name: 'firmware_name',
    type: 'type',
    version: 'version',
    size: 'size',
    remark: 'remark',
    firmware_path: 'firmware_path',
    sort: 'sort',
    updater: 'updater',
    update_date: 'update_date',
    creator: 'creator',
    create_date: 'create_date'
  };

  export type Ai_otaScalarFieldEnum = (typeof Ai_otaScalarFieldEnum)[keyof typeof Ai_otaScalarFieldEnum]


  export const Ai_tts_voiceScalarFieldEnum: {
    id: 'id',
    tts_model_id: 'tts_model_id',
    name: 'name',
    tts_voice: 'tts_voice',
    languages: 'languages',
    voice_demo: 'voice_demo',
    remark: 'remark',
    reference_audio: 'reference_audio',
    reference_text: 'reference_text',
    sort: 'sort',
    creator: 'creator',
    create_date: 'create_date',
    updater: 'updater',
    update_date: 'update_date'
  };

  export type Ai_tts_voiceScalarFieldEnum = (typeof Ai_tts_voiceScalarFieldEnum)[keyof typeof Ai_tts_voiceScalarFieldEnum]


  export const Ai_voiceprintScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_id: 'user_id',
    agent_id: 'agent_id',
    agent_code: 'agent_code',
    agent_name: 'agent_name',
    description: 'description',
    embedding: 'embedding',
    memory: 'memory',
    sort: 'sort',
    creator: 'creator',
    created_at: 'created_at',
    updater: 'updater',
    updated_at: 'updated_at'
  };

  export type Ai_voiceprintScalarFieldEnum = (typeof Ai_voiceprintScalarFieldEnum)[keyof typeof Ai_voiceprintScalarFieldEnum]


  export const Sys_dict_dataScalarFieldEnum: {
    id: 'id',
    dict_type_id: 'dict_type_id',
    dict_label: 'dict_label',
    dict_value: 'dict_value',
    remark: 'remark',
    sort: 'sort',
    creator: 'creator',
    create_date: 'create_date',
    updater: 'updater',
    update_date: 'update_date'
  };

  export type Sys_dict_dataScalarFieldEnum = (typeof Sys_dict_dataScalarFieldEnum)[keyof typeof Sys_dict_dataScalarFieldEnum]


  export const Sys_dict_typeScalarFieldEnum: {
    id: 'id',
    dict_type: 'dict_type',
    dict_name: 'dict_name',
    remark: 'remark',
    sort: 'sort',
    creator: 'creator',
    create_date: 'create_date',
    updater: 'updater',
    update_date: 'update_date'
  };

  export type Sys_dict_typeScalarFieldEnum = (typeof Sys_dict_typeScalarFieldEnum)[keyof typeof Sys_dict_typeScalarFieldEnum]


  export const Sys_paramsScalarFieldEnum: {
    id: 'id',
    param_code: 'param_code',
    param_value: 'param_value',
    value_type: 'value_type',
    param_type: 'param_type',
    remark: 'remark',
    creator: 'creator',
    create_date: 'create_date',
    updater: 'updater',
    update_date: 'update_date'
  };

  export type Sys_paramsScalarFieldEnum = (typeof Sys_paramsScalarFieldEnum)[keyof typeof Sys_paramsScalarFieldEnum]


  export const Sys_userScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    super_admin: 'super_admin',
    status: 'status',
    create_date: 'create_date',
    updater: 'updater',
    creator: 'creator',
    update_date: 'update_date'
  };

  export type Sys_userScalarFieldEnum = (typeof Sys_userScalarFieldEnum)[keyof typeof Sys_userScalarFieldEnum]


  export const Sys_user_tokenScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token',
    expire_date: 'expire_date',
    update_date: 'update_date',
    create_date: 'create_date'
  };

  export type Sys_user_tokenScalarFieldEnum = (typeof Sys_user_tokenScalarFieldEnum)[keyof typeof Sys_user_tokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: 'JsonNull'
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull'
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull',
    AnyNull: 'AnyNull'
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type DATABASECHANGELOGLOCKWhereInput = {
    AND?: Enumerable<DATABASECHANGELOGLOCKWhereInput>
    OR?: Enumerable<DATABASECHANGELOGLOCKWhereInput>
    NOT?: Enumerable<DATABASECHANGELOGLOCKWhereInput>
    ID?: IntFilter | number
    LOCKED?: BoolFilter | boolean
    LOCKGRANTED?: DateTimeNullableFilter | Date | string | null
    LOCKEDBY?: StringNullableFilter | string | null
  }

  export type DATABASECHANGELOGLOCKOrderByWithRelationInput = {
    ID?: SortOrder
    LOCKED?: SortOrder
    LOCKGRANTED?: SortOrder
    LOCKEDBY?: SortOrder
  }

  export type DATABASECHANGELOGLOCKWhereUniqueInput = {
    ID?: number
  }

  export type DATABASECHANGELOGLOCKOrderByWithAggregationInput = {
    ID?: SortOrder
    LOCKED?: SortOrder
    LOCKGRANTED?: SortOrder
    LOCKEDBY?: SortOrder
    _count?: DATABASECHANGELOGLOCKCountOrderByAggregateInput
    _avg?: DATABASECHANGELOGLOCKAvgOrderByAggregateInput
    _max?: DATABASECHANGELOGLOCKMaxOrderByAggregateInput
    _min?: DATABASECHANGELOGLOCKMinOrderByAggregateInput
    _sum?: DATABASECHANGELOGLOCKSumOrderByAggregateInput
  }

  export type DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput>
    OR?: Enumerable<DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DATABASECHANGELOGLOCKScalarWhereWithAggregatesInput>
    ID?: IntWithAggregatesFilter | number
    LOCKED?: BoolWithAggregatesFilter | boolean
    LOCKGRANTED?: DateTimeNullableWithAggregatesFilter | Date | string | null
    LOCKEDBY?: StringNullableWithAggregatesFilter | string | null
  }

  export type ai_agentWhereInput = {
    AND?: Enumerable<ai_agentWhereInput>
    OR?: Enumerable<ai_agentWhereInput>
    NOT?: Enumerable<ai_agentWhereInput>
    id?: StringFilter | string
    user_id?: BigIntNullableFilter | bigint | number | null
    agent_code?: StringNullableFilter | string | null
    agent_name?: StringNullableFilter | string | null
    asr_model_id?: StringNullableFilter | string | null
    vad_model_id?: StringNullableFilter | string | null
    llm_model_id?: StringNullableFilter | string | null
    vllm_model_id?: StringNullableFilter | string | null
    tts_model_id?: StringNullableFilter | string | null
    tts_voice_id?: StringNullableFilter | string | null
    mem_model_id?: StringNullableFilter | string | null
    intent_model_id?: StringNullableFilter | string | null
    system_prompt?: StringNullableFilter | string | null
    summary_memory?: StringNullableFilter | string | null
    chat_history_conf?: IntFilter | number
    lang_code?: StringNullableFilter | string | null
    language?: StringNullableFilter | string | null
    sort?: IntNullableFilter | number | null
    creator?: BigIntNullableFilter | bigint | number | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type ai_agentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    asr_model_id?: SortOrder
    vad_model_id?: SortOrder
    llm_model_id?: SortOrder
    vllm_model_id?: SortOrder
    tts_model_id?: SortOrder
    tts_voice_id?: SortOrder
    mem_model_id?: SortOrder
    intent_model_id?: SortOrder
    system_prompt?: SortOrder
    summary_memory?: SortOrder
    chat_history_conf?: SortOrder
    lang_code?: SortOrder
    language?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agentWhereUniqueInput = {
    id?: string
  }

  export type ai_agentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    asr_model_id?: SortOrder
    vad_model_id?: SortOrder
    llm_model_id?: SortOrder
    vllm_model_id?: SortOrder
    tts_model_id?: SortOrder
    tts_voice_id?: SortOrder
    mem_model_id?: SortOrder
    intent_model_id?: SortOrder
    system_prompt?: SortOrder
    summary_memory?: SortOrder
    chat_history_conf?: SortOrder
    lang_code?: SortOrder
    language?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
    _count?: ai_agentCountOrderByAggregateInput
    _avg?: ai_agentAvgOrderByAggregateInput
    _max?: ai_agentMaxOrderByAggregateInput
    _min?: ai_agentMinOrderByAggregateInput
    _sum?: ai_agentSumOrderByAggregateInput
  }

  export type ai_agentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_agentScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_agentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_agentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    user_id?: BigIntNullableWithAggregatesFilter | bigint | number | null
    agent_code?: StringNullableWithAggregatesFilter | string | null
    agent_name?: StringNullableWithAggregatesFilter | string | null
    asr_model_id?: StringNullableWithAggregatesFilter | string | null
    vad_model_id?: StringNullableWithAggregatesFilter | string | null
    llm_model_id?: StringNullableWithAggregatesFilter | string | null
    vllm_model_id?: StringNullableWithAggregatesFilter | string | null
    tts_model_id?: StringNullableWithAggregatesFilter | string | null
    tts_voice_id?: StringNullableWithAggregatesFilter | string | null
    mem_model_id?: StringNullableWithAggregatesFilter | string | null
    intent_model_id?: StringNullableWithAggregatesFilter | string | null
    system_prompt?: StringNullableWithAggregatesFilter | string | null
    summary_memory?: StringNullableWithAggregatesFilter | string | null
    chat_history_conf?: IntWithAggregatesFilter | number
    lang_code?: StringNullableWithAggregatesFilter | string | null
    language?: StringNullableWithAggregatesFilter | string | null
    sort?: IntNullableWithAggregatesFilter | number | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ai_agent_chat_audioWhereInput = {
    AND?: Enumerable<ai_agent_chat_audioWhereInput>
    OR?: Enumerable<ai_agent_chat_audioWhereInput>
    NOT?: Enumerable<ai_agent_chat_audioWhereInput>
    id?: StringFilter | string
    audio?: BytesNullableFilter | Buffer | null
  }

  export type ai_agent_chat_audioOrderByWithRelationInput = {
    id?: SortOrder
    audio?: SortOrder
  }

  export type ai_agent_chat_audioWhereUniqueInput = {
    id?: string
  }

  export type ai_agent_chat_audioOrderByWithAggregationInput = {
    id?: SortOrder
    audio?: SortOrder
    _count?: ai_agent_chat_audioCountOrderByAggregateInput
    _max?: ai_agent_chat_audioMaxOrderByAggregateInput
    _min?: ai_agent_chat_audioMinOrderByAggregateInput
  }

  export type ai_agent_chat_audioScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_agent_chat_audioScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_agent_chat_audioScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_agent_chat_audioScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    audio?: BytesNullableWithAggregatesFilter | Buffer | null
  }

  export type ai_agent_chat_historyWhereInput = {
    AND?: Enumerable<ai_agent_chat_historyWhereInput>
    OR?: Enumerable<ai_agent_chat_historyWhereInput>
    NOT?: Enumerable<ai_agent_chat_historyWhereInput>
    id?: BigIntFilter | bigint | number
    mac_address?: StringNullableFilter | string | null
    agent_id?: StringNullableFilter | string | null
    session_id?: StringNullableFilter | string | null
    chat_type?: IntNullableFilter | number | null
    content?: StringNullableFilter | string | null
    audio_id?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ai_agent_chat_historyOrderByWithRelationInput = {
    id?: SortOrder
    mac_address?: SortOrder
    agent_id?: SortOrder
    session_id?: SortOrder
    chat_type?: SortOrder
    content?: SortOrder
    audio_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agent_chat_historyWhereUniqueInput = {
    id?: bigint | number
  }

  export type ai_agent_chat_historyOrderByWithAggregationInput = {
    id?: SortOrder
    mac_address?: SortOrder
    agent_id?: SortOrder
    session_id?: SortOrder
    chat_type?: SortOrder
    content?: SortOrder
    audio_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ai_agent_chat_historyCountOrderByAggregateInput
    _avg?: ai_agent_chat_historyAvgOrderByAggregateInput
    _max?: ai_agent_chat_historyMaxOrderByAggregateInput
    _min?: ai_agent_chat_historyMinOrderByAggregateInput
    _sum?: ai_agent_chat_historySumOrderByAggregateInput
  }

  export type ai_agent_chat_historyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_agent_chat_historyScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_agent_chat_historyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_agent_chat_historyScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    mac_address?: StringNullableWithAggregatesFilter | string | null
    agent_id?: StringNullableWithAggregatesFilter | string | null
    session_id?: StringNullableWithAggregatesFilter | string | null
    chat_type?: IntNullableWithAggregatesFilter | number | null
    content?: StringNullableWithAggregatesFilter | string | null
    audio_id?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ai_agent_plugin_mappingWhereInput = {
    AND?: Enumerable<ai_agent_plugin_mappingWhereInput>
    OR?: Enumerable<ai_agent_plugin_mappingWhereInput>
    NOT?: Enumerable<ai_agent_plugin_mappingWhereInput>
    id?: BigIntFilter | bigint | number
    agent_id?: StringFilter | string
    plugin_id?: StringFilter | string
    param_info?: JsonFilter
  }

  export type ai_agent_plugin_mappingOrderByWithRelationInput = {
    id?: SortOrder
    agent_id?: SortOrder
    plugin_id?: SortOrder
    param_info?: SortOrder
  }

  export type ai_agent_plugin_mappingWhereUniqueInput = {
    id?: bigint | number
    agent_id_plugin_id?: ai_agent_plugin_mappingAgent_idPlugin_idCompoundUniqueInput
  }

  export type ai_agent_plugin_mappingOrderByWithAggregationInput = {
    id?: SortOrder
    agent_id?: SortOrder
    plugin_id?: SortOrder
    param_info?: SortOrder
    _count?: ai_agent_plugin_mappingCountOrderByAggregateInput
    _avg?: ai_agent_plugin_mappingAvgOrderByAggregateInput
    _max?: ai_agent_plugin_mappingMaxOrderByAggregateInput
    _min?: ai_agent_plugin_mappingMinOrderByAggregateInput
    _sum?: ai_agent_plugin_mappingSumOrderByAggregateInput
  }

  export type ai_agent_plugin_mappingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_agent_plugin_mappingScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_agent_plugin_mappingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_agent_plugin_mappingScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    agent_id?: StringWithAggregatesFilter | string
    plugin_id?: StringWithAggregatesFilter | string
    param_info?: JsonWithAggregatesFilter
  }

  export type ai_agent_templateWhereInput = {
    AND?: Enumerable<ai_agent_templateWhereInput>
    OR?: Enumerable<ai_agent_templateWhereInput>
    NOT?: Enumerable<ai_agent_templateWhereInput>
    id?: StringFilter | string
    agent_code?: StringNullableFilter | string | null
    agent_name?: StringNullableFilter | string | null
    asr_model_id?: StringNullableFilter | string | null
    vad_model_id?: StringNullableFilter | string | null
    llm_model_id?: StringNullableFilter | string | null
    vllm_model_id?: StringNullableFilter | string | null
    tts_model_id?: StringNullableFilter | string | null
    tts_voice_id?: StringNullableFilter | string | null
    mem_model_id?: StringNullableFilter | string | null
    intent_model_id?: StringNullableFilter | string | null
    system_prompt?: StringNullableFilter | string | null
    summary_memory?: StringNullableFilter | string | null
    chat_history_conf?: IntFilter | number
    lang_code?: StringNullableFilter | string | null
    language?: StringNullableFilter | string | null
    sort?: IntNullableFilter | number | null
    creator?: BigIntNullableFilter | bigint | number | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type ai_agent_templateOrderByWithRelationInput = {
    id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    asr_model_id?: SortOrder
    vad_model_id?: SortOrder
    llm_model_id?: SortOrder
    vllm_model_id?: SortOrder
    tts_model_id?: SortOrder
    tts_voice_id?: SortOrder
    mem_model_id?: SortOrder
    intent_model_id?: SortOrder
    system_prompt?: SortOrder
    summary_memory?: SortOrder
    chat_history_conf?: SortOrder
    lang_code?: SortOrder
    language?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agent_templateWhereUniqueInput = {
    id?: string
  }

  export type ai_agent_templateOrderByWithAggregationInput = {
    id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    asr_model_id?: SortOrder
    vad_model_id?: SortOrder
    llm_model_id?: SortOrder
    vllm_model_id?: SortOrder
    tts_model_id?: SortOrder
    tts_voice_id?: SortOrder
    mem_model_id?: SortOrder
    intent_model_id?: SortOrder
    system_prompt?: SortOrder
    summary_memory?: SortOrder
    chat_history_conf?: SortOrder
    lang_code?: SortOrder
    language?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
    _count?: ai_agent_templateCountOrderByAggregateInput
    _avg?: ai_agent_templateAvgOrderByAggregateInput
    _max?: ai_agent_templateMaxOrderByAggregateInput
    _min?: ai_agent_templateMinOrderByAggregateInput
    _sum?: ai_agent_templateSumOrderByAggregateInput
  }

  export type ai_agent_templateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_agent_templateScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_agent_templateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_agent_templateScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    agent_code?: StringNullableWithAggregatesFilter | string | null
    agent_name?: StringNullableWithAggregatesFilter | string | null
    asr_model_id?: StringNullableWithAggregatesFilter | string | null
    vad_model_id?: StringNullableWithAggregatesFilter | string | null
    llm_model_id?: StringNullableWithAggregatesFilter | string | null
    vllm_model_id?: StringNullableWithAggregatesFilter | string | null
    tts_model_id?: StringNullableWithAggregatesFilter | string | null
    tts_voice_id?: StringNullableWithAggregatesFilter | string | null
    mem_model_id?: StringNullableWithAggregatesFilter | string | null
    intent_model_id?: StringNullableWithAggregatesFilter | string | null
    system_prompt?: StringNullableWithAggregatesFilter | string | null
    summary_memory?: StringNullableWithAggregatesFilter | string | null
    chat_history_conf?: IntWithAggregatesFilter | number
    lang_code?: StringNullableWithAggregatesFilter | string | null
    language?: StringNullableWithAggregatesFilter | string | null
    sort?: IntNullableWithAggregatesFilter | number | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ai_agent_voice_printWhereInput = {
    AND?: Enumerable<ai_agent_voice_printWhereInput>
    OR?: Enumerable<ai_agent_voice_printWhereInput>
    NOT?: Enumerable<ai_agent_voice_printWhereInput>
    id?: StringFilter | string
    agent_id?: StringFilter | string
    source_name?: StringFilter | string
    introduce?: StringNullableFilter | string | null
    create_date?: DateTimeNullableFilter | Date | string | null
    creator?: BigIntNullableFilter | bigint | number | null
    update_date?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    audio_id?: StringFilter | string
  }

  export type ai_agent_voice_printOrderByWithRelationInput = {
    id?: SortOrder
    agent_id?: SortOrder
    source_name?: SortOrder
    introduce?: SortOrder
    create_date?: SortOrder
    creator?: SortOrder
    update_date?: SortOrder
    updater?: SortOrder
    audio_id?: SortOrder
  }

  export type ai_agent_voice_printWhereUniqueInput = {
    id?: string
  }

  export type ai_agent_voice_printOrderByWithAggregationInput = {
    id?: SortOrder
    agent_id?: SortOrder
    source_name?: SortOrder
    introduce?: SortOrder
    create_date?: SortOrder
    creator?: SortOrder
    update_date?: SortOrder
    updater?: SortOrder
    audio_id?: SortOrder
    _count?: ai_agent_voice_printCountOrderByAggregateInput
    _avg?: ai_agent_voice_printAvgOrderByAggregateInput
    _max?: ai_agent_voice_printMaxOrderByAggregateInput
    _min?: ai_agent_voice_printMinOrderByAggregateInput
    _sum?: ai_agent_voice_printSumOrderByAggregateInput
  }

  export type ai_agent_voice_printScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_agent_voice_printScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_agent_voice_printScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_agent_voice_printScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    agent_id?: StringWithAggregatesFilter | string
    source_name?: StringWithAggregatesFilter | string
    introduce?: StringNullableWithAggregatesFilter | string | null
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    audio_id?: StringWithAggregatesFilter | string
  }

  export type ai_deviceWhereInput = {
    AND?: Enumerable<ai_deviceWhereInput>
    OR?: Enumerable<ai_deviceWhereInput>
    NOT?: Enumerable<ai_deviceWhereInput>
    id?: StringFilter | string
    user_id?: BigIntNullableFilter | bigint | number | null
    mac_address?: StringNullableFilter | string | null
    last_connected_at?: DateTimeNullableFilter | Date | string | null
    auto_update?: IntNullableFilter | number | null
    board?: StringNullableFilter | string | null
    alias?: StringNullableFilter | string | null
    agent_id?: StringNullableFilter | string | null
    app_version?: StringNullableFilter | string | null
    sort?: IntNullableFilter | number | null
    creator?: BigIntNullableFilter | bigint | number | null
    create_date?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    update_date?: DateTimeNullableFilter | Date | string | null
  }

  export type ai_deviceOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    mac_address?: SortOrder
    last_connected_at?: SortOrder
    auto_update?: SortOrder
    board?: SortOrder
    alias?: SortOrder
    agent_id?: SortOrder
    app_version?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_deviceWhereUniqueInput = {
    id?: string
  }

  export type ai_deviceOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    mac_address?: SortOrder
    last_connected_at?: SortOrder
    auto_update?: SortOrder
    board?: SortOrder
    alias?: SortOrder
    agent_id?: SortOrder
    app_version?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    _count?: ai_deviceCountOrderByAggregateInput
    _avg?: ai_deviceAvgOrderByAggregateInput
    _max?: ai_deviceMaxOrderByAggregateInput
    _min?: ai_deviceMinOrderByAggregateInput
    _sum?: ai_deviceSumOrderByAggregateInput
  }

  export type ai_deviceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_deviceScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_deviceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_deviceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    user_id?: BigIntNullableWithAggregatesFilter | bigint | number | null
    mac_address?: StringNullableWithAggregatesFilter | string | null
    last_connected_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    auto_update?: IntNullableWithAggregatesFilter | number | null
    board?: StringNullableWithAggregatesFilter | string | null
    alias?: StringNullableWithAggregatesFilter | string | null
    agent_id?: StringNullableWithAggregatesFilter | string | null
    app_version?: StringNullableWithAggregatesFilter | string | null
    sort?: IntNullableWithAggregatesFilter | number | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ai_model_configWhereInput = {
    AND?: Enumerable<ai_model_configWhereInput>
    OR?: Enumerable<ai_model_configWhereInput>
    NOT?: Enumerable<ai_model_configWhereInput>
    id?: StringFilter | string
    model_type?: StringNullableFilter | string | null
    model_code?: StringNullableFilter | string | null
    model_name?: StringNullableFilter | string | null
    is_default?: BoolNullableFilter | boolean | null
    is_enabled?: BoolNullableFilter | boolean | null
    config_json?: JsonNullableFilter
    doc_link?: StringNullableFilter | string | null
    remark?: StringNullableFilter | string | null
    sort?: IntNullableFilter | number | null
    creator?: BigIntNullableFilter | bigint | number | null
    create_date?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    update_date?: DateTimeNullableFilter | Date | string | null
  }

  export type ai_model_configOrderByWithRelationInput = {
    id?: SortOrder
    model_type?: SortOrder
    model_code?: SortOrder
    model_name?: SortOrder
    is_default?: SortOrder
    is_enabled?: SortOrder
    config_json?: SortOrder
    doc_link?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_model_configWhereUniqueInput = {
    id?: string
  }

  export type ai_model_configOrderByWithAggregationInput = {
    id?: SortOrder
    model_type?: SortOrder
    model_code?: SortOrder
    model_name?: SortOrder
    is_default?: SortOrder
    is_enabled?: SortOrder
    config_json?: SortOrder
    doc_link?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    _count?: ai_model_configCountOrderByAggregateInput
    _avg?: ai_model_configAvgOrderByAggregateInput
    _max?: ai_model_configMaxOrderByAggregateInput
    _min?: ai_model_configMinOrderByAggregateInput
    _sum?: ai_model_configSumOrderByAggregateInput
  }

  export type ai_model_configScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_model_configScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_model_configScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_model_configScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    model_type?: StringNullableWithAggregatesFilter | string | null
    model_code?: StringNullableWithAggregatesFilter | string | null
    model_name?: StringNullableWithAggregatesFilter | string | null
    is_default?: BoolNullableWithAggregatesFilter | boolean | null
    is_enabled?: BoolNullableWithAggregatesFilter | boolean | null
    config_json?: JsonNullableWithAggregatesFilter
    doc_link?: StringNullableWithAggregatesFilter | string | null
    remark?: StringNullableWithAggregatesFilter | string | null
    sort?: IntNullableWithAggregatesFilter | number | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ai_model_providerWhereInput = {
    AND?: Enumerable<ai_model_providerWhereInput>
    OR?: Enumerable<ai_model_providerWhereInput>
    NOT?: Enumerable<ai_model_providerWhereInput>
    id?: StringFilter | string
    model_type?: StringNullableFilter | string | null
    provider_code?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    fields?: JsonNullableFilter
    sort?: IntNullableFilter | number | null
    creator?: BigIntNullableFilter | bigint | number | null
    create_date?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    update_date?: DateTimeNullableFilter | Date | string | null
  }

  export type ai_model_providerOrderByWithRelationInput = {
    id?: SortOrder
    model_type?: SortOrder
    provider_code?: SortOrder
    name?: SortOrder
    fields?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_model_providerWhereUniqueInput = {
    id?: string
  }

  export type ai_model_providerOrderByWithAggregationInput = {
    id?: SortOrder
    model_type?: SortOrder
    provider_code?: SortOrder
    name?: SortOrder
    fields?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    _count?: ai_model_providerCountOrderByAggregateInput
    _avg?: ai_model_providerAvgOrderByAggregateInput
    _max?: ai_model_providerMaxOrderByAggregateInput
    _min?: ai_model_providerMinOrderByAggregateInput
    _sum?: ai_model_providerSumOrderByAggregateInput
  }

  export type ai_model_providerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_model_providerScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_model_providerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_model_providerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    model_type?: StringNullableWithAggregatesFilter | string | null
    provider_code?: StringNullableWithAggregatesFilter | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    fields?: JsonNullableWithAggregatesFilter
    sort?: IntNullableWithAggregatesFilter | number | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ai_otaWhereInput = {
    AND?: Enumerable<ai_otaWhereInput>
    OR?: Enumerable<ai_otaWhereInput>
    NOT?: Enumerable<ai_otaWhereInput>
    id?: StringFilter | string
    firmware_name?: StringNullableFilter | string | null
    type?: StringNullableFilter | string | null
    version?: StringNullableFilter | string | null
    size?: BigIntNullableFilter | bigint | number | null
    remark?: StringNullableFilter | string | null
    firmware_path?: StringNullableFilter | string | null
    sort?: IntNullableFilter | number | null
    updater?: BigIntNullableFilter | bigint | number | null
    update_date?: DateTimeNullableFilter | Date | string | null
    creator?: BigIntNullableFilter | bigint | number | null
    create_date?: DateTimeNullableFilter | Date | string | null
  }

  export type ai_otaOrderByWithRelationInput = {
    id?: SortOrder
    firmware_name?: SortOrder
    type?: SortOrder
    version?: SortOrder
    size?: SortOrder
    remark?: SortOrder
    firmware_path?: SortOrder
    sort?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
  }

  export type ai_otaWhereUniqueInput = {
    id?: string
  }

  export type ai_otaOrderByWithAggregationInput = {
    id?: SortOrder
    firmware_name?: SortOrder
    type?: SortOrder
    version?: SortOrder
    size?: SortOrder
    remark?: SortOrder
    firmware_path?: SortOrder
    sort?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    _count?: ai_otaCountOrderByAggregateInput
    _avg?: ai_otaAvgOrderByAggregateInput
    _max?: ai_otaMaxOrderByAggregateInput
    _min?: ai_otaMinOrderByAggregateInput
    _sum?: ai_otaSumOrderByAggregateInput
  }

  export type ai_otaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_otaScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_otaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_otaScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    firmware_name?: StringNullableWithAggregatesFilter | string | null
    type?: StringNullableWithAggregatesFilter | string | null
    version?: StringNullableWithAggregatesFilter | string | null
    size?: BigIntNullableWithAggregatesFilter | bigint | number | null
    remark?: StringNullableWithAggregatesFilter | string | null
    firmware_path?: StringNullableWithAggregatesFilter | string | null
    sort?: IntNullableWithAggregatesFilter | number | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ai_tts_voiceWhereInput = {
    AND?: Enumerable<ai_tts_voiceWhereInput>
    OR?: Enumerable<ai_tts_voiceWhereInput>
    NOT?: Enumerable<ai_tts_voiceWhereInput>
    id?: StringFilter | string
    tts_model_id?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    tts_voice?: StringNullableFilter | string | null
    languages?: StringNullableFilter | string | null
    voice_demo?: StringNullableFilter | string | null
    remark?: StringNullableFilter | string | null
    reference_audio?: StringNullableFilter | string | null
    reference_text?: StringNullableFilter | string | null
    sort?: IntNullableFilter | number | null
    creator?: BigIntNullableFilter | bigint | number | null
    create_date?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    update_date?: DateTimeNullableFilter | Date | string | null
  }

  export type ai_tts_voiceOrderByWithRelationInput = {
    id?: SortOrder
    tts_model_id?: SortOrder
    name?: SortOrder
    tts_voice?: SortOrder
    languages?: SortOrder
    voice_demo?: SortOrder
    remark?: SortOrder
    reference_audio?: SortOrder
    reference_text?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_tts_voiceWhereUniqueInput = {
    id?: string
  }

  export type ai_tts_voiceOrderByWithAggregationInput = {
    id?: SortOrder
    tts_model_id?: SortOrder
    name?: SortOrder
    tts_voice?: SortOrder
    languages?: SortOrder
    voice_demo?: SortOrder
    remark?: SortOrder
    reference_audio?: SortOrder
    reference_text?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    _count?: ai_tts_voiceCountOrderByAggregateInput
    _avg?: ai_tts_voiceAvgOrderByAggregateInput
    _max?: ai_tts_voiceMaxOrderByAggregateInput
    _min?: ai_tts_voiceMinOrderByAggregateInput
    _sum?: ai_tts_voiceSumOrderByAggregateInput
  }

  export type ai_tts_voiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_tts_voiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_tts_voiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_tts_voiceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    tts_model_id?: StringNullableWithAggregatesFilter | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    tts_voice?: StringNullableWithAggregatesFilter | string | null
    languages?: StringNullableWithAggregatesFilter | string | null
    voice_demo?: StringNullableWithAggregatesFilter | string | null
    remark?: StringNullableWithAggregatesFilter | string | null
    reference_audio?: StringNullableWithAggregatesFilter | string | null
    reference_text?: StringNullableWithAggregatesFilter | string | null
    sort?: IntNullableWithAggregatesFilter | number | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ai_voiceprintWhereInput = {
    AND?: Enumerable<ai_voiceprintWhereInput>
    OR?: Enumerable<ai_voiceprintWhereInput>
    NOT?: Enumerable<ai_voiceprintWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    user_id?: BigIntNullableFilter | bigint | number | null
    agent_id?: StringNullableFilter | string | null
    agent_code?: StringNullableFilter | string | null
    agent_name?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    embedding?: StringNullableFilter | string | null
    memory?: StringNullableFilter | string | null
    sort?: IntNullableFilter | number | null
    creator?: BigIntNullableFilter | bigint | number | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type ai_voiceprintOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    agent_id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    description?: SortOrder
    embedding?: SortOrder
    memory?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_voiceprintWhereUniqueInput = {
    id?: string
  }

  export type ai_voiceprintOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    agent_id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    description?: SortOrder
    embedding?: SortOrder
    memory?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
    _count?: ai_voiceprintCountOrderByAggregateInput
    _avg?: ai_voiceprintAvgOrderByAggregateInput
    _max?: ai_voiceprintMaxOrderByAggregateInput
    _min?: ai_voiceprintMinOrderByAggregateInput
    _sum?: ai_voiceprintSumOrderByAggregateInput
  }

  export type ai_voiceprintScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ai_voiceprintScalarWhereWithAggregatesInput>
    OR?: Enumerable<ai_voiceprintScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ai_voiceprintScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    user_id?: BigIntNullableWithAggregatesFilter | bigint | number | null
    agent_id?: StringNullableWithAggregatesFilter | string | null
    agent_code?: StringNullableWithAggregatesFilter | string | null
    agent_name?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    embedding?: StringNullableWithAggregatesFilter | string | null
    memory?: StringNullableWithAggregatesFilter | string | null
    sort?: IntNullableWithAggregatesFilter | number | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type sys_dict_dataWhereInput = {
    AND?: Enumerable<sys_dict_dataWhereInput>
    OR?: Enumerable<sys_dict_dataWhereInput>
    NOT?: Enumerable<sys_dict_dataWhereInput>
    id?: BigIntFilter | bigint | number
    dict_type_id?: BigIntFilter | bigint | number
    dict_label?: StringFilter | string
    dict_value?: StringNullableFilter | string | null
    remark?: StringNullableFilter | string | null
    sort?: IntNullableFilter | number | null
    creator?: BigIntNullableFilter | bigint | number | null
    create_date?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    update_date?: DateTimeNullableFilter | Date | string | null
  }

  export type sys_dict_dataOrderByWithRelationInput = {
    id?: SortOrder
    dict_type_id?: SortOrder
    dict_label?: SortOrder
    dict_value?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_dict_dataWhereUniqueInput = {
    id?: bigint | number
    dict_type_id_dict_value?: sys_dict_dataDict_type_idDict_valueCompoundUniqueInput
  }

  export type sys_dict_dataOrderByWithAggregationInput = {
    id?: SortOrder
    dict_type_id?: SortOrder
    dict_label?: SortOrder
    dict_value?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    _count?: sys_dict_dataCountOrderByAggregateInput
    _avg?: sys_dict_dataAvgOrderByAggregateInput
    _max?: sys_dict_dataMaxOrderByAggregateInput
    _min?: sys_dict_dataMinOrderByAggregateInput
    _sum?: sys_dict_dataSumOrderByAggregateInput
  }

  export type sys_dict_dataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<sys_dict_dataScalarWhereWithAggregatesInput>
    OR?: Enumerable<sys_dict_dataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<sys_dict_dataScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    dict_type_id?: BigIntWithAggregatesFilter | bigint | number
    dict_label?: StringWithAggregatesFilter | string
    dict_value?: StringNullableWithAggregatesFilter | string | null
    remark?: StringNullableWithAggregatesFilter | string | null
    sort?: IntNullableWithAggregatesFilter | number | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type sys_dict_typeWhereInput = {
    AND?: Enumerable<sys_dict_typeWhereInput>
    OR?: Enumerable<sys_dict_typeWhereInput>
    NOT?: Enumerable<sys_dict_typeWhereInput>
    id?: BigIntFilter | bigint | number
    dict_type?: StringFilter | string
    dict_name?: StringFilter | string
    remark?: StringNullableFilter | string | null
    sort?: IntNullableFilter | number | null
    creator?: BigIntNullableFilter | bigint | number | null
    create_date?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    update_date?: DateTimeNullableFilter | Date | string | null
  }

  export type sys_dict_typeOrderByWithRelationInput = {
    id?: SortOrder
    dict_type?: SortOrder
    dict_name?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_dict_typeWhereUniqueInput = {
    id?: bigint | number
    dict_type?: string
  }

  export type sys_dict_typeOrderByWithAggregationInput = {
    id?: SortOrder
    dict_type?: SortOrder
    dict_name?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    _count?: sys_dict_typeCountOrderByAggregateInput
    _avg?: sys_dict_typeAvgOrderByAggregateInput
    _max?: sys_dict_typeMaxOrderByAggregateInput
    _min?: sys_dict_typeMinOrderByAggregateInput
    _sum?: sys_dict_typeSumOrderByAggregateInput
  }

  export type sys_dict_typeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<sys_dict_typeScalarWhereWithAggregatesInput>
    OR?: Enumerable<sys_dict_typeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<sys_dict_typeScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    dict_type?: StringWithAggregatesFilter | string
    dict_name?: StringWithAggregatesFilter | string
    remark?: StringNullableWithAggregatesFilter | string | null
    sort?: IntNullableWithAggregatesFilter | number | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type sys_paramsWhereInput = {
    AND?: Enumerable<sys_paramsWhereInput>
    OR?: Enumerable<sys_paramsWhereInput>
    NOT?: Enumerable<sys_paramsWhereInput>
    id?: BigIntFilter | bigint | number
    param_code?: StringNullableFilter | string | null
    param_value?: StringNullableFilter | string | null
    value_type?: StringNullableFilter | string | null
    param_type?: IntNullableFilter | number | null
    remark?: StringNullableFilter | string | null
    creator?: BigIntNullableFilter | bigint | number | null
    create_date?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    update_date?: DateTimeNullableFilter | Date | string | null
  }

  export type sys_paramsOrderByWithRelationInput = {
    id?: SortOrder
    param_code?: SortOrder
    param_value?: SortOrder
    value_type?: SortOrder
    param_type?: SortOrder
    remark?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_paramsWhereUniqueInput = {
    id?: bigint | number
    param_code?: string
  }

  export type sys_paramsOrderByWithAggregationInput = {
    id?: SortOrder
    param_code?: SortOrder
    param_value?: SortOrder
    value_type?: SortOrder
    param_type?: SortOrder
    remark?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    _count?: sys_paramsCountOrderByAggregateInput
    _avg?: sys_paramsAvgOrderByAggregateInput
    _max?: sys_paramsMaxOrderByAggregateInput
    _min?: sys_paramsMinOrderByAggregateInput
    _sum?: sys_paramsSumOrderByAggregateInput
  }

  export type sys_paramsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<sys_paramsScalarWhereWithAggregatesInput>
    OR?: Enumerable<sys_paramsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<sys_paramsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    param_code?: StringNullableWithAggregatesFilter | string | null
    param_value?: StringNullableWithAggregatesFilter | string | null
    value_type?: StringNullableWithAggregatesFilter | string | null
    param_type?: IntNullableWithAggregatesFilter | number | null
    remark?: StringNullableWithAggregatesFilter | string | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type sys_userWhereInput = {
    AND?: Enumerable<sys_userWhereInput>
    OR?: Enumerable<sys_userWhereInput>
    NOT?: Enumerable<sys_userWhereInput>
    id?: BigIntFilter | bigint | number
    username?: StringFilter | string
    password?: StringNullableFilter | string | null
    super_admin?: IntNullableFilter | number | null
    status?: IntNullableFilter | number | null
    create_date?: DateTimeNullableFilter | Date | string | null
    updater?: BigIntNullableFilter | bigint | number | null
    creator?: BigIntNullableFilter | bigint | number | null
    update_date?: DateTimeNullableFilter | Date | string | null
  }

  export type sys_userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    super_admin?: SortOrder
    status?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    creator?: SortOrder
    update_date?: SortOrder
  }

  export type sys_userWhereUniqueInput = {
    id?: bigint | number
    username?: string
  }

  export type sys_userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    super_admin?: SortOrder
    status?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    creator?: SortOrder
    update_date?: SortOrder
    _count?: sys_userCountOrderByAggregateInput
    _avg?: sys_userAvgOrderByAggregateInput
    _max?: sys_userMaxOrderByAggregateInput
    _min?: sys_userMinOrderByAggregateInput
    _sum?: sys_userSumOrderByAggregateInput
  }

  export type sys_userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<sys_userScalarWhereWithAggregatesInput>
    OR?: Enumerable<sys_userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<sys_userScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    username?: StringWithAggregatesFilter | string
    password?: StringNullableWithAggregatesFilter | string | null
    super_admin?: IntNullableWithAggregatesFilter | number | null
    status?: IntNullableWithAggregatesFilter | number | null
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updater?: BigIntNullableWithAggregatesFilter | bigint | number | null
    creator?: BigIntNullableWithAggregatesFilter | bigint | number | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type sys_user_tokenWhereInput = {
    AND?: Enumerable<sys_user_tokenWhereInput>
    OR?: Enumerable<sys_user_tokenWhereInput>
    NOT?: Enumerable<sys_user_tokenWhereInput>
    id?: BigIntFilter | bigint | number
    user_id?: BigIntFilter | bigint | number
    token?: StringFilter | string
    expire_date?: DateTimeNullableFilter | Date | string | null
    update_date?: DateTimeNullableFilter | Date | string | null
    create_date?: DateTimeNullableFilter | Date | string | null
  }

  export type sys_user_tokenOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expire_date?: SortOrder
    update_date?: SortOrder
    create_date?: SortOrder
  }

  export type sys_user_tokenWhereUniqueInput = {
    id?: bigint | number
    user_id?: bigint | number
    token?: string
  }

  export type sys_user_tokenOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expire_date?: SortOrder
    update_date?: SortOrder
    create_date?: SortOrder
    _count?: sys_user_tokenCountOrderByAggregateInput
    _avg?: sys_user_tokenAvgOrderByAggregateInput
    _max?: sys_user_tokenMaxOrderByAggregateInput
    _min?: sys_user_tokenMinOrderByAggregateInput
    _sum?: sys_user_tokenSumOrderByAggregateInput
  }

  export type sys_user_tokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<sys_user_tokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<sys_user_tokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<sys_user_tokenScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    user_id?: BigIntWithAggregatesFilter | bigint | number
    token?: StringWithAggregatesFilter | string
    expire_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type DATABASECHANGELOGLOCKCreateInput = {
    ID: number
    LOCKED: boolean
    LOCKGRANTED?: Date | string | null
    LOCKEDBY?: string | null
  }

  export type DATABASECHANGELOGLOCKUncheckedCreateInput = {
    ID: number
    LOCKED: boolean
    LOCKGRANTED?: Date | string | null
    LOCKEDBY?: string | null
  }

  export type DATABASECHANGELOGLOCKUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    LOCKED?: BoolFieldUpdateOperationsInput | boolean
    LOCKGRANTED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOCKEDBY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DATABASECHANGELOGLOCKUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    LOCKED?: BoolFieldUpdateOperationsInput | boolean
    LOCKGRANTED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOCKEDBY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DATABASECHANGELOGLOCKCreateManyInput = {
    ID: number
    LOCKED: boolean
    LOCKGRANTED?: Date | string | null
    LOCKEDBY?: string | null
  }

  export type DATABASECHANGELOGLOCKUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    LOCKED?: BoolFieldUpdateOperationsInput | boolean
    LOCKGRANTED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOCKEDBY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DATABASECHANGELOGLOCKUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    LOCKED?: BoolFieldUpdateOperationsInput | boolean
    LOCKGRANTED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOCKEDBY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ai_agentCreateInput = {
    id: string
    user_id?: bigint | number | null
    agent_code?: string | null
    agent_name?: string | null
    asr_model_id?: string | null
    vad_model_id?: string | null
    llm_model_id?: string | null
    vllm_model_id?: string | null
    tts_model_id?: string | null
    tts_voice_id?: string | null
    mem_model_id?: string | null
    intent_model_id?: string | null
    system_prompt?: string | null
    summary_memory?: string | null
    chat_history_conf?: number
    lang_code?: string | null
    language?: string | null
    sort?: number | null
    creator?: bigint | number | null
    created_at?: Date | string | null
    updater?: bigint | number | null
    updated_at?: Date | string | null
  }

  export type ai_agentUncheckedCreateInput = {
    id: string
    user_id?: bigint | number | null
    agent_code?: string | null
    agent_name?: string | null
    asr_model_id?: string | null
    vad_model_id?: string | null
    llm_model_id?: string | null
    vllm_model_id?: string | null
    tts_model_id?: string | null
    tts_voice_id?: string | null
    mem_model_id?: string | null
    intent_model_id?: string | null
    system_prompt?: string | null
    summary_memory?: string | null
    chat_history_conf?: number
    lang_code?: string | null
    language?: string | null
    sort?: number | null
    creator?: bigint | number | null
    created_at?: Date | string | null
    updater?: bigint | number | null
    updated_at?: Date | string | null
  }

  export type ai_agentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    asr_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vad_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    llm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vllm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice_id?: NullableStringFieldUpdateOperationsInput | string | null
    mem_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    intent_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    system_prompt?: NullableStringFieldUpdateOperationsInput | string | null
    summary_memory?: NullableStringFieldUpdateOperationsInput | string | null
    chat_history_conf?: IntFieldUpdateOperationsInput | number
    lang_code?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_agentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    asr_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vad_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    llm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vllm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice_id?: NullableStringFieldUpdateOperationsInput | string | null
    mem_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    intent_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    system_prompt?: NullableStringFieldUpdateOperationsInput | string | null
    summary_memory?: NullableStringFieldUpdateOperationsInput | string | null
    chat_history_conf?: IntFieldUpdateOperationsInput | number
    lang_code?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_agentCreateManyInput = {
    id: string
    user_id?: bigint | number | null
    agent_code?: string | null
    agent_name?: string | null
    asr_model_id?: string | null
    vad_model_id?: string | null
    llm_model_id?: string | null
    vllm_model_id?: string | null
    tts_model_id?: string | null
    tts_voice_id?: string | null
    mem_model_id?: string | null
    intent_model_id?: string | null
    system_prompt?: string | null
    summary_memory?: string | null
    chat_history_conf?: number
    lang_code?: string | null
    language?: string | null
    sort?: number | null
    creator?: bigint | number | null
    created_at?: Date | string | null
    updater?: bigint | number | null
    updated_at?: Date | string | null
  }

  export type ai_agentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    asr_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vad_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    llm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vllm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice_id?: NullableStringFieldUpdateOperationsInput | string | null
    mem_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    intent_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    system_prompt?: NullableStringFieldUpdateOperationsInput | string | null
    summary_memory?: NullableStringFieldUpdateOperationsInput | string | null
    chat_history_conf?: IntFieldUpdateOperationsInput | number
    lang_code?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_agentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    asr_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vad_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    llm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vllm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice_id?: NullableStringFieldUpdateOperationsInput | string | null
    mem_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    intent_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    system_prompt?: NullableStringFieldUpdateOperationsInput | string | null
    summary_memory?: NullableStringFieldUpdateOperationsInput | string | null
    chat_history_conf?: IntFieldUpdateOperationsInput | number
    lang_code?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_agent_chat_audioCreateInput = {
    id: string
    audio?: Buffer | null
  }

  export type ai_agent_chat_audioUncheckedCreateInput = {
    id: string
    audio?: Buffer | null
  }

  export type ai_agent_chat_audioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    audio?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type ai_agent_chat_audioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    audio?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type ai_agent_chat_audioCreateManyInput = {
    id: string
    audio?: Buffer | null
  }

  export type ai_agent_chat_audioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    audio?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type ai_agent_chat_audioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    audio?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type ai_agent_chat_historyCreateInput = {
    id?: bigint | number
    mac_address?: string | null
    agent_id?: string | null
    session_id?: string | null
    chat_type?: number | null
    content?: string | null
    audio_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ai_agent_chat_historyUncheckedCreateInput = {
    id?: bigint | number
    mac_address?: string | null
    agent_id?: string | null
    session_id?: string | null
    chat_type?: number | null
    content?: string | null
    audio_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ai_agent_chat_historyUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    mac_address?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    chat_type?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    audio_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_agent_chat_historyUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    mac_address?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    chat_type?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    audio_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_agent_chat_historyCreateManyInput = {
    id?: bigint | number
    mac_address?: string | null
    agent_id?: string | null
    session_id?: string | null
    chat_type?: number | null
    content?: string | null
    audio_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ai_agent_chat_historyUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    mac_address?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    chat_type?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    audio_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_agent_chat_historyUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    mac_address?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    chat_type?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    audio_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_agent_plugin_mappingCreateInput = {
    id?: bigint | number
    agent_id: string
    plugin_id: string
    param_info: JsonNullValueInput | InputJsonValue
  }

  export type ai_agent_plugin_mappingUncheckedCreateInput = {
    id?: bigint | number
    agent_id: string
    plugin_id: string
    param_info: JsonNullValueInput | InputJsonValue
  }

  export type ai_agent_plugin_mappingUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    agent_id?: StringFieldUpdateOperationsInput | string
    plugin_id?: StringFieldUpdateOperationsInput | string
    param_info?: JsonNullValueInput | InputJsonValue
  }

  export type ai_agent_plugin_mappingUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    agent_id?: StringFieldUpdateOperationsInput | string
    plugin_id?: StringFieldUpdateOperationsInput | string
    param_info?: JsonNullValueInput | InputJsonValue
  }

  export type ai_agent_plugin_mappingCreateManyInput = {
    id?: bigint | number
    agent_id: string
    plugin_id: string
    param_info: JsonNullValueInput | InputJsonValue
  }

  export type ai_agent_plugin_mappingUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    agent_id?: StringFieldUpdateOperationsInput | string
    plugin_id?: StringFieldUpdateOperationsInput | string
    param_info?: JsonNullValueInput | InputJsonValue
  }

  export type ai_agent_plugin_mappingUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    agent_id?: StringFieldUpdateOperationsInput | string
    plugin_id?: StringFieldUpdateOperationsInput | string
    param_info?: JsonNullValueInput | InputJsonValue
  }

  export type ai_agent_templateCreateInput = {
    id: string
    agent_code?: string | null
    agent_name?: string | null
    asr_model_id?: string | null
    vad_model_id?: string | null
    llm_model_id?: string | null
    vllm_model_id?: string | null
    tts_model_id?: string | null
    tts_voice_id?: string | null
    mem_model_id?: string | null
    intent_model_id?: string | null
    system_prompt?: string | null
    summary_memory?: string | null
    chat_history_conf?: number
    lang_code?: string | null
    language?: string | null
    sort?: number | null
    creator?: bigint | number | null
    created_at?: Date | string | null
    updater?: bigint | number | null
    updated_at?: Date | string | null
  }

  export type ai_agent_templateUncheckedCreateInput = {
    id: string
    agent_code?: string | null
    agent_name?: string | null
    asr_model_id?: string | null
    vad_model_id?: string | null
    llm_model_id?: string | null
    vllm_model_id?: string | null
    tts_model_id?: string | null
    tts_voice_id?: string | null
    mem_model_id?: string | null
    intent_model_id?: string | null
    system_prompt?: string | null
    summary_memory?: string | null
    chat_history_conf?: number
    lang_code?: string | null
    language?: string | null
    sort?: number | null
    creator?: bigint | number | null
    created_at?: Date | string | null
    updater?: bigint | number | null
    updated_at?: Date | string | null
  }

  export type ai_agent_templateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    asr_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vad_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    llm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vllm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice_id?: NullableStringFieldUpdateOperationsInput | string | null
    mem_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    intent_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    system_prompt?: NullableStringFieldUpdateOperationsInput | string | null
    summary_memory?: NullableStringFieldUpdateOperationsInput | string | null
    chat_history_conf?: IntFieldUpdateOperationsInput | number
    lang_code?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_agent_templateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    asr_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vad_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    llm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vllm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice_id?: NullableStringFieldUpdateOperationsInput | string | null
    mem_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    intent_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    system_prompt?: NullableStringFieldUpdateOperationsInput | string | null
    summary_memory?: NullableStringFieldUpdateOperationsInput | string | null
    chat_history_conf?: IntFieldUpdateOperationsInput | number
    lang_code?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_agent_templateCreateManyInput = {
    id: string
    agent_code?: string | null
    agent_name?: string | null
    asr_model_id?: string | null
    vad_model_id?: string | null
    llm_model_id?: string | null
    vllm_model_id?: string | null
    tts_model_id?: string | null
    tts_voice_id?: string | null
    mem_model_id?: string | null
    intent_model_id?: string | null
    system_prompt?: string | null
    summary_memory?: string | null
    chat_history_conf?: number
    lang_code?: string | null
    language?: string | null
    sort?: number | null
    creator?: bigint | number | null
    created_at?: Date | string | null
    updater?: bigint | number | null
    updated_at?: Date | string | null
  }

  export type ai_agent_templateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    asr_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vad_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    llm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vllm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice_id?: NullableStringFieldUpdateOperationsInput | string | null
    mem_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    intent_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    system_prompt?: NullableStringFieldUpdateOperationsInput | string | null
    summary_memory?: NullableStringFieldUpdateOperationsInput | string | null
    chat_history_conf?: IntFieldUpdateOperationsInput | number
    lang_code?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_agent_templateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    asr_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vad_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    llm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    vllm_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice_id?: NullableStringFieldUpdateOperationsInput | string | null
    mem_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    intent_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    system_prompt?: NullableStringFieldUpdateOperationsInput | string | null
    summary_memory?: NullableStringFieldUpdateOperationsInput | string | null
    chat_history_conf?: IntFieldUpdateOperationsInput | number
    lang_code?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_agent_voice_printCreateInput = {
    id: string
    agent_id: string
    source_name: string
    introduce?: string | null
    create_date?: Date | string | null
    creator?: bigint | number | null
    update_date?: Date | string | null
    updater?: bigint | number | null
    audio_id: string
  }

  export type ai_agent_voice_printUncheckedCreateInput = {
    id: string
    agent_id: string
    source_name: string
    introduce?: string | null
    create_date?: Date | string | null
    creator?: bigint | number | null
    update_date?: Date | string | null
    updater?: bigint | number | null
    audio_id: string
  }

  export type ai_agent_voice_printUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    audio_id?: StringFieldUpdateOperationsInput | string
  }

  export type ai_agent_voice_printUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    audio_id?: StringFieldUpdateOperationsInput | string
  }

  export type ai_agent_voice_printCreateManyInput = {
    id: string
    agent_id: string
    source_name: string
    introduce?: string | null
    create_date?: Date | string | null
    creator?: bigint | number | null
    update_date?: Date | string | null
    updater?: bigint | number | null
    audio_id: string
  }

  export type ai_agent_voice_printUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    audio_id?: StringFieldUpdateOperationsInput | string
  }

  export type ai_agent_voice_printUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    introduce?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    audio_id?: StringFieldUpdateOperationsInput | string
  }

  export type ai_deviceCreateInput = {
    id: string
    user_id?: bigint | number | null
    mac_address?: string | null
    last_connected_at?: Date | string | null
    auto_update?: number | null
    board?: string | null
    alias?: string | null
    agent_id?: string | null
    app_version?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_deviceUncheckedCreateInput = {
    id: string
    user_id?: bigint | number | null
    mac_address?: string | null
    last_connected_at?: Date | string | null
    auto_update?: number | null
    board?: string | null
    alias?: string | null
    agent_id?: string | null
    app_version?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_deviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mac_address?: NullableStringFieldUpdateOperationsInput | string | null
    last_connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_update?: NullableIntFieldUpdateOperationsInput | number | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_deviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mac_address?: NullableStringFieldUpdateOperationsInput | string | null
    last_connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_update?: NullableIntFieldUpdateOperationsInput | number | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_deviceCreateManyInput = {
    id: string
    user_id?: bigint | number | null
    mac_address?: string | null
    last_connected_at?: Date | string | null
    auto_update?: number | null
    board?: string | null
    alias?: string | null
    agent_id?: string | null
    app_version?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_deviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mac_address?: NullableStringFieldUpdateOperationsInput | string | null
    last_connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_update?: NullableIntFieldUpdateOperationsInput | number | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_deviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mac_address?: NullableStringFieldUpdateOperationsInput | string | null
    last_connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_update?: NullableIntFieldUpdateOperationsInput | number | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_model_configCreateInput = {
    id: string
    model_type?: string | null
    model_code?: string | null
    model_name?: string | null
    is_default?: boolean | null
    is_enabled?: boolean | null
    config_json?: NullableJsonNullValueInput | InputJsonValue
    doc_link?: string | null
    remark?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_model_configUncheckedCreateInput = {
    id: string
    model_type?: string | null
    model_code?: string | null
    model_name?: string | null
    is_default?: boolean | null
    is_enabled?: boolean | null
    config_json?: NullableJsonNullValueInput | InputJsonValue
    doc_link?: string | null
    remark?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_model_configUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model_type?: NullableStringFieldUpdateOperationsInput | string | null
    model_code?: NullableStringFieldUpdateOperationsInput | string | null
    model_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    config_json?: NullableJsonNullValueInput | InputJsonValue
    doc_link?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_model_configUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model_type?: NullableStringFieldUpdateOperationsInput | string | null
    model_code?: NullableStringFieldUpdateOperationsInput | string | null
    model_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    config_json?: NullableJsonNullValueInput | InputJsonValue
    doc_link?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_model_configCreateManyInput = {
    id: string
    model_type?: string | null
    model_code?: string | null
    model_name?: string | null
    is_default?: boolean | null
    is_enabled?: boolean | null
    config_json?: NullableJsonNullValueInput | InputJsonValue
    doc_link?: string | null
    remark?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_model_configUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    model_type?: NullableStringFieldUpdateOperationsInput | string | null
    model_code?: NullableStringFieldUpdateOperationsInput | string | null
    model_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    config_json?: NullableJsonNullValueInput | InputJsonValue
    doc_link?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_model_configUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    model_type?: NullableStringFieldUpdateOperationsInput | string | null
    model_code?: NullableStringFieldUpdateOperationsInput | string | null
    model_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    config_json?: NullableJsonNullValueInput | InputJsonValue
    doc_link?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_model_providerCreateInput = {
    id: string
    model_type?: string | null
    provider_code?: string | null
    name?: string | null
    fields?: NullableJsonNullValueInput | InputJsonValue
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_model_providerUncheckedCreateInput = {
    id: string
    model_type?: string | null
    provider_code?: string | null
    name?: string | null
    fields?: NullableJsonNullValueInput | InputJsonValue
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_model_providerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model_type?: NullableStringFieldUpdateOperationsInput | string | null
    provider_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: NullableJsonNullValueInput | InputJsonValue
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_model_providerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model_type?: NullableStringFieldUpdateOperationsInput | string | null
    provider_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: NullableJsonNullValueInput | InputJsonValue
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_model_providerCreateManyInput = {
    id: string
    model_type?: string | null
    provider_code?: string | null
    name?: string | null
    fields?: NullableJsonNullValueInput | InputJsonValue
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_model_providerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    model_type?: NullableStringFieldUpdateOperationsInput | string | null
    provider_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: NullableJsonNullValueInput | InputJsonValue
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_model_providerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    model_type?: NullableStringFieldUpdateOperationsInput | string | null
    provider_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: NullableJsonNullValueInput | InputJsonValue
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_otaCreateInput = {
    id: string
    firmware_name?: string | null
    type?: string | null
    version?: string | null
    size?: bigint | number | null
    remark?: string | null
    firmware_path?: string | null
    sort?: number | null
    updater?: bigint | number | null
    update_date?: Date | string | null
    creator?: bigint | number | null
    create_date?: Date | string | null
  }

  export type ai_otaUncheckedCreateInput = {
    id: string
    firmware_name?: string | null
    type?: string | null
    version?: string | null
    size?: bigint | number | null
    remark?: string | null
    firmware_path?: string | null
    sort?: number | null
    updater?: bigint | number | null
    update_date?: Date | string | null
    creator?: bigint | number | null
    create_date?: Date | string | null
  }

  export type ai_otaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firmware_name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    firmware_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_otaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firmware_name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    firmware_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_otaCreateManyInput = {
    id: string
    firmware_name?: string | null
    type?: string | null
    version?: string | null
    size?: bigint | number | null
    remark?: string | null
    firmware_path?: string | null
    sort?: number | null
    updater?: bigint | number | null
    update_date?: Date | string | null
    creator?: bigint | number | null
    create_date?: Date | string | null
  }

  export type ai_otaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firmware_name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    firmware_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_otaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firmware_name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    firmware_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_tts_voiceCreateInput = {
    id: string
    tts_model_id?: string | null
    name?: string | null
    tts_voice?: string | null
    languages?: string | null
    voice_demo?: string | null
    remark?: string | null
    reference_audio?: string | null
    reference_text?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_tts_voiceUncheckedCreateInput = {
    id: string
    tts_model_id?: string | null
    name?: string | null
    tts_voice?: string | null
    languages?: string | null
    voice_demo?: string | null
    remark?: string | null
    reference_audio?: string | null
    reference_text?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_tts_voiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    voice_demo?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    reference_audio?: NullableStringFieldUpdateOperationsInput | string | null
    reference_text?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_tts_voiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    voice_demo?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    reference_audio?: NullableStringFieldUpdateOperationsInput | string | null
    reference_text?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_tts_voiceCreateManyInput = {
    id: string
    tts_model_id?: string | null
    name?: string | null
    tts_voice?: string | null
    languages?: string | null
    voice_demo?: string | null
    remark?: string | null
    reference_audio?: string | null
    reference_text?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type ai_tts_voiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    voice_demo?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    reference_audio?: NullableStringFieldUpdateOperationsInput | string | null
    reference_text?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_tts_voiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tts_model_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tts_voice?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    voice_demo?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    reference_audio?: NullableStringFieldUpdateOperationsInput | string | null
    reference_text?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_voiceprintCreateInput = {
    id: string
    name?: string | null
    user_id?: bigint | number | null
    agent_id?: string | null
    agent_code?: string | null
    agent_name?: string | null
    description?: string | null
    embedding?: string | null
    memory?: string | null
    sort?: number | null
    creator?: bigint | number | null
    created_at?: Date | string | null
    updater?: bigint | number | null
    updated_at?: Date | string | null
  }

  export type ai_voiceprintUncheckedCreateInput = {
    id: string
    name?: string | null
    user_id?: bigint | number | null
    agent_id?: string | null
    agent_code?: string | null
    agent_name?: string | null
    description?: string | null
    embedding?: string | null
    memory?: string | null
    sort?: number | null
    creator?: bigint | number | null
    created_at?: Date | string | null
    updater?: bigint | number | null
    updated_at?: Date | string | null
  }

  export type ai_voiceprintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_voiceprintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_voiceprintCreateManyInput = {
    id: string
    name?: string | null
    user_id?: bigint | number | null
    agent_id?: string | null
    agent_code?: string | null
    agent_name?: string | null
    description?: string | null
    embedding?: string | null
    memory?: string | null
    sort?: number | null
    creator?: bigint | number | null
    created_at?: Date | string | null
    updater?: bigint | number | null
    updated_at?: Date | string | null
  }

  export type ai_voiceprintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_voiceprintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    agent_id?: NullableStringFieldUpdateOperationsInput | string | null
    agent_code?: NullableStringFieldUpdateOperationsInput | string | null
    agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_dict_dataCreateInput = {
    id: bigint | number
    dict_type_id: bigint | number
    dict_label: string
    dict_value?: string | null
    remark?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_dict_dataUncheckedCreateInput = {
    id: bigint | number
    dict_type_id: bigint | number
    dict_label: string
    dict_value?: string | null
    remark?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_dict_dataUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_type_id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_label?: StringFieldUpdateOperationsInput | string
    dict_value?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_dict_dataUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_type_id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_label?: StringFieldUpdateOperationsInput | string
    dict_value?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_dict_dataCreateManyInput = {
    id: bigint | number
    dict_type_id: bigint | number
    dict_label: string
    dict_value?: string | null
    remark?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_dict_dataUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_type_id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_label?: StringFieldUpdateOperationsInput | string
    dict_value?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_dict_dataUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_type_id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_label?: StringFieldUpdateOperationsInput | string
    dict_value?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_dict_typeCreateInput = {
    id: bigint | number
    dict_type: string
    dict_name: string
    remark?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_dict_typeUncheckedCreateInput = {
    id: bigint | number
    dict_type: string
    dict_name: string
    remark?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_dict_typeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_type?: StringFieldUpdateOperationsInput | string
    dict_name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_dict_typeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_type?: StringFieldUpdateOperationsInput | string
    dict_name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_dict_typeCreateManyInput = {
    id: bigint | number
    dict_type: string
    dict_name: string
    remark?: string | null
    sort?: number | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_dict_typeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_type?: StringFieldUpdateOperationsInput | string
    dict_name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_dict_typeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dict_type?: StringFieldUpdateOperationsInput | string
    dict_name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_paramsCreateInput = {
    id: bigint | number
    param_code?: string | null
    param_value?: string | null
    value_type?: string | null
    param_type?: number | null
    remark?: string | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_paramsUncheckedCreateInput = {
    id: bigint | number
    param_code?: string | null
    param_value?: string | null
    value_type?: string | null
    param_type?: number | null
    remark?: string | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_paramsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    param_code?: NullableStringFieldUpdateOperationsInput | string | null
    param_value?: NullableStringFieldUpdateOperationsInput | string | null
    value_type?: NullableStringFieldUpdateOperationsInput | string | null
    param_type?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_paramsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    param_code?: NullableStringFieldUpdateOperationsInput | string | null
    param_value?: NullableStringFieldUpdateOperationsInput | string | null
    value_type?: NullableStringFieldUpdateOperationsInput | string | null
    param_type?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_paramsCreateManyInput = {
    id: bigint | number
    param_code?: string | null
    param_value?: string | null
    value_type?: string | null
    param_type?: number | null
    remark?: string | null
    creator?: bigint | number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_paramsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    param_code?: NullableStringFieldUpdateOperationsInput | string | null
    param_value?: NullableStringFieldUpdateOperationsInput | string | null
    value_type?: NullableStringFieldUpdateOperationsInput | string | null
    param_type?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_paramsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    param_code?: NullableStringFieldUpdateOperationsInput | string | null
    param_value?: NullableStringFieldUpdateOperationsInput | string | null
    value_type?: NullableStringFieldUpdateOperationsInput | string | null
    param_type?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_userCreateInput = {
    id: bigint | number
    username: string
    password?: string | null
    super_admin?: number | null
    status?: number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    creator?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_userUncheckedCreateInput = {
    id: bigint | number
    username: string
    password?: string | null
    super_admin?: number | null
    status?: number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    creator?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_userUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    super_admin?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_userUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    super_admin?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_userCreateManyInput = {
    id: bigint | number
    username: string
    password?: string | null
    super_admin?: number | null
    status?: number | null
    create_date?: Date | string | null
    updater?: bigint | number | null
    creator?: bigint | number | null
    update_date?: Date | string | null
  }

  export type sys_userUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    super_admin?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_userUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    super_admin?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    creator?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_user_tokenCreateInput = {
    id: bigint | number
    user_id: bigint | number
    token: string
    expire_date?: Date | string | null
    update_date?: Date | string | null
    create_date?: Date | string | null
  }

  export type sys_user_tokenUncheckedCreateInput = {
    id: bigint | number
    user_id: bigint | number
    token: string
    expire_date?: Date | string | null
    update_date?: Date | string | null
    create_date?: Date | string | null
  }

  export type sys_user_tokenUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_user_tokenUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_user_tokenCreateManyInput = {
    id: bigint | number
    user_id: bigint | number
    token: string
    expire_date?: Date | string | null
    update_date?: Date | string | null
    create_date?: Date | string | null
  }

  export type sys_user_tokenUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_user_tokenUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DATABASECHANGELOGLOCKCountOrderByAggregateInput = {
    ID?: SortOrder
    LOCKED?: SortOrder
    LOCKGRANTED?: SortOrder
    LOCKEDBY?: SortOrder
  }

  export type DATABASECHANGELOGLOCKAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type DATABASECHANGELOGLOCKMaxOrderByAggregateInput = {
    ID?: SortOrder
    LOCKED?: SortOrder
    LOCKGRANTED?: SortOrder
    LOCKEDBY?: SortOrder
  }

  export type DATABASECHANGELOGLOCKMinOrderByAggregateInput = {
    ID?: SortOrder
    LOCKED?: SortOrder
    LOCKGRANTED?: SortOrder
    LOCKEDBY?: SortOrder
  }

  export type DATABASECHANGELOGLOCKSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type ai_agentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    asr_model_id?: SortOrder
    vad_model_id?: SortOrder
    llm_model_id?: SortOrder
    vllm_model_id?: SortOrder
    tts_model_id?: SortOrder
    tts_voice_id?: SortOrder
    mem_model_id?: SortOrder
    intent_model_id?: SortOrder
    system_prompt?: SortOrder
    summary_memory?: SortOrder
    chat_history_conf?: SortOrder
    lang_code?: SortOrder
    language?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agentAvgOrderByAggregateInput = {
    user_id?: SortOrder
    chat_history_conf?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_agentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    asr_model_id?: SortOrder
    vad_model_id?: SortOrder
    llm_model_id?: SortOrder
    vllm_model_id?: SortOrder
    tts_model_id?: SortOrder
    tts_voice_id?: SortOrder
    mem_model_id?: SortOrder
    intent_model_id?: SortOrder
    system_prompt?: SortOrder
    summary_memory?: SortOrder
    chat_history_conf?: SortOrder
    lang_code?: SortOrder
    language?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    asr_model_id?: SortOrder
    vad_model_id?: SortOrder
    llm_model_id?: SortOrder
    vllm_model_id?: SortOrder
    tts_model_id?: SortOrder
    tts_voice_id?: SortOrder
    mem_model_id?: SortOrder
    intent_model_id?: SortOrder
    system_prompt?: SortOrder
    summary_memory?: SortOrder
    chat_history_conf?: SortOrder
    lang_code?: SortOrder
    language?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agentSumOrderByAggregateInput = {
    user_id?: SortOrder
    chat_history_conf?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type ai_agent_chat_audioCountOrderByAggregateInput = {
    id?: SortOrder
    audio?: SortOrder
  }

  export type ai_agent_chat_audioMaxOrderByAggregateInput = {
    id?: SortOrder
    audio?: SortOrder
  }

  export type ai_agent_chat_audioMinOrderByAggregateInput = {
    id?: SortOrder
    audio?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ai_agent_chat_historyCountOrderByAggregateInput = {
    id?: SortOrder
    mac_address?: SortOrder
    agent_id?: SortOrder
    session_id?: SortOrder
    chat_type?: SortOrder
    content?: SortOrder
    audio_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agent_chat_historyAvgOrderByAggregateInput = {
    id?: SortOrder
    chat_type?: SortOrder
  }

  export type ai_agent_chat_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    mac_address?: SortOrder
    agent_id?: SortOrder
    session_id?: SortOrder
    chat_type?: SortOrder
    content?: SortOrder
    audio_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agent_chat_historyMinOrderByAggregateInput = {
    id?: SortOrder
    mac_address?: SortOrder
    agent_id?: SortOrder
    session_id?: SortOrder
    chat_type?: SortOrder
    content?: SortOrder
    audio_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agent_chat_historySumOrderByAggregateInput = {
    id?: SortOrder
    chat_type?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type ai_agent_plugin_mappingAgent_idPlugin_idCompoundUniqueInput = {
    agent_id: string
    plugin_id: string
  }

  export type ai_agent_plugin_mappingCountOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    plugin_id?: SortOrder
    param_info?: SortOrder
  }

  export type ai_agent_plugin_mappingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ai_agent_plugin_mappingMaxOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    plugin_id?: SortOrder
  }

  export type ai_agent_plugin_mappingMinOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    plugin_id?: SortOrder
  }

  export type ai_agent_plugin_mappingSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type ai_agent_templateCountOrderByAggregateInput = {
    id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    asr_model_id?: SortOrder
    vad_model_id?: SortOrder
    llm_model_id?: SortOrder
    vllm_model_id?: SortOrder
    tts_model_id?: SortOrder
    tts_voice_id?: SortOrder
    mem_model_id?: SortOrder
    intent_model_id?: SortOrder
    system_prompt?: SortOrder
    summary_memory?: SortOrder
    chat_history_conf?: SortOrder
    lang_code?: SortOrder
    language?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agent_templateAvgOrderByAggregateInput = {
    chat_history_conf?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_agent_templateMaxOrderByAggregateInput = {
    id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    asr_model_id?: SortOrder
    vad_model_id?: SortOrder
    llm_model_id?: SortOrder
    vllm_model_id?: SortOrder
    tts_model_id?: SortOrder
    tts_voice_id?: SortOrder
    mem_model_id?: SortOrder
    intent_model_id?: SortOrder
    system_prompt?: SortOrder
    summary_memory?: SortOrder
    chat_history_conf?: SortOrder
    lang_code?: SortOrder
    language?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agent_templateMinOrderByAggregateInput = {
    id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    asr_model_id?: SortOrder
    vad_model_id?: SortOrder
    llm_model_id?: SortOrder
    vllm_model_id?: SortOrder
    tts_model_id?: SortOrder
    tts_voice_id?: SortOrder
    mem_model_id?: SortOrder
    intent_model_id?: SortOrder
    system_prompt?: SortOrder
    summary_memory?: SortOrder
    chat_history_conf?: SortOrder
    lang_code?: SortOrder
    language?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_agent_templateSumOrderByAggregateInput = {
    chat_history_conf?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_agent_voice_printCountOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    source_name?: SortOrder
    introduce?: SortOrder
    create_date?: SortOrder
    creator?: SortOrder
    update_date?: SortOrder
    updater?: SortOrder
    audio_id?: SortOrder
  }

  export type ai_agent_voice_printAvgOrderByAggregateInput = {
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_agent_voice_printMaxOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    source_name?: SortOrder
    introduce?: SortOrder
    create_date?: SortOrder
    creator?: SortOrder
    update_date?: SortOrder
    updater?: SortOrder
    audio_id?: SortOrder
  }

  export type ai_agent_voice_printMinOrderByAggregateInput = {
    id?: SortOrder
    agent_id?: SortOrder
    source_name?: SortOrder
    introduce?: SortOrder
    create_date?: SortOrder
    creator?: SortOrder
    update_date?: SortOrder
    updater?: SortOrder
    audio_id?: SortOrder
  }

  export type ai_agent_voice_printSumOrderByAggregateInput = {
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_deviceCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    mac_address?: SortOrder
    last_connected_at?: SortOrder
    auto_update?: SortOrder
    board?: SortOrder
    alias?: SortOrder
    agent_id?: SortOrder
    app_version?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_deviceAvgOrderByAggregateInput = {
    user_id?: SortOrder
    auto_update?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_deviceMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    mac_address?: SortOrder
    last_connected_at?: SortOrder
    auto_update?: SortOrder
    board?: SortOrder
    alias?: SortOrder
    agent_id?: SortOrder
    app_version?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_deviceMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    mac_address?: SortOrder
    last_connected_at?: SortOrder
    auto_update?: SortOrder
    board?: SortOrder
    alias?: SortOrder
    agent_id?: SortOrder
    app_version?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_deviceSumOrderByAggregateInput = {
    user_id?: SortOrder
    auto_update?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type ai_model_configCountOrderByAggregateInput = {
    id?: SortOrder
    model_type?: SortOrder
    model_code?: SortOrder
    model_name?: SortOrder
    is_default?: SortOrder
    is_enabled?: SortOrder
    config_json?: SortOrder
    doc_link?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_model_configAvgOrderByAggregateInput = {
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_model_configMaxOrderByAggregateInput = {
    id?: SortOrder
    model_type?: SortOrder
    model_code?: SortOrder
    model_name?: SortOrder
    is_default?: SortOrder
    is_enabled?: SortOrder
    doc_link?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_model_configMinOrderByAggregateInput = {
    id?: SortOrder
    model_type?: SortOrder
    model_code?: SortOrder
    model_name?: SortOrder
    is_default?: SortOrder
    is_enabled?: SortOrder
    doc_link?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_model_configSumOrderByAggregateInput = {
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type ai_model_providerCountOrderByAggregateInput = {
    id?: SortOrder
    model_type?: SortOrder
    provider_code?: SortOrder
    name?: SortOrder
    fields?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_model_providerAvgOrderByAggregateInput = {
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_model_providerMaxOrderByAggregateInput = {
    id?: SortOrder
    model_type?: SortOrder
    provider_code?: SortOrder
    name?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_model_providerMinOrderByAggregateInput = {
    id?: SortOrder
    model_type?: SortOrder
    provider_code?: SortOrder
    name?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_model_providerSumOrderByAggregateInput = {
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_otaCountOrderByAggregateInput = {
    id?: SortOrder
    firmware_name?: SortOrder
    type?: SortOrder
    version?: SortOrder
    size?: SortOrder
    remark?: SortOrder
    firmware_path?: SortOrder
    sort?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
  }

  export type ai_otaAvgOrderByAggregateInput = {
    size?: SortOrder
    sort?: SortOrder
    updater?: SortOrder
    creator?: SortOrder
  }

  export type ai_otaMaxOrderByAggregateInput = {
    id?: SortOrder
    firmware_name?: SortOrder
    type?: SortOrder
    version?: SortOrder
    size?: SortOrder
    remark?: SortOrder
    firmware_path?: SortOrder
    sort?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
  }

  export type ai_otaMinOrderByAggregateInput = {
    id?: SortOrder
    firmware_name?: SortOrder
    type?: SortOrder
    version?: SortOrder
    size?: SortOrder
    remark?: SortOrder
    firmware_path?: SortOrder
    sort?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
  }

  export type ai_otaSumOrderByAggregateInput = {
    size?: SortOrder
    sort?: SortOrder
    updater?: SortOrder
    creator?: SortOrder
  }

  export type ai_tts_voiceCountOrderByAggregateInput = {
    id?: SortOrder
    tts_model_id?: SortOrder
    name?: SortOrder
    tts_voice?: SortOrder
    languages?: SortOrder
    voice_demo?: SortOrder
    remark?: SortOrder
    reference_audio?: SortOrder
    reference_text?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_tts_voiceAvgOrderByAggregateInput = {
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_tts_voiceMaxOrderByAggregateInput = {
    id?: SortOrder
    tts_model_id?: SortOrder
    name?: SortOrder
    tts_voice?: SortOrder
    languages?: SortOrder
    voice_demo?: SortOrder
    remark?: SortOrder
    reference_audio?: SortOrder
    reference_text?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_tts_voiceMinOrderByAggregateInput = {
    id?: SortOrder
    tts_model_id?: SortOrder
    name?: SortOrder
    tts_voice?: SortOrder
    languages?: SortOrder
    voice_demo?: SortOrder
    remark?: SortOrder
    reference_audio?: SortOrder
    reference_text?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type ai_tts_voiceSumOrderByAggregateInput = {
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_voiceprintCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    agent_id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    description?: SortOrder
    embedding?: SortOrder
    memory?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_voiceprintAvgOrderByAggregateInput = {
    user_id?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type ai_voiceprintMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    agent_id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    description?: SortOrder
    embedding?: SortOrder
    memory?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_voiceprintMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    agent_id?: SortOrder
    agent_code?: SortOrder
    agent_name?: SortOrder
    description?: SortOrder
    embedding?: SortOrder
    memory?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    created_at?: SortOrder
    updater?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_voiceprintSumOrderByAggregateInput = {
    user_id?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type sys_dict_dataDict_type_idDict_valueCompoundUniqueInput = {
    dict_type_id: bigint | number
    dict_value: string
  }

  export type sys_dict_dataCountOrderByAggregateInput = {
    id?: SortOrder
    dict_type_id?: SortOrder
    dict_label?: SortOrder
    dict_value?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_dict_dataAvgOrderByAggregateInput = {
    id?: SortOrder
    dict_type_id?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type sys_dict_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    dict_type_id?: SortOrder
    dict_label?: SortOrder
    dict_value?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_dict_dataMinOrderByAggregateInput = {
    id?: SortOrder
    dict_type_id?: SortOrder
    dict_label?: SortOrder
    dict_value?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_dict_dataSumOrderByAggregateInput = {
    id?: SortOrder
    dict_type_id?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type sys_dict_typeCountOrderByAggregateInput = {
    id?: SortOrder
    dict_type?: SortOrder
    dict_name?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_dict_typeAvgOrderByAggregateInput = {
    id?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type sys_dict_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    dict_type?: SortOrder
    dict_name?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_dict_typeMinOrderByAggregateInput = {
    id?: SortOrder
    dict_type?: SortOrder
    dict_name?: SortOrder
    remark?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_dict_typeSumOrderByAggregateInput = {
    id?: SortOrder
    sort?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type sys_paramsCountOrderByAggregateInput = {
    id?: SortOrder
    param_code?: SortOrder
    param_value?: SortOrder
    value_type?: SortOrder
    param_type?: SortOrder
    remark?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_paramsAvgOrderByAggregateInput = {
    id?: SortOrder
    param_type?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type sys_paramsMaxOrderByAggregateInput = {
    id?: SortOrder
    param_code?: SortOrder
    param_value?: SortOrder
    value_type?: SortOrder
    param_type?: SortOrder
    remark?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_paramsMinOrderByAggregateInput = {
    id?: SortOrder
    param_code?: SortOrder
    param_value?: SortOrder
    value_type?: SortOrder
    param_type?: SortOrder
    remark?: SortOrder
    creator?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    update_date?: SortOrder
  }

  export type sys_paramsSumOrderByAggregateInput = {
    id?: SortOrder
    param_type?: SortOrder
    creator?: SortOrder
    updater?: SortOrder
  }

  export type sys_userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    super_admin?: SortOrder
    status?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    creator?: SortOrder
    update_date?: SortOrder
  }

  export type sys_userAvgOrderByAggregateInput = {
    id?: SortOrder
    super_admin?: SortOrder
    status?: SortOrder
    updater?: SortOrder
    creator?: SortOrder
  }

  export type sys_userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    super_admin?: SortOrder
    status?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    creator?: SortOrder
    update_date?: SortOrder
  }

  export type sys_userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    super_admin?: SortOrder
    status?: SortOrder
    create_date?: SortOrder
    updater?: SortOrder
    creator?: SortOrder
    update_date?: SortOrder
  }

  export type sys_userSumOrderByAggregateInput = {
    id?: SortOrder
    super_admin?: SortOrder
    status?: SortOrder
    updater?: SortOrder
    creator?: SortOrder
  }

  export type sys_user_tokenCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expire_date?: SortOrder
    update_date?: SortOrder
    create_date?: SortOrder
  }

  export type sys_user_tokenAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type sys_user_tokenMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expire_date?: SortOrder
    update_date?: SortOrder
    create_date?: SortOrder
  }

  export type sys_user_tokenMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expire_date?: SortOrder
    update_date?: SortOrder
    create_date?: SortOrder
  }

  export type sys_user_tokenSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedBytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type NestedBytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
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
  export const dmmf: runtime.DMMF.Document;
}