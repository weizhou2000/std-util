import {$i,$o,$d,$e,$m,$f,} from './util/format'
console.log($i,$o,$d,$e,$m,$f)

import {tip,tip0,alog} from'./util/winston'; 
alog.ali('1234')
tip.warn('i')
tip.verbose('o')
tip.debug('d')
tip.error('e')
tip.info('m')
tip.silly('f')


//----------------------------------------------------------------------
import {ckPass,genHash} from'./util/crypt'; 
genHash('pass1')
.then(r=>console.log('genHash-rs',r))
.catch(r=>console.log('genHash-err',r))

ckPass('pass1','$2a$10$4lPxp/RbnEfcuct6f607Ruzbo8IbyErYsmRy2tgDX8VIpA9HEAe0a')
.then(r=>console.log('ckPass-rs',r))
.catch(r=>console.log('ckPass-err',r))

//---------------------------------------------------------------------------
import {encode,decode} from'./util/jwt'; 
console.log(decode(encode({a:1}))) 

//---------------------------------------------------------------------------
import {query} from'./util/mysql';
import mysql from 'mysql';
import config from 'config'
console.log(config.get('server.mysql'))  
const pool  = mysql.createPool(config.get('server.mysql'),{multipleStatements: true});
pool.query('SELECT 1', error=>{
  if (error) throw error;
  console.log('Mysql Ready: ');
});


/*
import {ckPass,genHash} from'./util/crypt'; 
export {ckPass,genHash};

import {$i,$o,$d,$e,$m,$f,linesToEnroll,randomFrom,formatDate,shortNow,formatDateDefault} from'./util/format'; 
export {$i,$o,$d,$e,$m,$f,linesToEnroll,randomFrom,formatDate,shortNow,formatDateDefault};

import {encode,decode} from'./util/jwt'; 
export {encode,decode};

import {query,queryOne} from'./util/mysql'; 
export {query,queryOne};

import {tip,tip0,alog} from'./util/winston'; 
export {tip,tip0,alog};

import {readFile,sendEmail} from'./util/async'; 
export {readFile,sendEmail};
*/

//import config from 'config'
//console.log(config.get('server.port'))  

/*
  error: $e, 
  
  warn: $i, 
  
  info: $m, 
  
  verbose: $o, 
  
  debug: $d, 
  
  silly: $f 
*/

