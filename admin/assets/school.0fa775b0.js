import{p as i}from"./index.6ec564e4.js";import{r as e}from"./request.76b261a9.js";const r=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/info/list",o),a=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/info/get",o),_=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/class/list",o),t=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/grade/list",o),m=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/grade/school",o),p=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/info/get_domain",o),l=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/notify/get",o),S=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/notify/set",o),E=async o=>await e.postGenerics("https://api.ps.familyeducation.org.cn/v1/school/screen/get",o),O=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/school/screen/set",o),D=i("school",{state:()=>({schoolInfoList:{},schoolInfo:{},gradeList:{},gradeListNew:{},classList:{},schoolDomainInfo:{}}),getters:{getSchoolInfoList:o=>o.schoolInfoList,getSchoolInfo:o=>o.schoolInfo,getGradeList:o=>o.gradeList,getGradeListNew:o=>o.gradeListNew,getClassList:o=>o.classList,getSchoolDomainInfo:o=>o.schoolDomainInfo},actions:{async saveSchoolInfoList(){const s=await r({});this.schoolInfoList=s},async saveSchoolInfo(o){if(o!==void 0){const n=await a({id:o});this.schoolInfo=n}},async getSchoolGradeList(){const o=await t({});this.gradeList=o},async getSchoolGradeListNew(o){if(o!==void 0){const n=await m({school_id:o});this.gradeListNew=n}},async getSchoolClassList(){const o=await _({});this.classList=o},async reqSchoolDomainGetAPI(o){const n=await p({domain:o});this.schoolDomainInfo=n}},persist:!0});export{S as a,O as b,l as r,E as s,D as u};
