import jwt from 'jwt-simple';
import config from 'config'

const secret=config.get('server.secret');
//console.log(secret)
let key = Buffer.from(secret, 'hex');
//console.log(key)

export const encode=(payload)=>jwt.encode(payload, key);

export const decode=(token)=>{
  try{ 
    return jwt.decode(token, key);
  }catch(err){
    return 0;
  }
}
