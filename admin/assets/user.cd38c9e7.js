import{p as n}from"./index.1caf286c.js";import{r as s}from"./request.77cc4253.js";const i=async o=>await s.post("https://api.ps.familyeducation.org.cn/v1/user/info/my",o),_=n("user",{state:()=>({schoolUserInfo:{}}),getters:{getSchoolUserInfo:o=>o.schoolUserInfo},actions:{async saveSchoolUserInfo(){const e=await i({});this.schoolUserInfo=e}},persist:!0});export{_ as u};
