import{p as s}from"./index.da22fb01.js";import{r as _}from"./school.993d4f9c.js";const a=async e=>await _.post("https://api.ps.familyeducation.org.cn/v1/user/info/my",e),p=s("user",{state:()=>({schoolUserInfo:{}}),getters:{getSchoolUserInfo:e=>e.schoolUserInfo},actions:{async saveSchoolUserInfo(){const n=await a({});this.schoolUserInfo=n}},persist:!0});export{p as u};
