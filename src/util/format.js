// color
import colors from 'colors'
export const $e='error'.red.inverse
export const $d='debug'.blue.inverse
export const $i='input'.white.inverse
export const $o='output'.green.inverse
export const $f='function'.yellow.inverse
export const $m='info'.cyan.inverse

// lines="[....]" to enroll={examDate,examTitle,location}
export const linesToEnroll=(lines)=>{
  try{
    //console.log('lines:',lines)
    lines=JSON.parse(lines)
    let examTitle,examDate,location;
    lines.map(l=>{
      if(l.id=='301'){
        examDate=l.title.match(/\d{4}年\d{1,2}月\d{1,2}日/g)
        if(examDate){
          let ary=l.title.split(examDate)
          examTitle=ary[1]
          location=ary[0]
          examDate=examDate[0]
        }else{
          return {}
        }
      }
    })
    return {examTitle,examDate,location}
  }catch(e){
    return {}
  }
}



// randomFrom('123456789abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ',6)
export const randomFrom=(scopeStr,randomLen)=>{
  let rs=''
  for (var i=0; i<randomLen; i++) {
    rs+=scopeStr[Math.round(Math.random()*(scopeStr.length-1))]
  }  
  return rs
}

//console.log(randomFrom('123456789abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ',6))


//YYYY-M-D HH:mm
export const formatDate=(d)=>{
 if(d){
   const dd=new Date(d)
   const m=dd.getMinutes()
   const showM=m>10? m : '0'+m
   return '20'+(dd.getYear()%100)+'年'+(dd.getMonth()+1)+'月'+dd.getDate()+'日'+dd.getHours()+':'+showM
 }else{
   return '';
 }
}

//YY-M-D HH:mm
export const shortNow=()=>{
   const dd=new Date()
   const m=dd.getMinutes()
   const showM=m>10? m : '0'+m
   return (dd.getYear()%100)+'-'+(dd.getMonth()+1)+'-'+dd.getDate()+' '+dd.getHours()+':'+showM
}

export const formatDateDefault=(d)=>{
 if(d){
   const dd=new Date(d)
   return '20'+(dd.getYear()%100)+'-'+(dd.getMonth()+1)+'-'+dd.getDate()
 }else{
   return '';
 }
}
