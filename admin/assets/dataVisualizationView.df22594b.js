import{g as H,i as U,a as X,C as F,D as K}from"./CustomCard.354ea1c8.js";import{d as E,r as u,k as P,_ as h,b as c,o as y,c as f,g as d,F as B,f as L,e as s,w as g,t as D,s as M,v as O,x as T,n as z,j as J,i as S,h as Z,u as q}from"./index.8a7a668c.js";import{h as b}from"./moment.9709ab41.js";import{u as w,r as Q}from"./school.25e40e0c.js";import{u as ee,f as ae,a as te}from"./family.354df427.js";import{a as ne,d as oe,b as se,e as ie,f as le,g as re,s as ue,h as ce}from"./study.8615ea45.js";const _e=E({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(e){const a=u({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),t=u(e.dataSource),n=u(e.dataSourceAvg);return P(()=>{t.value=e.dataSource,n.value=e.dataSourceAvg,Object.keys(t.value).length>0&&(a.value.total.num=t.value.daily+t.value.weekly+t.value.monthy,a.value.total.tag.num=t.value.all_today,a.value.total.averageDaily.num=Math.ceil(n.value.all_num/n.value.day_num),a.value.daily.num=t.value.daily,a.value.daily.tag.num=t.value.daily,a.value.daily.averageDaily.num=Math.ceil(n.value.daily/n.value.day_num),a.value.weekly.num=t.value.weekly,a.value.weekly.tag.num=t.value.weekly_today,a.value.weekly.averageDaily.num=Math.ceil(n.value.weekly/n.value.day_num),a.value.monthy.num=t.value.monthy,a.value.monthy.tag.num=t.value.monthy_today,a.value.monthy.averageDaily.num=Math.ceil(n.value.monthy/n.value.day_num))}),{overviewListRef:a,getImageUrl:H}}});const de={class:"completed-amount-overview-container"},pe={class:"completed-amount-overview-ul flex"},me={class:"flex"},ge={class:"title-style"},ye={class:"flex-start align-end"},ve={class:"total-num-style"},fe={class:"tag-box flex-center"},Ce={class:"flex-start"},De={class:"average-daily-title-style"},he={class:"average-daily-num-style"};function Ee(e,a,t,n,r,i){const o=c("el-image"),l=c("el-card");return y(),f("div",de,[d("ul",pe,[(y(!0),f(B,null,L(e.overviewListRef,(_,v)=>(y(),f("li",{key:v,class:"completed-amount-overview-li"},[s(l,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[d("header",me,[d("p",ge,D(_.title),1),s(o,{class:"header-icon-style",src:e.getImageUrl(_.icon+".png")},null,8,["src"])]),d("article",ye,[d("p",ve,D(_.num),1),d("div",fe,[d("p",null,D(_.tag.title),1),d("p",null,D(_.tag.num),1)])]),d("footer",Ce,[d("p",De,D(_.averageDaily.title),1),d("p",he,D(_.averageDaily.num),1)])]),_:2},1024)]))),128))])])}const Ae=h(_e,[["render",Ee],["__scopeId","data-v-13e0d649"]]),Re=E({name:"LearningTrend",props:{echartsData:{type:[Array,Object],default:()=>[]},dateType:{type:String,defualt:""}},setup(e){const a=u(),t=u(),n=u(["01\u65E5","02\u65E5","03\u65E5","04\u65E5","05\u65E5","06\u65E5"]),r=u([1e3,2e3,3e3,4e3,5e3,6e3]),i=(o,l)=>{const _=[];o.forEach(A=>{A.type===l&&_.push(A)});const v=new Set(_),C=Array.from(v),m=[],p=[];return Array.isArray(C)&&C.forEach(A=>{A.dates&&m.push(A.dates),A.count&&p.push(A.count)}),{xAxisData:m,seriesData:p}};return M(()=>{const o=document.getElementById("LearningTrendChart"),l=U(o);P(()=>{a.value=e.echartsData,t.value=e.dateType;const _=i(a.value,t.value);n.value=_.xAxisData,r.value=_.seriesData;const v=u({xAxis:{type:"category",data:n.value},yAxis:{type:"value"},grid:{top:"5%",left:"5%"},series:[{data:r.value,type:"bar",barWidth:"24",itemStyle:{borderRadius:0,color:"#1890FF"}}]});v.value&&l.setOption(v.value)})}),{}}});const j=e=>(O("data-v-f659322c"),e=e(),T(),e),Se={class:"learning-trend-container"},be=j(()=>d("header",null,[d("p",{class:"title-style"},"\u5B66\u4E60\u8D8B\u52BF")],-1)),Pe=j(()=>d("article",null,[d("div",{id:"LearningTrendChart",class:"learning-trend-chart"})],-1)),ke=[be,Pe];function we(e,a,t,n,r,i){return y(),f("div",Se,ke)}const Fe=h(Re,[["render",we],["__scopeId","data-v-f659322c"]]);function $(){const e=(n,r)=>{const i=w().classList;console.log("calssList :>> ",i,Array.isArray(i));let o={id:-1,name:"\u5F02\u5E38\u6570\u636E"};return Array.isArray(i)&&(o=i[r]),`${a(n)}(${o?o.name:""})`},a=n=>{const r=w().gradeList;let i={id:-1,name:"\u5F02\u5E38\u6570\u636E"};if(Array.isArray(r))return i=r[parseInt(b().format("YYYY"))-n],i.name};return{getGradeClassName:e,getGraderName:a,getParentsName:n=>`${ee().getFamilyRoleList[n].name}`}}const $e=E({name:"CustomStudyRanking",props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const a=u(),t=r=>{const i=[];for(const o of r)i.push({name:$().getGradeClassName(o.year,o.class),num:`${o.count}\u4EBA`});return i},n=u([{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"}]);return P(()=>{if(a.value=e.listData,a.value!==void 0&&a.value.data){n.value=t(a.value.data);return}n.value=[],console.log("StudyRankingListRef.value :>> ",n.value)}),{StudyRankingListRef:n}}});const Ie={class:"custom-study-ranking-container"},Be={key:0,class:"study-ranking-ul"},Le={class:"left-box-style flex-start"},Oe={class:"study-ranking-name-style"},Te={class:"study-ranking-num-style"};function Me(e,a,t,n,r,i){return y(),f("div",Ie,[e.StudyRankingListRef.length>0?(y(),f("ul",Be,[(y(!0),f(B,null,L(e.StudyRankingListRef,(o,l)=>(y(),f("li",{key:l,class:"study-ranking-li flex"},[d("div",Le,[d("p",{class:z(["study-ranking-sort-style",{"top-three-sort-style":l<=2,"top-other-sort-style":l>2}])},D(l+1),3),d("p",Oe,D(o.name),1)]),d("p",Te,D(o.num),1)]))),128))])):J("",!0)])}const x=h($e,[["render",Me],["__scopeId","data-v-684f5e50"]]),Ne=E({name:"StudyRanking",components:{CustomStudyRanking:x},props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const a=u();return P(()=>{a.value=e.listData}),{listDataRef:a}}});const Ue=e=>(O("data-v-2ed10ece"),e=e(),T(),e),je={class:"study-ranking-container"},xe=Ue(()=>d("header",null,[d("p",{class:"title-style"},"\u73ED\u7EA7\u5B66\u4E60\u4EBA\u6570\u6392\u540D")],-1));function Ve(e,a,t,n,r,i){const o=c("CustomStudyRanking");return y(),f("div",je,[xe,d("article",null,[s(o,{listData:e.listDataRef},null,8,["listData"])])])}const Ge=h(Ne,[["render",Ve],["__scopeId","data-v-2ed10ece"]]);function We(){const e=u("daily"),a=u("2022-08-19"),t=u("2022-08-19"),n=()=>{a.value=b().format("YYYY-MM-DD"),t.value=b().format("YYYY-MM-DD")},r=()=>{const m=b().weekday()===0?7:b().weekday();a.value=b().subtract(m-1,"days").format("YYYY-MM-DD"),t.value=b().add(7-m,"days").format("YYYY-MM-DD")},i=()=>{const m=b().format("YYYY"),p=b().format("MM");a.value=b([m,0,1]).month(parseInt(p)-1).format("YYYY-MM-DD"),t.value=b([m,0,31]).month(parseInt(p)-1).format("YYYY-MM-DD")},o=m=>{if(typeof m.paneName=="string")switch(e.value=m.paneName,e.value){case"daily":n();break;case"weekly":r();break;case"monthy":i();break}_(a.value,t.value),C(e.value)},l=u(),_=async(m,p)=>{const k=await ne({start_date:m,end_date:p});l.value=Array.isArray(k)?k:[k]},v=u(),C=async m=>{const A=await oe({limit:7,page:1,type:m,school_id:1});v.value=A};return M(()=>{_(a.value,t.value),C(e.value)}),{activeTypeRef:e,changeActiveType:o,studyDashboardCompleteListRef:l,studyDashboardRankClassRef:v}}const Ye=E({name:"OverviewChart",components:{LearningTrend:Fe,StudyRanking:Ge},setup(){return{...We()}}});const He={class:"overview-chart-container"},Xe={class:"flex"};function Ke(e,a,t,n,r,i){const o=c("el-tab-pane"),l=c("el-tabs"),_=c("LearningTrend"),v=c("StudyRanking"),C=c("el-card");return y(),f("div",He,[s(C,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[d("header",null,[s(l,{modelValue:e.activeTypeRef,"onUpdate:modelValue":a[0]||(a[0]=m=>e.activeTypeRef=m),class:"demo-tabs",onTabClick:e.changeActiveType},{default:g(()=>[s(o,{label:"\u6BCF\u65E5\u4E00\u5B66",name:"daily"}),s(o,{label:"\u6BCF\u5468\u4E00\u505A",name:"weekly"}),s(o,{label:"\u6BCF\u6708\u4E00\u8BFE",name:"monthy"})]),_:1},8,["modelValue","onTabClick"])]),d("article",Xe,[s(_,{echartsData:e.studyDashboardCompleteListRef,dateType:e.activeTypeRef},null,8,["echartsData","dateType"]),s(v,{listData:e.studyDashboardRankClassRef},null,8,["listData"])])]),_:1})])}const ze=h(Ye,[["render",Ke],["__scopeId","data-v-5d5589b3"]]),Je=E({name:"CustomPagination",props:{total:{type:Number,default:0},page:{type:Number,defualt:1},limit:{type:Number,defualt:10}},setup(e,a){const t=u(0),n=u(1),r=u(10),i=o=>{n.value=o,a.emit("change",n.value)};return P(()=>{t.value=e.total,e.page&&(n.value=e.page),e.limit&&(r.value=e.limit)}),{totalRef:t,pageRef:n,limitRef:r,changePage:i}}});const Ze={class:"custom-pagination-container flex-start"},qe={class:"demonstration"};function Qe(e,a,t,n,r,i){const o=c("el-pagination");return y(),f("div",Ze,[d("div",qe,"\u5171"+D(e.totalRef)+"\u6761\u8BB0\u5F55",1),s(o,{small:"",background:"",layout:"prev, pager, next",total:e.totalRef,"current-page":e.pageRef,onCurrentChange:e.changePage},null,8,["total","current-page","onCurrentChange"])])}const N=h(Je,[["render",Qe],["__scopeId","data-v-2802132b"]]);function ea(){const e=u("daily"),a=u(1),t=u(10),n=u(0),r=_=>{a.value=_,console.log("pageRef.value :>> ",a.value)},i=u(),o=_=>{e.value=_.val},l=async _=>{const v={limit:`${t.value}`,page:`${a.value}`,type:_},C=await se(v);i.value=C.data,typeof C.total=="number"&&(n.value=C.total)};return P(()=>{const _=e.value;typeof _=="string"&&l(_)}),{hotConentList:i,changeTabs:o,paramTypeRef:e,changePage:r,pageRef:a,limitRef:t,totalRef:n}}const aa=E({name:"HotRanking",components:{CustomPagination:N},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...ea()}}});const ta=e=>(O("data-v-2ae22518"),e=e(),T(),e),na={class:"hot-ranking-container"},oa={class:"flex"},sa=ta(()=>d("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9\u6392\u884C",-1)),ia=S("\u6BCF\u65E5\u4E00\u5B66"),la=S("\u6BCF\u5468\u4E00\u505A"),ra=S("\u6BCF\u6708\u4E00\u8BFE"),ua={class:"flex-end"};function ca(e,a,t,n,r,i){const o=c("el-radio-button"),l=c("el-radio-group"),_=c("el-table-column"),v=c("el-table"),C=c("CustomPagination"),m=c("el-card");return y(),f("div",na,[s(m,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[d("header",oa,[sa,s(l,{class:"el-radio-group-style",modelValue:e.paramTypeRef,"onUpdate:modelValue":a[0]||(a[0]=p=>e.paramTypeRef=p),style:{"margin-bottom":"30px"}},{default:g(()=>[s(o,{label:"daily"},{default:g(()=>[ia]),_:1}),s(o,{label:"weekly"},{default:g(()=>[la]),_:1}),s(o,{label:"monthy"},{default:g(()=>[ra]),_:1})]),_:1},8,["modelValue"])]),d("article",null,[s(v,{data:e.hotConentList,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:g(()=>[s(_,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(_,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),s(_,{prop:"count",label:"\u5B8C\u6210\u91CF",width:"110",align:"center"})]),_:1},8,["data","header-cell-style"])]),d("footer",ua,[s(C,{total:e.totalRef,page:e.pageRef,limit:e.limitRef,onChangePage:e.changePage},null,8,["total","page","limit","onChangePage"])])]),_:1})])}const _a=h(aa,[["render",ca],["__scopeId","data-v-2ae22518"]]);function da(){const e=w().schoolInfo,a=u("grade"),t=u(),n=async r=>{const i=e.id,l=await ie({type:r,school_id:i});console.log("res_\u5B66\u4E60\u6392\u884C :>> ",l),t.value=l,console.log("studyDashboardRankClassTypeRef.value :>> ",t.value)};return P(()=>{n(a.value)}),{tabPositionRef:a,studyDashboardRankClassTypeRef:t}}const pa=E({name:"LearningRanking",components:{CustomPagination:N},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...da(),...$()}}});const ma=e=>(O("data-v-975a9dfe"),e=e(),T(),e),ga={class:"learning-ranking-container"},ya={class:"flex"},va=ma(()=>d("p",{class:"title-style"},"\u5B66\u4E60\u6392\u884C",-1)),fa=S("\u5E74\u7EA7\u6392\u884C"),Ca=S("\u73ED\u7EA7\u6392\u884C"),Da={class:"flex-end"};function ha(e,a,t,n,r,i){const o=c("el-radio-button"),l=c("el-radio-group"),_=c("el-table-column"),v=c("el-table"),C=c("CustomPagination"),m=c("el-card");return y(),f("div",ga,[s(m,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[d("header",ya,[va,s(l,{class:"el-radio-group-style",modelValue:e.tabPositionRef,"onUpdate:modelValue":a[0]||(a[0]=p=>e.tabPositionRef=p),style:{"margin-bottom":"30px"}},{default:g(()=>[s(o,{label:"grade"},{default:g(()=>[fa]),_:1}),s(o,{label:"class"},{default:g(()=>[Ca]),_:1})]),_:1},8,["modelValue"])]),d("article",null,[s(v,{data:e.studyDashboardRankClassTypeRef,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:g(()=>[s(_,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(_,{label:"\u540D\u79F0",width:"124"},{default:g(p=>[S(D(e.getGradeClassName(p.row.info.year,p.row.info.class)),1)]),_:1}),s(_,{label:"\u5B66\u4E60\u603B\u91CF",align:"center"},{default:g(p=>[S(D(p.row.count.daily),1)]),_:1}),s(_,{label:"\u6D3B\u52A8\u603B\u91CF",align:"center"},{default:g(p=>[S(D(p.row.count.weekly),1)]),_:1}),s(_,{label:"\u603B\u5B8C\u6210\u91CF",align:"center"},{default:g(p=>[S(D(p.row.count.monthy),1)]),_:1})]),_:1},8,["data","header-cell-style"])]),d("footer",Da,[s(C)])]),_:1})])}const Ea=h(pa,[["render",ha],["__scopeId","data-v-975a9dfe"]]),Aa=E({name:"WordCloud",props:{listData:{type:[Array,Object],default:()=>[]}},setup(e){const a=u();return P(()=>{a.value=e.listData}),{listRef:a,getRandom:X}}});const Ra={class:"word-cloud-container"},Sa={class:"cloud",role:"navigation","aria-label":"Webdev word cloud"},ba=["data-weight"];function Pa(e,a,t,n,r,i){return y(),f("div",Ra,[d("ul",Sa,[(y(!0),f(B,null,L(e.listRef,o=>(y(),f("li",{key:o.id},[d("a",{href:"#","data-weight":e.getRandom(1,9)},D(o.name),9,ba)]))),128))])])}const ka=h(Aa,[["render",Pa],["__scopeId","data-v-1c0bc7b5"]]),wa=async e=>await Q.post("https://api.ps.familyeducation.org.cn/v1/tag/info/list",e);function Fa(){const e=u();return(async()=>{const n=await wa({});e.value=n})(),{tagInfoListRef:e}}const $a=E({name:"HotTag",components:{WordCloud:ka,CustomCard:F},setup(){return{...Fa()}}});const Ia={class:"hot-tag-container"},Ba={class:"word-cloud-box"};function La(e,a,t,n,r,i){const o=c("WordCloud"),l=c("CustomCard");return y(),f("div",Ia,[s(l,{title:"\u91CD\u70B9\u5173\u6CE8\u4E3B\u9898"},{default:g(()=>[d("div",Ba,[s(o,{listData:e.tagInfoListRef},null,8,["listData"])])]),_:1})])}const Oa=h($a,[["render",La],["__scopeId","data-v-9dc1caf8"]]);function Ta(){console.log("useSchoolStore().schoolInfo :>> ",w().getSchoolInfo);const e=w().getSchoolInfo,a=u();return(async()=>{const n={school_id:e.id},r=await le(n);console.log("res_\u5BB6\u5EAD\u6784\u6210\u5206\u6790 :>> ",r);const i=[];Array.isArray(r)&&r.forEach(o=>{const l=$().getParentsName(o.family_role_id);i.push({value:o.count,name:l})}),a.value=i})(),{familyDashboardMemberGroupRoleRef:a}}const Ma=E({name:"FamilyCompositionAnalysis",components:{CustomCard:F,DoughnutChart:K},setup(){return{legend:{orient:"vertical",top:"center",right:90},title:{text:"\u5BB6\u5EAD\u6784\u6210",subtext:"",left:"25%",top:"center",textStyle:{fontSize:14},subtextStyle:{fontSize:16}},...Ta()}}});const Na={class:"family-composition-analysis-container"};function Ua(e,a,t,n,r,i){const o=c("DoughnutChart"),l=c("CustomCard");return y(),f("div",Na,[s(l,{title:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790"},{default:g(()=>[s(o,{legend:e.legend,title:e.title,width:"60%",left:"0",echartsData:e.familyDashboardMemberGroupRoleRef},null,8,["legend","title","echartsData"])]),_:1})])}const ja=h(Ma,[["render",Ua],["__scopeId","data-v-5fd1d56a"]]),xa=E({name:"BarChart",props:{gradeNames:{type:Array,default:()=>[]},bindNums:{type:Array,default:()=>[]}},setup(e){return M(()=>{const a=u(),t=u(),n=document.getElementById("barChart"),r=U(n),i=u({title:{text:""},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1,bottom:0},grid:{top:24,left:"3%",right:"4%",bottom:24,containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:a},series:[{name:"\u5E74\u7EA7",type:"bar",label:{show:!0,color:"#fff",fontSize:12},data:t}],barWidth:16,color:"#1890FF"});P(()=>{a.value=e.gradeNames,t.value=e.bindNums,i.value&&r.setOption(i.value)})}),{}}});const Va={id:"barChart",class:"bar-chart-container"};function Ga(e,a,t,n,r,i){return y(),f("div",Va)}const Wa=h(xa,[["render",Ga],["__scopeId","data-v-c1ab10cf"]]);function Ya(){const e=u(),a=u(),t=u(),n=()=>{a.value=[],t.value=[],Array.isArray(e.value)&&e.value.forEach(i=>{a.value.push($().getGraderName(i.year)),t.value.push(i.count)}),console.log("gradeNamesRef :>> ",a.value),console.log("bindNumsRef :>> ",t.value)};return(async()=>{const o={school_id:w().getSchoolInfo.id},l=await ae(o);console.log("res_\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570 :>> ",l),e.value=l,n()})(),{gradeNamesRef:a,bindNumsRef:t}}const Ha=E({name:"GradeParentsBoundNum",components:{CustomCard:F,BarChart:Wa},setup(){return{...Ya()}}});const Xa={class:"grade-parents-bound-num-container"};function Ka(e,a,t,n,r,i){const o=c("BarChart"),l=c("CustomCard");return y(),f("div",Xa,[s(l,{title:"\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570"},{default:g(()=>[s(o,{bindNums:e.bindNumsRef,gradeNames:e.gradeNamesRef},null,8,["bindNums","gradeNames"])]),_:1})])}const za=h(Ha,[["render",Ka],["__scopeId","data-v-ee246aa4"]]);function Ja(){const e=u(),a=u();return(async()=>{const r=await te({school_id:1});console.log("res_\u73ED\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6392\u540D :>> ",r),e.value=r,a.value=r.data})(),{familyDashboardGroupParentClassRef:e,familyDashboardGroupParentClassListDataRef:a}}const Za=E({name:"ClassBindingParentRanking",components:{CustomCard:F,CustomStudyRanking:x},setup(){return{...Ja()}}});const qa={class:"class-binding-parent-ranking-container"};function Qa(e,a,t,n,r,i){const o=c("CustomStudyRanking"),l=c("CustomCard");return y(),f("div",qa,[s(l,{title:"\u73ED\u7EA7\u7ED1\u5B9A\u5BB6\u957F\u4EBA\u6570\u6392\u540D"},{default:g(()=>[s(o,{listData:e.familyDashboardGroupParentClassRef},null,8,["listData"])]),_:1})])}const et=h(Za,[["render",Qa],["__scopeId","data-v-7efec27b"]]),at=E({name:"CustomDropdown",props:{active:{type:Object,default:()=>({name:"\u9ED8\u8BA4\u9009\u9879",id:-1})},listData:{type:[Array,Object],default:()=>[]}},setup(e,a){const t=u(),n=u(e.listData),r=i=>{console.log("val :>> ",i),console.log("active.id :>> ",n.value);const o=u();n.value.forEach(l=>{i===l.id&&(o.value=l)}),a.emit("change",o.value)};return P(()=>{t.value=e.active,console.log("activeRef.value :>> ",t.value)}),{activeRef:t,listDataRef:n,onCommand:r}}});const tt={class:"custom-dropdown-contaienr"},nt={class:"el-dropdown-link"};function ot(e,a,t,n,r,i){const o=c("arrow-down"),l=c("el-icon"),_=c("el-dropdown-item"),v=c("el-dropdown-menu"),C=c("el-dropdown");return y(),f("div",tt,[s(C,null,{dropdown:g(()=>[s(v,null,{default:g(()=>[(y(!0),f(B,null,L(e.listDataRef,m=>(y(),Z(_,{key:m.id,onClick:p=>e.onCommand(m.id)},{default:g(()=>[S(D(m.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:g(()=>[d("span",nt,[S(D(e.activeRef.name)+" ",1),s(l,{class:"el-icon--right"},{default:g(()=>[s(o)]),_:1})])]),_:1})])}const st=h(at,[["render",ot],["__scopeId","data-v-2df3e5b0"]]);function it(){const e=q(),a=u({name:"\u5168\u90E8\u5E74\u7EA7",id:-1}),t=u({name:"\u5168\u90E8\u73ED\u7EA7",id:-1}),n={"background-color":"#F6F8FA",color:"#606266"},r=u(),i=R=>b(R).format("YYYY-MM-DD HH:mm:ss"),o=u(1),l=u(10),_=u(0),v=R=>{o.value=R},C=u(),m=async()=>{const R=parseInt(b().format("YYYY"))-a.value.id,Y={limit:10,page:1,school_id:1,year:a.value.id!==-1?R:"",class:t.value.id!==-1?t.value.id:"",student_id:18},I=await re(Y);console.log("res_\u5BB6\u957F\u652F\u6301\u5DE5\u4F5C\u60C5\u51B5 :>> ",I),C.value=I,r.value=I.data,_.value=I.total};m();const p=w(),A=u(p.getGradeList),k=u(p.getClassList),V=R=>{console.log("val :>> ",R),a.value=R,m()},G=R=>{console.log("val :>> ",R),t.value=R,m()},W=R=>{console.log("val :>> ",R),e.push({path:"/parentsLearnDetailsView",query:{uid:R.uid,student_id:R.student_id}})};return{studyDashboardCompleteParentListRef:C,gradeActiveRef:a,classActiveRef:t,headerCellStyle:n,tableDataRef:r,fmtDateFn:i,...$(),gradeListRef:A,classListRef:k,gradeChange:V,classChange:G,pageRef:o,limitRef:l,totalRef:_,onChangePage:v,onToView:W}}const lt=E({name:"ParentSupportWorkSituation",components:{CustomCard:F,CustomDropdown:st,CustomPagination:N},setup(){return{...it()}}});const rt={class:"parent-support-work-situation-container"},ut={class:"filter-box"},ct=S(" \u67E5\u770B "),_t={class:"flex-end"};function dt(e,a,t,n,r,i){const o=c("CustomDropdown"),l=c("el-table-column"),_=c("el-button"),v=c("el-table"),C=c("CustomPagination"),m=c("CustomCard");return y(),f("div",rt,[s(m,{title:"\u5BB6\u957F\u652F\u6301\u5DE5\u4F5C\u60C5\u51B5"},{default:g(()=>[d("div",ut,[s(o,{active:e.gradeActiveRef,listData:e.gradeListRef,onChange:e.gradeChange},null,8,["active","listData","onChange"]),s(o,{class:"filter-class-style",active:e.classActiveRef,listData:e.classListRef,onChange:e.classChange},null,8,["active","listData","onChange"])]),s(v,{class:"el-table-style",data:e.tableDataRef,"header-cell-style":e.headerCellStyle,style:{width:"100%"}},{default:g(()=>[s(l,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(l,{prop:"wx_name",label:"\u5BB6\u957F"}),s(l,{prop:"studentInfo",label:"\u5B66\u751F\u4FE1\u606F",align:"center"},{default:g(p=>[S(D(p.row.name)+" | "+D(e.getGradeClassName(p.row.year,p.row.class)),1)]),_:1}),s(l,{prop:"daily_count",label:"\u6BCF\u65E5\u4E00\u5B66",align:"center"}),s(l,{prop:"weekly_count",label:"\u6BCF\u5468\u4E00\u505A",align:"center"}),s(l,{prop:"monthy_count",label:"\u6BCF\u6708\u4E00\u8BFE",align:"center"}),s(l,{prop:"date",label:"\u6700\u8FD1\u4E0A\u7EBF\u65F6\u95F4",align:"center"},{default:g(p=>[S(D(e.fmtDateFn(p.row.date)),1)]),_:1}),s(l,{prop:"date",label:"\u64CD\u4F5C",align:"center"},{default:g(p=>[s(_,{type:"primary",link:"",onClick:A=>e.onToView(p.row)},{default:g(()=>[ct]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","header-cell-style"]),d("footer",_t,[s(C,{page:e.pageRef,limit:e.limitRef,total:e.totalRef,onChange:e.onChangePage},null,8,["page","limit","total","onChange"])])]),_:1})])}const pt=h(lt,[["render",dt],["__scopeId","data-v-24bf8fd7"]]);function mt(){const e=u({}),a=u({}),t=async()=>{const i=await ue({});e.value=i},n=async()=>{const i=await ce({});a.value=i};return t(),n(),{studyDashboardCompleteCountRef:e,studyDashboardCompleteDailyRef:a}}const gt={name:"dataVisualizationView",components:{CompletedAmountOverview:Ae,OverviewChart:ze,HotRanking:_a,LearningRanking:Ea,HotTag:Oa,FamilyCompositionAnalysis:ja,GradeParentsBoundNum:za,ClassBindingParentRanking:et,ParentSupportWorkSituation:pt},setup(){return{...mt()}}};const yt={class:"data-visualization-view-container"},vt={class:"row-style flex"},ft={class:"row-style flex"},Ct={class:"row-style flex"},Dt={class:"row-style"};function ht(e,a,t,n,r,i){const o=c("CompletedAmountOverview"),l=c("OverviewChart"),_=c("HotRanking"),v=c("LearningRanking"),C=c("HotTag"),m=c("FamilyCompositionAnalysis"),p=c("GradeParentsBoundNum"),A=c("ClassBindingParentRanking"),k=c("ParentSupportWorkSituation");return y(),f("div",yt,[s(o,{dataSource:e.studyDashboardCompleteCountRef,dataSourceAvg:e.studyDashboardCompleteDailyRef},null,8,["dataSource","dataSourceAvg"]),s(l,{class:"overview-chart-style"}),d("div",vt,[s(_),s(v)]),d("div",ft,[s(C),s(m)]),d("div",Ct,[s(p),s(A)]),d("div",Dt,[s(k)])])}const kt=h(gt,[["render",ht],["__scopeId","data-v-0abd23c2"]]);export{kt as default};
