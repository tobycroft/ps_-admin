import{u as m,s as b,c as P}from"./school.993d4f9c.js";import{d as S,r as v,k,G as O,L as G,m as N,_ as w,b as h,o as c,c as r,g as a,F as I,f as C,n as E,e as g,w as B,i as A,v as U,x as V,t as D,B as $,C as F}from"./index.da22fb01.js";import{g as j}from"./ak.531bc442.js";import"./moment.9709ab41.js";const T=S({name:"LargeScreenPreview",props:{options:{type:Object,default:()=>{}}},setup(e,_){const o=v(e.options),s=v([{id:1,optionsId:-1},{id:2,optionsId:-1},{id:3,optionsId:-1}]),n=v([{id:4,optionsId:-1},{id:5,optionsId:-1},{id:6,optionsId:-1}]),i=v([{id:7,optionsId:-1},{id:8,optionsId:-1},{id:9,optionsId:-1}]),l=v(),t=u=>{if(u.id>=4&&u.id<=6){G.alert("\u4E2D\u95F4\u533A\u57DF\u6A21\u5757\u6682\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u914D\u7F6E","\u63D0\u9192",{confirmButtonText:"\u77E5\u9053\u4E86"});return}l.value=u,_.emit("change",l.value)},d=()=>{console.log("\u70B9\u51FB\u4E86\u91CD\u7F6E\u6309\u94AE :>> "),s.value[0].optionsId=1,s.value[1].optionsId=2,s.value[2].optionsId=3,i.value[0].optionsId=4,i.value[1].optionsId=5,i.value[2].optionsId=6,R()},y=()=>{console.log("\u70B9\u51FB\u4E86\u67E5\u770B\u6309\u94AE :>> ");const u=m().getSchoolInfo,f=N().loginInfo;window.location.href=`http://school.familyeducation.org.cn/screen/?uid=${f.uid}&token=${f.token}&school_id=${u.id}`},L=()=>{if(o.value){if(o.value.id>=1&&o.value.id<=3)for(const u of s.value)u.id===o.value.id&&(u.optionsId=o.value.optionsId);if(o.value.id>=4&&o.value.id<=6)for(const u of n.value)u.id===o.value.id&&(u.optionsId=o.value.optionsId);if(o.value.id>=7&&o.value.id<=9)for(const u of i.value)u.id===o.value.id&&(u.optionsId=o.value.optionsId)}};(async()=>{const f={school_id:m().getSchoolInfo.id},p=await b(f);console.log("\u83B7\u53D6\u5927\u5C4F\u914D\u7F6E_res :>> ",p.c1),s.value[0].optionsId=parseInt(p.l1),s.value[1].optionsId=parseInt(p.l2),s.value[2].optionsId=parseInt(p.l3),n.value[0].optionsId=parseInt(p.c1),n.value[1].optionsId=parseInt(p.c2),n.value[2].optionsId=parseInt(p.c3),i.value[0].optionsId=parseInt(p.r1),i.value[1].optionsId=parseInt(p.r2),i.value[2].optionsId=parseInt(p.r3)})();const R=async()=>{const f={school_id:m().getSchoolInfo.id,l1:s.value[0].optionsId,l2:s.value[1].optionsId,l3:s.value[2].optionsId,c1:n.value[0].optionsId,c2:n.value[1].optionsId,c3:n.value[2].optionsId,r1:i.value[0].optionsId,r2:i.value[1].optionsId,r3:i.value[2].optionsId};await P(f)};return k(()=>{o.value=e.options,L()}),O(o,()=>{R()}),{leftListRef:s,centerListRef:n,rightListRef:i,activeRef:l,onChangeActive:t,onReset:d,onCheck:y}}});const z=e=>(U("data-v-e6e8660a"),e=e(),V(),e),M={class:"large-screen-preview-container flex-center align-end"},q={class:"big-data-screen-box"},H=z(()=>a("header",null,"\u6570\u636E\u5927\u5C4F",-1)),J={class:"flex"},K=["onClick"],Q=["onClick"],W=["onClick"],X={class:"btn-box"},Y={class:"btn-style"},Z=A("\u91CD\u7F6E"),x={class:"btn-style"},ee=A("\u67E5\u770B");function oe(e,_,o,s,n,i){const l=h("el-button");return c(),r("div",M,[a("div",q,[H,a("article",J,[a("ul",null,[(c(!0),r(I,null,C(e.leftListRef,t=>(c(),r("li",{key:t.id,class:E(["side-li-style",{"active-li-style":e.activeRef&&e.activeRef.id===t.id}]),onClick:d=>e.onChangeActive(t)},null,10,K))),128))]),a("ul",null,[(c(!0),r(I,null,C(e.centerListRef,t=>(c(),r("li",{key:t.id,class:E(["center-li-style",{"active-li-style":e.activeRef&&e.activeRef.id===t.id}]),onClick:d=>e.onChangeActive(t)},null,10,Q))),128))]),a("ul",null,[(c(!0),r(I,null,C(e.rightListRef,t=>(c(),r("li",{key:t.id,class:E(["side-li-style",{"active-li-style":e.activeRef&&e.activeRef.id===t.id}]),onClick:d=>e.onChangeActive(t)},null,10,W))),128))])])]),a("div",X,[a("div",Y,[g(l,{onClick:e.onReset},{default:B(()=>[Z]),_:1},8,["onClick"])]),a("div",x,[g(l,{type:"primary",onClick:e.onCheck},{default:B(()=>[ee]),_:1},8,["onClick"])])])])}const ne=w(T,[["render",oe],["__scopeId","data-v-e6e8660a"]]),se=S({name:"LargeScreenOptions",props:{preview:{type:Object,default:()=>{}}},setup(e,_){const o=v(),s=v([{id:1,name:"\u603B\u6570\u6982\u89C8"},{id:2,name:"\u8FD1\u65E5\u5B66\u4E60\u8D8B\u52BF"},{id:3,name:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790"},{id:4,name:"\u6BCF\u65E5\u4E00\u5B66"},{id:5,name:"\u6BCF\u5468\u4E00\u505A"},{id:6,name:"\u6BCF\u6708\u4E00\u8BFE"},{id:7,name:"\u5BB6\u5EAD\u5206\u5E03"},{id:8,name:"\u5BB6\u5EAD\u7ED3\u6784\u5206\u6790"},{id:9,name:"\u73ED\u7EA7\u5B66\u4E60\u6392\u540D"},{id:10,name:"\u70ED\u95E8\u5185\u5BB9"},{id:11,name:"\u8FD1\u671F\u5B66\u4E60\u6D3B\u52A8"}]),n=v(-1),i=l=>{n.value=l,_.emit("change",n.value)};return k(()=>{o.value=e.preview,o.value&&(n.value=o.value.optionsId),console.log("previewRef.value :>> ",o.value)}),{getImageUrl:j,dataListRef:s,activeRef:n,onChangeActive:i,previewRef:o}}});const te={class:"large-screen-options-container"},ie={class:"flex flex-wrap"},ue=["onClick"];function ae(e,_,o,s,n,i){const l=h("el-image"),t=h("el-scrollbar");return c(),r("div",te,[a("header",null,D(e.previewRef?`\u6A21\u5757${e.previewRef.id}`:"\u8BF7\u9009\u62E9\u6A21\u5757"),1),$(a("article",null,[g(t,{class:"scrollbar-style"},{default:B(()=>[a("ul",ie,[(c(!0),r(I,null,C(e.dataListRef,d=>(c(),r("li",{key:d.id,class:E({"active-li-style":e.activeRef===d.id}),onClick:y=>e.onChangeActive(d.id)},[$(g(l,{class:"active-icon-style",src:e.getImageUrl("large_screen_options_checked.png")},null,8,["src"]),[[F,e.activeRef===d.id]]),A(" "+D(d.name),1)],10,ue))),128))])]),_:1})],512),[[F,e.previewRef]])])}const le=w(se,[["render",ae],["__scopeId","data-v-c92d2057"]]),ce=S({name:"bigScreenSetting",components:{LargeScreenPreview:ne,LargeScreenOptions:le},setup(){const e=v(),_=v();return{onChangePreviewActive:n=>{console.log("\u5927\u5C4F\u9884\u89C8\u6A21\u5757\u6539\u53D8\u9009\u4E2D\u9879\u89E6\u53D1_val :>> ",n),e.value=n},onChangeOptions:n=>{console.log("\u5927\u5C4F\u9009\u9879\u914D\u7F6E\u6539\u53D8\u9009\u4E2D\u9879\u89E6\u53D1_val :>> ",n),_.value={id:e.value?e.value.id:-1,optionsId:n}},previewActiveRef:e,optionsAvtiveRef:_}}});const re={class:"big-screen-setting-container"};function de(e,_,o,s,n,i){const l=h("LargeScreenPreview"),t=h("LargeScreenOptions");return c(),r("div",re,[a("article",null,[g(l,{options:e.optionsAvtiveRef,onChange:e.onChangePreviewActive},null,8,["options","onChange"]),g(t,{preview:e.previewActiveRef,class:"large-screen-options-style",onChange:e.onChangeOptions},null,8,["preview","onChange"])])])}const he=w(ce,[["render",de],["__scopeId","data-v-1cf8b6cc"]]);export{he as default};
