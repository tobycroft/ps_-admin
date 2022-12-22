import{u as _}from"./school.2af041d5.js";import{f as q}from"./study.151c6e7b.js";import{h as z}from"./moment.9709ab41.js";import{E as A}from"./EveryDayDetail.aac52a55.js";import{E as N}from"./EveryWeekDetail.8c8db8ac.js";import{E as P}from"./EveryMonthDetail.47ece33f.js";import{_ as W,b as s,v as T,r as b,o as l,c as d,h as a,F as v,f as y,t as i,a as n,w as S,n as E,x as j,y as H}from"./index.9ae69f17.js";import"./week_theme_tag.b2f3387c.js";import"./quiz.e7ffb7fe.js";const M=u=>(j("data-v-21900ede"),u=u(),H(),u),J={class:"study-overview-container"},K={class:"sort-wrap"},Q={class:"sort-sec"},X=M(()=>a("span",{class:"o-char"},"\u5E74\u7EA7\uFF1A",-1)),Z=["onClick"],ee={class:"sort-sec"},te=M(()=>a("span",{class:"o-char"},"\u5206\u7C7B\uFF1A",-1)),ae=["onClick"],se={class:"learn-box"},oe=["onClick"],le={class:"left-title"},de={class:"title-char"},ie={class:"yellow-tag"},ne={class:"time-char"},ce={class:"flex-start",style:{margin:"18px 0 0 18px"}},ue={class:"flex"},re={class:"record-char"},_e={class:"study-dialog-wrap"},ve={class:"study-dialog-wrap"},ye={class:"study-dialog-wrap"},pe={__name:"studyOverview",setup(u){const p=s([]),Y=[{id:"daily",name:"\u6BCF\u65E5\u4E00\u5B66"},{id:"weekly",name:"\u6BCF\u5468\u4E00\u505A"},{id:"monthy",name:"\u6BCF\u6708\u4E00\u8BFE"}],h=s("daily"),B=e=>{h.value=e,r()},m=s(1),F=e=>{m.value=e,r()},f=s(0),x=s(1),G=e=>{x.value=e,r()},I=s([]),r=async()=>{const e={type:h.value,is_custom:!1,limit:10,page:x.value,area_id:0,school_id:_().schoolInfo.id,grade:m.value,title:"",start_date:"",end_date:"",tag_ids:""},o=await q(e);I.value=o.data,f.value=o.total};T(async()=>{const e=_().gradeList;!e||!e.length?(await _().getSchoolGradeList(),p.value=_().gradeList):p.value=e,r()});const O=e=>z(e).utc().format("YYYY.MM.DD"),C=s(0),g=s(!1),L=s(0),k=s(!1),R=s(0),w=s(!1),D=s(0),U=e=>{e.study_type=="daily"&&(g.value=!0,C.value=e.id),e.study_type=="weekly"&&(k.value=!0,L.value=e.id),e.study_type=="monthy"&&(w.value=!0,R.value=e.id,D.value=e.study_id)};return(e,o)=>{const $=b("el-pagination"),V=b("el-dialog");return l(),d("div",J,[a("div",K,[a("div",Q,[X,(l(!0),d(v,null,y(p.value,t=>(l(),d("div",{class:E(["lab-item",m.value==t.id?"active":""]),onClick:c=>F(t.id),key:t.id},i(t.name),11,Z))),128))]),a("div",ee,[te,(l(),d(v,null,y(Y,t=>a("div",{class:E(["lab-item",h.value==t.id?"active":""]),onClick:c=>B(t.id),key:t.id},i(t.name),11,ae)),64))])]),a("div",se,[(l(!0),d(v,null,y(I.value,t=>(l(),d("div",{class:"learn-sec flex",key:t.id,onClick:c=>U(t)},[a("div",le,[a("span",de,"\u300A"+i(t.title)+"\u300B",1),(l(!0),d(v,null,y(t.special_tag,c=>(l(),d("div",{class:"blue-tag",key:c.id},i(c.name),1))),128)),a("div",ie,"\u6240\u5C5E\u5E74\u7EA7\uFF1A"+i(t.grade)+"\u5E74\u7EA7",1)]),a("span",ne,i(O(t.show_date)),1)],8,oe))),128))]),a("div",ce,[a("div",ue,[a("span",re,"\u5171"+i(f.value)+"\u6761\u8BB0\u5F55",1),n($,{"page-size":10,"pager-count":5,layout:"prev, pager, next",total:f.value,onCurrentChange:G},null,8,["total"])])]),n(V,{modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=t=>g.value=t),title:"",width:"29vw",center:""},{default:S(()=>[a("div",_e,[n(A,{"look-study-id":C.value},null,8,["look-study-id"])])]),_:1},8,["modelValue"]),n(V,{modelValue:k.value,"onUpdate:modelValue":o[1]||(o[1]=t=>k.value=t),title:"",width:"31vw",center:""},{default:S(()=>[a("div",ve,[n(N,{"look-study-id":L.value},null,8,["look-study-id"])])]),_:1},8,["modelValue"]),n(V,{modelValue:w.value,"onUpdate:modelValue":o[2]||(o[2]=t=>w.value=t),title:"",width:"30vw",center:""},{default:S(()=>[a("div",ye,[n(P,{"look-study-id":R.value,"look-month-id":D.value},null,8,["look-study-id","look-month-id"])])]),_:1},8,["modelValue"])])}}},Ie=W(pe,[["__scopeId","data-v-21900ede"]]);export{Ie as default};
