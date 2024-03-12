import{g as A}from"./ak.28e5d0de.js";import{u as E}from"./user.b1ef85d5.js";import{u as h}from"./school.0fa775b0.js";import{d as $,u as k,b as i,k as U,m as S,_ as D,r as p,o as g,c as v,h as s,a as c,t as C,w as b,i as I,F as B,f as L,C as V,D as N,n as x,x as j,y as H}from"./index.6ec564e4.js";import{B as P}from"./study.1702a52e.js";import{u as F}from"./useBasisStoreLogic.9ec070ee.js";import{u as R}from"./family.91730c19.js";import{u as q}from"./study.a351520b.js";import"./request.76b261a9.js";const z=$({name:"CustomNavHeader",setup(){const e=k(),a=h(),u=E(),l=i(),r=i(),d=i(""),t=i(""),n=i(""),_=()=>{console.log("login() :>> ",S()),S().getLoginInfo("",-1,""),e.push({path:"/login"})};return U(()=>{l.value=a.getSchoolInfo,r.value=u.getSchoolUserInfo,l.value.icon&&(d.value=l.value.icon),l.value.name&&(t.value=l.value.name),r.value.wx_img&&(n.value=r.value.wx_img)}),{projectImgRef:d,projectNameRef:t,userAvatarRef:n,schoolUserInfoRef:r,exitSystem:_}}});const G={class:"custom-nav-header-container flex"},T={class:"project-info-box flex-start"},J={class:"project-title-style"},K={class:"user-info-box flex-start"},M={class:"user-info-style flex-start"},O={class:"user-name-style"},Q=I("[\u9000\u51FA]");function W(e,a,u,l,r,d){const t=p("el-avatar"),n=p("el-button");return g(),v("div",G,[s("div",T,[c(t,{size:28,src:e.projectImgRef},null,8,["src"]),s("p",J,C(e.projectNameRef),1)]),s("div",K,[s("div",M,[c(t,{size:32,src:e.userAvatarRef},null,8,["src"]),s("p",O,C(e.schoolUserInfoRef.username),1)]),c(n,{class:"exit-btn-style",type:"primary",link:"",onClick:e.exitSystem},{default:b(()=>[Q]),_:1},8,["onClick"])])])}const X=D(z,[["render",W],["__scopeId","data-v-cc76147f"]]);function Y(){h().getSchoolGradeList(),h().getSchoolClassList(),R().reqFamilyRoleListApi(),R().reqFamilyTypeListApi(),q().tagInfoListAPI()}const Z=$({name:"platformSelection",components:{CustomNavHeader:X},setup(){F().saveSchoolInfoList(),F().saveSchoolUserInfo,Y();const e=k(),a=i([{id:3,name:"\u6570\u636E\u4E2D\u5FC3",imgURL:"datacenter_bg.png"},{id:1,name:"\u7BA1\u7406\u540E\u53F0",imgURL:"management_background.png"},{id:2,name:"\u6570\u636E\u5927\u5C4F",imgURL:"big_data_screen.png"}]),u=i(-1),l=m=>{u.value=m,r(u.value)},r=async m=>{const o=S().loginInfo,f=h().getSchoolInfo,w=await _(f.id);switch(m){case 1:e.push("/workbenchView");break;case 2:if(w===null){console.log("\u6CA1\u6709\u5927\u5C4F\u6743\u9650 :>> "),d.value=!0;return}window.open(`http://school.familyeducation.org.cn/screen/#/?uid=${o.uid}&token=${o.token}&school_id=${f.id}&hostname=${encodeURI(f.name)}`,"_blank");break;case 3:e.push("/datacenter");break}},d=i(!1),t=i(!1),n=()=>{t.value=!0},_=async m=>{const f=await P({school_id:m});return console.log("\u6821\u9A8C\u662F\u5426\u62E5\u6709\u5927\u5C4F\u7AEF\u6743\u9650_res :>> ",f),f};return{listDataRef:a,getImageUrl:A,activeRef:u,changeActive:l,tipsVisibleRef:d,dialogVisibleRef:t,onContactCustomerService:n}}}),ee="/admin/icons/files_icon.png";const y=e=>(j("data-v-f38df773"),e=e(),H(),e),se={class:"platform-selection-container"},oe=y(()=>s("p",{class:"title-style"},"\u9009\u62E9\u767B\u5F55\u754C\u9762",-1)),te={class:"ul-style flex"},ne=["onClick"],ae={class:"platform-name-style"},le=y(()=>s("img",{class:"file-icon",src:ee,alt:""},null,-1)),ce={class:"tips-box flex align-center"},ie={class:"flex-start"},re=y(()=>s("p",{class:"tips-content-style"},"\u8FD8\u672A\u8D2D\u4E70\u6B64\u9879\u529F\u80FD\uFF0C",-1)),ue=I("\u8054\u7CFB\u5BA2\u670D\u8D2D\u4E70"),de=y(()=>s("div",{class:"contact-customer-service-dialog-content-style"},[s("p",{class:"contact-customer-service-dialog-title-style"}," \u8FD8\u672A\u8D2D\u4E70\u6B64\u9879\u529F\u80FD "),s("p",{class:"contact-customer-service-dialog-describe-style"}," \u5FAE\u4FE1\u626B\u7801\u8054\u7CFB\u8D2D\u4E70 "),s("div",{class:"qrcode-box"})],-1));function me(e,a,u,l,r,d){const t=p("CustomNavHeader"),n=p("el-image"),_=p("el-button"),m=p("el-dialog");return g(),v("div",se,[s("header",null,[c(t)]),s("article",null,[oe,s("ul",te,[(g(!0),v(B,null,L(e.listDataRef,o=>(g(),v("li",{key:o.id,class:x(["li-style",{"active-style":e.activeRef===o.id}]),onClick:f=>e.changeActive(o.id)},[c(n,{class:"platform-icon-style",src:e.getImageUrl(o.imgURL),fit:"fill"},null,8,["src"]),s("div",ae,[le,I(" "+C(o.name),1)])],10,ne))),128))])]),V(s("div",ce,[s("div",ie,[c(n,{class:"tips-icon-style",src:e.getImageUrl("close_orange_round.png")},null,8,["src"]),re,c(_,{type:"primary",link:"",onClick:e.onContactCustomerService},{default:b(()=>[ue]),_:1},8,["onClick"])]),c(n,{class:"tips-close-icon-style",src:e.getImageUrl("close_orange.png"),onClick:a[0]||(a[0]=o=>e.tipsVisibleRef=!1)},null,8,["src"])],512),[[N,e.tipsVisibleRef]]),c(m,{class:"contact-customer-service-dialog-style",modelValue:e.dialogVisibleRef,"onUpdate:modelValue":a[1]||(a[1]=o=>e.dialogVisibleRef=o),title:"",width:"30%",draggable:""},{default:b(()=>[de]),_:1},8,["modelValue"])])}const be=D(Z,[["render",me],["__scopeId","data-v-f38df773"]]);export{be as default};
