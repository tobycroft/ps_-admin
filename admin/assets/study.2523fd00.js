import{p as n}from"./index.ad456479.js";import{r as s}from"./request.eff117cc.js";const _=async e=>await s.post("https://api.ps.familyeducation.org.cn/v1/tag/info/list",e),p=n("useStudyStore",{state:()=>({tagList:{}}),actions:{async tagInfoListAPI(){const e=await _({});this.tagList=e}},persist:!0});export{p as u};
