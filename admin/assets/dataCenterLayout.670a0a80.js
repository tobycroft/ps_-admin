import{_ as R,u as k,b as s,k as L,r as v,o as f,c as g,h as e,t as l,F as w,f as T,a as i,w as A,m as I,n as q,B as P,l as B,x as D,y as N}from"./index.1df2a75b.js";import{u as U}from"./user.95830931.js";import{u as V}from"./school.89e429a6.js";import{u as j}from"./teacher.98e543de.js";import{u as r}from"./fsa.24e57dba.js";import"./request.60c3fc6d.js";import"./datacenter.07b4dd9f.js";import"./fsa.bbbd6b64.js";const E=o=>(D("data-v-eefe6591"),o=o(),N(),o),z={class:"root-layout"},O={class:"header-wrap"},$={class:"header-box flex"},G={class:"school-tab"},H=["src"],J={class:"school-name"},K=["onClick"],M={class:"tab-char"},Q=E(()=>e("div",{class:"tab-block"},null,-1)),W={class:"user-logout"},X={class:"username"},Y={class:"main-content"},Z={__name:"dataCenterLayout",setup(o){const b=[{id:1,name:"\u5B66\u4E60\u62A5\u8868",router:"/studyReportForm"},{id:2,name:"\u8BFE\u7A0B\u6982\u89C8",router:"/studyOverview"},{id:3,name:"\u8BC4\u4EF7\u53CD\u9988",router:"/commentsFeedback"},{id:4,name:"\u6D3B\u52A8\u6570\u636E",router:"/activityData"}],u=k(),_=s(1),y=n=>{_.value=n.id,u.push({path:n.router})},S=()=>{console.log("login() :>> ",I()),I().getLoginInfo("",-1,""),u.push({path:"/login"})},d=V();j().reqDatasourceTeacherAPI(d.schoolInfo.id),r().reqFsaTagDataunitListAPI(),r().reqFsaTagFormListAPI(),r().reqFsaTagIndexListAPI(),r().reqFsaTagRoleListAPI();const x=U(),a=s(),t=s(),m=s(""),h=s(""),p=s("");return L(()=>{a.value=d.getSchoolInfo,t.value=x.getSchoolUserInfo,a.value.icon&&(m.value=a.value.icon),a.value.name&&(h.value=a.value.name),t.value.wx_img&&(p.value=t.value.wx_img)}),(n,ee)=>{const C=v("el-avatar"),F=v("el-scrollbar");return f(),g("div",z,[e("header",O,[e("div",$,[e("div",G,[e("img",{class:"logo",src:m.value,alt:""},null,8,H),e("span",J,l(h.value),1),(f(),g(w,null,T(b,c=>e("div",{class:q(["tab-item",c.id==_.value?"active":""]),onClick:se=>y(c),key:c.id},[e("span",M,l(c.name),1),Q],10,K)),64))]),e("div",W,[i(C,{class:"user-avatar",src:p.value,alt:""},null,8,["src"]),e("span",X,l(t.value.username),1),e("span",{class:"login-out",onClick:S},"[\u9000\u51FA]")])])]),e("main",null,[i(F,{class:"el-scroll-bar-style"},{default:A(()=>[e("div",Y,[i(P(B))])]),_:1})])])}}},ue=R(Z,[["__scopeId","data-v-eefe6591"]]);export{ue as default};
