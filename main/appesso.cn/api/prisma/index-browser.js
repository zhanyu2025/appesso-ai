
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "461d6a05159055555eb7dfb337c9fb271cbd4d7e"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DATABASECHANGELOGLOCKScalarFieldEnum = makeEnum({
  ID: 'ID',
  LOCKED: 'LOCKED',
  LOCKGRANTED: 'LOCKGRANTED',
  LOCKEDBY: 'LOCKEDBY'
});

exports.Prisma.Ai_agentScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Ai_agent_chat_audioScalarFieldEnum = makeEnum({
  id: 'id',
  audio: 'audio'
});

exports.Prisma.Ai_agent_chat_historyScalarFieldEnum = makeEnum({
  id: 'id',
  mac_address: 'mac_address',
  agent_id: 'agent_id',
  session_id: 'session_id',
  chat_type: 'chat_type',
  content: 'content',
  audio_id: 'audio_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Ai_agent_plugin_mappingScalarFieldEnum = makeEnum({
  id: 'id',
  agent_id: 'agent_id',
  plugin_id: 'plugin_id',
  param_info: 'param_info'
});

exports.Prisma.Ai_agent_templateScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Ai_agent_voice_printScalarFieldEnum = makeEnum({
  id: 'id',
  agent_id: 'agent_id',
  source_name: 'source_name',
  introduce: 'introduce',
  create_date: 'create_date',
  creator: 'creator',
  update_date: 'update_date',
  updater: 'updater',
  audio_id: 'audio_id'
});

exports.Prisma.Ai_deviceScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Ai_model_configScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Ai_model_providerScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Ai_otaScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Ai_tts_voiceScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Ai_voiceprintScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Sys_dict_dataScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Sys_dict_typeScalarFieldEnum = makeEnum({
  id: 'id',
  dict_type: 'dict_type',
  dict_name: 'dict_name',
  remark: 'remark',
  sort: 'sort',
  creator: 'creator',
  create_date: 'create_date',
  updater: 'updater',
  update_date: 'update_date'
});

exports.Prisma.Sys_paramsScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Sys_userScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  password: 'password',
  super_admin: 'super_admin',
  status: 'status',
  create_date: 'create_date',
  updater: 'updater',
  creator: 'creator',
  update_date: 'update_date'
});

exports.Prisma.Sys_user_tokenScalarFieldEnum = makeEnum({
  id: 'id',
  user_id: 'user_id',
  token: 'token',
  expire_date: 'expire_date',
  update_date: 'update_date',
  create_date: 'create_date'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: 'JsonNull'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});


exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
