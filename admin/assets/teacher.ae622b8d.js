import{p as a}from"./index.1caf286c.js";import{r}from"./datacenter.41505df4.js";const i=a("teacher",{state:()=>({teacherList:{}}),getters:{getTeacherList:e=>e.teacherList},actions:{async reqDatasourceTeacherAPI(e){const t=await r({school_id:e});this.teacherList=t}},persist:!0});export{i as u};
