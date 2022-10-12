import{g as q,a as J}from"./ak.b86dff92.js";import{d as R,r as c,k,_ as $,b as d,o as h,c as v,h as _,F as Y,f as N,e as s,w as m,t as b,v as x,x as T,y as M,n as K,j as Q,i as A,C as V,D as W,g as X,u as Z}from"./index.2e3c0ac3.js";import{i as H,C as P,D as ee}from"./CustomCard.f0221faa.js";import{h as w}from"./moment.9709ab41.js";import{u as E}from"./school.d8e0c9db.js";import{u as te,f as ae,a as oe}from"./family.ec3d58fa.js";import{a as ne,u as se,b as le,v as ue,w as re,x as ce,y as ie,s as de,z as _e}from"./study.5ef15b6f.js";const pe=R({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(e){const t=c({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),o=c(e.dataSource),n=c(e.dataSourceAvg);return k(()=>{o.value=e.dataSource,n.value=e.dataSourceAvg,Object.keys(o.value).length>0&&(t.value.total.num=o.value.total_all,t.value.total.tag.num=o.value.all_today,t.value.total.averageDaily.num=Math.ceil(n.value.all_num/n.value.day_num),t.value.daily.num=o.value.total_daily,t.value.daily.tag.num=o.value.daily,t.value.daily.averageDaily.num=Math.ceil(n.value.daily/n.value.day_num),t.value.weekly.num=o.value.total_weekly,t.value.weekly.tag.num=o.value.weekly_today,t.value.weekly.averageDaily.num=Math.ceil(n.value.weekly/n.value.day_num),t.value.monthy.num=o.value.total_monthy,t.value.monthy.tag.num=o.value.monthy_today,t.value.monthy.averageDaily.num=Math.ceil(n.value.monthy/n.value.day_num))}),{overviewListRef:t,getImageUrl:q}}});const me={class:"completed-amount-overview-container"},fe={class:"completed-amount-overview-ul flex"},ye={class:"flex"},ge={class:"title-style"},he={class:"flex-start align-end"},ve={class:"total-num-style"},Ce={class:"tag-box flex-center"},be={class:"flex-start"},De={class:"average-daily-title-style"},$e={class:"average-daily-num-style"};function Ee(e,t,o,n,r,l){const a=d("el-image"),u=d("el-card");return h(),v("div",me,[_("ul",fe,[(h(!0),v(Y,null,N(e.overviewListRef,(i,g)=>(h(),v("li",{key:g,class:"completed-amount-overview-li"},[s(u,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ye,[_("p",ge,b(i.title),1),s(a,{class:"header-icon-style",src:e.getImageUrl(i.icon+".png")},null,8,["src"])]),_("article",he,[_("p",ve,b(i.num),1),_("div",Ce,[_("p",null,b(i.tag.title),1),_("p",null,b(i.tag.num),1)])]),_("footer",be,[_("p",De,b(i.averageDaily.title),1),_("p",$e,b(i.averageDaily.num),1)])]),_:2},1024)]))),128))])])}const Re=$(pe,[["render",Ee],["__scopeId","data-v-2b94ccf0"]]),we=R({name:"LearningTrend",props:{echartsData:{type:[Array,Object],default:()=>[]},dateType:{type:String,defualt:""}},setup(e,t){const o=c(),n=c(),r=c(["01\u65E5","02\u65E5","03\u65E5","04\u65E5","05\u65E5","06\u65E5"]),l=c([1e3,2e3,3e3,4e3,5e3,6e3]),a=(u,i)=>{const g=[];u.forEach(y=>{y.type===i&&g.push(y)});const C=new Set(g),f=Array.from(C),p=[],F=[];return Array.isArray(f)&&f.forEach(y=>{y.dates&&p.push(y.dates),y.count&&F.push(y.count)}),{xAxisData:p,seriesData:F}};return x(()=>{const u=document.getElementById("LearningTrendChart"),i=H(u);k(()=>{o.value=e.echartsData,n.value=e.dateType;const g=a(o.value,n.value);r.value=g.xAxisData,l.value=g.seriesData;const C=c({xAxis:{type:"category",data:r.value},yAxis:{type:"value"},grid:{top:"5%",left:"5%"},series:[{data:l.value,type:"bar",barWidth:"24",itemStyle:{borderRadius:0,color:"#1890FF"}}]});i.off("click"),i.on("click",function(f){console.log("params :>> ",f),t.emit("select",f.name)}),C.value&&i.setOption(C.value)})}),{}}});const j=e=>(T("data-v-b4cec37a"),e=e(),M(),e),Ae={class:"learning-trend-container"},Be=j(()=>_("header",null,[_("p",{class:"title-style"},"\u5B66\u4E60\u8D8B\u52BF")],-1)),ke=j(()=>_("article",null,[_("div",{id:"LearningTrendChart",class:"learning-trend-chart"})],-1)),Fe=[Be,ke];function Se(e,t,o,n,r,l){return h(),v("div",Ae,Fe)}const Ie=$(we,[["render",Se],["__scopeId","data-v-b4cec37a"]]);function L(){const e=(r,l)=>{const a=E().classList;console.log("calssList :>> ",a,Array.isArray(a));let u={id:-1,name:"\u5F02\u5E38\u6570\u636E"};return Array.isArray(a)&&(u=a[l]),`${t(r-1)}(${u?u.name:""})`},t=r=>{const l=E().gradeList;let a={id:-1,name:"\u5F02\u5E38\u6570\u636E"};if(Array.isArray(l))return a=l[parseInt(w().format("YYYY"))-r],a.name};return{getGradeClassName:e,getGraderName:t,getClassName:r=>{const l=E().classList;let a={id:-1,name:"\u5F02\u5E38\u6570\u636E"};return Array.isArray(l)&&(a=l[r]),a?a.name:""},getParentsName:r=>{const l=te().getFamilyRoleList,a=c("");return l.forEach(u=>{u.id===r&&(a.value=u.name)}),a.value}}}const Pe=R({name:"CustomStudyRanking",props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c(),o=r=>{const l=[];for(const a of r)l.push({name:L().getGradeClassName(a.year,a.class),num:`${a.count}\u4EBA`});return l},n=c([{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"}]);return k(()=>{if(t.value=e.listData,t.value!==void 0&&t.value.data){n.value=o(t.value.data);return}n.value=[],console.log("StudyRankingListRef.value :>> ",n.value)}),{StudyRankingListRef:n}}});const Le={class:"custom-study-ranking-container"},Ye={key:0,class:"study-ranking-ul"},Ne={class:"left-box-style flex-start"},Te={class:"study-ranking-name-style"},Me={class:"study-ranking-num-style"};function Ge(e,t,o,n,r,l){const a=d("el-scrollbar");return h(),v("div",Le,[e.StudyRankingListRef.length>0?(h(),v("div",Ye,[s(a,null,{default:m(()=>[(h(!0),v(Y,null,N(e.StudyRankingListRef,(u,i)=>(h(),v("div",{key:i,class:"study-ranking-li flex"},[_("div",Ne,[_("p",{class:K(["study-ranking-sort-style",{"top-three-sort-style":i<=2,"top-other-sort-style":i>2}])},b(i+1),3),_("p",Te,b(u.name),1)]),_("p",Me,b(u.num),1)]))),128))]),_:1})])):Q("",!0)])}const z=$(Pe,[["render",Ge],["__scopeId","data-v-1f7974de"]]),xe=R({name:"StudyRanking",components:{CustomStudyRanking:z},props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c();return k(()=>{t.value=e.listData,console.log("listDataRef.value :>> ",t.value)}),{listDataRef:t}}});const Oe=e=>(T("data-v-c5b50d49"),e=e(),M(),e),Ve={class:"study-ranking-container"},We=Oe(()=>_("header",null,[_("p",{class:"title-style"},"\u4ECA\u65E5\u73ED\u7EA7\u4EBA\u6570\u6392\u540D")],-1));function He(e,t,o,n,r,l){const a=d("CustomStudyRanking");return h(),v("div",Ve,[We,_("article",null,[s(a,{listData:e.listDataRef},null,8,["listData"])])])}const je=$(xe,[["render",He],["__scopeId","data-v-c5b50d49"]]);function ze(){const e=E().getSchoolInfo,t=c("daily"),o=c("2022-08-19"),n=c("2022-08-19"),r=()=>{o.value=w().format("YYYY-MM-DD"),n.value=w().format("YYYY-MM-DD")},l=()=>{const y=w().weekday()===0?7:w().weekday();o.value=w().subtract(y-1,"days").format("YYYY-MM-DD"),n.value=w().add(7-y,"days").format("YYYY-MM-DD")},a=()=>{const y=w().format("YYYY"),B=w().format("MM");o.value=w([y,0,1]).month(parseInt(B)-1).format("YYYY-MM-DD"),n.value=w([y,0,31]).month(parseInt(B)-1).format("YYYY-MM-DD")},u=c(""),i=y=>{if(typeof y.paneName=="string")switch(t.value=y.paneName,t.value){case"daily":r();break;case"weekly":l();break;case"monthy":a();break}C(o.value,n.value);const B=w(u.value).format("YYYY-MM-DD");p(t.value,B)},g=c(),C=async(y,B)=>{const I={start_date:y,end_date:B,school_id:e.id},S=await ne(I);g.value=Array.isArray(S)?S:[S]},f=c(),p=async(y,B)=>{const I=E().getSchoolInfo,S={limit:7,page:1,type:y,school_id:I.id,start_date:B},D=await se(S);f.value=D},F=y=>{console.log("onSelectLearningTrend_val :>> ",y),u.value=y;const B=w(u.value).format("YYYY-MM-DD");p(t.value,B)};return x(()=>{const y=w(u.value).format("YYYY-MM-DD");C(o.value,n.value),p(t.value,y)}),{activeTypeRef:t,changeActiveType:i,studyDashboardCompleteListRef:g,studyDashboardRankClassRef:f,onSelectLearningTrend:F}}const Ue=R({name:"OverviewChart",components:{LearningTrend:Ie,StudyRanking:je},setup(){return{...ze()}}});const qe={class:"overview-chart-container"},Je={class:"flex"};function Ke(e,t,o,n,r,l){const a=d("el-tab-pane"),u=d("el-tabs"),i=d("LearningTrend"),g=d("StudyRanking"),C=d("el-card");return h(),v("div",qe,[s(C,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",null,[s(u,{modelValue:e.activeTypeRef,"onUpdate:modelValue":t[0]||(t[0]=f=>e.activeTypeRef=f),class:"demo-tabs",onTabClick:e.changeActiveType},{default:m(()=>[s(a,{label:"\u6BCF\u65E5\u4E00\u5B66",name:"daily"}),s(a,{label:"\u6BCF\u5468\u4E00\u505A",name:"weekly"}),s(a,{label:"\u6BCF\u6708\u4E00\u8BFE",name:"monthy"})]),_:1},8,["modelValue","onTabClick"])]),_("article",Je,[s(i,{echartsData:e.studyDashboardCompleteListRef,dateType:e.activeTypeRef,onSelect:e.onSelectLearningTrend},null,8,["echartsData","dateType","onSelect"]),s(g,{listData:e.studyDashboardRankClassRef},null,8,["listData"])])]),_:1})])}const Qe=$(Ue,[["render",Ke],["__scopeId","data-v-317efa79"]]),Xe=R({name:"CustomPagination",props:{total:{type:Number,default:0},page:{type:Number,defualt:1},limit:{type:Number,defualt:10}},setup(e,t){const o=c(0),n=c(1),r=c(10),l=a=>{n.value=a,t.emit("change",n.value)};return k(()=>{o.value=e.total,e.page&&(n.value=e.page),e.limit&&(r.value=e.limit)}),{totalRef:o,pageRef:n,limitRef:r,changePage:l}}});const Ze={class:"custom-pagination-container flex-start"},et={class:"demonstration"};function tt(e,t,o,n,r,l){const a=d("el-pagination");return h(),v("div",Ze,[_("div",et,"\u5171"+b(e.totalRef)+"\u6761\u8BB0\u5F55",1),s(a,{small:"",background:"",layout:"prev, pager, next",total:e.totalRef,"current-page":e.pageRef,onCurrentChange:e.changePage},null,8,["total","current-page","onCurrentChange"])])}const O=$(Xe,[["render",tt],["__scopeId","data-v-2802132b"]]);function at(){const e=c("daily"),t=c(1),o=c(10),n=c(0),r=i=>{t.value=i,console.log("pageRef.value :>> ",t.value)},l=c(),a=i=>{e.value=i.val},u=async i=>{const g=E().getSchoolInfo,C={limit:`${o.value}`,page:`${t.value}`,type:i,school_id:g.id},f=await le(C);l.value=f.data,typeof f.total=="number"&&(n.value=f.total)};return k(()=>{const i=e.value;typeof i=="string"&&u(i)}),{hotConentList:l,changeTabs:a,paramTypeRef:e,changePage:r,pageRef:t,limitRef:o,totalRef:n}}const ot=R({name:"HotRanking",components:{CustomPagination:O},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...at()}}});const nt=e=>(T("data-v-2ae22518"),e=e(),M(),e),st={class:"hot-ranking-container"},lt={class:"flex"},ut=nt(()=>_("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9\u6392\u884C",-1)),rt=A("\u6BCF\u65E5\u4E00\u5B66"),ct=A("\u6BCF\u5468\u4E00\u505A"),it=A("\u6BCF\u6708\u4E00\u8BFE"),dt={class:"flex-end"};function _t(e,t,o,n,r,l){const a=d("el-radio-button"),u=d("el-radio-group"),i=d("el-table-column"),g=d("el-table"),C=d("CustomPagination"),f=d("el-card");return h(),v("div",st,[s(f,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",lt,[ut,s(u,{class:"el-radio-group-style",modelValue:e.paramTypeRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.paramTypeRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[s(a,{label:"daily"},{default:m(()=>[rt]),_:1}),s(a,{label:"weekly"},{default:m(()=>[ct]),_:1}),s(a,{label:"monthy"},{default:m(()=>[it]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(g,{data:e.hotConentList,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[s(i,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(i,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),s(i,{prop:"count",label:"\u5B8C\u6210\u91CF",width:"110",align:"center"})]),_:1},8,["data","header-cell-style"])]),_("footer",dt,[s(C,{total:e.totalRef,page:e.pageRef,limit:e.limitRef,onChangePage:e.changePage},null,8,["total","page","limit","onChangePage"])])]),_:1})])}const pt=$(ot,[["render",_t],["__scopeId","data-v-2ae22518"]]);function mt(){const e=E().schoolInfo,t=c("grade"),o=c(),n=async r=>{const l=e.id,u=await ue({type:r,school_id:l});console.log("res_\u5B66\u4E60\u6392\u884C :>> ",u),o.value=u.data};return k(()=>{n(t.value)}),{tabPositionRef:t,studyDashboardRankClassTypeRef:o}}const ft=R({name:"LearningRanking",components:{CustomPagination:O},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...mt(),...L()}}});const yt=e=>(T("data-v-b547e377"),e=e(),M(),e),gt={class:"learning-ranking-container"},ht={class:"flex"},vt=yt(()=>_("p",{class:"title-style"},"\u5B66\u4E60\u6392\u884C",-1)),Ct=A("\u5E74\u7EA7\u6392\u884C"),bt=A("\u73ED\u7EA7\u6392\u884C"),Dt={class:"flex-end"};function $t(e,t,o,n,r,l){const a=d("el-radio-button"),u=d("el-radio-group"),i=d("el-table-column"),g=d("el-table"),C=d("CustomPagination"),f=d("el-card");return h(),v("div",gt,[s(f,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ht,[vt,s(u,{class:"el-radio-group-style",modelValue:e.tabPositionRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.tabPositionRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[s(a,{label:"grade"},{default:m(()=>[Ct]),_:1}),s(a,{label:"class"},{default:m(()=>[bt]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(g,{data:e.studyDashboardRankClassTypeRef,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[s(i,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(i,{label:"\u540D\u79F0",width:"124"},{default:m(p=>[V(_("p",null,b(e.getGraderName(p.row.year)),513),[[W,e.tabPositionRef==="grade"]]),V(_("p",null,b(`${e.getGraderName(p.row.year)}(${e.getClassName(p.row.class)})`),513),[[W,e.tabPositionRef==="class"]])]),_:1}),s(i,{label:"\u5B66\u4E60\u603B\u91CF",align:"center"},{default:m(p=>[A(b(p.row.daily_count+p.row.monthy_count),1)]),_:1}),s(i,{label:"\u6D3B\u52A8\u603B\u91CF",align:"center"},{default:m(p=>[A(b(p.row.weekly_count),1)]),_:1}),s(i,{label:"\u603B\u5B8C\u6210\u91CF",align:"center"},{default:m(p=>[A(b(p.row.count),1)]),_:1})]),_:1},8,["data","header-cell-style"])]),_("footer",Dt,[s(C)])]),_:1})])}const Et=$(ft,[["render",$t],["__scopeId","data-v-b547e377"]]),Rt=R({name:"WordCloud",props:{listData:{type:[Array,Object],default:()=>[]}},setup(e){const t=c();let o=16;return k(()=>{t.value=e.listData.map(n=>(n.dataWeight=o,o--,console.log("item :>> ",n),n))}),{listRef:t,getRandom:J}}});const wt={class:"word-cloud-container"},At={class:"cloud",role:"navigation","aria-label":"Webdev word cloud"},Bt=["data-weight"];function kt(e,t,o,n,r,l){return h(),v("div",wt,[_("ul",At,[(h(!0),v(Y,null,N(e.listRef,a=>(h(),v("li",{key:a.id},[_("a",{href:"#","data-weight":a.dataWeight},b(a.name),9,Bt)]))),128))])])}const Ft=$(Rt,[["render",kt],["__scopeId","data-v-841199ed"]]);function St(){const e=c(),t=async(n,r)=>{const a=await re({school_id:n,limit:r});e.value=a},o=E().getSchoolInfo;return t(o.id,16),{tagInfoListRef:e}}const It=R({name:"HotTag",components:{WordCloud:Ft,CustomCard:P},setup(){return{...St()}}});const Pt={class:"hot-tag-container"},Lt={class:"word-cloud-box"};function Yt(e,t,o,n,r,l){const a=d("WordCloud"),u=d("CustomCard");return h(),v("div",Pt,[s(u,{title:"\u91CD\u70B9\u5173\u6CE8\u4E3B\u9898"},{default:m(()=>[_("div",Lt,[s(a,{listData:e.tagInfoListRef},null,8,["listData"])])]),_:1})])}const Nt=$(It,[["render",Yt],["__scopeId","data-v-9dc1caf8"]]);function Tt(){console.log("useSchoolStore().schoolInfo :>> ",E().getSchoolInfo);const e=E().getSchoolInfo,t=c();return(async()=>{const n={school_id:e.id},r=await ce(n);console.log("res_\u5BB6\u5EAD\u6784\u6210\u5206\u6790 :>> ",r);const l=[];Array.isArray(r)&&r.forEach(a=>{const u=L().getParentsName(a.family_role_id);l.push({value:a.count,name:u})}),t.value=l})(),{familyDashboardMemberGroupRoleRef:t}}const Mt=R({name:"FamilyCompositionAnalysis",components:{CustomCard:P,DoughnutChart:ee},setup(){return{legend:{orient:"vertical",top:"center",right:90},title:{text:"\u5BB6\u5EAD\u6784\u6210",subtext:"",left:"25%",top:"center",textStyle:{fontSize:14},subtextStyle:{fontSize:16}},...Tt()}}});const Gt={class:"family-composition-analysis-container"};function xt(e,t,o,n,r,l){const a=d("DoughnutChart"),u=d("CustomCard");return h(),v("div",Gt,[s(u,{title:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790"},{default:m(()=>[s(a,{legend:e.legend,title:e.title,width:"60%",left:"0",echartsData:e.familyDashboardMemberGroupRoleRef},null,8,["legend","title","echartsData"])]),_:1})])}const Ot=$(Mt,[["render",xt],["__scopeId","data-v-5fd1d56a"]]),Vt=R({name:"BarChart",props:{gradeNames:{type:Array,default:()=>[]},bindNums:{type:Array,default:()=>[]}},setup(e){return x(()=>{const t=c(),o=c(),n=document.getElementById("barChart"),r=H(n),l=c({title:{text:""},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1,bottom:0},grid:{top:24,left:"3%",right:"4%",bottom:24,containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t},series:[{name:"\u5E74\u7EA7",type:"bar",label:{show:!0,color:"#fff",fontSize:12},data:o}],barWidth:16,color:"#1890FF"});k(()=>{t.value=e.gradeNames,o.value=e.bindNums,l.value&&r.setOption(l.value)})}),{}}});const Wt={id:"barChart",class:"bar-chart-container"};function Ht(e,t,o,n,r,l){return h(),v("div",Wt)}const jt=$(Vt,[["render",Ht],["__scopeId","data-v-c1ab10cf"]]);function zt(){const e=c(),t=c(),o=c(),n=()=>{t.value=[],o.value=[],Array.isArray(e.value)&&e.value.forEach(l=>{t.value.push(L().getGraderName(l.year)),o.value.push(l.count)}),console.log("gradeNamesRef :>> ",t.value),console.log("bindNumsRef :>> ",o.value)};return(async()=>{const a={school_id:E().getSchoolInfo.id},u=await ae(a);console.log("res_\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570 :>> ",u),e.value=u,n()})(),{gradeNamesRef:t,bindNumsRef:o}}const Ut=R({name:"GradeParentsBoundNum",components:{CustomCard:P,BarChart:jt},setup(){return{...zt()}}});const qt={class:"grade-parents-bound-num-container"};function Jt(e,t,o,n,r,l){const a=d("BarChart"),u=d("CustomCard");return h(),v("div",qt,[s(u,{title:"\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570"},{default:m(()=>[s(a,{bindNums:e.bindNumsRef,gradeNames:e.gradeNamesRef},null,8,["bindNums","gradeNames"])]),_:1})])}const Kt=$(Ut,[["render",Jt],["__scopeId","data-v-ee246aa4"]]);function Qt(){const e=c(),t=c();return(async()=>{const r={school_id:E().getSchoolInfo.id},l=await oe(r);console.log("res_\u73ED\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6392\u540D :>> ",l),e.value=l,t.value=l.data})(),{familyDashboardGroupParentClassRef:e,familyDashboardGroupParentClassListDataRef:t}}const Xt=R({name:"ClassBindingParentRanking",components:{CustomCard:P,CustomStudyRanking:z},setup(){return{...Qt()}}});const Zt={class:"class-binding-parent-ranking-container"};function ea(e,t,o,n,r,l){const a=d("CustomStudyRanking"),u=d("CustomCard");return h(),v("div",Zt,[s(u,{title:"\u73ED\u7EA7\u7ED1\u5B9A\u5BB6\u957F\u4EBA\u6570\u6392\u540D"},{default:m(()=>[s(a,{listData:e.familyDashboardGroupParentClassRef},null,8,["listData"])]),_:1})])}const ta=$(Xt,[["render",ea],["__scopeId","data-v-7efec27b"]]),aa=R({name:"CustomDropdown",props:{active:{type:Object,default:()=>({name:"\u9ED8\u8BA4\u9009\u9879",id:-1})},listData:{type:[Array,Object],default:()=>[]}},setup(e,t){const o=c(),n=c(e.listData),r=l=>{console.log("val :>> ",l),console.log("active.id :>> ",n.value);const a=c();n.value.forEach(u=>{l===u.id&&(a.value=u)}),t.emit("change",a.value)};return k(()=>{o.value=e.active,console.log("activeRef.value :>> ",o.value)}),{activeRef:o,listDataRef:n,onCommand:r}}});const oa={class:"custom-dropdown-contaienr"},na={class:"el-dropdown-link"};function sa(e,t,o,n,r,l){const a=d("arrow-down"),u=d("el-icon"),i=d("el-dropdown-item"),g=d("el-dropdown-menu"),C=d("el-dropdown");return h(),v("div",oa,[s(C,null,{dropdown:m(()=>[s(g,null,{default:m(()=>[(h(!0),v(Y,null,N(e.listDataRef,f=>(h(),X(i,{key:f.id,onClick:p=>e.onCommand(f.id)},{default:m(()=>[A(b(f.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:m(()=>[_("span",na,[A(b(e.activeRef.name)+" ",1),s(u,{class:"el-icon--right"},{default:m(()=>[s(a)]),_:1})])]),_:1})])}const la=$(aa,[["render",sa],["__scopeId","data-v-2df3e5b0"]]);function ua(){const e=Z(),t=c({name:"\u5168\u90E8\u5E74\u7EA7",id:-1}),o=c({name:"\u5168\u90E8\u73ED\u7EA7",id:-1}),n={"background-color":"#F6F8FA",color:"#606266"},r=c(),l=D=>w(D).utc().format("YYYY-MM-DD HH:mm:ss"),a=c(1),u=c(10),i=c(0),g=D=>{a.value=D},C=c(),f=async()=>{const D=E().getSchoolInfo,U={limit:10,page:1,school_id:D.id,grade:t.value.id,class:o.value.id!==-1?o.value.id:"",student_id:18},G=await ie(U);C.value=G,r.value=G.data,console.log("tableDataRef.value :>> ",r.value),i.value=G.total};f();const p=E(),F=c(p.getGradeList),y=c(p.getClassList),B=D=>{console.log("val :>> ",D),t.value=D,f()},I=D=>{console.log("val :>> ",D),o.value=D,f()},S=D=>{console.log("val :>> ",D),e.push({path:"/parentsLearnDetailsView",query:{uid:D.uid,student_id:D.student_id}})};return{studyDashboardCompleteParentListRef:C,gradeActiveRef:t,classActiveRef:o,headerCellStyle:n,tableDataRef:r,fmtDateFn:l,...L(),gradeListRef:F,classListRef:y,gradeChange:B,classChange:I,pageRef:a,limitRef:u,totalRef:i,onChangePage:g,onToView:S}}const ra=R({name:"ParentSupportWorkSituation",components:{CustomCard:P,CustomDropdown:la,CustomPagination:O},setup(){return{...ua()}}});const ca={class:"parent-support-work-situation-container"},ia={class:"filter-box"},da=A(" \u67E5\u770B "),_a={class:"flex-end"};function pa(e,t,o,n,r,l){const a=d("CustomDropdown"),u=d("el-table-column"),i=d("el-button"),g=d("el-table"),C=d("CustomPagination"),f=d("CustomCard");return h(),v("div",ca,[s(f,{title:"\u5BB6\u957F\u4ECA\u65E5\u5B66\u4E60\u60C5\u51B5"},{default:m(()=>[_("div",ia,[s(a,{active:e.gradeActiveRef,listData:e.gradeListRef,onChange:e.gradeChange},null,8,["active","listData","onChange"]),s(a,{class:"filter-class-style",active:e.classActiveRef,listData:e.classListRef,onChange:e.classChange},null,8,["active","listData","onChange"])]),s(g,{class:"el-table-style",data:e.tableDataRef,"header-cell-style":e.headerCellStyle,style:{width:"100%"}},{default:m(()=>[s(u,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(u,{prop:"wx_name",label:"\u5BB6\u957F"}),s(u,{prop:"studentInfo",label:"\u5B66\u751F\u4FE1\u606F",align:"center"},{default:m(p=>[A(b(p.row.name)+" | "+b(e.getGradeClassName(p.row.year,p.row.class)),1)]),_:1}),s(u,{prop:"daily_count",label:"\u6BCF\u65E5\u4E00\u5B66",align:"center"}),s(u,{prop:"weekly_count",label:"\u6BCF\u5468\u4E00\u505A",align:"center"}),s(u,{prop:"monthy_count",label:"\u6BCF\u6708\u4E00\u8BFE",align:"center"}),s(u,{prop:"date",label:"\u6700\u8FD1\u4E0A\u7EBF\u65F6\u95F4",align:"center"},{default:m(p=>[A(b(e.fmtDateFn(p.row.date)),1)]),_:1}),s(u,{prop:"date",label:"\u64CD\u4F5C",align:"center"},{default:m(p=>[s(i,{type:"primary",link:"",onClick:F=>e.onToView(p.row)},{default:m(()=>[da]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","header-cell-style"]),_("footer",_a,[s(C,{page:e.pageRef,limit:e.limitRef,total:e.totalRef,onChange:e.onChangePage},null,8,["page","limit","total","onChange"])])]),_:1})])}const ma=$(ra,[["render",pa],["__scopeId","data-v-aa0b2534"]]);function fa(){const e=c({}),t=c({}),o=async()=>{const l={school_id:E().getSchoolInfo.id,type:"term"},a=await de(l);e.value=a},n=async()=>{const l={school_id:E().getSchoolInfo.id},a=await _e(l);t.value=a};return o(),n(),{studyDashboardCompleteCountRef:e,studyDashboardCompleteDailyRef:t}}const ya={name:"dataVisualizationView",components:{CompletedAmountOverview:Re,OverviewChart:Qe,HotRanking:pt,LearningRanking:Et,HotTag:Nt,FamilyCompositionAnalysis:Ot,GradeParentsBoundNum:Kt,ClassBindingParentRanking:ta,ParentSupportWorkSituation:ma},setup(){return{...fa()}}};const ga={class:"data-visualization-view-container"},ha={class:"row-style flex"},va={class:"row-style flex"},Ca={class:"row-style flex"},ba={class:"row-style"};function Da(e,t,o,n,r,l){const a=d("CompletedAmountOverview"),u=d("OverviewChart"),i=d("HotRanking"),g=d("LearningRanking"),C=d("HotTag"),f=d("FamilyCompositionAnalysis"),p=d("GradeParentsBoundNum"),F=d("ClassBindingParentRanking"),y=d("ParentSupportWorkSituation");return h(),v("div",ga,[s(a,{dataSource:e.studyDashboardCompleteCountRef,dataSourceAvg:e.studyDashboardCompleteDailyRef},null,8,["dataSource","dataSourceAvg"]),s(u,{class:"overview-chart-style"}),_("div",ha,[s(i),s(g)]),_("div",va,[s(C),s(f)]),_("div",Ca,[s(p),s(F)]),_("div",ba,[s(y)])])}const Fa=$(ya,[["render",Da],["__scopeId","data-v-1914480b"]]);export{Fa as default};
