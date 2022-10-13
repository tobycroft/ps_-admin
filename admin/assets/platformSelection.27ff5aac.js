import{g as w}from"./ak.b86dff92.js";import{u as U}from"./user.767df87e.js";import{u as h}from"./school.65b5def9.js";import{d as R,u as $,r as i,k as B,m as y,_ as k,b as p,o as g,c as v,h as s,e as c,t as S,w as C,i as D,F as E,f as L,C as V,D as N,n as x,x as j,y as H}from"./index.12680ef6.js";import{B as P}from"./study.d0f5ba73.js";import{u as b}from"./useBasisStoreLogic.cb62280a.js";import{u as F}from"./family.6ca607bc.js";import{u as q}from"./study.4021ed51.js";const z=R({name:"CustomNavHeader",setup(){const e=$(),a=h(),u=U(),l=i(),r=i(),d=i(""),t=i(""),n=i(""),_=()=>{console.log("login() :>> ",y()),y().getLoginInfo("",-1,""),e.push({path:"/login"})};return B(()=>{l.value=a.getSchoolInfo,r.value=u.getSchoolUserInfo,l.value.icon&&(d.value=l.value.icon),l.value.name&&(t.value=l.value.name),r.value.wx_img&&(n.value=r.value.wx_img)}),{projectImgRef:d,projectNameRef:t,userAvatarRef:n,schoolUserInfoRef:r,exitSystem:_}}});const G={class:"custom-nav-header-container flex"},T={class:"project-info-box flex-start"},J={class:"project-title-style"},K={class:"user-info-box flex-start"},M={class:"user-info-style flex-start"},O={class:"user-name-style"},Q=D("[\u9000\u51FA]");function W(e,a,u,l,r,d){const t=p("el-avatar"),n=p("el-button");return g(),v("div",G,[s("div",T,[c(t,{size:28,src:e.projectImgRef},null,8,["src"]),s("p",J,S(e.projectNameRef),1)]),s("div",K,[s("div",M,[c(t,{size:32,src:e.userAvatarRef},null,8,["src"]),s("p",O,S(e.schoolUserInfoRef.username),1)]),c(n,{class:"exit-btn-style",type:"primary",link:"",onClick:e.exitSystem},{default:C(()=>[Q]),_:1},8,["onClick"])])])}const X=k(z,[["render",W],["__scopeId","data-v-cc76147f"]]);function Y(){h().getSchoolGradeList(),h().getSchoolClassList(),F().reqFamilyRoleListApi(),F().reqFamilyTypeListApi(),q().tagInfoListAPI()}const Z=R({name:"platformSelection",components:{CustomNavHeader:X},setup(){b().saveSchoolInfoList(),b().saveSchoolUserInfo,Y();const e=$(),a=i([{id:1,name:"\u7BA1\u7406\u540E\u53F0",imgURL:"management_background.png"},{id:2,name:"\u6570\u636E\u5927\u5C4F",imgURL:"management_background.png"}]),u=i(-1),l=m=>{u.value=m,r(u.value)},r=async m=>{const o=y().loginInfo,f=h().getSchoolInfo,A=await _(f.id);switch(m){case 1:e.push("/");break;case 2:if(A===null){console.log("\u6CA1\u6709\u5927\u5C4F\u6743\u9650 :>> "),d.value=!0;return}window.location.href=`http://school.familyeducation.org.cn/screen/?uid=${o.uid}&token=${o.token}&school_id=${f.id}&hostname=${encodeURI(f.name)}`;break}},d=i(!1),t=i(!1),n=()=>{t.value=!0},_=async m=>{const f=await P({school_id:m});return console.log("\u6821\u9A8C\u662F\u5426\u62E5\u6709\u5927\u5C4F\u7AEF\u6743\u9650_res :>> ",f),f};return{listDataRef:a,getImageUrl:w,activeRef:u,changeActive:l,tipsVisibleRef:d,dialogVisibleRef:t,onContactCustomerService:n}}});const I=e=>(j("data-v-3c86b171"),e=e(),H(),e),ee={class:"platform-selection-container"},se=I(()=>s("p",{class:"title-style"},"\u9009\u62E9\u767B\u5F55\u754C\u9762",-1)),oe={class:"ul-style flex"},te=["onClick"],ne={class:"platform-name-style"},ae={class:"tips-box flex align-center"},le={class:"flex-start"},ce=I(()=>s("p",{class:"tips-content-style"},"\u8FD8\u672A\u8D2D\u4E70\u6B64\u9879\u529F\u80FD\uFF0C",-1)),ie=D("\u8054\u7CFB\u5BA2\u670D\u8D2D\u4E70"),re=I(()=>s("div",{class:"contact-customer-service-dialog-content-style"},[s("p",{class:"contact-customer-service-dialog-title-style"}," \u8FD8\u672A\u8D2D\u4E70\u6B64\u9879\u529F\u80FD "),s("p",{class:"contact-customer-service-dialog-describe-style"}," \u5FAE\u4FE1\u626B\u7801\u8054\u7CFB\u8D2D\u4E70 "),s("div",{class:"qrcode-box"})],-1));function ue(e,a,u,l,r,d){const t=p("CustomNavHeader"),n=p("el-image"),_=p("el-button"),m=p("el-dialog");return g(),v("div",ee,[s("header",null,[c(t)]),s("article",null,[se,s("ul",oe,[(g(!0),v(E,null,L(e.listDataRef,o=>(g(),v("li",{key:o.id,class:x(["li-style",{"active-style":e.activeRef===o.id}]),onClick:f=>e.changeActive(o.id)},[c(n,{class:"platform-icon-style",src:e.getImageUrl(o.imgURL),fit:"fill"},null,8,["src"]),s("p",ne,S(o.name),1)],10,te))),128))])]),V(s("div",ae,[s("div",le,[c(n,{class:"tips-icon-style",src:e.getImageUrl("close_orange_round.png")},null,8,["src"]),ce,c(_,{type:"primary",link:"",onClick:e.onContactCustomerService},{default:C(()=>[ie]),_:1},8,["onClick"])]),c(n,{class:"tips-close-icon-style",src:e.getImageUrl("close_orange.png"),onClick:a[0]||(a[0]=o=>e.tipsVisibleRef=!1)},null,8,["src"])],512),[[N,e.tipsVisibleRef]]),c(m,{class:"contact-customer-service-dialog-style",modelValue:e.dialogVisibleRef,"onUpdate:modelValue":a[1]||(a[1]=o=>e.dialogVisibleRef=o),title:"",width:"30%",draggable:""},{default:C(()=>[re]),_:1},8,["modelValue"])])}const ye=k(Z,[["render",ue],["__scopeId","data-v-3c86b171"]]);export{ye as default};
