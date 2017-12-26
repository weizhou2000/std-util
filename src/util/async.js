import fs from 'fs'
export const readFile= file=>new Promise((r,j)=>{
  fs.readFile(file, 'utf-8',(err,data)=>{
    if(err)j(err)
    r(data)  
  })
})


import nodemailer from 'nodemailer'
export const sendEmail= (portal,email)=>new Promise((r,j)=>{
  nodemailer.createTransport(portal).sendMail(email,(error,info)=>{
    if(error){
      console.log(error)
      j(error)
    }else{
      console.log(info.response)
      console.log('-------------------------------------------')
      r()
    }
  })
})
