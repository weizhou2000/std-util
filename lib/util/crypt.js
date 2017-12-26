'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.genHash=exports.ckPass=undefined;var _bcryptNodejs=require('bcrypt-nodejs');var _bcryptNodejs2=_interopRequireDefault(_bcryptNodejs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var SALT_WORK_FACTOR=10;var ckPass=exports.ckPass=function ckPass(pass1,pass2){return new Promise(function(r,j){_bcryptNodejs2.default.compare(pass1,pass2,function(err,isMatch){if(err){j(err)}else if(isMatch){r()}else{j('\u5BC6\u7801\u4E0D\u7B26')}})})};var genHash=exports.genHash=function genHash(password){return new Promise(function(res,rej){_bcryptNodejs2.default.genSalt(SALT_WORK_FACTOR,function(error,salt){if(error){rej(error)}else{_bcryptNodejs2.default.hash(password,salt,function(){},function(error,hash){if(error){rej(error)}else{res(hash)}})}})})};