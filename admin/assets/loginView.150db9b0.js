import{_ as N}from"./login-zh-icon.d552541b.js";import{r as S,H as w,z as V,U as y,m as x,v as W,u as G,b as l,o as A,c as P,h as n,B as g,t as C,e as i,w as c,P as B,i as H,E as Y}from"./index.09e91211.js";import{r as v,u as r}from"./school.3a964e44.js";import{u as K}from"./user.c765bbf9.js";import{g as O}from"./ak.b86dff92.js";const X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAAXNSR0IArs4c6QAAAXBJREFUKFN1kD9IAnEUx9/3zlMHKYeGtmizLXCMoECoodG2IEqrJdLSJXX4QWgNB6eQg3kRQYGgQVtLEE01FNRUWw21BREuddz9XpxlHFFvejw+3z88kGeE2AtqYScF4mUCCtbr06EQwu4iKBnmiAT6QTIGojEwHXxYtO8PKBkmOQlCi5kuVZaPKJbrbQWKzrZzbbW1UyHm3rtOQlRDWo82BShRAsVRKpsPuXRy0Fvnr93l/oVd10A4OLGeThy54n/hTnw4cEKMRn41Uf0TLpbNCwW8LBllArXyqWSlW+nbuX6XSy8MddR6LUI+9YxBW15Q6LU+v09tomTsNknFdm5l/twVCCF83t+6t2LFTCmSQxB6LeKqLNsZF9mll9+f+E5rWtweRSfeqMcZlGHpjxfWZp+7gs1KPcoSDSY5nV9dvOnA7mwYOzEFikHgFklcEXiKCMOwnblcduneZX7gr757Qa3XmQFogJhvrbfnY2//T8TCqQlkvmWrAAAAAElFTkSuQmCC",Z=async a=>await v.post("https://api.ps.familyeducation.org.cn/v1/user/auth/phone",a),z=async a=>await v.post("https://api.ps.familyeducation.org.cn/v1/user/auth/send",a),$=async a=>await v.post("https://api.ps.familyeducation.org.cn/v1/school/admin/my_list",a),u=S(60),E=S(!1),q=async a=>{await z({phone:a})},Q=async a=>{await q(a),E.value=!0;const p=setInterval(()=>{u.value--,u.value<=0&&(E.value=!1,u.value=0,clearTimeout(p))},1e3)};const J={class:"container-wrap flex"},ee={class:"logo_section"},ne=["src"],se={class:"school-name"},_e={class:"logo_name_wrap"},ae=n("h1",{class:"title-char"},"Hi\uFF0C\u4F60\u597D\uFF01",-1),oe={class:"title-char"},ie={class:"flex-center login-container-wrap"},pe={class:"login-wrap"},te=n("h1",null,"\u767B\u5F55\u7BA1\u7406\u4E2D\u5FC3",-1),re={class:"flex item-wrap p"},me=n("div",{class:"icon-wrap flex-center"},[n("img",{class:"login-icon",src:N,alt:""})],-1),ce={class:"flex item-wrap"},de={class:"flex el-input-wrap"},le=n("div",{class:"icon-wrap flex-center"},[n("img",{class:"login-icon",src:X,alt:""})],-1),ge={key:0,class:"send-code grey"},ue=H("\u767B\u5F55"),Ee={__name:"loginView",setup(a){const p=w();console.log("query",p.query);const m=S({});V(async()=>{p.query.domain?await r().reqSchoolDomainGetAPI(p.query.domain):p.query.id&&await r().saveSchoolInfo(p.query.id),r().schoolDomainInfo.id?m.value=r().schoolDomainInfo:r().schoolInfo.id&&(m.value=r().schoolInfo)});const R=S({}),U=(o,e,s)=>{e===""?s(new Error("\u8BF7\u8F93\u5165\u624B\u673A\u53F7")):/^1((3[0-9])|(4[1579])|(5[0-9])|(6[6])|(7[0-9])|(8[0-9])|(9[0-9]))\d{8}$/.test(e)?s():s(new Error("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"))},k=(o,e,s)=>{e===""?s(new Error("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801")):s()},_=y({codeRef:"",phoneRef:""}),D=x();W(()=>{D.loginInfo.phone&&(_.phoneRef=D.loginInfo.phone)});const b=y({phoneRef:[{validator:U,trigger:"blur"}],codeRef:[{validator:k,trigger:"blur"}]}),T=o=>{!o||o.validate(e=>{if(e)console.log("submit!",_),L();else return console.log("error submit!"),!1})},L=async()=>{const o={phone:_.phoneRef,code:_.codeRef},e=await Z(o);D.getLoginInfo(e.token,e.uid,_.phoneRef),await I()},f=G(),I=async()=>{const e=await $({});!e||e.length<1?Y.error("\u65E0\u6743\u9650"):(M(e),f.push({path:"/platformSelection"}))},M=o=>{const e=K(),s=r();s.saveSchoolInfoList();const t=o[0].school_id;console.log("debug :>> ",t),s.saveSchoolInfo(t),e.saveSchoolUserInfo()};return(o,e)=>{const s=l("el-input"),t=l("el-form-item"),h=l("el-checkbox"),j=l("el-button"),F=l("el-form");return A(),P("div",{class:"root",style:B(`background-image: url(${m.value.bg_img||g(O)("login_bg.png")})`)},[n("div",J,[n("div",ee,[n("img",{class:"logo-img",src:m.value.icon||g(O)("school_logo.png"),alt:""},null,8,ne),n("span",se,C(m.value.name||"\u798F\u5EFA\u5F00\u653E\u5927\u5B66"),1)]),n("div",_e,[ae,n("h1",oe," \u6B22\u8FCE\u6765\u5230"+C(m.value.name||"\u798F\u5EFA\u5F00\u653E\u5927\u5B66"),1)]),n("div",ie,[n("div",pe,[te,i(F,{ref_key:"ruleFormRef",ref:R,model:_,"status-icon":"",rules:b,"label-width":"120px",class:"demo-ruleForm","label-position":"top",style:{width:"314px"}},{default:c(()=>[i(t,{"label-width":0,prop:"phoneRef",style:{width:"314px"}},{default:c(()=>[n("div",re,[me,i(s,{modelValue:_.phoneRef,"onUpdate:modelValue":e[0]||(e[0]=d=>_.phoneRef=d),type:"text",maxlength:11,resize:"none",clearable:"",autocomplete:"off",class:"el-input"},null,8,["modelValue"])])]),_:1}),i(t,{"label-width":0,prop:"codeRef",style:{width:"314px"}},{default:c(()=>[n("div",ce,[n("div",de,[le,i(s,{resize:"none",class:"el-input code",maxlength:"6",modelValue:_.codeRef,"onUpdate:modelValue":e[1]||(e[1]=d=>_.codeRef=d),type:"codeRefword"},null,8,["modelValue"])]),g(E)?(A(),P("div",ge," \u5DF2\u53D1\u9001("+C(g(u))+"s) ",1)):(A(),P("div",{key:1,class:"send-code",onClick:e[2]||(e[2]=d=>g(Q)(_.phoneRef))}," \u83B7\u53D6\u9A8C\u8BC1\u7801 "))])]),_:1}),i(t,null,{default:c(()=>[i(h,{label:"\u8BB0\u4F4F\u8D26\u53F7",name:"type"})]),_:1}),i(t,null,{default:c(()=>[i(j,{class:"login-btn",type:"primary",onClick:e[3]||(e[3]=d=>T(R.value))},{default:c(()=>[ue]),_:1})]),_:1})]),_:1},8,["model","rules"])])])])],4)}}};export{Ee as default};
