import bcrypt from 'bcrypt-nodejs'
const SALT_WORK_FACTOR = 10;
export const ckPass=(pass1,pass2)=>{
  return new Promise((r,j)=>{
    bcrypt.compare(pass1, pass2, function(err,isMatch){
      if(err){
        j(err);
      }else if(isMatch){
        r();
      }else {
        j('密码不符');
      }
    });
  });
}

export const genHash=(password)=>{
  return new Promise((res,rej)=>{
    bcrypt.genSalt(SALT_WORK_FACTOR, (error, salt)=> {
      if (error) {
        rej(error);
      }else{
        bcrypt.hash(password, salt, function(){}, function(error, hash) {
          if (error) {
            rej(error);
          }else{
            res(hash);
          }
        });
      }
    });
  });
}

//console.log(genHash)