import{p as a}from"./index.9132e306.js";import{r}from"./datacenter.fa7863e0.js";const i=a("teacher",{state:()=>({teacherList:{}}),getters:{getTeacherList:e=>e.teacherList},actions:{async reqDatasourceTeacherAPI(e){const t=await r({school_id:e});this.teacherList=t}},persist:!0});export{i as u};
