import{_ as G,H as j,U as H,b as k,v as J,u as M,r,o as n,c as m,a as t,w as l,h as w,F as b,f as V,g as p,B as v,j as Q,i as g,x as W,y as Y}from"./index.d25b2265.js";import{r as z,b as K,c as O,d as X}from"./teacher.42ab0723.js";import{u as i}from"./school.c88c9042.js";import"./moment.9709ab41.js";import{A as Z,a as q}from"./calcFunc.7aa9e5cd.js";import"./request.658cd5a0.js";const $=u=>(W("data-v-2b32d939"),u=u(),Y(),u),ee={class:"notice-add-view-container"},ae=$(()=>w("div",{class:"card-header"},[w("span",null,"\u7F16\u8F91\u73ED\u7EA7")],-1)),te={class:"flex-center",style:{"padding-top":"20px"}},le=g("\u91CD\u7F6E"),se=g("\u5B8C\u6210"),oe=g("\u5220\u9664 "),de={__name:"classEditView",setup(u){const o=j().query;console.log(o);const e=H({title:"",year:"",grade:"",teacherName:"",class_id:"",teacher_id:"",num:""}),_=k(0),A=()=>{o.id&&(e.title=o.title,e.year=o.year,e.grade=Z(o.year),e.teacherName=o.name,e.teacher_id=Number(o.teacher_id),e.class_id=Number(o.class_id),e.num=Number(o.num),_.value=Number(o.id))},L=i().classList,C=i().gradeList;console.log(C);const I=k([]),E=async()=>{const d={teacher_id:e.teacher_id||0,year:q(e.grade),class_id:e.class_id||0,title:e.title,content:"",num:e.num||0,school_id:i().schoolInfo.id};await K(d)},F=async()=>{const d={teacher_id:e.teacher_id,year:q(e.grade),class_id:e.class_id,id:_.value,num:e.num||0,title:e.title,school_id:i().schoolInfo.id};await O(d)},S=async()=>{const d={teacher_id:e.teacher_id,id:_.value,school_id:i().schoolInfo.id};await X(d)},U=async()=>{const d={school_id:i().schoolInfo.id,page:1,limit:999},s=await z(d);I.value=s.data};J(()=>{A(),U()});const x=M(),B=async()=>{_.value?await F():await E(),x.push({path:"/classEditSuccessView"})},R=async()=>{await S(),x.push({path:"/classListView"})},P=()=>{e.year="",e.year="",e.title="",e.teacherName="",e.teacher_id=0,e.class_id=0};return(d,s)=>{const N=r("el-input"),c=r("el-form-item"),h=r("el-option"),f=r("el-select"),y=r("el-button"),T=r("el-form"),D=r("el-card");return n(),m("div",ee,[t(D,{class:"box-card"},{header:l(()=>[ae]),default:l(()=>[w("div",te,[t(T,{"label-position":"left","label-width":"100px",model:e,style:{width:"540px"},ref:"ruleFormRef"},{default:l(()=>[t(c,{label:"\u73ED\u7EA7\u540D\u79F0\uFF1A"},{default:l(()=>[t(N,{modelValue:e.title,"onUpdate:modelValue":s[0]||(s[0]=a=>e.title=a),placeholder:"\u8BF7\u8F93\u5165\u73ED\u7EA7\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(c,{label:"\u73ED\u7EA7\u4EBA\u6570\uFF1A"},{default:l(()=>[t(N,{type:"number",modelValue:e.num,"onUpdate:modelValue":s[1]||(s[1]=a=>e.num=a),placeholder:"\u8BF7\u8F93\u5165\u73ED\u7EA7\u4EBA\u6570"},null,8,["modelValue"])]),_:1}),t(c,{label:"\u6240\u5C5E\u5E74\u7EA7\uFF1A"},{default:l(()=>[t(f,{style:{width:"100%"},modelValue:e.grade,"onUpdate:modelValue":s[2]||(s[2]=a=>e.grade=a),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u73ED\u7EA7\u6240\u5C5E\u5E74\u7EA7"},{default:l(()=>[(n(!0),m(b,null,V(v(C),a=>(n(),p(h,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(c,{label:"\u73ED\u7EA7\uFF1A"},{default:l(()=>[t(f,{style:{width:"100%"},modelValue:e.class_id,"onUpdate:modelValue":s[3]||(s[3]=a=>e.class_id=a),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u73ED\u7EA7"},{default:l(()=>[(n(!0),m(b,null,V(v(L),a=>(n(),p(h,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(c,{label:"\u73ED\u4E3B\u4EFB\uFF1A"},{default:l(()=>[t(f,{style:{width:"100%"},modelValue:e.teacher_id,"onUpdate:modelValue":s[4]||(s[4]=a=>e.teacher_id=a),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u73ED\u4E3B\u4EFB"},{default:l(()=>[(n(!0),m(b,null,V(I.value,a=>(n(),p(h,{key:a.name,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(c,null,{default:l(()=>[t(y,{onClick:P},{default:l(()=>[le]),_:1}),t(y,{type:"primary",onClick:B},{default:l(()=>[se]),_:1}),v(o).id?(n(),p(y,{key:0,type:"danger",onClick:R},{default:l(()=>[oe]),_:1})):Q("",!0)]),_:1})]),_:1},8,["model"])])]),_:1})])}}},pe=G(de,[["__scopeId","data-v-2b32d939"]]);export{pe as default};
