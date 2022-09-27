import{g as U,a as q}from"./ak.047e9a3e.js";import{d as $,r as c,k as A,_ as D,b as i,o as f,c as h,g as _,F as L,f as Y,e as s,w as m,t as C,v as x,x as N,y as T,n as J,j as K,i as R,h as Q,u as X}from"./index.2b844b74.js";import{i as M,C as S,D as Z}from"./CustomCard.4ca33f90.js";import{h as w}from"./moment.9709ab41.js";import{u as B}from"./school.dd3ed787.js";import{u as ee,f as te,a as ae}from"./family.29d02ddb.js";import{a as oe,g as ne,b as se,h as le,i as ue,j as re,s as ce,k as ie}from"./study.558cf861.js";import{t as de}from"./tag.5ecad4f9.js";const _e=$({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(e){const t=c({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),o=c(e.dataSource),a=c(e.dataSourceAvg);return A(()=>{o.value=e.dataSource,a.value=e.dataSourceAvg,Object.keys(o.value).length>0&&(t.value.total.num=o.value.daily+o.value.weekly+o.value.monthy,t.value.total.tag.num=o.value.all_today,t.value.total.averageDaily.num=Math.ceil(a.value.all_num/a.value.day_num),t.value.daily.num=o.value.daily,t.value.daily.tag.num=o.value.daily,t.value.daily.averageDaily.num=Math.ceil(a.value.daily/a.value.day_num),t.value.weekly.num=o.value.weekly,t.value.weekly.tag.num=o.value.weekly_today,t.value.weekly.averageDaily.num=Math.ceil(a.value.weekly/a.value.day_num),t.value.monthy.num=o.value.monthy,t.value.monthy.tag.num=o.value.monthy_today,t.value.monthy.averageDaily.num=Math.ceil(a.value.monthy/a.value.day_num))}),{overviewListRef:t,getImageUrl:U}}});const pe={class:"completed-amount-overview-container"},me={class:"completed-amount-overview-ul flex"},ye={class:"flex"},fe={class:"title-style"},ge={class:"flex-start align-end"},he={class:"total-num-style"},ve={class:"tag-box flex-center"},Ce={class:"flex-start"},be={class:"average-daily-title-style"},De={class:"average-daily-num-style"};function $e(e,t,o,a,r,l){const n=i("el-image"),u=i("el-card");return f(),h("div",pe,[_("ul",me,[(f(!0),h(L,null,Y(e.overviewListRef,(d,g)=>(f(),h("li",{key:g,class:"completed-amount-overview-li"},[s(u,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ye,[_("p",fe,C(d.title),1),s(n,{class:"header-icon-style",src:e.getImageUrl(d.icon+".png")},null,8,["src"])]),_("article",ge,[_("p",he,C(d.num),1),_("div",ve,[_("p",null,C(d.tag.title),1),_("p",null,C(d.tag.num),1)])]),_("footer",Ce,[_("p",be,C(d.averageDaily.title),1),_("p",De,C(d.averageDaily.num),1)])]),_:2},1024)]))),128))])])}const Ee=D(_e,[["render",$e],["__scopeId","data-v-13e0d649"]]),Re=$({name:"LearningTrend",props:{echartsData:{type:[Array,Object],default:()=>[]},dateType:{type:String,defualt:""}},setup(e){const t=c(),o=c(),a=c(["01\u65E5","02\u65E5","03\u65E5","04\u65E5","05\u65E5","06\u65E5"]),r=c([1e3,2e3,3e3,4e3,5e3,6e3]),l=(n,u)=>{const d=[];n.forEach(b=>{b.type===u&&d.push(b)});const g=new Set(d),v=Array.from(g),y=[],p=[];return Array.isArray(v)&&v.forEach(b=>{b.dates&&y.push(b.dates),b.count&&p.push(b.count)}),{xAxisData:y,seriesData:p}};return x(()=>{const n=document.getElementById("LearningTrendChart"),u=M(n);A(()=>{t.value=e.echartsData,o.value=e.dateType;const d=l(t.value,o.value);a.value=d.xAxisData,r.value=d.seriesData;const g=c({xAxis:{type:"category",data:a.value},yAxis:{type:"value"},grid:{top:"5%",left:"5%"},series:[{data:r.value,type:"bar",barWidth:"24",itemStyle:{borderRadius:0,color:"#1890FF"}}]});g.value&&u.setOption(g.value)})}),{}}});const O=e=>(N("data-v-f659322c"),e=e(),T(),e),Be={class:"learning-trend-container"},we=O(()=>_("header",null,[_("p",{class:"title-style"},"\u5B66\u4E60\u8D8B\u52BF")],-1)),Ae=O(()=>_("article",null,[_("div",{id:"LearningTrendChart",class:"learning-trend-chart"})],-1)),ke=[we,Ae];function Fe(e,t,o,a,r,l){return f(),h("div",Be,ke)}const Se=D(Re,[["render",Fe],["__scopeId","data-v-f659322c"]]);function I(){const e=(a,r)=>{const l=B().classList;console.log("calssList :>> ",l,Array.isArray(l));let n={id:-1,name:"\u5F02\u5E38\u6570\u636E"};return Array.isArray(l)&&(n=l[r]),`${t(a)}(${n?n.name:""})`},t=a=>{const r=B().gradeList;let l={id:-1,name:"\u5F02\u5E38\u6570\u636E"};if(Array.isArray(r))return l=r[parseInt(w().format("YYYY"))-a+1],l.name};return{getGradeClassName:e,getGraderName:t,getParentsName:a=>`${ee().getFamilyRoleList[a].name}`}}const Ie=$({name:"CustomStudyRanking",props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c(),o=r=>{const l=[];for(const n of r)l.push({name:I().getGradeClassName(n.year,n.class),num:`${n.count}\u4EBA`});return l},a=c([{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"}]);return A(()=>{if(t.value=e.listData,t.value!==void 0&&t.value.data){a.value=o(t.value.data);return}a.value=[],console.log("StudyRankingListRef.value :>> ",a.value)}),{StudyRankingListRef:a}}});const Pe={class:"custom-study-ranking-container"},Le={key:0,class:"study-ranking-ul"},Ye={class:"left-box-style flex-start"},Ne={class:"study-ranking-name-style"},Te={class:"study-ranking-num-style"};function xe(e,t,o,a,r,l){return f(),h("div",Pe,[e.StudyRankingListRef.length>0?(f(),h("ul",Le,[(f(!0),h(L,null,Y(e.StudyRankingListRef,(n,u)=>(f(),h("li",{key:u,class:"study-ranking-li flex"},[_("div",Ye,[_("p",{class:J(["study-ranking-sort-style",{"top-three-sort-style":u<=2,"top-other-sort-style":u>2}])},C(u+1),3),_("p",Ne,C(n.name),1)]),_("p",Te,C(n.num),1)]))),128))])):K("",!0)])}const V=D(Ie,[["render",xe],["__scopeId","data-v-684f5e50"]]),Ge=$({name:"StudyRanking",components:{CustomStudyRanking:V},props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c();return A(()=>{t.value=e.listData}),{listDataRef:t}}});const Me=e=>(N("data-v-2ed10ece"),e=e(),T(),e),Oe={class:"study-ranking-container"},Ve=Me(()=>_("header",null,[_("p",{class:"title-style"},"\u73ED\u7EA7\u5B66\u4E60\u4EBA\u6570\u6392\u540D")],-1));function We(e,t,o,a,r,l){const n=i("CustomStudyRanking");return f(),h("div",Oe,[Ve,_("article",null,[s(n,{listData:e.listDataRef},null,8,["listData"])])])}const He=D(Ge,[["render",We],["__scopeId","data-v-2ed10ece"]]);function je(){const e=B().getSchoolInfo,t=c("daily"),o=c("2022-08-19"),a=c("2022-08-19"),r=()=>{o.value=w().format("YYYY-MM-DD"),a.value=w().format("YYYY-MM-DD")},l=()=>{const p=w().weekday()===0?7:w().weekday();o.value=w().subtract(p-1,"days").format("YYYY-MM-DD"),a.value=w().add(7-p,"days").format("YYYY-MM-DD")},n=()=>{const p=w().format("YYYY"),b=w().format("MM");o.value=w([p,0,1]).month(parseInt(b)-1).format("YYYY-MM-DD"),a.value=w([p,0,31]).month(parseInt(b)-1).format("YYYY-MM-DD")},u=p=>{if(typeof p.paneName=="string")switch(t.value=p.paneName,t.value){case"daily":r();break;case"weekly":l();break;case"monthy":n();break}g(o.value,a.value),y(t.value)},d=c(),g=async(p,b)=>{const k={start_date:p,end_date:b,school_id:e.id},F=await oe(k);d.value=Array.isArray(F)?F:[F]},v=c(),y=async p=>{const b=B().getSchoolInfo,k={limit:7,page:1,type:p,school_id:b.id},F=await ne(k);v.value=F};return x(()=>{g(o.value,a.value),y(t.value)}),{activeTypeRef:t,changeActiveType:u,studyDashboardCompleteListRef:d,studyDashboardRankClassRef:v}}const ze=$({name:"OverviewChart",components:{LearningTrend:Se,StudyRanking:He},setup(){return{...je()}}});const Ue={class:"overview-chart-container"},qe={class:"flex"};function Je(e,t,o,a,r,l){const n=i("el-tab-pane"),u=i("el-tabs"),d=i("LearningTrend"),g=i("StudyRanking"),v=i("el-card");return f(),h("div",Ue,[s(v,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",null,[s(u,{modelValue:e.activeTypeRef,"onUpdate:modelValue":t[0]||(t[0]=y=>e.activeTypeRef=y),class:"demo-tabs",onTabClick:e.changeActiveType},{default:m(()=>[s(n,{label:"\u6BCF\u65E5\u4E00\u5B66",name:"daily"}),s(n,{label:"\u6BCF\u5468\u4E00\u505A",name:"weekly"}),s(n,{label:"\u6BCF\u6708\u4E00\u8BFE",name:"monthy"})]),_:1},8,["modelValue","onTabClick"])]),_("article",qe,[s(d,{echartsData:e.studyDashboardCompleteListRef,dateType:e.activeTypeRef},null,8,["echartsData","dateType"]),s(g,{listData:e.studyDashboardRankClassRef},null,8,["listData"])])]),_:1})])}const Ke=D(ze,[["render",Je],["__scopeId","data-v-5d5589b3"]]),Qe=$({name:"CustomPagination",props:{total:{type:Number,default:0},page:{type:Number,defualt:1},limit:{type:Number,defualt:10}},setup(e,t){const o=c(0),a=c(1),r=c(10),l=n=>{a.value=n,t.emit("change",a.value)};return A(()=>{o.value=e.total,e.page&&(a.value=e.page),e.limit&&(r.value=e.limit)}),{totalRef:o,pageRef:a,limitRef:r,changePage:l}}});const Xe={class:"custom-pagination-container flex-start"},Ze={class:"demonstration"};function et(e,t,o,a,r,l){const n=i("el-pagination");return f(),h("div",Xe,[_("div",Ze,"\u5171"+C(e.totalRef)+"\u6761\u8BB0\u5F55",1),s(n,{small:"",background:"",layout:"prev, pager, next",total:e.totalRef,"current-page":e.pageRef,onCurrentChange:e.changePage},null,8,["total","current-page","onCurrentChange"])])}const G=D(Qe,[["render",et],["__scopeId","data-v-2802132b"]]);function tt(){const e=c("daily"),t=c(1),o=c(10),a=c(0),r=d=>{t.value=d,console.log("pageRef.value :>> ",t.value)},l=c(),n=d=>{e.value=d.val},u=async d=>{const g=B().getSchoolInfo,v={limit:`${o.value}`,page:`${t.value}`,type:d,school_id:g.id},y=await se(v);l.value=y.data,typeof y.total=="number"&&(a.value=y.total)};return A(()=>{const d=e.value;typeof d=="string"&&u(d)}),{hotConentList:l,changeTabs:n,paramTypeRef:e,changePage:r,pageRef:t,limitRef:o,totalRef:a}}const at=$({name:"HotRanking",components:{CustomPagination:G},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...tt()}}});const ot=e=>(N("data-v-2ae22518"),e=e(),T(),e),nt={class:"hot-ranking-container"},st={class:"flex"},lt=ot(()=>_("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9\u6392\u884C",-1)),ut=R("\u6BCF\u65E5\u4E00\u5B66"),rt=R("\u6BCF\u5468\u4E00\u505A"),ct=R("\u6BCF\u6708\u4E00\u8BFE"),it={class:"flex-end"};function dt(e,t,o,a,r,l){const n=i("el-radio-button"),u=i("el-radio-group"),d=i("el-table-column"),g=i("el-table"),v=i("CustomPagination"),y=i("el-card");return f(),h("div",nt,[s(y,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",st,[lt,s(u,{class:"el-radio-group-style",modelValue:e.paramTypeRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.paramTypeRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[s(n,{label:"daily"},{default:m(()=>[ut]),_:1}),s(n,{label:"weekly"},{default:m(()=>[rt]),_:1}),s(n,{label:"monthy"},{default:m(()=>[ct]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(g,{data:e.hotConentList,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[s(d,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(d,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),s(d,{prop:"count",label:"\u5B8C\u6210\u91CF",width:"110",align:"center"})]),_:1},8,["data","header-cell-style"])]),_("footer",it,[s(v,{total:e.totalRef,page:e.pageRef,limit:e.limitRef,onChangePage:e.changePage},null,8,["total","page","limit","onChangePage"])])]),_:1})])}const _t=D(at,[["render",dt],["__scopeId","data-v-2ae22518"]]);function pt(){const e=B().schoolInfo,t=c("grade"),o=c(),a=async r=>{const l=e.id,u=await le({type:r,school_id:l});console.log("res_\u5B66\u4E60\u6392\u884C :>> ",u),o.value=u.data};return A(()=>{a(t.value)}),{tabPositionRef:t,studyDashboardRankClassTypeRef:o}}const mt=$({name:"LearningRanking",components:{CustomPagination:G},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...pt(),...I()}}});const yt=e=>(N("data-v-7835cce2"),e=e(),T(),e),ft={class:"learning-ranking-container"},gt={class:"flex"},ht=yt(()=>_("p",{class:"title-style"},"\u5B66\u4E60\u6392\u884C",-1)),vt=R("\u5E74\u7EA7\u6392\u884C"),Ct=R("\u73ED\u7EA7\u6392\u884C"),bt={class:"flex-end"};function Dt(e,t,o,a,r,l){const n=i("el-radio-button"),u=i("el-radio-group"),d=i("el-table-column"),g=i("el-table"),v=i("CustomPagination"),y=i("el-card");return f(),h("div",ft,[s(y,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",gt,[ht,s(u,{class:"el-radio-group-style",modelValue:e.tabPositionRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.tabPositionRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[s(n,{label:"grade"},{default:m(()=>[vt]),_:1}),s(n,{label:"class"},{default:m(()=>[Ct]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(g,{data:e.studyDashboardRankClassTypeRef,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[s(d,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(d,{label:"\u540D\u79F0",width:"124"},{default:m(p=>[R(C(e.getGraderName(p.row.year)),1)]),_:1}),s(d,{label:"\u5B66\u4E60\u603B\u91CF",align:"center"},{default:m(p=>[R(C(p.row.daily_count+p.row.monthy_count),1)]),_:1}),s(d,{label:"\u6D3B\u52A8\u603B\u91CF",align:"center"},{default:m(p=>[R(C(p.row.weekly_count),1)]),_:1}),s(d,{label:"\u603B\u5B8C\u6210\u91CF",align:"center"},{default:m(p=>[R(C(p.row.count),1)]),_:1})]),_:1},8,["data","header-cell-style"])]),_("footer",bt,[s(v)])]),_:1})])}const $t=D(mt,[["render",Dt],["__scopeId","data-v-7835cce2"]]),Et=$({name:"WordCloud",props:{listData:{type:[Array,Object],default:()=>[]}},setup(e){const t=c();return A(()=>{t.value=e.listData}),{listRef:t,getRandom:q}}});const Rt={class:"word-cloud-container"},Bt={class:"cloud",role:"navigation","aria-label":"Webdev word cloud"},wt=["data-weight"];function At(e,t,o,a,r,l){return f(),h("div",Rt,[_("ul",Bt,[(f(!0),h(L,null,Y(e.listRef,n=>(f(),h("li",{key:n.id},[_("a",{href:"#","data-weight":e.getRandom(1,9)},C(n.name),9,wt)]))),128))])])}const kt=D(Et,[["render",At],["__scopeId","data-v-1c0bc7b5"]]);function Ft(){const e=c();return(async()=>{const a=await de({});e.value=a})(),{tagInfoListRef:e}}const St=$({name:"HotTag",components:{WordCloud:kt,CustomCard:S},setup(){return{...Ft()}}});const It={class:"hot-tag-container"},Pt={class:"word-cloud-box"};function Lt(e,t,o,a,r,l){const n=i("WordCloud"),u=i("CustomCard");return f(),h("div",It,[s(u,{title:"\u91CD\u70B9\u5173\u6CE8\u4E3B\u9898"},{default:m(()=>[_("div",Pt,[s(n,{listData:e.tagInfoListRef},null,8,["listData"])])]),_:1})])}const Yt=D(St,[["render",Lt],["__scopeId","data-v-9dc1caf8"]]);function Nt(){console.log("useSchoolStore().schoolInfo :>> ",B().getSchoolInfo);const e=B().getSchoolInfo,t=c();return(async()=>{const a={school_id:e.id},r=await ue(a);console.log("res_\u5BB6\u5EAD\u6784\u6210\u5206\u6790 :>> ",r);const l=[];Array.isArray(r)&&r.forEach(n=>{const u=I().getParentsName(n.family_role_id);l.push({value:n.count,name:u})}),t.value=l})(),{familyDashboardMemberGroupRoleRef:t}}const Tt=$({name:"FamilyCompositionAnalysis",components:{CustomCard:S,DoughnutChart:Z},setup(){return{legend:{orient:"vertical",top:"center",right:90},title:{text:"\u5BB6\u5EAD\u6784\u6210",subtext:"",left:"25%",top:"center",textStyle:{fontSize:14},subtextStyle:{fontSize:16}},...Nt()}}});const xt={class:"family-composition-analysis-container"};function Gt(e,t,o,a,r,l){const n=i("DoughnutChart"),u=i("CustomCard");return f(),h("div",xt,[s(u,{title:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790"},{default:m(()=>[s(n,{legend:e.legend,title:e.title,width:"60%",left:"0",echartsData:e.familyDashboardMemberGroupRoleRef},null,8,["legend","title","echartsData"])]),_:1})])}const Mt=D(Tt,[["render",Gt],["__scopeId","data-v-5fd1d56a"]]),Ot=$({name:"BarChart",props:{gradeNames:{type:Array,default:()=>[]},bindNums:{type:Array,default:()=>[]}},setup(e){return x(()=>{const t=c(),o=c(),a=document.getElementById("barChart"),r=M(a),l=c({title:{text:""},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1,bottom:0},grid:{top:24,left:"3%",right:"4%",bottom:24,containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t},series:[{name:"\u5E74\u7EA7",type:"bar",label:{show:!0,color:"#fff",fontSize:12},data:o}],barWidth:16,color:"#1890FF"});A(()=>{t.value=e.gradeNames,o.value=e.bindNums,l.value&&r.setOption(l.value)})}),{}}});const Vt={id:"barChart",class:"bar-chart-container"};function Wt(e,t,o,a,r,l){return f(),h("div",Vt)}const Ht=D(Ot,[["render",Wt],["__scopeId","data-v-c1ab10cf"]]);function jt(){const e=c(),t=c(),o=c(),a=()=>{t.value=[],o.value=[],Array.isArray(e.value)&&e.value.forEach(l=>{t.value.push(I().getGraderName(l.year)),o.value.push(l.count)}),console.log("gradeNamesRef :>> ",t.value),console.log("bindNumsRef :>> ",o.value)};return(async()=>{const n={school_id:B().getSchoolInfo.id},u=await te(n);console.log("res_\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570 :>> ",u),e.value=u,a()})(),{gradeNamesRef:t,bindNumsRef:o}}const zt=$({name:"GradeParentsBoundNum",components:{CustomCard:S,BarChart:Ht},setup(){return{...jt()}}});const Ut={class:"grade-parents-bound-num-container"};function qt(e,t,o,a,r,l){const n=i("BarChart"),u=i("CustomCard");return f(),h("div",Ut,[s(u,{title:"\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570"},{default:m(()=>[s(n,{bindNums:e.bindNumsRef,gradeNames:e.gradeNamesRef},null,8,["bindNums","gradeNames"])]),_:1})])}const Jt=D(zt,[["render",qt],["__scopeId","data-v-ee246aa4"]]);function Kt(){const e=c(),t=c();return(async()=>{const r={school_id:B().getSchoolInfo.id},l=await ae(r);console.log("res_\u73ED\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6392\u540D :>> ",l),e.value=l,t.value=l.data})(),{familyDashboardGroupParentClassRef:e,familyDashboardGroupParentClassListDataRef:t}}const Qt=$({name:"ClassBindingParentRanking",components:{CustomCard:S,CustomStudyRanking:V},setup(){return{...Kt()}}});const Xt={class:"class-binding-parent-ranking-container"};function Zt(e,t,o,a,r,l){const n=i("CustomStudyRanking"),u=i("CustomCard");return f(),h("div",Xt,[s(u,{title:"\u73ED\u7EA7\u7ED1\u5B9A\u5BB6\u957F\u4EBA\u6570\u6392\u540D"},{default:m(()=>[s(n,{listData:e.familyDashboardGroupParentClassRef},null,8,["listData"])]),_:1})])}const ea=D(Qt,[["render",Zt],["__scopeId","data-v-7efec27b"]]),ta=$({name:"CustomDropdown",props:{active:{type:Object,default:()=>({name:"\u9ED8\u8BA4\u9009\u9879",id:-1})},listData:{type:[Array,Object],default:()=>[]}},setup(e,t){const o=c(),a=c(e.listData),r=l=>{console.log("val :>> ",l),console.log("active.id :>> ",a.value);const n=c();a.value.forEach(u=>{l===u.id&&(n.value=u)}),t.emit("change",n.value)};return A(()=>{o.value=e.active,console.log("activeRef.value :>> ",o.value)}),{activeRef:o,listDataRef:a,onCommand:r}}});const aa={class:"custom-dropdown-contaienr"},oa={class:"el-dropdown-link"};function na(e,t,o,a,r,l){const n=i("arrow-down"),u=i("el-icon"),d=i("el-dropdown-item"),g=i("el-dropdown-menu"),v=i("el-dropdown");return f(),h("div",aa,[s(v,null,{dropdown:m(()=>[s(g,null,{default:m(()=>[(f(!0),h(L,null,Y(e.listDataRef,y=>(f(),Q(d,{key:y.id,onClick:p=>e.onCommand(y.id)},{default:m(()=>[R(C(y.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:m(()=>[_("span",oa,[R(C(e.activeRef.name)+" ",1),s(u,{class:"el-icon--right"},{default:m(()=>[s(n)]),_:1})])]),_:1})])}const sa=D(ta,[["render",na],["__scopeId","data-v-2df3e5b0"]]);function la(){const e=X(),t=c({name:"\u5168\u90E8\u5E74\u7EA7",id:-1}),o=c({name:"\u5168\u90E8\u73ED\u7EA7",id:-1}),a={"background-color":"#F6F8FA",color:"#606266"},r=c(),l=E=>w(E).format("YYYY-MM-DD HH:mm:ss"),n=c(1),u=c(10),d=c(0),g=E=>{n.value=E},v=c(),y=async()=>{const E=B().getSchoolInfo,j=parseInt(w().format("YYYY"))-t.value.id,z={limit:10,page:1,school_id:E.id,year:t.value.id!==-1?j:"",class:o.value.id!==-1?o.value.id:"",student_id:18},P=await re(z);console.log("res_\u5BB6\u957F\u652F\u6301\u5DE5\u4F5C\u60C5\u51B5 :>> ",P),v.value=P,r.value=P.data,d.value=P.total};y();const p=B(),b=c(p.getGradeList),k=c(p.getClassList),F=E=>{console.log("val :>> ",E),t.value=E,y()},W=E=>{console.log("val :>> ",E),o.value=E,y()},H=E=>{console.log("val :>> ",E),e.push({path:"/parentsLearnDetailsView",query:{uid:E.uid,student_id:E.student_id}})};return{studyDashboardCompleteParentListRef:v,gradeActiveRef:t,classActiveRef:o,headerCellStyle:a,tableDataRef:r,fmtDateFn:l,...I(),gradeListRef:b,classListRef:k,gradeChange:F,classChange:W,pageRef:n,limitRef:u,totalRef:d,onChangePage:g,onToView:H}}const ua=$({name:"ParentSupportWorkSituation",components:{CustomCard:S,CustomDropdown:sa,CustomPagination:G},setup(){return{...la()}}});const ra={class:"parent-support-work-situation-container"},ca={class:"filter-box"},ia=R(" \u67E5\u770B "),da={class:"flex-end"};function _a(e,t,o,a,r,l){const n=i("CustomDropdown"),u=i("el-table-column"),d=i("el-button"),g=i("el-table"),v=i("CustomPagination"),y=i("CustomCard");return f(),h("div",ra,[s(y,{title:"\u5BB6\u957F\u652F\u6301\u5DE5\u4F5C\u60C5\u51B5"},{default:m(()=>[_("div",ca,[s(n,{active:e.gradeActiveRef,listData:e.gradeListRef,onChange:e.gradeChange},null,8,["active","listData","onChange"]),s(n,{class:"filter-class-style",active:e.classActiveRef,listData:e.classListRef,onChange:e.classChange},null,8,["active","listData","onChange"])]),s(g,{class:"el-table-style",data:e.tableDataRef,"header-cell-style":e.headerCellStyle,style:{width:"100%"}},{default:m(()=>[s(u,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(u,{prop:"wx_name",label:"\u5BB6\u957F"}),s(u,{prop:"studentInfo",label:"\u5B66\u751F\u4FE1\u606F",align:"center"},{default:m(p=>[R(C(p.row.name)+" | "+C(e.getGradeClassName(p.row.year,p.row.class)),1)]),_:1}),s(u,{prop:"daily_count",label:"\u6BCF\u65E5\u4E00\u5B66",align:"center"}),s(u,{prop:"weekly_count",label:"\u6BCF\u5468\u4E00\u505A",align:"center"}),s(u,{prop:"monthy_count",label:"\u6BCF\u6708\u4E00\u8BFE",align:"center"}),s(u,{prop:"date",label:"\u6700\u8FD1\u4E0A\u7EBF\u65F6\u95F4",align:"center"},{default:m(p=>[R(C(e.fmtDateFn(p.row.date)),1)]),_:1}),s(u,{prop:"date",label:"\u64CD\u4F5C",align:"center"},{default:m(p=>[s(d,{type:"primary",link:"",onClick:b=>e.onToView(p.row)},{default:m(()=>[ia]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","header-cell-style"]),_("footer",da,[s(v,{page:e.pageRef,limit:e.limitRef,total:e.totalRef,onChange:e.onChangePage},null,8,["page","limit","total","onChange"])])]),_:1})])}const pa=D(ua,[["render",_a],["__scopeId","data-v-24bf8fd7"]]);function ma(){const e=c({}),t=c({}),o=async()=>{const l={school_id:B().getSchoolInfo.id},n=await ce(l);e.value=n},a=async()=>{const l={school_id:B().getSchoolInfo.id},n=await ie(l);t.value=n};return o(),a(),{studyDashboardCompleteCountRef:e,studyDashboardCompleteDailyRef:t}}const ya={name:"dataVisualizationView",components:{CompletedAmountOverview:Ee,OverviewChart:Ke,HotRanking:_t,LearningRanking:$t,HotTag:Yt,FamilyCompositionAnalysis:Mt,GradeParentsBoundNum:Jt,ClassBindingParentRanking:ea,ParentSupportWorkSituation:pa},setup(){return{...ma()}}};const fa={class:"data-visualization-view-container"},ga={class:"row-style flex"},ha={class:"row-style flex"},va={class:"row-style flex"},Ca={class:"row-style"};function ba(e,t,o,a,r,l){const n=i("CompletedAmountOverview"),u=i("OverviewChart"),d=i("HotRanking"),g=i("LearningRanking"),v=i("HotTag"),y=i("FamilyCompositionAnalysis"),p=i("GradeParentsBoundNum"),b=i("ClassBindingParentRanking"),k=i("ParentSupportWorkSituation");return f(),h("div",fa,[s(n,{dataSource:e.studyDashboardCompleteCountRef,dataSourceAvg:e.studyDashboardCompleteDailyRef},null,8,["dataSource","dataSourceAvg"]),s(u,{class:"overview-chart-style"}),_("div",ga,[s(d),s(g)]),_("div",ha,[s(v),s(y)]),_("div",va,[s(p),s(b)]),_("div",Ca,[s(k)])])}const Fa=D(ya,[["render",ba],["__scopeId","data-v-0abd23c2"]]);export{Fa as default};
