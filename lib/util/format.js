'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.formatDateDefault=exports.shortNow=exports.formatDate=exports.randomFrom=exports.linesToEnroll=exports.$m=exports.$f=exports.$o=exports.$i=exports.$d=exports.$e=undefined;var _colors=require('colors');var _colors2=_interopRequireDefault(_colors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var $e=exports.$e='error'.red.inverse;var $d=exports.$d='debug'.blue.inverse;var $i=exports.$i='input'.white.inverse;var $o=exports.$o='output'.green.inverse;var $f=exports.$f='function'.yellow.inverse;var $m=exports.$m='info'.cyan.inverse;var linesToEnroll=exports.linesToEnroll=function linesToEnroll(lines){try{lines=JSON.parse(lines);var examTitle=void 0,examDate=void 0,location=void 0;lines.map(function(l){if(l.id=='301'){examDate=l.title.match(/\d{4}年\d{1,2}月\d{1,2}日/g);if(examDate){var ary=l.title.split(examDate);examTitle=ary[1];location=ary[0];examDate=examDate[0]}else{return{}}}});return{examTitle:examTitle,examDate:examDate,location:location}}catch(e){return{}}};var randomFrom=exports.randomFrom=function randomFrom(scopeStr,randomLen){var rs='';for(var i=0;i<randomLen;i++){rs+=scopeStr[Math.round(Math.random()*(scopeStr.length-1))]}return rs};var formatDate=exports.formatDate=function formatDate(d){if(d){var dd=new Date(d);var m=dd.getMinutes();var showM=m>10?m:'0'+m;return'20'+dd.getYear()%100+'\u5E74'+(dd.getMonth()+1)+'\u6708'+dd.getDate()+'\u65E5'+dd.getHours()+':'+showM}else{return''}};var shortNow=exports.shortNow=function shortNow(){var dd=new Date;var m=dd.getMinutes();var showM=m>10?m:'0'+m;return dd.getYear()%100+'-'+(dd.getMonth()+1)+'-'+dd.getDate()+' '+dd.getHours()+':'+showM};var formatDateDefault=exports.formatDateDefault=function formatDateDefault(d){if(d){var dd=new Date(d);return'20'+dd.getYear()%100+'-'+(dd.getMonth()+1)+'-'+dd.getDate()}else{return''}};