import{u as E,s as L,c as N}from"./school.d8e0c9db.js";import{d as F,r as v,k as $,G as P,V as O,m as U,_ as S,b as m,o as c,c as r,h as u,F as h,f as I,n as C,e as g,w as y,i as k,x as G,y as T,t as V,C as D,D as R}from"./index.2e3c0ac3.js";import{g as j}from"./ak.b86dff92.js";const M=F({name:"LargeScreenPreview",props:{options:{type:Object,default:()=>{}}},setup(e,_){const o=v(e.options),t=v([{id:1,optionsId:-1},{id:2,optionsId:-1},{id:3,optionsId:-1}]),n=v([{id:4,optionsId:-1},{id:5,optionsId:-1},{id:6,optionsId:-1}]),a=v([{id:7,optionsId:-1},{id:8,optionsId:-1},{id:9,optionsId:-1}]),l=v(),s=i=>{if(i.id>=4&&i.id<=6){O.alert("\u4E2D\u95F4\u533A\u57DF\u6A21\u5757\u6682\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u914D\u7F6E","\u63D0\u9192",{confirmButtonText:"\u77E5\u9053\u4E86"});return}l.value=i,_.emit("change",l.value)},d=()=>{console.log("\u70B9\u51FB\u4E86\u91CD\u7F6E\u6309\u94AE :>> "),t.value[0].optionsId=1,t.value[1].optionsId=2,t.value[2].optionsId=3,a.value[0].optionsId=4,a.value[1].optionsId=5,a.value[2].optionsId=6,A()},B=()=>{console.log("\u70B9\u51FB\u4E86\u67E5\u770B\u6309\u94AE :>> ");const i=E().getSchoolInfo,f=U().loginInfo;window.location.href=`http://school.familyeducation.org.cn/screen/?uid=${f.uid}&token=${f.token}&school_id=${i.id}&hostname=${encodeURI(i.name)}`},b=()=>{if(o.value){if(o.value.id>=1&&o.value.id<=3)for(const i of t.value)i.id===o.value.id&&(i.optionsId=o.value.optionsId);if(o.value.id>=4&&o.value.id<=6)for(const i of n.value)i.id===o.value.id&&(i.optionsId=o.value.optionsId);if(o.value.id>=7&&o.value.id<=9)for(const i of a.value)i.id===o.value.id&&(i.optionsId=o.value.optionsId)}};(async()=>{const f={school_id:E().getSchoolInfo.id},p=await L(f);console.log("\u83B7\u53D6\u5927\u5C4F\u914D\u7F6E_res :>> ",p.c1),t.value[0].optionsId=parseInt(p.l1),t.value[1].optionsId=parseInt(p.l2),t.value[2].optionsId=parseInt(p.l3),n.value[0].optionsId=parseInt(p.c1),n.value[1].optionsId=parseInt(p.c2),n.value[2].optionsId=parseInt(p.c3),a.value[0].optionsId=parseInt(p.r1),a.value[1].optionsId=parseInt(p.r2),a.value[2].optionsId=parseInt(p.r3)})();const A=async()=>{const f={school_id:E().getSchoolInfo.id,l1:t.value[0].optionsId,l2:t.value[1].optionsId,l3:t.value[2].optionsId,c1:n.value[0].optionsId,c2:n.value[1].optionsId,c3:n.value[2].optionsId,r1:a.value[0].optionsId,r2:a.value[1].optionsId,r3:a.value[2].optionsId};await N(f)};return $(()=>{o.value=e.options,b()}),P(o,()=>{A()}),{leftListRef:t,centerListRef:n,rightListRef:a,activeRef:l,onChangeActive:s,onReset:d,onCheck:B}}});const w=e=>(G("data-v-3099779c"),e=e(),T(),e),z={class:"large-screen-preview-container flex-center align-end"},W={class:"big-data-screen-box"},q=w(()=>u("header",null,"\u6570\u636E\u5927\u5C4F",-1)),H={class:"flex"},J=["onClick"],K=w(()=>u("div",{class:"li-content-style"},null,-1)),Q=[K],X=["onClick"],Y=["onClick"],Z=w(()=>u("div",{class:"li-content-style"},null,-1)),x=[Z],ee={class:"btn-box"},oe={class:"btn-style"},ne=k("\u91CD\u7F6E"),te={class:"btn-style"},se=k("\u67E5\u770B");function ie(e,_,o,t,n,a){const l=m("el-button");return c(),r("div",z,[u("div",W,[q,u("article",H,[u("ul",null,[(c(!0),r(h,null,I(e.leftListRef,s=>(c(),r("li",{key:s.id,class:C(["side-li-style",{"active-li-style":e.activeRef&&e.activeRef.id===s.id}]),onClick:d=>e.onChangeActive(s)},Q,10,J))),128))]),u("ul",null,[(c(!0),r(h,null,I(e.centerListRef,s=>(c(),r("li",{key:s.id,class:C(["center-li-style",{"active-li-style":e.activeRef&&e.activeRef.id===s.id}]),onClick:d=>e.onChangeActive(s)},null,10,X))),128))]),u("ul",null,[(c(!0),r(h,null,I(e.rightListRef,s=>(c(),r("li",{key:s.id,class:C(["side-li-style",{"active-li-style":e.activeRef&&e.activeRef.id===s.id}]),onClick:d=>e.onChangeActive(s)},x,10,Y))),128))])])]),u("div",ee,[u("div",oe,[g(l,{onClick:e.onReset},{default:y(()=>[ne]),_:1},8,["onClick"])]),u("div",te,[g(l,{type:"primary",onClick:e.onCheck},{default:y(()=>[se]),_:1},8,["onClick"])])])])}const ae=S(M,[["render",ie],["__scopeId","data-v-3099779c"]]),ue=F({name:"LargeScreenOptions",props:{preview:{type:Object,default:()=>{}}},setup(e,_){const o=v(),t=v([{id:1,name:"\u603B\u6570\u6982\u89C8",imgFileName:"CustomOverviewTotal"},{id:2,name:"\u8FD1\u65E5\u5B66\u4E60\u8D8B\u52BF",imgFileName:"CustomLearningTrend"},{id:3,name:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790",imgFileName:"CustomAnalysisParent"},{id:4,name:"\u6BCF\u65E5\u4E00\u5B66",imgFileName:"CustomDaily"},{id:5,name:"\u6BCF\u5468\u4E00\u505A",imgFileName:"CustomWeek"},{id:6,name:"\u6BCF\u6708\u4E00\u8BFE",imgFileName:"CustomMonth"},{id:7,name:"\u5BB6\u5EAD\u5206\u5E03",imgFileName:"CustomFamilyDistribution"},{id:8,name:"\u5BB6\u5EAD\u7ED3\u6784\u5206\u6790",imgFileName:"CustomFamilyStructure"},{id:9,name:"\u73ED\u7EA7\u5B66\u4E60\u6392\u540D",imgFileName:"CustomClassStudyRanking"},{id:10,name:"\u70ED\u95E8\u5185\u5BB9",imgFileName:"CustomPopularContent"},{id:11,name:"\u8FD1\u671F\u5B66\u4E60\u6D3B\u52A8",imgFileName:"CustomLearningActivities"}]),n=v(-1),a=l=>{n.value=l,_.emit("change",n.value)};return $(()=>{o.value=e.preview,o.value&&(n.value=o.value.optionsId),console.log("previewRef.value :>> ",o.value)}),{getImageUrl:j,dataListRef:t,activeRef:n,onChangeActive:a,previewRef:o}}});const le={class:"large-screen-options-container"},ce={class:"flex flex-wrap"},re=["onClick"];function de(e,_,o,t,n,a){const l=m("el-image"),s=m("el-scrollbar");return c(),r("div",le,[u("header",null,V(e.previewRef?`\u6A21\u5757${e.previewRef.id}`:"\u8BF7\u9009\u62E9\u6A21\u5757"),1),D(u("article",null,[g(s,{class:"scrollbar-style"},{default:y(()=>[u("ul",ce,[(c(!0),r(h,null,I(e.dataListRef,d=>(c(),r("li",{key:d.id,class:C({"active-li-style":e.activeRef===d.id}),onClick:B=>e.onChangeActive(d.id)},[g(l,{class:"component-preview-img-style",src:e.getImageUrl(`bigScreen/${d.imgFileName}.png`)},null,8,["src"]),D(g(l,{class:"active-icon-style",src:e.getImageUrl("large_screen_options_checked.png")},null,8,["src"]),[[R,e.activeRef===d.id]])],10,re))),128))])]),_:1})],512),[[R,e.previewRef]])])}const pe=S(ue,[["render",de],["__scopeId","data-v-442c22f9"]]),ve=F({name:"bigScreenSetting",components:{LargeScreenPreview:ae,LargeScreenOptions:pe},setup(){const e=v(),_=v();return{onChangePreviewActive:n=>{console.log("\u5927\u5C4F\u9884\u89C8\u6A21\u5757\u6539\u53D8\u9009\u4E2D\u9879\u89E6\u53D1_val :>> ",n),e.value=n},onChangeOptions:n=>{console.log("\u5927\u5C4F\u9009\u9879\u914D\u7F6E\u6539\u53D8\u9009\u4E2D\u9879\u89E6\u53D1_val :>> ",n),_.value={id:e.value?e.value.id:-1,optionsId:n}},previewActiveRef:e,optionsAvtiveRef:_}}});const _e={class:"big-screen-setting-container"};function ge(e,_,o,t,n,a){const l=m("LargeScreenPreview"),s=m("LargeScreenOptions");return c(),r("div",_e,[u("article",null,[g(l,{options:e.optionsAvtiveRef,onChange:e.onChangePreviewActive},null,8,["options","onChange"]),g(s,{preview:e.previewActiveRef,class:"large-screen-options-style",onChange:e.onChangeOptions},null,8,["preview","onChange"])])])}const Ce=S(ve,[["render",ge],["__scopeId","data-v-1cf8b6cc"]]);export{Ce as default};
