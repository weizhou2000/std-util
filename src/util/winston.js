import winston from 'winston';
import config from 'config'
import {$i,$o,$d,$e,$m,$f,} from './format'

winston.loggers.add('aliLog',{file: {filename: './log/ali.txt'}});
winston.loggers.add('shipLog',{file: {filename: './log/shipping.txt'}});
winston.loggers.add('tip0', {file: {filename: './log/tip0.txt'}});
winston.loggers.add('tip', {file: {level: 'silly',filename: './log/tip.txt'}});

const  aliLog= winston.loggers.get('aliLog');
const  shipLog= winston.loggers.get('shipLog');
export const alog={
  ali:(...args)=>aliLog.info('[ALIPAY]',...args),
  ship:(...args)=>shipLog.info('[SHIPPING]',...args)
}

export const tip0 = winston.loggers.get('tip0');
export const tip=(config.util.getEnv('NODE_CONFIG_ENV')=='production')? winston.loggers.get('tip') : {
  error:(...args)=>console.log($e,...args),
  debug:(...args)=>console.log($d,...args),
  info:(...args)=>console.log($m,...args),
  warn:(...args)=>console.log($i,...args),
  verbose:(...args)=>console.log($o,...args),
  silly:(...args)=>console.log($f,...args)
}

