import{p as s}from"./index.1df2a75b.js";import{r as _}from"./request.60c3fc6d.js";const i=async e=>await _.post("https://api.ps.familyeducation.org.cn/v1/user/info/my",e),a=s("user",{state:()=>({schoolUserInfo:{}}),getters:{getSchoolUserInfo:e=>e.schoolUserInfo},actions:{async saveSchoolUserInfo(){const n=await i({});this.schoolUserInfo=n}},persist:!0});export{a as u};
