import{u as d}from"./school.0fa775b0.js";import{e as z}from"./study.1702a52e.js";import{h as S}from"./moment.9709ab41.js";import{E as A}from"./EveryDayDetail.329d0153.js";import{E as N}from"./EveryWeekDetail.420fdf10.js";import{E as P}from"./EveryMonthDetail.daec04cf.js";import{_ as W,b as s,v as T,r as E,o as i,c as n,h as a,F as h,f as m,t as c,a as r,w as x,n as G,x as j,y as J}from"./index.6ec564e4.js";import"./request.76b261a9.js";import"./week_theme_tag.7945f3b8.js";import"./quiz.ea45e17b.js";const H=v=>(j("data-v-14a90eff"),v=v(),J(),v),K={class:"study-overview-container"},Q={class:"sort-wrap"},X={class:"sort-sec"},Z=H(()=>a("span",{class:"o-char"},"\u5E74\u7EA7\uFF1A",-1)),ee=["onClick"],te={class:"sort-sec"},ae=H(()=>a("span",{class:"o-char"},"\u5206\u7C7B\uFF1A",-1)),se=["onClick"],oe={class:"learn-box"},le=["onClick"],de={class:"left-title"},ie={class:"title-char"},ne={class:"yellow-tag"},ce={class:"time-char"},re={class:"flex-start",style:{margin:"18px 0 0 18px"}},ue={class:"flex"},_e={class:"record-char"},ve={class:"study-dialog-wrap"},ye={class:"study-dialog-wrap"},fe={class:"study-dialog-wrap"},pe={__name:"studyOverview",setup(v){const g=s([]),O=[{id:"daily",name:"\u6BCF\u65E5\u4E00\u5B66"},{id:"weekly",name:"\u6BCF\u5468\u4E00\u505A"},{id:"monthy",name:"\u6BCF\u6708\u4E00\u8BFE"}],y=s("daily"),Y=e=>{y.value=e,p()},f=s(-2),B=e=>{f.value=e,p()},k=s(0),D=s(1),F=e=>{D.value=e,p()},L=s([]),p=async()=>{let e=S().format("yyyy-MM-DD HH:mm:ss");y.value=="weekly"&&(e=S().startOf("week").add(1,"day").format("yyyy-MM-DD HH:mm:ss"));const o={type:y.value,is_custom:!1,limit:10,page:D.value,area_id:0,school_id:d().schoolInfo.id,grade:f.value,title:"",start_date:"",end_date:e,tag_ids:""},l=await z(o);L.value=l.data,k.value=l.total};T(async()=>{const e=d().gradeList;(!e||!e.length)&&await d().getSchoolGradeList(),d().saveSchoolInfo(d().schoolInfo.id).then(()=>{console.log("schoolinfo_refresh")});const o=[];for(const l in e)e[l].id>=d().schoolInfo.grade_min&&e[l].id<=d().schoolInfo.grade_max&&o.push(e[l]);g.value=o,f.value=g.value[0].id,p()});const U=e=>S(e).format("YYYY.MM.DD"),$=e=>d().gradeList.find(u=>u.id==e).name,C=s(0),w=s(!1),R=s(0),I=s(!1),M=s(0),V=s(!1),b=s(0),q=e=>{e.study_type=="daily"&&(w.value=!0,C.value=e.id),e.study_type=="weekly"&&(I.value=!0,R.value=e.id),e.study_type=="monthy"&&(V.value=!0,M.value=e.id,b.value=e.study_id)};return(e,o)=>{const l=E("el-pagination"),u=E("el-dialog");return i(),n("div",K,[a("div",Q,[a("div",X,[Z,(i(!0),n(h,null,m(g.value,t=>(i(),n("div",{class:G(["lab-item",f.value==t.id?"active":""]),onClick:_=>B(t.id),key:t.id},c(t.name),11,ee))),128))]),a("div",te,[ae,(i(),n(h,null,m(O,t=>a("div",{class:G(["lab-item",y.value==t.id?"active":""]),onClick:_=>Y(t.id),key:t.id},c(t.name),11,se)),64))])]),a("div",oe,[(i(!0),n(h,null,m(L.value,t=>(i(),n("div",{class:"learn-sec flex",key:t.id,onClick:_=>q(t)},[a("div",de,[a("span",ie,"\u300A"+c(t.title)+"\u300B",1),(i(!0),n(h,null,m(t.special_tag,_=>(i(),n("div",{class:"blue-tag",key:_.id},c(_.name),1))),128)),a("div",ne,"\u6240\u5C5E\u5E74\u7EA7\uFF1A"+c($(t.grade)),1)]),a("span",ce,c(U(t.show_date)),1)],8,le))),128))]),a("div",re,[a("div",ue,[a("span",_e,"\u5171"+c(k.value)+"\u6761\u8BB0\u5F55",1),r(l,{"page-size":10,"pager-count":5,layout:"prev, pager, next",total:k.value,onCurrentChange:F},null,8,["total"])])]),r(u,{modelValue:w.value,"onUpdate:modelValue":o[0]||(o[0]=t=>w.value=t),title:"",width:"29vw",center:""},{default:x(()=>[a("div",ve,[r(A,{"look-study-id":C.value},null,8,["look-study-id"])])]),_:1},8,["modelValue"]),r(u,{modelValue:I.value,"onUpdate:modelValue":o[1]||(o[1]=t=>I.value=t),title:"",width:"31vw",center:""},{default:x(()=>[a("div",ye,[r(N,{"look-study-id":R.value},null,8,["look-study-id"])])]),_:1},8,["modelValue"]),r(u,{modelValue:V.value,"onUpdate:modelValue":o[2]||(o[2]=t=>V.value=t),title:"",width:"30vw",center:""},{default:x(()=>[a("div",fe,[r(P,{"look-study-id":M.value,"look-month-id":b.value},null,8,["look-study-id","look-month-id"])])]),_:1},8,["modelValue"])])}}},Le=W(pe,[["__scopeId","data-v-14a90eff"]]);export{Le as default};
