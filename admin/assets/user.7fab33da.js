import{p as s}from"./index.a1316a4a.js";import{r as _}from"./school.98547441.js";const a=async e=>await _.post("https://api.ps.familyeducation.org.cn/v1/user/info/my",e),p=s("user",{state:()=>({schoolUserInfo:{}}),getters:{getSchoolUserInfo:e=>e.schoolUserInfo},actions:{async saveSchoolUserInfo(){const n=await a({});this.schoolUserInfo=n}},persist:!0});export{p as u};
