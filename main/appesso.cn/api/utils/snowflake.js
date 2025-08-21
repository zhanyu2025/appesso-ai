/* eslint-disable  no-bitwise */
class Snowflake {
  /**
   * 初始化雪花算法生成器
   * @param {Object} options 配置项
   * @param {number} options.datacenterId 数据中心 ID（0-31）
   * @param {number} options.workerId 机器/节点 ID（0-31）
   * @param {number} [options.epoch=1609459200000] 起始时间戳（毫秒，默认 2021-01-01 00:00:00）
   */
  constructor({ datacenterId, workerId, epoch = 1609459200000 }) {
    // 校验数据中心 ID 和机器 ID 范围（5 位最多 31）
    if (datacenterId < 0 || datacenterId > 31) {
      throw new Error('datacenterId 必须在 0-31 之间');
    }
    if (workerId < 0 || workerId > 31) {
      throw new Error('workerId 必须在 0-31 之间');
    }

    this.epoch = epoch; // 起始时间戳
    this.datacenterId = BigInt(datacenterId); // 数据中心 ID（BigInt 化）
    this.workerId = BigInt(workerId); // 机器 ID（BigInt 化）

    // 序列号（同一毫秒内递增）
    this.sequence = 0n; // 初始化为 BigInt
    this.lastTimestamp = -1n; // 上一次生成 ID 的时间戳（BigInt）

    // 常量（位运算偏移量）
    this.workerIdBits = 5n; // 机器 ID 位数
    this.datacenterIdBits = 5n; // 数据中心 ID 位数
    this.sequenceBits = 12n; // 序列号位数

    // 最大取值（防止溢出）
    this.maxWorkerId = (1n << this.workerIdBits) - 1n; // 31n
    this.maxDatacenterId = (1n << this.datacenterIdBits) - 1n; // 31n
    this.sequenceMask = (1n << this.sequenceBits) - 1n; // 4095n

    // 位偏移量（用于拼接各部分）
    this.workerIdShift = this.sequenceBits; // 12n
    this.datacenterIdShift = this.sequenceBits + this.workerIdBits; // 17n
    this.timestampLeftShift =
      this.sequenceBits + this.workerIdBits + this.datacenterIdBits; // 22n
  }

  /**
   * 获取当前时间戳（毫秒）
   * @returns {BigInt} 时间戳（BigInt 类型）
   */
  // eslint-disable-next-line class-methods-use-this
  getCurrentTimestamp() {
    return BigInt(Date.now());
  }

  /**
   * 生成一个雪花 ID
   * @returns {BigInt} 64 位雪花 ID（BigInt 类型）
   */
  nextId() {
    let timestamp = this.getCurrentTimestamp();
    // eslint-disable-next-line prefer-destructuring
    const lastTimestamp = this.lastTimestamp;

    // 1. 处理时钟回拨（当前时间 < 上一次时间）
    if (timestamp < lastTimestamp) {
      const offset = lastTimestamp - timestamp;
      // 若回拨时间较短（如 5 毫秒内），等待至当前时间追上
      if (offset <= 5n) {
        timestamp = this.waitUntil(lastTimestamp);
      } else {
        // 回拨时间过长，抛出错误（避免生成重复 ID）
        throw new Error(`时钟回拨异常：${offset} 毫秒`);
      }
    }

    // 2. 同一毫秒内，序列号递增
    if (timestamp === lastTimestamp) {
      this.sequence = (this.sequence + 1n) & this.sequenceMask;
      // 序列号溢出（同一毫秒生成超过 4096 个 ID）
      if (this.sequence === 0n) {
        // 等待至下一毫秒
        timestamp = this.waitUntil(timestamp);
      }
    } else {
      // 不同毫秒，序列号重置为 0
      this.sequence = 0n;
    }

    // 3. 更新上一次时间戳
    this.lastTimestamp = timestamp;

    // 4. 拼接 64 位 ID（位运算）
    const timestampDiff = timestamp - BigInt(this.epoch); // 相对于起始时间的偏移量
    const id =
      (timestampDiff << this.timestampLeftShift) | // 时间戳部分
      (this.datacenterId << this.datacenterIdShift) | // 数据中心 ID 部分
      (this.workerId << this.workerIdShift) | // 机器 ID 部分
      this.sequence; // 序列号部分

    return id;
  }

  /**
   * 等待至目标时间戳（毫秒）
   * @param {BigInt} targetTimestamp 目标时间戳
   * @returns {BigInt} 达到目标时间戳后的当前时间
   */
  waitUntil(targetTimestamp) {
    let timestamp = this.getCurrentTimestamp();
    while (timestamp <= targetTimestamp) {
      timestamp = this.getCurrentTimestamp();
    }
    return timestamp;
  }
}

// 示例使用
if (require.main === module) {
  // 初始化生成器（数据中心 ID=1，机器 ID=1）
  const snowflake = new Snowflake({ datacenterId: 1, workerId: 1 });

  // 生成 5 个 ID
  // eslint-disable-next-line  no-plusplus
  for (let i = 0; i < 5; i++) {
    const id = snowflake.nextId();
    // eslint-disable-next-line  no-console
    console.log(`生成 ID: ${id.toString()}（类型：${typeof id}）`);
  }
}

module.exports = Snowflake;
