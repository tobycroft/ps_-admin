import{_ as C,U as S,b as v,H as U,v as N,u as R,r as l,o as P,c as B,a,w as d,h as r,i as _,x as E,y as G}from"./index.ae89ba5c.js";import{u as m}from"./school.1ff7a998.js";import{h as b}from"./moment.9709ab41.js";import{a as H,b as L,c as T}from"./activity.7c63f073.js";import{b as j}from"./notice.9a96e3d3.js";import"./request.43a4cd59.js";const z=i=>(E("data-v-74e9f8a1"),i=i(),G(),i),F={class:"notice-add-view-container"},J=z(()=>r("div",{class:"card-header"},[r("span",null,"\u7F16\u8F91\u6D3B\u52A8")],-1)),K={class:"flex-center",style:{"padding-top":"20px"}},O={class:"flex",style:{width:"560px"}},Q=_("- "),W=_("\u7ACB\u5373\u4E0B\u53D1\u63D0\u9192"),X=_("\u91CD\u7F6E"),Z=_("\u5B8C\u6210"),$={__name:"addActivity",setup(i){const e=S({title:"",content:"",start_date:"",end_date:"",address:""}),c=v(0),x=async()=>{const o={id:c.value},t=await H(o);!t||(e.title=t.title,e.content=t.content,e.address=t.address,e.start_date=t.start_date,e.end_date=t.end_date)},p=U();N(()=>{p.query.id&&(c.value=p.query.id,x())});const A=async()=>{const o={school_id:m().schoolInfo.id,grade_id:0,class_id:0,slogan:"",title:e.title,content:e.content,discription:"",location:e.address,address:e.address,location_x:0,location_y:0,location_area:0,img:"",bg_img:"",head_img:"",show_date:b().format("YYYY-MM-DD"),start_date:e.start_date,end_date:e.end_date};return await L(o)},V=async()=>{const o={id:c.value,school_id:m().schoolInfo.id,grade_id:0,class_id:0,slogan:"",title:e.title,content:e.content,discription:"",location:e.address,address:e.address,location_x:0,location_y:0,location_area:0,img:"",bg_img:"",head_img:"",show_date:b().format("YYYY-MM-DD"),start_date:e.start_date,end_date:e.end_date};return await T(o)},g=async o=>{const t={receiver:"school",type:"activity",year:0,class_id:0,combi_id:o,title:e.title,content:e.content,school_id:m().schoolInfo.id,teacher_id:e.teacher_id||0};await j(t)},f=v(!1),w=o=>{f.value=o},Y=()=>{e.title="",e.content="",e.address="",e.start_date="",e.end_date=""},I=R(),k=async()=>{if(c.value)await V();else{const o=await A();f.value&&await g(o)}I.push({path:"/activityAddSuccess"})};return(o,t)=>{const u=l("el-input"),n=l("el-form-item"),h=l("el-date-picker"),q=l("el-checkbox"),y=l("el-button"),M=l("el-form"),D=l("el-card");return P(),B("div",F,[a(D,{class:"box-card"},{header:d(()=>[J]),default:d(()=>[r("div",K,[a(M,{"label-position":"left","label-width":"100px",model:e,style:{width:"560px"}},{default:d(()=>[a(n,{label:"\u6D3B\u52A8\u6807\u9898\uFF1A"},{default:d(()=>[a(u,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=s=>e.title=s),placeholder:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u6807\u9898"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u6D3B\u52A8\u65F6\u95F4\uFF1A"},{default:d(()=>[r("div",O,[a(h,{modelValue:e.start_date,"onUpdate:modelValue":t[1]||(t[1]=s=>e.start_date=s),type:"datetime","value-format":"YYYY-MM-DD",placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4"},null,8,["modelValue"]),Q,a(h,{modelValue:e.end_date,"onUpdate:modelValue":t[2]||(t[2]=s=>e.end_date=s),"value-format":"YYYY-MM-DD",type:"datetime",placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])])]),_:1}),a(n,{label:"\u6D3B\u52A8\u5730\u70B9\uFF1A"},{default:d(()=>[a(u,{modelValue:e.address,"onUpdate:modelValue":t[3]||(t[3]=s=>e.address=s),placeholder:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u5730\u70B9"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u6D3B\u52A8\u5185\u5BB9\uFF1A"},{default:d(()=>[a(u,{type:"textarea",rows:4,modelValue:e.content,"onUpdate:modelValue":t[4]||(t[4]=s=>e.content=s)},null,8,["modelValue"])]),_:1}),a(n,null,{default:d(()=>[a(q,{onChange:w},{default:d(()=>[W]),_:1})]),_:1}),a(n,null,{default:d(()=>[a(y,{onClick:Y},{default:d(()=>[X]),_:1}),a(y,{type:"primary",onClick:k},{default:d(()=>[Z]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1})])}}},le=C($,[["__scopeId","data-v-74e9f8a1"]]);export{le as default};
