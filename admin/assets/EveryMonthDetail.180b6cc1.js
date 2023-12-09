import{_ as y,o as r,c as d,h as n,F as g,f as k,n as m,i as T,t as h,A as C,x as w,y as b,C as u,D as _,E as M,r as v,a as f,j as I,w as P}from"./index.84c75795.js";import{d as x,h as D}from"./study.20234232.js";import{q as N,a as L,b as $}from"./quiz.fa7eb1d2.js";const E={props:{width:{type:Number,default:300},height:{type:Number,default:200},chapterId:{type:String,default:""},src:{type:String,defualt:""},initialTime:{type:[Number,String],default:0}},data(){return{videoUrl:"",playTime:0,videoContext:void 0,playStatus:!1}},watch:{chapterId(){this.switchVideoSource()}},mounted(){this.switchVideoSource()},methods:{onPause(){this.pause(),this.playStatus=!1},onPlay(){this.playStatus=!0},onClickNotes(){this.$emit("notes")},videoErrorCallback(t){console.log("\u64AD\u653E\u5F02\u5E38 :>> ",t)},switchVideoSource(){this.videoUrl="#",console.log("this.src :>> ",this.src),setTimeout(()=>{this.videoUrl=this.src},10)},listenPlay(){this.playStatus=!0},timeupdate(t){console.log("event.detail :>> ",t)},pause(){console.log("pause :>> "),this.playStatus&&this.$emit("pause",this.playTime),this.playStatus=!1},ended(){this.playStatus=!1}}},R={class:"video-container"},V=["src","initial-time"];function q(t,e,o,c,i,s){return r(),d("div",R,[n("video",{id:"myVideo",style:{width:"100%",height:"100%"},src:i.videoUrl,"initial-time":o.initialTime,"object-fit":"contain",onPlay:e[0]||(e[0]=(...a)=>s.listenPlay&&s.listenPlay(...a)),onTimeupdate:e[1]||(e[1]=(...a)=>s.timeupdate&&s.timeupdate(...a)),onPause:e[2]||(e[2]=(...a)=>s.pause&&s.pause(...a)),onEnded:e[3]||(e[3]=(...a)=>s.ended&&s.ended(...a)),onError:e[4]||(e[4]=(...a)=>s.videoErrorCallback&&s.videoErrorCallback(...a)),controls:""},null,40,V)])}const W=y(E,[["render",q],["__scopeId","data-v-42f7733b"]]);const z={props:{list:{type:[Array,Object],default:()=>[]},active:{type:[String,Number],default:1}},created(){console.log("this.list :>> ",this.list)},methods:{onTab(t){this.$emit("change",t.value)}}},F=t=>(w("data-v-4629af22"),t=t(),b(),t),U={class:"tabs-container"},G={class:"tabs-header-box"},B={class:"tabs-header-ul-style flex align-start"},j=["onClick"],H=F(()=>n("div",{class:"active-border-style"},null,-1));function Q(t,e,o,c,i,s){return r(),d("div",U,[n("div",G,[n("div",B,[(r(!0),d(g,null,k(o.list,a=>(r(),d("div",{key:a.value,class:m(["tabs-header-li-style",{"tabs-header-li-active-style":o.active===a.value}]),onClick:l=>s.onTab(a)},[T(h(a.name)+" ",1),H],10,j))),128))]),n("div",null,[C(t.$slots,"default",{},void 0,!0)])])])}const O=y(z,[["render",Q],["__scopeId","data-v-4629af22"]]);const J={name:"IntroductionInfo",props:{studentId:{type:String,default:""},taskId:{type:String,default:""},activeMonth:{type:Object,default:()=>{}}},data(){return{taskMonthData:{},rateInfo:{},isCollection:!1,hashFold:!0}},watch:{taskId:{handler(t){this.studyInfoGetAPI(t,"monthy")},immediate:!0}},mounted(){console.log("taskMonthData :>> ",this.taskMonthData),this.studyInfoGetAPI(this.taskId,"monthy")},methods:{onClickCollection(){this.isCollection=!this.isCollection,this.rateInfoAddAPI(this.taskId,this.studentId,this.rateInfo.share,this.isCollection)},onShare(t){console.log("e :>> ",t),this.rateInfoAddAPI(this.taskId,this.studentId,!0,this.rateInfo.like)},onUnfold(){this.hashFold=!this.hashFold},async studyInfoGetAPI(t,e){const c=await x({study_id:t,type:e});console.log("\u6708\u5217\u8868API_res :>> ",c),this.taskMonthData=c}}},K=t=>(w("data-v-e42f7e2c"),t=t(),b(),t),X={class:"introduction-info-container"},Y={class:"introduction-info-header-style flex"},Z={class:"introduction-info-title-style"},tt=K(()=>n("div",{class:"introduction-btn-box-style flex-start"},null,-1)),et={class:"introduction-info-article-style"},st={class:"lecturer-info-box-style flex-start"},ot={class:"lecturer-name-style"},it={class:"tags-style"},nt={class:"more-wrapper"},at=["innerHTML"];function lt(t,e,o,c,i,s){return r(),d("div",null,[u(n("div",X,[n("div",Y,[n("div",Z,h(i.taskMonthData.title),1),tt]),n("div",et,[n("div",st,[n("div",ot," \u8BB2\u5E08\uFF1A"+h(i.taskMonthData.teacher_info?i.taskMonthData.teacher_info.name:""),1),n("div",it,h(i.taskMonthData.teacher_info?i.taskMonthData.teacher_info.info:""),1)]),n("div",nt,[n("div",{class:m(["task-introduce-style",{"fold-style":i.hashFold}])},[n("div",{class:"detail-btn-style",onClick:e[0]||(e[0]=(...a)=>s.onUnfold&&s.onUnfold(...a))},h(i.hashFold?"\u5C55\u5F00":"\u6298\u53E0"),1),n("div",{innerHTML:i.taskMonthData.content},null,8,at)],2)])])],512),[[_,i.taskMonthData.title]])])}const ct=y(J,[["render",lt],["__scopeId","data-v-e42f7e2c"]]),rt="/admin/images/now_play.png";const dt={components:{},props:{active:{type:[String,Number],default:null},taskId:{type:String,default:""}},data(){return{topicList:[]}},watch:{taskId:{handler(t){console.log("month_id directiory",t),this.studyTopicListAPI(t)},immediate:!0}},mounted(){},methods:{onChange(t,e){this.$emit("change",{row:t,index:e})},secondToTime(t,e="true"){const o=parseInt(t);let c=0,i=0,s=0;return e?(c=Math.floor(o/3600)<10?"0"+Math.floor(o/3600):Math.floor(o/3600),i=Math.floor(o/60%60)<10?"0"+Math.floor(o/60%60):Math.floor(o/60%60),s=Math.floor(o%60)<10?"0"+Math.floor(o%60):Math.floor(o%60)):(c=Math.floor(o/3600),i=Math.floor(o/60%60),s=Math.floor(o%60)),{h:c,m:i,s}},handlePlayTime(t){console.log("playTime :>> ",t);const e=this.secondToTime(t,!1);return console.log("time :>> ",e),e.m>0?`${e.m}\u5206\u949F`:`${e.s}\u79D2\u949F`},next(){console.log("\u6267\u884Cnext :>> ");let t=parseInt(this.active);t<this.topicList.length-1&&(t+=1,this.onChange(this.topicList[t],t))},async studyTopicListAPI(t){const o=await D({monthy_id:t,type:"monthy"});this.topicList=o,this.onChange(this.topicList[0],0)}}},ht=t=>(w("data-v-ca0763d8"),t=t(),b(),t),ut={class:"directory-container"},_t={class:"header-box-style border-bottom-style flex"},ft=ht(()=>n("div",{class:"header-title-style"},"\u76EE\u5F55",-1)),vt={class:"header-total-style"},yt={class:"ul-style"},mt=["onClick"],pt={class:"flex"},It={class:"li-content-length-style"},gt={class:"now-play-image-style",src:rt,mode:""};function kt(t,e,o,c,i,s){return r(),d("div",ut,[n("div",null,[n("div",_t,[ft,n("div",vt,"\u5171"+h(i.topicList.length)+"\u8282",1)]),n("div",yt,[(r(!0),d(g,null,k(i.topicList,(a,l)=>(r(),d("div",{key:l,class:m(["li-style",{"border-bottom-style":l!=5-1}])},[n("div",{class:m(["li-content-style",{"li-content-last-style":l===5-1}]),onClick:p=>s.onChange(a,l)},[n("div",{class:m(["li-content-title-style",{"li-content-title-active-style":o.active===l}])},h(l+1)+". "+h(a.title),3),n("div",pt,[n("div",It,h(s.handlePlayTime(a.attach_duration)),1),u(n("img",gt,null,512),[[_,o.active===l]])])],10,mt)],2))),128))])])])}const wt=y(dt,[["render",kt],["__scopeId","data-v-ca0763d8"]]);const bt={components:{},props:{taskId:{type:Number,default:0}},data(){return{list:[],answerActive:[],result:void 0}},computed:{correctAnswerCmp(){let t="";if(this.result)for(const e of this.result.answerArr)console.log("item :>> ",e),t+=e.title.substring(0,1)+" ";return console.log("str :>> ",t),t},showTipsSuccess(){return this.result?this.result.answerResults==="success":!1},showTipsError(){return this.result?this.result.answerResults==="error":!1},answerState(){return this.result?this.result.answerResults==="error"||this.result.answerResults==="success":!1}},watch:{taskId:{handler(t){this.getListWorkflow()},immediate:!0}},methods:{async getListWorkflow(){this.list=await this.quizQuestionListAPI(this.taskId)},handleAnswerEcho(t){const e=[];t.choices.forEach(o=>{e.push(parseInt(o))}),this.list.selection_info.forEach(o=>{e.forEach(c=>{o.id===c&&(o.checked=!0)})}),this.handleAnswerActive(),this.onSubmit(!1)},changeChecked(t){console.log("\u4FEE\u6539\u9009\u9879 :>> ",t),!this.answerState&&(t.checked=!t.checked,this.handleAnswerActive())},handleAnswerActive(){console.log("this.list :>> ",this.list),this.answerActive=[];for(const t of this.list.selection_info)t.checked&&this.answerActive.push(t.id);console.log("answerActive :>> ",this.answerActive)},handleTips(t){console.log("answer :>> ",t);const e={},o=[],c=[];let i=null;for(const s of this.list.selection_info)s.is_answer===1&&o.push(s);e.answerArr=o;for(const s of o){const a=t.filter(l=>l===s.id);for(const l of a)c.push(l)}return e.activeArr=c,i=o.length===c.length?"success":"error",e.answerResults=i,e},async onSubmit(t=!0){if(t){await this.quizRecordAddAPI(this.list.id,`[${this.answerActive}]`),M({title:"\u7B54\u9898\u6210\u529F",type:"success",success:()=>{this.$emit("submit",this.list),this.result=this.handleTips(this.answerActive),console.log("this.result :>> ",this.result)}});return}this.$emit("submit",this.list),this.result=this.handleTips(this.answerActive),console.log("this.result :>> ",this.result)},onRedo(){this.answerActive=[],this.result=void 0,this.list.selection_info.forEach(t=>{t.checked=!1})},async quizQuestionListAPI(t){const o=await N({study_id:t});console.log("res :>> ",o);for(const c of o[0].selection_info)c.checked=!1;return o[0]},async quizRecordAddAPI(t,e){return await L({question_id:t,type:"monthy",choice:e})},async quizRecordGetAPI(t){return await $({question_id:t,type:"monthy"})}}},At={class:"practice-container"},St={class:"practice-box"},Tt={class:"header-style"},Ct={key:0,class:"ul-style"},Mt=["onClick"],Pt={class:"icon-box"},xt={class:"answer-options-style"},Dt={class:"footer-style"},Nt={class:"tips-box-style"},Lt={class:"success-tips-style"};function $t(t,e,o,c,i,s){const a=v("IconSvg");return r(),d("div",At,[n("div",null,[n("div",St,[n("div",Tt,h(i.list.title),1),i.list.selection_info?(r(),d("div",Ct,[(r(!0),d(g,null,k(i.list.selection_info,(l,p)=>(r(),d("div",{key:p,class:"li-style custom-flex-start",onClick:A=>s.changeChecked(l)},[n("div",Pt,[u(f(a,{iconName:"not_to_choose_icon",width:32,height:32},null,512),[[_,!l.checked]]),u(f(a,{iconName:"regsiter_selected",width:32,height:32},null,512),[[_,l.checked]])]),n("div",xt,h(l.title),1)],8,Mt))),128))])):I("",!0),n("div",Dt,[n("div",Nt,[u(n("div",{class:"error-tips-style"}," \u56DE\u7B54\u9519\u8BEF\uFF0C\u6B63\u786E\u7B54\u6848"+h(s.correctAnswerCmp),513),[[_,s.showTipsError]]),u(n("div",Lt," nice~\u56DE\u7B54\u6B63\u786E\uFF01 ",512),[[_,s.showTipsSuccess]])]),s.answerState?I("",!0):(r(),d("div",{key:0,class:"submit-btn-style",onClick:e[0]||(e[0]=(...l)=>s.onSubmit&&s.onSubmit(...l))}," \u63D0\u4EA4 ")),s.answerState?(r(),d("div",{key:1,class:"reset-btn-style",onClick:e[1]||(e[1]=(...l)=>s.onRedo&&s.onRedo(...l))}," \u91CD\u505A ")):I("",!0)])])])])}const Et=y(bt,[["render",$t],["__scopeId","data-v-4d1f50ba"]]);const Rt={name:"everyMonthDetail",props:["lookStudyId","lookMonthId"],components:{VideoMod:W,Tabs:O,IntroductionInfo:ct,Directory:wt,Practice:Et},watch:{lookStudyId:{handler(t){console.log("study_id",t),this.taskId=t},immediate:!0},lookMonthId:{handler(t){console.log("month_id",t),this.monthyId=t},immediate:!0}},data(){return{hashHistoryRouter:!1,tabsList:[{name:"\u7B80\u4ECB",value:0},{name:"\u7EC3\u4E60",value:1}],practiceList:{problem:"1.\u5B69\u5B50\u521A\u4E0A\u4E00\u5E74\u7EA7\uFF0C\u5BB6\u957F\u8981\u6709\u56DB\u4E2A\u5FC5\u5907\u7684\u5FC3\u6001\uFF0C\u4EE5\u4E0B\u6B63\u786E\u7684\u662F\uFF08\u591A\u9009\uFF09",options:[{name:"A. \u6559\u80B2\u8D23\u4EFB\u8981\u8BA4\u6E05",value:"A",checked:!1},{name:"B. \u7231\u4E0E\u5173\u6000\u8981\u7ED9\u591F",value:"B",checked:!1},{name:"C. \u7FA4\u4F53\u73AF\u5883\u8981\u9002\u5E94",value:"C",checked:!1},{name:"D. \u5BB6\u6821\u6C9F\u901A\u8981\u7D27\u5BC6",value:"D",checked:!1}]},videoW:null,videoH:null,student_id:"",taskId:"",monthyId:"",activeMonth:{},showWriteNote:!1,activeTab:0,activePlayIndex:0,actrivePlay:{},initialTime:0}},methods:{writeNoteSuccess(){this.$refs.notes.noteInfoListAPI(this.taskId)},changeTab(t){console.log("\u5207\u6362Tabs\u9879_val :>> ",t),this.activeTab=t},async onChangeDirectory(t){console.log("\u5207\u6362\u76EE\u5F55\u9009\u4E2D\u9879_val :>> ",t),this.$refs.video.onPause(),this.activePlayIndex=t.index,this.actrivePlay=t.row,this.$refs.video.onPlay()},handleWriteNote(){this.showWriteNote=!0},closeWriteNote(){this.showWriteNote=!1}}},Vt={class:"every-month-detail-container"},qt={class:"video-box-style"},Wt={class:"operation-box-style"},zt={class:"introduction-box-style"},Ft={class:"directory-style"},Ut={class:"practice-box-style"};function Gt(t,e,o,c,i,s){const a=v("VideoMod"),l=v("IntroductionInfo"),p=v("Directory"),A=v("Practice"),S=v("Tabs");return r(),d("div",Vt,[n("div",qt,[f(a,{class:"video-style",ref:"video",chapterId:i.actrivePlay.id,src:i.actrivePlay.attach_url,initialTime:i.initialTime,onNotes:s.handleWriteNote,onPause:t.onPause,onEnded:t.onEnded},null,8,["chapterId","src","initialTime","onNotes","onPause","onEnded"])]),n("div",Wt,[u(f(S,{list:i.tabsList,active:i.activeTab,onChange:s.changeTab},{default:P(()=>[u(n("div",zt,[f(l,{studentId:i.student_id,taskId:i.taskId,activeMonth:i.activeMonth},null,8,["studentId","taskId","activeMonth"]),n("div",Ft,[f(p,{ref:"Directory",active:i.activePlayIndex,taskId:i.monthyId,onChange:s.onChangeDirectory},null,8,["active","taskId","onChange"])])],512),[[_,i.activeTab===0]]),u(n("div",Ut,[f(A,{taskId:i.taskId},null,8,["taskId"])],512),[[_,i.activeTab===1]])]),_:1},8,["list","active","onChange"]),[[_,!i.showWriteNote]])])])}const Qt=y(Rt,[["render",Gt],["__scopeId","data-v-5c921ba7"]]);export{Qt as E};
