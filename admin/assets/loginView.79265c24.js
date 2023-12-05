import{_ as w}from"./login-zh-icon.d552541b.js";import{b as E,H as B,z as y,U as u,m as G,v as J,u as W,r as P,o as D,c as C,h as e,B as S,t as g,a as r,w as l,P as H,i as x,E as k}from"./index.2f82ed88.js";import{u as m}from"./school.76762433.js";import{u as z}from"./user.2daa4501.js";import{r as I}from"./request.f905da80.js";import{g as v}from"./ak.eca20a65.js";const X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAAXNSR0IArs4c6QAAAXBJREFUKFN1kD9IAnEUx9/3zlMHKYeGtmizLXCMoECoodG2IEqrJdLSJXX4QWgNB6eQg3kRQYGgQVtLEE01FNRUWw21BREuddz9XpxlHFFvejw+3z88kGeE2AtqYScF4mUCCtbr06EQwu4iKBnmiAT6QTIGojEwHXxYtO8PKBkmOQlCi5kuVZaPKJbrbQWKzrZzbbW1UyHm3rtOQlRDWo82BShRAsVRKpsPuXRy0Fvnr93l/oVd10A4OLGeThy54n/hTnw4cEKMRn41Uf0TLpbNCwW8LBllArXyqWSlW+nbuX6XSy8MddR6LUI+9YxBW15Q6LU+v09tomTsNknFdm5l/twVCCF83t+6t2LFTCmSQxB6LeKqLNsZF9mll9+f+E5rWtweRSfeqMcZlGHpjxfWZp+7gs1KPcoSDSY5nV9dvOnA7mwYOzEFikHgFklcEXiKCMOwnblcduneZX7gr757Qa3XmQFogJhvrbfnY2//T8TCqQlkvmWrAAAAAElFTkSuQmCC",K=async i=>await I.post("https://api.ps.familyeducation.org.cn/v1/user/auth/phone",i),Z=async i=>await I.post("https://api.ps.familyeducation.org.cn/v1/user/auth/send",i),Y=async i=>await I.post("https://api.ps.familyeducation.org.cn/v1/school/admin/my_list",i),c=E(60),A=E(!1),Q=async i=>{await Z({phone:i})},$=async i=>{await Q(i),A.value=!0;const t=setInterval(()=>{c.value--,c.value<=0&&(A.value=!1,c.value=0,clearTimeout(t))},1e3)};const q={class:"container-wrap flex"},oo={class:"logo_section"},eo=["src"],no={class:"school-name"},so={class:"logo_name_wrap"},io=e("h1",{class:"title-char"},"Hi\uFF0C\u4F60\u597D\uFF01",-1),ao={class:"title-char"},ro={class:"flex-center login-container-wrap"},to={class:"login-wrap"},_o=e("h1",null,"\u767B\u5F55\u5B66\u6821\u7BA1\u7406\u4E2D\u5FC3",-1),mo={class:"flex item-wrap p"},po=e("div",{class:"icon-wrap flex-center"},[e("img",{class:"login-icon",src:w,alt:""})],-1),lo={class:"flex item-wrap"},Po={class:"flex el-input-wrap"},So=e("div",{class:"icon-wrap flex-center"},[e("img",{class:"login-icon",src:X,alt:""})],-1),co={key:0,class:"send-code grey"},Eo=x("\u767B\u5F55"),Ro={__name:"loginView",setup(i){const t=B();console.log("query",t.query);const p=E({});y(async()=>{t.query.domain?await m().reqSchoolDomainGetAPI(t.query.domain):t.query.id&&await m().saveSchoolInfo(t.query.id),m().schoolDomainInfo.id?p.value=m().schoolDomainInfo:m().schoolInfo.id&&(p.value=m().schoolInfo)});const R=E({}),N=(a,o,n)=>{o===""?n(new Error("\u8BF7\u8F93\u5165\u624B\u673A\u53F7")):/^1((3[0-9])|(4[1579])|(5[0-9])|(6[6])|(7[0-9])|(8[0-9])|(9[0-9]))\d{8}$/.test(o)?n():n(new Error("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"))},T=(a,o,n)=>{o===""?n(new Error("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801")):n()},s=u({codeRef:"",phoneRef:""}),O=G();J(()=>{O.loginInfo.phone&&(s.phoneRef=O.loginInfo.phone)});const b=u({phoneRef:[{validator:N,trigger:"blur"}],codeRef:[{validator:T,trigger:"blur"}]}),M=a=>{!a||a.validate(o=>{if(o)console.log("submit!",s),f();else return console.log("error submit!"),!1})},f=async()=>{const a={phone:s.phoneRef,code:s.codeRef},o=await K(a);O.getLoginInfo(o.token,o.uid,s.phoneRef),await F()},h=W(),F=async()=>{const o=await Y({});!o||o.length<1?k.error("\u65E0\u6743\u9650"):(V(o),h.push({path:"/platformSelection"}))},V=a=>{const o=z(),n=m();n.saveSchoolInfoList();const _=a[0].school_id;console.log("debug :>> ",_),n.saveSchoolInfo(_),o.saveSchoolUserInfo()};return(a,o)=>{const n=P("el-input"),_=P("el-form-item"),U=P("el-checkbox"),L=P("el-button"),j=P("el-form");return D(),C("div",{class:"root",style:H(`background-image: url(${p.value.bg_img||S(v)("login_bg.png")})`)},[e("div",q,[e("div",oo,[e("img",{class:"logo-img",src:p.value.icon||S(v)("school_logo.png"),alt:""},null,8,eo),e("span",no,g(p.value.name||"\u798F\u5EFA\u5F00\u653E\u5927\u5B66"),1)]),e("div",so,[io,e("h1",ao," \u6B22\u8FCE\u6765\u5230"+g(p.value.name||"\u798F\u5EFA\u5F00\u653E\u5927\u5B66"),1)]),e("div",ro,[e("div",to,[_o,r(j,{ref_key:"ruleFormRef",ref:R,model:s,"status-icon":"",rules:b,"label-width":"120px",class:"demo-ruleForm","label-position":"top",style:{width:"314px"}},{default:l(()=>[r(_,{"label-width":0,prop:"phoneRef",style:{width:"314px"}},{default:l(()=>[e("div",mo,[po,r(n,{modelValue:s.phoneRef,"onUpdate:modelValue":o[0]||(o[0]=d=>s.phoneRef=d),type:"text",maxlength:11,resize:"none",clearable:"",autocomplete:"off",class:"el-input"},null,8,["modelValue"])])]),_:1}),r(_,{"label-width":0,prop:"codeRef",style:{width:"314px"}},{default:l(()=>[e("div",lo,[e("div",Po,[So,r(n,{resize:"none",class:"el-input code",maxlength:"6",modelValue:s.codeRef,"onUpdate:modelValue":o[1]||(o[1]=d=>s.codeRef=d),type:"codeRefword"},null,8,["modelValue"])]),S(A)?(D(),C("div",co," \u5DF2\u53D1\u9001("+g(S(c))+"s) ",1)):(D(),C("div",{key:1,class:"send-code",onClick:o[2]||(o[2]=d=>S($)(s.phoneRef))}," \u83B7\u53D6\u9A8C\u8BC1\u7801 "))])]),_:1}),r(_,null,{default:l(()=>[r(U,{label:"\u8BB0\u4F4F\u8D26\u53F7",name:"type"})]),_:1}),r(_,null,{default:l(()=>[r(L,{class:"login-btn",type:"primary",onClick:o[3]||(o[3]=d=>M(R.value))},{default:l(()=>[Eo]),_:1})]),_:1})]),_:1},8,["model","rules"])])])])],4)}}};export{Ro as default};
