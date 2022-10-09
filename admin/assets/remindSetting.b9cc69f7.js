import{_ as N,r as t,v as A,b as f,o as V,c as b,e as o,w as x,h as e,C as w,D as y,F as B,f as D,n as E,t as F,E as G,x as M,y as P}from"./index.2a3cb95d.js";import{u as g,a as L,b as R}from"./school.98d6c8c0.js";const l=h=>(M("data-v-f1acd17e"),h=h(),P(),h),T=l(()=>e("div",{class:"card-header"},[e("span",{class:"head-title"},"\u63D0\u9192\u8BBE\u7F6E")],-1)),$={class:"remind-wrap"},j={class:"switch-sec"},H=l(()=>e("span",{class:"head-title mr"},"\u81EA\u52A8\u63D0\u9192",-1)),J=l(()=>e("p",{class:"m-char"},"\u5230\u65F6\u95F4\u81EA\u52A8\u53D1\u9001\u63D0\u9192\u6D88\u606F",-1)),K={class:"sw-box-wrap"},O={class:"sw-box"},Q=l(()=>e("span",{class:"sw-box-title"},"\u957F\u65F6\u95F4\u672A\u5B66\u4E60\u63D0\u9192",-1)),W={class:"sw-box"},X=l(()=>e("span",{class:"sw-box-title"},"\u65B0\u8BFE\u7A0B\u63D0\u9192",-1)),Y={class:"sw-box"},Z=l(()=>e("span",{class:"sw-box-title"},"\u9884\u8B66\u63D0\u9192",-1)),ee={class:"time-section"},ae=l(()=>e("span",{class:"t-char"},"\u63D0\u9192\u65F6\u6BB5\uFF1A",-1)),se=["onClick"],le={class:"remind-wrap pt"},te={class:"switch-sec"},oe=l(()=>e("span",{class:"head-title mr"},"\u624B\u52A8\u63D0\u9192",-1)),ie=l(()=>e("p",{class:"m-char"},"\u9700\u8981\u624B\u52A8\u70B9\u51FB\u53D1\u9001\u63D0\u9192\u6D88\u606F",-1)),ne={class:"sw-box-wrap"},de={class:"sw-box"},ue=l(()=>e("span",{class:"sw-box-title"},"\u6559\u5E08\u63D0\u9192\u6743\u9650",-1)),ce={class:"sw-box"},ve=l(()=>e("span",{class:"sw-box-title"},"\u5BB6\u59D4\u4F1A\u63D0\u9192\u6743\u9650",-1)),_e={__name:"remindSetting",setup(h){const S=[{id:"any",value:"\u4EFB\u610F\u65F6\u95F4"},{id:8,value:"08:00-12:00"},{id:12,value:"12:00-16:00"},{id:16,value:"16:00-20:00"},{id:20,value:"20:00-24:00"}],i=t(0),c=t("any"),v=t(0),_=t(0),r=t(0),d=t(0),p=t(0),m=t(0),z=async()=>{const u={school_id:g().schoolInfo.id},a=await L(u);i.value=a.is_auto,c.value=a.notify_type,v.value=a.end_time_notify,_.value=a.new_study_notify,r.value=a.quiz_notify,d.value=a.is_manual,m.value=a.allow_parent,p.value=a.allow_teacher},C=async()=>{const u={school_id:g().schoolInfo.id,is_auto:i.value,notify_type:c.value,end_time_notify:v.value,new_study_notify:_.value,quiz_notify:r.value,is_manual:d.value,allow_parent:m.value,allow_teacher:p.value};await R(u)};A(()=>{z()});const I=u=>{c.value=u},k=()=>{i.value=0,c.value="any",v.value=0,_.value=0,r.value=0,d.value=0,m.value=0,p.value=0},q=async()=>{await C(),G({type:"success",message:"\u4FDD\u5B58\u6210\u529F!"})};return(u,a)=>{const n=f("el-switch"),U=f("el-card");return V(),b("div",null,[o(U,{class:"box-card"},{header:x(()=>[T]),default:x(()=>[e("div",$,[e("div",j,[H,o(n,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=s=>i.value=s),size:"large","active-value":1,"inactive-value":0},null,8,["modelValue"])]),J,w(e("div",K,[e("div",O,[Q,o(n,{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=s=>v.value=s),size:"large","active-value":1,"inactive-value":0},null,8,["modelValue"])]),e("div",W,[X,o(n,{modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=s=>_.value=s),size:"large","active-value":1,"inactive-value":0},null,8,["modelValue"])]),e("div",Y,[Z,o(n,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=s=>r.value=s),size:"large","active-value":1,"inactive-value":0},null,8,["modelValue"])])],512),[[y,i.value]]),w(e("div",ee,[ae,(V(),b(B,null,D(S,s=>e("span",{class:E(["time",{active:s.id==c.value}]),onClick:re=>I(s.id),key:s.id},F(s.value),11,se)),64))],512),[[y,i.value]])]),e("div",le,[e("div",te,[oe,o(n,{modelValue:d.value,"onUpdate:modelValue":a[4]||(a[4]=s=>d.value=s),size:"large","active-value":1,"inactive-value":0},null,8,["modelValue"])]),ie,w(e("div",ne,[e("div",de,[ue,o(n,{modelValue:p.value,"onUpdate:modelValue":a[5]||(a[5]=s=>p.value=s),size:"large","active-value":1,"inactive-value":0},null,8,["modelValue"])]),e("div",ce,[ve,o(n,{modelValue:m.value,"onUpdate:modelValue":a[6]||(a[6]=s=>m.value=s),size:"large","active-value":1,"inactive-value":0},null,8,["modelValue"])])],512),[[y,d.value]])]),e("div",{class:"btn-wrap"},[e("div",{class:"btn",onClick:k},"\u91CD\u7F6E"),e("div",{class:"btn blue",onClick:q},"\u4FDD\u5B58")])]),_:1})])}}},he=N(_e,[["__scopeId","data-v-f1acd17e"]]);export{he as default};
