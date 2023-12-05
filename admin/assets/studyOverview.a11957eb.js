import{u as l}from"./school.76762433.js";import{e as z}from"./study.88854d6f.js";import{h as A}from"./moment.9709ab41.js";import{E as N}from"./EveryDayDetail.7b78784e.js";import{E as P}from"./EveryWeekDetail.f5a32f65.js";import{E as W}from"./EveryMonthDetail.afc21f58.js";import{_ as T,b as o,v as j,r as E,o as d,c as i,h as s,F as h,f,t as n,a as c,w as S,n as M,x as H,y as J}from"./index.2f82ed88.js";import"./request.f905da80.js";import"./week_theme_tag.0f54c38b.js";import"./quiz.0e61608e.js";const G=v=>(H("data-v-9f837a3c"),v=v(),J(),v),K={class:"study-overview-container"},Q={class:"sort-wrap"},X={class:"sort-sec"},Z=G(()=>s("span",{class:"o-char"},"\u5E74\u7EA7\uFF1A",-1)),ee=["onClick"],te={class:"sort-sec"},se=G(()=>s("span",{class:"o-char"},"\u5206\u7C7B\uFF1A",-1)),ae=["onClick"],oe={class:"learn-box"},le=["onClick"],de={class:"left-title"},ie={class:"title-char"},ne={class:"yellow-tag"},ce={class:"time-char"},re={class:"flex-start",style:{margin:"18px 0 0 18px"}},ue={class:"flex"},_e={class:"record-char"},ve={class:"study-dialog-wrap"},ye={class:"study-dialog-wrap"},pe={class:"study-dialog-wrap"},he={__name:"studyOverview",setup(v){const m=o([]),Y=[{id:"daily",name:"\u6BCF\u65E5\u4E00\u5B66"},{id:"weekly",name:"\u6BCF\u5468\u4E00\u505A"},{id:"monthy",name:"\u6BCF\u6708\u4E00\u8BFE"}],g=o("daily"),B=e=>{g.value=e,p()},y=o(-2),F=e=>{y.value=e,p()},k=o(0),x=o(1),O=e=>{x.value=e,p()},L=o([]),p=async()=>{const e={type:g.value,is_custom:!1,limit:10,page:x.value,area_id:0,school_id:l().schoolInfo.id,grade:y.value,title:"",start_date:"",end_date:"",tag_ids:""},a=await z(e);L.value=a.data,k.value=a.total};j(async()=>{const e=l().gradeList;(!e||!e.length)&&await l().getSchoolGradeList(),l().saveSchoolInfo(l().schoolInfo.id).then(()=>{console.log("schoolinfo_refresh")});const a=[];for(const r in e)e[r].id>=l().schoolInfo.grade_min&&e[r].id<=l().schoolInfo.grade_max&&a.push(e[r]);m.value=a,y.value=m.value[0].id,p()});const U=e=>A(e).utc().format("YYYY.MM.DD"),$=e=>l().gradeList.find(u=>u.id==e).name,C=o(0),w=o(!1),R=o(0),I=o(!1),D=o(0),V=o(!1),b=o(0),q=e=>{e.study_type=="daily"&&(w.value=!0,C.value=e.id),e.study_type=="weekly"&&(I.value=!0,R.value=e.id),e.study_type=="monthy"&&(V.value=!0,D.value=e.id,b.value=e.study_id)};return(e,a)=>{const r=E("el-pagination"),u=E("el-dialog");return d(),i("div",K,[s("div",Q,[s("div",X,[Z,(d(!0),i(h,null,f(m.value,t=>(d(),i("div",{class:M(["lab-item",y.value==t.id?"active":""]),onClick:_=>F(t.id),key:t.id},n(t.name),11,ee))),128))]),s("div",te,[se,(d(),i(h,null,f(Y,t=>s("div",{class:M(["lab-item",g.value==t.id?"active":""]),onClick:_=>B(t.id),key:t.id},n(t.name),11,ae)),64))])]),s("div",oe,[(d(!0),i(h,null,f(L.value,t=>(d(),i("div",{class:"learn-sec flex",key:t.id,onClick:_=>q(t)},[s("div",de,[s("span",ie,"\u300A"+n(t.title)+"\u300B",1),(d(!0),i(h,null,f(t.special_tag,_=>(d(),i("div",{class:"blue-tag",key:_.id},n(_.name),1))),128)),s("div",ne,"\u6240\u5C5E\u5E74\u7EA7\uFF1A"+n($(t.grade)),1)]),s("span",ce,n(U(t.show_date)),1)],8,le))),128))]),s("div",re,[s("div",ue,[s("span",_e,"\u5171"+n(k.value)+"\u6761\u8BB0\u5F55",1),c(r,{"page-size":10,"pager-count":5,layout:"prev, pager, next",total:k.value,onCurrentChange:O},null,8,["total"])])]),c(u,{modelValue:w.value,"onUpdate:modelValue":a[0]||(a[0]=t=>w.value=t),title:"",width:"29vw",center:""},{default:S(()=>[s("div",ve,[c(N,{"look-study-id":C.value},null,8,["look-study-id"])])]),_:1},8,["modelValue"]),c(u,{modelValue:I.value,"onUpdate:modelValue":a[1]||(a[1]=t=>I.value=t),title:"",width:"31vw",center:""},{default:S(()=>[s("div",ye,[c(P,{"look-study-id":R.value},null,8,["look-study-id"])])]),_:1},8,["modelValue"]),c(u,{modelValue:V.value,"onUpdate:modelValue":a[2]||(a[2]=t=>V.value=t),title:"",width:"30vw",center:""},{default:S(()=>[s("div",pe,[c(W,{"look-study-id":D.value,"look-month-id":b.value},null,8,["look-study-id","look-month-id"])])]),_:1},8,["modelValue"])])}}},Ce=T(he,[["__scopeId","data-v-9f837a3c"]]);export{Ce as default};
