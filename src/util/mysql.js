export const query=(pool,sql,params)=>new Promise(function (resolve, reject) {
  if(params){
    pool.query(sql,params, function (error, results, fields) {
      console.log(sql,params)
      if (error || !results) reject(error);
      resolve(results);
    });
  }else{
    pool.query(sql,function (error, results, fields) {
      console.log(sql,params)
      if (error || !results) reject(error);
      resolve(results);
    });
  }
});

export const queryOne=(pool,sql,params)=>new Promise(function (resolve, reject) {
  if(params){
    pool.query(sql,params, function (error, results, fields) {
      console.log(sql)
      if (error || !results){
        console.log(error)
        reject(error)
      }
      resolve(results[0]);
    });
  }else{
    pool.query(sql,function (error, results, fields) {
      if (error || !results){
        reject(error)
        console.log(error)
      }
      resolve(results[0]);
    });
  }
});



//prepare bulk data
//@param  [field1,field2]
//@param  [{field1:1,field2:2,field3:3},{field1:11,field2:22,field3:33}]
//@output [[1,2],[22,33]]
export const prepareBulkInsertData=(fieldAry,lines)=>lines.map(line=>{
  let lineAry=[]
  fieldAry.map(field=>lineAry.push(line[field]))
  return lineAry
})


