import{p as i}from"./index.9132e306.js";import{r as e}from"./request.f7d8c249.js";const a=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/info/list",o),r=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/info/get",o),_=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/class/list",o),t=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/grade/list",o),m=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/grade/school",o),p=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/info/get_domain",o),P=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/notify/get",o),S=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/notify/set",o),O=async o=>await e.postGenerics("https://api.ps.familyeducation.org.cn/v1/school/screen/get",o),E=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/screen/set",o),D=i("school",{state:()=>({schoolInfoList:{},schoolInfo:{},gradeList:{},gradeListNew:{},classList:{},schoolDomainInfo:{}}),getters:{getSchoolInfoList:o=>o.schoolInfoList,getSchoolInfo:o=>o.schoolInfo,getGradeList:o=>o.gradeList,getGradeListNew:o=>o.gradeListNew,getClassList:o=>o.classList,getSchoolDomainInfo:o=>o.schoolDomainInfo},actions:{async saveSchoolInfoList(){const s=await a({});this.schoolInfoList=s},async saveSchoolInfo(o){if(o!==void 0){const n=await r({id:o});this.schoolInfo=n}},async getSchoolGradeList(){const o=await t({});this.gradeList=o},async getSchoolGradeListNew(o){if(o!==void 0){const n=await m({school_id:o});this.gradeListNew=n}},async getSchoolClassList(){const o=await _({});this.classList=o},async reqSchoolDomainGetAPI(o){const n=await p({domain:o});this.schoolDomainInfo=n}},persist:!0});export{S as a,E as b,P as r,O as s,D as u};
