import{R as h,_ as m}from"./week_theme_tag.3217bb08.js";import{d as u}from"./study.cda22209.js";import{u as g}from"./school.1ff7a998.js";import{_ as p,r as k,o as i,c as l,h as s,n as v,j as c,t as o,a as D,x as f,y as I}from"./index.ae89ba5c.js";const b="/admin/icons/quotes_start_icon.svg",C="/admin/icons/quotes_end_icon.svg";const x={components:{RedTagCode:h},computed:{handleTagVisible(){return this.taskDay&&this.taskDay.common_tag&&this.taskDay.common_tag.length>0}},data(){return{isCollection:!1,taskId:null,studentId:null,taskDay:{},playTime:0,evaluationPage:{page:1,limit:10},evaluationTotal:0,last_page:0,evaluationList:[],rateInfo:{},allowsEvaluationOf:!1}},props:["lookStudyId"],watch:{lookStudyId:{handler(t){console.log("study_id",t),this.studyDailyGetAPI(t)},immediate:!0}},methods:{onShare(t){console.log("e :>> ",t)},onClickCollection(){this.isCollection=!this.isCollection,this.rateInfoAddAPI(this.taskId,this.studentId,this.rateInfo.share,this.isCollection)},onComments(){this.allowsEvaluationOf&&this.$refs.publishComments.open()},onPause(t){console.log("TaskDay\u6682\u505C :>> ",t),this.studyPlaySetAPI(this.taskId,t.detail.__args__[0])},onEnded(){console.log("TaskDay\u64AD\u653E\u5B8C\u6BD5 :>> ")},onSubmitComments(t){console.log("\u63D0\u4EA4\u8BC4\u8BBA :>> ",t),this.rateThreadAddAPI(this.taskId,this.studentId,t)},async studyDailyGetAPI(t){const d=await u({study_id:t,type:"daily"});this.taskDay=d;const e=g().gradeList.find(a=>a.id==this.taskDay.grade);this.taskDay.gradeName=e.name?e.name:"\u672A\u77E5\u5E74\u7EA7"}}},n=t=>(f("data-v-535bd429"),t=t(),I(),t),T={class:"everyday-detail-container"},S={class:"task-info-title"},P={class:"mark-box-style flex"},A={key:0,class:"task-type-img-style",src:m,mode:""},E={key:1,class:"tag-name-style"},V={class:"grade-style"},q={class:"title-box-style"},w={class:"title-style"},L={class:"tag-box-style"},N={class:"remarks-box-style"},R=n(()=>s("div",null,[s("img",{src:b,class:"quote-style",alt:"\u5F15\u53F7"})],-1)),B={class:"remarks-style"},G=n(()=>s("div",{class:"remarks-quotes-end-box-style"},[s("img",{src:C,class:"quote-style",alt:"\u5F15\u53F7"})],-1)),H={class:"audio-style-box"},M=n(()=>s("div",{class:"audio-title-style"},"\u8BED\u97F3\u64AD\u62A5",-1)),O=["src"],j=["innerHTML"];function z(t,_,d,r,e,a){const y=k("RedTagCode");return i(),l("div",T,[s("div",S,[s("div",P,[s("div",{class:v(["flex-start",{"task-type-style":a.handleTagVisible}])},[a.handleTagVisible?(i(),l("img",A)):c("",!0),a.handleTagVisible?(i(),l("div",E,o(e.taskDay.common_tag[0].name),1)):c("",!0)],2),s("div",V,"\u6240\u5C5E\u5E74\u7EA7\xB7"+o(e.taskDay.gradeName),1)]),s("div",q,[s("div",w,o(e.taskDay.title),1),s("div",L,[D(y,{title:"\u5173\u6CE8\u8981\u70B9",list:e.taskDay.special_tag},null,8,["list"])])]),s("div",N,[R,s("div",B,o(e.taskDay.slogan),1),G]),s("div",H,[M,s("div",null,[s("audio",{controls:"",style:{width:"100%"},src:e.taskDay.attach_url},null,8,O)])]),s("div",{class:"content-box-style",innerHTML:e.taskDay.content},null,8,j)])])}const U=p(x,[["render",z],["__scopeId","data-v-535bd429"]]);export{U as E};
