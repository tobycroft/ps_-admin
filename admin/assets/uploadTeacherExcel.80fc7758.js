import{_ as h,b as s,o as x,g as f,w as a,e as t,B as m,W as v,E as S,x as g,y as E,h as o,i as I}from"./index.12680ef6.js";import{h as T}from"./teacher.e27fdb6c.js";import{u as y}from"./school.65b5def9.js";const l=c=>(g("data-v-e72e8071"),c=c(),E(),c),w=l(()=>o("div",{class:"card-header"},[o("span",{class:"head-title"},"\u5BFC\u5165\u6570\u636E")],-1)),B=l(()=>o("div",{class:"el-upload__text"},[I("\u62D6\u62FD\u6587\u4EF6\u6216"),o("em",null,"\u70B9\u51FB\u6B64\u5904\u4E0A\u4F20")],-1)),N=l(()=>o("div",{class:"el-upload__tip"},"\u8BF7\u4E0A\u4F20Excel\u6587\u4EF6",-1)),U={__name:"uploadTeacherExcel",setup(c){const _="https://upload.tuuz.cc:444/v1/excel/index/index?token=ps",n=e=>{console.log(e),e.code&&e.code!=0?S.error(e.data):p(e)},p=async e=>{const d={school_id:y().schoolInfo.id,data:JSON.stringify(e)};await T(d)};return(e,d)=>{const r=s("el-icon"),u=s("el-upload"),i=s("el-card");return x(),f(i,{class:"box-card"},{header:a(()=>[w]),default:a(()=>[t(u,{class:"upload-demo",drag:"",action:_,multiple:"","on-success":n},{tip:a(()=>[N]),default:a(()=>[t(r,{class:"el-icon--upload"},{default:a(()=>[t(m(v))]),_:1}),B]),_:1})]),_:1})}}},q=h(U,[["__scopeId","data-v-e72e8071"]]);export{q as default};
