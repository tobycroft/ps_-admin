import{_ as T,r as l,H as q,v as D,b as o,o as f,c as x,e as t,w as n,h as e,B as m,I as N,F,f as O,g as P,K as U,t as z,i as w,x as A,y as E}from"./index.2a3cb95d.js";import{S as H}from"./StudyTaskTable.4a6b4c74.js";import{d as M}from"./study.908ab917.js";import{u as b}from"./school.98d6c8c0.js";import"./moment.9709ab41.js";const h=c=>(A("data-v-49047e0b"),c=c(),E(),c),j=h(()=>e("div",{class:"card-header"},[e("span",{class:"head-title"},"\u81EA\u5B9A\u4E49\u5185\u5BB9\u7BA1\u7406")],-1)),G={class:"search-wrap"},J={class:"search-left-wrap"},Q={class:"flex search-item-sec"},W=h(()=>e("span",{class:"search-label"},"\u4EFB\u52A1\u540D\u79F0",-1)),X={class:"flex search-item-sec"},Y=h(()=>e("span",{class:"search-label"},"\u4EFB\u52A1\u5E74\u7EA7",-1)),Z=w("\u67E5\u8BE2"),$=w("\u65B0\u5EFA\u4EFB\u52A1"),ee={class:"flex-end",style:{"margin-top":"24px"}},te={class:"flex"},ae={class:"record-char"},se={__name:"customKnow",setup(c){const I=b().gradeList,i=l(null),u=l(""),_=l("daily"),S=q();_.value=S.query.type;const p=l(0),v=l(1),y=l([]),r=async()=>{const d={type:_.value,is_custom:!0,limit:10,page:v.value,area_id:0,school_id:b().schoolInfo.id,grade:i.value,title:u.value,start_date:"",end_date:"",tag_ids:""},a=await M(d);y.value=a.data,p.value=a.total};D(()=>{r()});const V=d=>{v.value=d,r()};return(d,a)=>{const k=o("el-input"),R=o("el-option"),L=o("el-select"),g=o("el-button"),B=o("router-link"),C=o("el-pagination"),K=o("el-card");return f(),x("div",null,[t(K,{class:"box-card"},{header:n(()=>[j]),default:n(()=>[e("div",G,[e("div",J,[e("div",Q,[W,t(k,{style:{width:"px(296)","margin-right":"24px"},modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=s=>u.value=s),class:"flex1",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0","suffix-icon":m(N)},null,8,["modelValue","suffix-icon"])]),e("div",X,[Y,t(L,{style:{"margin-right":"24px"},modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=s=>i.value=s),class:"flex1",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u4EFB\u52A1\u5E74\u7EA7"},{default:n(()=>[(f(!0),x(F,null,O(m(I),s=>(f(),P(R,{key:s.id,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),t(g,{class:"add-btn search",type:"primary",onClick:r},{default:n(()=>[Z]),_:1})]),t(B,{to:"/createTask?type=daily"},{default:n(()=>[t(g,{class:"add-btn",type:"primary",icon:m(U)},{default:n(()=>[$]),_:1},8,["icon"])]),_:1})]),t(H,{onOnRefresh:r,hasOperation:"",type:_.value,tableData:y.value},null,8,["type","tableData"]),e("div",ee,[e("div",te,[e("span",ae,"\u5171"+z(p.value)+"\u6761\u8BB0\u5F55",1),t(C,{"page-size":10,"pager-count":5,layout:"prev, pager, next",total:p.value,onCurrentChange:V},null,8,["total"])])])]),_:1})])}}},de=T(se,[["__scopeId","data-v-49047e0b"]]);export{de as default};
